# CLAUDE.md — Scorecard marketing repo

This repo is the marketing surface for **Scorecard** — public website, design system, and the docs that govern both. Not the product app. Not the model. Just how we explain Scorecard to the world.

## Repo layout

```
/
├── CLAUDE.md                       ← this file
│
├── site/                           ← scorecardgtm.com: EmDash CMS + Astro on Cloudflare Workers
│   ├── AGENTS.md                   ← how the site is built (read before changing it)
│   ├── src/                        ← layout, page routes, block components, forms plugin, design CSS/JS
│   ├── seed/seed.json              ← schema + starting content for a fresh database
│   ├── astro.config.mjs            ← EmDash config, email provider, forms plugin, legacy redirects
│   └── wrangler.jsonc              ← Worker, D1 (scorecardgtm-prod), R2, email binding, custom domains
│
├── design-system/                  ← shared visual language (tokens, system page, logos, icons, share image)
│
├── legal/                          ← Privacy and Terms review copies (Markdown) + to-seed.py
│
├── archive/github-pages-site/      ← the retired GitHub Pages site (reference only, not deployed)
│
└── docs/                           ← vision, plans (docs/plans/), tasks (docs/tasks/)
```

## How to work in here

- **Start from `docs/vision.md`** for what Scorecard is and who it's for. Anything in `site/` or `design-system/` should serve that.
- **Copy lives in the CMS**, not in the repo: https://scorecardgtm.com/_emdash/admin (Landing pages, Blog posts, menus, site
  settings; form entries under Form submissions). Since launch the production database is the source of truth for content;
  `site/seed/seed.json` only seeds a fresh database (local dev, a rebuild).
- **Templates and design live in `site/`** — see `site/AGENTS.md`. The homepage markup reproduces the approved v35 design
  (`archive/github-pages-site/index.html`) one-to-one; don't restyle it casually.
- **Design tokens live in `design-system/tokens.css`**. Logos, favicons and the default share image live in `design-system/assets/`
  and are served at `/design-system/...`.
- **Plans go in `docs/plans/`, tasks in `docs/tasks/`.** Don't drop loose plan files at the repo root.
  The launch checklist is `docs/plans/launch-checklist.md`.

## Deploy

From `site/`, with Node 24 (`mise exec node@24 --`): `npm run deploy` (build + `wrangler deploy`). There is no CI deploy;
pushing to GitHub doesn't publish anything. The Worker serves scorecardgtm.com and www (→ apex); workers.dev is off.
Production D1 is `scorecardgtm-prod`. Email goes out from `notifications@tx.scorecardgtm.com` (Cloudflare Email Sending).

## Local dev

```
cd site && npm run dev               # http://localhost:4321, admin at /_emdash/admin
# empty local DB: open /_emdash/api/setup/dev-bypass once to apply the seed
```

On Elsa the dev server is also reachable at https://omarchy-elsa.tail335f2f.ts.net (tailscale serve).

## Expansion plan — when, not now

When new surfaces arrive, slot them into this layout. Don't pre-create empty folders.

- **`emails/`** — when we start running email sequences (intro nurture, post-call follow-up). HTML or markdown templates plus a copy doc per sequence. Use `design-system/` tokens.
- **`brand/`** — when brand assets outgrow `design-system/assets/`. Logos in different lockups, social cards, OG images, brand voice guide, name and tone rules.
- **`case-studies/`** — once we have a real customer. One folder per customer with the public-facing artifact, the private deal context (`docs/`), and any consent/quote-approval notes.
- **`research/`** — competitive teardowns, customer interview notes, ICP research that informs but doesn't ship. Subfolder of `docs/` (`docs/research/`) so it stays separated from public surfaces.
- **`scripts/`** — sales call scripts, demo-loop scripts, objection handling. Plain markdown.
- **`pricing/`** — if pricing becomes more than a single line on the site (tiers, bundles, calculators), it gets its own folder with the source-of-truth doc and the page that renders it.

Each of these is a real surface with real content. None of them exist yet. Don't create the folder until there's a file to put in it.
