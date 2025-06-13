### Workshop Content Organization

#### Activities vs Resources
- **Activities**: Interactive exercises that participants complete during workshops
- **Resources**: Supporting materials like slides, worksheets, or reference documents

#### Visual Hierarchy
- **Activities**:
  - Display as prominent orange cards
  - Include sequential numbering (1, 2, 3)
  - Show activity title and brief description
- **Resources**:
  - Display with simple document icons
  - No background cards or numbering
  - Visually distinct from activities
  - Positioned after activities

#### Example Structure
```html
<!-- Activities (numbered, card format) -->
<div class="activity-card">
  <div class="activity-title">1 Activity Name</div>
  <div class="activity-description">Brief description</div>
</div>

<!-- Resources (icon format, no cards) -->
<div class="resource-item">
  <span class="document-icon">📄</span>
  <span class="resource-title">Workshop Slides</span>
</div>
```

### Workshop Slides Section

Each workshop index page should include a consistent Workshop Slides section following these standards:

#### Design Specifications
- **Position**: Centered below activity cards with appropriate spacing (mt-8)
- **Icon**: Google Slides logo (24px × 24px)
- **Text**: "Workshop Slides" in semi-bold weight, dark gray (#1f2937)
- **Font Size**: 20px for text
- **Layout**: Icon and text centered horizontally with 8px spacing
- **Visual distinction**: Should be visually distinct from activity cards (no orange background)

#### HTML Structure
```html
<div class="mt-8 flex items-center justify-center">
    <div class="flex items-center">
        <img src="../icons/Google_Slides_Logo_512px.png" alt="Google Slides Logo" 
             style="width: 24px; height: 24px; margin-right: 8px; object-fit: contain;">
        <span class="text-gray-800 font-semibold" style="font-size: 20px;">Workshop Slides</span>
    </div>
</div>
```

#### CSS Requirements
```css
.mt-8 { margin-top: 2rem; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.text-gray-800 { color: #1f2937; }
.font-semibold { font-weight: 600; }
```

#### Implementation Notes
- Use the official Google Slides logo stored at `../icons/Google_Slides_Logo_512px.png`
- Ensure `object-fit: contain` is applied to maintain aspect ratio
- The section should appear after all activity cards but before the closing container
- No hyperlink wrapping unless slides are actually available
- Maintain consistent spacing and styling across all workshop index pages# Interactive Workshop Activities Standards

> **INSTRUCTIONS**: Replace this section with your specific project details before using this standards document.

## Project Overview
**Project**: [Project Name]  
**Target Audience**: [Description of target audience]  
**Duration**: [Time constraints, if applicable]  
**Repository**: [`repository-name` (deployment platform)]  
**Live Site**: [Production URL]

## Example Project Information
```
## Project Overview
**Project**: GSAP 2025 GTM Curriculum Development  
**Target Audience**: Early-stage deep tech startups entering US market (ESL participants)  
**Duration**: Each workshop 60 minutes maximum  
**Repository**: `gtm-workshops` (GitHub Pages deployment)  
**Live Site**: https://petergiordano.github.io/gtm-workshops/
```

## Table of Contents
1. [Design Standards](#design-standards)
2. [Component Patterns](#component-patterns)
3. [Technical Implementation](#technical-implementation)
4. [Navigation Standards](#navigation-standards)
5. [Accessibility Guidelines](#accessibility-guidelines)
6. [Content Guidelines](#content-guidelines)
7. [Development Workflow](#development-workflow)
8. [Quality Assurance](#quality-assurance)

## Design Standards

### Color Palette
- **Primary Brand Color**: Orange (#FF9000)
- **Secondary Colors**:
  - White (Background): #FFFFFF
  - Gray 1 (Background): #666666
  - Gray 2 (Background): #8A8A8A
  - Yellow (Accent): #F1C232
  - Light Yellow (Accent): #FFE599
  - Blue (Accent): #55BFFA
  - Muted Blue (Accent): #6E9FBA
  - Muted Brown (Accent): #A58E6F

### Typography
- **Primary Font**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Header Sizes**:
  - Main Title (h1): 2.2em, font-weight: 300
  - Section Headers (h3): 1.8em, font-weight: 300
  - Activity Titles (h4): 1.2em, font-weight: 600
- **Body Text**: 0.95em, line-height: 1.4
- **Readability**: Ensure text is legible when captured in landscape screenshots

### Layout
- **Container Width**: max-width: 1200px (activities), max-width: 800px (landing pages)
- **Aspect Ratio**: Optimize for 16:9 landscape orientation (1920×1080) to match Google Slides
- **Screen Capture Optimization**: Design activities to work well when captured as screenshots for slides
- **Viewport Consideration**: Ensure critical content is visible without scrolling in landscape mode
- **Padding**: 40px (container), 20px (elements)
- **Card Style**: 
  - Background: linear-gradient(135deg, #FF7F00 0%, #FF9500 100%)
  - Border-radius: 10px or 20px
  - Hover: transform: translateY(-3px or -5px)

### Visual Feedback
- **Progress Indicators**: Orange fill for current step, gray for incomplete
- **Completion**: Green checkmark icons, border-green-500
- **Error States**: Red border/background briefly, then revert

## Component Patterns

### Header Structure
- **Sticky Position**: top: 0, z-index: 50
- **Background**: white with shadow
- **Components**:
  1. Navigation Links (see Navigation Standards)
  2. Activity Title
  3. Progress Indicator
  4. Status Grid (optional)

### Progress Indicator
- **Style**: Horizontal bar with numbered circles
- **States**: 
  - Current: bg-orange-500 text-white
  - Completed: bg-green-500 text-white
  - Upcoming: bg-gray-200 text-gray-400
- **Label**: Display step name below number
- **Placement**: Position within the top portion of the screen to remain visible in landscape screenshots

### Activity Cards
- **Layout**: grid or flex based on content needs
- **Border**: 2px solid (color varies by state)
- **States**:
  - Default: border-gray-200
  - Selected/Active: border-orange-300
  - Completed: border-green-500 bg-green-50
  - Error: border-red-500 bg-red-50 (temporary)
- **Hover Effect**: box-shadow and slight y-axis translation
- **Size Consideration**: Design cards to fit within 16:9 landscape view without excessive scrolling
- **Numbering**: Include clear numbering (e.g., "1", "2", "3") for sequential activities

### Activity Numbering Standards
- **Purpose**: Provide clear visual hierarchy and sequence for workshop activities
- **Visual Design**:
  - **Background**: White circle (#FFFFFF)
  - **Text Color**: Orange (#FF7F00 or #FF9000)
  - **Shape**: Perfect circle with centered number
  - **Size**: 24px width and height (1.5rem)
  - **Font**: Bold weight, small size (0.875rem)
  - **Position**: Left of activity title with 8px margin
- **Implementation Example**:
  ```html
  <div class="activity-title">
    <span class="inline-flex items-center justify-center w-6 h-6 bg-white text-orange-600 rounded-full font-bold mr-2 text-sm">1</span>
    Activity Name Here
  </div>
  ```
- **CSS Classes (Tailwind)**:
  - `inline-flex`: Display inline with flexbox
  - `items-center justify-center`: Center the number
  - `w-6 h-6`: 24px × 24px dimensions
  - `bg-white`: White background
  - `text-orange-600`: Orange text color
  - `rounded-full`: Perfect circle shape
  - `font-bold`: Bold number
  - `mr-2`: 8px right margin
  - `text-sm`: Small font size
- **Usage Guidelines**:
  - Apply to all numbered activities (1, 2, 3, etc.)
  - Do NOT apply to resource items (Workshop Slides, etc.)
  - Maintain consistent styling across all workshop pages
  - Numbers should be sequential within each workshop
- **Visual Example**: White circle with orange number "1", "2", or "3" positioned to the left of the activity title, creating a clear visual hierarchy that distinguishes activities from resources

### Resource Icons
- **Purpose**: Visual distinction between interactive activities and supplementary resources
- **Implementation**:
  - Use simple document/file icons rather than large branded icons
  - Icon Size: 24px × 24px maximum (object-fit: contain)
  - Text Alignment: vertically aligned with icon
  - Text Style: Match the size and weight of activity titles without background cards
  - Spacing: 8px margin between icon and text
- **Example**:
  ```html
  <div class="flex items-center">
    <span class="inline-block" style="width: 24px; height: 24px; margin-right: 8px;">
      <!-- Document icon (e.g., Google Material icons, Font Awesome, or Unicode) -->
      📄
    </span>
    <span style="font-size: 20px; font-weight: 600;">Resource Name</span>
  </div>
  ```

### Input Elements
- **Text Input/Textarea**: 
  - Border: border-gray-300
  - Focus: border-orange-500 ring-2 ring-orange-200
  - Min Height (textarea): h-32
- **Buttons**:
  - Primary: bg-orange-500 hover:bg-orange-600
  - Secondary: bg-gray-500 hover:bg-gray-600
  - Font: font-semibold, text-white

### Unified Text Input Standards

#### Field Labels
- **Format**: "Question text (describe in X+ words)"
- **Style**: 
  - Main text: `text-gray-700 font-medium`
  - Requirement: `text-xs text-gray-500` in parentheses
- **Example**: "What is the market size? (describe in 5+ words)"

#### Placeholder Text
- **Format**: Keep existing pattern with "e.g., " prefix
- **Style**: `placeholder-gray-400` (light gray #9CA3AF)

#### Real-Time Feedback Component
```javascript
const WordCountFeedback = ({ text, minWords = 5 }) => {
  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const isValid = wordCount >= minWords;
  
  return (
    <div className="flex justify-between items-center mt-1">
      <span className="text-xs text-gray-500">
        {/* Hint text or empty */}
      </span>
      <span className={`text-sm flex items-center gap-1 ${isValid ? 'text-green-600' : 'text-gray-500'}`}>
        {wordCount} words
        {isValid && <CheckCircle size={16} />}
      </span>
    </div>
  );
};
```

#### Field Validation
- **Internal Logic**: Use character count for validation (easier programming)
- **Display Logic**: Always show word count to user
- **Conversion Guidelines**: 
  - 3+ words = 15+ characters
  - 5+ words = 25+ characters  
  - 10+ words = 50+ characters
- **Visual States**:
  - Invalid: Gray text (#6B7280)
  - Valid: Green text (#10B981) + checkmark icon

#### Progress Tracking
- **Format**: "Progress: X/Y completed. Need at least Z to proceed."
- **Style**: Blue background bar (`bg-blue-50 border-blue-200`)
- **Update**: Dynamically as fields are completed

#### Textarea Behavior
- **Default height**: 80px (3-4 lines) - `laptop-textarea` class
- **Focus height**: 120px (5-6 lines)
- **Max height**: 200px with scroll
- **CSS Implementation**:
  ```css
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

#### Implementation Pattern
```html
<div className="mb-4">
  <label className="block text-gray-700 font-medium mb-2">
    What is your target market? <span className="text-xs text-gray-500">(describe in 5+ words)</span>
  </label>
  <textarea
    value={fieldValue}
    onChange={(e) => setFieldValue(e.target.value)}
    placeholder="e.g., B2B SaaS companies with 100-500 employees using cloud infrastructure"
    className="w-full laptop-textarea p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 placeholder-gray-400"
  />
  <WordCountFeedback text={fieldValue} minWords={5} />
</div>
```

### Status Grid
- **Layout**: grid grid-cols-[number of steps]
- **Item Style**: p-2 rounded-lg text-center text-xs font-medium
- **States**:
  - Completed: bg-green-100 border-2 border-green-500 text-green-800
  - In Progress: bg-orange-100 border-2 border-orange-300 text-orange-800
  - Not Started: bg-gray-100 border-2 border-gray-200 text-gray-600

## Technical Implementation

## Technical Implementation

### Technology Stack
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Scripts**: Babel for JSX transpilation
- **Icons**: Custom SVG components (Clock, Target, CheckCircle, etc.)

### Data Management
- **State Management**: React useState hooks
- **No External Storage**: All data remains in-session
- **Completion Threshold**: Word-based requirements (internally validated using character counts)

### Timer Implementation Standards
- **Timer Behavior**: All activity timers are OPTIONAL and do not block progression
- **User Experience**: Users can complete activities without starting timers
- **Primary Validation**: Based on text field completion (word count requirements)
- **Timer Controls**:
  - Start Timer button: Optional helper for guided pacing
  - Continue button: Always available when required fields are complete
  - Layout: Timer and continue buttons side-by-side when timer not started
- **Button Styling**:
  - Timer button: `bg-gray-500` (secondary/optional styling)
  - Continue button: `bg-orange-500` (primary action)
  - Timer label: "Start Timer (Optional)" to indicate non-blocking nature
- **Validation Logic**: 
  - `disabled={!isStepComplete(stepNumber)}` - based purely on field completion
  - Remove timer-based validation conditions
  - Timer serves as optional pacing tool only

### Responsive Design
- **Landscape Priority**: Optimize for 16:9 landscape orientation first
- **Mobile-responsive**: Secondary consideration - stack columns on small screens
- **Minimum Target Size**: 44px for all clickable elements
- **Overflow Handling**: Use overflow-auto with padding
- **Breakpoints**: 
  - Desktop (landscape): 1920×1080 (primary focus)
  - Tablet (landscape): 1024×768
  - Mobile: 375×667 (supported but not optimized)

## Navigation Standards

### Workshop Navigation
- **Structure**: Each activity page must have TWO navigation links:
  1. **Back to Workshop**: Links to the specific workshop page
  2. **All GTM Workshops**: Links to the main GTM workshops landing page
- **Placement**: Display in a flex container with space-between
- **Implementation Example**:

```html
<div className="flex justify-between items-center w-full mb-3">
  <a 
    href="index.html" 
    className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors text-sm font-medium"
  >
    <span className="mr-1">←</span> Back to Workshop
  </a>
  <a 
    href="../" 
    className="inline-flex items-center text-gray-600 hover:text-orange-700 transition-colors text-sm font-medium"
  >
    All GTM Workshops <span className="ml-1">↑</span>
  </a>
</div>
```

### Activity Steps Navigation
- **Forward/Back Controls**: Only show when appropriate (no back on first step)
- **Placement**: Centered at bottom of main content area
- **Style**:
  - Back: bg-gray-500 text-white px-6 py-2
  - Forward: bg-orange-500 text-white px-8 py-3 font-semibold

### Activity Completion Navigation

#### Standardized 4-Button Layout
All activity completion pages MUST use this exact 4-button layout:

```html
<div className="flex justify-between items-center mt-6 gap-2">
  <button
    onClick={resetActivity}
    className="bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex-shrink-0"
  >
    Reset Activity
  </button>
  
  <button
    onClick={() => {
      // Generate export data logic here
      setExportData(newExportData);
      setActivityComplete(true);
    }}
    className="bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors font-semibold flex-shrink-0"
  >
    Generate Code
  </button>
  
  <button
    onClick={() => window.location.href = 'index.html'}
    className="bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex-shrink-0"
  >
    Return to Workshop
  </button>
  
  <button
    onClick={() => {
      // Generate export data and navigate
      setExportData(newExportData);
      setActivityComplete(true);
      window.location.href = 'next-activity.html';
    }}
    className="bg-orange-500 text-white px-3 py-2 rounded text-sm hover:bg-orange-600 transition-colors font-semibold flex-shrink-0"
  >
    Continue to Next Activity
  </button>
</div>
```

#### Button Layout Specifications
- **Container**: `flex justify-between items-center` with `mt-6 gap-2`
- **Sizing**: All buttons use `px-3 py-2` and `text-sm` for consistent sizing
- **Spacing**: `gap-2` between buttons, `flex-shrink-0` to prevent text wrapping
- **Colors**:
  - Reset: Gray secondary (`bg-gray-500`)
  - Generate Code: Green primary (`bg-green-500 font-semibold`)
  - Return: Gray secondary (`bg-gray-500`)
  - Continue: Orange primary (`bg-orange-500 font-semibold`)

#### Button Text Examples
- **Generate Code**: Always "Generate Code" (shortened for space)
- **Continue Button**:
  - "Continue to Next Activity" (when space allows)
  - "Continue to Activity 2" (specific naming)
  - "Continue to Market Landing Zone Analysis" (descriptive when short enough)

#### Critical Requirements
1. **Generate Code Button**: REQUIRED - Users need this to save progress between activities
2. **ExportSection Integration**: Generate Code button triggers `setExportData()` and `setActivityComplete(true)` to show progress code
3. **Consistent Spacing**: Use exact CSS classes specified to ensure buttons fit within viewport width
4. **Button Order**: Reset | Generate Code | Return | Continue (left to right)

### Workshop-to-Workshop Navigation
- **Last Activity Rule**: The final activity (Activity 3) of each workshop MUST include navigation to the next workshop
- **Cross-Workshop Navigation Pattern**:
  ```html
  <button
    onClick={() => window.location.href = '../next_workshop/index.html'}
    className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
  >
    Continue to [Next Workshop Name]
  </button>
  ```
- **Workshop Sequence Navigation**:
  - problems-activity-3.html → "Continue to Finding Your Early Customers"
  - ecp-activity-3.html → "Continue to Positioning Basics"  
  - positioning-activity-3.html → "Continue to Market Entry Readiness"
  - market-entry-activity-3.html → "Complete Workshop Series" (final workshop)
- **Implementation Requirements**:
  - Button must be the primary action (orange styling)
  - Other buttons (Reset, Save Progress) should be secondary (gray styling)
  - Use relative paths: `../workshop_name/index.html`
  - Clear descriptive text indicating the next workshop name

## Accessibility Guidelines

### Color Contrast
- **Minimum Ratio**: 4.5:1 for normal text, 3:1 for large text
- **Test Tool**: WebAIM Contrast Checker

### Keyboard Navigation
- **Focus Indicators**: Visible orange outline on focus
- **Tab Order**: Logical flow through the page

### Text Readability
- **Line Length**: Max 80 characters
- **Font Size**: Minimum 14px (0.875rem)
- **Language**: Simple, ESL-friendly terminology

## Content Guidelines

### Content Guidelines

#### Language Adaptation
- **Sentence Structure**: Simple, direct sentences
- **Terminology**: Avoid idioms and complex technical jargon
- **Definitions**: Provide explanations for specialized terms

#### Learning Approach
- **Prompts**: Use hypothesis-driven format when appropriate (e.g., "We believe our customers are...")
- **Examples**: Provide concrete examples for abstract concepts
- **Input Requirements**: Use word-based requirements for user display, character-based validation internally

#### Visual Learning Focus
- **Icons**: Use consistent icons to reinforce concepts
- **Color Coding**: Use colors consistently for conceptual categories
- **Whitespace**: Generous spacing between elements

## Development Workflow

### Implementation Process
1. **Design Review**: Review designs against these standards before implementation
2. **Code Implementation**: Implement using appropriate tools for your project
3. **Testing**: Verify all standards compliance
4. **Deployment**: Deploy using your project's deployment method

### Commit Strategy
- **Atomic Changes**: One feature/fix per commit
- **Descriptive Messages**: Clear explanation of changes
- **Reference Standards**: Link to specific standards in commit message

### Asset Management
- **Icons**: 
  - Store in dedicated `/icons` directory
  - Use appropriate sizing (ideally 24px × 24px)
  - Prefer SVG format when possible for best scaling
  - When using PNG, include size in filename (e.g., `icon_name_24px.png`)
- **Images**:
  - Optimize all images for web delivery
  - Include width/height attributes to prevent layout shifts
  - Use responsive image techniques where appropriate

## Quality Assurance

### Testing Checklist
1. **Navigation**: Verify all links work correctly
2. **Progress Tracking**: Confirm proper state updates
3. **Completion Detection**: Test word-based validation displays with character-based internal logic
4. **Landscape Orientation Test**: Verify activity displays properly in 16:9 landscape mode (1920×1080)
5. **Screenshot Compatibility**: Test how activity appears when captured as a screenshot
6. **Visual Consistency**: Compare to existing activities
7. **Google Slides Integration**: Test screenshot insertion into slides

### Common Issues
- **Sticky Headers**: Ensure they include ALL progress elements
- **Completion Detection**: Verify 20-character threshold works
- **Progress Indicators**: Check both header and individual sections
- **Layout Optimization**: Confirm proper spacing in all sections
- **Landscape Display**: Check that critical content is visible without scrolling in 16:9 orientation

## Progress Code UI Standards

### Overview
All activities include Progress Code functionality to enable data persistence across workshops. This section defines the visual and interaction standards for import/export components.

### Import Section Design

#### Placement & Structure
- **Location**: Immediately after the main header, before activity content
- **Default State**: Expanded on page load
- **Container**: White background with subtle border

#### Visual Implementation
```html
<!-- Import Section Container -->
<div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <!-- Icon -->
      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
        <FileText className="text-orange-600" size={20} />
      </div>
    </div>
    
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Continue Your Progress
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        Have a Workshop Progress Code from previous activities? Paste it below to continue where you left off.
      </p>
      
      <!-- Input Area -->
      <div className="space-y-3">
        <textarea
          placeholder="Paste your progress code here..."
          className="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm h-20 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
        
        <!-- Buttons -->
        <div className="flex items-center space-x-3">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
            Load Progress
          </button>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            Start Fresh Instead
          </button>
        </div>
      </div>
      
      <!-- Success State -->
      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg hidden">
        <p className="text-green-700 text-sm flex items-center">
          <CheckCircle className="mr-2" size={16} />
          Progress loaded successfully! Your previous responses have been filled in below.
        </p>
      </div>
      
      <!-- Error State -->
      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg hidden">
        <p className="text-red-700 text-sm">
          Invalid progress code. Please check that you copied the entire code and try again.
        </p>
      </div>
    </div>
  </div>
</div>
```

#### Interaction States
1. **Default**: Empty textarea, both buttons visible
2. **Loading**: Disable buttons, show spinner
3. **Success**: Show green success message, hide import section after 3 seconds
4. **Error**: Show red error message, keep textarea editable

### Export Section Design

#### Placement & Structure
- **Location**: Replaces or appears after final "Complete" button
- **Trigger**: Only shows after activity completion
- **Container**: Green success styling with emphasis

#### Visual Implementation
```html
<!-- Export Section Container -->
<div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mt-6">
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <!-- Success Icon -->
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
        <CheckCircle className="text-white" size={24} />
      </div>
    </div>
    
    <div className="flex-1">
      <h3 className="text-xl font-bold text-green-800 mb-2">
        Activity Complete! Save Your Progress
      </h3>
      <p className="text-green-700 mb-4">
        Copy your Workshop Progress Code below. This code contains all your workshop progress and can be used to continue in future activities.
      </p>
      
      <!-- Code Display -->
      <div className="bg-white border-2 border-green-400 rounded-lg p-4 mb-4">
        <div className="flex items-start space-x-3">
          <textarea
            readOnly
            value="GSAP2025-eyJ3b3Jrc2hvcER..."
            className="flex-1 font-mono text-sm bg-transparent border-none resize-none h-20 focus:outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center whitespace-nowrap">
            <Copy className="mr-2" size={16} />
            Copy Code
          </button>
        </div>
      </div>
      
      <!-- Copy Success Feedback -->
      <div className="h-6">
        <p className="text-green-600 text-sm font-medium opacity-0 transition-opacity">
          ✓ Copied to clipboard!
        </p>
      </div>
      
      <!-- Save Instructions -->
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-yellow-800 font-semibold mb-2 text-sm">
          ⚠️ Important: Save Your Code!
        </h4>
        <p className="text-yellow-700 text-sm mb-2">
          This code is not saved automatically. Please save it by:
        </p>
        <ul className="text-yellow-700 text-sm space-y-1 ml-4">
          <li>• Emailing it to yourself</li>
          <li>• Saving in a notes app</li>
          <li>• Taking a screenshot</li>
          <li>• Writing it down</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

#### Copy Button Behavior
```javascript
// Copy button interaction
const handleCopy = () => {
  navigator.clipboard.writeText(progressCode);
  
  // Show success feedback
  setShowCopySuccess(true);
  
  // Hide after 2 seconds
  setTimeout(() => setShowCopySuccess(false), 2000);
};
```

### Progress Indicators

#### Imported Data Indicator
When data is imported, show subtle indicators on pre-filled fields:

```html
<!-- Pre-filled field with import indicator -->
<div className="relative">
  <textarea
    value={importedValue}
    className="w-full p-3 border border-gray-300 rounded-lg pr-10"
  />
  <div className="absolute top-3 right-3" title="Imported from previous activity">
    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
      <span className="text-blue-600 text-xs">↓</span>
    </div>
  </div>
</div>
```

#### Progress Summary (Optional)
For activities that import from multiple days:

```html
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
  <h4 className="font-semibold text-blue-800 mb-2">Your Workshop Progress</h4>
  <div className="space-y-1 text-sm">
    <div className="flex items-center text-blue-700">
      <CheckCircle className="mr-2 text-green-600" size={16} />
      Day 1: Problem validated
    </div>
    <div className="flex items-center text-blue-700">
      <CheckCircle className="mr-2 text-green-600" size={16} />
      Day 2-1: Early Customer Profile defined
    </div>
    <div className="flex items-center text-blue-700">
      <Clock className="mr-2 text-orange-600" size={16} />
      Day 2-2: Currently on Activity 2 of 3
    </div>
  </div>
</div>
```

### Mobile Considerations

1. **Code Display**: Use smaller font size on mobile
2. **Copy Button**: Full width on mobile devices
3. **Textarea Height**: Reduce to 60px on mobile
4. **Instructions**: Collapsible on mobile to save space

### Accessibility

1. **ARIA Labels**: All buttons and interactive elements
2. **Focus States**: Clear focus indicators on all inputs
3. **Success/Error**: Both visual and screen reader announcements
4. **Keyboard Navigation**: Full keyboard support for all interactions

### Color Palette for Progress Code UI

- **Primary (Orange)**: `#FF9000` - Buttons, active states
- **Success (Green)**: `#10B981` - Completion, valid codes
- **Error (Red)**: `#EF4444` - Invalid codes, errors
- **Warning (Yellow)**: `#F59E0B` - Important notices
- **Info (Blue)**: `#3B82F6` - Imported data indicators

## Button Standards and Navigation

### Final Step Button Standards
- **Standard Order (left to right):** "Reset Activity" | "Generate Code" | "Continue to Next Activity"
- **Button Styling:** 
  - Reset Activity: `bg-gray-500 text-white`
  - Generate Code: `bg-green-500 text-white`
  - Continue: `bg-orange-500 text-white`
- **Text Consistency:** Use exact same text across all activities

### Generate Code Button Behavior
- After clicking "Generate Code", it should transform to "Return to Workshop"
- "Return to Workshop" links back to the specific workshop's index page
- Success message appears but import section remains visible

### Final Activity in Workshop Standards
- Applies to the following "last" activity files:
  - `problems_worth_solving/problems-activity-3.html`
  - `finding_your_early_customers/ecp-activity-3.html`
  - `positioning_basics/positioning-activity-3.html`
  - `market_entry_readiness/market-entry-activity-3.html`
- Right-most button text should be "Back to All Workshops" (not "Continue to Next Activity")
- Links to main workshop landing page (`../index.html`)
- Maintains orange styling (`bg-orange-500 text-white`)

### Import Section Behavior
- Import section should remain visible after successful code import
- Show success message but don't hide the entire section
- Clear visual indication of successful import (`text-green-600`)

### Button Placement and Styling
- All buttons: `px-4 py-2 rounded-lg font-medium transition-colors`
- Proper spacing between buttons (`space-x-4`)
- Consistent hover effects (`hover:bg-[color]-600`)

### Navigation Consistency
- "Back to Workshop" in header is sufficient (no need for duplicate buttons in page body)
- Step navigation (back/next) should be clearly distinct from workshop navigation
- Use "← Back" for previous step, not "Back to Step X"

### Final Step Navigation for Different Scenarios
- **Regular activity final step:** Reset | Generate Code | Continue to Next Activity
- **Final activity in workshop final step:** Reset | Generate Code | Back to All Workshops
- **Previous/next buttons within steps:** Only show if relevant (no "previous" on first step)

### Button Implementation Example
```html
<div className="flex justify-between items-center mt-6 gap-4">
  <button
    onClick={resetActivity}
    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex-shrink-0"
  >
    Reset Activity
  </button>
  
  <button
    onClick={handleGenerateCode}
    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold flex-shrink-0"
  >
    {activityComplete ? 'Return to Workshop' : 'Generate Code'}
  </button>
  
  <button
    onClick={handleContinue}
    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex-shrink-0"
  >
    {isLastActivity ? 'Back to All Workshops' : 'Continue to Next Activity'}
  </button>
</div>
```
