# Technical Implementation Guide

## Code Architecture

### Encoding/Decoding Functions

```javascript
// Core encoding function - converts workshop data to progress code
const encodeProgressCode = (workshopData) => {
  try {
    const jsonString = JSON.stringify(workshopData);
    const base64 = btoa(jsonString);
    return `GSAP2025-${base64}`;
  } catch (error) {
    console.error('Error encoding progress code:', error);
    return null;
  }
};

// Core decoding function - converts progress code to workshop data
const decodeProgressCode = (code) => {
  try {
    if (!code || !code.startsWith('GSAP2025-')) {
      throw new Error('Invalid progress code format');
    }
    const base64 = code.substring(9);
    const jsonString = atob(base64);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error decoding progress code:', error);
    return null;
  }
};

// Validation function - checks if code is valid format
const isValidProgressCode = (code) => {
  if (!code || typeof code !== 'string') return false;
  if (!code.startsWith('GSAP2025-')) return false;
  try {
    decodeProgressCode(code);
    return true;
  } catch {
    return false;
  }
};
```

### Change Detection Patterns

```javascript
// State management for imported data and change detection
const [importedData, setImportedData] = useState(null);
const [hasDataChanged, setHasDataChanged] = useState(false);
const [originalData, setOriginalData] = useState(null);

// Track if user has modified any imported data
useEffect(() => {
  if (!importedData) return;
  
  // Compare current form values with imported values
  const dataChanged = 
    customerProfile !== (importedData.day2_2?.activity1?.customerProfile || '') ||
    competitiveAlternative !== (importedData.day2_2?.activity1?.competitiveAlternative || '');
    
  setHasDataChanged(dataChanged);
}, [customerProfile, competitiveAlternative, importedData]);

// Function to check if any data exists from previous workshops
const hasPreviousWorkshopData = (data) => {
  return !!(data.day1 || data.day2_1);
};
```

### Auto-populate Patterns

```javascript
// Pattern for auto-populating fields from imported data
const handleImportData = (progressCode) => {
  const decoded = decodeProgressCode(progressCode);
  if (!decoded) {
    setImportError('Invalid progress code. Please check and try again.');
    return;
  }
  
  setImportedData(decoded);
  setImportError('');
  setImportSuccess(true);
  
  // Auto-populate fields based on workshop/activity
  autoPopulateFields(decoded);
  
  // Hide import section 3 seconds after successful import, giving users time to see the success message
  setTimeout(() => {
    setShowImportSection(false);
  }, 3000);
};

// Example auto-populate for Day 2-2 Activity 1
const autoPopulateFields = (data) => {
  // From Day 2-1 ECP data
  if (data.day2_1?.activity3) {
    const ecp = data.day2_1.activity3;
    
    // Build initial customer profile from ECP components
    const profileParts = [];
    if (ecp.common_needs) profileParts.push(ecp.common_needs);
    if (ecp.basic_profile) profileParts.push(ecp.basic_profile);
    
    setCustomerProfile(profileParts.join(' '));
  }
  
  // Set original data for change detection
  setOriginalData({
    customerProfile: customerProfile,
    competitiveAlternative: competitiveAlternative
  });
};
```

## Implementation Checklist

### Step 1: Add Import Section Component

```javascript
const ImportSection = ({ onImport, isVisible }) => {
  const [progressCode, setProgressCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleImport = () => {
    if (!progressCode.trim()) {
      setError('Please enter a progress code');
      return;
    }
    
    const result = onImport(progressCode);
    if (result.success) {
      setSuccess(true);
      setError('');
    } else {
      setError(result.error);
      setSuccess(false);
    }
  };
  
  const handleStartFresh = () => {
    setProgressCode('');
    setError('');
    setSuccess(false);
    // Hide import section when starting fresh
    onImport({ startFresh: true });
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <FileText className="text-blue-600 mr-2" size={24} />
        <h3 className="text-lg font-semibold text-gray-800">Continue Your Progress</h3>
      </div>
      
      <textarea
        value={progressCode}
        onChange={(e) => setProgressCode(e.target.value)}
        placeholder="Paste your progress code here..."
        className="w-full h-20 p-3 border border-gray-300 rounded-lg resize-none"
      />
      
      {error && (
        <div className="mt-2 text-red-600 text-sm">{error}</div>
      )}
      
      {success && (
        <div className="mt-2 text-green-600 text-sm">
          ✓ Progress loaded successfully! Your previous responses have been filled in below.
        </div>
      )}
      
      <div className="flex space-x-3 mt-4">
        <button
          onClick={handleImport}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Load Progress
        </button>
        <button
          onClick={handleStartFresh}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Start Fresh Instead
        </button>
      </div>
    </div>
  );
};
```

### Step 2: Add Export Section Component

```javascript
const ExportSection = ({ workshopData }) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const progressCode = encodeProgressCode(workshopData);
  
  const handleCopy = async () => {
    const success = await copyToClipboard(progressCode);
    if (success) {
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    }
  };
  
  return (
    <>
      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mt-6">
        <div className="flex items-center mb-4">
          <CheckCircle className="text-green-600 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-green-800">Activity Complete! Save Your Progress</h3>
        </div>
        
        <p className="text-green-700 mb-4">
          Copy this code to continue your progress in the next workshop session:
        </p>
        
        <div className="bg-white border border-green-200 rounded-lg p-3 mb-4">
          <code className="text-sm font-mono break-all">{progressCode}</code>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={handleCopy}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <Copy className="mr-2" size={16} />
            Copy Code
          </button>
          
          <button
            onClick={() => setShowHelpModal(true)}
            className="text-green-700 hover:text-green-800 text-sm underline"
          >
            What's this?
          </button>
          
          {showCopySuccess && (
            <span className="text-green-600 text-sm">✓ Copied to clipboard!</span>
          )}
        </div>
      </div>
      
      <HelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} />
    </>
  );
};
```

### Step 3: Update Main Activity Component

```javascript
// Add to main activity component
const [workshopData, setWorkshopData] = useState(() => {
  // Initialize with empty structure
  // Note: day3 refers to Market Entry Readiness (chronologically the 4th workshop)
  return {
    day1: {},        // Problems Worth Solving
    day2_1: {},      // Finding Your Early Customers (AM)
    day2_2: {},      // Positioning Basics (PM)
    day3: {}         // Market Entry Readiness
  };
});

const [showImportSection, setShowImportSection] = useState(true);
const [activityComplete, setActivityComplete] = useState(false);

// Handle import - updated to handle both progress codes and "start fresh" action
const handleImport = (input) => {
  // Handle "Start Fresh" button click
  if (input && input.startFresh) {
    setShowImportSection(false);
    return { success: true };
  }
  
  // Handle progress code import
  const decoded = decodeProgressCode(input);
  if (!decoded) {
    return { success: false, error: 'Invalid progress code' };
  }
  
  setWorkshopData(decoded);
  autoPopulateFields(decoded);
  return { success: true };
};

// Update workshop data when activity completes
const handleActivityComplete = () => {
  const updatedData = {
    ...workshopData,
    day2_2: {
      ...workshopData.day2_2,
      activity1: {
        customerProfile,
        competitiveAlternative,
        alternativeDescription,
        completedAt: new Date().toISOString()
      }
    }
  };
  
  setWorkshopData(updatedData);
  setActivityComplete(true);
};
```

### Step 4: Integration Pattern

```javascript
// Add these components to your render method
return (
  <div className="max-w-[1200px] mx-auto p-5">
    {/* Header */}
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      {/* Existing header content */}
    </div>
    
    {/* Import Section - Only show if not completed */}
    {!activityComplete && (
      <ImportSection 
        onImport={handleImport}
        isVisible={showImportSection}
      />
    )}
    
    {/* Main Content */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Existing activity content */}
    </div>
    
    {/* Export Section - Only show when complete */}
    {activityComplete && (
      <ExportSection workshopData={workshopData} />
    )}
  </div>
);
```

### Safari Clipboard API Fallback

```javascript
// Cross-browser clipboard copy with Safari fallback
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for Safari or older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      console.error('Fallback copy failed:', err);
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
};
```

### Version Mismatch Handling

```javascript
// Handle version mismatches between progress codes
const handleVersionMismatch = (importedVersion, currentVersion) => {
  if (importedVersion !== currentVersion) {
    console.warn(`Version mismatch: imported ${importedVersion}, current ${currentVersion}`);
    // For now, attempt to import anyway
    // Future: implement migration strategies
    return { 
      proceed: true, 
      warning: 'This progress code was created with a different version. Some data may not import correctly.' 
    };
  }
  return { proceed: true };
};
```

### Partial Data Import Pattern

```javascript
// Import data with validation and partial recovery
const importWithValidation = (decodedData) => {
  const warnings = [];
  const imported = {};
  
  // Check each workshop's data
  ['day1', 'day2_1', 'day2_2', 'day3'].forEach(day => {
    if (decodedData[day]) {
      try {
        // Validate structure exists
        imported[day] = decodedData[day];
      } catch (e) {
        warnings.push(`Could not import ${day} data`);
      }
    }
  });
  
  return {
    data: imported,
    warnings: warnings.length > 0 ? warnings : null,
    success: Object.keys(imported).length > 0
  };
};
```

### Help Modal Pattern

```javascript
// Help Modal Pattern for "What's this?" button
const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-4">About Progress Codes</h3>
        <p className="text-gray-600 mb-4">
          Progress codes save your workshop responses so you can continue later. 
          They contain only your workshop data - no personal information.
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-4">
          <li>• Codes expire after 30 days</li>
          <li>• Save codes externally (email, notes)</li>
          <li>• One code works across all workshops</li>
          <li>• Data stays on your device</li>
        </ul>
        <button 
          onClick={onClose}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
```

## Code Examples

### Complete Example: Day 2-2 Activity 1 Integration

```javascript
// Top of file - import helpers
const encodeProgressCode = (data) => {
  try {
    return `GSAP2025-${btoa(JSON.stringify(data))}`;
  } catch (e) {
    return null;
  }
};

const decodeProgressCode = (code) => {
  try {
    if (!code?.startsWith('GSAP2025-')) return null;
    return JSON.parse(atob(code.substring(9)));
  } catch (e) {
    return null;
  }
};

// Inside main component
const CustomerAlternativeActivity = () => {
  // Existing state
  const [currentStep, setCurrentStep] = useState(1);
  const [customerProfile, setCustomerProfile] = useState('');
  const [competitiveAlternative, setCompetitiveAlternative] = useState('');
  
  // Progress code state
  // Note: day3 refers to Market Entry Readiness (chronologically the 4th workshop)
  const [workshopData, setWorkshopData] = useState({
    day1: {}, day2_1: {}, day2_2: {}, day3: {}
  });
  const [showImportSection, setShowImportSection] = useState(true);
  
  // Import handler - updated to handle both progress codes and "start fresh" action
  const handleImport = (input) => {
    // Handle "Start Fresh" button click
    if (input && input.startFresh) {
      setShowImportSection(false);
      return { success: true };
    }
    
    // Handle progress code import
    const data = decodeProgressCode(input);
    if (!data) return { success: false, error: 'Invalid code' };
    
    // Auto-populate from Day 2-1 data
    if (data.day2_1?.activity3) {
      const ecp = data.day2_1.activity3;
      if (ecp.basic_profile) {
        setCustomerProfile(ecp.basic_profile);
      }
    }
    
    setWorkshopData(data);
    setShowImportSection(false);
    return { success: true };
  };
  
  // Save progress when moving to step 3
  useEffect(() => {
    if (currentStep === 3) {
      const updated = {
        ...workshopData,
        day2_2: {
          ...workshopData.day2_2,
          activity1: {
            customerProfile,
            competitiveAlternative,
            completedAt: new Date().toISOString()
          }
        }
      };
      setWorkshopData(updated);
    }
  }, [currentStep]);
  
  // ... rest of component
};
```

## Testing Procedures

### 1. Basic Functionality Tests

```javascript
// Test encoding/decoding
const testData = {
  day1: { problemStatement: "Test problem" },
  day2_1: { activity1: { completed: true } }
};

const encoded = encodeProgressCode(testData);
console.assert(encoded.startsWith('GSAP2025-'), 'Code should start with GSAP2025-');

const decoded = decodeProgressCode(encoded);
console.assert(decoded.day1.problemStatement === "Test problem", 'Should decode correctly');
```

### 2. Error Handling Tests

```javascript
// Test invalid codes
console.assert(decodeProgressCode('invalid') === null, 'Should handle invalid format');
console.assert(decodeProgressCode('GSAP2025-@@@') === null, 'Should handle invalid base64');
console.assert(decodeProgressCode('') === null, 'Should handle empty string');
console.assert(decodeProgressCode(null) === null, 'Should handle null');
```

### 3. Integration Tests

```javascript
// Test full flow
1. Start with empty activity
2. Import code with previous workshop data
3. Verify auto-population
4. Complete activity
5. Export new code
6. Verify exported code contains all data
```

### 4. Browser Compatibility Tests

- Chrome: Test copy/paste functionality
- Safari: Test clipboard API fallback
- Firefox: Verify base64 encoding
- Mobile: Test touch interactions for copy button

### 5. Data Size Tests

```javascript
// Ensure codes stay under 2000 characters
// Note: day3 refers to Market Entry Readiness (chronologically the 4th workshop)
const maxData = {
  day1: { /* max realistic data */ },
  day2_1: { /* max realistic data */ },
  day2_2: { /* max realistic data */ },
  day3: { /* max realistic data - Market Entry Readiness */ }
};

const code = encodeProgressCode(maxData);
console.assert(code.length < 2000, `Code too long: ${code.length} chars`);
```

## Testing with Sample Progress Codes

### Complete Test Code Set

The `/testing/` folder contains a complete set of Progress Codes for testing the entire positioning workshop flow:

#### Activity 1 Test Codes:
- **`test-code-positioning-act-1-input.txt`** - Contains Day 1 + Day 2-1 data for starting Activity 1
  - Auto-populates customer profile from Day 2-1 ECP data
  - Use this to test Activity 1 import functionality

- **`test-code-positioning-act-1-output.txt`** - Expected output after completing Activity 1
  - Contains customer profile and competitive alternative
  - Use this to test Activity 1 → Activity 2 data flow

#### Activity 2 Test Codes:
- **`test-code-positioning-act-2-input.txt`** - Input for Activity 2 (same as Activity 1 output)
  - Shows customer and alternative data in reference box
  - Use this to test Activity 2 import functionality

- **`test-code-positioning-act-2-output.txt`** - Expected output after completing Activity 2
  - Contains all Activity 1 data plus differentiators and customer value
  - Use this to test Activity 2 → Activity 3 data flow

#### Activity 3 Test Codes:
- **`test-code-positioning-act-3-input.txt`** - Input for Activity 3 (same as Activity 2 output)
  - Auto-populates ALL fields from Activities 1 & 2
  - Use this to test Activity 3 import functionality

### Test Flow Example:

```bash
# Test complete workshop flow
1. Activity 1: Import test-code-positioning-act-1-input.txt
2. Complete Activity 1 → Export matches test-code-positioning-act-1-output.txt
3. Activity 2: Import test-code-positioning-act-2-input.txt  
4. Complete Activity 2 → Export matches test-code-positioning-act-2-output.txt
5. Activity 3: Import test-code-positioning-act-3-input.txt
6. Complete Activity 3 → Generate final positioning statement
```

### Sample Data Structure

The test codes contain realistic workshop data for **Posh AMP** (Predictive Optimization for System Health):
- **Product**: B2B SaaS predictive API monitoring solution
- **Target Customer**: Directors of Engineering at Series A-B SaaS companies ($10M-$50M ARR)
- **Problem**: $100K/hour API downtime costs and constant firefighting
- **Competitive Alternative**: Traditional reactive monitoring (Datadog, New Relic, Dynatrace)
- **Unique Differentiators**: ML-driven 48-hour predictive analytics, automated resolution, API-first architecture
- **Customer Value**: 50%+ failure reduction, 70% firefighting reduction, 30-50% cost savings

## Day 1 Implementation (Problems Worth Solving)

### Overview

The Day 1 workshop consists of 3 activities that guide users through problem validation:
1. **Activity 1**: Problem Origin Story - capturing the moment of realization and problem definition
2. **Activity 2**: Market Landing Zone - mapping competitors and underserved segments
3. **Activity 3**: Problem Scoring - quantitative validation using 5 criteria

### Data Schema for Day 1

```javascript
const day1Schema = {
  problemStatement: "Core problem statement (shared across all activities)",
  activity1: {
    momentOfRealization: "The story of when/how the problem was discovered",
    whoExperienced: "Who experiences this problem",
    whyMatters: "Why this problem is significant",
    whatSurprised: "What was surprising about discovering this problem",
    howRealProblem: "Evidence that this is a real, widespread problem",
    completedAt: "ISO timestamp"
  },
  activity2: {
    markers: [
      {
        id: "unique_id",
        type: "competitor|underserved|strategic",
        x: 140,  // position on canvas
        y: 100,  // position on canvas
        notes: "Description of this market segment/competitor"
      }
    ],
    landingZoneChoice: "existing|new",
    evidence: "Justification for market entry strategy",
    completedAt: "ISO timestamp"
  },
  activity3: {
    problemStatement: "Refined problem statement",
    scores: {
      urgency: 1-5,
      value: 1-5,
      importance: 1-5,
      marketGap: 1-5,
      accessibility: 1-5
    },
    evidence: {
      urgency: "Evidence for urgency score",
      value: "Evidence for value score", 
      importance: "Evidence for importance score",
      marketGap: "Evidence for market gap score",
      accessibility: "Evidence for accessibility score"
    },
    totalScore: 5-25,
    meetsThreshold: boolean,
    completedAt: "ISO timestamp"
  }
}
```

### Auto-population Patterns for Day 1

#### Activity 1 → Activity 2
```javascript
// Problem statement flows forward automatically
if (data.day1?.problemStatement) {
  setProblemStatement(data.day1.problemStatement);
}
```

#### Activity 2 → Activity 3
```javascript
// Problem statement and market context flows forward
if (data.day1?.problemStatement) {
  setProblemStatement(data.day1.problemStatement);
}
// Market analysis informs problem validation
if (data.day1?.activity2?.evidence) {
  // Use market evidence to inform scoring decisions
  setMarketContext(data.day1.activity2.evidence);
}
```

### Day 1 Implementation Checklist

#### Activity 1 (Problem Origin Story)
- [x] Import section with problem statement auto-population
- [x] 5-field form: moment of realization, who experienced, why matters, what surprised, how real
- [x] Export section with complete Day 1 Activity 1 data
- [x] Next/Previous navigation between sections
- [x] Progress indicators

#### Activity 2 (Market Landing Zone)
- [x] Import section with Day 1 Activity 1 data
- [x] Interactive canvas for placing market markers
- [x] Marker types: competitor, underserved, strategic
- [x] Landing zone choice: existing vs new markets
- [x] Evidence text area for strategy justification
- [x] Export section with complete Day 1 Activities 1-2 data

#### Activity 3 (Problem Scoring)
- [x] Import section with Day 1 Activities 1-2 data  
- [x] 5-criteria scoring system (1-5 scale each)
- [x] Evidence text areas for each score
- [x] Automatic total calculation (out of 25)
- [x] Threshold validation (must score 20+ to pass)
- [x] Export section with complete Day 1 data

### Day 1 Test Data

#### Test Files Available:
- **`test-code-problems-act-1-input.txt`** - Empty structure for starting Activity 1
- **`test-code-problems-act-1-output.txt`** - Complete Activity 1 with problem origin story
- **`test-code-problems-act-2-input.txt`** - Activity 1 output for starting Activity 2
- **`test-code-problems-act-2-output.txt`** - Complete Activities 1-2 with market analysis
- **`test-code-problems-act-3-input.txt`** - Activities 1-2 output for starting Activity 3
- **`test-code-problems-act-3-output.txt`** - Complete Day 1 with validated problem (score 23/25)

#### Sample Problem Statement:
"Development teams at high-growth B2B SaaS companies struggle to prevent API failures before they impact customers, leading to $100k/hour downtime costs, customer churn, and engineering resource drain"

### Day 1 → Day 2-1 Data Flow

The Day 1 validated problem statement automatically populates the Day 2-1 (Early Customer Profile) workshop:

```javascript
// In Day 2-1 Activity 1, auto-populate from Day 1
if (importedData.day1?.problemStatement) {
  setProblemContext(importedData.day1.problemStatement);
}

// Problem validation scores inform ECP component mapping
if (importedData.day1?.activity3?.scores) {
  const scores = importedData.day1.activity3.scores;
  // Use scores to suggest ECP components (urgency → urgent need, etc.)
}
```

### Technical Notes

#### Canvas Implementation (Activity 2)
- Uses React state to track marker positions
- Click handlers for adding/removing markers
- Drag functionality for repositioning markers
- Different marker styles by type (competitor=red, underserved=blue, strategic=green)

#### Scoring Logic (Activity 3)  
- Real-time total calculation as user enters scores
- Validation prevents submission if total < 20
- Evidence fields required for scores of 4 or 5
- Color-coded feedback: red (<20), yellow (20-22), green (23+)

#### Data Persistence
- Each activity saves incrementally to workshopData state
- Export codes contain cumulative data from all completed activities
- Import codes validate and auto-populate all available fields

## Market Entry Readiness Implementation (Day 3)

### Overview

The Market Entry Readiness workshop consists of 3 activities focused on preparing for US market entry:
1. **Activity 1**: Foundation and Goals Assessment - current position analysis and success metrics
2. **Activity 2**: Market Reality Check - target market analysis and Japan vs US comparison
3. **Activity 3**: Entry Strategy Builder - tactical planning and resource allocation

### Data Schema for Market Entry Readiness

```javascript
const day3Schema = {
  activity1: {
    currentPosition: {
      strengths: "Company/product strengths for market entry",
      limitations: "Key limitations and challenges to address"
    },
    successMetrics: {
      sixMonthTargets: "Measurable 6-month goals",
      twelveMonthTargets: "Measurable 12-month goals"
    },
    completedAt: "ISO timestamp"
  },
  activity2: {
    targetMarketAnalysis: {
      factor1: "Market size and growth potential",
      factor2: "Competition landscape", 
      factor3: "Customer behavior and preferences",
      factor4: "Regulatory and legal considerations",
      factor5: "Cultural and business practices"
    },
    marketComparison: {
      japanStrengths: "Advantages in Japan market",
      japanChallenges: "Challenges in Japan market",
      usOpportunities: "Opportunities in US market",
      usRisks: "Risks in US market"
    },
    completedAt: "ISO timestamp"
  },
  activity3: {
    tacticalPlan: {
      quarterlyMilestones: "12-month plan broken into quarters",
      entryMethod: "Selected market entry strategy",
      partnerships: "Key partnership requirements and targets",
      resourceRequirements: "Personnel, budget, and operational needs"
    },
    implementationPriority: "High/Medium/Low priority areas",
    completedAt: "ISO timestamp"
  }
}
```

### Auto-population Patterns for Market Entry Readiness

#### Previous Workshop Data → Activity 1
```javascript
// Import complete workshop context for assessment
if (importedData.day1?.problemStatement) {
  // Use validated problem as foundation strength
  setFoundationContext(importedData.day1.problemStatement);
}

if (importedData.day2_1?.activity3?.icpSummary) {
  // Use ECP data to inform target market readiness
  setTargetCustomerContext(importedData.day2_1.activity3.icpSummary);
}

if (importedData.day2_2?.positioningActivity3?.primaryMessage) {
  // Use positioning for competitive strength assessment
  setPositioningStrength(importedData.day2_2.positioningActivity3.primaryMessage);
}
```

#### Activity 1 → Activity 2
```javascript
// Current position informs market analysis
if (data.day3?.activity1?.currentPosition) {
  setMarketAnalysisContext(data.day3.activity1.currentPosition);
}

// Success metrics inform market comparison priorities
if (data.day3?.activity1?.successMetrics) {
  setComparisonCriteria(data.day3.activity1.successMetrics);
}
```

#### Activity 2 → Activity 3
```javascript
// Market analysis informs strategic planning
if (data.day3?.activity2?.targetMarketAnalysis) {
  setStrategicContext(data.day3.activity2.targetMarketAnalysis);
}

// Market comparison informs entry method selection
if (data.day3?.activity2?.marketComparison) {
  setEntryMethodOptions(data.day3.activity2.marketComparison);
}
```

### Market Entry Readiness Implementation Checklist

#### Activity 1 (Foundation and Goals Assessment)
- [ ] Import section with complete workshop context display
- [ ] Strengths vs limitations analysis form (laptop-optimized)
- [ ] 6-month and 12-month success metrics builder
- [ ] Export section with Activity 1 data
- [ ] Collapsible sections for space efficiency

#### Activity 2 (Market Reality Check)
- [ ] Import section with Activity 1 context
- [ ] 5-factor target market analysis form
- [ ] Japan vs US comparison matrix
- [ ] Visual comparison display (side-by-side layout)
- [ ] Export section with Activities 1-2 data

#### Activity 3 (Entry Strategy Builder)  
- [ ] Import section with Activities 1-2 context
- [ ] 12-month tactical planning interface
- [ ] Entry method selection with criteria matching
- [ ] Partnership and resource planning forms
- [ ] Priority setting interface
- [ ] Export section with complete Day 3 data

### Technical Implementation Notes

#### Laptop-Optimized Features
- Collapsible import sections to save vertical space
- Compact form layouts with 80px textareas (expand on focus)
- Side-by-side comparison tables for Activity 2
- Tabbed interface for Activity 3 planning sections
- Sticky progress navigation

#### Data Integration
- Full workshop history available for context
- Smart auto-population from previous activities
- Cross-reference validation (goals align with capabilities)
- Export contains complete multi-day workshop data
