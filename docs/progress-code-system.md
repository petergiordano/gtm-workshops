# Workshop Progress Code System - Product Requirements Document

## System Overview

The Workshop Progress Code system enables participants to save and transfer their workshop progress between sessions without requiring backend infrastructure. This solution is designed for static hosting environments (GitHub Pages) with up to 30 concurrent users.

## User Flow

### Export Flow (Saving Progress)
1. Participant completes workshop activity
2. System displays "Save Your Progress" section with generated code
3. Participant copies progress code (format: `GSAP2025-[base64_data]`)
4. Participant saves code externally (email, notes, etc.)

### Import Flow (Restoring Progress)
1. Participant starts new workshop session
2. System shows "Import Previous Progress" section
3. Participant pastes their progress code
4. System validates and auto-populates relevant fields
5. Import section collapses, participant continues with pre-filled data

## Technical Architecture

### Data Format
- **Format**: `GSAP2025-[base64_encoded_json]`
- **Encoding**: `btoa(JSON.stringify(workshopData))`
- **Size Limit**: < 2000 characters total
- **Validation**: Format check + JSON parse verification

### Storage Strategy
- **User-managed**: No automatic storage
- **Transport**: Copy/paste workflow
- **Persistence**: External to workshop system
- **Privacy**: No data leaves user control

### Data Structure
```json
{
  "version": "1.0",
  "userId": "optional-identifier",
  "createdAt": "ISO-8601-timestamp",
  "lastUpdated": "ISO-8601-timestamp",
  "day1": { /* Problems Worth Solving */ },
  "day2_1": { /* Finding Early Customers */ },
  "day2_2": { /* Positioning Basics */ },
  "day3": { /* Market Entry Readiness */ }
}
```

## User Interface Standards

### Import Section
**Location**: Top of activity page  
**Visibility**: Collapsible, visible by default initially  
**Behavior**: Auto-hide 3 seconds after successful import, giving users time to see the success message

```
┌─────────────────────────────────────────┐
│ 📄 Continue Your Progress               │
│                                         │
│ [Paste progress code here...]           │
│ [Load Progress] [Start Fresh Instead]   │
│                                         │
│ ✓ Progress loaded successfully! Your    │
│   previous responses have been filled   │
│   in below.                             │
└─────────────────────────────────────────┘
```

### Export Section
**Location**: End of activity, after completion  
**Visibility**: Only shown when activity is complete  
**Behavior**: Prominent display with copy functionality

```
┌─────────────────────────────────────────┐
│ ✓ Activity Complete! Save Your Progress │
│                                         │
│ Your progress code:                     │
│ GSAP2025-eyJ2ZXJzaW9uIjoiMS4wIi...     │
│                                         │
│ [📋 Copy Code] [What's this?]           │
│                                         │
│ ✓ Copied to clipboard!                  │
└─────────────────────────────────────────┘
```

## Data Dependencies

### Cross-Workshop Flow
```
Day 1 (Problems) → Day 2-1 (Customers) → Day 2-2 (Positioning) → Day 3 (Market Entry)
```

### Auto-Population Logic
- **Day 2-2 Activity 1**: Populates from Day 2-1 ECP data
- **Day 2-2 Activity 3**: Uses all previous Day 2-2 activities
- **Day 3**: References complete positioning statement

## Implementation Requirements

### Browser Compatibility
- Chrome/Edge: Native clipboard API
- Safari: Fallback clipboard handling
- Firefox: Standard copy/paste
- Mobile: Touch-friendly interactions

### Error Handling
- Invalid code format: Clear error message
- Malformed JSON: "Code appears corrupted"
- Version mismatch: Shows warning but attempts import, future versions will include migration strategies
- Partial data: Import what's available, warn about gaps

### Performance Constraints
- Encoding/decoding: < 100ms
- UI responsiveness: No blocking operations
- Memory usage: Minimal state storage
- Code generation: On-demand only

## Success Metrics

### Functionality
- [ ] Codes generate successfully for all workshop combinations
- [ ] Import/export flow works in all supported browsers
- [ ] Auto-population accurately maps between workshops
- [ ] Error handling gracefully manages edge cases

### User Experience
- [ ] Clear, intuitive UI for import/export
- [ ] Copy/paste works reliably across platforms
- [ ] Progress codes remain under size limits
- [ ] Users can complete workshop flows without data loss

### Technical
- [ ] No backend dependencies
- [ ] Works with GitHub Pages static hosting
- [ ] Handles 30 concurrent users without performance issues
- [ ] Maintains data integrity through encode/decode cycle

## Constraints and Limitations

### Technical Constraints
- **Static hosting**: No server-side processing
- **Browser limits**: Clipboard API availability varies
- **Data size**: Base64 encoding adds ~33% overhead
- **No networking**: All processing client-side

### User Experience Constraints
- **Manual process**: Users must manage their own codes
- **No cloud backup**: Data loss if code is lost
- **Single device**: No automatic sync between devices
- **Learning curve**: Users must understand save/restore workflow

## Future Enhancements

### Short Term
- Visual progress indicators showing completed workshops
- QR code generation for easier mobile sharing
- Local storage backup (with user consent)

### Long Term
- Optional cloud storage integration
- Team/cohort sharing features
- Instructor dashboard for progress monitoring
- Export to PDF reports

## Security and Privacy

### Data Protection
- All data remains on user's device during processing
- No telemetry or analytics on workshop content
- Progress codes contain only workshop responses
- No personal identifiers required

### User Control
- Users own and manage their progress codes
- No automatic data collection
- Clear explanation of what's stored in codes
- Option to exclude sensitive data from exports

---

*This system prioritizes user data ownership and privacy while enabling seamless workshop progression in a static hosting environment.*