# Testing Patterns

**Analysis Date:** 2026-04-08

## Overview

This is a static site with no test framework, no test runner, and no automated test suite. All testing is manual, browser-based, and driven by the dev mode system built into every activity.

## Dev Mode Testing (Primary Method)

Every `activity-unified.html` has an embedded dev mode for one-click test data loading.

**How to activate:**
1. Open the HTML file in a browser (or local server)
2. Double-click the `<h1>` title
3. The title turns orange and shows the `🔧` icon
4. Click "Fill Test Data" button to populate all fields
5. Verify the activity jumps to the completion screen (step 3)

**What dev mode tests:**
- All form fields populate correctly from embedded JSON
- State variable names in `devFillData()` match actual component state
- The completion/export view renders without errors
- Markdown export generates correctly

**Dev mode implementation (standard pattern):**
```javascript
const [devMode, setDevMode] = useState(false);
const [devFillLoading, setDevFillLoading] = useState(false);

const toggleDevMode = () => {
    setDevMode(!devMode);
    console.log(devMode ? '🔒 Dev mode disabled' : '🔓 Dev mode enabled');
};

const devFillData = () => {
    setDevFillLoading(true);
    try {
        const testData = JSON.parse(document.getElementById('testData').textContent);
        setState(testData);
        console.log('✅ Dev data loaded successfully');
    } catch (error) {
        console.error('❌ Failed to load dev data:', error);
    } finally {
        setDevFillLoading(false);
    }
};
```

For complex activities with multiple state variables (e.g., `week-9-map-buyer-stakeholders/activity-unified.html`), `devFillData` sets each state variable individually rather than replacing the entire state object:
```javascript
const devFillData = () => {
    setDevFillLoading(true);
    try {
        const testData = JSON.parse(document.getElementById('testData').textContent);
        setSelectedBuyingJobs(testData.selectedBuyingJobs || []);
        setJobJustifications(testData.jobJustifications || {});
        setBuyingGroupType(testData.buyingGroupType || 'Type3');
        setStakeholders(testData.stakeholders || []);
        setCurrentStep(testData.currentStep || 3);
        console.log('✅ Dev data loaded successfully');
    } catch (error) {
        console.error('❌ Failed to load dev data:', error);
    } finally {
        setDevFillLoading(false);
    }
};
```

## Test Data Format & Location

**Two locations for test data:**

### 1. Centralized JSON files (source of truth for standalone testing)

Located in `test_data/` at the project root. Used by older A-version files.

```
test_data/
├── competitive-activity-1A.json
├── competitive-activity-2A.json
├── competitive-activity-3A.json
├── ecp-activity-1A.json
├── market-entry-activity-1A.json
├── positioning-activity-1A.json
├── pricing-activity-1A.json
├── problems-activity-1A.json
└── ...
```

**Naming pattern:** `[topic]-activity-[number]A.json`

### 2. Embedded in HTML (used by all current unified activities)

Each `activity-unified.html` embeds its test data directly in a script tag:

```html
<script type="application/json" id="testData">
{
    "currentStep": 3,
    "step1": {
        "fieldName": "Realistic test value...",
        "anotherField": "Another value..."
    },
    "channels": [
        { "id": 1, "channelType": "Direct", "channelName": "Content Marketing", ... }
    ]
}
</script>
```

**The `id="testData"` attribute is required** — `devFillData()` reads it via `document.getElementById('testData').textContent`.

## Test Data Quality Standards

Test data must represent a realistic B2B SaaS company scenario. The project uses a fictional API monitoring startup ("POSH") as a consistent reference company across most test data.

**Required fields:**
- `currentStep: 3` — jump to completion/export view to test the full output
- All form fields that the activity collects, using the exact state variable names
- Realistic text of sufficient length to pass word count validation (5+ words per field minimum)

**Good test data example from `test_data/pricing-activity-1A.json`:**
```json
{
  "selectedMetric": "B",
  "rationale": "Our customers process millions of API calls daily and their usage directly correlates with the business value they get from our predictive monitoring platform.",
  "problemSolved": "Eliminates the need for complex infrastructure scaling decisions and prevents costly downtime incidents before they occur.",
  "pricePerUnit": "0.001",
  "baseComponent": "subscription",
  "valueScaling": "usage",
  "customerJustification": "Monthly subscription covers our infrastructure and platform costs...",
  "currentStep": 3
}
```

**Anti-patterns to avoid:**
- Placeholder text ("Lorem ipsum", "test value", "example")
- Single-word field values that fail word count validation
- Missing `currentStep: 3`
- Field names that don't match the component's `useState` variable names

## Export Testing

Test the markdown export on every activity:

1. Load test data via dev mode
2. Verify the completion section renders on step 3
3. Click "Copy Strategy Summary" (or equivalent)
4. Paste in Google Docs using **Edit → Paste special → Paste from markdown**
5. Verify headers, bullets, and formatting render correctly

**Clipboard API used:**
```javascript
navigator.clipboard.writeText(generateMarkdown()).then(() => {
    alert('Strategy exported to clipboard!');
});
```

Note: Week-7 uses `alert()` for copy confirmation. Week-5 uses `alert()` as well. No floating notification pattern in the unified activities (that pattern is in `CLAUDE.md` as a reference but not consistently implemented).

## URL Deep-Link Testing

Each `index.html` links to `activity-unified.html?step=1`, `?step=2`, `?step=3`. Test that URL params correctly override localStorage:

1. Complete the activity to step 2 (saved in localStorage)
2. Navigate to `activity-unified.html?step=1` directly
3. Verify step 1 renders (URL param wins over saved state)

**URL param reading pattern:**
```javascript
// Simpler pattern (week-7, week-5, week-6, market-entry, problems, positioning, finding):
const params = new URLSearchParams(window.location.search);
const stepParam = params.get('step');
if (stepParam) {
    initialState.currentStep = parseInt(stepParam, 10);
}

// Safer pattern with bounds checking (week-9):
const urlStep = new URLSearchParams(window.location.search).get('step');
if (urlStep && [1, 2, 3].includes(parseInt(urlStep))) {
    return parseInt(urlStep);
}
```

## LocalStorage Persistence Testing

Each activity persists state to localStorage under a unique key.

**Key pattern:** `workshopState_[snake_case_name]`
- `workshopState_gtm_channels_buyer_journey` — `week-7-gtm-channels-buyer-journey/activity-unified.html`
- `workshopState_competitive_strategy` — `week-8-competitive-strategy/activity-unified.html`

**Test persistence:**
1. Fill in several fields
2. Reload the page
3. Verify all fields still contain the entered values

**Test reset:**
1. Click "Reset Workshop" in the footer nav bar
2. Confirm the `confirm()` dialog
3. Verify page reloads with blank fields

## Standalone Test Files

Several HTML files exist at the project root for testing specific subsystems:

| File | Purpose |
|------|---------|
| `test-code-validation.html` | Validates code generation/validation logic |
| `test-generate-code.html` | Tests code generation output |
| `test_decode.html` | Tests data decode functionality |
| `test_import.html` | Tests data import functionality |

These are browser-opened standalone files, not part of a test runner.

## Testing Directory

`testing/` contains text input/output files used during manual testing of code generation:
```
testing/
├── generate-test-code.js
├── test-code-day1-act-2-output.txt
├── test-code-ecp-act-1-output.txt
├── test-code-market-entry-input.txt
└── ...
```

These are scratch files for manual validation, not automated tests.

## Manual Testing Checklist

For any new or modified activity:

**Functional:**
- [ ] Dev mode activates on double-click of title
- [ ] Title turns orange and shows `🔧` when dev mode is active
- [ ] "Fill Test Data" button loads all fields correctly
- [ ] Activity advances to step 3 after dev fill (`currentStep: 3` in test data)
- [ ] Word count feedback shows green checkmark when threshold is met
- [ ] "Continue" button advances steps
- [ ] "Back" button is hidden on step 1
- [ ] "Reset Workshop" clears localStorage and reloads blank

**Export:**
- [ ] Markdown export textarea renders populated content on step 3
- [ ] Copy button copies to clipboard without error
- [ ] Markdown pastes correctly into Google Docs

**Navigation:**
- [ ] "Back to Workshop" link → `index.html` (same directory)
- [ ] "All GTM Workshops" link → `../index.html` (project root)
- [ ] `?step=1`, `?step=2`, `?step=3` URL params override localStorage

**Responsive:**
- [ ] Layout works at 1366×768 (laptop)
- [ ] Layout works at 1920×1080 (desktop)
- [ ] Step indicator text hidden on small screens (`hidden md:block`)

## Browser Compatibility

Test in: Chrome (primary), Firefox, Safari.

**Known limitations:**
- `navigator.clipboard.writeText()` requires HTTPS or localhost — falls back to `alert()` on file:// protocol in some browsers
- Babel transpilation runs in-browser, which means first load is slower than a compiled bundle

## Viewport / Server Setup

```bash
# Run a local server to avoid file:// clipboard restrictions
python3 -m http.server 8000
# Then open: http://localhost:8000/week-7-gtm-channels-buyer-journey/activity-unified.html
```

---

*Testing analysis: 2026-04-08*
