# Homepage — Copy Deck (working source of record)

Source: Claude Design project **"Scorecard GTM website architecture"** → `Home.dc.html` (+ `SiteHeader`, `SiteFooter`).

**This deck now reflects the _selected revision_ per section — the copy we intend to ship.** It has not yet been pushed back to the Claude Design project, so the live design still shows the original copy. The original design copy and every iteration remain side-by-side (with the strategy notes) in **`home-analysis.html`** via each section's version picker.

Selected version is tagged per section: **[Original]**, **[v2]** (copywriting pass), or **[v3]** (value-first).

> **Standing notes**
> - **Brand spelling normalized to "Scorecard"** throughout (design body copy mixes in "ScoreCard").
> - **Hero** has three switchable headline/subhead variants in the design (`outcome`/`contrarian`/`institutional`). Our selected hero copy below replaces the live `outcome` variant; the other two are archived in `home-analysis.html`.
> - **Testimonial is an illustrative placeholder** — replace with a real, approved quote before launch.

---

## Header / Nav — [Original]
_Sticky top nav. Logo left; nav + CTA right. "Industries" opens a mega-menu._

- **Wordmark:** Scorecard
- **Nav:** Industries · Tools · Pricing
- **Header CTA:** See your market scored

**Industries mega-menu**
- _Find buyers to sell to:_ Manufacturing and distribution · SaaS and technology · Healthcare and medical · Trades and field services · Professional and financial services · Logistics and transportation · Staffing and recruiting
- _Find companies to acquire:_ Private equity and ETA
  - Search funds, holdcos and independent sponsors scoring a market to find the company worth buying.
  - See all industries →

---

## 1. Hero — [v2]
_Above the fold. Left: eyebrow, headline, subhead, two CTAs, "Built for" row. Right: a live "ranked call list" card._

- **Eyebrow pill:** Live scoring · updated monthly
- **Headline:** We hand your reps the accounts most likely to buy.
- **Subheadline:** Scorecard scores every company in your market — not just the easy-to-find slice — and hands your reps a ranked call list, each account with the reason it's there. The prospecting a big team pays a department for, run for you.
- **Primary CTA:** Book a 30-min intro
- **Secondary CTA:** See a real score →
- **Built-for row:** Built for **Manufacturing · Distribution · Private Equity · Field Services**

**Hero card — "Your ranked call list"**
- Card title: Your ranked call list
- Card meta: **[count]** sourced · 127 A-tier  _(animates up from 8,481)_
- Rows (tier · company · meta · score):
  - A · Hartwell Industrial Supply · $48M · 220 emp · Toledo, OH · 94
  - A · Meridian Plumbing Co. · $12M · 64 emp · Austin, TX · 88
  - B · Granite Peak Components · $31M · 140 emp · Erie, PA · 83
  - B · Calderon Logistics · $19M · 90 emp · Macon, GA · 71
  - C · Ferris & Lane Advisors · $6M · 38 emp · Peoria, IL · 64
  - D · Kestrel HVAC Services · $3M · 22 emp · Mesa, AZ · 41
- Card footer: Calibrated from **112 won deals** · model v3 · Reason shown on every account

_Archived hero variants (in `home-analysis.html`): "Stop calling the reachable. Start calling the best." (contrarian) · "Your whole market, ranked by who's most likely to buy." (institutional)._

---

## 2. What good looks like — [v2]
_Centered section with a before/after "rep's week" chart._

- **Eyebrow:** What good looks like
- **Headline:** Your sellers should be selling.
- **Body:** Before Scorecard, a rep's week disappears into finding someone worth calling. After, most of it goes to the call.
- Chart labels: Prospecting · Research · Admin & CRM · Selling conversations — BEFORE / AFTER

---

## 3. How it works — [v3 · value-first]
_Scroll-driven 4-step loop. Reframed from the mechanism to what the customer gets. "Who does the work" is de-emphasized on purpose._

- **Eyebrow:** How it works
- **Headline:** More revenue from the reps you already have.
- **Subheadline:** Not a look-alike list — a ranked, account-by-account match to your ideal customer, in your own terms. So your reps spend the day talking to the right people.

**Steps**
1. **A model of your best customers** — What your won deals actually have in common — the real patterns, in your language, not a generic template.
2. **Everyone who matches, ranked** — We score every company in your market against that model, so the accounts most likely to buy rise to the top.
3. **A ready-to-call list, where your reps work** — Delivered every week into Salesforce, Slack, or CSV. Nothing new to learn.
4. **Reps talk to the right people** — More conversations that convert, faster deals, less time wasted — and pipeline that compounds as the model sharpens on every win.

- **Closing note:** The longer you run it — and the more your team tells us — the sharper it gets.

_Alternate headlines on file: "Turn the deals you've won into the ones you'll win next." · "Your reps, on the phone with the right accounts all day."_

---

## 4. How the score works — [v3 · value-first, Keyplay-informed]
_Two columns: left sells trust in the score; right is an interactive "Score justification" panel. Reframed away from "how an ICP becomes signals" toward what a rep gets._

- **Eyebrow:** How the score works
- **Headline:** The score tells your reps who to call — and why.
- **Subheadline:** Not a mystery number. A fit score your team can read, argue with, and trust — built from the criteria you already use to spot a winner.

**Left column**
- **Right about the accounts everyone else gets wrong.** The best fits are often filed under the wrong industry code, and the ones that look perfect on paper fall apart on the call. We read what a business actually does — so the right accounts rise, and the false positives drop.
- **Scored in your language, not a generic grade.** Every criterion is one you named. An A means what your team means by it.
- **Payoff:** The payoff isn't more names. It's the right names — each with the reason attached.

**Right column — Score justification panel (demo data)**
- Panel: Hartwell Industrial Supply — A · 94/100 · "Strong fit — prioritize outreach." · Fit 96 / Intent 78
- Expandable criteria, each with the signals and reasoning behind the score.

---

## 5. Why Scorecard (build vs buy) — [v2]
_Intro copy above a comparison table; closing line below._

- **Eyebrow:** Why Scorecard
- **Headline:** Big teams build this from parts. We run the whole thing for you.
- **Body:** To do this in-house, you buy data from several vendors, buy or build the tools, and hire people to run it all. We do the whole thing for you — about thirty minutes of your time a month.

**Comparison table** — columns: To build it yourself / What it takes
- **Buy lists from several vendors** — More contracts to manage — and the data is still mislabeled in places, so good accounts slip through. — **~$50k a year**
- **Buy or build the tools** — Scoring, data enrichment, and the AI to read the companies the data gets wrong. — **Tools + setup**
- **Hire the people** — A sales-ops team to research and score every account, week after week. — **Several hires**
- **Scorecard** — The data, the tools, and the people — all run for you. — **About 30 min a month**

- **Closing line:** The self-serve tools get you to good enough. We get you to the best — the accounts that fit, including the ones hiding behind bad data.

---

## 6. Secondary door — Acquire — [v2]
_Clickable card linking to the acquisition motion._

- **Eyebrow:** Not just for selling
- **Headline:** Scoring a market to buy into it?
- **Body:** For search funds, holdcos, and PE, Scorecard turns a fragmented, offline market into a ranked, defensible target list — the same engine, pointed at acquisition.
- **CTA:** See the acquire motion →

---

## 7. Testimonial — [v2] ⚠ illustrative placeholder
_Centered customer quote. **Replace with a real, approved quote before launch — do not ship a fabricated testimonial.**_

- **Eyebrow:** From a customer
- **Quote:** "We stopped buying lists and cancelled two tools. Every week my reps open with accounts that already fit — building the list isn't their job anymore."
- **Attribution:** Dana Reyes · VP Sales, Northgate Industrial _(placeholder)_

---

## 8. Dogfood proof — [v2]
_Dark section: founder quote + supporting paragraph + CTA._

- **Eyebrow:** How we know it works
- **Quote:** "I needed customers — so I became customer number one. I sold them the same system I used to find them."
- **Body:** We found our own first customers by scoring them. On the first call, we show a prospect the read our system already had of their business — the cold call is the demo.
- **CTA:** Read the story
- **Aside:** The proof no competitor can copy.

---

## 9. Closing CTA — [v2]
_Centered final call to action._

- **Headline:** See your whole market, scored.
- **Body:** Book a 30-minute intro and we'll score a slice of your market live — then walk you through the reason behind every ranking.
- **Primary CTA:** Book a 30-min intro
- **Secondary CTA:** See how it works →

---

## Footer — [Original]
_Dark footer: brand blurb + CTA, four link columns, bottom bar._

- Wordmark: Scorecard
- Blurb: Find the few accounts worth uncommon effort — and start the right conversation.
- Footer CTA: See your market scored

**Product:** How it works · Tools · Pricing · Market sizer · Glossary
**Industries:** Manufacturing and distribution · Private equity and ETA · See all industries →
**Company:** About · Careers · Story · Contact · Resources
**Legal:** Security · Privacy · Terms

- Copyright: © 2026 ScoreCard GTM, LLC _(legal entity name — keep as registered)_
- Community: LinkedIn · X
- Email: justin@scorecardgtm.com

---

## Push-to-design checklist (when ready)
When these are approved, they go back into the Claude Design `Home.dc.html`:
- [ ] Hero: `headlineVals()` `outcome` variant → §1 headline + subhead; eyebrow → "updated monthly"
- [ ] §2 body line
- [ ] §3: headline, subhead, all four step labels + bodies, closing note (replaces the loop framing)
- [ ] §4: headline, subhead, left-column blocks (replaces the "we scan → AI sorts" blocks)
- [ ] §5 body ("you buy…") + table row label "Scorecard"
- [ ] §6 body (Oxford comma), §8 ("we show")
- [ ] Global: "ScoreCard" → "Scorecard" in body copy (leave legal entity "ScoreCard GTM, LLC")
- [ ] §7: swap placeholder testimonial for a real quote
