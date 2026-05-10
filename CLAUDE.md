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
firebase deploy
```

## Architecture

**shokuei-hp** is a React 19 + Vite 8 SPA for Jumonji University's Food and Nutrition Department (食物栄養学科). It is a marketing/informational site deployed on Firebase Hosting with Firestore for dynamic news content.

### Routing

Routing is hash-based, implemented manually in `src/App.jsx` with a `useEffect` on `hashchange`. There is no React Router or similar library.

- `#` → Full homepage (all sections stacked)
- `#lab-takeshima` → `LabTakeshima` component
- `#lab-kamoshita` → `LabKamoshita` component
- `#koudai-project` → `KoudaiProject` component

Each route replaces the page content; `Header` and `Footer` are always rendered.

### Firestore / Firebase

- Firebase config is hardcoded in `src/firebase.js` — no `.env` file required.
- The `news` Firestore collection is publicly readable (see `firestore.rules`). The `News` component tries `orderBy('date', 'desc')` and falls back to an unordered query if the index is missing.
- Firebase project ID: `shokuei-hp` (`.firebaserc`).

### Styling

- Custom CSS in `src/index.css` (~1600 lines) defines a design token system using CSS custom properties: a cream/terracotta/forest-green palette, Noto Serif JP (headings) and Noto Sans JP (body), and responsive spacing via `clamp()`.
- Tailwind CSS 4 is included as a dependency but used minimally; the primary styling is the custom CSS system.
- Google Fonts (Noto Serif JP, Noto Sans JP) are loaded via `<link>` in `index.html`.

### Scroll Reveal Animation

Elements with a `data-reveal` attribute are animated into view using `IntersectionObserver` (set up in `App.jsx`). They receive the `.is-visible` class when they pass the threshold. The observer is reinitialised on every route change.

### Component Conventions

- All components are plain `.jsx` files under `src/components/`. No TypeScript.
- Each major page section is a self-contained component.
- Date values from Firestore can be a `Timestamp`, a `Date`, or a string — handle all three (see the pattern in `News.jsx`).
- External links use `target="_blank" rel="noopener noreferrer"`; internal hash links do not.

## Language

All UI text and content is in Japanese. Comments and variable names in new code should follow the existing convention (English identifiers, Japanese string literals).
