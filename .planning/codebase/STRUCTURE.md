# Codebase Structure

**Analysis Date:** 2026-04-08

## Directory Layout

```
gtm-workshops/
├── index.html                              # Root landing page — lists all workshops
├── icons/                                  # Shared icon assets (Google product logos)
├── test_data/                              # Centralized test data JSON files
├── docs/                                   # Internal specs and standards
├── testing/                                # Browser-based test HTML files
├── .github/workflows/                      # GitHub Pages deployment workflow
├── .planning/                              # GSD planning docs (not deployed)
├── .claude/                                # Claude skills, agents, personas (not deployed)
│
├── problems_worth_solving/                 # Workshop 1 — Track 1
├── finding_your_early_customers/           # Workshop 2 — Track 1
├── positioning_basics/                     # Workshop 3 — Track 1
├── market_entry_readiness/                 # Workshop 4 — Track 1
│
├── week-4-customer-value-mapping/          # Week 4 — Track 2 (legacy A-version files)
├── week-5-pricing-monetization/            # Week 5 — Track 2
├── week-6-messaging-storytelling/          # Week 6 — Track 2
├── week-7-gtm-channels-buyer-journey/      # Week 7 — Track 2 (gold standard reference)
├── week-8-competitive-strategy/            # Week 8 — Track 2
├── week-9-map-buyer-stakeholders/          # Week 9 — Track 2
│
├── week-x-strategic-partnerships/          # Strategic Partnerships (legacy A-version files)
│
└── _archive/                               # Project-level archived files
```

## Workshop Directory Pattern (Standard — 7 of 9 workshops)

```
[workshop-dir]/
├── index.html              # Workshop landing page (3-card layout, links to activity-unified.html?step=1/2/3)
├── activity-unified.html   # Single-file SPA containing all 3 activities
└── _archive/               # Previous versions of activity files
```

**Applies to:**
- `problems_worth_solving/`
- `finding_your_early_customers/`
- `positioning_basics/`
- `market_entry_readiness/`
- `week-5-pricing-monetization/`
- `week-6-messaging-storytelling/`
- `week-7-gtm-channels-buyer-journey/` ← gold standard reference
- `week-8-competitive-strategy/`
- `week-9-map-buyer-stakeholders/`

## Workshop Directory Pattern (Legacy A-Version — 2 workshops)

```
[workshop-dir]/
├── index.html                          # Workshop landing page (links to separate activity HTML files)
├── [topic]-activity-1A.html            # Activity 1 (standalone React SPA)
├── [topic]-activity-2A.html            # Activity 2 (standalone React SPA)
└── [topic]-activity-3A.html            # Activity 3 (standalone React SPA)
```

**Applies to:**
- `week-4-customer-value-mapping/` — files: `customer-value-activity-[1-3]A.html`
- `week-x-strategic-partnerships/` — files: `partnerships-activity-[1-3]A.html`

**Note:** These workshops do NOT use the `activity-unified.html` + `?step=N` pattern. Each activity is a separate HTML file with its own React component.

## Directory Purposes

**`test_data/`:**
- Purpose: Centralized JSON files containing realistic test data for dev mode
- Contains: One JSON file per A-version activity
- Key files: `problems-activity-1A.json`, `pricing-activity-1A.json`, `competitive-activity-1A.json`, etc.
- Note: The unified `activity-unified.html` files embed test data directly in the HTML file — `test_data/` JSON files correspond to the legacy A-version activities only
- Naming: `[topic]-activity-[N]A.json` matching the corresponding HTML file

**`docs/`:**
- Purpose: Internal project specifications and standards
- Contains: `activity_standards.md`, `dev-mode-spec.md`, `design-specifications.md`, `TODO.md`
- Not deployed as navigable pages — reference only for developers

**`icons/`:**
- Purpose: Shared static assets — Google product logos used in workshop landing pages
- Key files: `Google_Slides_Logo_512px.png`, `Google_Docs_Logo_512px.png`, `Google_Sheets_Logo_512px.png`, `Google_Forms_Logo_512px.png`
- Referenced from workshop `index.html` as `../icons/[filename]`

**`testing/`:**
- Purpose: Browser-based test HTML files
- Referenced from root: `test-code-validation.html`, `test-generate-code.html`, `test_decode.html`, `test_import.html`

**`.planning/`:**
- Purpose: GSD workflow planning documents — not deployed
- Contains: `codebase/` (architecture docs), phase plans, context docs
- Generated: No — maintained by GSD commands and Claude sessions
- Committed: Yes

**`_archive/`:**
- Purpose: Deprecated files preserved for reference
- Contains: `week-8-archive/` (old week-8 activity HTML files), `docs/_archive/` (old progress code docs)
- Generated: No
- Committed: Yes

## Key File Locations

**Entry Points:**
- `index.html`: Root landing page — two-track workshop grid
- `[workshop-dir]/index.html`: Workshop landing page — 3-activity card list
- `[workshop-dir]/activity-unified.html`: Workshop SPA — all 3 activities

**Gold Standard Reference:**
- `week-7-gtm-channels-buyer-journey/index.html`: Reference implementation for workshop landing page design
- `week-7-gtm-channels-buyer-journey/activity-unified.html`: Reference implementation for unified SPA pattern (727 lines)

**Deployment:**
- `.github/workflows/static.yml`: GitHub Pages deploy on push to `main`

**Project Standards:**
- `docs/activity_standards.md`: Component patterns and design specs
- `docs/dev-mode-spec.md`: Dev mode implementation guide
- `docs/design-specifications.md`: Visual design standards

## Naming Conventions

**Workshop Directories:**
- Track 1 (GTM Intro): `[topic_with_underscores]/` e.g., `problems_worth_solving/`, `finding_your_early_customers/`
- Track 2 (GTM Fundamentals): `week-[N]-[topic-with-hyphens]/` e.g., `week-7-gtm-channels-buyer-journey/`
- Special: `week-x-strategic-partnerships/` (not yet in the numbered sequence)

**Activity Files:**
- Unified SPA (standard): `activity-unified.html` — same filename in every workshop directory
- A-version (legacy): `[topic]-activity-[N]A.html` e.g., `customer-value-activity-1A.html`
- Workshop landing: `index.html` — same filename in every workshop directory

**Test Data Files:**
- Pattern: `[topic]-activity-[N]A.json` — mirrors the A-version HTML filename
- Examples: `problems-activity-1A.json`, `market-entry-activity-2A.json`, `competitive-activity-3A.json`

**localStorage Keys:**
- Pattern: `workshopState_[snake_case_name]`
- Examples: `workshopState_gtm_channels_buyer_journey`, `workshopState_competitive_strategy`, `workshopState_buyer_stakeholders`

## Where to Add New Code

**New Workshop (unified pattern):**
1. Create directory: `week-[N]-[topic-with-hyphens]/`
2. Create landing page: copy `week-7-gtm-channels-buyer-journey/index.html`, update titles and links
3. Create SPA: copy `week-7-gtm-channels-buyer-journey/activity-unified.html`, update `WORKSHOP_STORAGE_KEY`, `steps` array, `renderStep1/2/3` functions, embedded test data
4. Add card to `index.html` under appropriate track section

**New Activity (A-version, if needed):**
1. Create `[topic]-activity-[N]A.html` inside the workshop directory
2. Create `test_data/[topic]-activity-[N]A.json` with realistic test data
3. Link from the workshop `index.html`

**Test Data for Unified Workshop:**
- Embed directly in `activity-unified.html` inside `<script type="application/json" id="testData">` — do NOT add to `test_data/` directory

**Shared Icons:**
- Add to `icons/` — reference from HTML as `../icons/[filename]` (relative from workshop subdirectory)

**Specs and Standards:**
- Add to `docs/` — these are not linked pages, just developer reference

## Special Directories

**`_archive/` (at root and inside workshop dirs):**
- Purpose: Deprecated HTML files preserved for reference
- Generated: No
- Committed: Yes — treat as read-only

**`.planning/`:**
- Purpose: GSD workflow docs — phase plans, context, codebase analysis
- Generated: By GSD commands
- Committed: Yes

**`.claude/`:**
- Purpose: Project-specific Claude skills, agents, personas
- Generated: No — maintained manually
- Committed: Yes

---

## Workshop Inventory

| Directory | Track | Pattern | SPA File Size |
|-----------|-------|---------|---------------|
| `problems_worth_solving/` | 1 | unified | 641 lines |
| `finding_your_early_customers/` | 1 | unified | 761 lines |
| `positioning_basics/` | 1 | unified | 632 lines |
| `market_entry_readiness/` | 1 | unified | 824 lines |
| `week-4-customer-value-mapping/` | 2 | A-version | n/a |
| `week-5-pricing-monetization/` | 2 | unified | 786 lines |
| `week-6-messaging-storytelling/` | 2 | unified | 691 lines |
| `week-7-gtm-channels-buyer-journey/` | 2 | unified | 727 lines |
| `week-8-competitive-strategy/` | 2 | unified | 1597 lines |
| `week-9-map-buyer-stakeholders/` | 2 | unified | 1305 lines |
| `week-x-strategic-partnerships/` | — | A-version | n/a |

---

*Structure analysis: 2026-04-08*
