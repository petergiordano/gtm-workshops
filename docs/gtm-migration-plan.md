# 🔧 Qu

# Migration Plan: gtm-workshops to React + Supabase

**Last updated:** 2025-06-10

This document outlines the step-by-step plan to migrate the existing HTML-based gtm-workshops project into a React app hosted on bolt.new and backed by Supabase.

---

## ✅ Step 1: Complete the Progress Code System

- Finalize functionality in the HTML/JS-based version (especially in `positioning_basics`).
- Each activity should:
  - Generate a unique progress code.
  - Accept an existing code and repopulate saved responses.
  - Use hash or parameter-based data passing for now.

## 🔜 Step 2: Set Up the React Environment on bolt.new

- Create a bolt.new project and connect it to the GitHub repo.
- Use AI scaffolding to bootstrap a new React project.
- Start by migrating one workshop (`problems_worth_solving`) to React components.
- Use React Router for navigation between activities.
- Test each converted activity to confirm it mirrors HTML functionality.

## 🔜 Step 3: Implement Backend Storage with Supabase

- Use Supabase for backend storage (per bolt.new default).
- Generate a unique key (10–12 alphanumeric characters) when a user starts.
- Store:
  - Answers
  - Timestamps
  - Completed activities
- See `docs/data-schema.md` for the data structure.
- Reuse the same key across sessions for continuity.

## 🔜 Step 4: Integrate Optional Email-Based Recovery

- Prompt the user (once) to optionally enter an email after key generation.
- If email is entered:
  - Store a mapping of email → key in Supabase.
  - Create a recovery UI where users can retrieve the key via email.
- If email is skipped:
  - Show warning: “If you lose your code, you lose your progress.”

_Note: Email-sending method TBD. May use Supabase functions, SendGrid, etc._

## 🔜 Step 5: Incremental Migration of Remaining Workshops

Migrate each workshop in this order:
1. `problems_worth_solving`
2. `finding_your_early_customers`
3. `positioning_basics`
4. `market_entry_readiness`

For each:
- Convert HTML to a React component.
- Hook into the backend using the progress key system.

## 🔜 Step 6: Testing and Iteration

- After each major step, test:
  - Key generation + reuse
  - State save/load
  - Cross-activity continuity
  - Optional email flow
- Use files in `testing/` folder as a base test suite.
- Add unit tests and integration tests as needed.

---

## Hosting and Deployment

- Start with bolt.new for deployment.
- May migrate to Netlify or Vercel.
- Need help with:
  - CI/CD setup
  - Domain routing
  - Static/dynamic route handling

---

## Current Status

- Repo: [https://github.com/petergiordano/gtm-workshops](https://github.com/petergiordano/gtm-workshops)
- Progress code system works in `positioning_basics` activity 2.
- Supabase project not yet set up.
- bolt.new project not yet created.

---

## Next Suggested Step

Finish implementing the HTML version of the progress code system across all `positioning_basics` activities before migrating.

