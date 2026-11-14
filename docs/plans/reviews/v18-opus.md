# Homepage v18: adversarial review (Opus)

## Top 5 problems (with fixes)

1. **There is no proof anywhere.** No customer, quote, logo, accuracy figure or count of answered Signals. Every number on the page is a demo number shown as if it were measured. **Fix:** add one proof band after Score: a "% of answers with a source link" figure, one named quote, and an "Example numbers" label on the Search funnel and the Why cards.
2. **The TAM/SAM labels are wrong by the page's own definition.** 601,200 "landscapers" is labeled TAM, but the reader's market is *landscapers that plow snow* (41,300). Serviceable is the territory (412). **Fix:** TAM = 41,300 that match in the US. SAM = 412 in your territory.
3. **The snow-removal story breaks between sections.** Hero bullets ("Does commercial snow removal / Serves businesses and HOAs / Owner-run"), Signals pills ("Offers snow removal / Commercial clients / Owns its trucks…") and Score reasons ("Commercial snow removal · owns its trucks") use three different wordings. "Owner-run" never shows up in Signals. "Hiring now" appears in the Score heap but Research never found it (flagged in v16, still open). The hero quote "commercial snow removal, November through March" is not verbatim; the source line includes "for lots and walkways". On a "No evidence, no answer" page, that's fatal. **Fix:** one set of signal labels used everywhere, and quote exactly with an ellipsis.
4. **The Why section is a lull at screen 2** (diagnosis below).
5. **Nothing here works for a team.** The plans are a single $59 plan, CSV export only, and a "Done for you" service. **Fix:** rename "Done for you" to "Teams" (seats, shared lists, CRM import/export, admin) and keep "done for you" as one row in that plan. Add a "Score the accounts already in your CRM" tile.

Still open from v16: hero promises "what your best deals have in common"; "researches every company" overclaims.

## Why section

**Diagnosis.**
- It shows results (74 matches, grade A, 94) before the reader knows what a Signal or a score is. All three cards end on A/93–94, so nothing contrasts and nothing ranks.
- There is no pain. "Spend your time on the businesses that fit" is a platitude with no "instead of what".
- The audience labels are 14px grey outside the cards: the section's point is its weakest element.
- Centered H2 over left-aligned cards; Hartwell's card is taller because its evidence wraps.
- The SaaS example is off-ICP for a Main Street SMB story.

**Redesign A: "List vs. shortlist" contrast (move to right after the hero).**
Headline: "A list gives you 5,417 rows. Scorecard gives you the 74 worth a call." Left: a grey, cut-off CSV of NAICS rows. Right: 3 ranked rows (A 94, B 71, C 48) with reason and source. Below it, one line: "For sales teams · founders who sell · acquisition search."

**Redesign B: role switcher, placed after Score as "Same agents, your market".**
A three-tab control (Sales team / Founder / Acquisition search). Each tab replays the story compressed: query → funnel → top row with quote and owner. Each tab carries one role-specific outcome line:
- Sales: "400 accounts per rep, ranked."
- Founder: "Your first hire starts with a list."
- Acquisition: "Founder-run, 20+ years, no broker."

Replace the SaaS example with an SMB one, such as "commercial HVAC contractors in Ohio".

## Consistency & polish

- **H2 sizes:** 54 (Why/And more/Pricing/Close), 46 (agent sections) and 42 (FAQ). Pick two.
- **Alignment:** H2 alignment flips: centered (Why, Pricing, Close) vs. left (And more, FAQ, agents).
- **Score colors:** blue on every Why card but only on the top row in Score.
- **Capitalization:** "74 Matches, of 5,417 checked" has a capital M mid-phrase.
- **Sources:** the Research wires connect Social posts → "Owns its trucks", State license → "2 yards" and Google Places → "Active on social". Google Places is also premium in pricing but drives the free demo. The FAQ lists "PPP loan records", which never appear, and omits state license records and social, which do.
- **Agents in pricing:** the pricing table has Search and Research agent rows but no Scoring agent row.
- **Pricing CTAs:** "Sign up free" and "Start with the free trial" are the same action in two styles. Use one coral CTA.
- **Pricing note:** in r18-pricing.png the credits footnote looks clipped by the Monthly highlight column. Verify. Say what one credit buys.
- **Close section:** world-map wallpaper on a US-only product; reuse the US lattice.
- **Footer:** both audience links go to #why; founders missing.
- **Shortlist:** the term appears only at the end ("Put your shortlist to work", "Build your next shortlist"). Score's last narrator line should coin it: "Here's your shortlist. Sierra Line Grounds comes first."

## CRO persona (50–200 reps selling into SMBs)

**Top needs:** (1) territories carved by real fit, so reps get balanced books; (2) reps selling instead of researching, so capacity turns into pipeline coverage; (3) clean CRM data: scored, deduped accounts, with no new data silo.

**Objection:** "We have ZoomInfo and Salesforce. A CSV tool my reps won't open doesn't fix coverage. And how accurate is this at 40,000 accounts?"

**Page changes:**
- Add a "Score your CRM" tile: upload accounts and get grades and reasons back, mapped to account IDs.
- Add a Search beat or a Why tab: "412 accounts → 4 reps × ~100 A/B accounts each."
- Add a proof line: "Every Signal links to its source. Spot-check any row."
- Pricing: a Teams plan with seats, shared territories, admin, and honest CRM sync status.
- Offer: "Score one territory free against last quarter's closed-won."

## CEO persona (~$5M ARR)

**Top needs:** (1) a defensible next segment and TAM/SAM for the board; (2) making the first sales hires productive in weeks; (3) efficient pipeline without a $30k data contract or an SDR team.

**Objection:** "Can I put these numbers in a board deck, or are they illustrative? Will it understand my niche?"

**Page changes:**
- Fix the TAM/SAM labels.
- Add "Export this sizing" with a per-state breakdown and a methodology link (data sources page).
- Promote "Start from your best customers" from the And-more tiles into the Search story: "Upload 30 best customers → what they share → 41,300 like them." That is the CEO's segment-discovery moment.
- Why/Founder line: "Hand your first rep a ranked book on day one."

## Economic-buyer signal

- **Signals:** add a pill "Owner: Dana Kessler, since 2009", wired from two sources: the About page and the **CA Secretary of State filing**. Narrator step 3: "Records name the owner, Dana Kessler. No revenue anywhere, so I left it blank." Next to it, a muted pill styled like "Revenue · not found": "Phone & email · premium read".
- Don't write "runs every crew". It's an inference, not a sourced fact.
- **Score:** add "owner-run" to the reasons ("Commercial snow removal · owner-run · 2 yards") and to the "matters" tier.
- **Hero:** replace "Owner-run, from its About page" with "Owner: Dana Kessler, since 2009", and show the source as a second line under the quote ("About page · CA SOS filing"). No Call button.
- **FAQ:** add "Do you show contacts? Owner names from public records, yes. Phone and email are a premium read."

## Cut / keep

**Cut:**
- Why section as built
- "Hiring now" pill (or add it to Research)
- World-map wallpaper
- Duplicate Free-trial CTA
- Dead CSS
- 601,200 "TAM" label
- SaaS example
- Paraphrased hero quote

**Keep:**
- Narrator bars
- Search funnel (relabelled)
- Opened quote drawer with "checked Nov 4"
- "Revenue · not found", the best credibility beat on the page
- Score's final five rows
- FAQ "Do the agents contact anyone?"
