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

