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
- [x] **A7.** Performance (CSS and scripts now static cached files: page HTML 838→96 KB home, 693→26 KB contact). Was:: pages without agent sections still inline the 175 KB d3/topojson bundle (the logo script needs it),
  and every page inlines 465 KB of CSS. Measure with Lighthouse; trim or serve as cached files only if it matters. Homepage visuals stay identical.
- [x] **A8.** Decided: no confirmation email for launch. Automatic confirmation email to people who submit a form.
- [ ] **A9. C (optional)** Cloudflare Turnstile on the forms if spam appears (honeypot only today).

## B. Final production rebuild (Claude, after A)

- [ ] **B1. C** Fresh D1 from the final seed, deploy, J runs the setup wizard with sample content (same steps as 2026-11-14,
  see `plan-cloudflare-emdash-migration.md`). Old DBs stay for rollback.
- [ ] **B2. C** Verify on workers.dev: every page, redirects, both forms (CMS record + email), CMS edit → publish → page updates,
  draft preview, Admin → Settings → Email → Send test email.

## C. Content (Justin, in the production CMS, after B)

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

## D. QA (before cutover)

- [ ] **C** Screenshots at 1440 / 1024 / 768 / 390 for every page; console clean; no asset 404s.
- [ ] **C** Accessibility pass (axe/Lighthouse, keyboard through nav, FAQ, forms; focus rings; contrast on dark sections); reduced-motion run.
- [ ] **J** Real devices: iPhone Safari, Mac Safari (nav blur), Chrome, Firefox; scroll every agent section through.
- [ ] **J** A real challenge submission and a real trial sign-up end to end.

## E. Cutover

- [ ] **J** Root-domain DMARC: TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:hello@scorecardgtm.com` (dashboard; Wrangler can't edit DNS).
- [ ] **C** Set `EMDASH_SITE_URL=https://scorecardgtm.com`; add `routes` for the apex (and `www` → apex) to `wrangler.jsonc`.
- [ ] **J+C** Delete the apex/`www` records pointing at GitHub Pages, deploy, then register the admin passkey again on scorecardgtm.com
  (passkeys are per hostname). Leave `app.` (Vercel) and the Google MX/TXT records alone.
- [ ] **J+C** Check apex, `www`, HTTPS, legacy redirects, forms and email, PostHog events, admin login, and that `app.` still works.
- [ ] **C** Remove the custom domain from GitHub Pages; delete `website/` and `.github/workflows/pages.yml`; update `CLAUDE.md`.
- [ ] **J** Invite other CMS editors. Decide whether Workers Builds should auto-deploy `main` (not connected today).

## Done

- Sign-up and sign-in links → app; contact page; forms plugin saving to **Form submissions** and emailing hello@.
- Email Sending on `tx.scorecardgtm.com` (Cloudflare-managed SPF/DKIM/DMARC), delivery verified; hello@ is an alias of justin@.
- Audience pages, Privacy and Terms drafts (`legal/`), legacy redirects, EmDash 1.5.0.
- First production deploy on a fresh D1 (`scorecardgtm-v2`), pages and forms verified on workers.dev.
- Backups: D1 Time Travel covers 30 days. `wrangler d1 export` fails on EmDash's FTS5 tables, so record a bookmark
  (`wrangler d1 time-travel info <db>`) before risky changes.
