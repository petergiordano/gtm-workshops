---
name: notebooklm
description: Complete programmatic access to Google NotebookLM — create notebooks, add sources, generate podcasts/videos/quizzes/reports, download artifacts. Third-party skill installed via pip. Activates on explicit /notebooklm or intent like "create a podcast about X".
source: https://github.com/teng-lin/notebooklm-py
install_type: third-party
---

Third-party CLI skill for Google NotebookLM. Provides programmatic access to features
not exposed in the NotebookLM web UI: batch downloads, PPTX export, quiz/flashcard
export, mind map extraction, web research, and non-blocking generation with subagent patterns.

## Install

```bash
pip install notebooklm-py
pip install "notebooklm-py[chrome]"
playwright install chromium
notebooklm skill install    # installs SKILL.md to ~/.claude/skills/notebooklm/
notebooklm login            # Google OAuth — required before first use
```

## Update

```bash
pip install --upgrade notebooklm-py
notebooklm skill install    # reinstalls updated SKILL.md
```

## Verify

```bash
notebooklm status           # shows authenticated account
notebooklm list             # lists your notebooks
```

## What it can do

| Category | Capabilities |
|----------|-------------|
| Notebooks | Create, list, delete, rename |
| Sources | Add URLs, YouTube, PDFs, Google Docs, audio, video, images; web research (fast/deep) |
| Chat | Ask questions, save answers as notes, conversation history |
| Generate | Podcast (audio), video, slide deck, infographic, report, mind map, quiz, flashcards, data table |
| Download | mp3, mp4, pdf, pptx, png, markdown, json, csv, html |
| Language | 80+ output languages for generated artifacts |

## Key patterns

**Non-blocking generation** — start a generation, get the artifact ID, spawn a background
agent to wait and download. Main conversation continues.

**Parallel safety** — use `-n <notebook_id>` explicit flags instead of `notebooklm use`
when running multiple agents concurrently.

## Source

- PyPI: `notebooklm-py`
- GitHub: https://github.com/teng-lin/notebooklm-py
- Skill self-updates: `notebooklm skill install` (do not copy SKILL.md manually)
