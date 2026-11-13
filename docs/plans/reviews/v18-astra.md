# Scorecard homepage v18 review

## Top 5 problems (with fixes)

1. **The page sells capabilities it has not established.** The hero promises scoring against "what your best deals have in common"; two later tiles promise customer analysis and lookalikes. v16 identified learning as forthcoming. Confirm these are shipped; otherwise replace the hero clause with "against the criteria you choose" and remove those tiles. "Every company" and "every match" also imply exhaustive, current coverage. State database scope and research limits.
2. **The Why section demonstrates searches, not reasons to buy.** Three anonymous examples and unexplained scores cannot establish saved effort or better account selection. Replace the gallery with decisions and evidence, using either redesign below.
3. **Market precision exceeds the explanation.** The request is landscapers that plow snow, yet 601,200 landscapers becomes TAM and 41,300 snow operators becomes SAM before geography enters. Show "Landscapers → also remove snow → California." If using TAM/SAM, define the seller and eligibility first: national qualifying accounts versus serviceable accounts. Label synthetic counts and businesses "Illustrative example" beside each demonstration. Account counts alone are not revenue TAM.
4. **94 looks authoritative without being auditable.** "Here's why" produces a summary, not an explanation of 94 versus 88. Show one expandable score breakdown using the actual scoring method, selected priorities, evidence and treatment of unknowns. Label it "Fit score, not likelihood to buy." 
5. **The presentation still taxes attention and mobile readability.** Three sections remain 300vh each. Mobile rules shrink the stage to 56%, but later base rules override some dimensions; the fixed horizontal row never becomes a mobile stack. Replace mobile animation with readable final states. On desktop, default to the result with optional replay. Keep the founder's narrator above each visual; remove dependence on catching a typed sentence while scrolling.

## Why section (diagnosis + 2 redesigns)

The enormous heading repeats the hero's promise. Audience labels identify people but say nothing about their decisions. "74 Matches, of 5,417 checked" elevates an unexplained denominator; it could signal poor yield or costly research. The company below it is neither a customer testimonial nor verified performance proof. One source sentence cannot support the displayed 94. The first card is taller because its evidence wraps. 

### Redesign 1: One account, one decision

Use a two-column section headed "Know why an account belongs on your list."

Left: "You sell fleet software to owner-operated landscaping companies with commercial snow contracts." Below, show the desired criteria in plain language.

Right: Sierra Line Grounds, its matching evidence, one unknown, and a possible owner to approach. End with "Review the evidence. Choose who to contact." Include a compact lower-fit comparison explaining why residential-only work is less relevant. Label the entire example illustrative.

This establishes who is selling what, why the signals matter, and what the human does next. 

### Redesign 2: Three decisions, three outputs

Retain three equal columns, but use headings "Fill a territory," "Test your next segment," and "Build an acquisition shortlist." 

Each column contains a question, a concrete output, and one evidence excerpt. For sales: "Which accounts deserve the team's limited prospecting time?" → ranked territory list. For founders: "Is this segment worth our first sales hire?" → qualifying accounts and unknowns. For acquisition: "Which businesses meet our ownership criteria?" → sourced ownership history, with willingness to sell explicitly unknown.

Drop the large counts and grades here. Link each example to a full sample output. Prefer redesign 1 for continuity; choose 2 if audience breadth is the priority.

## Consistency & polish list

- Hero uses "Serves businesses and HOAs" and "Owner-run"; Research never supplies those exact facts. Score introduces "Hiring now" after "Here's everything I found," without research evidence. Carry one canonical example through all sections.
- Research displays Google Places, while pricing and FAQ exclude it from trial. Mark that source "Premium read" locally. Specify the public source behind "Active on social" rather than implying LinkedIn is included.
- Final Research wires converge around a website quote even though several originate from other sources. Highlight only the selected answer's supporting connections; dim the rest.
- Type jumps from 76px hero to 54px section titles, 46px agent headings and 42px FAQ; critical evidence falls to 12–13px. Establish a deliberate heading scale and readable evidence size. 
- Repeated 120px section padding and full-height agent scenes create empty stretches. Reduce static-section gaps and align narrator, visual and text baselines consistently.
- White CTA text on `#FF4A3D` is roughly 3.3:1, still the v16 contrast problem. Use ink text or a darker accessible coral. Keep coral for actions and hand notes, blue for data.
- Use one C-grade fill; CSS currently defines two. 
- Replace "Sign up free" with "Start free trial" throughout. State 14 days/500 credits near the hero CTA. Explain add/read costs with an actual worked credit example; clarify seats and renewal terms. Pricing omits a scoring row despite the FAQ including Scores.

## CRO persona

"I have 100 reps. Can this improve account allocation without creating another cleanup project?"

Top three needs:

1. Comparable account coverage by territory, matched to rep capacity.
2. Reproducible criteria and evidence that managers can challenge.
3. A usable handoff into existing CRM operations.

Objection: "A $59 research tool and CSV export do not establish operational readiness for my team."

Add "Give each territory a defensible account shortlist" and a sample territory review showing qualifying inventory, priorities and rep capacity supplied by the buyer. Show the actual CSV columns and explain the customer's import, deduplication and assignment steps. State team limits honestly. Provide a measured pilot with research time, rep acceptance and resulting opportunities, including sample size and dates. Qualified inventory can inform pipeline planning; it is not pipeline coverage or forecast revenue until conversion assumptions and opportunity stages enter the calculation.

## CEO persona

"We're at $5M ARR. Where should the next sales dollar go?"

Top three needs:

1. Compare adjacent segments before committing headcount.
2. Explain serviceable market assumptions to the board.
3. Turn founder judgment into criteria a first sales hire can repeat.

Objection: "Are these attractive-looking counts, or evidence of a segment we can actually win?"

Add "Test a segment before you hire against it." Show two candidate segments with explicit filters, geography, qualifying counts, missing evidence and sample accounts. Offer a dated methodology/export suitable for board review. Any revenue estimate must expose customer-supplied ACV and penetration assumptions. Show a founder selecting criteria and handing the sourced shortlist to a rep. Prove efficient pipeline with a real cohort's costs and opportunities when available; until then, label the demonstration illustrative.

## Economic-buyer signal

Replace the low-value "Active on social" demonstration with "Owner identified: Dana Kessler." Treat Dana as illustrative unless verified.

Research narrator: "The About page names Dana as the owner." Open separate evidence for ownership, operational role and tenure. A filing may corroborate legal identity; it does not establish "runs every crew" or purchasing authority. Use "Possible buyer to approach," not "confirmed economic buyer."

In Score, weight "Owner-operated" only if the user selected it; finding a name should not itself increase fit. In the hero, replace "Owner-run" with "Dana Kessler, owner · About page." Add "Contact details require a premium read; availability varies." No phone, email or Call button beside the trial promise.

## Cut/keep list

Cut unsupported learning/lookalike promises, unexplained Why counts, duplicate audience footer links and decorative signup dot wallpaper.

Keep the first-person narrator, source drawer, explicit unknowns, circles as businesses, CSV wording and human-owned outreach. The v16 repeated-ranking, chart clutter, trial Custom Signals and acquisition-excluding signup wording are resolved; do not reopen them.

Reviewed supplied screenshots, HTML and v16 review. No live mobile, animation, product-capability or customer-outcome verification; those remain release risks.
