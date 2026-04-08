# Coding Conventions

**Analysis Date:** 2026-04-08

## File & Directory Naming

**Activity files:**
- Unified SPA: `activity-unified.html` — one per workshop directory (current standard)
- Legacy A-version: `[topic]-activity-[number]A.html` — kept in `_archive/` subdirectories
- Landing pages: `index.html` — one per workshop directory
- Test data: `test_data/[topic]-activity-[number]A.json` — centralized at project root

**Workshop directories:**
- Older workshops: `[topic_with_underscores]/` (e.g., `problems_worth_solving/`, `positioning_basics/`)
- Newer workshops: `week-[N]-[topic-with-hyphens]/` (e.g., `week-5-pricing-monetization/`)
- Both patterns coexist — do not rename existing directories

**Examples:**
```
week-7-gtm-channels-buyer-journey/activity-unified.html
week-5-pricing-monetization/activity-unified.html
problems_worth_solving/activity-unified.html
test_data/pricing-activity-1A.json
test_data/competitive-activity-2A.json
```

## Component Architecture

Every `activity-unified.html` is a self-contained single-file SPA with this structure:

```html
<head>
  <!-- CDN: React 18, ReactDOM 18, Babel standalone, Tailwind CSS -->
  <!-- Google Fonts: Open Sans + Raleway -->
  <style>/* Custom CSS classes not available in Tailwind */</style>
</head>
<body>
  <div id="root"></div>
  <script type="application/json" id="testData">{ ... }</script>
  <script type="text/babel">
    // Inline SVG icon components
    // Shared helper components (WordCountFeedback, StepIndicator, etc.)
    // Main WorkshopApp component
    // ReactDOM.createRoot mount
  </script>
</body>
```

**No build process. No imports. No modules.** All code runs via Babel transpilation in the browser.

## React Patterns

**Rendering — always use React 18 createRoot:**
```javascript
// CORRECT — required in all activities
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WorkshopApp />);

// WRONG — deprecated, do not use
ReactDOM.render(<WorkshopApp />, document.getElementById('root'));
```

**Hooks used:**
- `useState` — primary state management
- `useEffect` — localStorage sync and side effects
- `useMemo` — derived completion flags (used in week-8, week-9)
- `useCallback` — not consistently used; avoid unless needed for performance

**No external state management libraries.** `useState` only.

## State Management Pattern

**Unified state object with nested step data:**
```javascript
const WORKSHOP_STORAGE_KEY = 'workshopState_[workshop_name]';

const [state, setState] = useState(() => {
    const saved = localStorage.getItem(WORKSHOP_STORAGE_KEY);
    const initialState = saved ? JSON.parse(saved) : {
        currentStep: 1,
        step1: { field1: '', field2: '' },
        step2: { fieldA: '', fieldB: '' },
        // step3 for 3-activity workshops
    };

    // URL param overrides localStorage step
    const params = new URLSearchParams(window.location.search);
    const stepParam = params.get('step');
    if (stepParam) {
        initialState.currentStep = parseInt(stepParam, 10);
    }

    return initialState;
});

// Persist to localStorage on every state change
useEffect(() => {
    localStorage.setItem(WORKSHOP_STORAGE_KEY, JSON.stringify(state));
}, [state]);
```

**State update helpers:**
```javascript
// Top-level update
const updateState = (updates) => setState(prev => ({ ...prev, ...updates }));

// Step-scoped update
const updateStepState = (step, updates) => {
    setState(prev => ({ ...prev, [step]: { ...prev[step], ...updates } }));
};

// Nested update (e.g., stage → field)
const handleStageUpdate = (stage, field, value) => {
    setState(prev => ({
        ...prev,
        step1: { ...prev.step1, [stage]: { ...prev.step1[stage], [field]: value } }
    }));
};
```

**Storage key convention:** `workshopState_[snake_case_workshop_name]`
- Example: `workshopState_gtm_channels_buyer_journey`
- Example: `workshopState_competitive_strategy`

## Dev Mode Pattern

All activities implement identical dev mode. This is a hard convention.

```javascript
// State
const [devMode, setDevMode] = useState(false);
const [devFillLoading, setDevFillLoading] = useState(false);  // for activities with loading state

// Toggle — double-click on h1 title
const toggleDevMode = () => {
    setDevMode(!devMode);
    console.log(devMode ? '🔒 Dev mode disabled' : '🔓 Dev mode enabled');
};

// Data loader
const devFillData = () => {
    setDevFillLoading(true);
    try {
        const testData = JSON.parse(document.getElementById('testData').textContent);
        setState(testData);  // simple: replace entire state
        // OR for complex state: set each state variable individually
        console.log('✅ Dev data loaded successfully');
    } catch (error) {
        console.error('❌ Failed to load dev data:', error);
    } finally {
        setDevFillLoading(false);
    }
};
```

**Title with dev mode toggle:**
```jsx
<h1
    className={`text-xl font-bold cursor-pointer select-none ${devMode ? 'text-orange-600' : 'text-gray-800'}`}
    onDoubleClick={toggleDevMode}
    title="Double-click to toggle dev mode"
>
    Activity Title {devMode && '🔧'}
</h1>
```

**Dev mode UI panel (shown only when active):**
```jsx
{devMode && (
    <div className="mt-3 pt-3 border-t border-orange-200">
        <div className="flex items-center justify-between">
            <span className="text-xs text-orange-600 font-medium">🔧 Dev Mode Active</span>
            <button
                onClick={devFillData}
                disabled={devFillLoading}
                className="bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
                {devFillLoading ? '⏳ Loading...' : '📝 Fill Test Data'}
            </button>
        </div>
    </div>
)}
```

## Validation Pattern

**Word count is the primary validation mechanism.** Character count is not used.

**WordCountFeedback component (present in all activities):**
```javascript
const WordCountFeedback = ({ text = '', minWords = 5 }) => {
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const isValid = wordCount >= minWords;
    return (
        <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">(write {minWords}+ words)</span>
            <span className={`text-sm flex items-center gap-1 ${isValid ? 'text-green-600' : 'text-gray-500'}`}>
                {wordCount} words {isValid && <CheckCircle size={14} />}
            </span>
        </div>
    );
};
```

**Step completion functions:**
```javascript
const getWordCount = (text) => text.trim().split(/\s+/).filter(w => w.length > 0).length;

const isStep1Complete = () => {
    return state.step1.selectedMetric &&
           getWordCount(state.step1.rationale) >= 5 &&
           getWordCount(state.step1.problemSolved) >= 5;
};
```

**Threshold examples from actual code:**
- Short fields: `>= 5` words (default)
- Medium fields: `>= 12` to `>= 15` words
- Long analysis fields: `>= 20` words
- Source: `week-5-pricing-monetization/activity-unified.html` lines 317–343

**Step progression:** The "Continue" button advances to the next step. Validation is advisory (word count shown), not blocking on most activities. Some activities check `isStepNComplete()` to style the step indicator green.

## Icon Pattern

No external icon library. All icons are inline SVG React components:

```javascript
const CheckCircle = ({ size = 20, className = "" }) => (
    <svg className={`lucide-icon ${className}`} width={size} height={size}
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22,4 12,14.01 9,11.01"/>
    </svg>
);
```

Common icons defined per-file: `CheckCircle`, `TrashIcon`, `PlusCircleIcon`, `FileText`, `Info`, `Shield`. Copy from an existing activity when adding icons.

## Color Standards

| Color | Tailwind Class | Hex | Usage |
|-------|---------------|-----|-------|
| Primary orange | `orange-500` | `#FF9000` | Active steps, CTA buttons, focus rings |
| Orange hover | `orange-600` | — | Button hover state |
| Orange bg | `orange-50` | — | Dev mode panel, info banners |
| Success green | `green-500` / `green-600` | — | Completed steps, export button |
| Info blue | `blue-500` / `blue-50` | — | Final step highlights, info banners |
| Error red | `red-500` | — | Delete buttons, validation errors |
| Step inactive | `gray-400` | — | Future steps in StepIndicator |

**CSS custom properties in `<style>` block:**
```css
.step-icon {
    background-color: #FF9000;  /* matches orange-500 */
}
.laptop-textarea {
    min-height: 80px;
    max-height: 160px;
    transition: max-height 0.3s ease;
    resize: vertical;
}
.animate-fadeIn {
    animation: fadeIn 0.3s ease-in;
}
```

## Layout Standards

**Max width:** `max-w-[900px] mx-auto` on the root container.

**Navigation header (both links required):**
```jsx
<div className="flex justify-between items-center w-full mb-2">
    <a href="index.html" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
        ← Back to Workshop
    </a>
    <a href="../index.html" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
        All GTM Workshops ↑
    </a>
</div>
```

**Footer navigation (bottom of page):**
```jsx
<div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
    <button onClick={() => updateState({ currentStep: Math.max(1, state.currentStep - 1) })}
            disabled={state.currentStep === 1}
            className="...">Back</button>
    <button onClick={() => { if (confirm('Clear all work?')) { localStorage.removeItem(WORKSHOP_STORAGE_KEY); window.location.reload(); } }}
            className="text-gray-400 text-xs hover:text-red-500">Reset Workshop</button>
    <button onClick={() => updateState({ currentStep: state.currentStep + 1 })}
            className={`... ${state.currentStep === 3 ? 'bg-green-600' : 'bg-orange-500'}`}>
        {state.currentStep === 3 ? 'Workshop Complete' : 'Continue'}
    </button>
</div>
```

## Markdown Export Pattern

Export appears on the final step (step 3) in a completion section.

```jsx
{/* Completion section — shown when step 3 is reached */}
<div className="p-8 bg-green-50 border-2 border-green-200 rounded-2xl animate-fadeIn">
    <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
        <CheckCircle size={32} />
        Strategy Complete
    </h3>

    {/* Read-only markdown preview */}
    <textarea
        readOnly
        className="w-full h-48 p-4 font-mono text-[10px] border border-gray-200 rounded-lg bg-gray-50"
        value={generateMarkdown()}
    />

    {/* Copy button */}
    <button
        onClick={() => {
            navigator.clipboard.writeText(generateMarkdown());
            alert('Strategy exported to clipboard!');
        }}
        className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
    >
        Copy Strategy Summary
    </button>
</div>
```

**`generateMarkdown()` function:** Defined as a named function (not arrow) at the component level, after the render functions. Returns a template literal string with markdown headers and bullet points. Source: `week-5-pricing-monetization/activity-unified.html` line 675.

## Landing Page Standards

- Gold standard reference: `week-7-gtm-channels-buyer-journey/index.html`
- Each `index.html` links to `activity-unified.html?step=1`, `?step=2`, `?step=3`
- Card titles and descriptions must match the `steps` array in `activity-unified.html`
- Back link: `../index.html` (main landing page)

## StepIndicator Component

Present in every activity. Shared visual pattern:

```javascript
const StepIndicator = ({ currentStep, steps, onStepClick }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
            {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                    <div
                        className={`flex items-center ${onStepClick ? 'cursor-pointer' : ''}`}
                        onClick={() => onStepClick && onStepClick(step.number)}
                    >
                        <div className={`step-icon ${
                            currentStep === step.number ? 'bg-orange-500' :
                            currentStep > step.number ? 'bg-green-500' : 'bg-gray-400'
                        }`}>
                            {currentStep > step.number ? <CheckCircle size={24} /> : step.number}
                        </div>
                        <div className="ml-3 hidden md:block">
                            <p className="text-sm font-medium text-gray-900">{step.title}</p>
                            <p className="text-xs text-gray-500">{step.desc}</p>
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-1 mx-4 h-px bg-gray-300"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    </div>
);
```

---

*Convention analysis: 2026-04-08*
