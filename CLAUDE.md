# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # ESLint (flat config, React Hooks + React Refresh rules)
```

Deploy to Firebase Hosting (requires Firebase CLI):
```bash
npx firebase deploy   # firebase CLI may not be on PATH; use npx
```

`firebase deploy` deploys both Firestore rules (`firestore.rules`) and Hosting (`dist/`). Run `npm run build` first.

## Architecture

**shokuei-hp** is a React 19 + Vite 8 SPA for Jumonji University's Food and Nutrition Department (食物栄養学科). It is a non-official informational/media site deployed on Firebase Hosting with Firestore for dynamic news content.

### Routing

`BrowserRouter` is in `src/main.jsx`; `Routes`/`Route` are in `src/App.jsx`. Firebase Hosting rewrites all paths to `index.html`. Do **not** revert to hash-based routing.

The route list, page metadata (`PAGE_META`), and sub-page list (`SUB_PATHS`) all live in `App.jsx` — read them there rather than relying on any list here.

- `/event-0531` maps to `EventSpecial0525.jsx` — the date mismatch is intentional.
- `Header` and `Footer` render on every route. The `data-reveal` IntersectionObserver is set up in `App.jsx` and is **skipped** for sub-pages (all routes except `/`).

### Adding a new sub-page

**Four places** must all be updated together for any new route:

1. **`App.jsx` `PAGE_META`** — add `'/path': { title, desc, ogType }`.
2. **`App.jsx` `SUB_PATHS`** — add `'/path'` (skips scroll-reveal on sub-pages).
3. **`App.jsx` `<Routes>`** — add `<Route path="/path" element={<Component />} />`.
4. **`Header.jsx` `LAB_CATEGORIES`** and **`Footer.jsx` `LAB_COLS`** — add the lab link to the appropriate category column in both nav lists (these are separate from `Labs.jsx` and must be kept manually in sync).

For **lab pages**, also add a story card to `Labs.jsx` (`LAB_STORIES` array) — `LAB_STORIES`, `LAB_CATEGORIES`, and `LAB_COLS` are three separate lists that must stay in sync. For **content pages** (student columns, event pages, etc.), skip the Labs and Header/Footer steps.

**Dual-mode homepage sections**: `Features`, `Qualifications`, `NationalExamSupport`, `StudentVoices`, `CampusLife`, and `FAQ` each accept a `summary` prop. On the homepage they render with `summary={true}` (condensed view); their dedicated routes render the same component without the prop for the full view. When editing these components, maintain both modes.

**Career is split into two components**: `Career.jsx` is homepage-only (with `summary={true}`); `CareerPage.jsx` is the full page at `/career`.

**Suspended/unused components**: `LabIwamoto.jsx`, `StudentColumn2.jsx`, and `HeroFeatures.jsx` exist but are not routed/rendered. To re-enable a page, add it back to `PAGE_META`, `SUB_PATHS`, `<Routes>`, and imports in `App.jsx` (plus the Labs card and nav lists for lab pages).

### SEO / Meta

`SEO.jsx` (wraps `react-helmet-async`) is rendered at the top of `App.jsx` and injects title, description, Open Graph, canonical, hreflang, and JSON-LD on every route. Metadata comes from `PAGE_META`; structured JSON-LD (`customJsonLd`) is also built in `App.jsx`: `/` → `CollegeOrUniversity`, `/lab-*` → `ProfilePage`/`Person`, paths containing `column` or `report` → `Article`. `public/robots.txt` and `public/sitemap.xml` are static.

### News: Firestore + static items

`News.jsx` merges two sources, re-sorted by date descending:

1. **Firestore** — `news` collection (falls back to an unordered query if the composite index is missing).
2. **`STATIC_NEWS`** in `src/newsData.js` — editorial/blog articles with internal `href` links. To add/remove articles, edit `src/newsData.js`.

Firestore `date` values can be a `Timestamp`, `Date`, or string — `formatNewsDate()` normalises all three to `YYYY.MM.DD`. The `type` field maps to a `news-tag--{type}` CSS class; valid types: `info`, `news`, `event`, `report`, `voice`, `column`, `sensei`. To suppress an item, add its title pattern to `isNewsItemTemporarilyHidden()` in `News.jsx`.

`NewsArchive` (`/news`) and `Columns` (`/columns`) both build on `src/newsData.js`; `Columns` filters `STATIC_NEWS` by `type === 'column'`.

### Firebase

- Config is hardcoded in `src/firebase.js` — no `.env` needed (public read-only Firebase project).
- Firebase project ID: `shokuei-hp` (`.firebaserc`). The `news` collection is publicly readable (`firestore.rules`).

### Styling

- **`src/index.css` is the only stylesheet**. Do not create new CSS files. `App.css` is intentionally empty.
- Design-token system via CSS custom properties: `--cream`, `--terracotta`, `--forest`, `--charcoal`, `--stone`, etc. Use `clamp()` for fluid spacing.
- Tailwind CSS 4 is a dependency, but only a few homepage-above-fold components (`AudienceGuide`, `FeatureSpotlight`, …) use Tailwind utilities. All other components use `index.css` only — extend `index.css` for new styles rather than adding Tailwind to existing components.
- Fonts: Noto Serif JP / Noto Sans JP via `<link>` in `index.html`. Use `var(--font-serif)` / `var(--font-sans)`.

### Images and working materials

- Static source images live in `src/` (root) or `src/assets/<topic>/`. Find current usages by grepping for the filename.
- Faculty headshots in `src/faculty/` (`{surname-romaji}.jpg`) are **reserved assets — not imported by any active component**. Also do not import: `src/jisshu-sei.jpg`, `src/eiyo-kagaku.png`, `src/assets/hero.png` (orphaned/placeholders).
- `docs/` is a non-deployed working directory (reference images, design docs, PDFs). Do not import from `docs/` in application code — copy assets to `src/` first.
- `src/koudai_project.md` is a plain-text content source for `KoudaiProject.jsx`, **not** a module — do not import it.

### Component conventions

- All components are plain `.jsx` under `src/components/`. No TypeScript, no component subdirectories, no component-specific CSS files.
- Lab pages share the `.lab-page` / `.lab-section` CSS classes. `LAB_STORIES` card entries need `storyTitle`, `hook`, `category` (`regional` | `science` | `welfare`), `href`, `isExternal`.
- External links: `target="_blank" rel="noopener noreferrer"`. Internal links: `<Link to="...">` from `react-router-dom`.
- Scroll-reveal: add `data-reveal` (optionally `data-reveal-delay="1"–"6"`). Works only on the homepage.
- Animations: Framer Motion (`motion.*`, `AnimatePresence`) rather than raw CSS transitions. Icons: `lucide-react`.

## Language

All UI text is in Japanese. Follow the existing convention: English identifiers, Japanese string literals. No comments unless the intent is non-obvious.
