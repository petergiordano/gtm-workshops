# Phase 1: Renumber and Rename All Workshops (7 renames) - Context

**Gathered:** 2026-04-08
**Status:** Ready for planning

<domain>
## Phase Boundary

Rename 7 workshop directories from legacy naming (underscore/week-N format) to canonical `workshop-N-*` format. Each rename requires:
1. `git mv` old → new directory
2. Verify nav links in `activity-unified.html` (should be unchanged — relative paths)
3. Update `index.html` (workshop landing page): `<title>` tag, `<h1>`, card links, back links
4. Update root `index.html`: card `href`, `workshop-number` div, `workshop-title` div
5. Update `WORKSHOP_STORAGE_KEY` in `activity-unified.html`
6. Update `<title>` tag and `<h1>` in `activity-unified.html`
7. Update `.planning/WORKSHOPS.md` status for that workshop
8. Push to main, verify on GitHub Pages (hard human checkpoint)

Plans 1.1–1.7 execute one workshop at a time. Sequential is required — each rename touches the root index.

**Out of scope for Phase 1:**
- Workshop 11 (`week-x-strategic-partnerships/`) — covered in Phase 3
- `week-4-customer-value-mapping/` stubs — covered in Phase 2/cleanup
- Building any new workshop content

</domain>

<decisions>
## Implementation Decisions

### Title Updates

- **D-01:** Use full canonical title from `.planning/WORKSHOPS.md` everywhere — `<title>` tags, `<h1>` headings, and root index `workshop-title` divs all match WORKSHOPS.md exactly.
- **D-02:** Update `<title>` tag in `activity-unified.html` to canonical title (currently stale, e.g., `"Positioning Basics Workshop"`).
- **D-03:** Update `<title>` tag in workshop `index.html` to canonical title (currently stale, e.g., `"Value Proposition & Positioning Basics - Day 2-2"`).
- **D-04:** Update `<h1>` heading in `activity-unified.html` to canonical title (visible to users).

### GitHub Pages Verification

- **D-05:** Each plan includes a **hard human checkpoint**: after push, verify specific URLs in browser before running the next plan. The executor must flag this step as requiring human action. Prevents broken link cascades across sequential renames.

### WORKSHOP_STORAGE_KEY

- **D-06:** Update `WORKSHOP_STORAGE_KEY` in each `activity-unified.html` during rename. New pattern: `workshopState_workshop_N` (e.g., `workshopState_workshop_4`, `workshopState_workshop_5`). Number-only keys are stable — won't need to change if titles update in the future.

### Claude's Discretion

- Nav link verification in `activity-unified.html` — check that `href="index.html"` and `href="../index.html"` are still correct after rename. Since these are relative paths, they should be unchanged, but verify.
- Exact URLs to include in GitHub Pages checkpoint — derive from the new directory name and standard paths (`/workshop-N-slug/`, `/workshop-N-slug/activity-unified.html`, etc.)
- `workshop-number` div text — update from "Week N" or "Workshop N" (old number) to "Workshop N" (new canonical number) per WORKSHOPS.md.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Source of Truth
- `.planning/WORKSHOPS.md` — canonical workshop numbers, titles, target directory names, per-workshop rename checklist. **Primary reference for every rename.**

### Codebase Context
- `.planning/codebase/STRUCTURE.md` — current directory layout (pre-rename state) and workshop inventory
- `.planning/codebase/CONVENTIONS.md` — nav link patterns, HTML structure, WORKSHOP_STORAGE_KEY naming convention

### Files Modified Per Rename
- `[old-dir]/activity-unified.html` — WORKSHOP_STORAGE_KEY, `<title>` tag, `<h1>` heading
- `[old-dir]/index.html` — workshop landing page `<title>`, `<h1>`, card links
- `index.html` — root landing page: card `href`, `workshop-number` div, `workshop-title` div

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `week-7-gtm-channels-buyer-journey/` — gold standard reference for what a correctly configured workshop looks like post-rename (it already has `workshop-8-*` as the target name)

### Established Patterns
- `WORKSHOP_STORAGE_KEY` is hardcoded at line ~85-127 in `activity-unified.html` as a `const` before the component definition
- `<title>` tag is in the `<head>` at line 6
- Root `index.html` uses `<div class="workshop-number">Workshop N</div>` and `<div class="workshop-title">Title</div>` inside each `<a class="workshop-card">` link

### Integration Points
- Root `index.html` is the single most-touched file — every rename updates its corresponding card
- GitHub Pages deploys from `main` branch via `.github/workflows/static.yml`

</code_context>

<specifics>
## Specific Ideas

### WORKSHOP_STORAGE_KEY Mapping (all 7 renames)

| Workshop | Old Key | New Key |
|----------|---------|---------|
| 4 (positioning_basics) | `workshopState_positioning_basics` | `workshopState_workshop_4` |
| 5 (market_entry_readiness) | `workshopState_market_entry` | `workshopState_workshop_5` |
| 6 (week-5-pricing-monetization) | `workshopState_pricing_monetization` | `workshopState_workshop_6` |
| 7 (week-6-messaging-storytelling) | `workshopState_messaging_storytelling` | `workshopState_workshop_7` |
| 8 (week-7-gtm-channels-buyer-journey) | `workshopState_gtm_channels_buyer_journey` | `workshopState_workshop_8` |
| 9 (week-8-competitive-strategy) | `workshopState_competitive_strategy` | `workshopState_workshop_9` |
| 10 (week-9-map-buyer-stakeholders) | `workshopState_buyer_stakeholders` | `workshopState_workshop_10` |

*Note: Actual old key values should be verified by reading each activity-unified.html before planning.*

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-renumber-and-rename-all-workshops-7-renames*
*Context gathered: 2026-04-08*
