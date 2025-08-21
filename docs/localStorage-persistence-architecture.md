# localStorage Persistence Architecture

## Overview

This document defines the standard localStorage persistence architecture for GTM workshop activities, enabling users to maintain their progress across browser sessions without requiring a backend.

## Architecture Principles

### Single Workshop State Object
All workshop data is stored in a single JSON object under the localStorage key `workshopState`:

```javascript
// localStorage structure
{
  "workshopState": {
    // Activity 1 data
    "customers": "...",
    "competitors": "...", 
    "selectedForces": ["customers", "substitutes"],
    
    // Activity 2 data (future)
    "targetSegment": "...",
    "specificBuyer": "...",
    
    // Activity N data (future)
    "someOtherField": "..."
  }
}
```

### Data Merging Strategy
New data is merged into existing localStorage state, preserving data from other activities. This enables multi-activity workshop persistence without data loss.

## Implementation Guide

### Step 1: Add Global Helper Functions

Add these functions **outside** your React component, typically after the React import:

```javascript
/**
 * Loads the entire workshop state from localStorage.
 * @returns {object} The parsed workshop state or an empty object.
 */
const loadWorkshopState = () => {
    try {
        const savedState = localStorage.getItem('workshopState');
        return savedState ? JSON.parse(savedState) : {};
    } catch (error) {
        console.error("Could not load state from localStorage", error);
        return {};
    }
};

/**
 * Saves a piece of state by merging it into the existing workshop state.
 * @param {object} stateToSave - An object containing the key-value pairs to save.
 */
const saveWorkshopState = (stateToSave) => {
    try {
        const currentState = loadWorkshopState();
        const newState = { ...currentState, ...stateToSave };
        localStorage.setItem('workshopState', JSON.stringify(newState));
    } catch (error) {
        console.error("Could not save state to localStorage", error);
    }
};
```

### Step 2: Initialize State from localStorage

Modify useState calls to load from localStorage with fallbacks:

```javascript
// ❌ BEFORE: Simple initialization
const [customers, setCustomers] = useState('');
const [selectedForces, setSelectedForces] = useState([]);

// ✅ AFTER: localStorage initialization
const [customers, setCustomers] = useState(loadWorkshopState().customers || '');
const [selectedForces, setSelectedForces] = useState(loadWorkshopState().selectedForces || []);
```

### Step 3: Add Auto-Persistence Hook

Add a useEffect that saves state whenever any persistent data changes:

```javascript
// Auto-save state to localStorage whenever any form data changes
useEffect(() => {
    const currentState = {
        customers,
        competitors,
        substitutes,
        suppliers,
        newEntrants,
        selectedForces
        // Add all fields that should persist
    };
    saveWorkshopState(currentState);
}, [customers, competitors, substitutes, suppliers, newEntrants, selectedForces]);
```

**⚠️ Critical:** Include ALL persistent state variables in both the object and dependency array.

### Step 4: Update Reset Function

Ensure reset functions clear both component state AND localStorage:

```javascript
const resetActivity = () => {
    // Reset component state
    setCustomers('');
    setCompetitors('');
    // ... reset all fields
    
    // Clear localStorage data for this activity
    const emptyState = {
        customers: '',
        competitors: '',
        substitutes: '',
        suppliers: '',
        newEntrants: '',
        selectedForces: []
    };
    saveWorkshopState(emptyState);
};
```

## State Variable Naming Standards

### Consistent ID Mapping
Ensure component IDs match state variable names to avoid selection bugs:

```javascript
// ✅ CORRECT: IDs match state variable names
<ForceBox id="customers" value={customers} />        // customers state
<ForceBox id="competitors" value={competitors} />    // competitors state

// ❌ WRONG: ID mismatch causes selection failures  
<ForceBox id="buyers" value={customers} />           // handleForceSelection("buyers") 
                                                     // but state is "customers"
```

### State Variable Types
- **Text inputs**: Initialize with `''` (empty string)
- **Arrays**: Initialize with `[]` (empty array)
- **Objects**: Initialize with `{}` (empty object)
- **Numbers**: Initialize with appropriate default (0, null, etc.)

## Testing Checklist

Before committing localStorage persistence implementation:

### Functional Testing
- [ ] Fill out form fields
- [ ] Make selections (checkboxes, radio buttons, etc.)
- [ ] Refresh browser - all data restored exactly
- [ ] Continue adding/editing data after refresh
- [ ] Reset activity clears both UI and localStorage
- [ ] Dev mode functions normally (if applicable)

### Edge Case Testing
- [ ] Test with localStorage disabled/blocked
- [ ] Test with invalid JSON in localStorage
- [ ] Test with partial data (some fields missing)
- [ ] Test cross-tab behavior (optional)

### Performance Testing
- [ ] No infinite loops in useEffect
- [ ] No unnecessary re-renders
- [ ] Clean console (no localStorage errors)

## Common Pitfalls & Solutions

### 1. ID Mismatch Bug
**Problem**: Component IDs don't match state variable names
```javascript
// ❌ Bug: id="buyers" but state is "customers"
<Component id="buyers" value={customers} onClick={() => handleSelection("buyers")} />
```

**Solution**: Ensure IDs match state variable names exactly
```javascript
// ✅ Fixed: id matches state name
<Component id="customers" value={customers} onClick={() => handleSelection("customers")} />
```

### 2. Missing Dependencies in useEffect
**Problem**: useEffect doesn't include all state variables
```javascript
// ❌ Bug: Missing selectedForces in dependency array
useEffect(() => {
    saveWorkshopState({ customers, competitors, selectedForces });
}, [customers, competitors]); // selectedForces missing!
```

**Solution**: Include ALL persistent variables in dependencies
```javascript
// ✅ Fixed: All variables included
useEffect(() => {
    saveWorkshopState({ customers, competitors, selectedForces });
}, [customers, competitors, selectedForces]); // All included
```

### 3. Infinite useEffect Loops
**Problem**: Objects/arrays in dependencies cause infinite loops
```javascript
// ❌ Bug: Object recreation causes infinite loop
useEffect(() => {
    const state = { customers, competitors }; // New object every render
    saveWorkshopState(state);
}, [{ customers, competitors }]); // New object in dependencies
```

**Solution**: Use primitive values in dependencies
```javascript
// ✅ Fixed: Primitive values in dependencies
useEffect(() => {
    const state = { customers, competitors };
    saveWorkshopState(state);
}, [customers, competitors]); // Primitive values only
```

### 4. Reset Function Incomplete
**Problem**: Reset clears UI but not localStorage
```javascript
// ❌ Bug: localStorage not cleared
const resetActivity = () => {
    setCustomers('');
    setCompetitors('');
    // localStorage still contains old data!
};
```

**Solution**: Clear both UI and localStorage
```javascript
// ✅ Fixed: Both UI and storage cleared
const resetActivity = () => {
    setCustomers('');
    setCompetitors('');
    saveWorkshopState({ customers: '', competitors: '' });
};
```

## File Structure

When implementing persistence in a new activity:

```
workshop-activity-XA.html
├── Global helper functions
│   ├── loadWorkshopState()
│   └── saveWorkshopState()
├── React component
│   ├── useState with localStorage initialization
│   ├── Auto-persistence useEffect hook
│   ├── Reset function with localStorage clearing
│   └── Component logic
└── Component IDs match state variable names
```

## Browser Compatibility

localStorage persistence works in:
- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Private/Incognito mode (data cleared on session end)
- ❌ Browsers with localStorage disabled

Graceful degradation: App functions normally even when localStorage fails.

## Security Considerations

- **No sensitive data**: Never store passwords, API keys, or personal information
- **Client-side only**: Data stored in user's browser, not transmitted
- **Public storage**: Other scripts on same domain can access localStorage
- **Size limits**: 5-10MB total localStorage limit per domain

## Future Enhancements

### Multi-Activity Workshop Support
As more activities are added, the `workshopState` object will grow:

```javascript
{
  "workshopState": {
    // Activity 1: Competitive Analysis
    "customers": "...",
    "selectedForces": [...],
    
    // Activity 2: Play & Win Choices  
    "targetSegment": "...",
    "whereNotToPlay": "...",
    
    // Activity 3: Market Entry
    "entryStrategy": "...",
    "timeFrame": "..."
  }
}
```

### Cross-Activity Data Sharing
Future workshop activities may reference data from previous activities:

```javascript
// Activity 2 can access Activity 1 data
const previousData = loadWorkshopState();
const competitiveForces = previousData.selectedForces || [];
```

### Workshop Progress Tracking
Track overall workshop completion:

```javascript
const workshopProgress = {
  activity1Complete: true,
  activity2Complete: false,
  lastActiveActivity: 'activity-1A',
  startedDate: '2024-01-15',
  lastModified: '2024-01-15T14:30:00Z'
};
```

## Migration Guide

To add persistence to existing activities:

1. **Create feature branch**: `feat/activity-N-persistence`
2. **Add helper functions** (copy from this doc)
3. **Update useState calls** with localStorage initialization
4. **Add persistence useEffect** with all form fields
5. **Update reset function** to clear localStorage
6. **Fix any ID mismatches** between components and state
7. **Test thoroughly** using checklist above
8. **Commit with descriptive message**

## Maintenance Notes

- **Update this document** when patterns change
- **Version control**: Keep helper functions consistent across activities
- **Testing**: Add localStorage tests to CI/CD pipeline (future)
- **Monitoring**: Track localStorage usage in production (future)

---

**Last Updated**: 2024-01-XX  
**Implementation**: competitive-activity-1A.html (reference implementation)  
**Status**: Active - use for all new workshop activities