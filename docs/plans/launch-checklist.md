# Launch checklist: EmDash site → scorecardgtm.com

Written 2026-11-14 from the state of `cloudflare-astro-migration` (EmDash 1.5.0). Each item says who acts:
**J** = Justin decides or supplies, **C** = Claude can do it, **J+C** = Justin decides, Claude builds.

## Pages going to production

| Page | URL | Status |
| --- | --- | --- |
| Home | `/` | Built (`landing` entry `home`). Copy placeholders to resolve (section 2). |
| Challenge | `/challenge` | Built. Form saves to the CMS and emails the team. Two FAQ answers to confirm. |
| Contact | `/contact` | Built 2026-11-14. Form saves to the CMS and emails the team. |
| Privacy | `/privacy` | **Missing.** Nothing exists today (scorecardgtm.com and app.scorecardgtm.com both 404). |
| Terms | `/terms` | **Missing.** Same. |
| About | `/about` | Maybe. Decide (J). |
| Blog | `/blog`, `/blog/{slug}` | Maybe. The starter `posts` collection is ready, but it has no routes or design yet. |
| 404 | any unknown URL | **Missing.** Needs a designed page (section 4). |
| App sign-up | `https://app.scorecardgtm.com/sign-up` | Linked from every "Start free trial". |
| App sign-in | `https://app.scorecardgtm.com/sign-in` | Linked from nav and footer "Sign in". |

Not shipping: the 11 legacy pages in `website/` (see section 3).

## 1. Dead links and missing destinations (blockers)

- [x] Sign-up and sign-in point to the app (2026-11-14): every "Start free trial" button and the three
  who-it's-for card links → `https://app.scorecardgtm.com/sign-up`; nav and footer "Sign in" → `/sign-in`.
- [x] Contact page (2026-11-14). Footer "Contact", both FAQ "Talk to us" links and the Teams "Talk about a pilot" → `/contact`.
- [ ] **J+C** Privacy and Terms are `#`, and no version exists anywhere today. **J** supplies the policy text
  (lawyer, Termly/iubenda, or a draft from Claude for review), **C** publishes `/privacy` and `/terms`
  and links them. Needed before taking sign-ups or form submissions, and because PostHog session replay runs
  on every page. The privacy policy has to mention PostHog, the form data we store, and Cloudflare.
- [ ] **J+C** Changelog: the footer link and the "See what's new in the changelog →" link both go to `#`. Either build a changelog page (a `posts`-style collection) or remove both links.
- [ ] **J** About and Blog: in or out for launch? If in, **C** builds `/about` (landing entry) and `/blog` (a list plus
  post template on the `posts` collection, in the homepage design).
- [ ] **C** Run a link check on every published page once the above is in (no `#` hrefs except section anchors).

## 1b. Forms and transactional email

Built 2026-11-14: a `forms` EmDash plugin (`site/src/plugins/forms.ts`) takes contact and challenge posts, saves
each one as a draft in the **Form submissions** collection in the CMS, and emails the team. Email goes through
EmDash's Cloudflare provider, `cloudflareEmail()`, over Cloudflare Email Sending. The same provider sends the CMS's
own mail: sign-in links, invites and account recovery. Tested in dev: saving, validation, honeypot, cross-origin
blocking, and drafts not reachable without login. In dev, Wrangler writes each email to `site/.wrangler/tmp/email/`
instead of sending it.

- [ ] **J** Onboard `scorecardgtm.com` in Cloudflare → Email → Email Sending (adds SPF/DKIM records; leaves the Google MX alone).
  Confirm the sender `notifications@scorecardgtm.com` and the notification recipient `hello@scorecardgtm.com`.
  Both are set in `site/astro.config.mjs`.
- [ ] **J** Check that `hello@scorecardgtm.com` is a real inbox (Google Workspace) that someone reads.
- [ ] **C** After deploy: Admin → Settings → Email → Send test email, then one real submission of each form.
- [ ] **J** Decide whether submitters get an automatic confirmation email ("we got your search"). **C** adds it to the plugin if yes.
- [ ] **C** If spam shows up: add Cloudflare Turnstile to both forms (today there's only a honeypot).
- [ ] **C** Known limit: when validation fails without JavaScript, the redirect back clears what was typed.
  The browser's own `required` checks catch most of it first. Add JS submit-in-place if it matters.

## 2. Content to confirm or replace (blockers)

- [ ] **J** Homepage FAQ: 7 bracketed placeholders, highlighted on the page:
  signup/first-search requirements · geographic coverage, criteria and custom Signal access · source links, checked dates and the correction workflow · contact coverage, plan access and credit costs · CSV availability and fields · trial duration, credits and feature access · card/billing rules, post-trial access and retention.
- [ ] **J** Challenge FAQ: what "accepted" means, and the turnaround time.
- [ ] **J** Contact and challenge success messages promise "a reply within one business day" and a list "by email". Confirm we can keep that.
- [ ] **J** Coverage card figures, marked `data-placeholder="figures"`: "140+ Signals (+18 this quarter)", "28 data sources (+4)", "Weekly refresh, last update Nov 10". Real numbers, or drop the card.
- [ ] **J** Pricing: confirm $59/month, 14 days / 500 credits, and the 10 comparison rows.
- [ ] **J** Coded example data in the visuals (hero account card, the who-it's-for charts, the agent stages): it's fine as labelled examples. Confirm nothing in them reads as a real customer or a real claim.
- [ ] **J** Final copy read of `/`, `/challenge` and `/contact`, with one eye on the brand voice in `docs/vision.md`.

## 3. Legacy pages: not shipping

Decided 2026-11-14: none of the `website/` pages go to production. The build no longer copies them
(`sync:design-system` copies only `design-system/`). All 11 still return 200 on scorecardgtm.com today, so cutover needs redirects:

- [ ] **C** 301 redirects to `/` (or a better match) for `account-scoring`, `ceos-founders`, `eta-search`, `eta-search-wireframe`,
  `fractional-outbound`, `growth-strategy`, `private-equity`, `sales-leaders`, `solutions-coming-soon`, `what-we-do-coming-soon`
  (`.html` and extensionless), plus `how-scorecard-works` → `/#how` and `/index.html` → `/`.
- [ ] **C** After cutover: delete `website/` and `.github/workflows/pages.yml`, and update `CLAUDE.md` (it still describes GitHub Pages).

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
- [ ] **C** Console clean on every page. No mixed content, no 404s for assets. Known: `home.css` points at `textures/v15/close-halftone-bg.svg`, which doesn't exist, so the sign-up section's halftone background is missing. Find the asset or drop the rule.
- [ ] **J** Submit a real challenge search end to end, and a real trial sign-up once the links exist.
- [ ] **C** Lighthouse performance/SEO scores recorded before and after the performance work.
- [ ] **J+C** After DNS switches: check apex, `www`, HTTPS, old legacy URLs (redirects), the PostHog events arriving, the admin login on the real domain, and that `app.` still works.
