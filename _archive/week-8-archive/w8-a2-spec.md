---

### **Comprehensive Spec: Activity 2 - Guided Play & Win Choices**

#### **1. Project & Activity Overview**

  **Project:** GTM Workshop Series - Competitive Strategy
  **Activity Name:** Activity 2: Play & Win Choices
* **File Name:** `competitive-activity-2A.html`
* **Goal:** To guide founders through a step-by-step process to deconstruct and then assemble their core "Where to Play" and "How to Win" choices, while also identifying their single riskiest assumption. The final output is a set of clear, testable strategic statements.

---

#### **2. Core UX Principles**

* **Single-Page Canvas:** All three steps are visible on one screen to provide full context and allow for easy iteration, mirroring the "integrated cascade" concept.
* **Guided Sequence:** Numbered steps create an intuitive top-to-bottom workflow, which is essential for an ESL audience.
* **Real-Time Feedback:** An auto-summary footer provides immediate validation by constructing the user's inputs into coherent strategic sentences.
* **Concise & Actionable:** The design encourages brief, powerful inputs over long-form text, leading to sharper strategic thinking.

---

#### **3. Page Layout & Structure**

The page is built on a single-screen canvas model with four primary horizontal bands:

1. **Standard Header:** Contains navigation and the activity title.
2. **Top Band (Step 1):** "Define Where to Play" with three side-by-side input fields.
3. **Middle Band (Step 2):** "Define How to Win" with three side-by-side input fields.
4. **Bottom Band (Step 3):** "Identify the Riskiest Assumption" with a single large input field.
5. **Footer:** A preview box with the auto-assembled strategic statements.

---

#### **4. Component-Level Specifications**

**4.1. Standard Header**

* **Navigation:** Include standard links: "← Back to Workshop" and "All GTM Workshops ↑".
* **Title:** `Activity 2: Play & Win Choices`
* **Description:** "Make two clear, powerful choices. These sentences will become the core of your strategy."

**4.2. Step 1 Band: Define Where to Play**

* **Icon:** A circular orange icon with the number **"01"**.
* **Instruction:** "Break your market choice into three parts."
* **Layout:** Three horizontally aligned text input boxes.

| Field | Label              | Tooltip                                                                           | Placeholder Text                           |
| :---- | :----------------- | :-------------------------------------------------------------------------------- | :----------------------------------------- |
| 1.1   | **Target Segment** | The specific industry or market you're focusing on. Be narrow!                    | `e.g., Mid-market SaaS companies`          |
| 1.2   | **Specific Buyer** | The ideal persona who feels the pain most acutely. Title and key characteristics. | `e.g., Heads of DevOps`                    |
| 1.3   | **Urgent Problem** | The high-cost 'struggling moment' your buyer needs to solve now.                  | `e.g., Who experience weekly API failures` |

**4.3. Step 2 Band: Define How to Win**

* **Icon:** A circular orange icon with the number **"02"**.
* **Instruction:** "List 3 specific advantages that make you different."
* **Layout:** Three horizontally aligned text input boxes.

| Field | Label                        | Tooltip                                                                      | Placeholder Text                                   |
| :---- | :--------------------------- | :--------------------------------------------------------------------------- | :------------------------------------------------- |
| 2.1   | **Unique Differentiator #1** | What is the first key capability or feature in your unique advantage system? | `e.g., 5-minute setup`                             |
| 2.2   | **Unique Differentiator #2** | What is the second element of your advantage?                                | `e.g., Proprietary ML model for predictive alerts` |
| 2.3   | **Unique Differentiator #3** | What is the third component? This can be your business model, support, etc.  | `e.g., Usage-based pricing 50% cheaper`            |

**4.4. Step 3 Band: Identify the Riskiest Assumption**

* **Icon:** A circular orange icon with the number **"03"**.
* **Instruction:** "For this strategy to succeed, what is the single most important belief that **must be true** about your customers?"
* **Layout:** One full-width text input box.

| Field | Label                        | Tooltip                                                                                                        | Placeholder Text                                             |
| :---- | :--------------------------- | :------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| 3.1   | **Your Riskiest Assumption** | This is your leap-of-faith belief. If this is wrong, the whole strategy fails. What do you need to test first? | `e.g., Buyers will trust predictive alerts generated by ML.` |

**4.5. Auto-Summary Footer**

* **Title:** `Preview: Your Strategic Choice`
* **Functionality:** This section updates in real-time as users type in the fields for Steps 1 and 2.
* **Content:**

  * **Where we play:** "We play in **\[Target Segment]**, for **\[Specific Buyer]**, who have **\[Urgent Problem]**."
  * **How we win:** "We win with **\[Unique Differentiator #1]**, **\[Unique Differentiator #2]**, and **\[Unique Differentiator #3]**."
* **Instructional Note:** "Keep these sentences clear—they’ll be copied directly into your Competitive Strategy Blueprint."

---

#### **5. Functional & Technical Requirements**

* **Technology Stack:** Must be a standalone HTML file using **React 18 (`createRoot`)**, Tailwind CSS (CDN), and embedded Babel.
* **Dev Mode:**

  * Activated by double-clicking the main activity title.
  * Must load a complete, high-quality example from an embedded `<script type="application/json" id="testData">` tag.
* **Completion & Export:**

  * The activity is "complete" when all 7 input fields have meaningful content (e.g., >10 characters).
  * Upon completion, a section with a **"Copy Activity Summary"** button must appear.
  * The exported markdown must include all individual fields and the final auto-assembled sentences, formatted for easy pasting into Google Docs.
* **Responsiveness:**

  * **Desktop (Primary View):** The three-column layout for Steps 1 and 2 must be maintained. The entire canvas should be visible on a standard laptop screen.
  * **Mobile/Tablet:** The side-by-side fields in Steps 1 and 2 must stack vertically to ensure readability and usability.

---

#### **6. Style & Branding Guide**

* **Fonts:** `Open Sans` or `Raleway`.
* **Colors:** Adhere to the `Overdrive_Brand-Identity-Design-and-Style-Guide`.

  * **Primary Accent (`#FF9000`):** Use for step icons, highlights, and primary buttons.
  * **Text (`#434343`):** For all labels and body copy.
  * **Borders & Backgrounds:** Use light grays (e.g., `#e5e7eb` for borders, `#fafafa` for page background) to define sections.
* **Input Fields:** Modest height (to accommodate 2-3 lines), rounded corners, and a subtle border with an orange focus state.

---
