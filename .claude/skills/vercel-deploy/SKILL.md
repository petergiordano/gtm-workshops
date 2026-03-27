---
name: vercel-deploy
description: Use this skill when the user wants to deploy to Vercel, set up a new Vercel project, troubleshoot a deployment, manage environment variables, or run a local Vercel dev server. Triggers on phrases like "deploy this", "push to Vercel", "set up Vercel", "vercel dev isn't working", "preview deployment", "production deploy", or any Vercel-related task.
---

This skill covers the full Vercel deployment workflow — from initial project setup through production deploy and environment variable management. Follows Pete's standard Vercel setup from _reusable_resources.

## Pre-flight checks

Before any deploy, verify:
- [ ] `vercel.json` exists and matches project type (static, SPA, SPA+API, API-only)
- [ ] `.env.local` exists with all required variables (run `vercel env pull .env.local` if not)
- [ ] `.gitignore` includes `.vercel`, `.env.local`, `.env*.local`
- [ ] `.env.example` documents all required keys (without values)
- [ ] No secrets hardcoded anywhere in the codebase

If any check fails, fix it before deploying.

## Standard deploy sequence

### Local development
```bash
vercel dev          # local server with serverless function support
                    # use this instead of npm run dev for API routes
```

### Preview deploy (staging)
```bash
vercel              # deploys to a preview URL
                    # safe to run at any time, does not affect production
```

### Production deploy
```bash
vercel --prod       # deploys to production domain
                    # confirm this is intentional before running
```

## New project setup

Run once when connecting a project to Vercel for the first time:

```bash
# 1. Install Vercel CLI if needed
npm install -g vercel

# 2. Link to Vercel project (creates .vercel/ directory)
vercel link

# 3. Pull environment variables
vercel env pull .env.local

# 4. Verify local dev works
vercel dev
```

Config templates in: `_reusable_resources/reference/deployment-configs/vercel/`
- `vercel-static-site.json` — HTML/CSS/JS, no backend
- `vercel-react-spa.json` — React or Vite with client-side routing
- `vercel-spa-with-api.json` — SPA + serverless functions
- `vercel-api-only.json` — serverless functions only

## Environment variables

Managed in Vercel dashboard: Settings > Environment Variables.

```bash
vercel env pull .env.local      # pull all env vars to local file
vercel env add KEY              # add a new variable interactively
vercel env ls                   # list all variables
```

Never commit `.env.local`. Document all keys in `.env.example` with placeholder values.

## API routes (SPA+API and API-only projects)

Files in `api/` become serverless endpoints automatically:
- `api/search.js` → `/api/search`
- `api/data/users.js` → `/api/data/users`

Reference pattern: `_reusable_resources/reference/backend-patterns/vercel-api/api-function-template.js`
Covers: CORS, request validation, error handling, environment variable access.

## Common issues and fixes

**Build fails — missing env variable**
- Check build logs for the specific variable name
- Add it in Vercel dashboard, then redeploy
- Never hardcode — always use `process.env.VARIABLE_NAME`

**API route returns 404**
- Verify file is in `api/` directory at project root
- Check `vercel.json` rewrites if using custom routing
- Run `vercel dev` locally to test before deploying

**`vercel dev` fails to start**
- Run `vercel link` first if `.vercel/` directory is missing
- Check Node version matches Vercel's expected version in dashboard

**Preview and production show different behavior**
- Confirm env variables are set for both Preview and Production environments in dashboard
- Check `vercel.json` for environment-specific configuration

## CLAUDE.md deployment section template

When bootstrap adds Vercel setup to a project CLAUDE.md:

```markdown
## Deployment
Hosted on Vercel. Config in `vercel.json`.

Local dev: `vercel dev`
Preview: `vercel`
Production: `vercel --prod`

Env vars: managed in Vercel dashboard. Pull with `vercel env pull .env.local`.
Never commit `.env.local`. Document keys in `.env.example`.
```
