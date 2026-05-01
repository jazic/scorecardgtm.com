# CLAUDE.md — Scorecard marketing repo

This repo is the marketing surface for **Scorecard** — public website, design system, and the docs that govern both. Not the product app. Not the model. Just how we explain Scorecard to the world.

## Repo layout

```
/
├── CLAUDE.md                       ← this file
│
├── website/                        ← scorecardgtm.com publish root
│   ├── index.html                  ← canonical landing page
│   └── design-system → ../design-system  (symlink, for local dev)
│
├── design-system/                  ← shared visual language
│   ├── tokens.css                  ← canonical design tokens (linked by both pages)
│   ├── system.html                 ← live design-system page (logo, color, type, components)
│   ├── scorecard-logo-compare.html
│   └── assets/                     ← canonical logos and shared images
│       ├── scorecard-logo.svg              ← full logo (mark + wordmark)
│       ├── scorecard-logo-mark-light.svg   ← mark only, light backgrounds
│       ├── scorecard-logo-mark-dark.svg    ← mark only, dark backgrounds
│       ├── scorecard-logo-v2.svg
│       ├── scorecard-logo-v3.svg
│       ├── scorecard-logo-expressive.svg
│       └── scorecard-logo.png
│
├── docs/                           ← high-level vision + plans + tasks
│   ├── vision.md                   ← what we sell, who it's for, principles
│   ├── plans/                      ← multi-step plans
│   └── tasks/                      ← smaller scoped items
│
└── .github/workflows/pages.yml     ← assembles website/ + design-system/ into _site/
```

## How to work in here

- **Start from `docs/vision.md`** for what Scorecard is and who it's for. Anything in `website/` or `design-system/` should serve that.
- **The landing page is `website/index.html`.** Edit it in place. If a major redesign is needed, branch and PR rather than creating versioned siblings.
- **Design tokens live in `design-system/tokens.css`** — the single source of truth, linked by both `website/index.html` and `design-system/system.html`. Two tiers: brand primitives (`--sc-gold/green/blue/purple/ink`) and semantic tokens (`--bg-1..2`, `--fg-1..5`, `--border`, `--hairline`, `--shadow-soft/card/modal`, etc.). Edit tokens here; both pages pick them up automatically.
- **Logos and shared images live in `design-system/assets/`.** From `website/index.html`, reference them as `design-system/assets/scorecard-logo.svg` (a symlink at `website/design-system → ../design-system` makes that path resolve in local dev). From `design-system/system.html`, reference them as `assets/scorecard-logo.svg`.
- **Plans go in `docs/plans/`, tasks in `docs/tasks/`.** Don't drop loose plan files at the repo root.

## Deploy

GitHub Pages publishes from `main`. The workflow (`.github/workflows/pages.yml`) does a small assembly step:

```
mkdir -p _site
rsync -a --exclude='design-system' website/ _site/   # everything in website/ → deploy root
cp -R design-system _site/design-system               # design-system/ alongside it
```

So `scorecardgtm.com/` lands on `website/index.html`, and `design-system/...` paths resolve to the real `design-system/` directory at the deploy root. Internal docs (`docs/`, `CLAUDE.md`, `.github/`) stay out of the artifact.

## Local dev

```
python3 -m http.server 8000          # from repo root
open http://localhost:8000/website/
```

The `website/design-system` symlink makes `design-system/...` paths in `website/index.html` resolve to the real `design-system/` directory. Same paths work in production after the workflow's assembly step.

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
