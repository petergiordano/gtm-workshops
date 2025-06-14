# Version Compatibility Matrix

## React Version Requirements

### React 18.x (Required)
- **Migration Date**: June 2025
- **Status**: MANDATORY for all activities
- **CDN Links**: 
  - `https://unpkg.com/react@18/umd/react.development.js`
  - `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
- **Rendering API**: Must use `ReactDOM.createRoot()` - `ReactDOM.render()` is deprecated
- **Compatibility**: All activities updated and tested with React 18

### React 17.x (Deprecated)
- **Status**: NO LONGER SUPPORTED
- **Issue**: `ReactDOM.render()` method causes rendering failures
- **Migration**: All activities migrated to React 18

## Progress Code Versions

### Version 1.0 (Current)
- **Released**: June 2025
- **Structure**: Basic 4-day workshop data
- **React Requirement**: React 18.x
- **Compatibility**: N/A (first version)

### Future Version Planning

#### Version 1.1 (Planned)
- **Changes**: Add Track 2 workshops (days 5-10)
- **Compatibility**: Backward compatible with 1.0
- **Migration**: No migration needed, new fields optional

#### Version 2.0 (Future)
- **Changes**: TBD based on user feedback
- **Compatibility**: Will require migration from 1.x
- **Migration**: Automated migration function planned

## Migration Strategy

When implementing new versions:
1. Increment version number in data structure
2. Add migration function for previous versions
3. Test with sample data from all previous versions
4. Document changes in this matrix

## Testing Version Compatibility

Always test with progress codes from:
- Empty state (new user)
- Partial completion (some workshops done)
- Full completion (all workshops done)
- Previous version data