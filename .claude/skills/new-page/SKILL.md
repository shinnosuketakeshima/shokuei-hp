---
name: new-page
description: Use when the user asks to add a new page to shokuei-hp — a student/faculty column ("コラムを追加"), an event report ("レポートページを作って"), or a lab page ("◯◯研究室のページ"). New pages go on the Astro track, which is now the live site.
---

# Add a new sub-page to shokuei-hp (Astro track)

As of the 2026-07-06 cutover, **Astro (`dist-astro/`) is the live site** — all 35 routes are ported and `firebase.json` deploys `dist-astro/`. The React/Vite source (`App.jsx`, `Header.jsx`, `Footer.jsx`, `Labs.jsx`, `.jsx` components) still exists in the repo but is **no longer built or deployed** — do not add new pages there.

## DO
- Create the component as `.astro` under `src/components/` (e.g. `NewThing.astro`), styled via `src/index.css` classes (reuse `.lab-page` / `.lab-section` for lab pages).
- Create the route file `src/pages/<path>.astro`: wrap the component in `<BaseLayout>` (copy the two-line pattern from an existing file like `src/pages/kokushi-report.astro`).
- Add a `PAGE_META` entry (title/description/ogType) to `src/data/pageMeta.js`. `BaseLayout.astro` throws a build error for any pathname missing from `PAGE_META`. Add a `keywordsMap` entry in the same file if the page needs specific keywords.
- For lab pages: add the story card to `Labs.astro`'s `LAB_STORIES`, and the nav link to `Header.astro`'s `LAB_CATEGORIES` **and** `Footer.astro`'s `LAB_COLS` — three separate lists that must stay in sync (same requirement the old React `Labs.jsx`/`Header.jsx`/`Footer.jsx` had).
- For columns/reports: add a `STATIC_NEWS` entry in `src/newsData.js` with the correct `type`. This now shows up live on the homepage News section, `/news` (`NewsArchive.astro`), and `/columns` (`Columns.astro`) after the next build/deploy.
- Source images: copy into `src/` or `src/assets/<topic>/` first — never import from `docs/`.
- Verify before finishing: `npx astro dev` and check the new path renders (title, JSON-LD, nav link if applicable). Run `npx astro check` — must be 0 errors.

## DON'T
- Don't touch the React side (`App.jsx`, `Header.jsx`, `Footer.jsx`, `Labs.jsx`, `.jsx` components) for a new page — it's dead code as far as the live site is concerned; edits there have no effect on production.
- Don't create new CSS files or add Tailwind classes to non-Tailwind components.
- Don't use component subdirectories.
- Don't deploy as part of this skill — that's the separate `deploy` skill, run only when the user asks.

## OUTPUT FORMAT
1. **Route added**: `/path` → `src/pages/path.astro` (component: `Component.astro`)
2. **Sync checklist**: pageMeta ✅ / (lab only) Labs.astro ✅ Header.astro ✅ Footer.astro ✅ / (column only) newsData ✅
3. **Verification**: `astro check` (0 errors) + `astro dev` render check for the new path
4. **Live-site note**: this page is not yet on the deployed site — it will appear after the next `deploy` skill run
5. **Files changed**: list
