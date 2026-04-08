# Codebase Concerns

**Analysis Date:** 2026-04-08

---

## Workshop Architecture Gaps

**week-4-customer-value-mapping — Not Migrated to Unified SPA:**
- Severity: HIGH
- Issue: This is the only linked workshop (visible in `index.html`) that still uses the legacy A-version pattern instead of `activity-unified.html`. All 9 other workshops have completed the migration. The three activity files are "Coming Soon" stubs with no real content.
- Files:
  - `week-4-customer-value-mapping/customer-value-activity-1A.html`
  - `week-4-customer-value-mapping/customer-value-activity-2A.html`
  - `week-4-customer-value-mapping/customer-value-activity-3A.html`
  - `week-4-customer-value-mapping/index.html`
- Impact: Users clicking "Week 4: Customer Value Mapping" from the main landing page land on "Coming Soon" placeholder pages. The landing page links directly to A-version files, not `activity-unified.html?step=N`. No real workshop content exists.
- Fix: Build `week-4-customer-value-mapping/activity-unified.html` with 3-step SPA pattern. Update `week-4-customer-value-mapping/index.html` card links to `activity-unified.html?step=1/2/3`.

**week-x-strategic-partnerships — No activity-unified.html and Not in Main Index:**
- Severity: MEDIUM
- Issue: Uses A-version individual files (`partnerships-activity-1A.html`, etc.) — not the unified SPA pattern. The folder exists and contains real activity content, but `week-x-strategic-partnerships/` is not linked from the root `index.html` (main landing page only lists 10 workshops, week-x is absent).
- Files:
  - `week-x-strategic-partnerships/partnerships-activity-1A.html`
  - `week-x-strategic-partnerships/partnerships-activity-2A.html`
  - `week-x-strategic-partnerships/partnerships-activity-3A.html`
  - `week-x-strategic-partnerships/index.html`
  - `index.html` (missing the link)
- Impact: Workshop is completely unreachable from the main navigation. Users cannot discover it. The landing page links to A-version files, not unified SPA. Content appears to be real (not stubs).
- Fix: Either (a) migrate to `activity-unified.html` + add to main `index.html`, or (b) decide if this is intentionally hidden/deferred and document that decision.

---

## Deprecated API Usage

**week-4 A-Version Files Use ReactDOM.render() (Deprecated):**
- Severity: HIGH
- Issue: Three files use the React 17-era `ReactDOM.render()` API. React 18 requires `ReactDOM.createRoot()`. This produces console warnings and will break in future React versions.
- Files:
  - `week-4-customer-value-mapping/customer-value-activity-1A.html` (line 61)
  - `week-4-customer-value-mapping/customer-value-activity-2A.html` (line 61)
  - `week-4-customer-value-mapping/customer-value-activity-3A.html` (line 61)
- Impact: Console warnings in all current browsers. Already deprecated. These files also use React 18 CDN but call the React 17 render API — a mismatch. Will break when React removes the legacy root API.
- Fix: Replace `ReactDOM.render(<Component />, el)` with `const root = ReactDOM.createRoot(el); root.render(<Component />)`. Note: these files are "Coming Soon" stubs — the real fix is migrating to `activity-unified.html`.

---

## Missing Test Data

**pricing-activity-2A.json Missing from test_data/:**
- Severity: MEDIUM
- Issue: `test_data/` contains `pricing-activity-1A.json` and `pricing-activity-3A.json` but no `pricing-activity-2A.json`. This breaks the test data pattern — Activity 2 of the pricing workshop has no corresponding external JSON.
- Files: `test_data/` (gap: `pricing-activity-2A.json`)
- Impact: Low in practice — `week-5-pricing-monetization/activity-unified.html` embeds its test data directly in a `<script type="application/json" id="testData">` tag and does not reference external JSON. But the `test_data/` directory appears to be a canonical reference set, and this gap makes it incomplete.
- Fix: Create `test_data/pricing-activity-2A.json` with realistic B2B SaaS pricing content matching the state variables used in `week-5-pricing-monetization/activity-unified.html`.

**test_data/ JSON Files Are Orphaned (No Activity References Them):**
- Severity: LOW
- Issue: The `test_data/` directory contains 17 JSON files, but no HTML file loads from them — all activities embed test data directly in `<script type="application/json" id="testData">` tags. The external JSON files are not used at runtime.
- Files: All files in `test_data/` (17 files)
- Impact: Dead files. No real breakage, but they can diverge from the embedded test data in activities, creating confusion about which is canonical.
- Fix: Either (a) treat `test_data/*.json` as the canonical source and ensure embedded script tag data matches them, or (b) delete the directory and document that embedded test data is the only source. Decide which is authoritative.

---

## Missing Workshops in Main Index

**week-x-strategic-partnerships Not Linked from Root index.html:**
- Severity: MEDIUM (see also Workshop Architecture Gaps above)
- Issue: Root `index.html` lists 10 workshops. `week-x-strategic-partnerships/` exists with content but is not included in the main navigation.
- Files: `index.html` (line 141–177 shows 10 `workshop-card` links, none pointing to `week-x`)
- Impact: Workshop is invisible to users navigating from the home page. The `Back to All Workshops` link in `week-x-strategic-partnerships/index.html` goes to `../index.html` (correct) but there's no way to get there from that landing page.
- Fix: Add a workshop card for `week-x-strategic-partnerships/index.html` to `index.html`. Decide on the final title and sequencing.

---

## Placeholder / Broken Links

**Workshop Slides Links Point to # in Two Workshops:**
- Severity: MEDIUM
- Issue: Two workshop landing pages have the "Workshop Slides" link pointing to `href="#"` — a non-functional placeholder. Seven other workshops have real Google Slides URLs.
- Files:
  - `week-4-customer-value-mapping/index.html` (line 166)
  - `week-6-messaging-storytelling/index.html` (line 166)
  - `week-x-strategic-partnerships/index.html` (line 166)
- Impact: Facilitators or users clicking "Workshop Slides" get no response. Looks broken.
- Fix: Add the Google Slides URLs when available. If slides don't exist yet, hide the button rather than leaving it as a dead `#` link.

---

## Stray / Leftover Files

**Orphaned index-orig.html in market_entry_readiness:**
- Severity: LOW
- Issue: `market_entry_readiness/index-orig.html` (173 lines) is an old landing page that was replaced when the workshop was updated. It uses an old design (different CSS, different structure) and is not linked anywhere.
- Files: `market_entry_readiness/index-orig.html`
- Impact: Confusion about which file is canonical. Not served to users unless accessed directly by URL.
- Fix: Delete the file. It has no current function. Confirm with `git log` that it was intentionally replaced.

**Root-Level Test and Utility Files:**
- Severity: LOW
- Issue: Several HTML and text files at the project root appear to be development artifacts, not part of the deployed workshop:
  - `test_decode.html` (15,421 bytes — progress code decoder)
  - `test_import.html` (534 bytes)
  - `test-code-validation.html` (31,290 bytes — progress code validator)
  - `test-generate-code.html` (4,146 bytes)
  - `gtm_bundle.md` (60,623 bytes — bundled docs artifact from repomix)
  - `jules-refactor-prompt-2.txt` — Jules delegation prompt
  - `GEMINI.md` — Gemini pre-planning notes
  - `WARP.md` — Warp terminal notes
- Files: All listed above at repo root
- Impact: These files deploy to GitHub Pages and are publicly accessible. `test-code-validation.html` and `test_decode.html` relate to the deprecated progress code system that was already removed from activities. They add 50KB+ of dead HTML to the deployment.
- Fix: Move test HTML files to a `testing/` subdirectory (one already exists) or add them to `.gitignore`. Delete `gtm_bundle.md`, `jules-refactor-prompt-2.txt` — these are working artifacts, not source files. Decide whether `GEMINI.md` and `WARP.md` should be committed.

---

## Inconsistent State Persistence Patterns

**week-8 Uses Per-Component Storage Functions vs. Simple Inline Calls:**
- Severity: LOW
- Issue: `week-8-competitive-strategy/activity-unified.html` (1,597 lines) implements `loadWorkshopState()` and `saveWorkshopState()` as named utility functions. All other unified activities use inline `localStorage.getItem`/`setItem` calls directly. week-8 also manually maps individual fields from `testData` in `devFillData()` rather than using `setState(testData)`.
- Files:
  - `week-8-competitive-strategy/activity-unified.html` (lines 89–111)
  - All other `activity-unified.html` files for comparison
- Impact: No functional breakage, but inconsistency makes week-8 harder to maintain by pattern-matching from other workshops. week-8 is also the largest file at 1,597 lines — nearly double the others.
- Fix: Not urgent. If week-8 is refactored, align its patterns with the simpler inline approach used by weeks 5–9.

**week-9 Uses Per-Field Manual testData Mapping:**
- Severity: LOW
- Issue: `week-9-map-buyer-stakeholders/activity-unified.html` explicitly maps individual fields from testData in `devFillData()` rather than calling `setState(testData)` as weeks 5, 6, 7, and market_entry do.
- Files: `week-9-map-buyer-stakeholders/activity-unified.html` (lines 237–258)
- Impact: More error-prone to maintain. If the data schema adds fields, the mapping must be updated manually.
- Fix: Evaluate whether `setState(testData)` can replace the manual mapping. The week-9 component uses multiple `useState` hooks (not a single state object), so `setState(testData)` may not apply directly — the pattern difference is structural, not just stylistic.

---

## Performance / Deployment Concerns

**All Activities Use React Development Build:**
- Severity: LOW
- Issue: All 9 unified activity files and the week-4/week-x A-version files load React from `react@18/umd/react.development.js` — the development build. The development build includes extra warnings, prop-type checks, and is significantly larger than the production build.
- Files: All `activity-unified.html` files (line 7–9 in each)
- Impact: Slower initial load time. Users see extra React console output. For a workshop tool used in live sessions, load performance matters.
- Fix: Switch to `react@18/umd/react.production.min.js` and `react-dom@18/umd/react-dom.production.min.js` for all deployed activity files. Keep development builds only during active development.

---

## Documentation Drift

**docs/TODO.md Contains Outdated Status:**
- Severity: LOW
- Issue: `docs/TODO.md` shows "Week 9: Map Buyer Stakeholders" as `ACTIVE DEVELOPMENT` and lists it as pending. Week 9 is fully implemented. The file also references a "12 core activities" count that doesn't match the current architecture (9 unified workshops, 2 legacy A-version workshops, 1 coming soon workshop).
- Files: `docs/TODO.md`
- Impact: Misleading for future development sessions. Claude Code or contributors may treat completed work as pending.
- Fix: Update `docs/TODO.md` to reflect actual current state: 9 unified workshops complete, week-4 as the primary gap, week-x as deferred/external.

---

*Concerns audit: 2026-04-08*
