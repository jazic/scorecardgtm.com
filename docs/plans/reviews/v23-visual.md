# home-v23: visual/UI review

| # | Section | Desktop | Mobile |
|---|---|---|---|
| 01 | Hero | 8 | 5.5 |
| 02 | Who it's for | 7.5 | 7 |
| 03 | How it works (intro) | 6.5 | 6.5 |
| 04 | Search agent | 7.5 | 5 |
| 05 | Research agent | 7 | 4.5 |
| 06 | Scoring agent | 7.5 | 5 |
| 07 | Proof | 7.5 | 7.5 |
| 08 | More you can do | 5.5 | 6 |
| 09 | Pricing | 7.5 | 3 |
| 10 | FAQ | 7.5 | 7.5 |
| 11 | Signup | 6.5 | 7 |
| 12 | Footer | 7 | 6 |

The desktop story sections are well made and on brand. Mobile breaks down because every stage is a desktop SVG shrunk with `zoom:.5`. Two things are actually broken: the mobile pricing table and the Research p0 keyframe.

## Sections

**01 Hero, D8 / M5.5.** The headline, map and account card hold up well, and the coral loop is a nice human touch. Problems: the card overlaps Nevada and Utah, and its right edge (1134) lines up with nothing. The map runs past the 1312 wrap edge on the right (to about 1360). "14 days · 500 credits" is 14px fg3 and gets lost. On mobile `.hero-art{display:none}`, so the hero has no product proof at all and is just a wall of text. Fixes: put the card at `left:250px; top:170px` so it sits over the Great Basin, and clip the map to the wrap. On mobile, show the `.acct` card on its own at full width (no map) under the CTAs, with `margin-top:32px`.

**02 Who, D7.5 / M7.** The three-card grid is the most template-looking part of the page. The mini visualizations are three unrelated styles (a dot matrix, dot bars, a timeline), with labels at 11px and inconsistent baselines. Only card 2 has a link, so the card bottoms don't match. The eyebrow is blue `--a`, which spends a grade color on a label. Fixes: put all three viz in one 96px band with a shared 12px label baseline. Make the eyebrow `--fg3`. Give every card a link pinned to the bottom (`.job{justify-content:space-between}`, link `margin-top:auto`), or give none of them one. Mobile: drop the viz to 72px and tighten card padding to 24px.

**03 How it works intro, D6.5 / M6.5.** This reads as a stub: about 300px of centered text, then a hard color change to the blue wash. The wash begins mid-viewport with no transition, and the "Example below" line is weak. Fixes: merge it into the top of the Search section, inside the wash, and turn the example into a chip that looks like a query (`border-radius:999px; background:#fff; padding:8px 14px; font-family:Geist Mono`), since that query is what all three agents act on. Alternatively, add a three-step agent index (Search, Research, Scoring) with small numbered circles that becomes the progress marker for the pinned sections.

**04 Search, D7.5 / M5.** The funnel from 33.2M to 412 and the US-to-CA zoom are the best moment on the page. Problems:
- At p0 the left column has about 200px of dead space above the headline and the stage is empty. The input box is almost invisible.
- The search input overlaps the top of the map at every keyframe.
- At p75 the map is cropped hard at x=1280 and runs into the "Example numbers" label.
- The narrator bar here is 527px wide, while the Research and Scoring bars are 640px.
- The stat row labels are 12px. The "TAM" and "SAM" tags in mono blue are jargon chrome.
- Mobile: the input and stat text render at about 6px, and there is about 220px of empty wash under the map.

Fixes: `.narr{width:100%}` on all agents. Give the stage `padding-top:56px` so the input sits above the map. Add `overflow:hidden` plus a mask fade on the right edge. Stat labels 13px fg2, numbers 28px. On mobile, replace `zoom:.5` with a mobile layout: the narrator, then the map at 100% width (SVG viewBox scaling, not zoom), then the stats in a 2×2 grid at 22px/12px. Cut the section height so nothing sits empty.

**05 Research, D7 / M4.5.**
- The p0 frame is broken: a 90px blue circle and a 32px company name hang outside the 1280 edge, and a stray dot sits at (962, 787).
- At p25 a connector stops in mid-air.
- At p100 the quote card covers four chips and the connector lines run underneath it, so it looks like an error, not a reveal.
- The source cards are generic skeleton bars with nothing branded about them.
- Mobile: chips at about 7px are unreadable.

Fixes: start p0 from the compact state (circle 30px, name 18px), or keep the morph inside the stage. Draw connectors only when both ends exist. At p100, dim the other chips to 0.25 and point the quote card at "Offers snow removal" with a 6px notch, and don't put it on top of the chips. Show one real text line per source card, with the matching text in blue. Mobile: stack the sources as a 2×2 grid of 44px cards with the chip list below at 13px. Drop the bezier lines on mobile.

**06 Scoring, D7.5 / M5.** The scattered chips at p0 and the tiers at p25 work. Problems:
- At p25 "A little" has no chips, and the chips overlap each other (Owner-run and 2 yards).
- At p50 the 412-dot waffle is generic and doesn't explain anything. It reads as a progress bar.
- At p100 row 1 is taller, and the "Person to approach" line sits 2px off the divider.
- Only the top score is blue. The scores are Geist Mono with no column header.
- Mobile list text is about 7px.

Fixes: snap the chips into tier rows with a fixed 12px gap and put at least one chip under "A little". At p50, sort the waffle into graded bands (A, B, C, D rows) with a count on each band, so it shows the ranking happening. Make all rows `min-height:76px` and give the top row `padding-bottom:12px`. Mobile: render the list as real HTML at 15px/13px, not a zoomed SVG.

**07 Proof, D7.5 / M7.5.** The before/after comparison is the right idea. Problems:
- The left card has dead space at the bottom, and the question text wraps an orphan ("it?").
- The "What we can't tell you" row is a run-on line with no separators.
- The three links underlined at 14px are weak.
- The 1.25fr column split makes the two cards look misaligned.

Fixes: use equal columns. Put "Does it plow snow?…" in a gray `--d` box headed "Unanswered", to mirror the evidence on the right. Turn the can't-tell-you items into small outlined pills, the same style as the premium pills. Promote "Open a full sample report" to a `btn-line`.

**08 More, D5.5 / M6.** This is the weakest section: plain text columns under a centered 48px h2, with about 120px of air. It looks like a leftover. Either delete it and fold the three items into pricing rows or the FAQ, or give each item a 40px circle icon or mini-viz and drop the h2 to 32px with left alignment. That makes it a quieter band, not a full section.

**09 Pricing, D7.5 / M3.** On desktop it's clean. The empty top-left cell wastes 400px, so put the "14 days · 500 credits · cancel anytime" note there. Every check is the same weight, and the blue 3px top rule repeats the narrator progress bar. The mobile layout is broken:
- `.hl-col{left:calc(100% - 512px)}` puts the highlight as a blue strip on the left.
- The columns are cut off, and the horizontal scroll can't be discovered.

Fix: at ≤760px, drop the table and show three stacked plan cards (name, price, CTA, then a five-row key list), with the Monthly card raised by a 1.5px ink border.

**10 FAQ, D7.5 / M7.5.** Fine but static. With four questions open in full, the right column has a ragged bottom against the empty left column. Fixes: use `<details>` accordions (the first one open) with a 16px plus icon, and `position:sticky; top:120px` on `.side`. Mobile: reduce the "Questions" heading from 48px to 32px so it matches the other h2s.

**11 Signup, D6.5 / M7.** The dark band is correct, but the large flat #121211 block is the only "brand moment" and has no texture (`.close::before{display:none}`). The input and button heights match, but the field has too little contrast (#45453F border). Fixes: bring back a subtle halftone of A to D circles fading from the bottom-right at 6–10% opacity. Use a `#5A5A54` border and `#1A1A18` fill on the input. The narrator mark could speak here too: put a closing narrator line above the h2 ("Search agent: Tell me who you sell to."), which closes the loop from section 04.

**12 Footer, D7 / M6.** Generic four-column footer, and the brand column is empty. Mobile is one long column (about 700px). Fixes: add the one-line description and email under the logo. Mobile: `grid-template-columns:1fr 1fr` for the link groups. On the m-12 shot, the nav bar turns gray over the footer; check the backdrop-filter against the dark band.

## Page-level issues
- **Too much same-size rhythm.** Every section uses the same pattern: centered 48px h2, 112–120px padding, and a 1px top border. Of 11 sections, 7 open with a centered h2. Vary it: left-aligned h2s for More and FAQ, a full-bleed band for Proof, and tighter spacing (72px) for secondary sections.
- **Blue wash used only once.** Section 04 gets `--wash` and 05/06 go back to paper. The three agents should share one surface, either all wash or all paper with a wash stage card. Right now it looks like Search is a different product.
- **Mobile is a scaled desktop.** `zoom:.5` on `.stage` is the single largest quality loss on the page.
- **The logo mark changes between frames** (pyramid, cluster, bars). If that's intentional as an agent indicator, limit it to the narrator mark and keep the nav logo fixed.
- **Narrator bar.** Its height jumps between one and two lines (62px min vs about 80px), and the label and text baselines differ when it wraps. Set `min-height:84px` and `align-items:flex-start` so the bar doesn't jump.

## Top 10 fixes, ranked
1. Rebuild the mobile stages without `zoom:.5`: real HTML or a viewBox-scaled SVG with text of at least 12px (sections 04–06).
2. Replace the mobile pricing table with stacked plan cards, which also fixes the misplaced `.hl-col`.
3. Fix the Research p0 keyframe (oversized circle and name, overflow, stray dot) and the p100 quote card covering the chips.
4. `.narr{width:100%; min-height:84px; align-items:flex-start}` everywhere, with one width and no height jumps.
5. Put the Search map inside the stage with no crop at p75 and no overlap with the input; move "Example numbers" below the stats.
6. Show the hero account card on mobile.
7. Cut "More you can do" or redesign it as a quiet band; merge the How-it-works intro into the Search section.
8. Use one surface treatment for all three agent sections.
9. Turn the Scoring p50 waffle into graded bands with counts; fix the uneven row heights at p100.
10. Break up the uniform section rhythm: left-aligned h2s and varied padding, give signup texture, and turn the FAQ into sticky-side accordions.
