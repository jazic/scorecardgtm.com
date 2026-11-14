# Launch checklist: EmDash site → scorecardgtm.com

Updated 2026-11-14 (`cloudflare-astro-migration`, EmDash 1.5.0). **J** = Justin decides or supplies, **C** = Claude builds.

**Order:** finish the code blockers (A), rebuild the production DB once from the final seed (B), then Justin edits content
in the production CMS (C) while QA runs (D), then cutover (E). After step B, production is the source of truth for copy.
EmDash only installs schema (block types, collections) when a fresh database is set up, so any schema change after B goes
through the EmDash CLI/API instead of `seed.json`.

## Pages going to production

| Page | URL | Code | Content (CMS) |
| --- | --- | --- | --- |
| Home | `/` | Done | FAQ placeholders, coverage figures, pricing |
| Challenge | `/challenge` | Done (form → CMS + email) | Acceptance and turnaround FAQ |
| Contact | `/contact` | Done (form → CMS + email) | Reply-time promise |
| Acquisition search | `/acquisition-search` | Done | Two FAQ placeholders |
| Sales teams | `/sales-teams` | Done (`audience_hero`, `points`, `faq`, `signup` blocks) | Placeholder: write it out like acquisition search |
| Founders and CEOs | `/founders` | Done (same blocks) | Placeholder: same |
| Privacy | `/privacy` | Done (`prose` block) | Draft: [bracketed] facts and a lawyer review |
| Terms | `/terms` | Done (`prose` block) | Draft: same |
| About | `/about` | Ready: create a landing entry with slug `about` from the existing blocks | Optional |
| Blog | `/blog`, `/blog/{slug}`, `/blog/tag/new-feature` (changelog) | Done | Posts; tag new features "New feature" |
| 404 | unknown URLs | Done | – |
| App sign-up / sign-in | `app.scorecardgtm.com/sign-up`, `/sign-in` | Linked | – |

Not shipping: the 11 legacy `website/` pages. They now 301 to their new homes (`site/astro.config.mjs`).

## A. Code blockers (Claude, before the final production rebuild)

- [x] **A1.** Blog (2026-11-14): `/blog`, `/blog/{slug}`, `/blog/tag/{tag}`; the changelog is `/blog/tag/new-feature` ("What's new"), and the footer "Changelog" and coverage card link point there. Was: Blog and Changelog: build `/blog` (list + post template on `posts`) and/or a changelog,
  or launch without them. If without: the footer "Changelog" and the coverage card's changelog link are removed in the CMS (content).
- [x] **A2.** A 404 page in the site design (unknown URLs return a plain "Not found" today).
- [x] **A3.** SEO basics (sitemap and robots.txt are EmDash's built-ins; known limit: the sitemap lists `/home`, which 301s to `/`): `robots.txt`, sitemap, canonical URLs, `og:`/Twitter tags with a default share image
  (made from the design system, J approves), `apple-touch-icon` + SVG favicon.
- [x] **A4.** Keep workers.dev out of search engines until cutover (`noindex` on any host other than scorecardgtm.com).
- [x] **A5.** (Dropped the rule: the texture was never visible in the approved v35 page. It's in `mockups/textures/v15/` if wanted.) Fix the missing `textures/v15/close-halftone-bg.svg` (sign-up section background): find the asset or drop the rule.
- [x] **A6.** PostHog events (`start_trial_click`, `sign_in_click`, `form_submit`): "Start free trial" clicks, "Sign in" clicks, contact and challenge submissions.
- [x] **A10.** Layout renders `EmDashHead`/`EmDashBodyStart`/`EmDashBodyEnd` (2026-11-14): each entry's SEO panel, JSON-LD,
  verification tags, the staging noindex and plugin contributions now apply.
- [x] **A7.** Performance (CSS and scripts now static cached files: page HTML 838→96 KB home, 693→26 KB contact). Was:: pages without agent sections still inline the 175 KB d3/topojson bundle (the logo script needs it),
  and every page inlines 465 KB of CSS. Measure with Lighthouse; trim or serve as cached files only if it matters. Homepage visuals stay identical.
- [x] **A8.** Decided: no confirmation email for launch. Automatic confirmation email to people who submit a form.
- [ ] **A9. C (optional)** Cloudflare Turnstile on the forms if spam appears (honeypot only today).

## B. Final production rebuild (Claude, after A)

- [x] **B1.** (2026-11-14: `scorecardgtm-prod`, `7b692332-97c8-4ca4-9c16-0870d81e7665`. Pick **"Sample content"** in the wizard; "Empty site" loads menus only.) Fresh D1 from the final seed, deploy, J runs the setup wizard with sample content (same steps as 2026-11-14,
  see `plan-cloudflare-emdash-migration.md`). Old DBs stay for rollback.
- [x] **B2.** (2026-11-14: all pages, blog, 404, redirects, sitemap, noindex, both forms saved and emailed, console clean. CMS publish flow and Settings → Email test left for J while editing.) Verify on workers.dev: every page, redirects, both forms (CMS record + email), CMS edit → publish → page updates,
  draft preview, Admin → Settings → Email → Send test email.

## C. Content (Justin, in the production CMS: https://scorecardgtm.justinziccardi.workers.dev/_emdash/admin/)

Delete the two "Claude (launch check)" entries under Form submissions when convenient.

- [ ] Homepage FAQ: 7 bracketed placeholders (sign-up, coverage and criteria, sources and corrections, contact data, CSV export, trial, billing).
- [ ] Coverage card: real numbers for Signals, sources and refresh, and the source chips, or remove the card.
- [ ] Pricing: $59/month, 14 days / 500 credits, the 10 comparison rows.
- [ ] Challenge FAQ: what "accepted" means and the turnaround; contact and challenge success messages (reply time).
- [ ] Acquisition search FAQ: CSV upload of an existing list, coverage.
- [ ] Sales teams and founders pages (the old `sales-leaders.html`/`ceos-founders.html` in git history are a starting point).
- [ ] Privacy and Terms: entity, address, governing law, payment processor, AI and data providers, retention, trial and credit rules,
  sources and contact data in results. Lawyer review. (Review copies in `legal/`.)
- [ ] Blog posts: replace or edit the first post; tag feature launches "New feature". Optional About page.
- [ ] Example data in the coded visuals: confirm nothing reads as a real customer or claim (that one is code; tell Claude what to change).
- [ ] Final copy read of every page against `docs/vision.md`.

### EmDash settings worth setting (Admin → Settings, any time)

- [ ] **J** Timezone and date format (blog dates); social links (LinkedIn) in site settings.
- [ ] **J** SEO: decide "ask AI crawlers not to train on the site" (robots.txt rule); title separator.
- [ ] **J** Settings → Email: Send test email (Cloudflare provider, `notifications@tx.scorecardgtm.com`).
- [ ] **J** Users: invite editors; don't add allowed self-signup domains unless everyone at that domain should get access.
- Not needed: site favicon/logo and the default share image in settings (the layout ships the dot-mark icons and
  `og-default.png`); search, comments, widgets, i18n. Optional later: an `objectCache` (KV) or Astro route cache to cut D1 reads.

## D. QA (before cutover)

- [ ] **C** Screenshots at 1440 / 1024 / 768 / 390 for every page; console clean; no asset 404s.
- [ ] **C** Accessibility pass (axe/Lighthouse, keyboard through nav, FAQ, forms; focus rings; contrast on dark sections); reduced-motion run.
- [ ] **J** Real devices: iPhone Safari, Mac Safari (nav blur), Chrome, Firefox; scroll every agent section through.
- [ ] **J** A real challenge submission and a real trial sign-up end to end.

## E. Cutover

Rollback for DNS: GitHub Pages used the standard records, apex `A` 185.199.108.153 / .109 / .110 / .111 (proxied) and
`www` CNAME `jazic.github.io`. Removing the Worker custom domains and recreating those records puts the old site back.
Gotcha (2026-11-14): adding `routes` makes Wrangler turn workers.dev off unless `workers_dev: true` is set. It's set now.
A deploy that fails on the custom-domain step stops before it re-enables workers.dev. Fix:
`POST /accounts/{id}/workers/scripts/scorecardgtm/subdomain {"enabled":true}`.

- [x] (2026-11-14) Root-domain DMARC: TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:hello@scorecardgtm.com` (dashboard; Wrangler can't edit DNS).
- [ ] **J** Admin → Settings: turn **staging** off (the wizard turns it on; it adds `noindex` everywhere), set **Site URL** to
  `https://scorecardgtm.com` (sitemap, robots.txt and JSON-LD use it), and add the **Google Search Console** (and Bing) verification codes.
- [x] **2026-11-14 cutover done:** apex and www are Worker custom domains (www → apex in `src/worker.ts`); all pages, redirects and forms checked on scorecardgtm.com. `EMDASH_SITE_URL` deliberately not set (it would pin passkeys to the apex and lock out workers.dev). Was: Set `EMDASH_SITE_URL=https://scorecardgtm.com`; add `routes` for the apex (and `www` → apex) to `wrangler.jsonc`.
- [x] Delete the apex/`www` records pointing at GitHub Pages, deploy, then register the admin passkey again on scorecardgtm.com
  (passkeys are per hostname). Leave `app.` (Vercel) and the Google MX/TXT records alone.
- [x] Check apex, `www`, HTTPS, legacy redirects, forms and email, PostHog events, admin login, and that `app.` still works.
- [ ] **C** Remove the custom domain from GitHub Pages; delete `website/` and `.github/workflows/pages.yml`; update `CLAUDE.md`.
- [ ] **C** Delete the old D1 databases `scorecardgtm` (starter schema) and `scorecardgtm-v2` (test run) once launch is stable.
- [ ] **J** Invite other CMS editors. Decide whether Workers Builds should auto-deploy `main` (not connected today).

### After cutover
- [x] Settings (2026-11-14, via API): staging **off**, Site URL `https://scorecardgtm.com` (the domain-verify endpoint can't reach its own Worker, so set through settings `url`).
- [ ] **J** Sign in on scorecardgtm.com/_emdash/admin with the email link and add a passkey (the workers.dev passkey doesn't work on the domain).
- [x] Always Use HTTPS on (2026-11-14; http → https 301).
- [x] Google Search Console: domain property verified (DNS TXT), sitemap submitted (2026-11-14). Cloudflare managed robots.txt blocks AI-training crawlers.
- [x] workers.dev and preview URLs off (2026-11-14).
- [x] GitHub Pages unpublished (`gh api -X DELETE …/pages`), workflow removed, `website/` archived to `archive/github-pages-site/` (2026-11-14). CLAUDE.md rewritten for the new setup.
- [ ] **J** Merge the `cloudflare-astro-migration` PR into `main`.
- [x] Old D1s `scorecardgtm` and `scorecardgtm-v2` deleted; test form submissions deleted (2026-11-14). Prod Time Travel bookmark saved in `~/src/scorecardgtm-backups/`.

## Done

- Sign-up and sign-in links → app; contact page; forms plugin saving to **Form submissions** and emailing hello@.
- Email Sending on `tx.scorecardgtm.com` (Cloudflare-managed SPF/DKIM/DMARC), delivery verified; hello@ is an alias of justin@.
- Audience pages, Privacy and Terms drafts (`legal/`), legacy redirects, EmDash 1.5.0.
- First production deploy on a fresh D1 (`scorecardgtm-v2`), pages and forms verified on workers.dev.
- Backups: D1 Time Travel covers 30 days. `wrangler d1 export` fails on EmDash's FTS5 tables, so record a bookmark
  (`wrangler d1 time-travel info <db>`) before risky changes.
