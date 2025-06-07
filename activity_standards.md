# GTM Workshop Activity Standards & Guidelines

## Project Overview
**Project**: GSAP 2025 GTM Curriculum Development  
**Target Audience**: Early-stage deep tech startups entering US market (ESL participants)  
**Duration**: Each workshop 60 minutes maximum  
**Repository**: `gtm-workshops` (GitHub Pages deployment)  
**Live Site**: https://petergiordano.github.io/gtm-workshops/

## Design Standards

### Color Palette (Overdrive Brand)
- **Primary Orange**: #FF9000 (main accent color)
- **White Background**: #FFFFFF 
- **Gray Variants**: #666666, #8A8A8A
- **Supporting Colors**: #F1C232 (yellow), #FFE599 (light yellow), #55BFFA (blue)

### Visual Design Principles
- **Clean, modern interface** with orange accent on white/light backgrounds
- **16:9 aspect ratio optimization** for Google Slides screenshot capture
- **Mobile-responsive design** using Tailwind CSS
- **Orange gradient cards** for navigation: `linear-gradient(135deg, #FF7F00 0%, #FF9500 100%)`
- **Hover effects**: Darker orange `linear-gradient(135deg, #FF6F00 0%, #FF8500 100%)`

### Typography & Layout
- **Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`
- **Container Max Width**: 1400px for landscape activities, 1200px for others
- **Consistent spacing**: Tailwind utilities (p-4, mb-4, space-y-6, etc.)
- **Card shadows**: `shadow-lg` with subtle borders

## Technical Standards

### File Structure
```
finding_your_early_customers/
├── index.html (workshop landing page)
├── ecp-activity-1.html (Activity 1: Early Market vs Mainstream)
├── ecp-activity-2.html (Activity 2: ECP Component Mapping)
└── ecp-activity-3.html (Activity 3: ECP Hypothesis Builder)
```

### Naming Conventions
- **Activity files**: `ecp-activity-{number}.html`
- **Activity titles**: "Activity {number}: {Name}"
- **Progress indicators**: Numbered steps with clear labels
- **CSS classes**: Tailwind utilities, consistent patterns

### Required Technologies
- **React 18**: `https://unpkg.com/react@18/umd/react.development.js`
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Babel**: `https://unpkg.com/@babel/standalone/babel.min.js`
- **No external storage**: Never use localStorage/sessionStorage (not supported)

## Activity Structure Standards

### Header Component (Sticky)
```jsx
<div className="bg-white rounded-lg shadow-lg p-4 mb-4 sticky top-0 z-50">
    {/* Back link */}
    <a href="../" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors mb-3 text-sm font-medium">
        <span className="mr-1">←</span> Back to Workshop
    </a>
    
    {/* Title */}
    <h1 className="text-2xl font-bold text-gray-800">Activity {number}: {Name}</h1>
    
    {/* Progress breadcrumbs */}
    <div className="flex items-center space-x-4">
        {/* Step indicators with progress bars */}
    </div>
    
    {/* CRITICAL: All progress indicators must be inside sticky header */}
    {/* Activity-specific progress bars (4-box grids, completion indicators, etc.) */}
    <div className="mt-4">
        {/* Progress grids, completion boxes, status indicators */}
    </div>
</div>
```

**IMPORTANT**: Always include ALL progress-related UI elements within the sticky header container. This includes:
- Step breadcrumbs (1, 2, 3 navigation)
- Progress completion boxes (4-box grids showing section completion)
- Activity titles and subtitles that provide context
- Any visual indicators that help users track their progress

### Progress Indicators
- **Multi-step activities**: Horizontal breadcrumb navigation
- **Color coding**: Orange for active/completed, gray for inactive
- **Visual feedback**: Checkmarks for completed sections
- **Sticky positioning**: Always visible during scrolling

### Interactive Elements
- **Completion detection**: Based on content length (20+ characters typical)
- **Real-time feedback**: Green checkmarks, color changes
- **Reset functionality**: Curved arrow button (↻) in top-right
- **Consistent button styles**: Orange primary, gray secondary

### Form Standards
- **Input validation**: Character/word count requirements shown to users
- **Placeholder text**: Helpful examples using "We believe..." format
- **Hint sections**: Blue-bordered boxes with lightbulb icons
- **Textarea styling**: Consistent sizing, focus states with orange borders

## Content Guidelines

### Language & Tone
- **Simple, clear language** for ESL audience
- **Hypothesis-driven approach**: "We believe..." rather than "We know..."
- **Action-oriented prompts**: WHO, WHY NOW, WHAT SUCCESS
- **Concrete examples**: Always include Posh AMP or similar examples

### Activity Flow Patterns
1. **Introduction/Context** (brief explanation)
2. **Interactive Exercise** (hands-on activity)
3. **Results/Discussion** (reflection and insights)
4. **Next Steps** (bridge to following content)

### User Experience Principles
- **Progressive disclosure**: Show complexity gradually
- **Visual progress tracking**: Always show where users are
- **Error prevention**: Clear instructions and examples
- **Immediate feedback**: Real-time validation and completion states

## Workshop Integration

### Landing Pages
- **Workshop overview**: Clean cards linking to activities
- **Visual hierarchy**: Track 1 vs Track 2 distinction
- **Status indicators**: Available vs Coming Soon states
- **Consistent navigation**: Back links and breadcrumbs

### Cross-Activity Consistency
- **Terminology alignment**: ECP, Early Market, Problem Urgency, etc.
- **Example continuity**: Use same company examples across activities
- **Progressive building**: Each activity builds on previous learning
- **Reference materials**: QR codes handled in slides, not embedded

## Quality Assurance

### Testing Checklist
- [ ] Sticky header functionality across all screen sizes
- [ ] Progress indicators update correctly
- [ ] Completion detection triggers at appropriate thresholds
- [ ] Reset button clears all state
- [ ] Navigation links work properly
- [ ] Visual consistency with design standards
- [ ] Mobile responsiveness
- [ ] No console errors

### Performance Standards
- **Fast loading**: Minimal external dependencies
- **Smooth interactions**: CSS transitions under 300ms
- **No layout shifts**: Stable positioning during dynamic updates
- **Accessible markup**: Proper semantic HTML structure

## Development Workflow

### Established Process
1. **Design decisions**: Discussed in Claude interface (supports images)
2. **Implementation**: Claude Code prompts for VS Code execution
3. **Testing**: Local verification of functionality
4. **Deployment**: GitHub Desktop → GitHub Pages automatic deployment

### Code Formatting
- **Consistent indentation**: 2 spaces
- **Clear variable names**: Descriptive but concise
- **Component organization**: Logical grouping of related functions
- **Comment standards**: Explain complex logic, mark TODO items

---

## Recommended Usage Instructions

### For New Development Sessions:
At the start of any new workshop development session, share this document and say:

**"Please review these GTM Workshop Activity Standards before we begin. Follow all established patterns for consistency with existing activities. Pay special attention to sticky header requirements and progress indicator placement."**

### For Modifications:
When updating existing activities, reference the relevant sections:

**"Please follow the established standards from our GTM Workshop guidelines, specifically [section name]. Ensure all changes maintain consistency with existing activities."**

### For Quality Assurance:
Use the testing checklist to verify new activities meet all standards before deployment.

---

## Document Location & Maintenance
This standards document should be stored as `ACTIVITY_STANDARDS.md` in the root of the VS Code project repository for easy access by developers and maintained as the single source of truth for all activity development standards.