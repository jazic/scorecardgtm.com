# Scorecard marketing vision

**Updated:** 14 November 2026. Supersedes `docs/website-brief.md` (July), which described a managed service. Scorecard is not one.

This is the marketing-side source of truth: what the site says, to whom, and how it looks. Product truth lives in the app repo,
linked at `docs/app/` (mission, strategy, roadmap, design). When this file and the live site disagree, fix one of them.

## What Scorecard is

**Self-serve SaaS for finding the accounts worth a seller's effort.** You describe the businesses you want in plain words.
Scorecard finds US companies that match, checks the evidence and ranks them by what matters to you.

Headline: **Target prospects worth the extra effort.**

Three agents do the work, and the site shows them working:

1. **Search** sizes the market (every US business → your type → your trait → your territory).
2. **Research** checks the facts against websites and public records, answers your Signals and finds the owner.
3. **Score** weights your priorities, grades every company A–D and puts the best fits first.

**Signals** are the questions Scorecard answers for every company: built-in ones, plus custom ones you write.
Each answer comes with its source.

## What it isn't

- Not a lead database. The point is fewer, better accounts, not a bigger export.
- Not a cold-email or volume tool. Scorecard finds who deserves a personal touch; it doesn't send the touch.
- Not a black-box score. Every finding shows its source.
- Not a managed service or consultancy. The customer runs it. "Challenge Scorecard" and Teams pilots are on-ramps, not the product.

## Who it's for

Lean teams without a RevOps or research function. All of them share one job: stop guessing which accounts deserve attention.

| Audience | Promise (live) | What they need to see |
|---|---|---|
| **Sales teams** (`/sales-teams`) | Give every rep a list worth calling. | Territories split by rep, ranked accounts, the person to approach, why each is an A. |
| **Founders and CEOs** (`/founders`) | Size a market before you hire for it. | Market counts and maps, segment-vs-segment comparison, what a typical fit looks like, before committing headcount. |
| **Acquisition searchers** (`/acquisition-search`) | Know which owners are worth pursuing. | Thesis → Signals → grade → outreach tier. Owner names and founding dates; "wants to sell" stays unknown. |

`/acquisition-search` is the fully built audience page. `/sales-teams` and `/founders` are still hero-only and should follow
its structure: the problem, how it works for them, example Signals, score to action, when to use it, FAQ, CTA.

## Pages

Every page ends at the same place: Start free trial, with Challenge Scorecard as the fallback.

| Page | Job |
|---|---|
| `/` | Explain it in one screen, prove it with the agent runs, route by audience, price it. |
| `/sales-teams`, `/founders`, `/acquisition-search` | Let each audience see itself, with its own example and Signals. |
| `/challenge` | Lower the risk for skeptics: send a search and get a list back without signing up. |
| `/contact` | For Teams pilots and anything else. |
| `/blog`, `/blog/tag/new-feature` | Posts and the changelog, to show the product is moving. |
| `/privacy`, `/terms` | Legal, and honest about where results come from. |

Sign-up and sign-in go to `app.scorecardgtm.com`. Not built yet: About (optional) and vertical or industry pages.

## The offer

| Plan | Price | Credits | Notes |
|---|---|---|---|
| Free trial | $0, 14 days | 500 | Search, Research, scoring, built-in Signals |
| Monthly | $59/month | 1,000/month, extra $10 per 100 | Custom Signals; LinkedIn, Google Places, owner phone and email |
| Teams | Custom | Sized to market | All seats, setup help, first territory scored for you |

Credits are spent only on businesses that match the search. CRM integration and MCP access are coming soon. Keep them labelled as such.

**Primary action:** Start free trial. **Secondary:** Challenge Scorecard (`/challenge`): send a hard search, get up to 100
candidates with the 10 strongest highlighted. The first 10 accepted searches are free in exchange for feedback.

## Voice

From the app's brand values (`docs/app/04 design.md`) and how the live copy already reads:

- **Specific.** Concrete businesses and traits ("landscapers in California that plow snow"), never "leverage AI to unlock pipeline."
- **Honest about gaps.** Unknown stays unknown. Say what isn't in any record (revenue, willingness to sell) rather than implying it.
- **Confidently picky.** Celebrate the few accounts worth effort, not the size of the list.
- **Skeptical of hype.** Show the agents working and the sources behind findings; don't promise magic.
- **Humans buy from humans.** Scorecard clears the research so sellers can spend effort on people (`docs/app/00 mission.md`).

Use: *accounts, Signals, sources, score, grade, territory, owner, the person to approach.*
Avoid: *managed service, operators, growth system, leads at scale, AI-powered.*

## Look

The homepage reproduces the approved v35 design one-to-one (`archive/github-pages-site/index.html`); tokens are in
`design-system/tokens.css` and the reference page is `design-system/system.html`.

- **Show the product, not claims.** Every section carries a working visual: a scored account card, the agent runs, ranked lists.
- **One running example.** Snow-plowing landscapers (Sierra Line Grounds, Dana Kessler) carries across pages. New pages may
  bring their own example, but it has to be clearly fictional and plausible.
- **Grades carry meaning.** A–D and the signal colours mean fit. Don't use them for decoration.
- **Calm and dense.** Operator-grade, not a launch-party landing page.
