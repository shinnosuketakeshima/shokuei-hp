# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx astro dev      # Start Astro dev server with HMR
npx astro build    # Production build → dist-astro/
npx astro preview  # Preview the production build locally
npx astro check    # Type-check .astro files (must be 0 errors before deploying)
```

Deploy to Firebase Hosting (requires Firebase CLI):
```bash
npx firebase deploy   # firebase CLI may not be on PATH; use npx
```

`firebase deploy` deploys both Firestore rules (`firestore.rules`) and Hosting (`dist-astro/`). Run `npx astro build` first. See the `deploy` skill for the full flow.

## Architecture

**shokuei-hp** is an Astro static site for Jumonji University's Food and Nutrition Department (食物栄養学科). It is a non-official informational/media site deployed on Firebase Hosting with Firestore for build-time news content.

**As of the 2026-07-06 cutover, Astro is the live site** (`dist-astro/`, deployed via `firebase.json`'s `hosting.public`). The repo also still contains the original React 19 + Vite 8 SPA source (`App.jsx`, `Header.jsx`, `Footer.jsx`, `Labs.jsx`, `.jsx` components, `npm run build` → `dist/`) — **this is legacy, unbuilt, undeployed source kept for reference only**. Do not add new pages or features there; see [Legacy React source](#legacy-react-source-not-deployed) below if you need to understand or clean it up.

### Routing

Astro's file-based routing lives in `src/pages/*.astro` (one file per route, e.g. `src/pages/kokushi-report.astro`). Each page wraps a matching `src/components/*.astro` component in `src/layouts/BaseLayout.astro`. All 35 routes are ported; there is no remaining React-only route.

`astro.config.mjs`: `outDir: './dist-astro'`, `build.format: 'file'`, `trailingSlash: 'never'`. `firebase.json` hosting has `"public": "dist-astro"` and `"cleanUrls": true` with **no rewrite rule** — Firebase resolves `/features` → `features.html` natively via cleanUrls, so don't reintroduce a catch-all `rewrites: [{ source: "**", destination: "/index.html" }]` (that was the old SPA's fallback and would break every non-home route).

- `/event-0531` maps to `EventSpecial0525.astro` — the date mismatch is intentional.
- `Header.astro` and `Footer.astro` render on every route via `BaseLayout.astro`. Scroll-reveal (`src/scripts/reveal.js`) runs on every page (gated on `html.js`, respects `prefers-reduced-motion`).
- `tsconfig.json` extends `astro/tsconfigs/base` and exists for `astro check`, not for a general TypeScript migration — the codebase is still JS/JSX in `.astro` frontmatter and script blocks otherwise.
- `eslint.config.js` only lints `**/*.{js,jsx}` — `.astro` files are not covered by `npm run lint` (which itself only applies to the legacy React source).

### Adding a new sub-page

1. Create the component as `.astro` under `src/components/`, styled via `src/index.css` classes (reuse `.lab-page` / `.lab-section` for lab pages).
2. Create `src/pages/<path>.astro`: wrap the component in `<BaseLayout>`.
3. Add a `PAGE_META` entry (title/description/ogType) to `src/data/pageMeta.js`. `BaseLayout.astro` **throws a build error** for any pathname missing from `PAGE_META` — this is the one mandatory sync point. Add a `keywordsMap` entry in the same file if the page needs specific keywords (otherwise `/lab-*` paths fall back to a generic string via `getKeywords()`).
4. For **lab pages**: add the story card to `Labs.astro`'s `LAB_STORIES`, and the nav link to `Header.astro`'s `LAB_CATEGORIES` **and** `Footer.astro`'s `LAB_COLS` — three separate lists that must stay in sync.
5. For **content pages** (student columns, event pages, etc.): skip the Labs/Header/Footer step. Add a `STATIC_NEWS` entry in `src/newsData.js` if it should appear in the News/Columns listings.

See the `new-page` skill for the full checklist and output format.

**Dual-mode homepage sections**: `Features`, `Qualifications`, `NationalExamSupport`, `StudentVoices`, `CampusLife`, and `FAQ` each accept a `summary` prop. On the homepage (`src/pages/index.astro`) they render with `summary={true}` (condensed view); their dedicated `/xxx` routes render the same component without the prop for the full view. When editing these components, maintain both modes.

**Career is split into two components**: `Career.astro` is homepage-only (`summary={true}`, also embedded at the top of `CareerPage.astro`); `CareerPage.astro` is the full page at `/career` (adds numeric breakdown, 4-year support timeline, etc.).

**Homepage (`/`)**: `src/pages/index.astro` assembles 14 section components (`Hero`, `AudienceGuide`, `FeatureSpotlight`, `CategoryBanners`, `News`, `StatsBar`, `Features`, `Labs`, `Qualifications`, `NationalExamSupport`, `SNSSection`, `Career`, `StudentVoices`, `CampusLife`, `FAQ`). `Labs` (category filter), `CampusLife` (4-year roadmap tabs), `FAQ` (accordion), `Columns`/`NewsArchive` (category filter), and `LivingAlone` (dorm/apartment cost simulator) each use vanilla `<script>` blocks (`querySelectorAll`/`classList`/`textContent`) for interactivity — no React, no client-side framework runtime anywhere in the shell.

### SEO / Meta

`BaseLayout.astro` looks up `src/data/pageMeta.js`'s `PAGE_META[pathname]` and injects title, description, Open Graph, canonical, hreflang, and JSON-LD on every route (throws a build error if the route is unregistered). `src/lib/seo.js` builds the structured JSON-LD: `/` → `CollegeOrUniversity`, `/lab-*` → `ProfilePage`/`Person`, paths containing `column` or `report` → `Article`. `public/robots.txt` and `public/sitemap.xml` are static (Astro's `@astrojs/sitemap` integration also generates `sitemap-index.xml`/`sitemap-0.xml` alongside it — both exist in `dist-astro/`, not a conflict).

### News: Firestore + static items

`News.astro` (homepage) and `NewsArchive.astro` (`/news`) both fetch **Firestore at Astro build time** (top-level `await getDocs()` in frontmatter — `news` collection, falls back to an unordered query if the composite index is missing) and merge with `STATIC_NEWS` from `src/newsData.js`, re-sorted by date descending. This is a deliberate static-site tradeoff: **new Firestore articles only appear after the next `astro build`/deploy, not immediately** on page load.

Firestore `date` values can be a `Timestamp`, `Date`, or string — `formatNewsDate()` normalises all three to `YYYY.MM.DD`. The `type` field maps to a `news-tag--{type}` CSS class; valid types: `info`, `news`, `event`, `report`, `voice`, `column`, `sensei`.

`NewsArchive.astro` (`/news`) and `Columns.astro` (`/columns`) both build on `src/newsData.js`; `Columns` filters `STATIC_NEWS` by `type === 'column'`. Both have a category-filter UI driven by vanilla `<script>` (toggle `display`/`is-active` class by `data-*` attributes), not client-side React state.

### Firebase

- Config is hardcoded in `src/firebase.js` — no `.env` needed (public read-only Firebase project).
- Firebase project ID: `shokuei-hp` (`.firebaserc`). The `news` collection is publicly readable (`firestore.rules`).

### Styling

- **`src/index.css` is the only stylesheet**, shared by both the Astro site and the legacy React source. Do not create new CSS files.
- Design-token system via CSS custom properties: `--cream`, `--terracotta`, `--forest`, `--charcoal`, `--stone`, etc. Use `clamp()` for fluid spacing.
- Fonts: Noto Serif JP / Noto Sans JP via `<link>` in `BaseLayout.astro`. Use `var(--font-serif)` / `var(--font-sans)`.
- Scroll-reveal: add `data-reveal` (optionally `data-reveal="left"|"right"|"scale"|"fade"`, and `style="--reveal-delay: 0.1s"` for stagger). Driven by `src/scripts/reveal.js`'s `IntersectionObserver`, gated on `html.js`.

### Images and working materials

- Static source images live in `src/` (root) or `src/assets/<topic>/`. Find current usages by grepping for the filename.
- `docs/` is a non-deployed working directory (reference images, design docs, PDFs). Do not import from `docs/` in application code — copy assets to `src/` first.

### Component conventions

- Astro components live under `src/components/*.astro`, pages under `src/pages/*.astro`. No component subdirectories, no component-specific CSS files — except `src/components/quiz/`, which groups the reusable `QuizEngine` and any future quiz-related components together.
- Lab pages share the `.lab-page` / `.lab-section` CSS classes. `LAB_STORIES` card entries (in `Labs.astro`) need `storyTitle`, `hook`, `category` (`regional` | `science` | `welfare`), `href`, `isExternal`.
- External links: `target="_blank" rel="noopener noreferrer"`. Internal links: plain `<a href="...">` (no client-side router).
- Icons: `@lucide/astro` (not `lucide-react`).
- Interactivity (filters, tabs, accordions, simulators): vanilla `<script>` blocks using `querySelectorAll`/`classList.toggle`/`textContent`, gated with TypeScript element generics (`querySelectorAll<HTMLElement>(...)`) to satisfy `astro check`.

## Legacy React source (not deployed)

The pre-Astro React 19 + Vite 8 SPA source still exists (`src/main.jsx`, `src/App.jsx`, `.jsx` components, `npm run dev`/`build`/`preview`/`lint`) but **is not built, deployed, or reachable in production**. It's kept for reference during the migration tail (comparing old vs. new behavior) and hasn't been deleted yet. Do not extend it — all new work targets the `.astro` files above. If asked to clean up dead code, confirm with the user before deleting the `.jsx` source wholesale, since it may still be useful as a reference until the team is fully confident in the Astro build.

## Migration history

`scripts/migration/routes.mjs` lists all 35 routes; `scripts/migration/capture-baseline.mjs` captured pre-migration `head`/JSON-LD/DOM snapshots into `docs/migration-baseline/` from the old React SPA, used to diff-verify each Astro page during the migration. Useful if investigating a discrepancy between current Astro output and the site's pre-cutover behavior.

## Language

All UI text is in Japanese. Follow the existing convention: English identifiers, Japanese string literals. No comments unless the intent is non-obvious.
