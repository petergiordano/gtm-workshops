# Progress Code Generation Guide

## Overview
Progress codes allow users to save and continue their workshop progress across sessions. They are base64-encoded JSON strings with the prefix `GSAP2025-`.

## Code Structure
```
GSAP2025-[base64-encoded-json]
```

## Methods to Generate New Progress Codes

### Method 1: Browser Console (Recommended)
Open browser console (F12) and run:

```javascript
const testData = {
    version: 1,
    workshops: {
        day1: {
            problemStatement: "Your problem statement here",
            scores: {
                urgency: 5,
                importance: 5,
                value: 5,
                marketGap: 4,
                accessibility: 4
            }
        },
        day2_1: {
            common_needs: "Customer needs description",
            problem_urgency: "Urgency description",
            business_value: "Value proposition",
            basic_profile: "Customer profile"
        },
        day2_2: {
            targetCustomer: "Target customer description",
            corePain: "Core pain point"
        }
    }
};

const progressCode = 'GSAP2025-' + btoa(JSON.stringify(testData));
console.log('Generated Progress Code:', progressCode);
```

### Method 2: Using the Generator HTML File
1. Open `test-generate-code.html` in your browser
2. Check the console for the generated code
3. Copy from the textarea on the page

### Method 3: Node.js Script
Run the `generate-test-code.js` file:
```bash
node testing/generate-test-code.js
```

## Test Code Files

### Available Test Files:

1. **`test-code-market-entry-minimal.txt`** - Simple test data
   - Basic structure with minimal content
   - Good for testing import functionality
   - ~200 characters

2. **`test-code-market-entry-single-line.txt`** - Single line format
   - Complete data on one line
   - Prevents line-wrapping issues
   - ~14,000 characters

3. **`test-code-market-entry-input.txt`** - Full workshop data
   - Complete Posh AMP product context
   - All positioning work included
   - Ready for Market Entry Activity 1
   - ~14,000 characters

4. **`test-code-market-entry-act-1-output.txt`** - After Activity 1
   - Includes completed Market Entry Activity 1 data
   - Foundation and goals assessment
   - Success metrics defined
   - Ready for Activity 2

## Data Structure Requirements

### Minimum Required Structure:
```json
{
    "version": 1,
    "workshops": {
        "day1": {
            "problemStatement": "Required"
        }
    }
}
```

### Full Structure Example:
```json
{
    "version": 1,
    "workshops": {
        "day1": {
            "problemStatement": "Problem description",
            "scores": {
                "urgency": 5,
                "importance": 5,
                "value": 5,
                "marketGap": 4,
                "accessibility": 4
            },
            "evidence": {
                "urgency": "Evidence text",
                "importance": "Evidence text",
                "value": "Evidence text",
                "marketGap": "Evidence text",
                "accessibility": "Evidence text"
            }
        },
        "day2_1": {
            "common_needs": "Customer needs",
            "problem_urgency": "Urgency description",
            "business_value": "Value proposition",
            "basic_profile": "Customer profile"
        },
        "day2_2": {
            "targetCustomer": "Target customer",
            "corePain": "Core pain point",
            "differentiators": ["Diff 1", "Diff 2"],
            "values": ["Value 1", "Value 2"]
        },
        "day3": {
            "activity1": {
                "currentPosition": {
                    "strengths": ["Strength 1", "Strength 2"],
                    "limitations": ["Limitation 1", "Limitation 2"]
                },
                "successMetrics": {
                    "sixMonthTargets": {
                        "metrics": ["Metric 1", "Metric 2"],
                        "targets": ["Target 1", "Target 2"]
                    },
                    "twelveMonthTargets": {
                        "metrics": ["Metric 1", "Metric 2"],
                        "targets": ["Target 1", "Target 2"]
                    }
                }
            }
        }
    }
}
```

## Validation

All progress codes should:
1. Start with `GSAP2025-`
2. Contain valid base64 after the prefix
3. Decode to valid JSON
4. Include at minimum a `version` and `workshops` object

## Troubleshooting

### Common Issues:
- **Line wrapping**: Use single-line format files
- **Invalid base64**: Ensure no special characters in the base64 portion
- **JSON errors**: Validate JSON structure before encoding
- **Missing prefix**: Always include `GSAP2025-`

### Testing New Codes:
1. Generate the code using one of the methods above
2. Test in browser console: `JSON.parse(atob('your-base64-here'))`
3. Import into workshop to verify functionality
4. Check browser console for any debug messages

## Creating Product-Specific Test Data

When creating test data for different products, update:
- `problemStatement`: Core problem your product solves
- `targetCustomer`: Your specific customer profile
- `corePain`: Main pain point your product addresses
- `differentiators`: Unique value propositions
- `values`: Customer benefits and outcomes