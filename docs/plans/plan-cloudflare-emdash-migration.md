# Plan: GitHub Pages → EmDash + Astro on Cloudflare Workers

## Where we are (2026-11-10)

- `site/` is an EmDash + Astro project (Cloudflare starter, D1 + R2).
- The starter's demo pages are removed. The CMS admin stays at `/_emdash/admin/`.
- The current site is served unchanged. `npm run dev` / `npm run build` copy
  `../website/` and `../design-system/` into `site/public/` (gitignored), so
  `website/` is still the one place to edit the live pages.
- One difference from GitHub Pages: `/eta-search.html` redirects (307) to `/eta-search`.
  That's Cloudflare's default HTML handling. Old links keep working.
- GitHub Pages (`.github/workflows/pages.yml`) still serves production.
- 2026-11-11: deployed to https://scorecardgtm.justinziccardi.workers.dev (D1 `scorecardgtm`,
  R2 `scorecardgtm-media`, KV `scorecardgtm-session`). `EMDASH_ENCRYPTION_KEY` secret set. Steps 1–4 done (admin setup finished on workers.dev).
- DNS: `scorecardgtm.com` is already registered at and served by Cloudflare. No zone move needed.
  `app.` → Vercel and the Google MX/TXT records stay as they are.

Needs Node 24 (`site/.node-version`).

## Homepage in the CMS (2026-11-14)

`/` is now an Astro route (`site/src/pages/index.astro`) that renders the `home` entry of
the `landing` collection. It outputs the same markup as `website/index.html` (v35), so the
design's CSS and JS run unchanged. `website/index.html` stays as-is for GitHub Pages until
cutover; `sync:legacy` no longer copies it into `site/public/`, so it can't shadow the route.

**In the CMS (edit at `/_emdash/admin` → Landing pages → Home):**

- `sections` is a blocks field. One block type per homepage section:
  `hero`, `audiences` (who it's for cards), `how_intro`, `agent` (×3: Search, Research, Score),
  `features`, `pricing`, `faq`, `signup`. Every heading, paragraph, button label/link, card,
  agent step, plan, comparison row and FAQ Q/A on the page is a field.
- Conventions: pricing row `values` are one line per plan (`✓` = check, `—` = dash, anything
  else is bold text). Plan bullets are one per line. FAQ text in `[square brackets]` renders as
  the highlighted placeholder. The highlighted plan leads the mobile cards.
- Menus: `primary` (nav; items with CSS classes render as the Sign in / Start free trial
  buttons), `footer` (footer links), `legal` (Privacy/Terms).
- Site settings: `title` (logo text, footer ©) and `tagline`. The page `<title>` is
  "title: tagline" unless the entry's SEO panel sets one; the meta description is the SEO panel's,
  else the entry's `description` field.
- Drafts, revisions and preview work: previews open at `/{slug}` (`src/pages/[slug].astro`);
  `/home` without a preview token redirects to `/`.

**Still in code (`site/src/components/home/`):** the coded visuals (`visuals/*.html`: hero account
card, the three who-it's-for mini-charts, the three agent stages with their example data, the
feature-card visuals and chips, the lucide icon data URIs), each agent's scroll timing (picked by
the block's `visual` select), "Thinking…/Done", "Coming soon", "Expand all", the pricing check
icon, the logo SVG. CSS is `src/styles/home.css` and the scripts (d3-array, logo, story, jobs, score,
FAQ) are `scripts/*.js.txt`; both are inlined verbatim via `?raw`, as in the static page. Letting Vite
bundle the CSS made Lightning CSS drop the unprefixed `backdrop-filter` (nav blur); `.txt` keeps Vite's
dependency scanner out of the UMD bundle. CRM logos are `src/assets/crm/`.

**Fresh database:** the seed (`site/seed/seed.json`) holds the schema and the full home copy.
Schema applies on the first request; content applies when setup runs (admin wizard with sample
content, or `/_emdash/api/setup/dev-bypass` locally). Production D1 already finished setup with the
starter schema, so the seed won't auto-apply there: before the next deploy, add the block types,
the `landing` collection, menus and the home entry to prod (untested options: `npx emdash site export`
locally then `site import` against prod, or rebuild prod D1 and rerun setup). Until then `/` on prod
returns a 500.

**Still legacy (static, from `website/`):** every other page (`eta-search.html`, `sales-leaders.html`, …).

## Cutover steps

1. `cd site && npx wrangler login`
2. `npm run deploy`. The first deploy creates the D1 database `scorecardgtm` and
   the R2 bucket `scorecardgtm-media`.
3. Right away, open `<workers.dev URL>/_emdash/admin/` and finish setup.
   The first person through the wizard becomes admin.
   Passkeys are tied to a hostname, so for the real domain set `EMDASH_SITE_URL=https://scorecardgtm.com`
   first, or do setup again on the custom domain.
4. `npx wrangler secret put EMDASH_ENCRYPTION_KEY` (the value is in `site/.env`).
5. Optional: connect the repo in Cloudflare (Workers Builds). Use root dir `site`,
   build `npm run build`, and deploy `npx wrangler deploy`.
6. Delete the current apex/`www` DNS records (they point at GitHub Pages), then add
   `"routes": [{ "pattern": "scorecardgtm.com", "custom_domain": true }]` to `wrangler.jsonc`
   (and `www` if we use it).
7. Check the live site, then remove the custom domain from GitHub Pages and delete
   `.github/workflows/pages.yml`.

## After the new design lands

Rebuild pages as Astro routes in `site/src/pages/`, using `design-system/tokens.css`.
Remove each legacy HTML page from `website/` once it has an Astro replacement.
When `website/` is empty, delete it and the `sync:legacy` script.
