# Architecture

**Analysis Date:** 2026-04-08

## Pattern Overview

**Overall:** Static multi-page application with per-workshop single-page application (SPA) pattern.

**Key Characteristics:**
- Zero build process — all HTML files execute directly in browser
- Each workshop is a self-contained SPA in a single HTML file (`activity-unified.html`)
- React 18 loaded via CDN, transpiled in-browser via Babel standalone
- Tailwind CSS loaded via CDN — no PostCSS, no purge step
- State persisted to `localStorage` per workshop; URL `?step=N` overrides on load
- No backend, no API calls, no server — pure static site deployed to GitHub Pages

## Layers

**Main Landing Page:**
- Purpose: Entry point listing all workshops grouped by track
- Location: `index.html`
- Contains: Pure HTML/CSS, no React, grid of workshop cards
- Depends on: Nothing
- Used by: Browser entry point, workshop `index.html` files link back with `../index.html`

**Workshop Landing Pages:**
- Purpose: Per-workshop index listing 3 activities with deep-link URLs
- Location: `[workshop-dir]/index.html` (e.g., `week-7-gtm-channels-buyer-journey/index.html`)
- Contains: Pure HTML/CSS, no React, 3 activity cards linking to `activity-unified.html?step=1/2/3`
- Depends on: `../icons/` for Google Slides logo
- Used by: Main `index.html`, and `activity-unified.html` "Back to Workshop" link

**Workshop SPA (activity-unified.html):**
- Purpose: All 3 activities for a workshop in a single React component
- Location: `[workshop-dir]/activity-unified.html`
- Contains: CDN scripts, embedded test data JSON, inline React component, inline CSS
- Depends on: Nothing external at runtime; test data embedded in the file itself
- Used by: Workshop `index.html` links with `?step=N` query param

**Legacy A-Version Activities:**
- Purpose: Original single-activity HTML files (pre-unification)
- Location: `week-4-customer-value-mapping/customer-value-activity-[1-3]A.html`, `week-x-strategic-partnerships/partnerships-activity-[1-3]A.html`
- Contains: Same React/CDN pattern as unified files but one activity per file
- Status: Still active for week-4 and week-x-strategic-partnerships; archived versions in `_archive/` dirs

## Data Flow

**User Interaction Flow (SPA):**

1. User clicks activity card on workshop `index.html` — URL is `activity-unified.html?step=N`
2. `activity-unified.html` loads; React 18 mounts via `ReactDOM.createRoot(document.getElementById('root'))`
3. `useState(() => { ... })` initializer runs:
   a. Checks `localStorage` for saved state under `WORKSHOP_STORAGE_KEY`
   b. Checks `URLSearchParams` for `?step=N` — URL param overrides `localStorage` step
   c. Returns merged initial state
4. User fills form fields; state updates via `setState` / `updateState`
5. `useEffect([state])` fires on every state change — writes full state to `localStorage`
6. On step 3 completion, `generateMarkdown()` produces export text; user copies via clipboard API

**Test Data Flow (Dev Mode):**

1. Double-click workshop title → `toggleDevMode()` sets `devMode = true`
2. "Fill Test Data" button → `devFillData()` reads `<script type="application/json" id="testData">` from DOM
3. Parsed JSON is spread into component state via `setState(testData)`
4. Workshop jumps to step 3 (completion view) with pre-populated data

**State Management:**
- All workshop state is flat or lightly nested JSON in a single `useState` object
- Persisted to `localStorage` with a unique key per workshop (e.g., `workshopState_gtm_channels_buyer_journey`)
- No global state, no context, no Redux — each `activity-unified.html` is fully isolated
- Reset: "Clear all work" button calls `localStorage.removeItem(key)` then `window.location.reload()`

## Key Abstractions

**WorkshopApp / [WorkshopName]Workshop Component:**
- Purpose: Root React component for each workshop — owns all state and renders all 3 steps
- Examples: `week-7-gtm-channels-buyer-journey/activity-unified.html` (line 217: `WorkshopApp`), `week-9-map-buyer-stakeholders/activity-unified.html` (line 213: `StakeholderMapWorkshop`)
- Pattern: Single monolithic component; `renderStep1()`, `renderStep2()`, `renderStep3()` methods return JSX per step

**StepIndicator Component:**
- Purpose: Progress bar showing 3 steps with active/complete/future states
- Examples: Defined inline in every `activity-unified.html`, pattern consistent across all workshops
- Pattern: Accepts `currentStep`, `steps` array, optional `onStepClick` handler; orange = active, green = complete, gray = future

**steps Array:**
- Purpose: Declares the 3 activity titles and descriptions for a workshop
- Location: Defined as `const steps = [...]` inside the root component, around line 300-450 depending on the file
- Pattern: `{ number: 1, title: "...", desc: "..." }` — these titles are the source of truth for workshop landing page card descriptions

**Embedded Test Data:**
- Purpose: Realistic pre-filled form data for rapid demonstration and testing
- Pattern: `<script type="application/json" id="testData">{ ... }</script>` in the `<head>` section before the Babel script block
- Always includes `"currentStep": 3` to jump to the export/completion view

**generateMarkdown() Function:**
- Purpose: Produces a formatted markdown report of all workshop answers for Google Docs export
- Location: Defined inside each root component, typically after state initialization (e.g., line 333 in week-7)
- Pattern: Reads from `state` object, builds markdown string with headers and user content, returns string rendered in a `<textarea readOnly>`

## Entry Points

**Root Index:**
- Location: `index.html`
- Triggers: Direct browser navigation or GitHub Pages root URL
- Responsibilities: Lists all 9 workshops across two tracks; links to each `[workshop-dir]/index.html`

**Workshop Index:**
- Location: `[workshop-dir]/index.html`
- Triggers: Click from root `index.html`
- Responsibilities: Shows 3 activity cards; links to `activity-unified.html?step=1`, `?step=2`, `?step=3`

**Activity SPA:**
- Location: `[workshop-dir]/activity-unified.html`
- Triggers: Click from workshop `index.html` (with `?step=N`) or direct URL
- Responsibilities: Mounts React app, reads URL param and localStorage, renders the 3-step workshop

## Error Handling

**Strategy:** Minimal — static site with no server calls. Errors are caught only in dev mode operations.

**Patterns:**
- `devFillData()` wraps `JSON.parse` in a `try/catch` and logs to `console.error` on failure
- `localStorage` read/write is wrapped in `try/catch` in some workshops (week-8, week-9); bare in others (week-7)
- Clipboard copy has async fallback using `document.execCommand('copy')` for older browsers
- No user-facing error states — failures are silent or console-only

## Cross-Cutting Concerns

**Persistence:** `localStorage` keyed per workshop. Key naming: `workshopState_[snake_case_workshop_name]`. State is the entire component state serialized as JSON.

**Navigation:** Every `activity-unified.html` has two nav links: `Back to Workshop` → `index.html` (relative) and `All Workshops` → `../index.html` (parent).

**Dev Mode:** All `activity-unified.html` files implement the same pattern — double-click `<h1>` title to toggle, orange banner appears with "Fill Test Data" button. Title turns orange and shows `[dev]` or `🔧` suffix while active.

**Export:** Step 3 always contains a `<textarea readOnly>` with the markdown output and a copy-to-clipboard button. Google Docs integration is via paste: "Edit → Paste special → Paste from markdown".

**Styling:** Tailwind utility classes are the primary styling mechanism. Each file also has a `<style>` block for custom classes not expressible in Tailwind (`.laptop-textarea`, `.step-icon`, `.animate-fadeIn`, component-specific styles). Color palette is orange-dominant: `#FF9000` / `orange-500` as primary.

**Deployment:** GitHub Actions workflow at `.github/workflows/static.yml` deploys the entire repo to GitHub Pages on push to `main`. No build step — the repo is uploaded as-is.

---

*Architecture analysis: 2026-04-08*
