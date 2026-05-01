# Product Marketing Context

*Last updated: 2026-05-01*
*Status: V1 draft auto-generated from `docs/00 mission.md` and `website/copy/index-v4-copy.md`. Review and correct.*

## Product Overview

**One-liner:** Sell more. Prospect less. — A managed AI prospecting service that uses your closed deals to find new, high-fit prospects.

**What it does:** Scorecard reads a client's closed deals, surface new ICPs hiding inside that history, builds an explainable scoring rubric, and delivers a ranked batch of prequalified prospects every month. The model recalibrates on what the your sales team actually closes, disqualifies, or discovers — so accuracy compounds over time.

**Product category:** AI-powered B2B prospecting / managed ICP & lead-scoring service. Adjacent to (but explicitly *not*) data vendors, lead-list providers, and self-serve sales-intelligence tools.

**Product type:** Managed service (operated on the client's behalf, not self-serve software). Service + infrastructure: the scoring model is the product; sourcing, delivery, dashboards, and analysis are infrastructure in service of it.

**Business model:** Flat monthly retainer scoped to batch volume. No per-lead fees, no platform fees. Most engagements land **$4–12k/month**. Minimum 6-month engagement horizon.

## Target Audience

**Target companies:**
- $5–100M ARR
- B2B sales motion (not B2C, not transactional ecommerce)
- 30+ closed-won deals on the books
- Suspect their ICP is more than one segment or want to target new ICP
- Willing to invest in upfront calibration for compounding returns

**Decision-makers:** Sales leaders (VP Sales, CRO, Head of Revenue), founders/CEOs at $5–100M ARR companies, RevOps leaders, and — in PE deals — partners or platform-team operators sourcing add-ons against a thesis.

**Primary use case:** "Give my reps a sharper top-of-funnel so they spend time closing, not building lists."

**Jobs to be done:**
- **Find more of who we already win.** More customers that look like our best closed deals.
- **Discover the *real* ICPs hiding inside our sales motion.** Not the persona doc — the segments the data actually shows.
- **Expand into a new ICP / adjacent market.** A rubber gasket maker selling into semiconductor wants to grow into life sciences. We help them think through the expansion ICP and source the right prospects to test it — without needing a closed-deal history in the new segment.
- **Size and reach a hard-to-find TAM.** Find the very specific businesses that traditional firmographic filters (SIC/NAICS, headcount, revenue) miss. AI lets us identify prospects by what they *do*, not just how they're categorized — surfacing names that ZoomInfo, Apollo, and Sales Nav can't.
- **Replace stale lead lists with a feedback loop that gets smarter every month.**

**Use cases / scenarios:**
- PE firms sourcing add-on acquisitions that match a thesis instead of a sector code
- Manufacturing distributors and OEMs where territory + product fit matter more than headcount
- Mid-market SaaS where ICP splits across user persona and company stage
- Multi-site field-services operators where regional density beats raw revenue
- **Expansion plays:** A company strong in one vertical wants to enter an adjacent one (e.g., industrial supplier moving from semiconductor → life sciences) and needs a thoughtful prospect list for the new segment
- **TAM mapping for narrow ICPs:** Companies whose real ICP is defined by what a business *does* (a specific machine they operate, a specific workflow, a regulatory posture) — not by industry codes. AI can read public signals at scale and find them.

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| **Sales leader / CRO (Champion + Decision Maker)** | Pipeline quality, rep efficiency, predictable conversion | Reps grinding through noisy lists; SDRs burned out on bad-fit prospects; ICP doc that doesn't match what's closing | A ranked monthly batch that reflects their team's real wins — sharper top-of-funnel, less sorting |
| **Founder / CEO (Decision Maker + Financial Buyer)** | Revenue growth, GTM clarity, cost-per-opp | "Are we even targeting the right customers?"; multi-segment confusion; expensive list buys with no learning loop | A clear answer to "who are our real ICPs" inside the first sprint, plus a system that compounds |
| **RevOps / Sales Ops (Technical Influencer)** | Data hygiene, CRM fit, explainability, integration | Black-box scoring tools; lists that don't match schema; no visibility into why a lead scored high | Plain-language rubric, explainable scores, delivery into Salesforce/HubSpot/Slack/API in their schema |
| **PE Partner / Platform Operator (Decision Maker)** | Add-on sourcing against an investment thesis, not a sector code | SIC/NAICS codes too coarse; brokers send the same names to everyone; thesis-fit is qualitative | A scoring rubric that encodes the thesis and finds add-ons most brokers miss |
| **AE / SDR (User)** | Prospects worth calling; not getting handed garbage | Working stale purchased lists; can't tell why a lead is a "match" | Tier A–D ranking with a one-line rationale per score; works inside CRM/Slack they already use |

## Problems & Pain Points

**Core problem:** Sales teams know what a great customer looks like — or think they do. Generic lead databases, purchased lists, and keyword-based searches produce volume without precision. They treat every prospect the same, and the team's stated ICP often drifts from what the data actually shows.

**Why alternatives fall short:**
- **List providers** — Static spec; the list goes stale the day it ships. No feedback loop, no learning.
- **Self-serve sales-intelligence tools** — Surface filters only; can't encode the qualitative judgment that separates an A from a B.
- **In-house ICP exercises** — Start with a brief, end with a slide deck; rarely tied to closed-deal reality.
- **Generic AI lead-gen tools** — Black-box scoring; reps can't argue with it; no "trust the rubric" path.
- **Marketing-defined personas** — Diverge from sales reality; not actionable at the prospect level.

**What it costs them:**
- Reps' time wasted sorting noisy lists instead of selling
- SDR burnout on bad-fit conversations
- Money spent on lists that produce nothing
- Quarters lost chasing the wrong segment because the ICP on paper was wrong
- Compounding mistargeting: every list buy reinforces the wrong pattern

**Emotional tension:** "Are we even targeting the right customers?" Quiet doubt that the ICP doc is fiction. Frustration that reps can't tell a good lead from a bad one. Fear that the next list buy will be another waste. The relief of seeing a model that fits the deals they actually closed.

## Competitive Landscape

**Direct (same solution, same problem):**
- **AI lead-scoring platforms** (MadKudu, Common Room, Pocus) — Self-serve software; require internal RevOps to operate, configure, and interpret. Scorecard is a managed service — we operate it.
- **Custom ICP / lead-scoring consultancies** — One-time deliverable that ages out the day they ship. Scorecard recalibrates monthly on closed-deal feedback.

**Secondary (different solution, same problem):**
- **Lead-list providers** (ZoomInfo, Apollo, Cognism, LeadIQ) — Sell names against a static spec built from list categories (NAICS/SIC, industry, headcount), not your true ICP. You end up compromising — buying a NAICS-shaped approximation of who you actually want. And the list goes stale the day it ships. No learning loop.
- **Sales-intelligence tools** (LinkedIn Sales Navigator, Clay) — Filter by firmographics; can't encode the qualitative judgment between an A and a B.
- **Outbound agencies / SDRs-as-a-service** — Solve outreach, not targeting. Scorecard feeds them, doesn't replace them.

**Indirect (conflicting approach):**
- **In-house RevOps building scoring in-house** — Slow, never finishes, no calibration discipline, drifts on team turnover.
- **"Just hire more SDRs"** — Solves volume not precision; compounds the noisy-list problem.
- **Doing nothing / running on gut ICP** — Status quo for most $5–50M ARR companies; the most common alternative.

## Differentiation

**Key differentiators:**
- **Closed deals are the ground truth, not a brief.** We fit the model to deals you actually closed, not a persona doc.
- **Explainable scores, line by line.** No "trust the algorithm" step. Reps can argue with the rubric.
- **The model recalibrates monthly.** Wins tighten the fit; losses prune it. The pipeline gets sharper every month instead of going stale.
- **Managed service, not software.** We operate sourcing, scoring, and delivery. Your team makes the judgment calls.
- **2–4 ICPs from one upload.** Most teams discover their "one motion" is actually multiple distinct customer types — and we surface them in week one.
- **Finds prospects traditional databases miss.** AI reads public signals at scale, so we can identify companies by what they *do* — a specific machine, workflow, or regulatory posture — not just by SIC code, headcount, or revenue band. Useful for narrow ICPs and expansion plays into adjacent markets where you don't yet have a closed-deal history.
- **Lands where your team already works.** CRM (Salesforce/HubSpot), Slack, hosted dashboard, or API/CSV. No rip-and-replace.

**How we do it differently:** AI-assisted clustering on the client's own won-deal history → human-in-the-loop calibration session in week 2–3 → ranked monthly batch with a one-page drift report → refit on the latest closed deals. The model is custom per client and stays that way.

**Why that's better:**
- Reps spend more time closing and less time sorting
- ICP gets *sharper* over time instead of staling
- Decisions are auditable: every score has a reason
- No tool to learn, no platform fee, no per-lead pricing

**Why customers choose us:** They've already tried lists and they went stale. They've already tried in-house scoring and it never finished. They want a system that gets smarter every month, run by someone else, that respects their team's judgment.

## Objections

| Objection | Response |
|-----------|----------|
| "We already have ICP defined." | Good — that's our hypothesis to test. Often the ICP on paper diverges from what your team closes. We either confirm it fast or find the segments hiding inside it. Either outcome is useful. |
| "Are you replacing our SDRs?" | No, we feed them. We deliver prospects ranked by fit; your team does the outreach. SDRs get more efficient because they're working a sharper top-of-funnel. |
| "How is this different from a list provider?" | List providers sell against the categories *they* have (NAICS, SIC, industry, headcount) — not your true ICP. You end up buying the closest available approximation, then the list goes stale the day it ships. We fit a model to your won deals and refit monthly on what actually became opportunities. |
| "What's the pricing? Per-lead?" | Flat monthly retainer, scoped to batch volume. No per-lead pricing, no platform fees. Most engagements land $4–12k/month. |
| "Where does our data live?" | The model lives in our infrastructure. We don't take a copy of your CRM. Won-deal exports stay scoped to the firmographic fields we need. |
| "How long until we see prospects?" | First batch week 1–2. Calibration session week 3. Monthly delivery starts week 4. Working model on your data inside a single sprint. |
| "We don't have CRM access ready to share." | You don't need to plug us into your CRM to start. A list of last 30–150 won deals (company name + close date) and a 60-min kickoff is enough. |

**Anti-persona (not a fit):**
- Pre-revenue or fewer than 30 won deals
- Pure B2C or transactional ecommerce
- Looking for a hands-off tool that "just spits out leads"
- No appetite to question what the model says
- Looking for a one-time deliverable, not a 6-month+ engagement
- Want self-serve software, not a managed service

## Switching Dynamics (JTBD Four Forces)

**Push (away from current solution):**
- Reps complaining about lead quality; SDR pipeline is noisy
- Just-finished QBR where pipeline coverage looked thin
- Lists going stale; same names showing up across vendors
- Sales/marketing ICP disagreements unresolved for quarters
- Suspicion that the persona doc is fiction

**Pull (toward Scorecard):**
- Promise of seeing your *real* ICPs in week one
- Model that gets sharper instead of staling
- Explainable scores reps can argue with
- Done-for-you (managed service) — no tool to learn
- Lands in CRM/Slack already in use; no rip-and-replace
- Founders and PE operators see a system that fits a thesis, not a sector code

**Habit (anchors to current state):**
- "We already pay for ZoomInfo / Apollo / Sales Nav"
- In-house RevOps owns scoring (politically)
- Marketing's persona doc is the official ICP
- "We've always done it this way"

**Anxiety (about switching):**
- "What if the model is wrong?" → Calibration session before anything goes recurring; client signs off
- "We don't want another tool to learn." → It's a managed service; nothing to log into if you don't want to
- "What about our CRM data?" → Model lives in our infra; we don't copy your CRM
- "What if we cancel?" → 6-month minimum; transparent rubric stays with you
- "What if it conflicts with our existing outbound motion?" → We slot in: cadence, fields, routing shaped to your motion

## Customer Language

**How they describe the problem (verbatim from copy / inferred):**
- "These aren't all the same customer."
- "Our reps are spending more time building lists than closing."
- "The ICP on the slide doesn't match who's actually buying."
- "Our SDRs are burning out grinding through noise."
- "The list went stale the week we got it."

**How they describe the solution (verbatim):**
- "A ranked batch of prospects that look like our best customers"
- "Our reps can sell instead of sort"
- "Sharper top-of-funnel"
- "Closed deals are the ground truth"
- "The model gets smarter every month"

**Words to use:**
- Won deals, closed-won, deal history, sales motion
- ICP (real ICP, hidden ICPs, 2–4 ICPs)
- Ranked batch, prequalified, scored prospects
- Calibrate, calibration, refit, drift
- Tier A–D, score, rubric
- Sharper top-of-funnel, signal vs. noise
- Managed service, we operate it / you steer it
- Compounding, gets smarter every month, recalibrates monthly
- Explainable, plain-language rubric, line by line
- Slot in, lands where your team already works

**Words to avoid:**
- Leads (prefer prospects)
- Black box, algorithm (prefer rubric, model, scoring)
- Database, list (when describing Scorecard — those are competitors)
- Platform, software, tool (we're a managed service)
- AI/ML jargon for its own sake — features over buzzwords
- "Disrupt", "revolutionize", "10x" — not our voice
- Generic SaaS verbs: "empower", "unlock", "leverage"
- Per-lead, cost-per-lead pricing language

**Glossary:**

| Term | Meaning |
|------|---------|
| ICP | Ideal Customer Profile — the firmographic + behavioral pattern of customers we win |
| Rubric | The plain-language scoring criteria we build per client |
| Tier A–D | Ranking buckets for scored prospects (A = best fit) |
| v0 model | The first scoring model built from initial won-deal cluster analysis |
| Calibration session | Week 2–3 working session where the client signs off on what's right/wrong in the v0 model |
| Drift report | One-page monthly summary of what changed in the model and why |
| Refit | Monthly update of the model based on new closed-deal feedback |
| Define / Test / Scale | The three phases of a Scorecard engagement |
| Closed-won | A deal that resulted in a paying customer (Salesforce/CRM term we adopt) |
| Slot in | Adapting Scorecard's batch cadence and fields to a client's existing outbound motion |

## Brand Voice

**Tone:** Direct, confident, lightly skeptical of marketing-speak. Plainspoken. Operator energy. Sells by showing, not telling — "We'd rather show the model than pitch it."

**Style:** Short sentences. Specific numbers (30–150 deals, $4–12k/month, 2–4 ICPs, week 1–2). Concrete examples over abstractions. Active voice. Use em dashes and parallel construction. No exclamation points. No emoji. Comfortable saying what we are *not* ("not a list provider", "not a CRM", "not self-serve software", "not a tool").

**Personality (3–5 adjectives):** Operator-grade. Specific. Plainspoken. Skeptical-of-hype. Confidently picky.

**Voice rules of thumb:**
- Lead with the customer's problem in their language
- Quantify wherever possible (deals, weeks, dollars, prospects)
- "Show, don't pitch" — the demo is the model on their data, not slides
- Earn the claim: every differentiator paired with the operating principle behind it
- Define what we're *not* as crisply as what we are

## Proof Points

**Metrics / numbers we use** *(some illustrative, confirm before claiming):*
- 30–150 won deals → 2–4 ICPs surfaced
- 500–2,000 prospects scored in calibration
- First batch in week 1–2; monthly cadence by week 4
- $4–12k/month engagement range
- Sample live-scoring card numbers (8,472 scored, 127 cleared, 112-deal calibration set) — currently illustrative on the website

**Customers / logos:** None public yet — this is a new consultancy. Add as engagements close.

**Testimonials:** None yet. Capture verbatim quotes from first 3 engagements.

**Value themes:**

| Theme | Proof |
|-------|-------|
| Reps spend more time closing, less time sorting | Ranked batch + Tier A–D delivered into existing CRM/Slack |
| The model gets sharper every month, not staler | Monthly refit on closed-deal feedback + one-page drift report |
| Closed deals beat personas | Cluster analysis on won-deal history surfaces 2–4 ICPs vs. one-on-paper |
| Explainable, not black-box | Plain-language rubric; every score has a line-by-line reason |
| Managed, not another tool to learn | We operate sourcing/scoring/delivery; client steers via judgment calls |
| Lands where your team already works | Salesforce, HubSpot, Slack, dashboard, API/CSV — no rip-and-replace |

## Goals

**Business goal:** Land first paying engagements in target ICPs (PE, manufacturing, mid-market SaaS, multi-site field services). Build a small portfolio of 6-month+ retainers at $4–12k/month with strong renewal and referral.

**Key conversion action:** **Book a 30-min intro call** via the modal on `index-v4.html` (Cal.com embed). No demo loop, no decks — the call walks through a sample model on the prospect's data.

**Secondary conversion actions:**
- Read "How it works" / "Customers" sections (qualification self-check)
- Re-read the FAQ (objection self-handling)

**Current metrics:** No live traffic data captured yet. Site is on GitHub Pages; no analytics wired up. To set up.

**Open setup tasks (from current copy doc `Still open` notes):**
- Add social proof above the fold (logos, quotes, real numbers)
- Wire root `index.html` to canonical version (currently still v4 in `website/`)
- Set up analytics + conversion tracking on the intro-call modal
- Capture verbatim quotes from first 3 engagements to replace illustrative scoring-card data
