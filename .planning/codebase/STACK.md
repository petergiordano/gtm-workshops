# Technology Stack

**Analysis Date:** 2026-04-08

## Languages

**Primary:**
- HTML5 - All activity pages and landing pages (32 HTML files total, excluding archives)
- JavaScript (ES2020+) - All interactive logic, embedded directly in HTML files via Babel transpilation
- CSS3 - Inline `<style>` blocks in HTML; utility classes via Tailwind CDN

**Secondary:**
- JSON - Test data files in `test_data/` directory (17 JSON files)

## Runtime

**Environment:**
- Browser-only. No Node.js runtime required to serve or run. Static files execute entirely client-side.
- Babel Standalone transpiles JSX at runtime in the browser — no build step.

**Server (dev only):**
- `python -m http.server 8000` or any static file server

**Package Manager:**
- None. No `package.json`, no `node_modules`, no lockfile. Zero dependency installation.

## Frameworks

**UI:**
- React 18 — `https://unpkg.com/react@18/umd/react.development.js`
  - Uses the `createRoot` API (React 18 pattern). `ReactDOM.render()` is explicitly banned.
  - State management via `useState` and `useEffect` only. No Redux, Zustand, or Context.
  - All components are function components defined inline in each HTML file.

**Styling:**
- Tailwind CSS — `https://cdn.tailwindcss.com` (no version pin, latest CDN build)
  - Used as the primary utility class system in all activity files.
  - Workshop landing pages (`index.html` files) use plain CSS in `<style>` blocks instead.
  - Custom CSS classes complement Tailwind for animations and textarea expand behavior.

**JSX Transpilation:**
- Babel Standalone — `https://unpkg.com/@babel/standalone/babel.min.js`
  - All `<script type="text/babel">` blocks are transpiled at page load.
  - No version pin on Babel CDN reference — resolves to latest stable.

## Key Dependencies

**Critical:**
- React 18 (`react@18`, `react-dom@18`) — core UI rendering for all activity SPAs
- Tailwind CSS (CDN, unpinned) — primary styling for activity files
- Babel Standalone (unpinned) — enables JSX without a build step

**Icons:**
- No icon library CDN. All icons are custom inline SVG React components defined per file.
- Pattern: `const CheckCircle = ({ size = 20, className = "" }) => (<svg ...>)` 
- Common icon components: `CheckCircle`, `TrashIcon`, `PlusCircleIcon`, `MetricsIcon`
- Styled with class `.lucide-icon` (CSS in `<style>` block), width/height 20px default

**Fonts:**
- Google Fonts CDN — `https://fonts.googleapis.com/css2?family=Open+Sans:wght@...&family=Raleway:wght@...`
- Used in 9 unified activity files (`activity-unified.html`)
- Not loaded in workshop landing pages (`index.html`) or main `index.html`
- Families: Open Sans (weights 300, 400, 600, 700), Raleway (weights 300, 400, 600, 700)
- Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`
- Workshop landing pages use: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

## Configuration

**Environment:**
- No environment variables. No `.env` files. No server-side config.
- All configuration is hardcoded in HTML files (storage keys, step counts, color values).

**Build:**
- No build config files. No webpack, Vite, Rollup, esbuild, or Parcel.
- No `tsconfig.json` — TypeScript is not used.
- No `.eslintrc`, no `.prettierrc` — no linting or formatting tooling.

**Deployment:**
- `/.github/workflows/static.yml` — GitHub Actions workflow
- Triggers on push to `main` branch
- Uses `actions/upload-pages-artifact@v3` to upload entire repo root
- Deploys via `actions/deploy-pages@v4` to GitHub Pages
- Live URL: `https://petergiordano.github.io/gtm-workshops/`

## File Architecture Pattern

**Activity files (SPAs):**
Each `activity-unified.html` is a self-contained single-page application:
```
activity-unified.html
├── <head>: CDN scripts (React, Babel, Tailwind), Google Fonts link, inline <style>
├── <div id="root">: React mount point
├── <script type="application/json" id="testData">: Embedded JSON test data
└── <script type="text/babel">: Full React component definition + ReactDOM.createRoot() call
```

**Workshop landing pages:**
Each workshop's `index.html` is plain HTML + CSS (no React, no Tailwind):
```
workshop/index.html
├── <head>: Inline <style> block only (no CDN dependencies)
├── 3-card layout linking to activity-unified.html?step=1, ?step=2, ?step=3
└── Optional: Google Slides link for the workshop deck
```

**Main landing page:**
`/index.html` — Plain HTML + CSS grid, links to each workshop directory. No CDN dependencies.

## Platform Requirements

**Development:**
- Any modern browser (Chrome, Firefox, Safari)
- Python 3 or any static file server for local dev
- No Node.js required
- No install step

**Production:**
- GitHub Pages (static hosting)
- GitHub Actions for CI/CD
- No server, no database, no backend

---

*Stack analysis: 2026-04-08*
