# GTM Workshops — Roadmap

**Project:** GTM Workshops — Overhaul & Completion
**Goal:** 11 workshops, consistent naming, all complete, live on GitHub Pages
**Canonical index:** `.planning/WORKSHOPS.md`

---

## Phase 1 — Rename Workshops 6–10 (week-# → workshop-#)

**Goal:** All `week-N-*` directories renamed to `workshop-N-*` with updated numbers and canonical titles. Root index updated. One workshop per plan.

**Why sequential:** Each rename touches the root index. Doing them one at a time prevents conflicts and lets us verify GitHub Pages after each.

### Plans

| Plan | Workshop | Old Directory | New Directory | Title Change? |
|------|---------|---------------|---------------|---------------|
| 1.1 | Workshop 6 | `week-5-pricing-monetization/` | `workshop-6-pricing-monetization/` | Pricing & Monetization → Monetization and Pricing Strategy |
| 1.2 | Workshop 7 | `week-6-messaging-storytelling/` | `workshop-7-messaging-storytelling/` | Messaging & Storytelling → Messaging and Storytelling |
| 1.3 | Workshop 8 | `week-7-gtm-channels-buyer-journey/` | `workshop-8-gtm-channels-buyer-journey/` | GTM Channels & Buyer Journey → GTM Channels and Buyer Journeys |
| 1.4 | Workshop 9 | `week-8-competitive-strategy/` | `workshop-9-competitive-strategy/` | No title change |
| 1.5 | Workshop 10 | `week-9-map-buyer-stakeholders/` | `workshop-10-map-buyer-stakeholders/` | How to Map Buying Stakeholders → Buyer Stakeholder Mapping |

**Each plan does:**
1. `git mv` old directory to new directory
2. Update internal nav links in `activity-unified.html` (verify — should be relative, likely no change needed)
3. Update `index.html` (workshop landing page): title, card links, back links
4. Update root `index.html`: card href, workshop-number div, title text
5. Update `.planning/WORKSHOPS.md` status for that workshop
6. Verify on GitHub Pages
7. Commit

**Acceptance criteria:**
- [ ] Old directory gone from git
- [ ] New directory present with all files intact
- [ ] Root index links to new directory and shows correct number + title
- [ ] Workshop landing page opens and shows correct title
- [ ] All 3 activity deep-links work (`?step=1`, `?step=2`, `?step=3`)
- [ ] WORKSHOPS.md updated to ✅ Complete for this workshop

---

## Phase 2 — Build Workshop 3: Customer Value Mapping

**Goal:** Full unified SPA for Workshop 3, matching the standard of all other complete workshops. Replace the `week-4-customer-value-mapping/` stubs.

**Reference:** `workshop-8-gtm-channels-buyer-journey/` (gold standard)

### Plans

| Plan | Description |
|------|-------------|
| 2.1 | Define 3-step activity content for Customer Value Mapping |
| 2.2 | Build `workshop-3-customer-value-mapping/activity-unified.html` |
| 2.3 | Build `workshop-3-customer-value-mapping/index.html` landing page |
| 2.4 | Add Workshop 3 to root `index.html` in correct position (between W2 and W4) |
| 2.5 | Remove `week-4-customer-value-mapping/` stubs, update WORKSHOPS.md |

**Acceptance criteria:**
- [ ] activity-unified.html passes 10-point consistency checklist
- [ ] Dev mode loads test data with currentStep:3
- [ ] All 3 steps navigable, back/forward works
- [ ] Markdown export copies to clipboard
- [ ] localStorage persists and restores state
- [ ] Landing page shows 3 cards with correct deep-links
- [ ] Workshop appears at position 3 in root index
- [ ] Old stub directory deleted

---

## Phase 3 — Migrate Workshop 11: Strategic Partnerships

**Goal:** Migrate `week-x-strategic-partnerships/` from A-version individual files to unified SPA pattern. Add to root index.

### Plans

| Plan | Description |
|------|-------------|
| 3.1 | Audit existing A-version content — extract activity data for all 3 steps |
| 3.2 | Build `workshop-11-strategic-partnerships/activity-unified.html` from extracted content |
| 3.3 | Build `workshop-11-strategic-partnerships/index.html` landing page |
| 3.4 | Add Workshop 11 to root `index.html` |
| 3.5 | Archive/remove old A-version files, update WORKSHOPS.md |

**Acceptance criteria:**
- [ ] All content from A-version files preserved in unified SPA
- [ ] activity-unified.html passes 10-point consistency checklist
- [ ] Landing page with 3-card deep-linking
- [ ] Appears at position 11 in root index
- [ ] Old A-version files archived or removed

---

## Phase 4 — Cleanup (CONCERNS.md)

**Goal:** Address remaining technical debt. No functional changes — polish and correctness.

### Plans

| Plan | Description | Priority |
|------|-------------|----------|
| 4.1 | Switch all workshops from React development to production CDN builds | HIGH — affects load time |
| 4.2 | Remove/archive root-level dev artifacts (test_*.html, gtm_bundle.md, etc.) | MEDIUM |
| 4.3 | Fix or hide placeholder Workshop Slides links (W4, W6, W11 landing pages) | MEDIUM |
| 4.4 | Delete `market_entry_readiness/index-orig.html` orphan | LOW |
| 4.5 | Update `docs/TODO.md` to reflect current state | LOW |

---

## Completion Criteria

The project is done when:

- [ ] All 11 workshops live on GitHub Pages with workshop-N numbering
- [ ] All titles match the canonical list in WORKSHOPS.md
- [ ] Workshop 3 fully built
- [ ] Workshop 11 migrated to unified SPA
- [ ] No `week-#` directory names remain
- [ ] React production builds in use
- [ ] Root index shows all 11 workshops in order

---

*Created: 2026-04-08*
