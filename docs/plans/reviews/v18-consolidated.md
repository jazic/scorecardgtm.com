# Homepage v18: consolidated review (Impeccable 20/32 · Claude Opus high · Codex gpt-6-astra medium)

Full reviews sit next to this file. v19 (`mockups/home-v19.html`) already adds the owner signal.

## 1. The "Why" section (all three: rework it)
- Shows results (74 / 52 / 31, grades all A at 93–94) before the reader knows what a Signal or score is.
- Headline repeats the hero; audience labels say who, not what decision they make.
- "74 matches of 5,417 checked" is unexplained; could read as low yield.
- The SaaS example doesn't fit an SMB story.

**Redesign options**
- **A · Three jobs** (Astra + Impeccable): "Fill a territory" (sales teams) · "Test your next segment" (founders/CEOs) · "Build an acquisition shortlist" (searchers). Each = the question they're answering → the output they get → one evidence line. No big counts, no grades. Best placed *after* Score.
- **B · A list vs a shortlist** (Opus + Impeccable): right after the hero, the contrast: "A list: 5,417 rows" vs "A shortlist: 74 worth a call, each with the reason." Becomes the main differentiator.
- **C · One account, one decision** (Astra): two columns, "you sell X to Y" on the left, Sierra Line with evidence, one unknown and the person to approach on the right.

## 2. Snow story consistency (all three)
- **TAM/SAM labels are wrong by our own definition.** TAM = everyone who matches the description nationally (41,300 landscapers that plow snow). SAM = the part you can serve (412 in California). 601,200 landscapers is just the wider category.
- One canonical set of facts across hero → Signals → Score. "Hiring now" appears in Score with no source; hero wording differs from Signals.
- Google Places is shown as a source in Signals, but pricing says it needs the monthly plan; mark it "premium read" or swap the source.
- Owner signal: source it ("About page · state filing"), drop "runs every crew" (an inference), say "person to approach", not "confirmed buyer". Add a dashed "Phone & email · monthly plan" pill so contacts read as premium. Owner-run should only raise the score if the user chose it.
- Hero promise "what your best deals have in common" is the coming-soon learning feature → "against the criteria you choose".

## 3. Proof and trust (Opus, Astra)
- No customer, quote, logo or accuracy figure anywhere. Add a proof band after Score, or until then label demo figures "Example numbers".
- "How we count" method note for the TAM numbers (date, sources, coverage).

## 4. CRO at a mid-market company
- Needs: fit-based territories matched to rep capacity · criteria and evidence managers can audit · clean handoff into the CRM.
- Objection: "We have ZoomInfo/Salesforce; a $59 seat and a CSV is a toy."
- Page changes: show 412 accounts split across reps (e.g. 4 reps × ~100) · a "Score the accounts already in your CRM" tile · rename "Done for you" to **Teams** (seats, CRM-mapped CSV, support) · a pilot offer: "score one territory against last quarter's closed-won".

## 5. CEO at ~$5M ARR
- Needs: a defensible TAM for the board · pick the next segment before hiring against it · turn founder judgment into criteria a first rep can repeat.
- Objection: "Can I put these numbers in a board deck?"
- Page changes: correct TAM/SAM labels + method link + export by state · "Test a segment before you hire against it" (two segments side by side) · "Size a market free" CTA · "your first rep's first 200 accounts".

## 6. Consistency and polish
- **Bugs:** pricing table has an unclosed `<div>` (the footnote renders inside the table, clipped) · mobile is broken (page 1,328px wide at 390px; nav has no menu; pricing needs 1,000px).
- Heading sizes 76 / 54 / 46 / 42 and mixed centered/left alignment → one scale, one alignment rule.
- Two C-grade colors, three near-identical greys, four grade-circle sizes → use `design-system` tokens.
- Coral buttons fail contrast (3.3:1) → ink text on coral, or a darker coral.
- "Sign up free" vs "Start with the free trial" → one CTA label; put "14 days · 500 credits" by the hero CTA.
- Sign-up background is a world map on a US-only product.

## Keep
Narrator bars · the opened quote drawer · "Revenue · not found" (most credible moment on the page) · Score's five plain rows · CSV wording · humans do the outreach.

## Recommended v20
1. Fix TAM/SAM labels; one canonical snow story; sourced owner + premium contact pill; drop "Hiring now".
2. Rework Why as **Three jobs** after Score (option A), with CRO/CEO/searcher framing.
3. Teams plan + "Score your CRM" tile + territory split for CROs; "Test a segment" + "Size a market free" for CEOs.
4. Proof slot / "Example numbers" label; method note.
5. Bugs: pricing div, mobile stack, coral contrast; one type scale.
