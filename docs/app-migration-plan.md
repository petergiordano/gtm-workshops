# migration-plan.md

# ⚙️ App Migration Plan: GTM Workshops → React + Supabase

This doc outlines the step-by-step plan and architectural standards for migrating the GTM Workshop HTML-based app to a modern React + Supabase stack hosted via bolt.new.

---

## ✅ Step-by-Step Startup Checklist

1. **Create a New bolt.new Project**
   - Go to [https://bolt.new](https://bolt.new) and create a new project.
   - **Prompt to use with Bolt**:
     ```
     Build a React + Tailwind app for the first activity in this HTML-based workshop system. Use the file `Workshop-1-problems_worth_solving/problems-activity-1.html` as your reference. We'll replace the old progress code system with a Supabase backend using a unique key to store and retrieve workshop answers. Maintain the visual structure, styling, and validation logic.
     ```
   - **Upload to Bolt**:
     - `problems-activity-1.html`  
       ➤ This is the original HTML file for the first activity. Use it to replicate layout, interaction flow, and UX structure.
     - `bolt-migration-standards.md`  
       ➤ A distilled set of UI/UX, data, and architectural standards. Guides component structure, styling, and logic.
     - Optional: Screenshot of original activity  
       ➤ Useful for visually matching design and layout. Reference the known layout from GitHub Pages deployment.

2. **Link to GitHub Repo**
   - Link the Bolt project to your GitHub repo: `gtm-workshops`
   - ⚠️ **Use the `bolt-migration` branch**, which contains all the work from `progress-code-implementation` and is cleanly isolated for the new React-based app
   - Later, once Bolt migration is stable, you can promote to `main`

3. **Scaffold the React App**
   - Let Bolt scaffold the app using React 18
   - Use `ReactDOM.createRoot()` (not `ReactDOM.render`)
   - Confirm Tailwind CSS is installed and renders as expected

4. **Implement Supabase Backend**
   - Create `user_progress` table with:
     ```
     key: text (PK)
     email: text (optional)
     data: jsonb
     created_at: timestamp (default now())
     updated_at: timestamp (default now())
     ```
   - Save all activity state under a single `data` object keyed by `key`

5. **Key-Based Persistence**
   - On first load, generate a random key and save to localStorage
   - Use that key for all future Supabase reads/writes

6. **Optional Email Recovery**
   - Prompt the user once to save their email with their key
   - Store `{ email, key }` mapping in Supabase

7. **Follow UI/UX Standards**
   - Progress indicators
   - Word count validation
   - Final step buttons: `[Reset] [Save] [Back to Workshop] [Continue →]`
   - Responsive for 1366×768

8. **Schema & Data Format**
   - Use versioned JSON:
     ```json
     {
       "version": "1.0",
       "day1": {
         "activity1": {
           "momentOfRealization": "...",
           "whoExperienced": "...",
           "whyMatters": "...",
           "whatSurprised": "...",
           "howRealProblem": "...",
           "completedAt": "ISO timestamp"
         }
       }
     }
     ```

9. **Error Handling**
   - If load fails, show fallback UI
   - If data is missing or corrupted, allow restart

10. **Repeat for Remaining Activities**
   - After Activity 1 works, replicate for Activity 2, 3, and future workshops

---

This file will track progress and evolve as the React app grows.