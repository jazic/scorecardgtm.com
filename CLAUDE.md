# CLAUDE.md — Scorecard marketing repo

This repo is the marketing surface for **Scorecard** — public website, design system, and the docs that govern both. Not the product app. Not the model. Just how we explain Scorecard to the world.

## Repo layout

```
/
├── CLAUDE.md                  ← this file
├── index.html                 ← scorecardgtm.com landing page (canonical)
│
├── docs/                      ← high-level vision + plans + tasks
│   ├── vision.md              ← what we sell, who it's for, principles
│   ├── plans/                 ← multi-step plans
│   └── tasks/                 ← smaller scoped items
│
├── design-system/             ← shared visual language
│   ├── system.html            ← live design-system page (tokens, type, components)
│   ├── scorecard-logo-compare.html
│   └── assets/                ← canonical logos and shared images
│       ├── scorecard-logo.svg            ← full logo (mark + wordmark)
│       ├── scorecard-logo-mark-light.svg ← mark only, for light backgrounds
│       ├── scorecard-logo-mark-dark.svg  ← mark only, for dark backgrounds
│       ├── scorecard-logo-v2.svg
│       ├── scorecard-logo-v3.svg
│       ├── scorecard-logo-expressive.svg
│       └── scorecard-logo.png
│
└── .github/workflows/pages.yml ← deploys repo root to GitHub Pages on push to main
```

## How to work in here

- **Start from `docs/vision.md`** for what Scorecard is and who it's for. Anything in `index.html` or `design-system/` should serve that.
- **The landing page is `index.html` at the repo root.** Edit it in place. If a major redesign is needed, branch and PR rather than creating versioned siblings.
- **Logos and shared images live in `design-system/assets/`.** From the root `index.html`, reference them as `design-system/assets/scorecard-logo.svg`. From `design-system/system.html`, reference them as `assets/scorecard-logo.svg`.
- **Plans go in `docs/plans/`, tasks in `docs/tasks/`.** Don't drop loose plan files at the repo root.

## Deploy

GitHub Pages serves the entire repo root from the `main` branch (`.github/workflows/pages.yml`). The canonical landing page is `index.html` at the repo root, so `scorecardgtm.com/` lands directly on it.

## Expansion plan — when, not now

When new surfaces arrive, slot them into this layout. Don't pre-create empty folders.

- **`blog/` or `posts/`** — when we start publishing essays/case studies. Sits at the repo root next to `index.html`. Generate or hand-author HTML; share `design-system/` styles.
- **`emails/`** — when we start running email sequences (intro nurture, post-call follow-up). HTML or markdown templates plus a copy doc per sequence. Use `design-system/` tokens.
- **`brand/`** — when brand assets outgrow `design-system/assets/`. Logos in different lockups, social cards, OG images, brand voice guide, name and tone rules.
- **`case-studies/`** — once we have a real customer. One folder per customer with the public-facing artifact, the private deal context (`docs/`), and any consent/quote-approval notes.
- **`research/`** — competitive teardowns, customer interview notes, ICP research that informs but doesn't ship. Subfolder of `docs/` (`docs/research/`) so it stays separated from public surfaces.
- **`scripts/`** — sales call scripts, demo-loop scripts, objection handling. Plain markdown.
- **`pricing/`** — if pricing becomes more than a single line on the site (tiers, bundles, calculators), it gets its own folder with the source-of-truth doc and the page that renders it.
- **`legal/`** — privacy policy, terms, MSA template, DPA. Markdown source + the public-facing rendered HTML.

Each of these is a real surface with real content. None of them exist yet. Don't create the folder until there's a file to put in it.
