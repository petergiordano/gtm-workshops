# localStorage Persistence Architecture

## Overview

This document defines the standard localStorage persistence architecture for GTM workshop activities, enabling users to maintain their progress across browser sessions without requiring a backend.

## Architecture Principles

### Unique Project-Specific Storage Keys
All workshop data is stored using unique, application-specific localStorage keys to prevent data collisions between different workshop applications. Each workshop should define its own storage key using the naming convention `workshopState_` followed by the project identifier.

**Recommended naming convention:**
- Competitive Strategy: `workshopState_competitive_strategy`
- Pricing Strategy: `workshopState_pricing_strategy`  
- Market Entry: `workshopState_market_entry`

```javascript
// ❌ BEFORE: Hardcoded key causes collisions
{
  "workshopState": {
    "customers": "...",
    "competitors": "..."
  }
}

// ✅ AFTER: Unique key prevents collisions
{
  "workshopState_competitive_strategy": {
    "customers": "...",
    "competitors": "...", 
    "selectedForces": ["customers", "substitutes"]
  },
  "workshopState_pricing_strategy": {
    "coreValueMetric": "...",
    "pricingModel": "..."
  }
}
```

### Data Isolation Strategy
Each workshop application maintains its own isolated state in localStorage, enabling multiple workshop applications to coexist in the same browser without interfering with each other. This architecture supports:

- **Data safety**: No accidental overwrites between workshops
- **Independent development**: Teams can work on different workshops simultaneously
- **User flexibility**: Users can work on multiple workshops concurrently

### Multi-Activity Workshop Support
Within a single workshop, activities share the same storage key, enabling data persistence and cross-activity data sharing while maintaining isolation from other workshop applications.

## Implementation Guide

### Step 1: Define Storage Key and Add Global Helper Functions

**First, define a unique storage key constant** at the top of your script:

```javascript
// Define unique storage key for this workshop application
const WORKSHOP_STORAGE_KEY = 'workshopState_competitive_strategy';
```

**Then add these helper functions** outside your React component, typically after the React import:

```javascript
/**
 * Loads the entire workshop state from localStorage using a specific key.
 * @param {string} storageKey - The unique key for the workshop's state.
 * @returns {object} The parsed workshop state or an empty object.
 */
const loadWorkshopState = (storageKey) => {
    try {
        const savedState = localStorage.getItem(storageKey);
        return savedState ? JSON.parse(savedState) : {};
    } catch (error) {
        console.error("Could not load state from localStorage", error);
        return {};
    }
};

/**
 * Saves a piece of state by merging it into the existing workshop state.
 * @param {object} stateToSave - An object containing the key-value pairs to save.
 * @param {string} storageKey - The unique key for the workshop's state.
 */
const saveWorkshopState = (stateToSave, storageKey) => {
    try {
        const currentState = loadWorkshopState(storageKey);
        const newState = { ...currentState, ...stateToSave };
        localStorage.setItem(storageKey, JSON.stringify(newState));
    } catch (error) {
        console.error("Could not save state to localStorage", error);
    }
};
```

### Step 2: Initialize State from localStorage

Modify useState calls to load from localStorage using your unique storage key:

```javascript
// Add this constant at the top of the script
const WORKSHOP_STORAGE_KEY = 'workshopState_competitive_strategy';

// ❌ BEFORE: Simple initialization
const [customers, setCustomers] = useState('');
const [selectedForces, setSelectedForces] = useState([]);

// ✅ AFTER: localStorage initialization with unique key
const [customers, setCustomers] = useState(loadWorkshopState(WORKSHOP_STORAGE_KEY).customers || '');
const [selectedForces, setSelectedForces] = useState(loadWorkshopState(WORKSHOP_STORAGE_KEY).selectedForces || []);
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
    saveWorkshopState(currentState, WORKSHOP_STORAGE_KEY);
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
    saveWorkshopState(emptyState, WORKSHOP_STORAGE_KEY);
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
- [ ] Test data isolation (other workshop data unaffected)

### Performance Testing
- [ ] No infinite loops in useEffect
- [ ] No unnecessary re-renders
- [ ] Clean console (no localStorage errors)

## Common Pitfalls & Solutions

### 1. Missing Storage Key Definition
**Problem**: Helper functions called without storage key parameter
```javascript
// ❌ Bug: Missing storage key parameter
const [customers, setCustomers] = useState(loadWorkshopState().customers || '');
saveWorkshopState(currentState);
```

**Solution**: Always define and use storage key constant
```javascript
// ✅ Fixed: Storage key properly defined and used
const WORKSHOP_STORAGE_KEY = 'workshopState_competitive_strategy';
const [customers, setCustomers] = useState(loadWorkshopState(WORKSHOP_STORAGE_KEY).customers || '');
saveWorkshopState(currentState, WORKSHOP_STORAGE_KEY);
```

### 2. ID Mismatch Bug
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

### 3. Missing Dependencies in useEffect
**Problem**: useEffect doesn't include all state variables
```javascript
// ❌ Bug: Missing selectedForces in dependency array
useEffect(() => {
    saveWorkshopState({ customers, competitors, selectedForces }, WORKSHOP_STORAGE_KEY);
}, [customers, competitors]); // selectedForces missing!
```

**Solution**: Include ALL persistent variables in dependencies
```javascript
// ✅ Fixed: All variables included
useEffect(() => {
    saveWorkshopState({ customers, competitors, selectedForces }, WORKSHOP_STORAGE_KEY);
}, [customers, competitors, selectedForces]); // All included
```

### 4. Infinite useEffect Loops
**Problem**: Objects/arrays in dependencies cause infinite loops
```javascript
// ❌ Bug: Object recreation causes infinite loop
useEffect(() => {
    const state = { customers, competitors }; // New object every render
    saveWorkshopState(state, WORKSHOP_STORAGE_KEY);
}, [{ customers, competitors }]); // New object in dependencies
```

**Solution**: Use primitive values in dependencies
```javascript
// ✅ Fixed: Primitive values in dependencies
useEffect(() => {
    const state = { customers, competitors };
    saveWorkshopState(state, WORKSHOP_STORAGE_KEY);
}, [customers, competitors]); // Primitive values only
```

### 5. Reset Function Incomplete
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
    saveWorkshopState({ customers: '', competitors: '' }, WORKSHOP_STORAGE_KEY);
};
```

## File Structure

When implementing persistence in a new activity:

```
workshop-activity-XA.html
├── Unique storage key constant (WORKSHOP_STORAGE_KEY)
├── Global helper functions
│   ├── loadWorkshopState(storageKey)
│   └── saveWorkshopState(stateToSave, storageKey)
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
- **Data isolation**: Unique keys prevent accidental data access between workshops

## Future Enhancements

### Multi-Activity Workshop Support
Within a single workshop application, activities can share data using the same storage key:

```javascript
{
  "workshopState_competitive_strategy": {
    // Activity 1: Competitive Analysis
    "customers": "...",
    "selectedForces": [...],
    
    // Activity 2: Play & Win Choices  
    "targetSegment": "...",
    "whereNotToPlay": "...",
    
    // Activity 3: Strategy Blueprint
    "entryStrategy": "...",
    "timeFrame": "..."
  }
}
```

### Cross-Activity Data Sharing
Workshop activities can reference data from previous activities within the same workshop:

```javascript
// Activity 2 can access Activity 1 data from same workshop
const WORKSHOP_STORAGE_KEY = 'workshopState_competitive_strategy';
const previousData = loadWorkshopState(WORKSHOP_STORAGE_KEY);
const competitiveForces = previousData.selectedForces || [];
```

### Workshop Progress Tracking
Track overall workshop completion within each workshop application:

```javascript
const workshopProgress = {
  activity1Complete: true,
  activity2Complete: false,
  lastActiveActivity: 'activity-1A',
  startedDate: '2024-01-15',
  lastModified: '2024-01-15T14:30:00Z'
};
saveWorkshopState({ workshopProgress }, WORKSHOP_STORAGE_KEY);
```

### Cross-Workshop Data Integration
Future enhancements may enable controlled data sharing between workshops:

```javascript
// Hypothetical future feature: controlled cross-workshop data access
const competitiveData = loadWorkshopState('workshopState_competitive_strategy');
const pricingData = loadWorkshopState('workshopState_pricing_strategy');
const integratedInsights = combineWorkshopData(competitiveData, pricingData);
```

## Migration Guide

To add persistence to existing activities:

1. **Define a unique storage key**: At the top of your script, declare a constant for your application's unique localStorage key (e.g., `const WORKSHOP_STORAGE_KEY = 'workshopState_my_app';`).
2. **Create feature branch**: `feat/activity-N-persistence`
3. **Add helper functions** (copy from this doc)
4. **Update useState calls** with localStorage initialization using storage key
5. **Add persistence useEffect** with all form fields and storage key
6. **Update reset function** to clear localStorage using storage key
7. **Fix any ID mismatches** between components and state
8. **Test thoroughly** using checklist above
9. **Commit with descriptive message**

### Migrating from Hardcoded 'workshopState' Key

If updating existing implementations that use the old hardcoded key:

1. **Define new unique storage key** constant
2. **Update all function calls** to include storage key parameter
3. **Consider data migration** if preserving existing user data is required:

```javascript
// Optional: Migrate existing data to new key
const oldData = localStorage.getItem('workshopState');
if (oldData && !localStorage.getItem(WORKSHOP_STORAGE_KEY)) {
    localStorage.setItem(WORKSHOP_STORAGE_KEY, oldData);
    localStorage.removeItem('workshopState'); // Clean up old key
}
```

## Storage Key Naming Conventions

### Recommended Patterns
- **Workshop name based**: `workshopState_competitive_strategy`
- **Domain specific**: `workshopState_gtm_planning`
- **Sequential**: `workshopState_week1`, `workshopState_week2`

### Avoid These Patterns
- **Generic names**: `workshopState`, `data`, `state`
- **Conflicting names**: Using same key for different workshops
- **Special characters**: Spaces, punctuation that might cause issues
- **Very long names**: Keep under 50 characters for readability

## Maintenance Notes

- **Update this document** when patterns change
- **Version control**: Keep helper functions consistent across activities
- **Storage key registry**: Maintain list of used storage keys to prevent collisions
- **Testing**: Add localStorage tests to CI/CD pipeline (future)
- **Monitoring**: Track localStorage usage in production (future)

---

**Last Updated**: 2024-01-XX  
**Implementation**: competitive-activity-1A.html (reference implementation)  
**Status**: Active - use for all new workshop activities  
**Breaking Change**: v2.0 - Requires unique storage keys (migration guide above)