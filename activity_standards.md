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
```# Interactive Workshop Activities Standards

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
- **Completion Threshold**: 20+ characters for text inputs

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
- **Input Requirements**: Specify minimum input length where relevant

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
3. **Completion Detection**: Test 20+ character threshold
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