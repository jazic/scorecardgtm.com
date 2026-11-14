# Scorecard home v16: adversarial review (Opus)

## Top 5 problems

1. **The agent is a status bar.** Each agent section stacks rail, H2, paragraph, visual, agent pill, ticks and caption. The pill, ticks and caption say the same thing three times, and the pill is the smallest. The H2 subject is "It" or nobody. **Fix:** make the agent the subject of each H2, put it inside the visual as something that moves, and delete the ticks and caption.
2. **Signals never shows a source.** "Each one keeps its source" is only written down, in a paragraph and a hand note. On screen there's a histogram and five pills, with no quote, URL or date. The earlier "commercial snow removal" passage, the strongest moment, is gone. **Fix:** in the last frame, open one pill to show the quoted line, the domain and the date it was checked.
3. **The steps get ahead of each other.** Search already ranks ("match best", 38 deep-blue dots). Signals plots WEAKER → STRONGER MATCH, which is a score. When Score arrives, the ranking has been shown twice. **Fix:** Search = in or out, blue or grey. Signals = facts about one business, no axis. Score = the first and only place order appears.
4. **The numbers and claims don't hold up.**
   - "9,840 in California" next to "checks every business" reads as California's total business count.
   - The hero's "what your best deals have in common" is learn-from-marks, which pricing marks coming soon.
   - The FAQ says the trial covers Standard Signals, but pricing ticks Custom Signals for the trial.
   - "Active on social" is shown as standard, but the FAQ calls LinkedIn premium.
   - "Tallest bars" describes horizontal bars.

   **Fix:** label the count "landscapers in California", and make the hero, FAQ and pricing say the same thing.
5. **The visuals are charts, and they break on mobile.** Signals is a histogram and Score is a stacked bar chart with a legend. Below 1100px the stage is scaled to 55%, so pills and the query box come out around 7px and can't be read. **Fix:** use symbolic visuals (alternates below) and build a separate single-column layout for mobile.

## Per section

- **Nav: fix.** Both audience links go to `#why`. Build those pages or cut the links.
- **Hero: fix.** "Worth the extra effort" suggests the product adds effort. Cut the Call button and contact line (premium; reads as a dialer) and the floating "your top accounts." note. Keep the US map with California circled, because it sets up TAM/SAM.
- **Why: fix.** Four layers per column is too many. Cut the paragraphs and fold the eyebrow into the H3. Keep the example cards; they're the proof. The acquisition H3 overclaims: years in business doesn't show an owner is worth pursuing.
- **Search: fix.** H2: "The Search agent checks every business in the state." Cut the "match best" row and the deep-blue dots. Cut the "best fits, along the Sierra" note. Add TAM/SAM.
- **Signals: fix.** Keep the H2. Replace the histogram with one business being read. Cut the "Hiring now" and "Revenue · no evidence" pills that appear for one frame and never come back.
- **Score: fix.** Keep frames 1–2 (the heap of signals sorting into tiers). They're the best symbolic beat on the page. Rework or cut the bars and legend. Mid-scroll, row labels overprint the legend (see `p16-sheet.png`).
- **And more: fix.** Replace the "And more" heading with a real one. Draw a CSV file, not a "Your CRM" box. Merge the two customer tiles. The coral dot breaks the colour rule, so make it ink.
- **Pricing: fix.** Cut the "Most teams" badge. Change "Start with the free trial" on the $59 card to "Start free". Turn the coming-soon rows into one line under the table. Add one worked credit example.
- **Questions: fix.** Add "What spends a credit?" and "Do agents contact anyone? No." Fix the Standard/Custom contradiction.
- **Sign up: fix.** "Accounts that won't buy" claims buying intent, which Scorecard doesn't measure; use "Find your next shortlist." The halftone background reads as a world map, so swap in the US dot map. Change the after-line to "describe the businesses you want", since searchers have no customers yet.
- **Footer: fix.** Cut the tagline, Careers, Cookie settings and dead links.

## Agent as the hero

1. **Show the agent as a marker you can watch.** The Scorecard dot mark sweeps the map, lands on one business and opens its site, then carries pills into tiers.
2. **Narrate in the agent's voice.** Replace pill, ticks and caption with one running log line in the copy column: `checked 6,212 of 9,840 landscapers` → `found "commercial snow removal" on sierralinegrounds.com`.
3. **Make agents the subject of the headlines.** "The Search agent checks every business." "The Research agent reads what a database can't." "The Scoring agent puts the best fit first." Then drop the step rail.

## Cut list

Step rails; `.ticks`; `.cap` captions; all three hand notes (swap "5 signals…" for a real source); WEAKER/STRONGER axis labels; Score legend; hero Call button and "Direct line and email"; Why paragraphs and eyebrows; "match best" row; one-frame "Hiring now" and "Revenue" pills; "And more" heading; "Your CRM" box; one customer tile; "Most teams"; pricing coming-soon rows and note; duplicate nav links; footer tagline, Careers, Cookie settings.

## Creative alternates

**Search**
- **Sieve:** the typed sentence is a sieve. Circles from the whole US pour through, and only matches fall out blue.
- **Lamp:** a dark field of circles. The agent's light sweeps it, and circles stay lit only where the description fits.
- **Crossed-out codes:** a NAICS listing gets crossed out, and the agent hand-circles the businesses that really plow snow.

**Signals**
- **Magnifier:** a lens opens one circle into its website. The highlighted phrase lifts into a pill that stays tied to the page.
- **Pinboard:** threads run from the business to source cards (website, Instagram, truck registration). Each thread ends in a pill; a loose thread reads "no evidence".
- **Notary:** the agent stamps each claim with the source's domain and date. Claims without a stamp fade.

**Score**
- **Report card:** a literal scorecard, since that's the product's name. The agent ticks each line and a blue grade lands.
- **Token stacks:** each signal is a coin sized by how much it matters. The tallest stack goes first.
- **Drag to reorder:** you drag "Commercial clients" up to "Matters a lot", and the circles leapfrog into a new order.

## TAM/SAM

It goes inside Search as the opening beat, not as its own section. That also fixes the confusing "9,840 in California" label. The hero already shows the US with California circled, so Search continues that zoom with nested circles (circles = businesses): US → state → matches. Each ring gets a count and a plain label ("in the US", "in your territory", "match"). Use "TAM/SAM" once, in a small sub-line: "Size your market, from the whole country down to your territory." Mark counts illustrative.

**Keyframes:**
1. The query is typed and the US fills with grey circles as the agent sweeps: "38,500 landscapers in the US" (TAM).
2. The agent marks the ones whose websites mention plowing: "4,100 also plow snow".
3. Narrow to California and the map collapses to the state: "412 in California" (SAM).
4. Nested-circle summary with an "Export counts" action, then hand off to Signals.
