---
name: debug-loop
description: Use this skill when the user reports a bug, error, or unexpected behavior. Triggers on phrases like "this is broken", "getting an error", "it's not working", "debug this", "why is X happening", "fix this bug", or when the user pastes an error message or stack trace. Runs a structured root-cause-first debug cycle instead of guessing at fixes.
---

This skill runs a disciplined debug loop: find the root cause first, then fix it once, then verify it stays fixed. No guessing, no band-aids.

The user provides a bug description, error message, stack trace, or unexpected behavior. Work systematically through the cycle below.

## The debug loop

### Phase 1 — Understand the failure

Before touching any code:
1. Read the full error message and stack trace. Identify the exact failure point.
2. Reproduce the error mentally — trace the code path that leads to it.
3. State the failure in one sentence: "X is happening because Y."
4. If you cannot state this clearly, you do not understand the bug yet. Keep reading.

Do not propose a fix until you can state the root cause clearly.

### Phase 2 — Find the root cause

Ask: is this failure a symptom or the cause?

Common root cause categories:
- **Data:** wrong shape, null/undefined, type mismatch, stale cache
- **State:** race condition, wrong initial state, mutation side effect
- **Logic:** off-by-one, wrong conditional, incorrect assumption about input
- **Integration:** API contract mismatch, auth failure, environment variable missing
- **Configuration:** wrong env, missing dependency, version conflict

Check logs, not just the error. The error message often points to the symptom; the log before it shows the cause.

### Phase 3 — Fix the root cause

Fix the cause, not the symptom. Ask: "Will this fix prevent the bug from ever happening, or just hide it?"

Rules:
- Minimal change — touch only what is necessary
- No new abstractions to work around the bug
- If the fix is a hack, say so and explain why the proper fix is deferred
- If fixing the root cause requires a larger change, scope it explicitly — do not silently expand

### Phase 4 — Verify the fix

After fixing:
1. Run the specific test case that triggered the bug — confirm it passes
2. Run the full test suite — confirm nothing regressed
3. Check logs for the absence of the original error
4. State: "This fix works because [explanation]. It cannot regress because [reason]."

If you cannot verify step 4, the fix is not done.

### Phase 5 — Prevent recurrence

After fixing, ask: why did this bug make it this far?
- Is there a missing test case? Write it now.
- Is there a missing guard clause? Add it.
- Is there a pattern in the codebase that will produce the same bug elsewhere? Flag it.

## Output format

Deliver findings in this order:
1. Root cause (one sentence)
2. Fix applied (what changed and why)
3. Verification result (what was run, what passed)
4. Prevention step (test added, guard added, or pattern flagged)

Do not write a narrative. Be direct and specific.

## What this skill does NOT do

- Does not guess at fixes without a stated root cause
- Does not apply multiple fixes simultaneously (confounds diagnosis)
- Does not refactor surrounding code while fixing a bug
- Does not mark a bug fixed without running verification
