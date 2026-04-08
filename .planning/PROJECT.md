# GTM Workshops — Overhaul & Completion

## What This Is

A static web app (GitHub Pages) delivering 11 Go-To-Market workshops for early-stage B2B SaaS founders. Each workshop is a self-contained single-page React app with 3 guided activities, dev mode for demo loading, and a markdown export for Google Docs. No build process — pure HTML + CDN React + Tailwind.

## Core Value

Facilitators and founders can run structured GTM workshops from any browser, with no setup, and export clean activity summaries to Google Docs.

## Requirements

### Validated

- ✓ 9 unified workshops (SPA pattern) live on GitHub Pages — existing
- ✓ activity-unified.html pattern: 3-step SPA, dev mode, localStorage, markdown export — existing
- ✓ Workshop landing pages with 3-card deep-linking (?step=N) — existing
- ✓ Root index.html with all workshops navigable — existing
- ✓ React 18 createRoot, Tailwind CDN, Babel transpilation — existing

### Active

- [ ] Canonical workshop numbering: week-# renamed to workshop-#, workshops renumbered 1–11
- [ ] Canonical workshop titles updated across all directories and root index
- [ ] Workshop 3 (Customer Value Mapping) built as full unified SPA
- [ ] Workshop 11 (Strategic Partnerships) migrated from A-version to unified SPA
- [ ] Root index.html reflects final 11-workshop order with canonical titles
- [ ] Stale/dev files removed from repo root (test_*.html, gtm_bundle.md, etc.)
- [ ] React CDN switched from development to production builds across all workshops

### Out of Scope

- Build process or bundler — static site, CDN only, no exceptions
- External APIs or backend — client-side only
- Mobile-first design — laptop-optimized (900px max-width) is intentional
- Renaming workshops 1–2 directories (descriptive names `problems_worth_solving/` and `finding_your_early_customers/` are clear enough to keep)

## Context

**Brownfield project** — 9 of 11 workshops are complete and live. This milestone finishes the set.

**Current directory state:**
- Workshops 1–5 use legacy descriptive dir names (no week- prefix) — keep as-is
- Workshops 6–11 currently use week-5 through week-x naming — all need renaming
- Workshop 3 (Customer Value Mapping): stubs only in `week-4-customer-value-mapping/`, needs full build
- Workshop 11 (Strategic Partnerships): real content in A-version files, needs migration to unified SPA

**Canonical index:** `.planning/WORKSHOPS.md` — source of truth for numbering, titles, directories, status.

**Reference implementation:** `week-7-gtm-channels-buyer-journey/` — gold standard for unified SPA and landing page.

**Key patterns (must follow):**
- `ReactDOM.createRoot()` — not deprecated `ReactDOM.render()`
- `<script type="application/json" id="testData">` with `"currentStep": 3`
- Double-click title → dev mode (orange title + 🔧 + Fill Test Data button)
- `max-w-[900px]` container
- Fonts: Open Sans + Raleway from Google Fonts
- Navigation: Back to Workshop → `index.html`, All Workshops → `../index.html`

## Constraints

- **Tech stack**: Static HTML only — no build tools, no npm, no backend
- **Deployment**: GitHub Pages auto-deploys on push to main
- **Consistency**: Every workshop must pass the 10-point consistency checklist in `.continue-here.md`
- **One workshop at a time**: Rename and verify each workshop independently before moving to the next

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Workshop 3 = Customer Value Mapping | Logical progression: know customer value before positioning | — Pending |
| Keep workshops 1–5 directory names as-is | Descriptive names are clear; renaming adds churn with no user benefit | — Pending |
| Migrate week-x Strategic Partnerships to unified SPA | Consistency with all other workshops; A-version pattern is deprecated | — Pending |
| Remove week-# naming entirely | week- prefix tied to a specific program that no longer applies | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-08 after initialization*
