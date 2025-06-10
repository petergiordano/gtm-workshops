## Hi there 👋

<!--
**petergiordano/petergiordano** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.
-->
## Workshop Progress Code System - Product Requirements Document

### For: progress-code-system.md in GitHub Repository

---

# GTM Workshop Series - Progress Code System

## Overview

The GTM Workshop Series uses a **Workshop Progress Code** system to enable data persistence across all activities without requiring backend infrastructure. This system allows workshop participants to seamlessly carry their work forward through multiple days of activities.

## System Architecture

### Core Concept
- **Single Code System**: One progress code contains all workshop data
- **Progressive Enhancement**: Each activity adds to the existing data
- **No Backend Required**: Works entirely in the browser with static hosting
- **User-Controlled**: Participants manage their own progress codes

### Technical Implementation

#### Code Structure
```
GSAP2025-[BASE64_ENCODED_JSON_DATA]
```

- **Prefix**: `GSAP2025-` identifies valid workshop codes
- **Payload**: Base64-encoded JSON containing all workshop data
- **Format**: Single-line string, safe for copy/paste

#### Data Schema
```javascript
{
  "workshopData": {
    "day1": {
      "activity1": { /* problem origin data */ },
      "activity2": { /* market landing zones data */ },
      "activity3": { /* problem scoring data */ }
    },
    "day2_1": {
      "activity1": { /* early vs mainstream data */ },
      "activity2": { /* ECP mapping data */ },
      "activity3": { /* ECP hypothesis data */ }
    },
    "day2_2": {
      "activity1": { /* customer & alternative data */ },
      "activity2": { /* differentiators & value data */ },
      "activity3": { /* positioning statement data */ }
    },
    "day3": {
      /* market entry readiness data */
    }
  },
  "metadata": {
    "version": "1.0",
    "lastUpdated": "ISO-8601 timestamp",
    "workshopProgress": {
      "day1": { "completed": boolean, "activities": [boolean, boolean, boolean] },
      "day2_1": { "completed": boolean, "activities": [boolean, boolean, boolean] },
      "day2_2": { "completed": boolean, "activities": [boolean, boolean, boolean] },
      "day3": { "completed": boolean, "activities": [boolean, boolean, boolean] }
    }
  }
}
```

## User Experience Flow

### 1. Starting Fresh
- User begins any activity without a code
- Completes the activity normally
- Receives a progress code upon completion

### 2. Importing Progress
```
┌─────────────────────────────────────────────┐
│ Welcome! Let's continue your work.          │
│                                             │
│ Have a Workshop Progress Code?              │
│ ┌─────────────────────────────────────┐    │
│ │ [Paste your code here...]           │    │
│ └─────────────────────────────────────┘    │
│                                             │
│ [Load Progress]    [Start Fresh]            │
└─────────────────────────────────────────────┘
```

### 3. Exporting Progress
```
┌─────────────────────────────────────────────┐
│ ✅ Activity Complete!                       │
│                                             │
│ Your Workshop Progress Code:                │
│ ┌─────────────────────────────────────┐    │
│ │ GSAP2025-eyJ3b3Jrc2hvcER...        │    │
│ └─────────────────────────────────────┘    │
│                                             │
│ [📋 Copy Code]                              │
│                                             │
│ 💡 Save this code to continue your work     │
└─────────────────────────────────────────────┘
```

## Implementation Guidelines

### For Each Activity HTML File

#### 1. Import Functionality
```javascript
// At activity start
const ImportSection = () => {
  const [importCode, setImportCode] = useState('');
  const [importError, setImportError] = useState('');
  
  const handleImport = () => {
    try {
      const decoded = decodeProgressCode(importCode);
      populateActivityFields(decoded);
      setImportedData(decoded);
    } catch (error) {
      setImportError('Invalid progress code');
    }
  };
  
  return (
    <div className="import-section">
      {/* UI components */}
    </div>
  );
};
```

#### 2. Export Functionality
```javascript
// At activity completion
const generateNewProgressCode = () => {
  const currentData = collectCurrentActivityData();
  const existingData = importedData || createEmptyWorkshopData();
  const updatedData = mergeWorkshopData(existingData, currentData);
  
  return encodeProgressCode(updatedData);
};
```

#### 3. Change Detection
```javascript
// Track if new code needed
const shouldGenerateNewCode = () => {
  return (
    !importedData ||                    // Started fresh
    hasDataChanged ||                   // Modified imported data
    hasNewActivityData()                // Added new data
  );
};
```

## Code Generation Rules

### Generate New Code When:
1. User completes an activity starting fresh
2. User modifies any imported data
3. User progresses to a new activity section
4. User adds data to a previously incomplete activity

### Do NOT Generate New Code When:
1. User views previously completed work without changes
2. User navigates between steps without data changes
3. User imports a code and immediately exports without modifications

## Data Dependencies

### Cross-Workshop Dependencies
- **Day 1 → Day 2-1**: Problem statement informs ECP development
- **Day 2-1 → Day 2-2**: Complete ECP required for positioning
- **All Days → Day 3**: Cumulative data informs market entry readiness

### Within-Workshop Dependencies
- Each activity can access all previous activity data
- Later activities auto-populate from earlier responses
- Users can modify auto-populated data

## Error Handling

### Invalid Code Handling
```javascript
const validateProgressCode = (code) => {
  // Check prefix
  if (!code.startsWith('GSAP2025-')) {
    throw new Error('Invalid code format');
  }
  
  // Validate structure
  const decoded = decodeBase64(code.substring(9));
  const data = JSON.parse(decoded);
  
  // Check version compatibility
  if (data.metadata.version !== CURRENT_VERSION) {
    handleVersionMismatch(data.metadata.version);
  }
  
  return data;
};
```

### User Messaging
- **Success**: "✅ Progress loaded successfully!"
- **Invalid Code**: "❌ Invalid progress code. Please check and try again."
- **Version Mismatch**: "⚠️ This code is from an older version. Some data may not load correctly."

## Privacy & Security Considerations

1. **No Personal Data**: Codes contain only workshop responses
2. **User Controlled**: No automatic cloud storage
3. **Local Processing**: All encoding/decoding happens in browser
4. **No Tracking**: No analytics on code usage

## Testing Checklist

- [ ] Fresh start → Complete activity → Generate code
- [ ] Import code → Verify data population
- [ ] Modify imported data → Generate new code
- [ ] Import partial progress → Complete activity
- [ ] Invalid code → Appropriate error message
- [ ] Cross-browser compatibility (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device copy/paste functionality
- [ ] Code length < 2000 characters for easy sharing

## Support & Troubleshooting

### Common Issues
1. **"Invalid progress code"**: Check for complete copy/paste
2. **Missing data**: Ensure using latest code
3. **Cannot paste**: Check browser permissions

### Workshop Facilitator Guide
1. Instruct participants to save codes after each activity
2. Suggest email/notes app for code storage
3. Have participants test import at workshop start
4. Provide example code for testing

---

## Implementation Status

- [x] Day 1: Problems Worth Solving *(FULLY IMPLEMENTED - June 10, 2025)*
  - [x] Activity 1: Problem Origin Story ✅
  - [x] Activity 2: Market Landing Zones ✅
  - [x] Activity 3: Problem Scoring ✅
- [x] Day 2-1: Finding Your Early Customers *(FULLY IMPLEMENTED - June 9, 2025)*
  - [x] Activity 1: Early vs Mainstream ✅
  - [x] Activity 2: ECP Component Mapping ✅
  - [x] Activity 3: ECP Hypothesis Builder ✅
- [x] Day 2-2: Positioning Basics *(FULLY IMPLEMENTED - June 9, 2025)*
  - [x] Activity 1: Customer & Alternative ✅
  - [x] Activity 2: Differentiators & Value ✅  
  - [x] Activity 3: Positioning Statement ✅
- [ ] Day 3: Market Entry Readiness
  - [ ] All activities

## Testing Resources

### Complete Test Suite Available

The `/testing/` folder contains a complete set of Progress Codes for testing all implemented workshops using **Posh AMP** (Predictive Optimization for System Health) as the example product:

#### Day 1: Problems Worth Solving
- **`test-code-problems-act-1-input.txt`** - Empty structure for starting Activity 1
- **`test-code-problems-act-1-output.txt`** - Complete problem origin story  
- **`test-code-problems-act-2-input.txt`** - Activity 1 output for starting Activity 2
- **`test-code-problems-act-2-output.txt`** - Complete market landing zone analysis
- **`test-code-problems-act-3-input.txt`** - Activities 1-2 output for starting Activity 3
- **`test-code-problems-act-3-output.txt`** - Complete problem validation (score 23/25)

#### Day 2-1: Finding Your Early Customers  
- **`test-code-ecp-act-1-input.txt`** - Day 1 output for starting ECP work
- **`test-code-ecp-act-1-output.txt`** - Complete early vs mainstream assessment
- **`test-code-ecp-act-2-input.txt`** - Activity 1 output for component mapping
- **`test-code-ecp-act-2-output.txt`** - Complete ECP component mapping
- **`test-code-ecp-act-3-input.txt`** - Activities 1-2 output for hypothesis building
- **`test-code-ecp-act-3-output.txt`** - Complete ECP with SMART criteria

#### Day 2-2: Positioning Basics
- **`test-code-positioning-act-1-input.txt`** - Complete Day 1 + Day 2-1 data for positioning
- **`test-code-positioning-act-1-output.txt`** - Customer profile and competitive assessment
- **`test-code-positioning-act-2-input.txt`** - Activity 1 output for differentiation work
- **`test-code-positioning-act-2-output.txt`** - Complete differentiators and value propositions
- **`test-code-positioning-act-3-input.txt`** - Activities 1-2 output for message creation
- **`test-code-positioning-act-3-output.txt`** - Final positioning messages and statements

### Test Data: Posh AMP Product Specification

All test files contain cohesive data for a B2B SaaS predictive API monitoring solution:
- **Target Market**: Directors of Engineering at Series A-B SaaS companies ($10M-$50M ARR)
- **Core Problem**: $100K/hour API downtime costs and engineering firefighting (2-4 hours/week)
- **Solution**: ML-driven predictive API monitoring with 48-hour advance warning and automated resolution
- **Key Differentiators**: Predictive vs reactive, automated self-healing, API-first architecture optimization
- **Value Proposition**: 50%+ failure reduction, 70% firefighting reduction, 30-50% cost savings

### Implementation Status: ✅ COMPLETE

All positioning activities have been successfully implemented and tested:

1. **Activity 1**: Import → auto-population → completion → export ✅
2. **Activity 2**: Import → reference display → completion → export ✅  
3. **Activity 3**: Import → full auto-population → positioning statement generation ✅

### Success Metrics - All ACHIEVED ✅

#### Functionality
- ✅ Codes generate successfully for all workshop combinations
- ✅ Import/export flow works in all supported browsers
- ✅ Auto-population accurately maps between workshops
- ✅ Error handling gracefully manages edge cases

#### User Experience
- ✅ Clear, intuitive UI for import/export
- ✅ Copy/paste works reliably across platforms
- ✅ Progress codes remain under size limits
- ✅ Users can complete workshop flows without data loss

#### Technical
- ✅ No backend dependencies
- ✅ Works with GitHub Pages static hosting
- ✅ Handles 30 concurrent users without performance issues
- ✅ Maintains data integrity through encode/decode cycle

---

This PRD provides a comprehensive overview of the Workshop Progress Code system, serving as both documentation and implementation guide for developers and workshop facilitators.