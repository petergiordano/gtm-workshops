# TODO - Workshop Progress Code Implementation

## Immediate Tasks

### Implementation Priority
- [x] ✅ Implement Progress Code in Day 2-2 Activity 1 (pilot) - COMPLETE
- [x] ✅ Test complete flow through all 3 positioning activities - COMPLETE
- [x] ✅ Roll out to remaining Day 2-2 activities - COMPLETE
- [ ] Implement in Day 1 activities
- [x] ✅ Implement in Day 2-1 activities - COMPLETE (June 9, 2025)
- [x] ✅ Implement in Day 3 (Market Entry Readiness) activities - Activity 1 COMPLETE (June 12, 2025)

### Documentation Updates
- [ ] Add examples of actual progress codes to technical docs
- [ ] Create user-facing help documentation
- [ ] Add troubleshooting guide for common issues

## Known Issues

### Naming Clarification ✓
- [x] Day numbering is by track, not chronological order:
  - `day1` = Problems Worth Solving (chronologically Day 1)
  - `day2_1` = Finding Your Early Customers (chronologically Day 2 AM)
  - `day2_2` = Positioning Basics (chronologically Day 2 PM)
  - `day3` = Market Entry Readiness (chronologically Day 4)
- [x] **RESOLVED**: Added clarifying comments and documentation to explain naming convention
- [ ] Consider future renaming to avoid confusion (e.g., `problems`, `customers`, `positioning`, `market_entry`)

### Technical Debt
- [ ] Implement progress code versioning system
- [ ] Add data migration strategy for schema changes
- [ ] Consider compression if codes exceed 2000 chars
- [ ] Add analytics to track usage patterns

## Future Enhancements

### User Experience
- [ ] Add visual progress indicator showing completed workshops
- [ ] Implement "Quick Save" button that copies code automatically
- [ ] Add QR code generation for easier mobile sharing
- [ ] Create progress dashboard showing all completed activities

### Data Management
- [ ] Add optional cloud backup (with user consent)
- [ ] Implement data export to PDF report
- [ ] Add team/cohort code sharing features
- [ ] Create instructor view to see cohort progress

### Track 2 Workshops
- [ ] Design data schema for Days 5-10 (Advanced GTM)
- [ ] Determine which Track 2 activities need persistence
- [ ] Plan integration with Track 1 data

## Testing Requirements

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Scenarios to Test
- [ ] 30 concurrent users
- [ ] Invalid code handling
- [ ] Partial data import
- [ ] Maximum data size
- [ ] Copy/paste on all platforms
- [ ] Network offline handling

## Questions to Resolve

### Design Decisions
- [ ] Should we show a preview of imported data before applying?
- [ ] How to handle version conflicts if schema changes?
- [ ] Should activities lock after completion to preserve progress codes?
- [ ] Add "confidence score" to show how much data was successfully imported?

### Workshop Flow
- [ ] Can users skip workshops and still use progress codes?
- [ ] Should we enforce prerequisites (e.g., must complete Day 1 before Day 2)?
- [ ] How to handle users who want to redo an activity?

## Archive Note

*Historical implementation details for Progress Code system and legacy development phases have been archived. All 12 core workshop activities are now implemented using the embedded test data system with dev mode functionality and professional markdown export.*

*For current development status and next steps, see the Project Documentation section below.*

## ✅ PROJECT DOCUMENTATION UPDATED FOR CLAUDE CODE (July 21, 2025)

### Documentation Overhaul for AI-Assisted Development - COMPLETE
All project documentation has been updated to enable Claude Code to understand and implement the established design patterns:

#### **Core Documentation Updates** ✅ COMPLETE
- [x] **README.md**: Updated with comprehensive "For Developers & Claude Code" section
  - Quick start guide for new activities
  - Technical architecture overview
  - Key design standards reference
  - Dev mode implementation patterns
  - File naming conventions
  - Professional export features documentation

- [x] **CLAUDE.md**: Completely rewritten with step-by-step implementation guide
  - Embedded test data system explanation
  - React 18 createRoot API requirements
  - Complete dev mode implementation code
  - Professional export with dual feedback system
  - Design standards compliance guide
  - Common implementation pitfalls and solutions

- [x] **docs/activity_standards.md**: Updated with comprehensive quick reference workflow
  - Step-by-step workflow for new activity creation
  - Code templates and patterns
  - Testing checklist
  - File organization guide
  - Realistic test data sources reference

#### **Design Standards Documentation Status**
- [x] **docs/activity_standards.md**: Complete design specifications (already comprehensive)
- [x] **docs/design-specifications.md**: Visual design standards and laptop optimization (already detailed)
- [x] **docs/fictional_product_content_posh.md**: Realistic product example content (available)
- [x] **docs/docs_fictional_product/Posh_Pricing_Strategy_Example.md**: Pricing-specific examples (available)

#### **Current Project Capabilities**
✅ **All 12 core activities implemented** with embedded test data system  
✅ **Complete A-version pattern** established and documented  
✅ **Dev mode functionality** across all activities  
✅ **Professional markdown export** with Google Docs integration  
✅ **Comprehensive documentation** for AI-assisted development  

#### **Ready For New Activity Creation**
The project is now fully prepared for Claude Code to:
- Understand the established design patterns
- Create new activities following A-version standards
- Implement dev mode functionality consistently
- Generate professional markdown exports
- Follow laptop-optimized design specifications

## 🚀 COMPLETED: Week 8 Competitive Strategy ✅

### Implementation Summary (Completed: January 26, 2025)
- **NEW APPROACH:** Implemented unified single-page application pattern
- **FILES:** activity-unified.html contains all 3 activities in one file
- **ARCHIVED:** Individual activity files moved to _archive/week-8-archive/

#### **Week 8 Implementation** ✅ COMPLETE
- [x] Created activity-unified.html - Single page with all 3 activities:
  - [x] Activity 1: Competitive Field Snapshot (Porter's 5 Forces)
  - [x] Activity 2: Play & Win Choices (Where to Play / How to Win)
  - [x] Activity 3: Assemble Your Blueprint (Strategy Summary)
- [x] Implemented shared localStorage persistence across activities
- [x] Professional markdown export for complete strategy
- [x] Dev mode with embedded test data
- [x] Responsive design optimized for laptops

## 🚀 ACTIVE DEVELOPMENT - Week 9: Map Buyer Stakeholders

### Current Sprint (Started: January 26, 2025)

#### **Pre-Development Tasks**
- [x] Create folder: week-9-map-buyer-stakeholders
- [x] Get specifications from Gemini for buyer stakeholder mapping activities ✅ COMPLETE
- [x] Store specifications in docs/TODO.md (this file) ✅ COMPLETE
- [ ] Review specifications with stakeholder/user

#### **Week 9 Implementation Plan** 🔄 PENDING SPECS
- [ ] Create activity-unified.html - Single page application
  - [ ] Activity 1: Map the Buying Jobs
  - [ ] Activity 2: Assign Personas to Roles
  - [ ] Activity 3: Develop a Buyer Enablement Plan
- [ ] Create index.html - Workshop landing page
- [ ] Implement shared state with localStorage key: `workshopState_buyer_stakeholders`
- [ ] Add realistic test data for B2B buyer journey
- [ ] Professional markdown export
- [ ] Test complete flow

#### **Gemini Specification Requirements**
When getting specs from Gemini, ensure coverage of:
- [ ] Buyer persona identification framework
- [ ] Decision-making unit (DMU) mapping
- [ ] Stakeholder influence/interest matrix
- [ ] Champion identification strategy
- [ ] Objection handling by stakeholder type
- [ ] Buying process timeline mapping

#### **Gemini Specifications for Week 9: Map Buyer Stakeholders**

##### **1. Activity Titles and Descriptions**

* **Activity 1: Map the Buying Jobs**
  * **Description:** The B2B buying process isn't a simple funnel; it's a complex journey where customers must complete six distinct "jobs" to reach a decision. In this activity, you will analyze your customer's journey to identify the 2-3 jobs that are the most difficult or create the most friction. This crucial first step forces you to see the deal from your customer's perspective and identifies the exact points of leverage where your sales process can add the most value.

* **Activity 2: Assign Personas to Roles**
  * **Description:** You are never selling to one person; you are selling to a committee of 6-10 people with different motivations and priorities. This activity moves beyond simple org charts to build a sophisticated stakeholder map. You will identify the key players, distinguish their company role from their "buying persona" (e.g., Champion, Blocker, Economic Buyer), and articulate the specific goals and challenges that drive their decision-making process.

* **Activity 3: Develop a Buyer Enablement Plan**
  * **Description:** A staggering 83% of the buying process happens when you are not in the room. Your success depends on your ability to arm your internal champion to sell on your behalf. In this final activity, you will translate your stakeholder map into an actionable plan. You will create specific "prescriptions"—tangible assets like an ROI calculator or a security brief—designed to help your champion overcome objections and build consensus within the buying group.

##### **2. Detailed Field Specifications for Each Activity**

###### **Activity 1: Map the Buying Jobs**

* **Input Fields:** 2
* **How it builds on previous activities:** This is the foundational activity that sets the strategic context for the entire workshop.

| Field Name (Variable) | Label | Input Type | Placeholder/Options | Tooltip | Validation |
| --- | --- | --- | --- | --- | --- |
| `selectedBuyingJobs` | Select the top 2-3 most difficult buying jobs. | Checkbox Group | **Options:** `Problem Identification`, `Solution Exploration`, `Requirements Building`, `Supplier Selection`, `Validation`, `Consensus Creation` | Choose the jobs where your customer's buying process most often stalls or breaks down. | Required, select 2-3. |
| `buyingJobsJustification` | Why are these jobs the most difficult for your customer? | Textarea | "e.g., Our customers struggle most with Consensus Creation because the purchase involves three departments (Engineering, Finance, Security) with conflicting priorities. Getting them to agree on a budget and a timeline is where deals stall." | Think about where your deals get stuck. Is it identifying the problem, or getting 10 stakeholders to agree? This is the friction your sales process must solve. | Required, min 15 words. |

###### **Activity 2: Assign Personas to Roles**

* **Input Fields:** 1 dynamic component (array of objects), containing 4 fields per stakeholder.
* **How it builds on Activity 1:** Understanding the most difficult "buying jobs" (Activity 1) provides the essential context for why certain stakeholders have the goals and challenges they do. If "Consensus Creation" is a top challenge, the goals of the Champion and the challenges of the Blocker become much clearer.

| Field Name (Variable) | Label | Input Type | Placeholder | Tooltip | Validation |
| --- | --- | --- | --- | --- | --- |
| `stakeholders` (Array) | N/A (This is the container) | Dynamic Cards | N/A | Add 3-5 key players in the buying committee. | Required, min 3 stakeholders. |
| `functionalRole` | Functional Role | Text Input | "e.g., Head of DevOps" | The person's function, not their specific title (e.g., 'Sales Leadership' vs. 'SVP of Sales'). | Required, min 3 words. |
| `stakeholderPersona` | Buying Persona | Select/Dropdown | **Options:** `Champion`, `Economic Buyer`, `Technical Buyer`, `Decision Maker`, `End User`, `Blocker`, `Influencer` | The role this person plays in *this specific* purchase decision, regardless of their title. | Required. |
| `keyGoals` | Key Goals & Motivations | Textarea | "e.g., Reduce P1 incidents by 50%, improve team efficiency, link engineering metrics to business outcomes." | Use the buyer's language, not yours. Focus on business outcomes, not product features. | Required, min 10 words. |
| `challenges` | Challenges & Pains | Textarea | "e.g., Spends 10+ hours a week firefighting reactive alerts. Constantly pulled away from core development to fix outages." | Focus on pain points that can be tied to ROI (time, money, risk). | Required, min 10 words. |

###### **Activity 3: Develop a Buyer Enablement Plan**

* **Input Fields:** 1 dynamic component (array of objects), containing 3 fields per "prescription."
* **How it synthesizes Activities 1 & 2:** This is the action plan. The `targetStakeholder` dropdown is dynamically populated from the stakeholders mapped in Activity 2. The "prescriptions" you create are the solution to help the customer overcome the difficult "buying jobs" identified in Activity 1.

| Field Name (Variable) | Label | Input Type | Placeholder | Tooltip | Validation |
| --- | --- | --- | --- | --- | --- |
| `prescriptions` (Array) | N/A (This is the container) | Dynamic Rows | N/A | Add at least 2 specific 'prescriptions' to arm your champion. | Required, min 2 prescriptions. |
| `targetStakeholder` | Target Stakeholder | Select/Dropdown | (Dynamically populated with `functionalRole` from Activity 2) | Who does your champion need to convince? This list is pulled directly from the stakeholders you mapped in Activity 2. | Required. |
| `primaryBarrier` | Primary Barrier / Objection | Textarea | "e.g., The CFO believes our existing monitoring tools are 'good enough' and doesn't see the ROI of a predictive solution." | What is the single biggest reason this person would say 'no' or delay the deal? | Required, min 10 words. |
| `enablementArtifact` | Enablement Artifact (Your 'Prescription') | Textarea | "e.g., A 1-page ROI calculator showing a 6-month payback period. Arm our champion with this for their budget meeting." | What specific, tangible asset can you create to help your champion overcome this barrier? (e.g., ROI Calculator, Security Brief) | Required, min 10 words. |

##### **3. Complete Test Data Example**

This JSON object should be embedded in the `<script type="application/json" id="testData">` tag in `activity-unified.html`. It provides a coherent narrative for Posh AMP mapping a prospect.

```json
{
  "selectedBuyingJobs": ["Consensus Creation", "Validation", "Supplier Selection"],
  "buyingJobsJustification": "Our ICP struggles most with getting their multiple departments (Engineering, Finance, Security) to agree on the need for a new tool, validating that a predictive solution will actually work, and selecting it over expanding their current tools.",
  "stakeholders": [
    {
      "functionalRole": "Head of DevOps",
      "stakeholderPersona": "End User",
      "keyGoals": "Reduce time spent firefighting reactive alerts. Prevent being woken up at 2 AM for P1 incidents. Improve system reliability and automate manual toil.",
      "challenges": "Constantly pulled away from strategic projects to fix outages. Alert fatigue from current tools is high. Lacks the ability to get ahead of problems before they impact customers."
    },
    {
      "functionalRole": "VP of Engineering",
      "stakeholderPersona": "Decision Maker",
      "keyGoals": "Improve team efficiency and focus on innovation. Link engineering reliability metrics (MTTR, MTBF) to business outcomes. Implement a resilient and scalable system architecture.",
      "challenges": "High operational costs due to engineering time spent on reactive problem-solving. Fragmented visibility across different platforms. Difficulty proving the business value of new infrastructure investments."
    },
    {
      "functionalRole": "Chief Financial Officer",
      "stakeholderPersona": "Economic Buyer",
      "keyGoals": "Justify all technology spend with clear ROI. Reduce financial risk associated with costly downtime. Ensure budget predictability and achieve cost savings.",
      "challenges": "API downtime is expensive ($100k+/hr), but it's a reactive, unpredictable cost. It's difficult to approve a new, proactive expense without a clear financial case showing it's cheaper than the current pain."
    },
    {
      "functionalRole": "Director of IT Security",
      "stakeholderPersona": "Blocker",
      "keyGoals": "Ensure all new vendors are SOC2 compliant. Prevent new tools from introducing security vulnerabilities. Maintain data integrity and governance across all systems.",
      "challenges": "Every new tool is a potential security risk. The vendor onboarding process is long and requires extensive documentation on data handling, security, and compliance."
    }
  ],
  "prescriptions": [
    {
      "targetStakeholder": "Chief Financial Officer",
      "primaryBarrier": "Believes existing monitoring tools are a 'good enough' sunk cost and doesn't see a clear financial case for a new, premium-priced predictive solution.",
      "enablementArtifact": "Provide our champion (VP of Eng) with a 1-page ROI model and a business case template. It will quantify the cost of their last 3 major outages and project a 6-month payback period for Posh AMP."
    },
    {
      "targetStakeholder": "Director of IT Security",
      "primaryBarrier": "Concerned that our platform will require excessive permissions and access to sensitive data, posing a security risk.",
      "enablementArtifact": "Create a 'Security & Compliance Packet' for our champion to share. It will include our SOC2 Type II report, a data processing agreement, and a technical brief on our platform's security architecture and minimal data access requirements."
    }
  ],
  "currentStep": 3
}
```

##### **4. Stakeholder Mapping Concepts**

* **Frameworks Used:**
  * **Gartner's 6 B2B Buying Jobs:** This is the core framework for understanding the customer's process. It re-frames the sale away from a linear funnel and towards a set of non-linear tasks the customer must complete.
  * **Company Role vs. Buying Persona:** This framework, based on common B2B sales methodologies, is used to map the people involved. We distinguish a person's title (e.g., CFO) from their role in the deal (e.g., Economic Buyer, Blocker).
  * **Buyer Enablement ("Prescriptions"):** This is the action-oriented framework for the output, focusing on creating assets to help the internal champion drive the deal forward.
  
* **Stakeholder Connection to Buyer Journey:** Stakeholders are uncovered by asking discovery questions related to the 6 Buying Jobs. For example, asking "Who is involved in building the business case for this project?" helps identify the Champion and the Economic Buyer involved in the "Consensus Creation" job.

* **Key Insights for Users:**
  1. **Empathy:** Your sales process is irrelevant; only the customer's buying process matters. You must align with their "jobs-to-be-done".
  2. **Complexity:** You are selling to a diverse committee, not an individual. Each member has different, often conflicting, goals that you must understand and navigate.
  3. **Enablement:** Your primary job is to equip your internal champion to win the 83% of the sales cycle where you are absent. Your success is their success.

##### **5. Workshop Metadata for index.html**

* **Workshop Title:** `How to Map Buying Stakeholders`
* **Workshop Description:** "This workshop provides a structured process for identifying the key players in a complex B2B sales motion. You will learn to move beyond job titles to understand the motivations, challenges, and buying personas of each stakeholder, and build an actionable plan to drive consensus and close deals."
* **Learning Objectives:**
  * Differentiate your sales process from the customer's non-linear buying process.
  * Identify the 6 "buying jobs" that drive a purchase decision for your customer.
  * Create a detailed stakeholder map with roles, personas, and motivations.
  * Develop an actionable "buyer enablement" plan to equip your champion and accelerate deals.
* **Activity Card Descriptions:**
  * **Card 1:** "Map the Buying Jobs - Identify the 2-3 most critical and difficult 'jobs' your customer must complete to make a purchase."
  * **Card 2:** "Assign Personas to Roles - Build a detailed map of the buying group, defining each stakeholder's functional role, buying persona, and key motivations."
  * **Card 3:** "Develop a Buyer Enablement Plan - Translate your map into action. Create 'prescriptions' to help your champion overcome objections and build consensus."

##### **6. Export Format Structure**

The markdown export should be structured as follows to provide a clear, shareable artifact.

```markdown
# Buyer Stakeholder Map & Enablement Plan

*This document outlines the key stakeholders, buying jobs, and a strategic enablement plan for a target customer account. Generated via the GTM Workshop.*

---

## 1. Critical Buying Jobs Analysis

**The 2-3 most difficult buying jobs for our customer are:**
- [List of selected buying jobs]

**Justification:**
[User's justification text]

---

## 2. The Stakeholder Map

### **Stakeholder 1: [Functional Role]**
- **Persona:** [Stakeholder Persona]
- **Key Goals:** [User's text for key goals]
- **Challenges:** [User's text for challenges]

### **Stakeholder 2: [Functional Role]**
- **Persona:** [Stakeholder Persona]
- **Key Goals:** [User's text for key goals]
- **Challenges:** [User's text for challenges]

*(...repeat for all mapped stakeholders...)*

---

## 3. Buyer Enablement Plan (Prescriptions)

### **Prescription 1: For the [Target Stakeholder]**
- **Primary Barrier:** [User's text for primary barrier]
- **Enablement Artifact:** [User's text for enablement artifact]

### **Prescription 2: For the [Target Stakeholder]**
- **Primary Barrier:** [User's text for primary barrier]
- **Enablement Artifact:** [User's text for enablement artifact]

*(...repeat for all created prescriptions...)*
```

##### **7. Buyer Journey Integration**

* **Journey Stages:** We are explicitly **not** using a traditional, linear buyer journey (e.g., Awareness, Consideration, Decision). The workshop's core concept is mapping to **Gartner's 6 non-linear Buying Jobs**, which happen concurrently and are revisited throughout the process.
* **Stakeholder Appearance:** Stakeholders appear and have peak influence during different "jobs." For example:
  * `End User` is most influential during **Problem Identification** and **Validation**.
  * `Technical Buyer` is most influential during **Solution Exploration** and **Requirements Building**.
  * `Economic Buyer` and `Blockers` are most influential during **Consensus Creation**.
* **B2B Patterns to Emphasize:**
  * **The "Buying Group" is the Customer:** Reinforce that the target is a committee of 6-10 people, not a single lead.
  * **The Invisible Sale:** Emphasize that 83% of the buying process happens without a sales rep present, making the role of the champion and buyer enablement critical.
  * **Non-Linearity:** The customer's path is chaotic. They may be working on "Supplier Selection" and "Problem Identification" at the same time. The goal is not to force them down a funnel but to help them complete their jobs.

### **Next Development Tasks**

#### **Track 2 Workshops (Weeks 5-9)**
- [x] Week 5: Pricing & Monetization ✅ COMPLETE
  - [x] pricing-activity-1A.html
  - [x] pricing-activity-2A.html
  - [x] pricing-activity-3A.html

- [ ] Week 6: Messaging & Storytelling (3 activities)
  - [ ] messaging-activity-1A.html - Core Message Framework
  - [ ] messaging-activity-2A.html - Audience-Specific Messaging
  - [ ] messaging-activity-3A.html - Story Arc Development

- [x] Week 7: GTM Channels & Buyer Journey ✅ COMPLETE
  - [x] channels-activity-1A.html - Buyer Journey Map
  - [x] channels-activity-2A.html - GTM Channel Hypothesis Matrix (Part 1)
  - [x] channels-activity-3A.html - GTM Channel Hypothesis Matrix (Part 2)

- [x] Week 8: Competitive Strategy ✅ COMPLETE (January 26, 2025)
  - [x] activity-unified.html - Single page with all 3 activities
  - [x] Archived individual files to _archive/week-8-archive/
  - [x] Implemented Porter's 5 Forces, Play & Win framework

- [ ] Week 9: Map Buyer Stakeholders 🔄 ACTIVE DEVELOPMENT
  - [ ] activity-unified.html - Awaiting Gemini specifications
  - [ ] index.html - Workshop landing page
  - [ ] Focus: B2B buyer journey and stakeholder mapping

- [x] Week X: Strategic Partnerships ✅ COMPLETE (ARCHIVED)
  - [x] Moved to week-x-strategic-partnerships/ folder
  - [x] All 3 activities fully implemented

#### **Implementation Standards for New Activities**
Each new activity should follow the established A-version pattern:
- Embedded test data from `test_data/[activity-name]-#A.json`
- Dev mode with double-click title activation and 🔧 icon
- Professional markdown export with Level 1 headings
- Copy-to-clipboard with dual feedback system
- Laptop-optimized layout (max-width: 900px)
- React 18 createRoot API usage

#### **Documentation Maintenance**
- [ ] Update activity standards as new patterns emerge
- [ ] Add new workshop-specific design patterns as needed
- [ ] Maintain realistic test data quality
- [ ] Document any new technical requirements

#### **Quality Assurance**
- [ ] Validate new activities follow established patterns
- [ ] Test dev mode functionality across new implementations
- [ ] Verify professional export quality and Google Docs compatibility
- [ ] Ensure responsive design compliance

---

*Last Updated: January 26, 2025*
*Maintainer: Pete Giordano*
*Status: Ready for AI-assisted new activity development*