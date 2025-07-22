# New Activity Creation Guide

## Quick Reference for Claude Code

This guide provides step-by-step instructions for creating new GTM workshop activities following the established A-version enhanced pattern.

## Prerequisites

- Understand the project uses **no build process** (static HTML with embedded React)
- Must use **React 18 createRoot API** (not deprecated ReactDOM.render)
- Follow **laptop-optimized design standards** for workshop settings

## Step-by-Step Workflow

### 1. Copy Existing Template
```bash
cp market_entry_readiness/market-entry-activity-1A.html week-5-pricing-monetization/pricing-activity-1A.html
```

### 2. Create Test Data File
Create realistic test data in `test_data/` directory:
```bash
# File: test_data/pricing-activity-1A.json
{
  "coreValueMetric": "API calls monitored + incident prevention rate",
  "customerSegments": ["High-growth SaaS", "Large Enterprises", "Midsize Tech"],  
  "pricingModel": "hybrid",
  "currentStep": 3
}
```

**Test Data Requirements:**
- Use realistic business scenarios (not placeholder text)
- Include all form field state variables
- Set `currentStep` to final step (usually 3) to show completed state
- Reference `docs/fictional_product_content_posh.md` for example content

### 3. Update HTML Structure

#### A. Change Title and Meta
```html
<title>Pricing Strategy Activity</title>
```

#### B. Embed Test Data in Script Tag
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

#### C. Update React Component Name
```javascript
const PricingActivity1 = () => {
    // Component code here
};

// At bottom of file:
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // React 18 API
root.render(<PricingActivity1 />);
```

### 4. Implement Core Functionality

#### A. Dev Mode Pattern
```javascript
// State variables
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
```

#### B. Activity Title with Dev Mode Toggle
```javascript
<h1 
    className={`text-xl font-bold text-gray-800 ${devMode ? 'text-orange-600' : ''} cursor-pointer select-none`}
    onDoubleClick={toggleDevMode}
    title="Double-click to toggle dev mode"
>
    Activity 1: Pricing Strategy {devMode && '🔧'}
</h1>
```

#### C. Dev Mode Controls (Conditional)
```javascript
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

### 5. Professional Export Implementation

#### A. Hidden Markdown Textarea
```javascript
<textarea
    id="markdownSummary"
    readOnly
    className="w-full h-64 text-sm p-3 font-mono border border-gray-200 rounded-lg bg-gray-50 resize-none mb-3"
    value={generateMarkdownSummary()}
/>
```

#### B. Markdown Generation Function
```javascript
const generateMarkdownSummary = () => {
    return `# Pricing Strategy: Value-Based Framework

### 📋 Executive Summary

**Pricing Readiness Score: ${calculateReadinessScore()}%**

### 🎯 Core Value Metrics
${coreValueMetric}

### 👥 Customer Segments
${customerSegments.map((segment, i) => `${i + 1}. ${segment}`).join('\n')}

### 📅 Assessment Details
**Report Generated:** ${new Date().toLocaleDateString()}
**Workshop:** Pricing & Monetization Strategy
**Next Steps:** Continue to Activity 2 - Competitive Analysis
`;
};
```

#### C. Copy-to-Clipboard with Dual Feedback
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
            // Status div feedback
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

### 6. Navigation Updates

#### A. Header Navigation (Both Required)
```javascript
<div className="flex justify-between items-center w-full mb-2">
    <a href="index.html" className="inline-flex items-center text-orange-600 hover:text-orange-700">
        <span className="mr-1">←</span> Back to Workshop
    </a>
    <a href="../index.html" className="inline-flex items-center text-gray-600 hover:text-orange-700">
        All GTM Workshops <span className="ml-1">↑</span>
    </a>
</div>
```

#### B. Activity Continuation Buttons
```javascript
<button
    onClick={() => window.location.href = 'pricing-activity-2A.html'}
    className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 font-semibold"
>
    Continue to Activity 2
</button>
```

### 7. Design Standards Compliance

#### A. Laptop-Optimized Styling
```css
/* Container */
className="max-w-[900px] mx-auto p-4"

/* Textareas */
className="w-full laptop-textarea p-2 border border-gray-200 rounded text-sm"
```

```css
/* CSS Definition */
.laptop-textarea {
    min-height: 80px;
    max-height: 120px;
    transition: max-height 0.3s ease;
    resize: none;
}
.laptop-textarea:focus {
    max-height: 200px;
}
```

#### B. Color Standards
- **Primary**: `orange-500` (#FF9000)
- **Success**: `green-500` (#10B981)
- **Info**: `blue-500` (#3B82F6)
- **Error**: `red-500` (#EF4444)

#### C. Validation Pattern
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

## Testing Checklist

### Dev Mode Testing
1. Double-click activity title → 🔧 icon appears
2. Click "Fill Test Data" → all form fields populate
3. Activity jumps to completion screen
4. Console shows "✅ Dev data loaded successfully"

### Export Testing
1. Complete activity or use dev mode
2. Click "Copy Activity Summary" 
3. See dual feedback (status div + floating notification)
4. Paste in Google Docs: Edit → Paste special → Paste from markdown
5. Verify proper formatting with headers and structure

### Responsive Testing
1. Test on laptop screens (1366x768, 1920x1080)
2. Verify compact layout works in workshop settings
3. Check mobile responsiveness
4. Test cross-browser compatibility (Chrome, Firefox, Safari)

## Common Pitfalls to Avoid

❌ **Don't:**
- Use deprecated `ReactDOM.render()` 
- Create complex progress code systems
- Use placeholder test data
- Skip dev mode implementation
- Forget to update navigation links

✅ **Do:**
- Use `ReactDOM.createRoot()` 
- Embed realistic test data directly in HTML
- Follow laptop-optimized design standards
- Implement professional markdown export
- Test dev mode functionality thoroughly

## File Organization

```
project/
├── week-5-pricing-monetization/
│   ├── index.html
│   ├── pricing-activity-1A.html  ← New activity
│   ├── pricing-activity-2A.html
│   └── pricing-activity-3A.html
└── test_data/
    ├── pricing-activity-1A.json  ← New test data
    ├── pricing-activity-2A.json
    └── pricing-activity-3A.json
```

## Realistic Test Data Sources

- **Fictional Product**: `docs/fictional_product_content_posh.md`
- **Pricing Examples**: `docs/docs_fictional_product/Posh_Pricing_Strategy_Example.md`
- **User Responses**: `docs/user-entry-test-responses.md`
- **Existing Test Data**: `test_data/` directory for patterns

## Documentation References

- **Complete Standards**: `docs/activity_standards.md`
- **Design Specs**: `docs/design-specifications.md`
- **Implementation Guide**: `CLAUDE.md`
- **Project Status**: `docs/TODO.md`

---

**Last Updated**: Based on embedded test data system implementation  
**Status**: Ready for new activity creation following A-version patterns