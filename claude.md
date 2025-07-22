# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GTM-Workshops is a static web application for Go-To-Market workshops, built entirely with client-side technologies. No build process, backend, or dependencies required.

## Commands

Since this is a static site with no build process:
- **Run locally**: Open any HTML file directly in a browser or use a local server:
  ```bash
  # Python 3
  python -m http.server 8000
  
  # Python 2
  python -m SimpleHTTPServer 8000
  
  # Node.js (if http-server is installed globally)
  http-server
  ```
- **Deploy**: Push to main branch (GitHub Pages auto-deploys)
- **Test**: Open test HTML files in browser (test-code-validation.html, test-generate-code.html)

## High-Level Architecture

### Embedded Test Data System (Current)
The project uses an embedded test data system for development and demonstration:
- **Format**: JSON embedded directly in `<script type="application/json" id="testData">` tags
- **Purpose**: Enables rapid testing and demonstration without external dependencies
- **Dev Mode**: Double-click activity titles to access one-click data loading

### Component Architecture
Each activity HTML file is self-contained with:
```
Activity HTML
├── React 18 (CDN) - MUST use createRoot API
├── Tailwind CSS (CDN)
├── Embedded Test Data (JSON in script tag)
└── Single React Component with:
    ├── Multi-step form wizard
    ├── Real-time validation
    ├── Dev mode functionality
    └── Professional markdown export
```

### Key Patterns
1. **No Build Process**: Direct browser execution with Babel transpilation
2. **Embedded Test Data**: Complete realistic test data embedded in each HTML file
3. **Dev Mode**: Double-click activity titles to access test data (shows 🔧 icon when active)
4. **Professional Export**: Hidden markdown textarea with Google Docs integration
5. **Validation-Driven**: Word counts and required fields enforce quality

## Creating New Activities - Step by Step

### 1. Copy Template
Start with an existing A-version activity as your template:
```bash
cp market_entry_readiness/market-entry-activity-1A.html week-5-pricing-monetization/pricing-activity-1A.html
```

### 2. Create Test Data
Create realistic test data in the `test_data/` directory:
```json
// test_data/pricing-activity-1A.json
{
  "coreValueMetric": "API calls monitored + incident prevention rate",
  "customerSegments": ["High-growth SaaS", "Large Enterprises", "Midsize Tech"],
  "pricingModel": "hybrid",
  "currentStep": 3  // Show completed state
}
```

### 3. Required Technical Updates

#### React 18 Rendering (CRITICAL)
Always use the React 18 createRoot API:
```javascript
// ✅ CORRECT - React 18 pattern
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<YourComponent />);

// ❌ WRONG - Deprecated pattern will fail
ReactDOM.render(<YourComponent />, document.getElementById('root'));
```

#### Embed Test Data in HTML
```html
<!-- Test Data from test_data/pricing-activity-1A.json -->
<script type="application/json" id="testData">
{
  "coreValueMetric": "API calls monitored + incident prevention rate",
  "customerSegments": ["High-growth SaaS", "Large Enterprises"],
  "currentStep": 3
}
</script>
```

#### Dev Mode Implementation
```javascript
// Dev mode state
const [devMode, setDevMode] = useState(false);
const [devFillLoading, setDevFillLoading] = useState(false);

// Toggle function
const toggleDevMode = () => {
    setDevMode(!devMode);
    console.log(devMode ? '🔒 Dev mode disabled' : '🔓 Dev mode enabled');
};

// Data loading function
const devFillData = () => {
    setDevFillLoading(true);
    try {
        const testData = JSON.parse(document.getElementById('testData').textContent);
        setCoreValueMetric(testData.coreValueMetric);
        setCustomerSegments(testData.customerSegments);
        setCurrentStep(testData.currentStep || 3);
        console.log('✅ Dev data loaded successfully');
    } catch (error) {
        console.error('❌ Failed to load dev data:', error);
    } finally {
        setDevFillLoading(false);
    }
};

// Title with dev mode toggle
<h1 
    className={`text-xl font-bold text-gray-800 ${devMode ? 'text-orange-600' : ''} cursor-pointer select-none`}
    onDoubleClick={toggleDevMode}
    title="Double-click to toggle dev mode"
>
    Activity 1: Pricing Strategy {devMode && '🔧'}
</h1>

// Dev mode controls (conditional)
{devMode && (
    <div className="mt-3 pt-3 border-t border-orange-200">
        <div className="flex items-center justify-between">
            <span className="text-xs text-orange-600 font-medium">🔧 Dev Mode Active</span>
            <button
                onClick={devFillData}
                disabled={devFillLoading}
                className="bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600"
            >
                {devFillLoading ? '⏳ Loading...' : '📝 Fill Test Data'}
            </button>
        </div>
    </div>
)}
```

### 4. Professional Export Implementation

#### Hidden Markdown Textarea
```html
<textarea
    id="markdownSummary"
    readOnly
    className="w-full h-64 text-sm p-3 font-mono border border-gray-200 rounded-lg bg-gray-50 resize-none mb-3"
    value={generateMarkdownSummary()}
/>
```

#### Copy-to-Clipboard with Dual Feedback
```javascript
const handleCopyToClipboard = () => {
    const copyToClipboard = async (text) => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                return successful;
            }
        } catch (err) {
            return false;
        }
    };

    const el = document.getElementById('markdownSummary');
    const statusDiv = document.getElementById('copyStatus');
    
    copyToClipboard(el.value).then((success) => {
        if (success) {
            // Show success status
            statusDiv.innerHTML = `
                <div class="mt-2 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
                    <p class="font-medium">✅ Copied to Clipboard!</p>
                    <p class="text-sm mt-1">Now paste in Google Docs: <strong>Edit → Paste special → Paste from markdown</strong></p>
                </div>
            `;
            
            // Floating notification
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

### 5. Design Standards Compliance

#### Laptop-Optimized Layout
```css
/* Container */
.max-w-[900px] mx-auto p-4

/* Textareas */
.laptop-textarea {
    min-height: 80px;
    max-height: 120px;
    transition: max-height 0.3s ease;
}
.laptop-textarea:focus {
    max-height: 200px;
}

/* Form elements */
font-size: 14px (reduced from 16px)
padding: reduced for compactness
```

#### Color Standards
- **Primary**: Orange (`orange-500`, `#FF9000`)
- **Success**: Green (`green-500`, `#10B981`)  
- **Info**: Blue (`blue-500`, `#3B82F6`)
- **Error**: Red (`red-500`, `#EF4444`)

#### Validation Pattern
```javascript
// Display word count to users
const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

// Use character count for internal validation
const isValid = text.trim().length >= 25; // ~5 words

// Visual feedback
<span className={`text-sm flex items-center gap-1 ${wordCount >= 5 ? 'text-green-600' : 'text-gray-500'}`}>
    {wordCount} words
    {wordCount >= 5 && <CheckCircle size={16} />}
</span>
```

## File Naming & Organization

### Activity Files
- **Enhanced**: `[topic]-activity-[number]A.html`
- **Test Data**: `test_data/[topic]-activity-[number]A.json`
- **Examples**: 
  - `pricing-activity-1A.html` ↔ `test_data/pricing-activity-1A.json`
  - `channels-activity-2A.html` ↔ `test_data/channels-activity-2A.json`

### Navigation Links
```javascript
// Header navigation (both required)
<div className="flex justify-between items-center w-full mb-2">
    <a href="index.html">← Back to Workshop</a>
    <a href="../index.html">All GTM Workshops ↑</a>  // Note: ../index.html not ../
</div>

// Activity continuation
<button onClick={() => window.location.href = '[next-activity]-1A.html'}>
    Continue to Activity 2
</button>
```

## Testing Approach

Since there's no test framework:
1. **Dev Mode Testing**: Double-click title, click "Fill Test Data", verify all fields populate
2. **Export Testing**: Complete activity, copy markdown, paste in Google Docs
3. **Responsive Testing**: Check layout on laptop screens (1366x768, 1920x1080)
4. **Cross-browser**: Test in Chrome, Firefox, Safari
5. **Mobile**: Verify responsive behavior on smaller screens

## Important Guidelines

1. **Maintain Simplicity**: No build tools. Keep everything browser-compatible.

2. **Test Data Quality**: Use realistic business scenarios, not placeholder text.

3. **Professional Output**: Markdown reports should be presentation-ready.

4. **Consistent Patterns**: Follow the established A-version pattern exactly.

5. **Styling**: Tailwind CSS only (CDN-loaded).

6. **State Management**: React's useState only. No external libraries.

7. **Console Feedback**: Always provide clear dev mode logging.

## Common Implementation Pitfalls

❌ **Don't:**
- Use deprecated `ReactDOM.render()`
- Create overly complex progress code systems
- Mix build tools with the static site approach
- Use placeholder test data
- Skip dev mode implementation

✅ **Do:**
- Use `ReactDOM.createRoot()` 
- Embed realistic test data directly in HTML
- Follow the laptop-optimized design standards
- Implement professional markdown export
- Test dev mode functionality thoroughly

## Current Project Status

✅ **All 12 core activities implemented** with embedded test data system  
✅ **Complete A-version pattern** established and documented  
✅ **Dev mode functionality** across all activities  
✅ **Professional markdown export** with Google Docs integration  

When creating new activities, follow the established patterns in existing A-version files for consistency and quality.