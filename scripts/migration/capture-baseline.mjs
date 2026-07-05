// 現行SPAのベースライン（head / JSON-LD / スクショ / main DOM構造）を取得する。
// 使い方: プレビューサーバー起動後に `node scripts/migration/capture-baseline.mjs [baseUrl] [outDir]`
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { ROUTES, routeSlug } from './routes.mjs';

const BASE_URL = process.argv[2] || 'http://localhost:4173';
const OUT_DIR = path.resolve(process.argv[3] || 'docs/migration-baseline');

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '375', width: 375, height: 812 },
];

for (const sub of ['head', 'jsonld', 'shots', 'dom']) {
  fs.mkdirSync(path.join(OUT_DIR, sub), { recursive: true });
}

// whileInView 系アニメーションを全て発火させてからトップへ戻す
async function triggerAllReveals(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += window.innerHeight * 0.7;
        window.scrollTo(0, y);
        if (y < document.documentElement.scrollHeight) setTimeout(step, 100);
        else resolve();
      };
      step();
    });
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);
}

async function captureHead(page) {
  return page.evaluate(() => {
    const items = [...document.head.querySelectorAll('title, meta, link')].map((el) => {
      const attrs = {};
      for (const a of el.attributes) attrs[a.name] = a.value;
      return { tag: el.tagName.toLowerCase(), text: el.tagName === 'TITLE' ? el.textContent : undefined, attrs };
    });
    return { title: document.title, items };
  });
}

function normalizeHead(head) {
  const keyed = head.items.map((it) => {
    const sortedAttrs = Object.fromEntries(Object.entries(it.attrs).sort(([a], [b]) => a.localeCompare(b)));
    return { ...it, attrs: sortedAttrs };
  });
  keyed.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  return { title: head.title, items: keyed };
}

async function captureJsonLd(page) {
  return page.evaluate(() => {
    return [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
      try {
        return JSON.parse(s.textContent);
      } catch {
        return { __parseError: s.textContent };
      }
    });
  });
}

async function captureDomOutline(page) {
  return page.evaluate(() => {
    const main = document.querySelector('main') || document.getElementById('root');
    if (!main) return '(no main)';
    const lines = [];
    const walk = (el, depth) => {
      if (depth > 8) return;
      const cls = el.className && typeof el.className === 'string' ? `.${el.className.trim().split(/\s+/).join('.')}` : '';
      const text = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join(' ')
        .slice(0, 60);
      lines.push(`${'  '.repeat(depth)}${el.tagName.toLowerCase()}${cls}${text ? ` | ${text}` : ''}`);
      for (const child of el.children) walk(child, depth + 1);
    };
    walk(main, 0);
    return lines.join('\n');
  });
}

const browser = await chromium.launch();
const failures = [];

for (const route of ROUTES) {
  const slug = routeSlug(route);
  try {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await page.goto(BASE_URL + route, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(1200); // hydration + helmet 反映待ち
      await triggerAllReveals(page);

      if (vp.name === '1440') {
        const head = normalizeHead(await captureHead(page));
        fs.writeFileSync(path.join(OUT_DIR, 'head', `${slug}.json`), JSON.stringify(head, null, 2));
        const jsonld = await captureJsonLd(page);
        fs.writeFileSync(path.join(OUT_DIR, 'jsonld', `${slug}.json`), JSON.stringify(jsonld, null, 2));
        const outline = await captureDomOutline(page);
        fs.writeFileSync(path.join(OUT_DIR, 'dom', `${slug}.txt`), outline);
      }

      await page.screenshot({ path: path.join(OUT_DIR, 'shots', `${slug}-${vp.name}.png`), fullPage: true });
      await page.close();
    }
    console.log(`ok  ${route}`);
  } catch (err) {
    failures.push({ route, error: String(err) });
    console.error(`NG  ${route}: ${err}`);
  }
}

await browser.close();

if (failures.length) {
  console.error(`\n${failures.length} route(s) failed`);
  process.exit(1);
}
console.log(`\nDone: ${ROUTES.length} routes → ${OUT_DIR}`);
