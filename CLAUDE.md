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

Routing uses `react-router-dom` `BrowserRouter` (in `src/main.jsx`) + `Routes`/`Route` (in `src/App.jsx`). Firebase Hosting rewrites all paths to `index.html`. Do **not** revert to hash-based routing.

| Path | Component |
|---|---|
| `/` | Homepage — all sections stacked |
| `/lab-takeshima` | `LabTakeshima` |
| `/lab-kamoshita` | `LabKamoshita` |
| `/lab-kunii` | `LabKunii` |
| `/lab-iimura` | `LabIimura` |
| `/lab-kamiyama` | `LabKamiyama` |
| `/lab-ishii` | `LabIshii` |
| `/lab-komeichi` | `LabKomeichi` |
| `/lab-nakaoka` | `LabNakaoka` |
| `/lab-shibasaki` | `LabShibasaki` |
| `/lab-yamazaki` | `LabYamazaki` |
| `/lab-niikura` | `LabNiikura` |
| `/lab-okamoto` | `LabOkamoto` |
| `/koudai-project` | `KoudaiProject` |
| `/kokushi-report` | `KokushiReport` |
| `/student-column-1` | `StudentColumn1` |
| `/event-0531` | `EventSpecial0525` |
| `/student-column-3` | `StudentColumn3` |
| `/lab-kamiyama-report` | `LabKamiyamaReport` |
| `/lab-takeshima-column` | `LabTakeshimaColumn` |
| `/eiyo-app-report` | `EiyoAppReport` |
| `/news` | `NewsArchive` |
| `/features` | `Features` |
| `/qualifications` | `Qualifications` |
| `/support` | `NationalExamSupport` |
| `/career` | `CareerPage` |
| `/campus-life` | `CampusLife` |
| `/voices` | `StudentVoices` |
| `/faq` | `FAQ` |
| `/sports-nutrition` | `SportNutritionPage` |

**Note:** `/event-0531` maps to `EventSpecial0525.jsx` — the date mismatch is intentional.

`Header` and `Footer` render on every route. The `data-reveal` IntersectionObserver is set up in `App.jsx` and re-initialised on each route change; it is **skipped** for sub-pages (all routes except `/`).

### SEO / Meta

`SEO.jsx` (wraps `react-helmet-async`) is rendered at the top of `App.jsx` and injects `<title>`, `<meta name="description">`, Open Graph tags, canonical URL, hreflang, and JSON-LD structured data on every route. Page metadata comes from the `PAGE_META` map in `App.jsx`; structured JSON-LD (`customJsonLd`) is also built in `App.jsx` and passed to `SEO.jsx`:

- `/` → `CollegeOrUniversity` with full address/geo
- `/lab-*` → `ProfilePage` wrapping a `Person`
- paths containing `column` or `report` → `Article`

`public/robots.txt` and `public/sitemap.xml` are static SEO files deployed with the build.

### Homepage section render order

`Hero` → `CategoryBanners` → `News` (`#news`) → `StatsBar` → `Features` (`#features`) → `Labs` (`#labs`) → `Qualifications` (`#qualifications`) → `NationalExamSupport` (`#support`) → `SNSSection` → `Career` (`#career`) → `StudentVoices` (`#voices`) → `CampusLife` (`#campus-life`) → `Footer` (`#contact`)

### Adding a new sub-page

**Four places** must all be updated together for any new route:

1. **`App.jsx` `PAGE_META`** — add `'/path': { title, desc, ogType }`.
2. **`App.jsx` `SUB_PATHS`** — add `'/path'` (skips scroll-reveal on sub-pages).
3. **`App.jsx` `<Routes>`** — add `<Route path="/path" element={<Component />} />`.
4. **`Header.jsx` `LAB_CATEGORIES`** and **`Footer.jsx` `LAB_COLS`** — add the lab link to the appropriate category column in both nav lists (these are separate from `Labs.jsx` and must be kept manually in sync).

For **lab pages**, also update **`Labs.jsx`** (`LAB_STORIES` array) to add the story card.

For **content pages** (student columns, event pages, etc.), skip the Labs and Header/Footer steps.

**Dual-mode homepage sections**: `Features`, `Qualifications`, `NationalExamSupport`, `StudentVoices`, `CampusLife`, and `FAQ` each accept a `summary` prop. On the homepage they render with `summary={true}` (condensed/teaser view); their corresponding routes (`FAQ` also at `/faq`) render the same component without the prop for the full expanded view. When editing these components, maintain both modes.

**Career is split into two components**: `Career.jsx` is used only on the homepage (with `summary={true}`). `CareerPage.jsx` is the dedicated full-page component rendered at `/career`.

**Suspended pages**: `LabIwamoto.jsx` and `StudentColumn2.jsx` exist but have no active routes. To re-enable, add back to `PAGE_META`, `SUB_PATHS`, `<Routes>`, and import in `App.jsx`. For `LabIwamoto`, also re-add its card to `Labs.jsx` and the nav lists.

**Report/archive pages with routes but no Labs card**: `LabKamiyamaReport` (`/lab-kamiyama-report`) and `NewsArchive` (`/news`) have active routes but are not in the Labs story grid — they are linked from within other content.

### News: Firestore + static items

`News.jsx` merges two sources:
1. **Firestore** — `news` collection. Falls back to unordered query if the composite index is missing.
2. **`STATIC_NEWS` array** (in `News.jsx`) — editorial/blog-style articles with internal `href` links.

Both sources are merged and re-sorted by date descending before render. Firestore `date` values can be a `Timestamp`, a `Date`, or a string — `formatNewsDate()` normalises all three to `YYYY.MM.DD`. The `type` field maps to a `news-tag--{type}` CSS class; valid types are `info`, `news`, `event`, `report`, `voice`, `column`, `sensei`. To suppress an item, add its title pattern to `isNewsItemTemporarilyHidden()` in `News.jsx`.

`NewsArchive` (`/news`) shares `STATIC_NEWS`, `newsDateMillis`, and `formatNewsDate` from `src/newsData.js`. To add/remove articles, edit `src/newsData.js`.

### Firestore / Firebase

- Config is hardcoded in `src/firebase.js` — no `.env` needed (public read-only Firebase project).
- Firebase project ID: `shokuei-hp` (`.firebaserc`).
- The `news` collection is publicly readable (`firestore.rules`).

### Styling

- **`src/index.css` is the only stylesheet** (~1900 lines). Do not create new CSS files.
- Design-token system via CSS custom properties: `--cream`, `--terracotta`, `--forest`, `--charcoal`, `--stone`, etc. Use `clamp()` for fluid spacing.
- Tailwind CSS 4 is a listed dependency but **completely unused** — extend `index.css` instead.
- Google Fonts (Noto Serif JP, Noto Sans JP) load via `<link>` in `index.html`. Use `var(--font-serif)` / `var(--font-sans)`.

### Images

Static source images live in `src/` (root) or `src/assets/<topic>/`. Compiled names (with content hashes) appear in `dist/assets/`.

| File | Used by |
|---|---|
| `src/top.jpg` | `Hero.jsx` |
| `src/university_kousha.jpg` | `CampusLife.jsx` |
| `src/tairyou.png` | `CampusLife.jsx` |
| `src/kuwanoha.jpg` | `CampusLife.jsx` |
| `src/kokushi.png` | `CampusLife.jsx` |
| `src/cheese-camembert.jpg` | `StudentColumn3.jsx` |
| `src/cheese-seminar-lecture.jpg` | `StudentColumn3.jsx` |
| `src/cheese-tasting.jpg` | `StudentColumn3.jsx` |
| `src/assets/eiyo-app/*.{jpg,png}` | `EiyoAppReport.jsx` |
| `src/assets/kamiyama-sa/*.jpg` | `LabKamiyamaReport.jsx` |

Faculty headshots live in `src/faculty/` as `{surname-romaji}.jpg`. They are **not currently imported** by any active component — they are reserved assets for future use.

The following files in `src/` are also unused — do not import them:
- `src/jisshu-sei.jpg`, `src/eiyo-kagaku.png` — reserved/orphaned images
- `src/assets/hero.png` — unused placeholder

### Working materials

`docs/` is a non-deployed working directory for reference images, design documents, source PDFs, and draft files. Do not import from `docs/` in application code — copy assets to `src/` first.

`src/koudai_project.md` is a plain-text content source for `KoudaiProject.jsx`. It is **not** a component or module — do not import it.

### Labs section

`Labs.jsx` renders a story card grid (`LAB_STORIES` array, currently 12 active labs). Each entry requires:

```js
{
  storyTitle: '...',       // card headline
  hook: '...',             // one-line descriptor shown on the card
  category: 'regional' | 'science' | 'welfare',
  href: '/lab-xxx',        // or full URL for external
  isExternal: false,       // true → <a target="_blank">, false → <Link>
}
```

**Suspended lab** (`LabIwamoto`): no card in `LAB_STORIES`.

When adding a new lab card here, also add it to the matching category column in **`Header.jsx` `LAB_CATEGORIES`** and **`Footer.jsx` `LAB_COLS`** — these three lists must stay in sync.

Individual lab **pages** are separate full-page components (`src/components/LabXxx.jsx`) that use the shared `.lab-page` / `.lab-section` CSS classes. They do not import faculty photos.

`HeroFeatures.jsx` exists in `src/components/` but is not rendered anywhere.

### Component Conventions

- All components are plain `.jsx` under `src/components/`. No TypeScript, no component subdirectories, no component-specific CSS files.
- External links: `target="_blank" rel="noopener noreferrer"`. Internal path links: use `<Link to="...">` from `react-router-dom`.
- Scroll-reveal: add `data-reveal` (and optionally `data-reveal-delay="1"–"6"`) to animate elements on scroll. Works only on the homepage.
- Framer Motion is used for animations. Use `motion.*` variants and `AnimatePresence` rather than raw CSS transitions for new animated UI.
- Icons: `lucide-react` (e.g. `import { ArrowRight } from 'lucide-react'`).
- `App.css` is intentionally empty — all styles live in `src/index.css`.

## Language

All UI text is in Japanese. Follow the existing convention: English identifiers, Japanese string literals. No comments unless the intent is non-obvious.
