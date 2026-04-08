# Phase 1: Renumber and Rename All Workshops — Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-08
**Phase:** 01-renumber-and-rename-all-workshops-7-renames
**Areas discussed:** Title update scope, GitHub Pages verification gate, WORKSHOP_STORAGE_KEY handling

---

## Title Update Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Full canonical title | Use the title from WORKSHOPS.md exactly — `<title>` tag, `<h1>` headings, and root index all match | ✓ |
| Short workshop label | e.g., 'Workshop 4 - Positioning' — easier to read in browser tabs | |
| Leave as-is | Don't update activity-unified.html `<title>` during this phase | |

**User's choice:** Full canonical title everywhere
**Notes:** Applies to: `<title>` in activity-unified.html, `<title>` in workshop index.html, `<h1>` in activity-unified.html, root index `workshop-title` div. All must match WORKSHOPS.md exactly.

---

## GitHub Pages Verification Gate

| Option | Description | Selected |
|--------|-------------|----------|
| Hard human checkpoint | Plan includes: verify specific URLs in browser before running next plan | ✓ |
| List URLs as acceptance criteria only | URLs listed but executor can mark complete without manual verify | |
| No verification step | Just commit and push | |

**User's choice:** Hard human checkpoint per plan
**Notes:** Executor must flag this step as requiring human action. Ensures no broken link cascades to next rename.

---

## WORKSHOP_STORAGE_KEY Handling

| Option | Description | Selected |
|--------|-------------|----------|
| Keep existing keys | No change — existing user sessions preserved | |
| Update keys to match new names | Update to e.g., 'workshopState_workshop_4' | ✓ |

**User's choice:** Update keys to new format

**Key naming pattern:**

| Option | Description | Selected |
|--------|-------------|----------|
| workshopState_workshop_N | Simple, number-based. Stable — won't change if title updates again | ✓ |
| workshopState_workshop_N_slug | Includes slug — more descriptive but longer | |

**User's choice:** `workshopState_workshop_N` pattern (e.g., `workshopState_workshop_4`)

---

## Claude's Discretion

- Exact URLs for GitHub Pages checkpoint — derive from new directory name
- Nav link verification approach in activity-unified.html
- `workshop-number` div text update (Week N → Workshop N with correct new number)

## Deferred Ideas

None — discussion stayed within phase scope.
