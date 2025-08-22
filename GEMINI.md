
## Project Summary

This repository contains the GTM Workshop Series, an interactive, multi-day training program for early-stage startup founders. The program focuses on developing a go-to-market strategy, covering topics like problem identification, customer discovery, product positioning, and market entry readiness. The project is a static website deployed on GitHub Pages, with each workshop activity being a self-contained, interactive HTML file.

## Architecture

The project is built as a static website with no build process. Each workshop activity is a standalone HTML file that includes embedded React 18 (via CDN) and is styled with Tailwind CSS (also via CDN). The code is transpiled in the browser using Babel.

Key architectural features include:
- **Static Site Generation**: Deployed via GitHub Actions to GitHub Pages.
- **Component-Based UI**: Uses React 18 for building interactive components within each activity.
- **Styling**: Tailwind CSS is used for styling, with a focus on laptop-optimized design.
- **Self-Contained Activities**: Each HTML file is self-contained and includes all necessary scripts and styles.
- **Dev Mode**: A development mode is available in activities, activated by double-clicking the title, which allows for quick testing using embedded JSON test data.

## Code Conventions

- **New Activity Creation**: New activities are created by copying an existing "A-version" template (e.g., `market-entry-activity-1A.html`).
- **File Naming**: Activities follow the `[topic]-activity-[number]A.html` convention, with corresponding test data named `test_data/[topic]-activity-[number]A.json`.
- **React 18**: All new components must use the `createRoot` API.
- **Data Management**: State is managed within each activity using React hooks. Test data is embedded directly into the HTML files within a `<script type="application/json" id="testData">` tag.
- **Professional Export**: Activities include a feature to export a professional report in Markdown, which can be pasted into Google Docs.
- **Navigation**: Each activity page includes navigation links to return to the specific workshop page and the main workshop landing page.

## Key Files

- **`README.md`**: Provides a comprehensive overview of the project, including its structure, technical architecture, and development workflow.
- **`index.html`**: The main landing page for the workshop series.
- **`docs/activity_standards.md`**: Contains detailed design specifications, component patterns, and technical implementation guidelines.
- **`docs/design-specifications.md`**: Outlines the visual design standards, including color palettes, typography, and layout specifications for both original and laptop-optimized designs.
- **`docs/data-schema.md`**: Defines the data structure for all workshop activities.
- **`finding_your_early_customers/`, `market_entry_readiness/`, etc.**: Directories containing the HTML files for each workshop activity.
- **`test_data/`**: Contains JSON files with test data for each activity.
- **`.github/workflows/static.yml`**: The GitHub Actions workflow for deploying the static site to GitHub Pages.
