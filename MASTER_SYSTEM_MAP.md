# GTM Workshop Series: MASTER SYSTEM MAP

## 1. Comprehensive File & Structural Registry

| Workshop | Directory | File | Type | Persistence | Unified? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| W1 | `problems_worth_solving/` | `index.html` | Landing | None | No |
| W1 | `problems_worth_solving/` | `problems-activity-1A.html` | Activity | None | No |
| W1 | `problems_worth_solving/` | `problems-activity-2A.html` | Activity | None | No |
| W1 | `problems_worth_solving/` | `problems-activity-3A.html` | Activity | None | No |
| W2 | `finding_your_early_customers/` | `ecp-activity-1A.html` | Activity | None | No |
| W2 | `finding_your_early_customers/` | `ecp-activity-2A.html` | Activity | None | No |
| W2 | `finding_your_early_customers/` | `ecp-activity-3A.html` | Activity | None | No |
| W2 | `finding_your_early_customers/` | `index.html` | Landing | None | No |
| W3 | `positioning_basics/` | `index.html` | Landing | None | No |
| W3 | `positioning_basics/` | `positioning-activity-1A.html` | Activity | Progress Code (Base64) | No |
| W3 | `positioning_basics/` | `positioning-activity-2A.html` | Activity | Progress Code (Base64) | No |
| W3 | `positioning_basics/` | `positioning-activity-3A.html` | Activity | Progress Code (Base64) | No |
| W4 | `market_entry_readiness/` | `index-orig.html` | Activity | None | No |
| W4 | `market_entry_readiness/` | `index.html` | Landing | None | No |
| W4 | `market_entry_readiness/` | `market-entry-activity-1A.html` | Activity | None | No |
| W4 | `market_entry_readiness/` | `market-entry-activity-2A.html` | Activity | None | No |
| W4 | `market_entry_readiness/` | `market-entry-activity-3A.html` | Activity | None | No |
| W5 | `week-4-customer-value-mapping/` | `customer-value-activity-1A.html` | Activity | None | No |
| W5 | `week-4-customer-value-mapping/` | `customer-value-activity-2A.html` | Activity | None | No |
| W5 | `week-4-customer-value-mapping/` | `customer-value-activity-3A.html` | Activity | None | No |
| W5 | `week-4-customer-value-mapping/` | `index.html` | Landing | None | No |
| W6 | `week-5-pricing-monetization/` | `index.html` | Landing | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-1A-advanced.html` | Activity | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-1A-metric-model.html` | Activity | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-1A.html` | Activity | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-2A-backup.html` | Activity | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-2A.html` | Activity | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-3A-backup.html` | Activity | None | No |
| W6 | `week-5-pricing-monetization/` | `pricing-activity-3A.html` | Activity | None | No |
| W7 | `week-6-messaging-storytelling/` | `index.html` | Landing | None | No |
| W7 | `week-6-messaging-storytelling/` | `messaging-activity-1A.html` | Activity | None | No |
| W7 | `week-6-messaging-storytelling/` | `messaging-activity-2A.html` | Activity | None | No |
| W7 | `week-6-messaging-storytelling/` | `messaging-activity-3A.html` | Activity | None | No |
| W8 | `week-7-gtm-channels-buyer-journey/` | `channels-activity-1A.html` | Activity | None | No |
| W8 | `week-7-gtm-channels-buyer-journey/` | `channels-activity-2A.html` | Activity | None | No |
| W8 | `week-7-gtm-channels-buyer-journey/` | `channels-activity-3A.html` | Activity | None | No |
| W8 | `week-7-gtm-channels-buyer-journey/` | `index.html` | Landing | None | No |
| W9 | `week-8-competitive-strategy/` | `activity-unified.html` | Activity | localStorage | Yes |
| W9 | `week-8-competitive-strategy/` | `index.html` | Landing | None | No |
| W10 | `week-9-map-buyer-stakeholders/` | `activity-unified.html` | Activity | localStorage | Yes |
| W10 | `week-9-map-buyer-stakeholders/` | `index.html` | Landing | None | No |

## 2. Data Persistence Registry (Field Level)

| File | Persistence Key / Mechanism | Data Fields (IDs/State Keys) | Load Logic |
| :--- | :--- | :--- | :--- |
| `problems_worth_solving/problems-activity-1A.html` | None N/A | momentOfRealization, whoExperienced, whyMatters, whatSurprised, howRealProblem | None |
| `problems_worth_solving/problems-activity-2A.html` | None N/A | currentStep, showInstructions, selectedMarkerType, markers, activeMarkerIndex, justification, landingZoneChoice, evidence, hasPlacedStrategic, activityComplete, devMode, devFillLoading | None |
| `problems_worth_solving/problems-activity-3A.html` | None N/A | urgency, importance, value, marketGap, accessibility | None |
| `finding_your_early_customers/ecp-activity-1A.html` | None N/A | currentStep, selectedScenarios, wrongAnswers, activityComplete, devMode, devFillLoading | None |
| `finding_your_early_customers/ecp-activity-2A.html` | None N/A |  | None |
| `finding_your_early_customers/ecp-activity-3A.html` | None N/A |  | None |
| `positioning_basics/positioning-activity-1A.html` | Progress Code (Base64) GSAP2025-* | version, createdAt, lastUpdated, day1, day2_1, day2_2, day3 | Manual (Progress Code) |
| `positioning_basics/positioning-activity-2A.html` | Progress Code (Base64) GSAP2025-* | version, createdAt, lastUpdated, day1, day2_1, day2_2, day3 | Manual (Progress Code) |
| `positioning_basics/positioning-activity-3A.html` | Progress Code (Base64) GSAP2025-* | version, createdAt, lastUpdated, day1, day2_1, day2_2, day3 | Manual (Progress Code) |
| `market_entry_readiness/index-orig.html` | None N/A |  | None |
| `market_entry_readiness/market-entry-activity-1A.html` | None N/A | uniqueAttributes, localStrength, globalLimitation, marketKnowledge, localStrength, globalLimitation, resources, localStrength, globalLimitation, networkRelationships, localStrength, globalLimitation, infrastructure, localStrength, globalLimitation | None |
| `market_entry_readiness/market-entry-activity-2A.html` | None N/A | market_size, japan, us, customer_dynamics, japan, us, competitive_landscape, japan, us, regulatory_environment, japan, us, operational_needs, japan, us | None |
| `market_entry_readiness/market-entry-activity-3A.html` | None N/A | currentStep, entryApproach, resourceAllocation, teamBuilding, milestones, devMode, devFillLoading | None |
| `week-4-customer-value-mapping/customer-value-activity-1A.html` | None N/A |  | None |
| `week-4-customer-value-mapping/customer-value-activity-2A.html` | None N/A |  | None |
| `week-4-customer-value-mapping/customer-value-activity-3A.html` | None N/A |  | None |
| `week-5-pricing-monetization/pricing-activity-1A-advanced.html` | None N/A | customerPains, desiredOutcomes, jobsToBeDone, customerSegments, costOfProblem, currentSolution, selectedCategories, exploredMetrics, baseComponent, outcomeComponent, hybridJustification, primaryValueMetric, measurementApproach, businessJustification, pricePoints, testingApproach, successMetrics, timeline, currentStep, completedAt, devMode, devFillLoading | None |
| `week-5-pricing-monetization/pricing-activity-1A-metric-model.html` | None N/A | selectedMetric, rationale, problemSolved, pricePerUnit, baseComponent, valueScaling, customerJustification, customerExplanation, potentialChallenge, currentStep, completedAt, showGuidance, devMode, devFillLoading | None |
| `week-5-pricing-monetization/pricing-activity-1A.html` | None N/A | selectedMetric, rationale, problemSolved, pricePerUnit, completedAt, showGuidance, devMode, devFillLoading | None |
| `week-5-pricing-monetization/pricing-activity-2A-backup.html` | None N/A | primaryValueMetric, valueMetricReason, baseComponent, valueScaling, customerJustification, customerExplanation, potentialChallenge, currentStep, completedAt, devMode, devFillLoading | None |
| `week-5-pricing-monetization/pricing-activity-2A.html` | None N/A | primaryValueMetric, valueMetricReason, baseComponent, valueScaling, customerJustification, customerExplanation, potentialChallenge, currentStep, completedAt, devMode, devFillLoading | None |
| `week-5-pricing-monetization/pricing-activity-3A-backup.html` | None N/A |  | None |
| `week-5-pricing-monetization/pricing-activity-3A.html` | None N/A | baseComponent, valueScaling, primaryValueMetric, targetCustomer, competitorPricing, substituteCosts, tooExpensive, gettingExpensive, goodValue, bargainPrice, starterPricing, growthPricing, pricingJustification, selectedGuardrails, guardrail1, guardrail2, guardrail3, customerCommunication, currentStep, completedAt, devMode, devFillLoading | None |
| `week-6-messaging-storytelling/messaging-activity-1A.html` | None N/A |  | None |
| `week-6-messaging-storytelling/messaging-activity-2A.html` | None N/A |  | None |
| `week-6-messaging-storytelling/messaging-activity-3A.html` | None N/A |  | None |
| `week-7-gtm-channels-buyer-journey/channels-activity-1A.html` | None N/A | awareness, behaviors, channels, needs, consideration, behaviors, channels, needs, decision, behaviors, channels, needs | None |
| `week-7-gtm-channels-buyer-journey/channels-activity-2A.html` | None N/A | channels, devMode, devFillLoading | None |
| `week-7-gtm-channels-buyer-journey/channels-activity-3A.html` | None N/A | channels, devMode, devFillLoading | None |
| `week-8-competitive-strategy/activity-unified.html` | localStorage `workshopState_competitive_strategy` | devMode, devFillLoading, devMode, devFillLoading, devMode, devFillLoading, showExportSection, currentStep, showFinalExport, customers, competitors, substitutes, suppliers, newEntrants, selectedForces, targetSegment, specificBuyer, urgentProblem, whereNotToPlay, value1, capability1, value2, capability2, value3, capability3, riskiestAssumption, testObjective, theTest, theMetric, criticalCapabilities, requiredSystems, valueMetric, earlySignals, keyRisks, counterMoves, firstTests, blueprintStep, activity1Complete, activity2Complete, activity3Complete | Reactive (useEffect) |
| `week-9-map-buyer-stakeholders/activity-unified.html` | localStorage `workshopState_buyer_stakeholders` | currentStep, devMode, devFillLoading, glossaryOpen, jobsGlossaryOpen, selectedBuyingJobs, jobJustifications, buyingGroupType, stakeholders | Reactive (useEffect) |

## 3. UI Component Audit & Code Extraction (Master Standards: W9/W10)

### **Master Accordion (Information Reveal)**
*Found in `week-9-map-buyer-stakeholders/activity-unified.html`*

\`\`\`javascript
// Component Implementation Pattern
const [glossaryOpen, setGlossaryOpen] = useState(false);

// JSX Structure
<div className="border-t border-b border-gray-200 py-3 my-6">
    <button
        onClick={() => setGlossaryOpen(!glossaryOpen)}
        className="w-full flex justify-between items-center text-base font-bold text-gray-800 hover:text-gray-900"
    >
        <span>View Buying Role Definitions</span>
        <span className={\`transform transition-transform \${glossaryOpen ? 'rotate-180' : ''}\`}>▼</span>
    </button>
    {glossaryOpen && (
        <div className="mt-4 pl-4 border-l-2 border-orange-500 text-sm text-gray-600 space-y-3">
            <p><strong>Champion:</strong> An internal advocate who actively promotes your solution...</p>
            {/* ... more terms ... */}
        </div>
    )}
</div>
\`\`\`

### **Standard Warning / Alert Box**
*Found in `week-9-map-buyer-stakeholders/activity-unified.html`*

\`\`\`javascript
// Privacy / Storage Note (Blue)
<div className="bg-blue-50 border border-blue-200 text-blue-800 text-xs rounded-lg p-3 my-4">
    <p>
        <strong>Note:</strong> Your progress is automatically saved in this browser's local storage.
    </p>
</div>

// Context / Information Alert (Amber/Yellow)
<div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
    <h3 className="text-sm font-semibold text-amber-800 mb-2">Context from Activity 1</h3>
    <ul className="list-disc list-inside">
        {selectedBuyingJobs.map(job => (
            <li key={job} className="text-sm text-amber-700">{job}</li>
        ))}
    </ul>
</div>
\`\`\`

### **Selection Cards (Interactive Choices)**
*Found in `week-9-map-buyer-stakeholders/activity-unified.html`*

\`\`\`javascript
<div className="mb-6 p-4 border rounded-lg bg-gray-50">
    <label className="block text-sm font-medium text-gray-700 mb-3">
        Select the Buying Group Type:
    </label>
    <div className="space-y-3">
        <div className="flex items-start">
            <input 
                id="type1" 
                name="buyingGroupType" 
                type="radio" 
                value="Type1" 
                checked={buyingGroupType === 'Type1'} 
                onChange={(e) => setBuyingGroupType(e.target.value)} 
                className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500 mt-1"
            />
            <div className="ml-3 text-sm">
                <label htmlFor="type1" className="font-medium text-gray-900">Type 1: Singular</label>
                <p className="text-gray-500">One person holds all roles...</p>
            </div>
        </div>
        {/* ... more options ... */}
    </div>
</div>
\`\`\`

### **Input Group (Standard Textarea Layout)**
*Found in `week-9-map-buyer-stakeholders/activity-unified.html`*

\`\`\`javascript
<div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
        Why is <strong>{job}</strong> a difficult job for your customer?
        <span className="text-red-500">*</span>
    </label>
    <textarea
        value={jobJustifications[job] || ''}
        onChange={(e) => {
            setJobJustifications(prev => ({ ...prev, [job]: e.target.value }));
        }}
        placeholder="e.g., Our customers struggle with..."
        className="laptop-textarea w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
    />
    {/* Word Count Feedback Component */}
    <div className="flex justify-between items-center mt-1">
        <span className="text-xs text-gray-500">(describe in 5+ words)</span>
        <span className={\`text-sm flex items-center gap-1 \${isValid ? 'text-green-600' : 'text-gray-500'}\`}>
            {wordCount} words {isValid && <span>✓</span>}
        </span>
    </div>
</div>
\`\`\`

---

## 4. Drift Analysis & Content Style Audit

### **Structural Drift**
*   **W1-W8 (Traditional)**: Split across multiple HTML files. No `localStorage` persistence. Progress codes are used in W3 as a manual bridge.
*   **W9-W10 (Standard)**: Unified SPA pattern in a single HTML file. Persistent state via `localStorage` with reactive hydration loop.

### **UI Control Drift**
*   **Alert Styles**: W1-W8 uses `border-l-4` (Left border only) for alerts (e.g., `bg-orange-100 border-l-4 border-orange-500`). W9-W10 uses full borders (`border border-blue-200`).
*   **Input Handling**: Early workshops lack the `laptop-textarea` class (min-height 80px, expands on focus).
*   **Navigation**: W1-W8 uses simple "Continue to Activity X" buttons at the bottom. W9-W10 uses a sophisticated `StepIndicator` component with completion state.

### **Content Style Audit ("Smell Test")**
*   **Jargon Check**: No egregious "synergy" or "bandwidth" found. However, "Firmographic", "Technographic", and "Psychographic" (W2/W3) may be considered high-jargon for some users.
*   **Reading Level**: sentence length in index files of W1-W3 often exceeds 25 words.
*   **Emoji Audit**: All workshops currently use emojis in their Markdown Export templates (e.g., 📋, ✅, 🚀).


## 5. UI Component Implementation Matrix

| Workshop | Accordion Type | Alert Type | Selection Pattern | Input Style |
| :--- | :--- | :--- | :--- | :--- |
| **W1-W8** | *None* | `border-l-4` (Left Border) | Multi-file Link | Standard (80px) |
| **W9** | *N/A* | `border border-amber-200` | Clickable Force Cards | `laptop-textarea` |
| **W10** | **Master Pattern** (React State) | `border border-blue-200` | Inline Radio Group | `laptop-textarea` |

### **Drift Report: W1-W8 vs. W9/10 Standards**
*   **Accordions**: Not implemented in W1-W8. Standard requires `useState`-driven `details`/`summary` simulation.
*   **Alert Boxes**: W1-W8 uses `border-l-4` with primary orange. Standard requires `border border-blue-200` (Blue/Amber/Green) for full enclosure.
*   **Selection Cards**: W1-W8 uses hardcoded links to next files. Standard requires interactive, state-driven cards with description and selection logic.
*   **Input Fields**: W1-W8 uses standard `textarea`. Standard requires `laptop-textarea` class (min-height 80px, auto-expand focus logic).


## 6. Data Persistence Registry (Persistence Keys & Hydration Logic)

| Workshop | LocalStorage Key | Persistence Logic | Hydration Hook |
| :--- | :--- | :--- | :--- |
| **W1** | *None* | *None* | Manual (None) |
| **W2** | *None* | *None* | Manual (None) |
| **W3** | `workshopData` (State Key) | **Progress Code (Base64)** | `atob()` Decoder |
| **W4-W8** | *None Identified* | *None* | Manual (None) |
| **W9** | `workshopState_competitive_strategy` | **Reactive SPA Loop** | `useEffect()` Auto-Hydration |
| **W10** | `workshopState_buyer_stakeholders` | **Reactive SPA Loop** | `useEffect()` Auto-Hydration |

### **State Hydration Check (Analysis)**
*   **W1-W8 (Ephemeral)**: No storage. On page refresh or moving to next HTML, all state is lost. No "Resume Session" experience.
*   **W3 (Semi-Persistent)**: Uses "Progress Code" (Base64). The user must manually paste a code into a text field to hydrate state across files.
*   **W9-W10 (Persistent Master Standard)**:
    1.  `useState` initializes from storage: `const [state, setState] = useState(() => loadWorkshopState(KEY).state || default);`
    2.  `useEffect` auto-saves: `useEffect(() => { saveWorkshopState(currentState, KEY); }, [state]);`
    3.  **Result**: Full, seamless "Resume Session" experience on page refresh.


## 7. Drift Analysis & Language Smell Test

### **Content Drift ("Smell Test")**
*   **Jargon Flag (W1-W6)**: "Firmographic", "Technographic", "Psychographic" are used in W2-W3. "Quantification" is used in W5. No instances of "synergy" or "bandwidth" identified.
*   **Reading Level (W1-W6)**: Introductory sections in `index.html` for W1, W2, W3, and W5 have sentences exceeding 25 words. These may be candidates for simplifying.
*   **Emoji Audit (W1-W6)**: Emojis (📋, ✅, 🚀, 🔍) are embedded in all workshops within the professional report (Markdown export) templates. To be removed if desired.

### **UI Component Drift (Action Items)**
*   **W1-W8 (Critical Drift)**: Use `bg-orange-100 border-l-4 border-orange-500` for alerts. Master uses `bg-blue-50 border border-blue-200` (full border).
*   **W1-W8 (Structural Drift)**: No `StepIndicator` or `laptop-textarea` auto-expand focus logic. Multi-file navigation instead of SPA.
*   **W1-W8 (Persistence Drift)**: No reactive `localStorage` hydration. All state is lost on page refresh.

