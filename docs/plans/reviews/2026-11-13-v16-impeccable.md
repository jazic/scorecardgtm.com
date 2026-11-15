Method: dual-agent (A: design review sub-agent · B: detector sub-agent). Browser overlay not run: cmux socket missing (app not running), so evidence is the CLI scan plus the supplied screenshots.

# Impeccable critique: home-v16

**Health: 16/28 (7 heuristics scored; 7, 9, 10 n/a for a landing page).** Visibility 3 · Real-world match 2 · Control 2 (3 × 420vh pinned scroll, no skip) · Consistency 2 · Error prevention 3 · Recognition 2 (Search copy explains the legend in prose) · Minimalism 2.

**Specificity:** half authored. The hero map, coral loops and Search map belong to Scorecard. The Signals histogram and the Score stacked bars could belong to any analytics SaaS. Following one business (Sierra Line Grounds) from start to finish is the strongest structural choice on the page. Keep it.

**Detector (10 warnings):** white on coral `#ff4a3d` = **3.3:1**, which fails AA on every Sign-up button. This is real; darken coral to about `#E2382B` or bold the label at 16px+. 1 dark-glow (blue zero-offset shadow), a borderline slop pattern. 8 cramped-padding, mostly false positives (full-bleed sections, hairline rows).

## Top 5 problems

1. **[P0] The agent is a caption, not the actor.** The dark `.agent` pill sits under a 440px stage, outside the eye path. Dots light up and bars grow with no visible cause. **Fix:** put the agent *inside* the stage as a moving mark that causes each change (see "Agent as the hero"). Delete the pill row.
2. **[P0] Signals and Score are dashboards.** A histogram with "WEAKER MATCH / STRONGER MATCH" axes, plus segmented bars with a three-tier legend, makes visitors read charts. **Fix:** use the symbolic alternates below. Score ends on 5 rows (grade, name, reason, number), with no bars.
3. **[P1] Seven layers of chrome per agent section:** rail, h2, body, stage, pill, ticks, caption. **Fix:** keep h2 + one line + stage. Cut the rail and caption, and reduce the ticks to a single 2px hairline.
4. **[P1] Story continuity breaks.** 9,840 "checked" in the keyframes vs 9,830 "in California" in the section. 38 "match best" turns into "top 5 of 412". "Hiring now" shows up in Signals and Score but isn't in Sierra's stack. A dashed "Revenue · no evidence" pill appears while the caption says "No evidence, no pill." The hero's "Owner-run" signal is dead code (wave 3 hidden). The Score 2→3 transition overlaps names ("Sierra Line Grounds" on top of "Summit Snow Co."; see p16-sheet). **Fix:** one ledger used everywhere: 9,840 → 412 → 38 → top 5 of 38. Sierra has the same 5 signals everywhere. Pick one stance on no-evidence and fix the crossfade.
5. **[P2] Scroll tax and mobile.** About 12.6 viewports of pinned scroll before pricing. Below 1100px the stage scales to 0.55, so the text inside drops to about 7px. **Fix:** 250–300vh per section, and a static final-keyframe fallback on mobile.

## Per section

- **Nav, fix.** "For sales teams" and "For acquisition search" both go to `#why`. Merge them into "Who it's for", or point each at its own page.
- **Hero, keep + fix.** Keep the map, the loop and "your top accounts.". The "Dana Kessler, owner / Call" row reads as a contact-data vendor. Swap it for a source line ("from sierralinegrounds.com").
- **Why, fix.** Cut the `.who` eyebrows and the three `<p>` blurbs, because each example card already makes the point. Move the audience into the h3 ("Sales teams: know which accounts are worth a call.").
- **Search, keep map, fix chrome.** Cut "Grey dots are businesses in it, blue ones match, deep blue ones match best." The tally already explains the colours. Pick one label set: checked / match / best.
- **Signals, rebuild visual.** Keep the h2 "Learn what a database can't tell you." It's the best line on the page. Cut the axis labels and the histogram.
- **Score, rebuild.** Cut the legend and the "Matters a lot / Matters / A little" labels. Also "Tallest bars first" is wrong, since the bars are horizontal.
- **And more, fix.** The title "Send your list to your CRM." doesn't match the body "Export any list to CSV." Rename it "Export to CSV." Merge the two best-customer tiles. The coral dot in tile 3 breaks the coral rule, so make it ink.
- **Pricing, fix.** Cut the "Most teams" badge. Move the two "Coming soon" rows into a footnote. Add one line on what a credit buys ("1 credit = 1 business researched").
- **Questions, keep.** Add "What does a search cost?" and "Does the agent contact anyone? No."
- **Sign up, fix.** Change "Stop spending time on accounts that won't buy" to a positive ending ("Find your next shortlist."). Change "describe your best customers" to "describe the businesses you want", because searchers have no customers yet.
- **Footer, keep.** Update the tagline if the hero line changes.

## Agent as the hero

1. **The agent is a token on stage.** The Scorecard dot-mark becomes an ink cursor with a name tag. It sweeps California and lights the dots behind it, opens Sierra's site and carries pills out, then sets the cards in order. The status verb rides on the token ("reading sierralinegrounds.com…"), not on a pill under the stage.
2. **The agent is the subject of every h2.** "The Search agent checks all 9,840." / "The Research agent reads every site." / "The Scoring agent puts Sierra first." The body copy no longer has to name it.
3. **Colour shows who did what.** Everything the agent changes is stamped in ink and blue (dot-mark stamps on matches, a source stamp on each pill). Coral is only for the human: the hand note and the CTA. The split shows that the agent works and you reach out.

## Cut list

- `.rail` "1 Search — 2 Signals — 3 Score" ×3
- All 12 `.cap` captions (every `data-texts` string)
- `.agent` pill row ×3 (replace with the on-stage token)
- `.ticks` ×3 (or one hairline)
- Why: `.who` eyebrows ×3, `.arch p` ×3
- Search: the grey/blue/deep-blue legend sentence
- Signals: "WEAKER MATCH / STRONGER MATCH"; either the hand note "5 signals, each with a source" or the body clause "Each one keeps its source" (keep the hand note)
- Score: legend, "Matters a lot / Matters / A little" tier labels, bars
- Hero: "Dana Kessler / Direct line and email / Call" row
- Pricing: "Most teams" badge, two "Coming soon" rows
- "Hiring now" and "Revenue · no evidence" pills unless they're in Sierra's ledger
- Dead "Owner-run" wave-3 pill entry

## Creative alternates

**Search**
- Sieve: 9,840 grey dots pour through, and only the blue ones settle into a tray labelled with the query.
- Flashlight: the agent's cone sweeps a dark state, and matches stay lit behind it.
- Pin drop: the agent reads county by county and pins land, ending on 38 along the Sierra.

**Signals**
- Lens over Sierra's real website: highlighted phrases lift off the page and become pills, each threaded back to its source.
- Pinboard: Sierra's circle in the middle, with site, Instagram and state-filing scraps around it, each tied to a pill.
- Field-notes card: the agent writes lines in ink, each footnoted with a URL, and leaves one line blank as "no evidence".

**Score**
- Balance scale: pills drop onto Sierra's pan, weighted by importance, and it tips past the others.
- Card sort: business cards shuffle into order and the top card flips to "A · 94 · snow removal, commercial, own trucks".
- Weighted stacks: each signal is a puck sized by importance, and the tallest stack is Sierra. The same maths as the bars, but physical.

## TAM/SAM

Put it inside Search as an alternate path, not a new section: a small toggle or second query under the search box ("Size my market"). The main story stays "find specific businesses". TAM/SAM is the proof that the agent checks the *whole* US, which also makes the 9,840 believable. It speaks most directly to search-fund buyers, who need a market count for their thesis. They could get it as the default variant on the acquisition page. Show it with nested circles, not a funnel chart.

- **K0:** whole-US dot map, query "landscapers that also plow snow". One number: **TAM 41,200 businesses**.
- **K1:** the agent's token sweeps west and the other states grey out: **SAM 9,840 · CA, NV, OR**.
- **K2:** the filter tightens on "commercial, owns trucks": **412 serviceable**, with nested circles TAM ⊃ SAM ⊃ fit in the margin.
- **K3:** coral hand note, "your real market, counted." Then it hands off to the normal Search keyframe 3 (38 best).

(The TAM figures are placeholders; use real counts from the database.)

Questions skipped: run as a delegated sub-agent with instructions not to ask questions.
