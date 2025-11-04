# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

GTM-Workshops is a static web application for Go-To-Market workshops built entirely with client-side technologies. Each workshop activity is a self-contained HTML file with embedded React 18, Tailwind CSS, and JSON test data—no build process, backend, or dependencies required.

**Live Site**: https://petergiordano.github.io/gtm-workshops/

## Commands

### Local Development
```bash
# Run local server (choose one)
python -m http.server 8000           # Python 3
python -m SimpleHTTPServer 8000      # Python 2
http-server                          # Node.js (if installed globally)
```

### Testing
- **Dev Mode**: Double-click activity title in browser, then click "Fill Test Data"
- **Test Files**: Open `test-code-validation.html` or `test-generate-code.html` directly in browser
- **Export Testing**: Complete activity, copy markdown, paste in Google Docs

### Deployment
Push to main branch—GitHub Pages auto-deploys via `.github/workflows/static.yml`

## High-Level Architecture

### Static Site Structure
The project uses a **zero-build-process architecture** where each activity HTML file is completely self-contained:

```
Activity HTML File
├── React 18 (CDN) - MUST use createRoot API
├── Tailwind CSS (CDN)
├── Babel (CDN for JSX transpilation)
├── Embedded JSON Test Data (<script type="application/json" id="testData">)
└── Single React Component with:
    ├── Multi-step form wizard
    ├── Real-time validation (word counts + character validation)
    ├── Dev mode functionality (double-click title to toggle)
    └── Professional markdown export for Google Docs
```

### Workshop Organization
```
gtm-workshops/
├── index.html (main landing page)
├── problems_worth_solving/
│   ├── index.html
│   ├── problems-activity-1A.html
│   ├── problems-activity-2A.html
│   └── problems-activity-3A.html
├── finding_your_early_customers/
├── positioning_basics/
├── market_entry_readiness/
├── test_data/
│   ├── problems-activity-1A.json
│   ├── problems-activity-2A.json
│   └── [corresponding JSON for each activity]
└── docs/
    ├── activity_standards.md (complete design specs)
    ├── design-specifications.md (visual standards)
    └── fictional_product_content_posh.md (realistic test data source)
```

### Embedded Test Data System
Each activity embeds its test data directly in the HTML:
```html
<script type="application/json" id="testData">
{
  "fieldName": "test value",
  "currentStep": 3
}
</script>
```

**Purpose**: Enables rapid testing/demonstration without external dependencies or build systems.

## Creating New Activities

### File Naming Convention
- **Activities**: `[topic]-activity-[number]A.html`
- **Test Data**: `test_data/[topic]-activity-[number]A.json`
- **Example**: `pricing-activity-1A.html` ↔ `test_data/pricing-activity-1A.json`

### Step-by-Step Process

1. **Copy Template**
   ```bash
   cp market_entry_readiness/market-entry-activity-1A.html week-5-pricing-monetization/pricing-activity-1A.html
   ```

2. **Create Realistic Test Data**
   ```json
   // test_data/pricing-activity-1A.json
   {
     "coreValueMetric": "API calls monitored + incident prevention rate",
     "customerSegments": ["High-growth SaaS", "Large Enterprises"],
     "pricingModel": "hybrid",
     "currentStep": 3
   }
   ```

3. **Embed Test Data in HTML**
   ```html
   <script type="application/json" id="testData">
   {
     "coreValueMetric": "API calls monitored + incident prevention rate",
     "currentStep": 3
   }
   </script>
   ```

4. **Implement React 18 Rendering** ⚠️ CRITICAL
   ```javascript
   // ✅ CORRECT - React 18
   const container = document.getElementById('root');
   const root = ReactDOM.createRoot(container);
   root.render(<YourComponent />);
   
   // ❌ WRONG - Deprecated (will fail)
   ReactDOM.render(<YourComponent />, document.getElementById('root'));
   ```

5. **Add Dev Mode Functionality**
   ```javascript
   const [devMode, setDevMode] = useState(false);
   const [devFillLoading, setDevFillLoading] = useState(false);
   
   const toggleDevMode = () => {
       setDevMode(!devMode);
       console.log(devMode ? '🔒 Dev mode disabled' : '🔓 Dev mode enabled');
   };
   
   const devFillData = () => {
       setDevFillLoading(true);
       try {
           const testData = JSON.parse(document.getElementById('testData').textContent);
           // Populate form fields from testData
           setCurrentStep(testData.currentStep || 3);
           console.log('✅ Dev data loaded successfully');
       } catch (error) {
           console.error('❌ Failed to load dev data:', error);
       } finally {
           setDevFillLoading(false);
       }
   };
   
   // In JSX:
   <h1 
       className={`text-xl font-bold ${devMode ? 'text-orange-600' : 'text-gray-800'} cursor-pointer`}
       onDoubleClick={toggleDevMode}
       title="Double-click to toggle dev mode"
   >
       Activity Title {devMode && '🔧'}
   </h1>
   
   {devMode && (
       <button onClick={devFillData} disabled={devFillLoading}>
           {devFillLoading ? '⏳ Loading...' : '📝 Fill Test Data'}
       </button>
   )}
   ```

6. **Navigation Links**
   ```javascript
   // Header (both links required)
   <a href="index.html">← Back to Workshop</a>
   <a href="../index.html">All GTM Workshops ↑</a>  // Note: ../index.html not ../
   
   // Activity continuation
   <button onClick={() => window.location.href = 'next-activity-2A.html'}>
       Continue to Activity 2
   </button>
   ```

## Design Standards

### Laptop-Optimized Layout
Target: 13-15" laptops (1366x768 to 1920x1080) in workshop settings
```css
/* Container */
max-width: 900px;
padding: 16px;

/* Textareas - expand on focus */
.laptop-textarea {
    min-height: 80px;
    max-height: 120px;
    font-size: 14px;
    transition: max-height 0.3s ease;
}
.laptop-textarea:focus {
    max-height: 200px;
}
```

### Color Standards
- **Primary**: Orange (`#FF9000`, `orange-500`)
- **Success**: Green (`#10B981`, `green-500`)
- **Info**: Blue (`#3B82F6`, `blue-500`)
- **Error**: Red (`#EF4444`, `red-500`)

### Validation Pattern
```javascript
// Display word count to users
const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

// Use character count for internal validation (more reliable)
const isValid = text.trim().length >= 25; // ~5 words

// Visual feedback
<span className={wordCount >= 5 ? 'text-green-600' : 'text-gray-500'}>
    {wordCount} words {wordCount >= 5 && <CheckCircle size={16} />}
</span>
```

### Professional Export Pattern
```javascript
const handleCopyToClipboard = () => {
    const el = document.getElementById('markdownSummary');
    const statusDiv = document.getElementById('copyStatus');
    
    copyToClipboard(el.value).then((success) => {
        if (success) {
            // Show inline success status
            statusDiv.innerHTML = `
                <div class="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
                    <p class="font-medium">✅ Copied to Clipboard!</p>
                    <p class="text-sm mt-1">Paste in Google Docs: <strong>Edit → Paste special → Paste from markdown</strong></p>
                </div>
            `;
            
            // Show floating notification
            const notification = document.createElement('div');
            notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #22c55e; color: white; padding: 16px 24px; border-radius: 8px; z-index: 9999;';
            notification.textContent = '✅ Activity summary copied!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.transition = 'opacity 0.5s';
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 500);
            }, 2500);
        }
    });
};
```

## Important Implementation Rules

### ❌ Don't
- Use deprecated `ReactDOM.render()` (React 17 pattern)
- Create complex progress code systems or external state management
- Mix build tools with the static site approach
- Use placeholder test data (e.g., "Lorem ipsum", "Company A")
- Skip dev mode implementation
- Hard-code file paths without checking navigation structure

### ✅ Do
- Always use `ReactDOM.createRoot()` (React 18 API)
- Embed realistic test data directly in HTML from `test_data/` directory
- Follow laptop-optimized design standards (compact spacing, expandable textareas)
- Implement professional markdown export with dual feedback
- Test dev mode functionality thoroughly (double-click title → Fill Test Data)
- Use semantic console logging (`✅`, `❌`, `🔓`, `🔒` emojis)
- Reference `docs/fictional_product_content_posh.md` for realistic business scenarios

## Version Control & Deployment

### Branching Strategy
- **main**: Live GitHub Pages site with embedded test data system
- **original-mvp**: Archived first version with legacy progress code logic
- **bolt-migration**: Future React-based app migration branch

### GitHub Pages
Auto-deploys from main branch via GitHub Actions (`.github/workflows/static.yml`)

## Key Documentation Files

- **`README.md`**: Project overview, technical architecture, quick start
- **`claude.md`**: Implementation guidelines for Claude Code (similar to this file)
- **`GEMINI.md`**: Project summary for Gemini
- **`docs/activity_standards.md`**: Complete design specifications and component patterns
- **`docs/design-specifications.md`**: Visual design standards (original vs laptop-optimized)
- **`docs/fictional_product_content_posh.md`**: Source for realistic test data
- **`docs/data-schema.md`**: Data structure definitions

## Testing Without Test Framework

Since there's no automated test framework:

1. **Dev Mode**: Double-click title → "Fill Test Data" → verify all fields populate
2. **Form Validation**: Test required fields, word counts, character limits
3. **Export**: Complete activity → copy markdown → paste in Google Docs → verify formatting
4. **Responsive**: Check on laptop screens (1366x768, 1920x1080)
5. **Cross-browser**: Test in Chrome, Firefox, Safari
6. **Navigation**: Verify all links (back to workshop, all workshops, next activity)

## Project Status

✅ All 12 core activities implemented with embedded test data system  
✅ Complete A-version pattern established and documented  
✅ Dev mode functionality across all activities  
✅ Professional markdown export with Google Docs integration  

Ready for new activity creation following established patterns.
