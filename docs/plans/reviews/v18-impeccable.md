Method: dual-agent (A: design-review subagent · B: detector + headless-Chrome subagent)

# Impeccable critique: home-v18

**Health: 20/32 (63%, Acceptable).** Heuristics 7 and 10 are n/a for a landing page. Scores: Status 3 · Match 3 · Control 2 · Consistency 2 · Error prevention 2 · Recognition 3 · Aesthetic 3 · Error recovery 2.

**Specificity:** The page is authored only in its middle third. The snow-removal story runs through hero → Search → Signals → Score, the narrator bar carries it, and Signals says "Revenue · not found". No other prospecting tool could ship that. The Why section, the "And more" tiles and the pricing table could belong to any SaaS company.

**Detector:** 13 CLI findings and 7 browser findings.
- **Real:** white on coral `#FF4A3D` is 3.3:1. That covers 4 CTAs (lines 282, 290, 418, 436).
- **Real:** an orphaned "conversation." on its own line in the hero subhead.
- **Real:** the `--spring` easing overshoots (a bounce).
- **Judgment call:** dimmed scroll steps (`.fs/.fa` at opacity .25) read at 1.4–1.7:1.
- **False positives:** all 9 cramped-padding flags.

## Top 5 problems

1. **[P0] Mobile is broken.** The page renders 1328px wide inside a 390px viewport. The 1100px breakpoint never stacks `.row`/`.copy`(440px)/`.col`(640px). `overflow-x:clip` hides the clipped visuals, and `.stage{scale(.56)}` shrinks the 13px pills to about 7px. Nav links disappear with no menu to replace them. The pricing table has `min-width:1000px`.
   **Fix:** stack the columns at ≤900px, show the final keyframe of each agent statically instead of pinning, add a menu, use `svh` instead of `100vh`, and turn pricing into stacked cards.
2. **[P1] Pricing markup bug.** Line 421 has 31 `<div` and 30 `</div`. Because of that, `.pnote` renders inside the table and is cut off ("Credits add businesses to your list and pay…").
   **Fix:** close the div.
3. **[P1] The Signals visual contradicts the pricing.**
   - It shows a "Google Places" sheet (line 361), but the FAQ and pricing say Google Places needs the paid plan.
   - "Hiring now" appears in Score (line 385) but Signals never found it. This was flagged in v16 and is still unfixed.
   - PPP records are named in the FAQ but never shown.
   **Fix:** show only free-tier sources (website, state license, listing, PPP), and replace "Hiring now" with the owner signal (see below).
4. **[P1] The hero promises a mechanism the page doesn't show.** Line 289 says Scorecard scores "against what your best deals have in common". Score then says "You say what matters most." Still unfixed since v16.
   **Fix:** "…scores each one on what you say matters…", or show the best-customer flow in Score if it has actually shipped.
5. **[P1] The Why section is second on the page and does the least.** Diagnosis below.
   **Also:** coral contrast (P2). Darken the coral to about `#E5372B`, or set the button labels at 600 weight and 18px or larger.

## Why section

**Diagnosis**
- **Generic headline.** "Spend your time on the businesses that fit" could be Apollo's.
- **Out of order.** It shows outcomes ("74 matches, of 5,417 checked", grades, scores) before the reader has met Search, Signals or Score, so none of the numbers mean anything yet.
- **Inverted hierarchy.**
  - The 32px match count is the loudest element.
  - The audience label is a 14px `--fg2` caption outside the card, even though it is what the nav's "Who it's for" promises.
- **Rigged-looking results.** All three cards are grade A, scoring 94, 93 and 94, and the hero's Sierra Line is also 94.
- **Off-ICP example.** The founder card searches for "B2B software companies… usage-based pricing", but the product is for small US businesses.
- **Leftover spacing.** `.why h2{padding-bottom:16px}` (line 72) was sized for a lede that has since been deleted, so the 54px headline crowds the cards. The `.lede`/`.arch` CSS is now dead.

**Redesign A: "Same agents, three jobs."** Move it after Score, once the mechanics are understood. Each card leads with the job at 20px semibold:
- "Fill a rep's territory"
- "Find your first 100 customers"
- "Source off-market deals"

Under the job, each card shows the plain-words query, three ranked rows with spread-out grades (A 94 / B 78 / C 61), and the hand-off step ("→ CSV into Salesforce", "→ founder's call list", "→ owner letter"). Shrink "N matches of M" to 13px. Replace the software example with an SMB market such as "Independent HVAC shops in Ohio, 10–50 techs".

**Redesign B: "A list vs. a shortlist."** Keep the section in second place, but make it the differentiator:
- **Left:** what a list gives you. 601,200 grey rows labelled "NAICS 561730", with no reasons.
- **Right:** what Scorecard gives you. 412 ranked rows, each with a sourced reason.
- **Audiences:** one row of chips (Sales teams · Founders · Searchers). Clicking a chip swaps the hero card's example.

This turns the strongest FAQ answer into the picture and keeps the snow-removal thread going.

## Consistency & polish

- **Type scale.**
  - Headings use 9 sizes: 76/54/46/44/42/32/26/22/20.
  - Body text uses 9 sizes: 19→11.
  - Line-height is 29.5 in one place and 29 in another.
  - **Fix:** collapse to 76/54/40/24/19/16/14/12.
- **Section-head spacing.** 16px (Why), 48px (And more), 56px (Pricing). Pick one.
- **Heading alignment.** Why, Pricing and Close are centred; everything else is left-aligned. Make all left except Close.
- **Grade circles.** Four sizes (34/32/28/26px) and two grade-C fills (`--c #DCEBF8` and `--c16 #C4E0F8`). Use one size per context and one C colour.
- **Greys and tokens.**
  - `--fg3 #6E6D69`, `--fg4 #6F6E69` and `--fg5 #77766F` are effectively the same colour.
  - `--a2` duplicates `--a-fill`.
  - Five hex values are hardcoded instead of tokenised.
  - The page doesn't link `design-system/tokens.css`.
  - The hero card uses inline styles.
- **Signal names drift.**
  - Hero: "Serves businesses and HOAs" / "Owner-run"
  - Signals: "Commercial clients" / "2 yards"
  - Tile: "2+ locations"
  - Score: "Hiring now"
  - **Fix:** write one canonical list of six signals and use it everywhere.
- **Nouns drift.** The hero alone says prospects, company, deals and accounts; the rest of the page says "businesses". Use "businesses" everywhere, including the H1.
- **Numbers.**
  - The hero card shows Sierra Line's grade but not its 94.
  - Three different businesses all score 94.
  - Nothing labels the counts (601,200 / 41,300 / 412) as illustrative.
  - "checked Nov 4" has no year.
- **Colour.** Only Search gets the blue section background. Give it to all three agent sections or to none.
- **Copy.**
  - "Matches, of 5,417 checked" should be "matches of 5,417 checked".
  - The Monthly CTA "Start with the free trial" does the same thing as the trial CTA. Change it to "Choose Monthly".
  - "Extra credits: Included" (Done for you) sounds unlimited.
  - Grade cut-offs are never stated (88 = A, 76 = B).
  - The hero subhead leaves "conversation." alone on the last line.
- **Navigation.**
  - The nav's "How it works" and the hero's "How it works →" do the same thing.
  - Two footer audience links both point to `#why`.
- **Motion.** `--spring` overshoots. Swap it for an ease-out-quart curve.

## CRO persona (50–200 reps selling into SMBs)

**Needs**
1. Territories that are fair and fully worked.
2. 3–4× pipeline coverage from net-new accounts.
3. Data reps trust that doesn't pollute the CRM (dedupe, consistent fields).

**Objection:** "We already have ZoomInfo/Clay. A $59 single seat with CSV export is a toy. Does it dedupe against Salesforce?"

**Page changes**
- **Search narrator's last beat:** "412 in California, split across your 6 reps by county", with the split shown on the map.
- **Rename "Done for you" to "Teams"** and list:
  - seats
  - territories
  - "CSV mapped to your CRM fields" (claim sync only if it's real)
  - security
  - named support
- **Score:** add "Reps see the reason, not just the number", which answers the adoption worry.
- **Near pricing:** reserve one proof slot (a quote plus a coverage or meetings metric). Leave it empty rather than fake it.

## CEO persona (~$5M ARR)

**Needs**
1. Find the next segment.
2. A TAM/SAM number that holds up in front of the board.
3. First AEs productive without the founder hand-building lists.

**Objection:** "Can I put 601,200 in a board deck? Where does that number come from?"

**Page changes**
- **Search caption:** "Every count shows its method. Export the sizing." Add a small "how we count" link.
- **Second entry CTA:** "Size a market free". The visitor types a market and gets a count, which works as both lead magnet and proof.
- **Founder card:** reframe it as "Your first rep's first 200 accounts".
- **Price anchor:** "Less than an hour of an SDR's month."
- **TAM/SAM tags (lines 334–335):** explain them inline; they're currently unexplained mono tags.

## Economic-buyer signal

Pricing already lists "owner contacts" as a paid feature. Show where the line sits rather than hiding it.

- **Hero card (line 298):** replace "Owner-run, from its About page" with "Owner: Dana Kessler · runs crews since 2009". Add a source line, "About page · CA contractor license". No phone, email or call button.
- **Signals:** connect the State-license sheet to a new pill, "Owner-operator · Dana Kessler". Next to it, add a dashed pill in the same style as "Revenue · not found": **"Phone & email · monthly plan"**. That shows the boundary without overpromising.
- **Score:** replace "Hiring now" with "Owner runs the crews" in the Matters tier, which also fixes problem 3. Sierra Line's reason line becomes "Commercial snow removal · owner-run · 2 yards".
- **Guardrails:**
  - Show the name only.
  - The name must come from a public filing or the business's own site.
  - Use a fictional name in the mockup.
  - Consider ending the Signals story on Dana instead of the services-page quote.

## Cut / keep

**Cut**
- The Why section in its current form.
- The dead `.lede`/`.arch` CSS.
- The "Hiring now" pill.
- Google Places as a free-tier source.
- The duplicate Monthly trial CTA.
- One of the two "How it works" links.
- The duplicate footer `#why` links.
- `--fg4`, `--fg5` and `--a2`.
- `--spring`.

**Keep**
- The narrator bar.
- The "not found" pill.
- The quote drawer.
- The five-row Score ending.
- The single snow-removal thread.
- The one coral hand note in the hero.

Questions skipped: run delegated by a parent agent with instructions to skip user questions (5 priority issues found).
