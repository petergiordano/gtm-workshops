# Technical Implementation Guide

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
  
  // Hide import section after short delay
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
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
      {/* Implementation from activity_standards.md */}
    </div>
  );
};
```

### Step 2: Add Export Section Component

```javascript
const ExportSection = ({ workshopData }) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const progressCode = encodeProgressCode(workshopData);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(progressCode);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };
  
  return (
    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mt-6">
      {/* Implementation from activity_standards.md */}
    </div>
  );
};
```

### Step 3: Update Main Activity Component

```javascript
// Add to main activity component
const [workshopData, setWorkshopData] = useState(() => {
  // Initialize with empty structure
  return {
    day1: {},
    day2_1: {},
    day2_2: {},
    day3: {}
  };
});

const [showImportSection, setShowImportSection] = useState(true);
const [activityComplete, setActivityComplete] = useState(false);

// Handle import
const handleImport = (code) => {
  const decoded = decodeProgressCode(code);
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
  const [workshopData, setWorkshopData] = useState({
    day1: {}, day2_1: {}, day2_2: {}, day3: {}
  });
  const [showImportSection, setShowImportSection] = useState(true);
  
  // Import handler
  const handleImport = (code) => {
    const data = decodeProgressCode(code);
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
const maxData = {
  day1: { /* max realistic data */ },
  day2_1: { /* max realistic data */ },
  day2_2: { /* max realistic data */ },
  day3: { /* max realistic data */ }
};

const code = encodeProgressCode(maxData);
console.assert(code.length < 2000, `Code too long: ${code.length} chars`);
```
```
