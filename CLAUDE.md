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

Routing is hash-based, implemented manually in `src/App.jsx` with a `useEffect` on `hashchange`. There is no React Router.

| Hash | Component |
|---|---|
| *(empty / `#`)* | Homepage — all sections stacked |
| `#lab-takeshima` | `LabTakeshima` |
| `#lab-kamoshita` | `LabKamoshita` |
| `#lab-kunii` | `LabKunii` |
| `#koudai-project` | `KoudaiProject` |
| `#kokushi-report` | `KokushiReport` |
| `#student-column-1` | `StudentColumn1` |

`Header` and `Footer` render on every route. The `data-reveal` IntersectionObserver is set up in `App.jsx` and re-initialised on each route change; it is **skipped** for sub-pages (all routes except the homepage default).

### News: Firestore + static dummy items

`News.jsx` merges two sources:
1. **Firestore** — `news` collection, sorted by `date` desc. Falls back to unordered query if the composite index is missing. Firestore items appear first.
2. **`DUMMY_NEWS` array** (static, in `News.jsx`) — editorial/blog-style articles that always render below Firestore items.

Firestore date values can be a `Timestamp`, a `Date`, or a string — `formatNewsDate()` handles all three. The `type` field on each news item maps to a `news-tag--{type}` CSS class; valid types are `info`, `news`, `event`, `report`, `voice`, `column`, `sensei`.

### Firestore / Firebase

- Config is hardcoded in `src/firebase.js` — no `.env` needed (public read-only Firebase project).
- Firebase project ID: `shokuei-hp` (`.firebaserc`).
- The `news` collection is publicly readable (`firestore.rules`).

### Styling

- `src/index.css` (~1700 lines) is the single stylesheet. It defines a design-token system via CSS custom properties (`--cream`, `--terracotta`, `--forest`, `--charcoal`, etc.) and drives all layout with those tokens plus `clamp()` for fluid spacing.
- Tailwind CSS 4 is a listed dependency but effectively unused — do not introduce Tailwind utilities; extend `index.css` instead.
- Google Fonts (Noto Serif JP, Noto Sans JP) load via `<link>` in `index.html`. Use `var(--font-serif)` / `var(--font-sans)`.
- Stats bar (`StatsBar`) uses an off-white background (`#FAF8F5`), not the charcoal dark theme — keep this distinction when editing that section.

### Images

Static images live directly in `src/` and are imported by the components that use them:

| File | Used by |
|---|---|
| `src/eiyo-kagaku.png` | `Hero.jsx` (background) |
| `src/jisshu-sei.jpg` | `CampusLife.jsx` |
| `src/university_kousha.jpg` | `CampusLife.jsx` |

`CampusLife.jsx` also renders two CSS colour-block placeholders (forest-green, terracotta) to reserve space for future photos.

### Labs section

`Labs.jsx` renders a 3-column card grid (`.labs-grid-new` / `.lab-card-new`). Each card has a photo placeholder, description, a dated research topic blurb, and a "研究室を見る →" link. The individual lab **pages** (`LabTakeshima`, `LabKunii`, `LabKamoshita`) are separate full-page components that use the shared `.lab-page` / `.lab-section` CSS classes.

### Component Conventions

- All components are plain `.jsx` under `src/components/`. No TypeScript.
- External links: `target="_blank" rel="noopener noreferrer"`. Internal hash links: no target.
- Scroll-reveal: add `data-reveal` (and optionally `data-reveal-delay="1"–"6"`) to animate elements on scroll. Works only on the homepage.
- Framer Motion (`framer-motion`) is used for animations in `News.jsx` and sub-page components. Use `motion.*` variants and `AnimatePresence` from that library rather than raw CSS transitions for new animated UI.

## Language

All UI text is in Japanese. Follow the existing convention: English identifiers, Japanese string literals. No comments unless the intent is non-obvious.
