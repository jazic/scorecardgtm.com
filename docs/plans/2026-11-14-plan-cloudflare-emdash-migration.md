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
starter schema, so the seed won't auto-apply there. Until that's fixed, `/` on prod returns a 500. See the plan below.

### Getting the new schema + content into production D1 (done 2026-11-14)

**Done 2026-11-14.** New D1 `scorecardgtm-v2` (`31927595-b9dd-442d-9efd-82ab561af3ca`) deployed, setup wizard run with sample
content, all pages and both forms checked on workers.dev. The old `scorecardgtm` D1 is untouched. `wrangler d1 export` fails
on databases with FTS5 tables, so instead of an SQL dump the restore point is a Time Travel bookmark,
`00000018-000005fc-00005123-45447c524c3fce0228dd3bd7954d1faf` (saved in `~/src/scorecardgtm-backups/`, valid 30 days).
Rollback version: `0a8edcff-febf-4922-9e6c-2b1cd4d3eba6`. Until launch, treat the production DB as scratch: copy changes go
into `seed/seed.json`, and the production DB is rebuilt from it once more (a fresh D1 + setup) just before cutover.

The plan as proposed:

Nothing below has been run against production. Prod today is workers.dev only, the D1 holds the
starter schema, maybe the starter sample posts, and one admin passkey. Nothing in it is worth keeping.

**Options looked at:**

- `emdash seed`: local only. It writes a SQLite file (`--database ./data.db`) and can't reach remote D1.
- `emdash site export` (local dev) → `emdash site import --url <prod>`: only imports into an *empty*
  site. Prod finished setup, so its seeded scaffold is allowed, but any starter entries or menu rows block
  the import (`TRANSFER_TARGET_NOT_EMPTY`). We'd only find out by running `--analyze` against prod.
  It's also the path we've tested least.
- Adding the schema one piece at a time through the API/CLI (`schema create`, block types, menus,
  content): 8 block types plus nested repeaters. A lot of hand work, easy to get subtly wrong.
- **Fresh D1 + rerun setup (recommended).** It's the same path the local dev setup takes, and that's
  tested: an empty DB gets the schema from `seed/seed.json` on the first request, and the setup wizard
  applies the content (home, challenge, menus). Rollback is a one-line binding change, and the old DB
  stays untouched.

**Steps (from `site/`, prefix with `mise exec node@24 --`):**

```bash
npx wrangler whoami                                   # logged in to the right account
npx wrangler d1 export scorecardgtm --remote --output ../scorecardgtm-d1-backup-$(date +%F).sql   # backup (keep out of git)
npx wrangler deployments list                         # note the current version id, for rollback
npx wrangler d1 create scorecardgtm-v2                # prints the database_id
```

Edit `wrangler.jsonc`: under `d1_databases`, set `"database_name": "scorecardgtm-v2"` and
`"database_id": "<id from create>"`. Leave the binding as `DB`. Then:

```bash
npm run deploy
# right away (first person through the wizard becomes admin):
open https://scorecardgtm.justinziccardi.workers.dev/_emdash/admin/
#   site title "Scorecard", tagline "Target prospects worth the extra effort." (the wizard writes these over the seed's),
#   tick "include sample content" (this is what applies the home/challenge entries and menus), register the passkey.
curl -sI https://scorecardgtm.justinziccardi.workers.dev/ | head -1            # expect 200
curl -sI https://scorecardgtm.justinziccardi.workers.dev/challenge | head -1   # expect 200
```

The `EMDASH_ENCRYPTION_KEY` secret, R2 and KV carry over, since they don't depend on the DB. Old KV
sessions point at users in the old DB and simply stop working. Log in again.

**Rollback:** `npx wrangler rollback <previous version id>`. A version carries its bindings, so this
puts the Worker back on `scorecardgtm`. Or revert the `wrangler.jsonc` change and run `npm run deploy`.
The old DB is never written to, so it's always there to go back to. Once v2 has been live for a while,
`npx wrangler d1 delete scorecardgtm`, and optionally rename v2 in config only (D1 names can't be renamed).

**Before running:** check whether Workers Builds (cutover step 5) is connected. If it is, a push to
`main` would deploy and could beat this procedure.

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
