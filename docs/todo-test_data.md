# TODO: Test Data Implementation Tracker

## 🎯 **Goal:** Implement embedded test data and dev mode across all 12 activity files

### **Phase 1: Create Reusable Components**
- [ ] **Create a Reusable Dev Mode Hook** as a reusable function to avoid repeating logic in every file
  - Create centralized function for loading test data
  - Implement consistent dev mode behavior across all activities
  - Example implementation:
  ```javascript
  function loadTestDataFromScriptTag(setters) {
    const dataEl = document.getElementById('testData');
    if (dataEl) {
      const data = JSON.parse(dataEl.textContent);
      Object.entries(setters).forEach(([key, setter]) => {
        if (data[key]) setter(data[key]);
      });
      alert("✅ Test data loaded.");
    }
  }
  ```
  - Consider embedding this as a reusable script block or utility function

### **Phase 2: Update Reference Implementation**
- [ ] **Update market-entry-activity-1A.html** to use `test_data/market-entry-activity-1A.json` instead of embedded data
  - Replace current embedded test data with data from JSON file
  - Implement reusable dev mode hook
  - Ensure dev mode functionality remains intact
  - Verify copy-to-clipboard and completion screen work correctly

### **Phase 3: Implement Test Data Embedding (11 remaining activities)**

#### **Problems Worth Solving (3 activities)**
- [ ] **problems-activity-1A.html** → `test_data/problems-activity-1A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **problems-activity-2A.html** → `test_data/problems-activity-2A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **problems-activity-3A.html** → `test_data/problems-activity-3A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

#### **Finding Your Early Customers (3 activities)**
- [ ] **ecp-activity-1A.html** → `test_data/ecp-activity-1A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **ecp-activity-2A.html** → `test_data/ecp-activity-2A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **ecp-activity-3A.html** → `test_data/ecp-activity-3A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

#### **Positioning Basics (3 activities)**
- [ ] **positioning-activity-1A.html** → `test_data/positioning-activity-1A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **positioning-activity-2A.html** → `test_data/positioning-activity-2A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **positioning-activity-3A.html** → `test_data/positioning-activity-3A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

#### **Market Entry Readiness (2 remaining activities)**
- [ ] **market-entry-activity-2A.html** → `test_data/market-entry-activity-2A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

- [ ] **market-entry-activity-3A.html** → `test_data/market-entry-activity-3A.json`
  - Remove progress code system
  - Embed test data and implement reusable dev mode hook
  - Add markdown export and copy-to-clipboard UX
  - Add professional completion screen

### **Phase 4: Quality Assurance & Testing**
- [ ] **Test dev mode functionality** across all activities
  - Double-click title toggles dev mode
  - Dev mode shows 🔧 icon and orange text
  - "Fill Test Data" button populates all fields correctly
  - Completion screen displays with proper data

- [ ] **Test copy-to-clipboard functionality** across all activities
  - Copy button shows dual feedback (status div + floating notification)
  - Non-blocking notifications (no alerts)
  - 3-second visibility for feedback
  - Fallback works for older browsers

- [ ] **Verify markdown export quality** across all activities
  - Professional formatting with proper structure
  - Activity-specific content and scoring
  - Tables and lists render correctly
  - Timestamp and workshop context included

### **Phase 5: Navigation & Flow Updates**
- [ ] **Update navigation links** in A-version files
  - Continue buttons point to next A-version activity
  - Back to Workshop links maintained
  - "Back to Edit" buttons on completion screens

- [ ] **Add activity-specific next steps** sections
  - Orange background styling
  - Clear titles and descriptions
  - Bullet points with key topics
  - Responsive grid layouts

### **Phase 6: Documentation Updates**
- [ ] **Update docs/activity_standards.md**
  - Document new embedded test data pattern
  - Add dev mode implementation standards
  - Include copy-to-clipboard UX requirements

- [ ] **Update docs/TODO.md**
  - Mark test data implementation as complete
  - Add any new requirements discovered during implementation

### **Implementation Order (Recommended)**
1. **Create reusable dev mode hook** (Phase 1)
2. **Update market-entry-activity-1A.html** to use JSON file and reusable hook (Phase 2)
3. **Continue with market-entry-activity-2A.html** (Phase 3 - next logical step)
4. **Move to problems-activity-1A.html** (Phase 3 - different workshop type)
5. **Complete remaining activities** in logical workshop order (Phase 3)

### **Reference Files**
- `docs/_README-embed-test-data-in-activity.md` - Implementation methodology
- `docs/Copy-to-Clipboard-UX-Design-Specific.md` - UX patterns
- `docs/user-entry-test-responses.md` - Source test data
- `market_entry_readiness/market-entry-activity-1A.html` - Reference implementation

### **Success Criteria**
✅ All 12 activities have embedded test data and dev mode
✅ All activities use centralized test_data/*.json files  
✅ All activities have professional completion screens
✅ All activities have working copy-to-clipboard functionality
✅ All activities follow the same UX patterns and quality standards
✅ Navigation flows correctly between A-version activities