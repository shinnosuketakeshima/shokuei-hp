# プリレンダリング Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** React SPAをビルド時に13ルートのHTMLへプリレンダーし、JS非実行クローラー（Claude等）が全コンテンツを読めるようにする。

**Architecture:** Vite の2段ビルド（クライアント + SSR）後に Node.js スクリプトで `react-dom/server` の `renderToString` を使って各ルートのHTMLを生成し、`dist/` 内に `[route]/index.html` として保存。クライアント側は DOM の状態を見て `hydrateRoot` / `createRoot` を切り替える。

**Tech Stack:** React 19 + Vite 8 + react-router-dom 7 (StaticRouter) + react-helmet-async (SSRモード) + Node.js (build script)

**Spec:** `docs/superpowers/specs/2026-06-01-prerender-design.md`

---

### Task 1: vite.config.js に SSR 外部化設定を追加

**Files:**
- Modify: `vite.config.js`

SSR ビルド時に Firebase SDK をバンドルせず外部モジュールとして扱うよう設定する。これにより SSR ビルド中の Firebase 関連エラーを回避する。

- [ ] **Step 1: vite.config.js を編集**

`vite.config.js` の内容を以下に置き換える：

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssr: {
    external: ['firebase/app', 'firebase/firestore'],
  },
})
```

- [ ] **Step 2: 通常のクライアントビルドが壊れていないか確認**

Run: `npm run build`
Expected: ビルドが正常終了し `dist/` にファイルが生成される（既存の動作を変更していないことを確認）

- [ ] **Step 3: コミット**

```bash
git add vite.config.js
git commit -m "feat: vite.config.jsにSSR用Firebase外部化設定を追加"
```

---

### Task 2: SSR エントリーポイント `src/entry-server.jsx` を作成

**Files:**
- Create: `src/entry-server.jsx`

サーバー側で URL を受け取り、HTML 文字列と helmet メタデータを返す関数を提供する。`StaticRouter`（URL固定ルーター）と `HelmetProvider`（SSRコンテキスト）で App をラップする。

- [ ] **Step 1: src/entry-server.jsx を新規作成**

```jsx
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
```

- [ ] **Step 2: SSR ビルドが通るか確認**

Run: `npx vite build --ssr src/entry-server.jsx --outDir dist-ssr`
Expected: エラーなく `dist-ssr/entry-server.js` が生成される。コンソールに「built in XXXms」と表示される。

- [ ] **Step 3: SSR バンドルが Node.js から import できるか確認**

Run: `node -e "import('./dist-ssr/entry-server.js').then(m => console.log('OK:', typeof m.render))"`
Expected: `OK: function` と出力される。エラーが出る場合は、SSR非互換のモジュール（window参照など）がバンドルされている。

- [ ] **Step 4: 試しに1ルートをレンダーしてみる**

Run: `node -e "import('./dist-ssr/entry-server.js').then(m => { const r = m.render('/lab-takeshima'); console.log('html length:', r.html.length); console.log('first 200 chars:', r.html.slice(0,200)) })"`
Expected: `html length:` が数千以上、`first 200 chars:` に `<header` や `<section` などのHTMLタグが含まれる。

- [ ] **Step 5: コミット**

```bash
git add src/entry-server.jsx
git commit -m "feat: SSRエントリーポイント(entry-server.jsx)を追加"
```

---

### Task 3: プリレンダースクリプト `prerender.js` を作成

**Files:**
- Create: `prerender.js`

`dist-ssr/entry-server.js` から `render()` を import し、13ルートをループして `dist/` 内に HTML ファイルを書き出す。helmet が返す `<title>` と `<meta>` をテンプレートに注入する。

- [ ] **Step 1: prerender.js を新規作成（プロジェクトルート直下）**

```js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const ROUTES = [
  '/',
  '/lab-takeshima',
  '/lab-kamoshita',
  '/lab-kunii',
  '/lab-iimura',
  '/lab-kamiyama',
  '/lab-ishii',
  '/lab-komeichi',
  '/lab-nakaoka',
  '/lab-shibasaki',
  '/lab-yamazaki',
  '/lab-niikura',
  '/lab-okamoto',
]

async function main() {
  const { render } = await import('./dist-ssr/entry-server.js')
  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  )

  for (const route of ROUTES) {
    const { html: appHtml, helmet } = render(route)

    const titleTag = helmet?.title?.toString() ?? '<title>食物栄養学科 | 十文字学園女子大学</title>'
    const metaTags = helmet?.meta?.toString() ?? ''

    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, titleTag)
      .replace('</head>', `${metaTags}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outPath = route === '/'
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${route}/index.html`)

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, html)
    console.log(`✓ pre-rendered ${route}`)
  }

  console.log(`\nDone: ${ROUTES.length} routes pre-rendered.`)
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
```

- [ ] **Step 2: プリレンダーを手動実行**

Run: `node prerender.js`
Expected: `✓ pre-rendered /` から始まり、13行の成功メッセージと最後に `Done: 13 routes pre-rendered.` が出力される。エラーがあれば実行が止まる。

- [ ] **Step 3: 出力ファイルが13個生成されたか確認**

Read: `dist/index.html` の冒頭200文字を確認。`<title>` タグの後に `<div id="root">` の中に実コンテンツが入っているはず。

Read: `dist/lab-takeshima/index.html` を同様に確認。

- [ ] **Step 4: プリレンダー済みHTMLに実コンテンツが入っているか Grep で確認**

Run: Grep でラボページ固有の文字列を検索（例: `dist/lab-takeshima/index.html` 内に「竹嶋」または「ウイルス」が存在するか）。
Expected: マッチする。マッチしなければレンダリングが失敗している。

- [ ] **Step 5: コミット**

```bash
git add prerender.js
git commit -m "feat: 13ルート分のプリレンダースクリプト(prerender.js)を追加"
```

---

### Task 4: `src/main.jsx` でハイドレーション切り替えを実装

**Files:**
- Modify: `src/main.jsx`

プリレンダー済みページでは `hydrateRoot`、空の `<div id="root">` を持つページでは `createRoot` を使うよう切り替える。`hasChildNodes()` で判定する。

- [ ] **Step 1: src/main.jsx を以下に置き換える**

```jsx
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
```

- [ ] **Step 2: dev サーバーでクライアント側が壊れていないか確認**

Run: `npm run dev`
Expected: dev サーバーが立ち上がり、ブラウザで `http://localhost:5173/` を開くとホームページが通常通り表示される。コンソールに `hydration mismatch` のような警告が出ていないこと。

- [ ] **Step 3: dev サーバーを停止しコミット**

```bash
git add src/main.jsx
git commit -m "feat: main.jsxでhydrateRoot/createRoot切り替えを実装"
```

---

### Task 5: `package.json` の build スクリプトを3段階に更新

**Files:**
- Modify: `package.json`

`npm run build` 1回で「クライアントビルド → SSRビルド → プリレンダー」が走るようにする。

- [ ] **Step 1: package.json の scripts セクションを更新**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr && node prerender.js",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

- [ ] **Step 2: end-to-end 動作確認**

Run: `npm run build`
Expected:
1. クライアントビルド完了
2. SSRビルド完了（`dist-ssr/entry-server.js` 生成）
3. `✓ pre-rendered /` から始まり13行のプリレンダー成功ログ
4. `Done: 13 routes pre-rendered.`

- [ ] **Step 3: dist 内のプリレンダー出力を確認**

期待される dist 構造:
```
dist/
  index.html                     ← / プリレンダー済み
  lab-takeshima/index.html
  lab-kamoshita/index.html
  lab-kunii/index.html
  lab-iimura/index.html
  lab-kamiyama/index.html
  lab-ishii/index.html
  lab-komeichi/index.html
  lab-nakaoka/index.html
  lab-shibasaki/index.html
  lab-yamazaki/index.html
  lab-niikura/index.html
  lab-okamoto/index.html
  assets/...
```

Glob: `dist/lab-*/index.html` で12ファイルがマッチすることを確認。

- [ ] **Step 4: プリレンダーHTMLをブラウザで確認（preview サーバー）**

Run: `npm run preview`
Expected: `http://localhost:4173/lab-takeshima` を開くと、即座にラボページが表示される（JS無効でも文字が見える）。DevTools の「JavaScript を無効化」して再読込し、コンテンツが見えることを確認。

- [ ] **Step 5: preview サーバーを停止しコミット**

```bash
git add package.json
git commit -m "feat: buildスクリプトをクライアント+SSR+prerenderの3段構成に変更"
```

---

### Task 6: Firebase に deploy して本番環境で検証

**Files:** （コード変更なし）

実際にデプロイし、curl など JS を実行しない方法でプリレンダーHTMLが配信されることを確認する。

- [ ] **Step 1: Firebase へデプロイ**

Run: `npx firebase deploy`
Expected: `+ Deploy complete!` が表示される。

- [ ] **Step 2: 本番URLからプリレンダーHTMLを取得し確認**

Run: `Invoke-WebRequest -Uri "https://shokuei-hp.web.app/lab-takeshima" -UseBasicParsing | Select-Object -ExpandProperty Content | Out-File -FilePath check.html -Encoding utf8`

Read: `check.html` を開き、`<div id="root">` の直後にラボページのコンテンツ（「竹嶋」「ウイルス」等の文字）が含まれることを確認。

- [ ] **Step 3: 確認用ファイルを削除**

Run: `Remove-Item check.html`

- [ ] **Step 4: 完了**

デプロイは既にコミット不要のステップ。Task 5 でのコミットが最終コミットになる。

---

## 完了基準

- [ ] `npm run build` 1コマンドで dist/ 配下に13個のプリレンダー済み index.html が生成される
- [ ] 各プリレンダーHTMLの `<div id="root">` 内に実コンテンツが含まれる
- [ ] 通常ブラウザでクライアントJSロード後のハイドレーションが警告なく成功する
- [ ] dev サーバー（プリレンダーが存在しない状態）でも `createRoot` で正常動作する
- [ ] Firebase deploy 後、curl/Invoke-WebRequest でラボページの実コンテンツが取得できる
