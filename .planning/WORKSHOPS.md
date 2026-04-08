# Workshop Canonical Index

**Source of truth for workshop numbering, titles, directories, and status.**

Update this file whenever a workshop is renamed, renumbered, built, or migrated.

---

## Workshop Registry

| # | Title | Directory | Status | Notes |
|---|-------|-----------|--------|-------|
| 1 | Problems Worth Solving | `problems_worth_solving/` | ✅ Complete | Unified SPA |
| 2 | Finding Your Early Customers | `finding_your_early_customers/` | ✅ Complete | Unified SPA |
| 3 | Customer Value Mapping | `workshop-3-customer-value-mapping/` | 🔴 Not built | Needs full build; currently stubs in `week-4-customer-value-mapping/` |
| 4 | Positioning and Value Proposition Basics | `workshop-4-positioning-and-value-proposition-basics/` | ⚠️ Rename pending | Currently `positioning_basics/`; renumber 3→4 |
| 5 | Market Entry Readiness | `workshop-5-market-entry-readiness/` | ⚠️ Rename pending | Currently `market_entry_readiness/`; renumber 4→5 |
| 6 | Monetization and Pricing Strategy | `workshop-6-pricing-monetization/` | ⚠️ Rename pending | Currently `week-5-pricing-monetization/`; title updated |
| 7 | Messaging and Storytelling | `workshop-7-messaging-storytelling/` | ⚠️ Rename pending | Currently `week-6-messaging-storytelling/`; title updated |
| 8 | GTM Channels and Buyer Journeys | `workshop-8-gtm-channels-buyer-journey/` | ⚠️ Rename pending | Currently `week-7-gtm-channels-buyer-journey/`; title updated |
| 9 | Competitive Strategy | `workshop-9-competitive-strategy/` | ⚠️ Rename pending | Currently `week-8-competitive-strategy/` |
| 10 | Buyer Stakeholder Mapping | `workshop-10-map-buyer-stakeholders/` | ⚠️ Rename pending | Currently `week-9-map-buyer-stakeholders/`; title updated |
| 11 | Strategic Partnerships | `workshop-11-strategic-partnerships/` | ⚠️ Rename pending | Currently `week-x-strategic-partnerships/`; A-version, needs migration |

---

## Directory Rename Map

Tracks old → new directory names for the week-# → workshop-# migration.

| Old Directory | New Directory | Status |
|---------------|---------------|--------|
| `positioning_basics/` | `workshop-4-positioning-and-value-proposition-basics/` | ⚠️ Pending |
| `market_entry_readiness/` | `workshop-5-market-entry-readiness/` | ⚠️ Pending |
| `week-5-pricing-monetization/` | `workshop-6-pricing-monetization/` | ⚠️ Pending |
| `week-6-messaging-storytelling/` | `workshop-7-messaging-storytelling/` | ⚠️ Pending |
| `week-7-gtm-channels-buyer-journey/` | `workshop-8-gtm-channels-buyer-journey/` | ⚠️ Pending |
| `week-8-competitive-strategy/` | `workshop-9-competitive-strategy/` | ⚠️ Pending |
| `week-9-map-buyer-stakeholders/` | `workshop-10-map-buyer-stakeholders/` | ⚠️ Pending |
| `week-x-strategic-partnerships/` | `workshop-11-strategic-partnerships/` | ⚠️ Pending |
| `week-4-customer-value-mapping/` | *(delete — stubs only, replaced by workshop-3 build)* | 🔴 Remove |
| `problems_worth_solving/` | *(keep as-is)* | ✅ No rename needed |
| `finding_your_early_customers/` | *(keep as-is)* | ✅ No rename needed |

---

## Per-Workshop Rename Checklist

When renaming any workshop, verify all of the following:

- [ ] Directory renamed
- [ ] `activity-unified.html` internal nav: `href="index.html"` (Back to Workshop) still correct
- [ ] `activity-unified.html` internal nav: `href="../index.html"` (All Workshops) still correct
- [ ] `index.html` (workshop landing page): card links updated to `activity-unified.html?step=1/2/3`
- [ ] `index.html`: Back link `href="../index.html"` still correct
- [ ] Root `index.html`: card `href` updated to new directory
- [ ] Root `index.html`: card `workshop-number` div updated to new number
- [ ] Root `index.html`: card title updated to canonical title
- [ ] Workshop slides link updated (or hidden if none)
- [ ] This file: status updated to ✅ Complete

---

*Last updated: 2026-04-08 — initial canonical index*
