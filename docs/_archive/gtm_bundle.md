--- FILE: docs/data-schema.md ---
```markdown
# Workshop Data Schema Documentation

## Workshop Naming Convention

**Note: Workshop days are named by track, not chronological order:**
- `day1`: Problems Worth Solving (June 23)
- `day2_1`: Finding Your Early Customers (June 24 AM)
- `day2_2`: Positioning Basics (June 24 PM)
- `day3`: Market Entry Readiness (June 25)

## Complete Data Structure

```json
{
  "version": "1.0",
  "userId": "optional-unique-identifier",
  "createdAt": "2025-06-23T10:00:00Z",
  "lastUpdated": "2025-06-25T16:30:00Z",
  
  "day1": {
    "completedAt": "2025-06-23T11:00:00Z",
    "activity1": {
      "momentOfRealization": "string",
      "whoExperienced": "string",
      "whyMatters": "string",
      "whatSurprised": "string",
      "howRealProblem": "string",
      "completedAt": "timestamp"
    },
    "activity2": {
      "marketLandingZone": "mainstream|lowend|new|overlap",
      "competitorMarkers": [
        { "x": 120, "y": 140, "notes": "string" }
      ],
      "underservedMarkers": [
        { "x": 280, "y": 140, "notes": "string" }
      ],
      "strategicMarker": { "x": 200, "y": 187, "notes": "string" },
      "evidence": "string",
      "completedAt": "timestamp"
    },
    "activity3": {
      "problemStatement": "string (min 20 chars)",
      "scores": {
        "urgency": 1-5,
        "importance": 1-5,
        "value": 1-5,
        "marketGap": 1-5,
        "accessibility": 1-5
      },
      "evidence": {
        "urgency": "string",
        "importance": "string",
        "value": "string",
        "marketGap": "string",
        "accessibility": "string"
      },
      "totalScore": 5-25,
      "meetsThreshold": true|false,
      "completedAt": "timestamp"
    }
  },
  
  "day2_1": {
    "completedAt": "2025-06-24T11:00:00Z",
    "activity1": {
      "scenarioAnswers": [
        { "scenarioId": 1, "answer": "early|mainstream", "correct": true|false }
      ],
      "completedAt": "timestamp"
    },
    "activity2": {
      "mappings": [
        { "elementId": "dev_teams", "mappedTo": "common_needs", "correct": true|false }
      ],
      "completedAt": "timestamp"
    },
    "activity3": {
      "common_needs": "string",
      "problem_urgency": "string",
      "business_value": "string",
      "basic_profile": "string",
      "completedAt": "timestamp"
    }
  },
  
  "day2_2": {
    "completedAt": "2025-06-24T16:00:00Z",
    "activity1": {
      "customerProfile": "string (min 20 chars)",
      "competitiveAlternative": "string (min 10 chars)",
      "alternativeDescription": "string (min 20 chars)",
      "completedAt": "timestamp"
    },
    "activity2": {
      "differentiators": [
        "string (min 15 chars)",
        "string (min 15 chars)",
        "string (optional)"
      ],
      "values": [
        "string (min 20 chars)",
        "string (min 20 chars)",
        "string (optional)"
      ],
      "completedAt": "timestamp"
    },
    "activity3": {
      "targetCustomer": "string (min 20 chars)",
      "corePain": "string (min 15 chars)",
      "productCategory": "string (auto-derived)",
      "positioningStatement": {
        "for": "string",
        "whoStugglesWith": "string",
        "ourProductIsA": "string",
        "thatProvides": "string",
        "unlike": "string",
        "weAreBetterBecause": "string"
      },
      "completedAt": "timestamp"
    }
  },
  
  "day3": {
    "completedAt": "2025-06-25T11:00:00Z",
    // Market Entry Readiness workshop
    "activity1": {
      "currentPosition": {
        "uniqueAttributes": {
          "localStrength": "string (min 10 words)",
          "globalLimitation": "string (min 10 words)"
        },
        "marketKnowledge": {
          "localStrength": "string (min 10 words)",
          "globalLimitation": "string (min 10 words)"
        },
        "resources": {
          "localStrength": "string (min 10 words)",
          "globalLimitation": "string (min 10 words)"
        },
        "networkRelationships": {
          "localStrength": "string (min 10 words)",
          "globalLimitation": "string (min 10 words)"
        },
        "infrastructure": {
          "localStrength": "string (min 10 words)",
          "globalLimitation": "string (min 10 words)"
        }
      },
      "successMetrics": {
        "sixMonth": {
          "metrics": ["string", "string", "string"],
          "targets": ["string", "string", "string"]
        },
        "twelveMonth": {
          "metrics": ["string", "string", "string"],
          "targets": ["string", "string", "string"]
        }
      },
      "completedAt": "timestamp"
    },
    "activity2": {
      "selectedStrategy": "lean|partnerships|enterprise|platform",
      "strategyRationale": "string",
      "implementationPlan": "string",
      "completedAt": "timestamp"
    },
    "activity3": {
      "homeMarket": {
        "country": "string",
        "marketSize": "string",
        "competitiveLandscape": "string",
        "regulations": "string"
      },
      "targetMarket": {
        "country": "USA",
        "marketSize": "string",
        "competitiveLandscape": "string",
        "regulations": "string"
      },
      "gaps": [
        {
          "category": "market|legal|cultural|operational",
          "description": "string",
          "mitigation": "string"
        }
      ],
      "completedAt": "timestamp"
    }
  }
}
```

## Data Dependencies

### Visual Flow Diagram
```
Day 1: Problems Worth Solving
├── Activity 1: Problem Origin Story
├── Activity 2: Market Landing Zone
└── Activity 3: Problem Scoring
    └── problemStatement ──────────┐
                                   ▼
Day 2-1: Finding Your Early Customers
├── Activity 1: Early vs Mainstream
├── Activity 2: ECP Mapping
└── Activity 3: ECP Hypothesis ────┐
    ├── common_needs ──────────────┤
    ├── problem_urgency ───────────┤
    ├── business_value ────────────┤
    └── basic_profile ─────────────┤
                                   ▼
Day 2-2: Positioning Basics
├── Activity 1: Customer & Alternative
│   └── Uses: basic_profile → customerProfile
├── Activity 2: Differentiators & Value
│   └── Standalone (references context)
└── Activity 3: Positioning Statement
    └── Combines all Day 2-2 data
                                   ▼
Day 3: Market Entry Readiness (June 25)
└── Uses complete positioning for strategy
```

### Cross-Workshop Dependencies

#### Day 1 → Day 2-1
- `problemStatement` provides context for ECP development
- Problem validation scores influence urgency framing

#### Day 2-1 → Day 2-2
- `common_needs` → Informs `targetCustomer` refinement
- `problem_urgency` → Shapes `corePain` articulation
- `business_value` → Context for value proposition
- `basic_profile` → Foundation for `customerProfile`

#### Day 2-2 → Day 3 (Market Entry Readiness)
- Complete positioning statement guides market entry strategy
- Customer profile influences readiness assessment
- Value proposition shapes partnership opportunities

### Within-Workshop Dependencies

#### Day 2-2 Internal Flow
```
Activity 1 produces:
├── customerProfile ─────┐
└── competitiveAlternative ─┐
                           ▼
Activity 2 produces:       Activity 3 uses all:
├── differentiators[] ────>├── targetCustomer (refined from customerProfile)
└── values[] ────────────>├── corePain (new input)
                          ├── productCategory (auto-derived)
                          └── positioningStatement (combines all)
```

## Field Definitions

### Common Fields
- **completedAt**: ISO 8601 timestamp when activity was marked complete
- **version**: Schema version for future compatibility
- **lastUpdated**: Timestamp of most recent data modification

### Day 1 Fields

#### Activity 1: Problem Origin Story
- **momentOfRealization**: The specific moment when problem was identified
- **whoExperienced**: People/organizations affected by the problem
- **whyMatters**: Significance of the problem to those experiencing it
- **whatSurprised**: Unexpected aspects discovered about the problem
- **howRealProblem**: Evidence that validates this is a genuine problem

#### Activity 2: Market Landing Zone
- **marketLandingZone**: Selected market entry strategy
- **competitorMarkers**: Array of competitor positions on market map
- **underservedMarkers**: Array of underserved segment positions
- **strategicMarker**: Single strategic entry point position
- **evidence**: Rationale for strategic choice

#### Activity 3: Problem Scoring
- **problemStatement**: Concise articulation of the problem (min 20 chars/~5 words)
- **scores**: 1-5 rating for each validation criterion
- **evidence**: Supporting evidence for each score
- **totalScore**: Sum of all scores (5-25)
- **meetsThreshold**: Boolean indicating if problem passes validation

### Day 2-1 Fields

#### Activity 3: ECP Hypothesis
- **common_needs**: Jobs to be done/problems to solve
- **problem_urgency**: Why customers need solution now
- **business_value**: Desired business outcomes
- **basic_profile**: Company characteristics (size, industry, etc.)

### Day 2-2 Fields

#### Activity 1: Customer & Alternative
- **customerProfile**: Refined target customer description
- **competitiveAlternative**: What customers use today
- **alternativeDescription**: How current solution works/fails

#### Activity 2: Differentiators & Value
- **differentiators**: Array of 2-3 unique capabilities
- **values**: Corresponding customer value for each differentiator

#### Activity 3: Positioning Statement
- **targetCustomer**: Final refined customer description
- **corePain**: Specific struggle the product addresses
- **productCategory**: Auto-derived from context
- **positioningStatement**: Complete 6-part positioning statement

### Day 3 Fields (Market Entry Readiness)

#### Activity 1: Current Position & Success Metrics
- **currentPosition**: Assessment of current state across 5 elements
  - **uniqueAttributes**: Local strengths and global limitations for product/technology
  - **marketKnowledge**: Local strengths and global limitations for market understanding
  - **resources**: Local strengths and global limitations for financial/human resources
  - **networkRelationships**: Local strengths and global limitations for partnerships/connections
  - **infrastructure**: Local strengths and global limitations for operational capabilities
- **successMetrics**: Target metrics and goals for market entry
  - **sixMonth**: Arrays of metrics and corresponding targets for 6-month timeframe
  - **twelveMonth**: Arrays of metrics and corresponding targets for 12-month timeframe

#### Activity 2: Entry Strategy
- **selectedStrategy**: Chosen go-to-market approach
- **strategyRationale**: Reasoning for strategy selection
- **implementationPlan**: High-level execution plan

#### Activity 3: Gap Analysis
- **homeMarket/targetMarket**: Comparative market characteristics
- **gaps**: Array of identified gaps with mitigation strategies

## Data Validation Rules

### Character Minimums (Internal)
- 10 chars = ~2-3 words
- 15 chars = ~3-4 words  
- 20 chars = ~4-5 words

### Required Fields
- Each activity must have `completedAt` to be considered complete
- Positioning statement requires all component fields
- Scores must be integers 1-5

### Data Size Constraints
- Total encoded progress code must remain under 2000 characters
- Individual text fields should not exceed 500 characters
- Arrays limited to reasonable sizes (e.g., max 10 markers)

```

--- FILE: problems_worth_solving/problems-activity-1A.html ---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Problem Origin Story Activity</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }
        .lucide-icon {
            width: 20px;
            height: 20px;
            display: inline-block;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <!-- Test Data from test_data/problems-activity-1A.json -->
    <script type="application/json" id="testData">
    {
      "realizedProblem": "The realization stems from observing the significant operational costs and lost revenue associated with purely reactive API monitoring, where failures costing approximately $100,000 per hour occur frequently due to a lack of preemptive capabilities.",
      "whoExperiencing": "Development teams and DevOps teams in mid to large-sized companies with modern API infrastructure and established DevOps teams experiencing weekly API issues.",
      "whyMattered": "It mattered due to high costs from downtime, manual interventions, and lost productivity caused by API failures. These issues directly impact overall profitability and operational efficiency, making the reduction of API failure-related costs a crucial pain point for them.",
      "surprisingAspect": "The surprising aspect is the prevalence of reactive monitoring and the lack of effective predictive solutions in the market, despite API failures costing significant amounts per hour.",
      "howKnowReal": "The problem is confirmed by the quantifiable impact of API failures, such as the $100,000 per hour cost of incidents and the common struggle among development teams to prevent these failures. This leads companies to prioritize systems that ensure business continuity.",
      "currentStep": 3
    }
    </script>

    <script type="text/babel">
        const { useState, useEffect } = React;

        // Removed Progress Code System - using embedded test data instead

        // Simple icon components as SVGs
        const Clock = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
            </svg>
        );

        const CheckCircle = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
        );

        const Copy = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
        );

        const FileText = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
        );

        const Download = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        );

        const HelpCircle = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
        );

        const X = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        );

        const Edit = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
        );

        const Share = ({ size = 20, className = "" }) => (
            <svg className={`lucide-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16,6 12,2 8,6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
        );

        // Removed ImportSection and ExportSection components - using embedded test data instead

        // Word count and validation utility
        const getWordCount = (text) => {
            return text.trim().split(/\s+/).filter(w => w.length > 0).length;
        };

        const renderWordCountFeedback = (text, minWords, fieldId) => {
            const wordCount = getWordCount(text);
            const isValid = wordCount >= minWords;
            
            return (
                <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-gray-500">
                        (describe in {minWords}+ words)
                    </span>
                    {isValid ? (
                        <div className="flex items-center text-green-600">
                            <CheckCircle size={16} className="mr-1" />
                            <span>{wordCount} words</span>
                        </div>
                    ) : (
                        <span className="text-gray-400">
                            {wordCount} words
                        </span>
                    )}
                </div>
            );
        };

        const ProblemOriginStoryActivity = () => {
            const [currentStep, setCurrentStep] = useState(1);
            const [timer, setTimer] = useState(null);
            const [timeLeft, setTimeLeft] = useState(0);
            const [responses, setResponses] = useState({
                momentOfRealization: '',
                whoExperienced: '',
                whyMatters: '',
                whatSurprised: '',
                howRealProblem: ''
            });
            const [partnerSharingStarted, setPartnerSharingStarted] = useState(false);
            const [activityComplete, setActivityComplete] = useState(false);
            
            // Dev mode state
            const [devMode, setDevMode] = useState(false);
            const [devFillLoading, setDevFillLoading] = useState(false);

            // Reusable dev mode hook for loading test data
            const loadTestDataFromScript = (setters) => {
                try {
                    const dataEl = document.getElementById('testData');
                    if (dataEl) {
                        const data = JSON.parse(dataEl.textContent);
                        Object.entries(setters).forEach(([key, setter]) => {
                            if (data[key] !== undefined) {
                                setter(data[key]);
                            }
                        });
                        console.log('✅ Test data loaded successfully from script tag');
                        return true;
                    } else {
                        console.error('❌ Test data script tag not found');
                        return false;
                    }
                } catch (error) {
                    console.error('❌ Failed to parse test data:', error);
                    return false;
                }
            };

            // Dev fill function (uses external test data)
            const devFillData = () => {
                setDevFillLoading(true);
                try {
                    // Map JSON fields to state fields
                    const testData = JSON.parse(document.getElementById('testData').textContent);
                    setResponses({
                        momentOfRealization: testData.realizedProblem,
                        whoExperienced: testData.whoExperiencing,
                        whyMatters: testData.whyMattered,
                        whatSurprised: testData.surprisingAspect,
                        howRealProblem: testData.howKnowReal
                    });
                    setCurrentStep(testData.currentStep || 3);
                    console.log('✅ Dev data loaded successfully (from test_data JSON)');
                } catch (error) {
                    console.error('❌ Failed to load dev data:', error);
                    alert(`Failed to load test data: ${error.message}`);
                } finally {
                    setDevFillLoading(false);
                }
            };

            // Toggle dev mode (double-click title)
            const toggleDevMode = () => {
                setDevMode(!devMode);
                console.log(devMode ? '🔒 Dev mode disabled' : '🔓 Dev mode enabled');
            };

            // Markdown export function for professional activity summary
            const generateMarkdownSummary = () => {
                const wordCount = Object.values(responses).reduce((total, response) => {
                    return total + response.trim().split(/\s+/).filter(w => w.length > 0).length;
                }, 0);
                
                return `# Problems Worth Solving: Problem Origin Story

### 📋 Executive Summary

**Activity Completion Status: 100%**

**Problem Understanding:**
- Total insights captured: 5 reflection points
- Word count: ${wordCount} words
- Completion time: ${new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  month: 'long', 
  day: 'numeric',
  year: 'numeric'
})}

---

### 🔍 Problem Discovery

**Moment of Realization:**
${responses.momentOfRealization || '[Not provided]'}

**Who Experienced It:**
${responses.whoExperienced || '[Not provided]'}

**Why It Mattered:**
${responses.whyMatters || '[Not provided]'}

### ✅ Problem Validation

**What Surprised You:**
${responses.whatSurprised || '[Not provided]'}

**How You Know It's Real:**
${responses.howRealProblem || '[Not provided]'}

### 📊 Problem Analysis

**Key Insights:**
- **Problem clarity**: ${responses.momentOfRealization ? 'Well-defined origin story' : 'Needs further clarification'}
- **Target audience**: ${responses.whoExperienced ? 'Clearly identified' : 'Requires specification'}
- **Impact assessment**: ${responses.whyMatters ? 'Impact understood' : 'Impact needs quantification'}
- **Market validation**: ${responses.howRealProblem ? 'Evidence documented' : 'Validation needed'}

### 💡 Key Takeaway

Great products start with well-understood problems. By documenting your problem origin story, you've taken an important step toward ensuring you're building something people truly need.

### 📅 Assessment Details

**Report Generated:** ${new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}

**Activity:** Problem Origin Story (Activity 1 of 3)  
**Workshop Series:** Problems Worth Solving - GTM Program  
**Next Steps:** Continue to Activity 2 - Problem Validation Framework

*This assessment captures the foundation of your problem understanding. Use these insights to guide customer interviews and solution development.*`;
            };

            useEffect(() => {
                if (timeLeft > 0) {
                    const timerId = setTimeout(() => {
                        setTimeLeft(timeLeft - 1);
                    }, 1000);
                    return () => clearTimeout(timerId);
                } else if (timeLeft === 0 && timer) {
                    // Timer finished
                    if (currentStep === 1) {
                        setCurrentStep(2);
                    } else if (currentStep === 2 && partnerSharingStarted) {
                        setCurrentStep(3);
                    }
                }
            }, [timeLeft, timer, currentStep, partnerSharingStarted]);

            const startTimer = (seconds) => {
                setTimeLeft(seconds);
                setTimer(`${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`);
            };

            const handleStartIndividualReflection = () => {
                startTimer(120); // 2 minutes
            };

            const handleStartPartnerSharing = () => {
                startTimer(180); // 3 minutes
                setPartnerSharingStarted(true);
            };

            const handleInputChange = (field, value) => {
                setResponses(prev => ({
                    ...prev,
                    [field]: value
                }));
            };

            const resetActivity = () => {
                setCurrentStep(1);
                setTimer(null);
                setTimeLeft(0);
                setResponses({
                    momentOfRealization: '',
                    whoExperienced: '',
                    whyMatters: '',
                    whatSurprised: '',
                    howRealProblem: ''
                });
                setPartnerSharingStarted(false);
            };

            const isStepComplete = (step) => {
                if (step === 1) {
                    return getWordCount(responses.momentOfRealization) >= 10 && 
                           getWordCount(responses.whoExperienced) >= 5 && 
                           getWordCount(responses.whyMatters) >= 10;
                } else if (step === 2) {
                    return getWordCount(responses.whatSurprised) >= 10 && 
                           getWordCount(responses.howRealProblem) >= 10;
                }
                return false;
            };

            const renderStep1 = () => (
                <div className="space-y-6">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Individual Reflection (2 minutes)
                        </h3>
                        <p className="text-gray-600">
                            Take a moment to reflect on the origin of your problem
                        </p>
                    </div>

                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-5 mb-4">
                        <div className="flex items-center mb-3">
                            <Edit className="text-orange-600 mr-2" size={24} />
                            <h4 className="text-lg font-semibold text-orange-800">Reflection Prompts</h4>
                        </div>
                        <p className="text-orange-700 mb-2">Answer these questions about your problem:</p>
                        <ol className="list-decimal list-inside space-y-1 text-orange-700 ml-2">
                            <li>What specific moment made you realize this problem exists?</li>
                            <li>Who was experiencing it?</li>
                            <li>Why did it matter to them?</li>
                        </ol>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                What specific moment made you realize this problem exists?
                            </label>
                            <textarea
                                value={responses.momentOfRealization}
                                onChange={(e) => handleInputChange('momentOfRealization', e.target.value)}
                                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                placeholder="Describe the moment when you first identified this problem..."
                            ></textarea>
                            {renderWordCountFeedback(responses.momentOfRealization, 10, 'momentOfRealization')}
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Who was experiencing it?
                            </label>
                            <textarea
                                value={responses.whoExperienced}
                                onChange={(e) => handleInputChange('whoExperienced', e.target.value)}
                                className="w-full h-16 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                placeholder="Describe the people or organizations affected by this problem..."
                            ></textarea>
                            {renderWordCountFeedback(responses.whoExperienced, 5, 'whoExperienced')}
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Why did it matter to them?
                            </label>
                            <textarea
                                value={responses.whyMatters}
                                onChange={(e) => handleInputChange('whyMatters', e.target.value)}
                                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                placeholder="Explain why this problem was significant to those experiencing it..."
                            ></textarea>
                            {renderWordCountFeedback(responses.whyMatters, 10, 'whyMatters')}
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Clock className="text-gray-600 mr-2" />
                            <span className="font-medium">
                                {timer ? `Time remaining: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}` : 'Timer: 2 minutes'}
                            </span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            {!timer ? (
                                <button
                                    onClick={handleStartIndividualReflection}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Start Timer (Optional)
                                </button>
                            ) : null}
                            
                            <button
                                onClick={() => setCurrentStep(2)}
                                disabled={!isStepComplete(1)}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    isStepComplete(1)
                                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Continue to Partner Sharing
                            </button>
                        </div>
                    </div>
                </div>
            );

            const renderStep2 = () => (
                <div className="space-y-6">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Partner Sharing (3 minutes)
                        </h3>
                        <p className="text-gray-600">
                            Share your reflections with a partner
                        </p>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 mb-4">
                        <div className="flex items-center mb-3">
                            <Share className="text-blue-600 mr-2" size={24} />
                            <h4 className="text-lg font-semibold text-blue-800">Sharing Prompts</h4>
                        </div>
                        <p className="text-blue-700 mb-2">Discuss these questions with your partner (90 seconds each):</p>
                        <ol className="list-decimal list-inside space-y-1 text-blue-700 ml-2">
                            <li>What surprised you about the problem?</li>
                            <li>How do you know it's real?</li>
                        </ol>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">Your Problem Summary:</h4>
                        <div className="bg-white border border-gray-300 rounded-lg p-3 mb-3">
                            <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Moment of realization:</span> {responses.momentOfRealization}</p>
                            <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Who experienced it:</span> {responses.whoExperienced}</p>
                            <p className="text-sm text-gray-600"><span className="font-semibold">Why it mattered:</span> {responses.whyMatters}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                What surprised you about the problem?
                            </label>
                            <textarea
                                value={responses.whatSurprised}
                                onChange={(e) => handleInputChange('whatSurprised', e.target.value)}
                                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                placeholder="What was unexpected or interesting about this problem?"
                            ></textarea>
                            {renderWordCountFeedback(responses.whatSurprised, 10, 'whatSurprised')}
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                How do you know it's real?
                            </label>
                            <textarea
                                value={responses.howRealProblem}
                                onChange={(e) => handleInputChange('howRealProblem', e.target.value)}
                                className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                placeholder="What evidence confirms this is a genuine problem?"
                            ></textarea>
                            {renderWordCountFeedback(responses.howRealProblem, 10, 'howRealProblem')}
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Clock className="text-gray-600 mr-2" />
                            <span className="font-medium">
                                {timer && partnerSharingStarted ? `Time remaining: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}` : 'Timer: 3 minutes'}
                            </span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            {!partnerSharingStarted ? (
                                <button
                                    onClick={handleStartPartnerSharing}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    Start Timer (Optional)
                                </button>
                            ) : null}
                            
                            <button
                                onClick={() => setCurrentStep(3)}
                                disabled={!isStepComplete(2)}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    isStepComplete(2)
                                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Continue to Summary
                            </button>
                        </div>
                    </div>
                </div>
            );

            const renderStep3 = () => (
                <div className="space-y-6">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Problem Origin Story - Summary
                        </h3>
                        <p className="text-gray-600">
                            Review your validated problem insights
                        </p>
                    </div>

                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <CheckCircle className="text-green-600 mr-2" size={24} />
                            <h4 className="text-lg font-semibold text-green-800">Activity Complete!</h4>
                        </div>
                        
                        <p className="text-green-700 mb-4">You've successfully completed the Problem Origin Story activity. Here's what you've learned:</p>
                        
                        <div className="space-y-4">
                            <div className="bg-white border border-green-200 rounded-lg p-4">
                                <h5 className="font-medium text-green-800 mb-2">Problem Discovery</h5>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Moment of realization:</span> {responses.momentOfRealization}</p>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Who experienced it:</span> {responses.whoExperienced}</p>
                                <p className="text-sm text-gray-700"><span className="font-semibold">Why it mattered:</span> {responses.whyMatters}</p>
                            </div>
                            
                            <div className="bg-white border border-green-200 rounded-lg p-4">
                                <h5 className="font-medium text-green-800 mb-2">Problem Validation</h5>
                                <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">What surprised you:</span> {responses.whatSurprised}</p>
                                <p className="text-sm text-gray-700"><span className="font-semibold">How you know it's real:</span> {responses.howRealProblem}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-orange-800">Key Takeaway</h3>
                                <div className="mt-2 text-sm text-orange-700">
                                    <p>
                                        Remember that great products start with well-understood problems. By documenting your problem origin story, you've taken an important step toward ensuring you're building something people truly need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Export Professional Report */}
                    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
                        <div className="flex items-center mb-3">
                            <FileText className="text-blue-600 mr-2" size={20} />
                            <h4 className="font-semibold text-gray-800">📄 Export Professional Report</h4>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">
                            Your problem origin story has been formatted as a professional markdown report for easy sharing
                            and documentation.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                            <h5 className="font-medium text-blue-800 mb-2">📌 Google Docs Instructions:</h5>
                            <ol className="text-sm text-blue-700 space-y-1">
                                <li>1. Click "Copy Activity Summary" below</li>
                                <li>2. Open Google Docs and create a new document</li>
                                <li>3. Go to <strong>Edit → Paste special → Paste from markdown</strong></li>
                                <li>4. Your report will appear with proper formatting!</li>
                            </ol>
                            <p className="text-xs text-blue-600 mt-2">
                                💡 <strong>Tip:</strong> "Paste from markdown" preserves all formatting including headers and sections.
                            </p>
                        </div>

                        <textarea
                            id="markdownSummary"
                            readOnly
                            className="w-full h-64 text-sm p-3 font-mono border border-gray-200 rounded-lg bg-gray-50 resize mb-3"
                            value={(() => {
                                const date = new Date();
                                const formattedDate = date.toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZoneName: 'short'
                                });
                                
                                return `# Problem Origin Story: Summary Report

## 📋 Executive Summary

This report documents the origin story of a problem worth solving, capturing the authentic journey from discovery to validation.

---

## 🔍 Problem Discovery

### The Moment of Realization
${responses.momentOfRealization}

### Who Experienced It
${responses.whoExperienced}

### Why It Matters
${responses.whyMatters}

---

## ✅ Problem Validation

### What Surprised Me
${responses.whatSurprised}

### How I Know It's Real
${responses.howRealProblem}

---

## 📊 Assessment Details

**Report Generated:** ${formattedDate}

**Activity:** Problem Origin Story (Activity 1 of 3)  
**Workshop Series:** Problems Worth Solving - GTM Program  
**Next Steps:** Continue to Activity 2 - Problem Severity Assessment

---

### 💡 Key Insight

Great products start with well-understood problems. This origin story provides the foundation for building something people truly need.

*This assessment documents the authentic discovery and validation of a real problem. Use these insights to guide product development and ensure market fit.*`;
                            })()}
                        />
                        
                        <div className="flex flex-col items-center">
                            <button
                                onClick={(event) => {
                                    // Copy to clipboard with fallback
                                    const copyToClipboard = async (text) => {
                                        try {
                                            // Try modern clipboard API first
                                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                                await navigator.clipboard.writeText(text);
                                                return true;
                                            } else {
                                                // Fallback for older browsers or file:// protocol
                                                const textArea = document.createElement('textarea');
                                                textArea.value = text;
                                                textArea.style.position = 'fixed';
                                                textArea.style.left = '-999999px';
                                                document.body.appendChild(textArea);
                                                textArea.focus();
                                                textArea.select();
                                                
                                                try {
                                                    const successful = document.execCommand('copy');
                                                    document.body.removeChild(textArea);
                                                    return successful;
                                                } catch (err) {
                                                    document.body.removeChild(textArea);
                                                    return false;
                                                }
                                            }
                                        } catch (err) {
                                            console.error('Copy failed:', err);
                                            return false;
                                        }
                                    };

                                    const el = document.getElementById('markdownSummary');
                                    const statusDiv = document.getElementById('copyStatus');
                                    
                                    copyToClipboard(el.value).then((success) => {
                                        if (success) {
                                            // Show success status below button
                                            statusDiv.innerHTML = `
                                                <div class="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
                                                    <p class="font-medium">✅ Copied to Clipboard!</p>
                                                    <p class="text-sm mt-1">Now paste in Google Docs: <strong>Edit → Paste special → Paste from markdown</strong></p>
                                                </div>
                                            `;
                                            
                                            // Also show floating notification
                                            const notification = document.createElement('div');
                                            notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #22c55e; color: white; padding: 16px 24px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 9999; font-weight: 500;';
                                            notification.textContent = '✅ Activity summary copied!';
                                            document.body.appendChild(notification);
                                            
                                            // Fade out notification
                                            setTimeout(() => {
                                                notification.style.transition = 'opacity 0.5s';
                                                notification.style.opacity = '0';
                                                setTimeout(() => notification.remove(), 500);
                                            }, 2500);
                                            
                                            // Clear status after 3 seconds
                                            setTimeout(() => {
                                                statusDiv.innerHTML = '';
                                            }, 3000);
                                        } else {
                                            // Show error status
                                            statusDiv.innerHTML = `
                                                <div class="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg">
                                                    <p class="font-medium">❌ Copy Failed</p>
                                                    <p class="text-sm">Please select and copy the text manually.</p>
                                                </div>
                                            `;
                                            
                                            setTimeout(() => {
                                                statusDiv.innerHTML = '';
                                            }, 3000);
                                        }
                                    });
                                }}
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm font-medium"
                            >
                                📋 Copy Activity Summary
                            </button>
                            <div id="copyStatus"></div>
                        </div>
                    </div>

                    <div className="text-center space-x-4 mt-6">
                        <button
                            onClick={resetActivity}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            ← Reset Activity
                        </button>
                        <button
                            onClick={() => window.location.href = 'problems-activity-2A.html'}
                            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                        >
                            Continue to Activity 2
                        </button>
                    </div>
                </div>
            );

            return (
                <div className="max-w-4xl mx-auto p-5 bg-gradient-to-br from-orange-100 to-orange-200 min-h-screen">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                        <div className="flex justify-between items-center w-full mb-3">
                            <a 
                                href="index.html" 
                                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors text-sm font-medium"
                            >
                                <span className="mr-1">←</span> Back to Workshop
                            </a>
                            <a 
                                href="../index.html" 
                                className="inline-flex items-center text-gray-600 hover:text-orange-700 transition-colors text-sm font-medium"
                            >
                                All GTM Workshops <span className="ml-1">↑</span>
                            </a>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h1 
                                className={`text-2xl font-bold text-gray-800 ${devMode ? 'text-orange-600' : ''} cursor-pointer select-none`}
                                onDoubleClick={toggleDevMode}
                                title="Double-click to toggle dev mode"
                            >
                                Activity 1: Problem Origin Story {devMode && '🔧'}
                            </h1>
                        </div>
                        
                        {/* Dev Mode Controls */}
                        {devMode && (
                            <div className="mb-3 pb-3 border-b border-orange-200">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-orange-600 font-medium">🔧 Dev Mode Active</span>
                                    <button
                                        onClick={devFillData}
                                        disabled={devFillLoading}
                                        className="bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {devFillLoading ? '⏳ Loading...' : '📝 Fill Test Data'}
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        {/* Progress indicator */}
                        <div className="flex items-center space-x-4">
                            <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-orange-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                                    1
                                </div>
                                <span className="font-semibold">Individual Reflection</span>
                            </div>
                            <div className="flex-1 h-1 bg-gray-200 rounded">
                                <div className={`h-full bg-orange-500 rounded transition-all duration-300 ${
                                    currentStep === 1 ? 'w-0' : currentStep === 2 ? 'w-1/2' : 'w-full'
                                }`}></div>
                            </div>
                            <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-orange-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                                    2
                                </div>
                                <span className="font-semibold">Partner Sharing</span>
                            </div>
                            <div className="flex-1 h-1 bg-gray-200 rounded">
                                <div className={`h-full bg-orange-500 rounded transition-all duration-300 ${currentStep >= 3 ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-orange-600' : 'text-gray-400'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                                    3
                                </div>
                                <span className="font-semibold">Summary</span>
                            </div>
                        </div>
                    </div>

                    {/* Import Section */}
                    {/* Removed ImportSection - using embedded test data instead */}

                    {/* Main Content */}
                    <div className="bg-white rounded-lg shadow-lg p-5 relative">
                        <button
                            onClick={resetActivity}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-gray-600"
                            title="Reset Activity"
                        >
                            <span className="text-lg font-bold">↻</span>
                        </button>

                        {currentStep === 1 && renderStep1()}
                        {currentStep === 2 && renderStep2()}
                        {currentStep === 3 && renderStep3()}
                    </div>

                    {/* Footer decoration */}
                    <div className="mt-4 text-center">
                        <div className="w-12 h-12 mx-auto bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 border-4 border-white border-opacity-50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            );
        };

        // Get the container element
        const container = document.getElementById('root');

        // Create a root
        const root = ReactDOM.createRoot(container);

        // Render the app
        root.render(<ProblemOriginStoryActivity />);
    </script>
</body>
</html>
```