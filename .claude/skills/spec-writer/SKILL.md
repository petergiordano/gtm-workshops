---
name: spec-writer
description: Use this skill when the user wants to turn a brief, idea, or feature description into a structured SDD spec. Triggers on phrases like "write a spec for", "spec this out", "create a spec", "turn this into a spec", "I want to build X", or any request to document requirements before coding. Produces a complete spec following the Spec-Driven Development (SDD) methodology in _reusable_resources.
---

This skill transforms a brief or idea into a structured Spec-Driven Development (SDD) specification. The output drives implementation — it is not a document to file away.

The user provides a feature description, idea, or brief. They may include constraints, tech stack preferences, or user stories. Work with what they give you; mark gaps explicitly.

## Step 1 — Understand before writing

Before producing the spec, ask yourself:
- What is the core user problem being solved?
- Who is the user? What are they trying to accomplish?
- What does "done" look like — what can the user do that they couldn't before?
- What is explicitly OUT of scope for v1?

If critical information is missing, ask ONE clarifying question before proceeding. Do not ask multiple questions at once. If the brief is sufficient, proceed directly.

## Step 2 — Spec structure

Produce the spec in this exact format:

```
# Spec: [Feature Name]
**Status:** Draft
**Created:** [date]
**Branch:** [kebab-case-feature-name]

## Problem
One paragraph. What user problem does this solve? Why does it matter?

## Goal
One sentence. What does this feature achieve?

## Users
Who uses this? What is their context and level of sophistication?

## User stories
- As a [user], I want to [action] so that [outcome]
- (add as many as needed — each must be testable)

## Acceptance criteria
- [ ] [Specific, measurable, testable criterion]
- [ ] (one per line — these become your test cases)

## Out of scope (v1)
- [Explicitly excluded items]
- (forces scope discipline — nothing vague)

## Open questions [NEEDS CLARIFICATION]
- [Any ambiguity that must be resolved before implementation]
- (mark resolved questions with ~~strikethrough~~)

## Tech notes
- Stack: [language, framework, deployment]
- Key constraints: [performance, security, compatibility]
- Dependencies: [external services, APIs, libraries]
- (skip sections that don't apply)
```

## Step 3 — Quality checks

Before delivering the spec, verify:
- Every acceptance criterion is testable — can you write a test for it?
- No [NEEDS CLARIFICATION] markers remain unless genuinely unresolvable
- Out of scope section exists and has at least one entry
- User stories map directly to acceptance criteria
- No implementation details in problem/goal/user stories sections

## What this skill does NOT do

- Does not write implementation plans (use GSD `/gsd:plan-phase` for that)
- Does not write code
- Does not make technology choices unless they are clearly constrained by the brief
- Does not pad the spec with sections that don't apply

## Reference

Full SDD methodology: ~/Documents/GitHub/_reusable_resources/docs/standards/spec-driven.md
CONSTITUTION: ~/Documents/GitHub/_reusable_resources/docs/standards/CONSTITUTION.md
