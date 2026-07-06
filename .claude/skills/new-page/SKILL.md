---
name: new-page
description: Use when the user asks to add a new page to shokuei-hp — a student/faculty column ("コラムを追加"), an event report ("レポートページを作って"), or a lab page ("◯◯研究室のページ"). New pages go on the Astro track (migration is being front-loaded); enforces the sync points that track requires.
---

# Add a new sub-page to shokuei-hp (Astro track)

The repo is mid-migration from React/Vite to Astro (see CLAUDE.md's "Astro migration" section). Current direction: **new pages are created Astro-only** — do not add them to the React SPA (`App.jsx`/`Header.jsx`/`Footer.jsx`/`Labs.jsx`). The live site (`dist/`, React) will not show the new page until the Astro cutover ships; say this explicitly in the output.

## DO
- Create the component as `.astro` under `src/components/` (e.g. `NewThing.astro`), styled via `src/index.css` classes — the same stylesheet the React stack uses (reuse `.lab-page` / `.lab-section` for lab pages).
- Create the route file `src/pages/<path>.astro`: wrap the component in `<BaseLayout>` (copy the two-line pattern from an existing file like `src/pages/kokushi-report.astro`).
- Add a `PAGE_META` entry (title/description/ogType) to `src/data/pageMeta.js`. `BaseLayout.astro` throws a build error for any pathname missing from `PAGE_META`, so this is the one mandatory sync point (it replaces the old 4-places React sync for Astro pages). Add a `keywordsMap` entry in the same file if the page needs specific keywords (otherwise `/lab-*` paths fall back to a generic string via `getKeywords()`).
- For lab pages: add the nav link to `Header.astro`'s `LAB_CATEGORIES` **and** `Footer.astro`'s `LAB_COLS` (the Astro copies only — see DON'T). Note there is no Astro homepage yet (no `src/pages/index.astro`), so there's no `Labs.jsx`-equivalent story-card list to update on this track.
- For columns/reports: add a `STATIC_NEWS` entry in `src/newsData.js` with the correct `type`. This file is shared, but the News/Columns *listing* pages (`News.jsx`, `Columns.jsx`) are still React-only — the entry won't be visible anywhere live until those are ported or the new page is manually linked from an existing live page.
- Source images: copy into `src/` or `src/assets/<topic>/` first — never import from `docs/`.
- Verify before finishing: `npx astro dev` and check the new path renders (title, JSON-LD, nav link if applicable). `npx astro check` is optional but cheap for catching type errors.

## DON'T
- Don't touch the React side for a new page: no edits to `App.jsx` (`PAGE_META`/`SUB_PATHS`/`<Routes>`), `Header.jsx`, `Footer.jsx`, or `Labs.jsx`. Keeping two copies in sync is exactly what the Astro-only direction avoids.
- Don't create new CSS files or add Tailwind classes to non-Tailwind components.
- Don't use component subdirectories.
- Don't build/deploy or repoint `firebase.json` at `dist-astro/` — cutover is a separate, explicit decision, not part of adding a page.

## OUTPUT FORMAT
1. **Route added**: `/path` → `src/pages/path.astro` (component: `Component.astro`)
2. **Sync checklist**: pageMeta ✅ / (lab only) Header.astro ✅ Footer.astro ✅ / (column only) newsData ✅
3. **Verification**: `astro dev` render check for the new path
4. **Live-site note**: this page is Astro-only for now — it is not reachable on the deployed site (`dist/`) or its nav until cutover
5. **Files changed**: list
