# Launch checklist: EmDash site → scorecardgtm.com

Written 2026-11-14 from the state of `cloudflare-astro-migration` (EmDash 1.5.0). Each item says who acts:
**J** = Justin decides or supplies, **C** = Claude can do it, **J+C** = Justin decides, Claude builds.

## 1. Dead links and missing destinations (blockers)

- [x] Sign-up and sign-in point to the app (2026-11-14): every "Start free trial" button and the three
  who-it's-for card links → `https://app.scorecardgtm.com/sign-up`; nav and footer "Sign in" → `/sign-in`.
- [ ] **J** The Teams plan's "Talk about a pilot" link is still `#`. Calendly, mailto or a form?
- [ ] **J** "Contact" and "Talk to us" (homepage FAQ): mailto:hello@scorecardgtm.com, or a page?
- [ ] **J+C** Changelog: the footer link and the "See what's new in the changelog →" link both go to `#`. Either build a changelog page (a `posts`-style collection) or remove both links.
- [ ] **J+C** Privacy and Terms are `#`. Write them, or supply them, and publish as `/privacy` and `/terms` (the `pages` collection or a landing entry). Needed before taking sign-ups or running PostHog session replay.
- [ ] **C** Run a link check on every published page once the above is in (no `#` hrefs except section anchors).

## 2. Content to confirm or replace (blockers)

- [ ] **J** Homepage FAQ: 7 bracketed placeholders, highlighted on the page:
  signup/first-search requirements · geographic coverage, criteria and custom Signal access · source links, checked dates and the correction workflow · contact coverage, plan access and credit costs · CSV availability and fields · trial duration, credits and feature access · card/billing rules, post-trial access and retention.
- [ ] **J** Challenge FAQ: what "accepted" means, and the turnaround time.
- [ ] **J** Coverage card figures, marked `data-placeholder="figures"`: "140+ Signals (+18 this quarter)", "28 data sources (+4)", "Weekly refresh, last update Nov 10". Real numbers, or drop the card.
- [ ] **J** Pricing: confirm $59/month, 14 days / 500 credits, and the 10 comparison rows.
- [ ] **J** Coded example data in the visuals (hero account card, the who-it's-for charts, the agent stages): it's fine as labelled examples. Confirm nothing in them reads as a real customer or a real claim.
- [ ] **J** Final copy read of `/` and `/challenge`, with one eye on the brand voice in `docs/vision.md`.
- [ ] **J+C** Challenge form intake: keep mailto (it fails silently for webmail users without a mail app), or **C** builds a small API route that saves submissions to D1 and emails or notifies you. Recommended: the route, so no submission is lost.

## 3. Legacy pages (decide each)

None of these is linked from the new homepage. Each one ships at its old URL because `sync:legacy` copies it.

| Page | Decision (J) | Then (C) |
| --- | --- | --- |
| `eta-search.html` | keep / rebuild / drop | rebuild as a landing entry, or redirect to `/` |
| `private-equity.html`, `sales-leaders.html`, `ceos-founders.html`, `fractional-outbound.html`, `growth-strategy.html`, `account-scoring.html` | | |
| `how-scorecard-works.html` | probably redirect to `/#how` | |
| `solutions-coming-soon.html`, `what-we-do-coming-soon.html`, `eta-search-wireframe.html` | probably drop | |

- [ ] **C** For anything dropped or rebuilt, add redirects (EmDash redirects or Worker rules) so old URLs and any links already out there don't 404. That includes `/index.html` → `/`.
- [ ] **C** Once `website/` is empty: delete it, `sync:legacy` and `.github/workflows/pages.yml`, and update `CLAUDE.md` (it still describes GitHub Pages).

## 4. Site basics we don't have yet

- [ ] **C** A proper 404 page in the site design. `/anything` currently returns a plain "Not found".
- [ ] **C** `robots.txt` and `sitemap.xml` (check EmDash's built-in sitemap first).
- [ ] **J+C** Social share tags: `og:title/description/image` and Twitter card. **J** approves an OG image, **C** makes one from the design system.
- [ ] **C** Favicons: add an `apple-touch-icon` and an SVG favicon (only `favicon-32.png` exists today).
- [ ] **C** Canonical URL, and set `EMDASH_SITE_URL=https://scorecardgtm.com` so SEO links and passkeys use the real domain.
- [ ] **J** Analytics: confirm PostHog on all pages, with person profiles "always" and session replay on. Add events for "Start free trial" clicks and challenge submissions. A privacy policy mention is required (see 1).
- [ ] **C** Performance: each page inlines about 465 KB of CSS and 175 KB of d3 (`/challenge` needs neither). Measure with Lighthouse, then serve them as cached files or trim them. The homepage visuals must stay identical.

## 5. Production infrastructure (in order)

- [ ] **J** OK the fresh-D1 plan in `plan-cloudflare-emdash-migration.md`. **C** runs it: backup, new D1, deploy, setup wizard (J registers the admin passkey).
- [ ] **J** Check whether Workers Builds is connected. Decide whether pushes to `main` should auto-deploy.
- [ ] **C** Verify on workers.dev: both pages, the CMS edit → publish → page updates (cache), draft preview, and scheduled tasks (the cron runs every minute).
- [ ] **J** Decide on EmDash staging mode (keeps search engines out) for workers.dev until cutover.
- [ ] **J+C** Custom domain: set `EMDASH_SITE_URL`, delete the apex/`www` records pointing at GitHub Pages, add `routes` (apex + `www` → apex redirect) to `wrangler.jsonc`, deploy, then redo the admin passkey on scorecardgtm.com (passkeys are per hostname). Leave `app.` (Vercel) and the Google MX/TXT records alone.
- [ ] **C** After cutover, remove the custom domain from GitHub Pages and delete `pages.yml`.
- [ ] **J** Invite other CMS editors (Settings → Users) once the domain is live.
- [ ] **C** Note the backup story: D1 Time Travel (30 days) plus an occasional `wrangler d1 export`. From launch on, the CMS, not `seed.json`, is the source of truth for copy.

## 6. QA before cutover

- [ ] **C** Screenshots at 1440 / 1024 / 768 / 390 for every page, compared with the approved v35 design.
- [ ] **J** Real devices: iPhone Safari, Mac Safari (nav blur), Chrome, Firefox. Scroll every agent section all the way through.
- [ ] **C** Reduced-motion run: the animations settle, and nothing is hidden.
- [ ] **C** Accessibility: axe/Lighthouse pass, keyboard through the nav, FAQ (expand all), challenge form and buttons, focus rings, contrast on the dark sections.
- [ ] **C** Console clean on every page. No mixed content, no 404s for assets (`/design-system/...`, CRM logos, textures).
- [ ] **J** Submit a real challenge search end to end, and a real trial sign-up once the links exist.
- [ ] **C** Lighthouse performance/SEO scores recorded before and after the performance work.
- [ ] **J+C** After DNS switches: check apex, `www`, HTTPS, old legacy URLs (redirects), the PostHog events arriving, the admin login on the real domain, and that `app.` still works.
