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

`firebase deploy` deploys both Firestore rules (`firestore.rules`) and Hosting (`dist/`). There are no separate deploy targets to specify in practice.

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
| `/lab-iwamoto` | `LabIwamoto` |
| `/lab-okamoto` | `LabOkamoto` |
| `/koudai-project` | `KoudaiProject` |
| `/kokushi-report` | `KokushiReport` |
| `/student-column-1` | `StudentColumn1` |
| `/student-column-2` | `StudentColumn2` |
| `/event-0525` | `EventSpecial0525` |
| `/student-column-3` | `StudentColumn3` |

`Header` and `Footer` render on every route. The `data-reveal` IntersectionObserver is set up in `App.jsx` and re-initialised on each route change; it is **skipped** for sub-pages (all routes except `/`).

Dynamic `<title>` and `<meta name="description">` are updated per route in `App.jsx` via the `PAGE_META` map.

In-page scroll nav links in `Header.jsx` use `href="/#section-id"` so they work from any sub-page.

### Homepage section render order

The homepage `/` stacks sections in this order with these `id` attributes (used by nav `href="/#id"` links):

`Hero` → `News` (`#news`) → `StatsBar` → `Features` (`#features`) → `Labs` (`#labs`) → `Qualifications` (`#qualifications`) → `NationalExamSupport` (`#support`) → `SNSSection` → `Career` (`#career`) → `StudentVoices` (`#voices`) → `CampusLife` (`#campus-life`) → `Footer` (`#contact`)

### Adding a new sub-page

Three places in `App.jsx` must all be updated together for any new route:

1. **`PAGE_META`** — add a `'/path': { title, desc }` entry.
2. **`SUB_PATHS`** — add `'/path'` to the array (skips scroll-reveal on sub-pages).
3. **`<Routes>`** — add `<Route path="/path" element={<Component />} />`.

For **lab pages**, also update **`Labs.jsx`** (`LABS` array) to add the card, and create `src/components/LabXxx.jsx` using the `.lab-page` / `.lab-section` CSS classes.

For **content pages** (student columns, event pages, etc.), create the component directly and skip the Labs step.

### News: Firestore + static dummy items

`News.jsx` merges two sources:
1. **Firestore** — `news` collection. Falls back to unordered query if the composite index is missing.
2. **`DUMMY_NEWS` array** (static, in `News.jsx`) — editorial/blog-style articles with internal `href` links (e.g. `/student-column-3`).

Both sources are merged and re-sorted by date descending (`newsDateMillis()`) before render. Firestore `date` values can be a `Timestamp`, a `Date`, or a string — `formatNewsDate()` normalises all three to `YYYY.MM.DD`. The `type` field maps to a `news-tag--{type}` CSS class; valid types are `info`, `news`, `event`, `report`, `voice`, `column`, `sensei`. To temporarily suppress a specific item from both sources, add its title pattern to `isNewsItemTemporarilyHidden()` in `News.jsx`.

### Firestore / Firebase

- Config is hardcoded in `src/firebase.js` — no `.env` needed (public read-only Firebase project).
- Firebase project ID: `shokuei-hp` (`.firebaserc`).
- The `news` collection is publicly readable (`firestore.rules`).

### Styling

- `src/index.css` (~1900 lines) is the single stylesheet. It defines a design-token system via CSS custom properties (`--cream`, `--terracotta`, `--forest`, `--charcoal`, etc.) and drives all layout with those tokens plus `clamp()` for fluid spacing.
- Tailwind CSS 4 is a listed dependency but effectively unused — do not introduce Tailwind utilities; extend `index.css` instead.
- Google Fonts (Noto Serif JP, Noto Sans JP) load via `<link>` in `index.html`. Use `var(--font-serif)` / `var(--font-sans)`.
- Stats bar (`StatsBar`) uses an off-white background (`#FAF8F5`), not the charcoal dark theme — keep this distinction when editing that section.

### Images

Static images live directly in `src/` and are imported by the components that use them:

| File | Used by |
|---|---|
| `src/top.jpg` | `Hero.jsx` (background) |
| `src/university_kousha.jpg` | `CampusLife.jsx` |
| `src/tairyou.png` | `CampusLife.jsx` |
| `src/kuwanoha.jpg` | `CampusLife.jsx` |
| `src/kokushi.png` | `CampusLife.jsx` |

Faculty headshots live in `src/faculty/` as `{surname-romaji}.jpg` (e.g. `takeshima.jpg`) and are imported in `Labs.jsx` for the lab cards. Add a new file there when adding a new lab entry.

### Labs section

`Labs.jsx` renders a card grid (`.labs-grid-new` / `.lab-card-new`) for all 12 labs. Each entry in the `LABS` array requires these fields:

```js
{
  name: '〇〇先生の研究室',  // displayed heading
  nameEn: 'Xxx Lab',         // fallback if no photo
  photo: facultyXxx,          // imported from src/faculty/xxx.jpg
  photoPosition: 'center center', // optional; overrides CSS default 'center top' for passport-style photos
  description: '...',
  topic: '...',               // latest news blurb
  topicDate: 'YYYY.M',
  href: '/lab-xxx',           // or full URL for external
  blogHref: '/lab-xxx',
  isExternal: false,          // true → <a>, false → <Link>
}
```

`isExternal: true` renders an `<a>` tag (with `target="_blank"`); `false` renders a React Router `<Link>`. The individual lab **pages** are separate full-page components that use the shared `.lab-page` / `.lab-section` CSS classes.

`HeroFeatures.jsx` exists in `src/components/` but is not currently rendered in `App.jsx`.

### Component Conventions

- All components are plain `.jsx` under `src/components/`. No TypeScript.
- External links: `target="_blank" rel="noopener noreferrer"`. Internal path links: use `<Link to="...">` from `react-router-dom`.
- Scroll-reveal: add `data-reveal` (and optionally `data-reveal-delay="1"–"6"`) to animate elements on scroll. Works only on the homepage.
- Framer Motion (`framer-motion`) is used for animations in `News.jsx` and sub-page components. Use `motion.*` variants and `AnimatePresence` from that library rather than raw CSS transitions for new animated UI.
- Icons: `lucide-react` is available (e.g. `import { ArrowRight } from 'lucide-react'`). Use it for any new iconography.
- `App.css` is intentionally empty — all styles live in `src/index.css`.

## Language

All UI text is in Japanese. Follow the existing convention: English identifiers, Japanese string literals. No comments unless the intent is non-obvious.
