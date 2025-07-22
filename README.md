# GTM Workshop Series

## Overview
The GTM Workshop Series is a multi-day, interactive training program designed to help early-stage startup founders and teams develop a strong go-to-market strategy. The program covers core topics such as identifying meaningful problems, finding early customers, refining product positioning, and building market entry readiness. Each day features hands-on activities and outputs designed to be directly applicable to your startup.

## Workshop Structure
- **Day 1**: Problems Worth Solving (3 activities)
- **Day 2-1**: Finding Your Early Customers (3 activities)  
- **Day 2-2**: Positioning Basics (3 activities)
- **Day 3**: Market Entry Readiness (3 activities)

**Live Site**: https://petergiordano.github.io/gtm-workshops/

## For Participants
Access any workshop from the main page and complete the interactive activities. Each activity includes:
- Step-by-step guidance with real-time validation
- Professional report export to Google Docs
- Self-contained design (no accounts or logins required)

## For Developers & Claude Code

### Quick Start for New Activities
To create a new workshop activity, follow the **A-Version Enhanced Pattern**:

1. **Use the Template**: Copy an existing A-version activity (e.g., `market-entry-activity-1A.html`)
2. **Update Test Data**: Create realistic test data in `test_data/[activity-name]-#A.json` 
3. **Embed Test Data**: Include test data in `<script type="application/json" id="testData">` tag
4. **Enable Dev Mode**: Double-click title to toggle, 🔧 icon when active
5. **Professional Export**: Hidden markdown textarea with Google Docs integration

### Technical Architecture
- **React 18**: `createRoot` API (not deprecated `ReactDOM.render`)
- **Styling**: Tailwind CSS (CDN-loaded, laptop-optimized)
- **No Build Process**: Direct browser execution with Babel transpilation
- **Self-Contained**: Each HTML file includes everything needed

### Key Design Standards
- **Container**: `max-width: 900px` (laptop-optimized)
- **Form Fields**: `min-height: 80px` textareas that expand on focus
- **Validation**: Word count display + character count validation internally
- **Color Scheme**: Orange primary (`#FF9000`), semantic colors for states
- **Icons**: Custom SVG components (CheckCircle, Target, Building, etc.)

### Dev Mode Implementation
```javascript
// Double-click title to activate
<h1 onDoubleClick={toggleDevMode} className={devMode ? 'text-orange-600' : 'text-gray-800'}>
    Activity Title {devMode && '🔧'}
</h1>

// One-click data loading from embedded JSON
const devFillData = () => {
    const testData = JSON.parse(document.getElementById('testData').textContent);
    // ... populate all form fields
    setCurrentStep(3); // Jump to completion screen
};
```

### File Naming Convention
- **Enhanced Activities**: `[topic]-activity-[number]A.html`
- **Test Data**: `test_data/[topic]-activity-[number]A.json`
- **Examples**: 
  - `pricing-activity-1A.html` → `test_data/pricing-activity-1A.json`
  - `market-entry-activity-2A.html` → `test_data/market-entry-activity-2A.json`

### Professional Export Features
- **Hidden Markdown Textarea**: Professional report generated in background
- **Copy-to-Clipboard**: Dual feedback system (status + floating notification)
- **Google Docs Integration**: "Edit → Paste special → Paste from markdown"
- **Level 1 Headings**: `# Workshop Series: Activity Name` for proper formatting

## Documentation
- **[docs/activity_standards.md](docs/activity_standards.md)**: Complete design specifications and component patterns
- **[docs/design-specifications.md](docs/design-specifications.md)**: Visual design standards and laptop optimization
- **[CLAUDE.md](CLAUDE.md)**: Implementation guidelines for Claude Code specifically
- **[docs/TODO.md](docs/TODO.md)**: Current project status and completed features

## Branching Strategy & Deployment
- **main**: Live GitHub Pages site with embedded test data system
- **original-mvp**: Archived first version with legacy progress code logic
- **bolt-migration**: Future React-based app migration branch

## Current Status
✅ **All 12 core activities implemented** with embedded test data system  
✅ **Complete A-version pattern** established and documented  
✅ **Dev mode functionality** across all activities  
✅ **Professional markdown export** with Google Docs integration  

**Ready for**: New activity creation following established patterns
