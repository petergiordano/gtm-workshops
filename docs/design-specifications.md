# GTM Workshop Design Specifications

## Document Overview

This document contains design specifications for all GTM Workshop activities, including:
1. **Original Design Specs** - Used for Day 1, Day 2-1, and Day 2-2 workshops
2. **Laptop-Optimized Design Specs** - For Market Entry Readiness and future workshops
3. **Migration Guidelines** - For updating existing workshops to laptop-optimized design

---

## Original Design Specifications (Days 1, 2-1, 2-2)

### Core Design Principles
- **Visual Style**: Modern, clean, card-based layout
- **Color Scheme**: Orange (#FF9000) primary, blue (#3B82F6) secondary
- **Typography**: System fonts with clear hierarchy
- **Spacing**: Generous padding for readability

### Component Specifications

#### Container Layout
```css
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.activity-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 32px;
    margin-bottom: 24px;
}
```

#### Form Elements
```css
/* Text Areas - ORIGINAL */
textarea {
    width: 100%;
    min-height: 150px;  /* Original height */
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
    resize: vertical;
}

/* Input Fields */
input[type="text"], input[type="number"] {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 16px;
}
```

#### Import/Export Sections
```css
/* Import Section - ORIGINAL */
.import-section {
    background: #f3f4f6;
    border: 2px dashed #d1d5db;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
}

/* Export Section - ORIGINAL */
.export-section {
    background: #ecfdf5;
    border: 2px solid #10b981;
    border-radius: 12px;
    padding: 24px;
    margin-top: 32px;
}
```

#### Buttons
```css
.btn-primary {
    background: #FF7F00;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
}

.btn-secondary {
    background: #6b7280;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
}
```

#### Progress Indicators
```css
.progress-dots {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
}

.progress-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e5e7eb;
}

.progress-dot.active {
    background: #FF7F00;
}
```

### Original Screen Requirements
- **Minimum viewport**: 768px width, no height constraint
- **Optimal viewing**: 1200px+ width, 900px+ height
- **Text areas**: Minimum 150px height, expandable
- **Scroll behavior**: Full page scroll expected

---

## Laptop-Optimized Design Specifications (Market Entry Readiness)

### Design Constraints for Laptops
- **Target screen**: 13-15" laptops (1366x768 to 1920x1080)
- **Effective viewport height**: 600-700px (after browser chrome)
- **Primary use case**: Live workshop setting with split attention
- **Key principle**: Everything visible without scrolling when possible

### Responsive Component Specifications

#### Compact Container Layout
```css
.container-laptop {
    max-width: 900px;  /* Slightly wider to use horizontal space */
    margin: 0 auto;
    padding: 16px;     /* Reduced from 20px */
}

.activity-card-laptop {
    background: white;
    border-radius: 8px;    /* Reduced from 12px */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 20px;         /* Reduced from 32px */
    margin-bottom: 16px;   /* Reduced from 24px */
}
```

#### Optimized Form Elements
```css
/* Compact Text Areas */
textarea.laptop-optimized {
    width: 100%;
    min-height: 80px;      /* Reduced from 150px */
    max-height: 120px;     /* Initial max height */
    padding: 10px 14px;    /* Reduced padding */
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    font-size: 14px;       /* Reduced from 16px */
    resize: vertical;
    transition: max-height 0.3s ease;
}

/* Expand on focus */
textarea.laptop-optimized:focus {
    max-height: 200px;     /* Expands when user is typing */
}

/* Compact inputs */
input.laptop-optimized {
    padding: 8px 12px;     /* Reduced padding */
    font-size: 14px;       /* Reduced font size */
}
```

#### Collapsible Import/Export
```css
/* Collapsible Import Section */
.import-section-laptop {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    margin-bottom: 16px;
    overflow: hidden;
}

.import-header {
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fafb;
}

.import-content {
    padding: 0 16px;
    max-height: 0;
    transition: max-height 0.3s ease, padding 0.3s ease;
}

.import-content.expanded {
    max-height: 300px;
    padding: 16px;
}

/* Compact Export Section */
.export-section-laptop {
    background: #ecfdf5;
    border: 1px solid #10b981;
    border-radius: 6px;
    padding: 16px;
    margin-top: 16px;
}

.progress-code-display {
    background: white;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-family: monospace;
    word-break: break-all;
    max-height: 60px;
    overflow-y: auto;
}
```

#### Horizontal Layout Options
```css
/* Side-by-side layout for related fields */
.form-row {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
}

.form-col {
    flex: 1;
}

/* Responsive breakpoint */
@media (max-width: 768px) {
    .form-row {
        flex-direction: column;
    }
}
```

#### Compact Progress Indicators
```css
.progress-bar-laptop {
    height: 4px;
    background: #e5e7eb;
    border-radius: 2px;
    margin-bottom: 16px;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: #FF7F00;
    border-radius: 2px;
    transition: width 0.3s ease;
}

.progress-label {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 12px;
    color: #6b7280;
}
```

#### Space-Saving Typography
```css
/* Compact headings */
h1.laptop-optimized {
    font-size: 24px;    /* Reduced from 32px */
    margin-bottom: 8px;
}

h2.laptop-optimized {
    font-size: 20px;    /* Reduced from 24px */
    margin-bottom: 8px;
}

h3.laptop-optimized {
    font-size: 16px;    /* Reduced from 20px */
    margin-bottom: 6px;
}

/* Compact paragraph spacing */
p.laptop-optimized {
    margin-bottom: 12px;  /* Reduced from 16px */
    line-height: 1.5;     /* Tighter line height */
}
```

#### Button Optimizations
```css
.btn-laptop {
    padding: 8px 20px;    /* Reduced from 12px 24px */
    font-size: 14px;      /* Reduced from 16px */
    border-radius: 6px;
}

/* Inline button group */
.button-group-laptop {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}
```

### Laptop-Specific Features

#### Sticky Navigation
```css
.activity-nav-laptop {
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 8px 16px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

#### Viewport-Aware Sections
```css
.screen-section {
    min-height: calc(100vh - 120px);  /* Account for nav and padding */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
}

/* Ensure content doesn't overflow */
.screen-content {
    max-height: calc(100vh - 160px);
    overflow-y: auto;
    padding-right: 8px;
}
```

#### Focus States for Better UX
```css
/* Clear focus indicators */
*:focus {
    outline: 2px solid #FF7F00;
    outline-offset: 2px;
}

/* Remove focus on mouse click */
*:focus:not(:focus-visible) {
    outline: none;
}
```

### Implementation Guidelines

#### JavaScript Enhancements
```javascript
// Auto-resize textareas
const autoResize = (textarea) => {
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
};

// Collapsible sections
const toggleSection = (section) => {
  section.classList.toggle('expanded');
  // Save state to localStorage for persistence
  localStorage.setItem(`section-${section.id}`, section.classList.contains('expanded'));
};

// Viewport height detection
const adjustForViewport = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
```

### Market Entry Readiness Specific Layouts

#### Activity 1: Market Entry Assessment
- **Layout**: Checklist format with compact checkboxes
- **Sections**: Collapsible categories
- **Progress**: Linear progress bar at top
- **Height**: Fits in single viewport

#### Activity 2: Strategy Selection  
- **Layout**: 2x2 grid of strategy cards
- **Cards**: Fixed height (150px) with hover expansion
- **Selection**: Radio button style
- **Details**: Modal or slide-out panel

#### Activity 3: Gap Analysis
- **Layout**: Side-by-side comparison table
- **Input**: Inline editing in table cells
- **Categories**: Tabbed interface for different areas
- **Summary**: Sticky summary bar at bottom

### Table Design Patterns

#### 5-Element Assessment Table (Market Entry Activity 1)
- **Structure**: 3-column table with predefined row headers
- **Columns**: 
  - Element name (fixed, left-aligned)
  - Local Strengths (editable textarea)
  - Global Limitations (editable textarea)
- **Elements**: 5 predefined elements
  - Unique Attributes
  - Market Knowledge
  - Resources
  - Network/Relationships
  - Infrastructure
- **Styling**: 
  - Alternating row colors for better readability
  - Clear column headers with distinct background
  - Responsive design for laptop screens
- **Validation**: Minimum 10 words per field, at least 4 of 5 elements must be completed

---

## Migration Guidelines

### Phase 1: Component Library
1. Create shared CSS file with laptop-optimized components
2. Add feature flags for gradual rollout
3. Test components in isolation

### Phase 2: Progressive Enhancement
```javascript
// Feature detection
const isLaptopOptimized = localStorage.getItem('laptop-optimized') === 'true';

if (isLaptopOptimized) {
  document.body.classList.add('laptop-mode');
}
```

### Phase 3: A/B Testing
- Test original vs laptop-optimized with different user groups
- Collect metrics on completion rates and time-on-task
- Gather qualitative feedback

### Phase 4: Full Migration
1. Update all activities with proven patterns
2. Maintain backwards compatibility
3. Provide user preference toggle

---

## Accessibility Considerations

### Laptop-Optimized Accessibility
- **Keyboard navigation**: Tab order optimized for laptop use
- **Screen reader**: Collapsed sections properly announced
- **Color contrast**: Maintained WCAG AA standards
- **Focus indicators**: Visible on all interactive elements
- **Touch targets**: Minimum 44x44px for hybrid devices

---

## Testing Checklist

### Device Testing Matrix
- [ ] 13" MacBook Air (1440x900)
- [ ] 14" Windows laptop (1920x1080)
- [ ] 15" MacBook Pro (1440x900)
- [ ] External monitor (1920x1080)
- [ ] iPad/tablet landscape mode

### Viewport Testing
- [ ] 1366x768 (common laptop)
- [ ] 1440x900 (MacBook)
- [ ] 1920x1080 (Full HD)
- [ ] With browser dev tools open
- [ ] With zoom at 110%, 125%

### Performance Metrics
- [ ] Page load < 2 seconds
- [ ] Smooth animations (60fps)
- [ ] No layout shift on interaction
- [ ] Memory efficient with multiple tabs

### Activity Summary Markdown Export Standards

#### Heading Hierarchy
- **Main heading**: Level 1 (`#`) - Activity title and workshop context
  - Example: `# Market Entry Readiness: Foundation & Goals`
  - Example: `# Market Entry Readiness: Market Reality Check`
- **Section headings**: Level 3 (`###`) - Major report sections
  - Example: `### 📋 Executive Summary`
  - Example: `### 🌏 Market Factor Analysis`
- **Subsections**: Level 4 (`####`) or below as needed

#### Content Structure
```markdown
# [Workshop Series]: [Activity Name]

### 📋 Executive Summary
[Key metrics and completion status]

### [Main Content Sections]
[Tables, analysis, findings]

### 📅 Assessment Details
[Timestamp, activity info, next steps]
```

#### Implementation Files
This standard applies to all activity files with markdown export functionality:
- `market_entry_readiness/market-entry-activity-1A.html`
- `market_entry_readiness/market-entry-activity-2A.html`
- All future activity implementations with embedded test data

---

## Version History

- **v1.0** (June 2025): Original design specs for Days 1, 2-1, 2-2
- **v2.0** (June 2025): Laptop-optimized specs for Market Entry Readiness
- **v2.1** (Planned): Migration of existing workshops to laptop-optimized design