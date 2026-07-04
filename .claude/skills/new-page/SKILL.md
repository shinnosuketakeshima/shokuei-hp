---
name: new-page
description: Use when the user asks to add a new page to shokuei-hp — a student/faculty column ("コラムを追加"), an event report ("レポートページを作って"), or a lab page ("◯◯研究室のページ"). Enforces the multi-place routing sync this repo requires.
---

# Add a new sub-page to shokuei-hp

## DO
- Create the component as plain `.jsx` under `src/components/`, styled via `src/index.css` classes (reuse `.lab-page` / `.lab-section` for lab pages).
- Update **all four places together** (see CLAUDE.md): `PAGE_META`, `SUB_PATHS`, `<Routes>` in `App.jsx`, and — **for lab pages only** — `Header.jsx` `LAB_CATEGORIES` + `Footer.jsx` `LAB_COLS` + a `LAB_STORIES` card in `Labs.jsx` (three lists, keep in sync).
- For columns/reports: add a `STATIC_NEWS` entry in `src/newsData.js` with the correct `type` so it appears in News/Columns listings.
- Source images: copy into `src/` or `src/assets/<topic>/` first — never import from `docs/`.
- Verify before finishing: `npm run dev` + `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/<path>` — expect 200; also confirm the homepage still renders.

## DON'T
- Don't create new CSS files or add Tailwind classes to non-Tailwind components.
- Don't use TypeScript, component subdirectories, or hash-based routes.
- Don't deploy — that is the `deploy` skill's job; stop after local verification.

## OUTPUT FORMAT
1. **Route added**: `/path` → `Component.jsx`
2. **Sync checklist**: PAGE_META ✅ / SUB_PATHS ✅ / Routes ✅ / (lab only) Header ✅ Footer ✅ Labs card ✅ / (column only) newsData ✅
3. **Verification**: local HTTP status for the new path and `/`
4. **Files changed**: list
