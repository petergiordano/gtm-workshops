# External Integrations

**Analysis Date:** 2026-04-08

## CDN Dependencies

All external resources are loaded via CDN at runtime. There are no npm packages, no bundled assets, and no downloaded libraries committed to the repo.

**React 18:**
- `https://unpkg.com/react@18/umd/react.development.js`
- `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
- Used in: all 9 `activity-unified.html` files, all `week-4-customer-value-mapping/*A.html` files, and all `week-x-strategic-partnerships/*A.html` files
- Version: pinned to `@18` major; resolves to latest 18.x at load time

**Babel Standalone:**
- `https://unpkg.com/@babel/standalone/babel.min.js`
- Used in: same files as React (all activity files)
- Version: unpinned — resolves to latest stable
- Purpose: Transpiles `<script type="text/babel">` blocks at page load time

**Tailwind CSS:**
- `https://cdn.tailwindcss.com`
- Used in: all `activity-unified.html` files and older A-version activity files
- Version: unpinned — resolves to latest CDN build
- Not used in: workshop `index.html` landing pages, main `index.html`

## Fonts

**Google Fonts:**
- URL: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Raleway:wght@400;600;700&display=swap`
- Variant 2: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@300;400;600;700&display=swap`
- Used in: all 9 `activity-unified.html` files
- Not used in: workshop landing pages (`index.html`), main `index.html`
- Families loaded: Open Sans, Raleway
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`

## Google Services (Outbound Links Only)

The app links to external Google services but does not call any Google APIs. No OAuth, no API keys, no SDK.

**Google Slides:**
- Linked as `<a href="https://docs.google.com/presentation/d/...">` in workshop `index.html` landing pages
- Each workshop links to its own Google Slides deck (8 distinct presentation IDs found)
- Files containing links:
  - `finding_your_early_customers/index.html`
  - `positioning_basics/index.html`
  - `problems_worth_solving/index.html`
  - `market_entry_readiness/index.html`
  - `week-5-pricing-monetization/index.html`
  - `week-6-messaging-storytelling/index.html`
  - `week-7-gtm-channels-buyer-journey/index.html`
  - `week-8-competitive-strategy/index.html`
- Pattern: Opens in new tab (`target="_blank"`). No API call. Pure hyperlink.

**Google Docs (Export Target):**
- Not linked from code. Referenced in UI copy only.
- Each activity's export screen instructs users to: "Edit → Paste special → Paste from markdown"
- The app generates markdown via `generateMarkdown()` and copies to clipboard using `navigator.clipboard.writeText()`
- No Google Docs API integration. Copy-paste workflow is entirely manual.

## Local Browser APIs

**Clipboard API:**
- `navigator.clipboard.writeText()` — primary path for markdown export
- `document.execCommand('copy')` — fallback for browsers without Clipboard API
- Used in: all `activity-unified.html` files
- No permissions required beyond user interaction

**localStorage:**
- Used in all `activity-unified.html` files for auto-save of form state
- Key pattern: `WORKSHOP_STORAGE_KEY` constant defined per file (e.g., `'gtm-channels-workshop-v1'`)
- Operations: `getItem`, `setItem`, `removeItem`
- Helper functions in newer unified files: `loadWorkshopState(key)`, `saveWorkshopState(state, key)`
- Data stored: full React state as JSON string
- No expiry. Cleared via explicit "Clear all work" button in UI.
- No cross-origin or cross-tab sync.

**URL Parameters:**
- `window.location.search` / `URLSearchParams` used in `activity-unified.html` files
- Parameter: `?step=N` (integer 1-3)
- Purpose: Deep-linking from workshop landing page directly to a specific activity step
- Pattern (from `useState` initializer):
  ```javascript
  const urlParams = new URLSearchParams(window.location.search);
  const urlStep = parseInt(urlParams.get('step'), 10);
  // URL param overrides localStorage step if valid
  ```
- Used by all 9 `activity-unified.html` files

## Deployment & Hosting

**GitHub Pages:**
- Hosting: `https://petergiordano.github.io/gtm-workshops/`
- CI/CD: `/.github/workflows/static.yml`
- Trigger: Push to `main` branch
- Actions used:
  - `actions/checkout@v4`
  - `actions/configure-pages@v5`
  - `actions/upload-pages-artifact@v3`
  - `actions/deploy-pages@v4`
- Uploads entire repo root as the artifact — all HTML, JSON, PNG, and icon files are served

## Static Assets

**Local Icons:**
- Directory: `/icons/`
- Files: `Google_Docs_Logo_512px.png`, `Google_Forms_Logo_512px.png`, `Google_Sheets_Logo_512px.png`, `Google_Slides_Logo_512px.png`
- Used in: workshop `index.html` landing pages for Google Slides button icons
- Served as static files from GitHub Pages

**QR Code Images:**
- `week-7-gtm-channels-buyer-journey/QR Code - overdrive - alchx - week7 - activity1.png`
- `week-7-gtm-channels-buyer-journey/QR Code - overdrive - alchx - week7 - activity2.png`
- Static image files — not generated at runtime. No QR code library or service in use.

## What Is NOT Present

- No backend API or server
- No database or cloud storage
- No authentication service (no login, no accounts)
- No analytics or tracking scripts (no Google Analytics, Segment, Mixpanel, etc.)
- No error monitoring (no Sentry, Datadog, Rollbar)
- No payment processing
- No email service
- No real-time features (no WebSockets, no SSE)
- No service workers or PWA manifest
- No environment variables or secrets of any kind

---

*Integration audit: 2026-04-08*
