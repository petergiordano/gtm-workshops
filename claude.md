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

### Progress Code System
The core innovation is a stateless data persistence system using encoded strings:
- **Format**: `GSAP2025-[BASE64_ENCODED_JSON]`
- **Purpose**: Allows users to save/restore progress without accounts or backend
- **Data Flow**: Activity 1 → Progress Code → Activity 2 → Combined Code → Next Workshop

### Component Architecture
Each activity HTML file is self-contained with:
```
Activity HTML
├── React 18 (CDN)
├── Tailwind CSS (CDN)
├── Embedded Test Data (JSON in script tag)
└── Single React Component with:
    ├── Multi-step form wizard
    ├── Real-time validation
    ├── Import/Export functionality
    └── Markdown summary generation
```

### Data Schema
Progress codes contain hierarchical workshop data:
```javascript
{
  version: "1.0",
  workshops: {
    day1: { problems: {...} },
    day2_1: { ecp: {...} },
    day2_2: { positioning: {...} },
    day3: { market_entry: {...} }
  },
  metadata: { lastUpdated, workshopProgress }
}
```

### Key Patterns
1. **No Build Process**: Direct browser execution with Babel transpilation
2. **Progressive Data**: Each activity builds on previous data via Progress Codes
3. **Dev Mode**: Double-click activity titles to access test data
4. **Validation-Driven**: Word counts and required fields enforce quality

## Important Guidelines

1. **Maintain Simplicity**: This project intentionally avoids build tools. Keep changes simple and browser-compatible.

2. **Test Data Embedding**: Test data lives in script tags within each HTML file for easy testing.

3. **Progress Code Compatibility**: When modifying data structures, ensure backward compatibility with existing Progress Codes.

4. **Activity Structure**: Follow the existing pattern when creating new activities:
   - Self-contained HTML file
   - Embedded React component
   - Multi-step wizard format
   - Import/Export functionality

5. **Styling**: Use Tailwind CSS classes only (loaded via CDN).

6. **State Management**: Use React's useState for all state. No external state libraries.

7. **File Naming**: Follow pattern `[topic]-activity-[number]A.html` for activities.

## Working with Progress Codes

When debugging or modifying Progress Code functionality:
1. Use Dev Mode (double-click title) to see decoded data
2. Test with both empty state and imported codes
3. Verify data carries forward correctly between activities
4. Check browser console for encoding/decoding errors

## Testing Approach

Since there's no test framework:
1. Use the test HTML files to validate Progress Code generation/import
2. Test each activity in isolation and with imported data
3. Verify markdown export formatting
4. Check responsive design at different screen sizes
5. Test in multiple browsers (Chrome, Firefox, Safari)