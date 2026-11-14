This is an EmDash site -- a CMS built on Astro with a full admin UI.

## Commands

```bash
npm run dev              # Start the Astro dev server
npx emdash types      # Regenerate TypeScript types from a running site
```

The admin UI is at `http://localhost:4321/_emdash/admin`.

## Key Files

| File                     | Purpose                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `astro.config.mjs`       | Astro config with `emdash()` integration, database, and storage                    |
| `src/live.config.ts`     | EmDash loader registration (boilerplate -- don't modify)                           |
| `seed/seed.json`         | Schema definition + demo content (collections, fields, taxonomies, menus, widgets) |
| `emdash-env.d.ts`        | Generated types for collections (auto-regenerated on dev server start)             |
| `src/components/home/`   | Homepage layout, one component per block type, coded visuals and design scripts    |
| `src/pages/`             | Astro pages -- all server-rendered                                                 |

## Skills

Agent skills are in `.agents/skills/`. Load them when working on specific tasks:

- **building-emdash-site** -- Querying content, rendering Portable Text, schema design, seed files, site features (menus, widgets, search, SEO, comments, bylines). Start here.
- **creating-plugins** -- Building EmDash plugins with hooks, storage, admin UI, API routes, and Portable Text block types.
- **emdash-cli** -- CLI commands for content management, seeding, type generation, and visual editing flow.

## Documentation

The EmDash docs are available as an MCP server at `https://docs.emdashcms.com/mcp`. When you need to verify an API, hook, config option, field type, or pattern, call `search_docs` against the live documentation rather than relying on training-data recall. The docs reflect current behaviour; assumptions may not.

This template ships with `.mcp.json`, `.cursor/mcp.json`, and `.vscode/mcp.json` so Claude Code, Cursor, and VS Code auto-discover the docs server. Other tools (OpenCode, Windsurf, etc.) need a manual one-time setup -- see [docs.emdashcms.com/docs-mcp](https://docs.emdashcms.com/docs-mcp).

## Rules

- All content pages must be server-rendered (`output: "server"`). No `getStaticPaths()` for CMS content.
- Image fields are objects (`{ src, alt }`), not strings. Use `<Image image={...} />` from `"emdash/ui"`.
- `entry.id` is the slug (for URLs). `entry.data.id` is the database ULID (for API calls like `getEntryTerms`).
- When Astro's cache is enabled, pass content-query hints to `Astro.cache.set(cacheHint)`. Use the `WithCacheHint` variants for site settings, menus, taxonomies, and widget areas rendered by cached routes.
- Taxonomy names in queries must match the seed's `"name"` field exactly (e.g., `"category"` not `"categories"`).

## This Site

Scorecard's marketing site. `/` is the homepage, rendered from the CMS by `src/pages/index.astro`
with the components in `src/components/home/`. Its markup matches the approved static design
(`../website/index.html`) one-to-one, so the design CSS (`src/styles/home.css`, inlined) and scripts
(`src/components/home/scripts/*.js.txt`, inlined) run unchanged. Don't restyle or restructure the
markup in the components; edit copy in the CMS.

Every other page is still legacy static HTML: `npm run dev`/`build` run `sync:legacy`, which copies
`../website/` (minus `index.html`) and `../design-system/` into `public/` (gitignored).

## Pages

| Page         | Path      | What it shows                                                     |
| ------------ | --------- | ----------------------------------------------------------------- |
| Home         | `/`       | `landing` entry `home`                                            |
| Landing page | `/[slug]` | Other `landing` entries and draft previews (`/home` redirects `/`) |
| Legacy pages | `/*.html` | Static files from `../website/`                                   |

## Schema

- `landing` collection (drafts, revisions, preview, SEO): `title`, `description` (meta description
  fallback), `sections` (blocks).
- Block types, one per homepage section: `hero`, `audiences`, `how_intro`, `agent`, `features`,
  `pricing`, `faq`, `signup`. `how_intro` and the `agent` blocks after it render inside one
  `.agents` wrapper with the step bar. `agent.visual` (search|signals|score), `audiences` card
  `visual` and `features` card `visual` pick coded visuals in `src/components/home/visuals/`.
- Text conventions: pricing row `values` and plan `card_features` are one item per line (`✓`/`—` in
  values render the check/dash); FAQ `[bracketed text]` renders as a placeholder highlight.
- Menus: `primary` (items with CSS classes render as buttons), `footer`, `legal`.
- Site settings: `title` (logo, ©) and `tagline` (default `<title>` is "title: tagline").
- Starter `posts` and `pages` collections and the `category`/`tag` taxonomies are kept but have no routes.

The seed (`seed/seed.json`) carries the schema and the full homepage copy. Schema applies on the first
request to an empty database; content applies when setup runs (admin wizard with sample content, or
`/_emdash/api/setup/dev-bypass` in dev).

## Visual character

Defined by the design system (`../design-system/`) and the approved homepage design. See `../CLAUDE.md`.
