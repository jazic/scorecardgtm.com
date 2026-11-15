# Home v15 build spec

Source: Paper file `scorecard app`, artboards "Home — v15 (3 agents, keyframes = sections)", "v15 — agent keyframes (each row builds to its home section)", and "v15 — section visuals (non-UI and hybrid options)". All values are copied from Paper's JSX and computed styles, not measured off screenshots.

Local assets live in `mockups/textures/v15/` (paths below are relative to `mockups/`).

---

## 0. Global

- Artboard: width **1440px**, height 6628px (fit-content), `display:flex; flex-direction:column; overflow:clip`, background **#F7F6F4**.
- Every section is `width:100%` with **128px** inline padding, so the content column is **1184px** wide.
- Fonts: **Geist** (400/500/600/700), **Geist Mono** (500/600), **Caveat** (400/700, used only for hand notes). Base `font-size:12px; line-height:16px`, `-webkit-font-smoothing:antialiased`, `font-synthesis:none`.
- Body text spans `overflow-wrap:anywhere`.

### Palette (every hex used)

| Role | Hex |
|---|---|
| Page bg | #F7F6F4 |
| Ink, headings | #1C1C1A |
| Body / secondary text | #5F5E5A |
| Muted text | #6E6D69 |
| Tertiary label / inactive step | #8A8984 |
| Struck-through name (Sunnyside) | #9A9994 |
| Faint number / dash line | #B9B8B3 |
| Coral (CTA, hand notes, X mark) | #FF4A3D |
| Brand blue, strong (A grade, ticks, highlight bar) | #0F6FC0 |
| Blue mid (hero card bullets, pricing column top border) | #1A8FE8 |
| Blue light (B grade, agent-pill dot, connector lines) | #7CBDF2 |
| Blue tint (highlight bar track) | #CFE5F8 |
| Blue pale (C grade) | #DCEBF8 |
| Blue wash (section bg, pricing highlight column) | #EAF3FC |
| Navy text on light-blue chips | #0B3A63 |
| Map label "Lake Tahoe" | #3F6A8F |
| D-grade chip | #E2E1DE |
| Hairline / card ring | #E6E4E0 |
| Pricing row divider | #EDEBE7 |
| Placeholder bars | #E4E2DE, #C9C7C2 |
| Ring / outline | #D9D7D2 |
| Avatar chip bg / "Coming soon" chip bg | #EFEEEB |
| Filing slip bg | #FBFAF7 |
| Close CTA bg | #121211 |
| Close CTA heading | #F2F1EE |
| Close CTA body | #B5B4AE |
| Close CTA input border | #45453F |

### Shared components

**Logo** (nav + footer): 22×27 SVG then a 9px gap, then "Scorecard" in Geist 21px/26px, weight 700, letter-spacing -0.035em, #1C1C1A.

```html
<svg width="22" height="27" viewBox="0 -4 24 30" xmlns="http://www.w3.org/2000/svg">
  <g>
    <circle cx="3" cy="23" r="2.3" fill="#1C1C1A"/>
    <circle cx="11" cy="23" r="2.3" fill="#1C1C1A"/>
    <circle cx="19" cy="23" r="2.3" fill="#1C1C1A"/>
    <circle cx="11" cy="15" r="2.3" fill="#1C1C1A"/>
    <circle cx="19" cy="15" r="2.3" fill="#1C1C1A"/>
    <circle cx="19" cy="7" r="2.3" fill="#1C1C1A"/>
  </g>
  <circle cx="19" cy="-1" r="2.3" fill="#FF4A3D"/>
</svg>
```

**Coral button**: bg #FF4A3D, radius 11px, `display:flex; align-items:center`, white Geist 500 text with line-height 18px. Sizes: nav is 40px tall with 16px inline padding and 14px text. Hero and Close are 48px tall with 22px inline padding and 15px text.

**Step tracker** (top of each of the 3 feature sections): a flex row with 10px gap and 6px bottom padding: `1 Search` · rule · `2 Signals` · rule · `3 Score`. Each rule is 28×1px #B9B8B3. All labels are Geist 14px/18px. The active step is #1C1C1A at weight 600. Inactive steps are #8A8984 at weight 500.

**Agent pill**: a dark capsule, bg #1C1C1A, radius 999px, padding 6px top/bottom, 10px left, 12px right, 8px gap, `align-self:start`. It holds three things in order: an 8×8 dot #7CBDF2 (circle), the agent name in white Geist 13px/16px weight 500, and the status text in #B9B8B3 Geist 13px/16px weight 400.

**Feature row layout** (Sections 1, 2 and 3): a flex row, `align-items:center`, gap **72px**, width 1184px.
- Left text column is **472px** wide, flex column, gap 18px. It holds the step tracker, then the H2 (Geist 48px/52px, weight 600, letter-spacing -0.035em, #1C1C1A), then the body (Geist 19px/29px, #5F5E5A).
- Right visual column is **640px** wide, flex column, gap 14px. It holds the visual stage (640×440), then the agent-pill row.

**Highlight bar** (used on source slips): a track 8px tall, bg #CFE5F8, radius 3px, padding 2px, with an inner fill 4px tall, bg #0F6FC0, radius 2px. The track and fill widths vary per slip.

---

## 1. Nav (y 0–68)

- Flex row, `align-items:center`, height 68px, inline padding 128px, gap **28px**.
- Contents in order:
  1. The logo block with `flex-grow:1`, so it pushes the links right.
  2. Links in Geist 15px/18px, weight 500, #5F5E5A: `How it works`, `For sales teams`, `For acquisition search`, `Pricing`, `Sign in`.
  3. A coral button (40px tall, 16px padding, 14px text): `Sign up free`.
- No background (inherits #F7F6F4) and no border.

## 2. Hero (y 68–688, height 620)

- Flex row, `align-items:center`, gap 32px, padding 72px top, 56px bottom, 128px inline.

**Left column, 480px, flex column:**
1. H1, width 440px, Geist 76px/74px, weight 600, letter-spacing -0.04em, #1C1C1A: **"Find the businesses worth the extra effort."**
2. A wrapper 470px wide with 26px top and 32px bottom padding, holding the sub in Geist 19px/29.5px, #5F5E5A: "Most of your market isn’t worth a call. Scorecard reads every business in the states you sell to and finds the few that are, with the reasons why."
3. A CTA row (flex, gap 22px, centered):
   - coral button `Sign up free` (48px tall, 22px padding, 15px text)
   - text link `How it works →` in Geist 17px/22px, weight 500, #1C1C1A.

**Right "Map" stage: 688×400, `position:relative`. Its children are absolutely positioned:**

| Element | left | top | w × h | Notes |
|---|---|---|---|---|
| Map image | 6px | -20px | 757×440 | `textures/v15/hero-map.svg` as background-image, `background-size:100% 100%`, centered, no-repeat. It overflows the stage on the right and top. |
| Hand-drawn loop SVG | 17px | 66px | 130×121 | Coral loop around the highlighted dot cluster (SVG below) |
| Caveat note | 136px | 40px | auto | "your top accounts." in Caveat 30px/36px, weight 700, #FF4A3D, `rotate:-6deg`, `transform-origin:0 0`, `white-space:pre` |
| Account card | 214px | 150px | 280 wide | See card spec below |

The hero map SVG (`hero-map.svg`, 688×400 viewBox) contains:
- a white state fill, with 154 county outlines (stroke #1C1C1A at 0.16 opacity, width 0.7) and a 0.5-opacity outline
- 161 grey dots (#D6D4CF), 30 light-blue dots (#7CBDF2) and 7 blue dots (#1A8FE8) clustered around (75–87, 153–171)
- one coral target dot at (80,154), r 4.06, with a coral ring at r 9 (stroke 0.45 opacity).

Loop SVG (paste verbatim):

```html
<svg width="140" height="130" viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg" style="position:absolute;left:17px;top:66px;width:130px;height:121px">
  <path d="M27.8,31.2 L33.1,26.7 L39.3,22.5 L46.6,19.5 L54.8,19.1 L62.8,20.1 L70.1,23.2 L77.4,24.7 L85.1,26.1 L92.4,29.0 L99.2,32.8 L102.8,38.8 L105.5,44.9 L106.4,51.3 L107.9,57.2 L109.3,63.4 L109.2,69.8 L108.1,76.3 L104.1,82.0 L99.1,87.0 L92.5,90.7 L85.8,93.7 L80.1,98.2 L72.9,100.9 L65.3,103.4 L57.1,102.6 L49.6,100.4 L42.3,98.6 L36.0,95.2 L29.0,92.7 L21.4,90.0 L15.8,85.2 L13.3,79.0 L11.3,72.9 L11.9,66.6 L11.7,60.6 L12.1,54.6 L11.7,48.0 L14.8,42.0 L19.7,36.8 L26.5,33.2 L34.0,31.0 L40.7,28.3 L47.5,25.6 L54.9,23.2" transform="translate(10,20)" fill="none" stroke="#FF4A3D" stroke-width="2.4" stroke-linecap="round"/>
</svg>
```

**Account card**: bg #FFFFFF, radius 12px, `box-shadow: 0 0 0 1px #E6E4E0, 0 18px 40px -18px rgba(0,0,0,.28)` (#00000047), padding 16px, flex column, gap 12px, width 280px.
1. **Header row** (space-between, gap 10px, centered):
   - Left stack:
     - "Sierra Line Grounds" in Geist 14px/21px, weight 600, #1C1C1A
     - "Truckee, CA · Landscaping" in 13px/21px, #6E6D69
   - Right: a 34×34 circle, #0F6FC0, holding a white "A" (14px, weight 600).
2. **Bullets**: border-top 1px #E6E4E0, padding-top 12px, flex column, gap 6px. Each row is a flex row with an 8px gap: a 6×6 dot #1A8FE8 (`position:relative; top:8px`) and text in 14px/21px, #5F5E5A. The three bullets are:
   - "Does commercial snow removal"
   - "Serves businesses and HOAs"
   - "Owner-run, from its About page"
3. **Contact row**: border-top 1px #E6E4E0, padding-top 12px, flex row, gap 10px, centered.
   - A 30×30 circle, #EFEEEB, holding "DK" (12px/16px, weight 600, #5F5E5A).
   - A stack that grows to fill the row:
     - "Dana Kessler, owner" in 14px/18px, weight 600, #1C1C1A
     - "Direct line and email" in 13px/16px, #6E6D69
   - A dark button 30px tall: bg #1C1C1A, radius 8px, 12px inline padding, "Call" in white 13px/16px, weight 500.

## 3. Section 1: Search (y 688–1410, height 722)

- Section: bg **#EAF3FC**, `position:relative`, padding 120px top/bottom, 128px inline, flex column, centered.
- Background texture: an absolute layer at left 0, top 0, width 1440px, height 100%, using `textures/v15/search-halftone-bg.svg` with `background-size:100% 100%`, **opacity 0.55**.
  - The SVG's native size is 1440×920, so it is squashed vertically to 722px.
  - Its content is a 6px halftone dot grid (#1C1C1A at 0.07 opacity) plus fading dot columns and a blue/grey dot map cluster (#D6D4CF, #C4E0F8, #7CBDF2, #1A8FE8).
- Content: the feature row described in section 0, with `position:relative` so it sits above the texture.

**Left column:**
- Tracker: **1 Search** is active.
- H2: **"Search the states you sell to, the way you’d describe it."**
- Body: "Describe the businesses you want. The Search agent reads each website and keeps the Matches, with the line that proves it. You choose which ones to add."

**Right stage: 640×440, relative:**

| Element | left | top | size | Style |
|---|---|---|---|---|
| California dot map | 0 | 18px | 363×404 | `textures/v15/ca-dots-final.svg`, `background-size:100% 100%` |
| "Lake Tahoe" label | 176px | 160px | auto | Geist 11px/14px, weight 500, uppercase, letter-spacing 0.06em, #3F6A8F |
| Caveat note | 184px | 62px | 210px wide | "plows Truckee and Tahoe all winter" in Caveat 24px/24px, weight 400, #FF4A3D, `rotate:-4deg`, origin 0 0 |
| Readout stack | 400px | 150px | 240px wide | flex column, gap 10px (contents below) |

Readout stack contents:
1. "landscapers that also plow snow, California" in Geist 15px/20px, #5F5E5A.
2. A row (baseline-aligned, gap 10px):
   - "9,840" in 40px/44px, weight 600, letter-spacing -0.03em, `font-feature-settings:"tnum"`, #B9B8B3
   - "→" in 20px/24px, #B9B8B3
   - "412" with the same type as "9,840" but in #1C1C1A
3. "Matches, most in the Sierra" in 14px/18px, #5F5E5A.

`ca-dots-final.svg` (363×404) contains:
- The state outline path (stroke #E2E0DB).
- 760 grey dots (r 1.9, #D3D1CC) and 67 blue match dots (r 2.5, #7CBDF2).
- The target dot at (152.8,120.8), r 5.5, #0F6FC0, with a small ellipse (#B9D9F4 fill, #7CBDF2 stroke) at (157.9,130.4).
- A **coral hand-drawn loop** around that dot (stroke #FF4A3D, width 2).

**Agent pill** (below the stage): `Search agent` / `checked 9,840 businesses`.

## 4. Sticky 2 + 3 (y 1410–2855, height 1445)

- Wrapper: no bg (page #F7F6F4), padding 120px top/bottom, 128px inline, flex column, centered.
- It contains two feature rows stacked:
  - **Section 2** has `padding-bottom:120px`.
  - **Section 3** has `padding-top:120px` and `border-top:1px solid #E6E4E0`.
- The name signals intent: the 2 and 3 rows are meant to share one sticky scroll container, with keyframes driving each visual (see the keyframes artboard).

### 4a. Section 2: Signals (1184×602)

**Left column:**
- Tracker: **2 Signals** is active.
- H2: **"See what’s true about each one."**
- Body: "The Research agent reads their website, social posts, search results and state records. It answers every Signal and shows where each answer came from."

**Right stage: 640×440, flex column, gap 18px, `justify-content:center`.**

The stage holds four "source → answer" rows. Each row is a flex row with `align-items:center`, made of:
- the source slip, 250px wide
- a connector SVG, 70×20
- an answer stack (padding-left 10px, gap 2px):
  - label in Geist 12px/16px, #8A8984
  - value in 18px/22px, weight 500, #1C1C1A

Connector SVG (same in every row):

```html
<svg width="70" height="20" viewBox="0 0 70 20"><line x1="4" y1="10" x2="62" y2="10" stroke="#7CBDF2" stroke-width="1.5"/><circle cx="64" cy="10" r="3.5" fill="#0F6FC0"/></svg>
```

Source slips, top to bottom:

1. **Website slip**
   - Box: bg #FFF. Radius is 4px on three corners and **14px top-right** (a page with a folded corner). Ring `0 0 0 1px #E6E4E0`. Padding 12px top, 14px sides, 14px bottom. Flex column, gap 8px. `rotate:-1.2deg`.
   - Header (gap 7px): a globe icon, then "company website" in 12px/16px, #5F5E5A.
   - Lines: a 200×4 bar #E4E2DE (radius 2), a highlight bar (track 150, fill 140), and a 180×4 bar #E4E2DE.
   - Answer: **Business specialty / Commercial snow removal**.
2. **Social slip**
   - Box: bg #FFF, radius 16px, ring #E6E4E0, padding 12px/14px, gap 8px, `rotate:0.8deg`.
   - Header (gap 8px): a 22×22 avatar circle #E4E2DE, "Social post", and a speech-bubble icon pushed right with `margin-left:auto`.
   - Lines: a highlight bar (track 150, fill 120) and a 170×4 bar #E4E2DE.
   - Answer: **People / Mark Ruiz, ops manager**.
3. **Search-result slip**
   - Box: no bg, `border-left:2px solid #E4E2DE`, padding 10px/14px, gap 7px, no rotation.
   - Header: a magnifier icon, then "Search result".
   - Lines: a 170×5 bar #7CBDF2 (the title link), a 110×3 bar #C9C7C2 (the URL), and a highlight bar (track 150, fill 100).
   - Answer: **Firmographics / 2 yards, Truckee and Tahoe City**.
4. **State filing slip**
   - Box: bg #FBFAF7, radius 2px, `box-shadow: inset 0 0 0 4px #FBFAF7, inset 0 0 0 5px #E6E4E0, 0 0 0 1px #D9D7D2` (a certificate double border). Flex row, gap 12px, centered, padding 12px/14px, `rotate:1.1deg`.
   - Left column (grows, gap 7px):
     - header: a columns icon, then "State business filing"
     - a highlight bar (track 140, fill 120)
     - a 130×4 bar #E4E2DE
   - Right: a 34×34 seal SVG.
   - Answer: **Business ownership / Owner-run since 2009**.

Icons (paste verbatim, all 16×16):

```html
<!-- globe -->
<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" fill="none" stroke="#5F5E5A" stroke-width="1.3"/><ellipse cx="8" cy="8" rx="2.8" ry="6.5" fill="none" stroke="#5F5E5A" stroke-width="1.3"/><line x1="1.5" y1="8" x2="14.5" y2="8" stroke="#5F5E5A" stroke-width="1.3"/></svg>
<!-- speech bubble -->
<svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 3.5 C2 2.7 2.7 2 3.5 2 H12.5 C13.3 2 14 2.7 14 3.5 V9.5 C14 10.3 13.3 11 12.5 11 H6.5 L3.5 14 V11 H3.5 C2.7 11 2 10.3 2 9.5 Z" fill="none" stroke="#5F5E5A" stroke-width="1.3" stroke-linejoin="round"/></svg>
<!-- magnifier -->
<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.8" fill="none" stroke="#5F5E5A" stroke-width="1.4"/><path d="M10.6 10.6 L14 14" stroke="#5F5E5A" stroke-width="1.4" stroke-linecap="round"/></svg>
<!-- columns / state building -->
<svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 6 L8 2.5 L14 6 Z" fill="none" stroke="#5F5E5A" stroke-width="1.3" stroke-linejoin="round"/><line x1="4" y1="7.5" x2="4" y2="12" stroke="#5F5E5A" stroke-width="1.3"/><line x1="8" y1="7.5" x2="8" y2="12" stroke="#5F5E5A" stroke-width="1.3"/><line x1="12" y1="7.5" x2="12" y2="12" stroke="#5F5E5A" stroke-width="1.3"/><line x1="2" y1="13.5" x2="14" y2="13.5" stroke="#5F5E5A" stroke-width="1.3"/></svg>
<!-- seal, 34x34 -->
<svg width="34" height="34" viewBox="0 0 34 34"><circle cx="17" cy="17" r="14" fill="none" stroke="#7CBDF2" stroke-width="1.5" stroke-dasharray="2 2.5"/><circle cx="17" cy="17" r="9" fill="none" stroke="#7CBDF2" stroke-width="1.2"/></svg>
```

**Pill row** (flex, gap 12px, centered):
- the agent pill `Research agent` / `Sierra Line Grounds`, with `white-space:pre` on both texts
- then the text "Coming soon: re-reads every month." in Geist 13px/16px, #5F5E5A.

### 4b. Section 3: Score (1184×603)

**Left column (gap 18px):**
- Tracker: **3 Score** is active.
- H2: **"Tell it what you want. It ranks the rest."**
- Body: "Put your Signals in order and say which answers you prefer. Every Account gets a Score and a Grade, with the reasons. Soon the Scoring agent learns from your marks and suggests better weights."
- Kicker: "Then your reps do the talking, starting with the A’s." in Geist 19px/29px, **weight 500, #1C1C1A**.

**Right stage: 640×440, flex row, `align-items:center`, gap 28px.**

1. **Marks column** (230px, flex column, gap 22px):
   - Eyebrow "You mark a few": Geist 11px/14px, weight 500, uppercase, letter-spacing 0.06em, #8A8984.
   - Three rows (flex, gap 12px, centered). Each has a 22×22 icon and a name in 18px/22px, weight 500:
     - tick + "Oak & Stone Outdoor" (#1C1C1A)
     - tick + "Summit Snow Co." (#1C1C1A)
     - **cross** + "Sunnyside Plowing" (**#9A9994**)
   - Caveat note "“driveways only, skip”" in Caveat 24px/24px, #FF4A3D, `rotate:-3deg`, origin center.
2. **Curvy arrow** SVG, 80×40.
3. **Ranking column** (260px, flex column, gap 8px):
   - Eyebrow "It ranks the other 409", styled like the "You mark a few" eyebrow.
   - A list (padding-top 8px, flex column, gap 10px). Each row is a flex row with a 10px gap: a 28×28 grade circle (13px/16px, weight 600, centered letter) followed by a name or a placeholder bar 6px tall, radius 3px, #E4E2DE.

| # | Grade circle bg / letter color | Content | Row opacity |
|---|---|---|---|
| 1 | #0F6FC0 / #FFF "A" | "Sierra Line Grounds", 16px/20px, **weight 600**, #1C1C1A | 1 |
| 2 | #0F6FC0 / #FFF "A" | "Alpine Edge Landscapes", 16px/20px, weight 400 | 1 |
| 3 | #7CBDF2 / #0B3A63 "B" | bar, 150px | 1 |
| 4 | #7CBDF2 / #0B3A63 "B" | bar, 130px | 1 |
| 5 | #DCEBF8 / #0B3A63 "C" | bar, 140px | 0.7 |
| 6 | #E2E1DE / #5F5E5A "D" | bar, 120px | 0.45 |

**Pill row** (flex, gap 12px):
- the agent pill `Scoring agent` / `learned from 3 marks`
- an outline chip: radius 999px, `box-shadow: inset 0 0 0 1px #D9D7D2`, padding 2px/8px, "Coming soon" in 12px/16px, #5F5E5A.

Icons:

```html
<!-- tick 22 -->
<svg width="22" height="22" viewBox="0 0 22 22"><path d="M3 12 L9 18 L20 4" fill="none" stroke="#0F6FC0" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
<!-- cross 22 -->
<svg width="22" height="22" viewBox="0 0 22 22"><path d="M5 5 L17 17 M17 5 L5 17" fill="none" stroke="#FF4A3D" stroke-width="2.6" stroke-linecap="round"/></svg>
<!-- curvy arrow 80x40 -->
<svg width="80" height="40" viewBox="0 0 80 40"><path d="M4 20 C 30 6, 50 34, 72 20" fill="none" stroke="#1C1C1A" stroke-width="1.8" stroke-linecap="round"/><path d="M64 14 L73 20 L64 26" fill="none" stroke="#1C1C1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
```

## 5. Stories / "Example searches by industry" (y 2855–3559, height 704)

- Section: bg **#EAF3FC**, relative, padding 120px top/bottom, 128px inline, flex column, centered.
- Background: an absolute layer at 0,0, 1440 × 100%, using `textures/v15/stories-halftone-bg.svg` (native 1440×704, so no distortion), `background-size:100% 100%`, **opacity 1** (no reduction, unlike Section 1).
- Heading wrapper: relative, padding-bottom 48px, centered text. "Example searches by industry" in Geist 54px/56px, weight 600, letter-spacing -0.04em, **#000000**.
- Card: bg #FFF, radius 16px, ring `0 0 0 1px #E6E4E0`, flex row, width 100% (1184px), relative.
  - It has 4 equal columns (`flex:1 1 0`), each padded 28px top/bottom and 26px sides. Columns 2–4 have `border-left:1px solid #E6E4E0`.

**Column structure (top to bottom):**
1. Industry label: 14px/18px, weight 600, #1C1C1A.
2. Query: a wrapper with min-height 106px and padding-top 10px, text in 16px/24px, #5F5E5A.
3. Count row: border-top and border-bottom 1px #E6E4E0, padding 16px top/bottom, baseline-aligned, gap 8px.
   - number in 36px/36px, weight 600, letter-spacing -0.04em, #1C1C1A
   - caption in 14px/18px, #5F5E5A
4. "Top match": padding-top 16px, 13px/16px, weight 500, #6E6D69.
5. Match row: padding-top 8px, gap 10px, centered.
   - a 26×26 circle #0F6FC0 with a white "A" (12px, weight 600)
   - the name, which grows to fill the row (14px/18px, weight 500, #1C1C1A)
   - the score in **Geist Mono** 14px/18px, weight 600, #0F6FC0.
6. Evidence: padding-left 36px, padding-top 6px, 13px/19px, #6E6D69.

| Label | Query | Count | Caption | Top match | Score | Evidence |
|---|---|---|---|---|---|---|
| Distribution | Hose and fitting distributors in the Mountain West that sell to contractors. | 74 | Matches, of 5,417 checked | Hartwell Industrial Supply | 94 | Sells hose and fittings to contractors, Provo branch |
| SaaS | B2B software companies in California with usage-based pricing. | 52 | Matches, of 18,240 checked | Tallyline | 93 | Usage-based pricing, on its pricing page |
| Healthcare | Med spa groups in Arizona and Texas with three or more locations. | 41 | Matches, of 9,860 checked | Lumen Aesthetics | 92 | Four locations, listed on its website |
| Acquisition search | Pest control companies in Texas, founder-run for 20+ years. | 31 | Matches, of 2,614 checked | Hill Country Pest Control | 94 | Founder-run since 1998, from its About page |

## 6. Pricing (y 3559–4673, height 1114)

- Section: border-top 1px #E6E4E0, padding 120px top/bottom, 128px inline, flex column, centered.
- Heading "Pricing": padding-bottom 56px, Geist 54px/56px, weight 600, letter-spacing -0.04em, #1C1C1A.
- Table card: bg #FFF, radius 16px, ring #E6E4E0, flex column, width 1184px, relative.
  - **Highlight column**: an absolute layer at left **660px**, top 0, width **240px**, height 100%, bg **#EAF3FC**, `border-top:3px solid #1A8FE8`. It sits behind the Monthly column, and the rows above it are `position:relative`.
  - Column math: 32px card padding + the label column (grows to 628px) + three 240px columns = 1184. The Monthly column therefore starts at x=660.

**Header row**: flex row, `align-items:end`, padding 32px top, 24px bottom, 32px inline, border-bottom 1px #E6E4E0.
- It starts with a grow spacer. Then come three plan columns, each 240px wide with 12px inline padding, flex column, gap 14px:
  - Plan name: 16px/20px, weight 600, #1C1C1A.
  - Price row (baseline, gap 6px): price in 44px/44px, weight 600, letter-spacing -0.04em; unit in 15px/18px, #5F5E5A.
  - Button: 44px tall, radius 10px, centered 15px/18px, weight 500.

| Column | Badge | Name | Price | Unit | Button |
|---|---|---|---|---|---|
| 1 | — | Free trial | $0 | for 14 days | `Sign up free`: white bg, `inset 0 0 0 1px #1C1C1A`, #1C1C1A text |
| 2 | "Most teams": bg #0F6FC0, radius 999, height 24, padding 0 9px, white 12px/16px weight 600, fit-content | Monthly | $59 | per month | `Start with the free trial`: coral #FF4A3D, white text |
| 3 | — | Done for you | Custom | — | `Book a demo`: transparent, `inset 0 0 0 1px #1C1C1A` |

**Feature rows**: the container has padding 8px top, 16px bottom, 32px inline. Each row is flex, centered, min-height 52px.
- The label cell grows to fill the row (15px/18px, #1C1C1A).
- Each of the three value cells is 240px wide with 12px inline padding.
- Text values are 15px/18px, weight 600, #1C1C1A.
- A dash "—" is 15px, weight 400, #6E6D69.
- A tick is the 16×16 SVG below. It is **#0F6FC0 in the Monthly column** and #1C1C1A elsewhere.
- A "Coming soon" chip is bg #EFEEEB, radius 999, padding 4px/9px, 13px/16px, weight 500, #1C1C1A.

Rows 1–6 have `border-bottom:1px solid #EDEBE7`. Rows 7 and 8 have no border. Row 9 has `border-top:1px solid #EDEBE7`.

| Row label | Free trial | Monthly | Done for you |
|---|---|---|---|
| Credits | 500 | 1,000 every month | Scaled to your market |
| Extra credits | — | $10 per 100 | Included |
| Search agent: find and add businesses | ✓ | ✓ (blue) | ✓ |
| Research agent: Standard Signals with sources | ✓ | ✓ (blue) | ✓ |
| Custom Signals | ✓ | ✓ (blue) | ✓ |
| LinkedIn, Google Places and owner contacts | — | ✓ (blue) | ✓ |
| Research agent re-reads Accounts each month | — | Coming soon | Coming soon |
| Scoring agent learns from your marks | — | Coming soon | Coming soon |
| We set up, run and tune it for you | — | — | ✓ |

```html
<svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="#1C1C1A" stroke-width="1.8"/></svg>
```

- Footnote below the card: padding-top 20px, "Credits add businesses to your list and pay for premium reads." in 15px/18px, #5F5E5A.

## 7. FAQ (y 4673–5768, height 1095)

- Section: border-top 1px #E6E4E0, flex row, gap 72px, padding 120px top/bottom, 128px inline.
- **Left column** (380px, flex column, gap 20px):
  - "Questions" in 42px/44.5px, weight 600, letter-spacing -0.04em, #1C1C1A.
  - "Something else? **Book a demo** and ask us." in 17px/26px, #5F5E5A. The phrase "Book a demo" is #1C1C1A, weight 500, `text-decoration: underline 1px; text-underline-position: from-font`.
- **Right list** (grows, about 732px): border-top 1px #E6E4E0. Each item has border-bottom 1px #E6E4E0, padding 24px top/bottom, flex column, gap 8px.
  - Question: 18px/22px, weight 600, #1C1C1A.
  - Answer: 16px/25px, #5F5E5A.
  - All items are open, with no accordion chrome.

1. **What happens after the 14-day trial?** Pick the monthly plan to keep going. The trial covers Search, Scores and Standard Signals. LinkedIn, Google Places and owner contacts need the monthly plan.
2. **Where does the data come from?** Business listings, PPP loan records and each business’s own website. Premium adds LinkedIn and Google Places. Every answer shows its source.
3. **How is this different from buying a list?** A list gives you businesses in an industry code. Scorecard reads each one, checks it against what you described, and shows why it ranks where it does.
4. **Does it work with my CRM?** Export any list to CSV and bring it into your CRM.
5. **What do the agents do?** The Search agent finds businesses that match what you described. The Research agent reads their websites and answers your Signals. The Scoring agent, coming soon, learns from your marks and suggests better weights.
6. **Will it change my Scores on its own?** No. The Scoring agent suggests changes. You preview them, then go ahead. You can undo any time.
7. **What if I run out of credits?** Add more any time at $10 per 100.

## 8. Close CTA (y 5768–6278, height 510)

- Section: bg **#121211**, relative, padding 120px top/bottom, 128px inline, flex column, centered.
- Background: an absolute layer at 0,0, 1440 × 100%, using `textures/v15/close-halftone-bg.svg` (native 1440×510), `background-size:100% 100%`, opacity 1. It is a light halftone (#F2F1EE at about 0.07) with a dim dot map (#3A3A36, #1F3A57, #2D6EB2, #4AA8FF) and one coral dot (#FF4A3D).
- Everything below is `position:relative`:
  1. H2, 720px wide, centered: "Stop spending time on accounts that won’t buy." in 54px/56px, weight 600, letter-spacing -0.04em, #F2F1EE.
  2. Sub wrapper, 840px wide, padding-top 18px, centered: "Try it free for 14 days with 500 credits." in 19px/29.5px, #B5B4AE.
  3. Form row (flex, gap 10px, padding-top 28px):
     - Input: 340×48, bg #121211, 1px solid #45453F, radius 11px, 16px inline padding. The placeholder "Work email" is 17px/22px, #8A8984.
     - Coral button `Sign up free` (48px tall, 22px padding, 15px text).
  4. Note (padding-top 16px): "Next, you'll describe your best customers." in 14px/18px, #B5B4AE. Note the straight apostrophe in "you'll".

## 9. Footer (y 6278–6628, height 350)

- Section: border-top 1px #E6E4E0, flex column, gap 48px, padding 64px top, 32px bottom, 128px inline.
- **Top row** (flex, gap 40px):
  - Brand column (265px, gap 14px): the logo, then "Find the businesses worth the extra effort." in 15px/23px, #6E6D69, width 260px.
  - Then four link columns (each `flex:1`, gap 11px):
    - Header: **Geist Mono** 12px/16px, weight 500, uppercase, letter-spacing 0.06em, #6E6D69, with a 4px bottom pad.
    - Links: Geist 15px/18px, #5F5E5A.
  - **Product**: How it works, For sales teams, For acquisition search, Pricing, Sign in
  - **Company**: About, Careers, Contact
  - **Resources**: Guides, Data sources, Changelog, Help center
  - **Legal**: Privacy policy, Terms of service, Security, Cookie settings
- **Bottom bar**: border-top 1px #E6E4E0, padding-top 20px, "© 2026 Scorecard" in 14px/18px, #6E6D69.

---

## 10. Agent keyframes (animation spec)

The keyframes artboard has bg #F7F6F4 and padding 64px top/bottom, 40px inline. It holds 3 rows with a 72px gap between them.

Each row has:
- A header (baseline, gap 14px):
  - title in Geist 28px/34px, weight 600, letter-spacing -0.02em, #1C1C1A
  - job line in 16px/20px, #6E6D69
- Then 4 frames side by side (gap 20px). Each frame is 640px wide, flex column, gap 12px:
  - frame title in 14px/18px, weight 600, #1C1C1A
  - the stage block, which is exactly the home section's right column (640×440 stage plus pill row, gap 14px)
  - caption in 13px/19px, #5F5E5A.

**Frame 4 of each row is the home section's end state.** Frames 1–3 are the same DOM with opacity changes, a different map asset, or different text. Below, "hidden" means `opacity:0`. Animate opacity and the text swaps between frames.

### Row 1: "1 Search · Search agent"

Job line: "Job: turn your words into a list. Decides what counts as a Match."

Element keys:
- **map**: the CA map layer at 0/18, 363×404
- **tahoe**: the "Lake Tahoe" label
- **note**: the Caveat note
- **query**: "landscapers that also plow snow, California"
- **count**: the 9,840 → N row; its parts are **from** (9,840), **arrow** and **to** (N)
- **sub**: the caption under the count
- **pill**: the agent pill

| Frame | Title | map asset (opacity) | tahoe | note | query | count | sub | pill | Caption |
|---|---|---|---|---|---|---|---|---|---|
| 1.1 | 1 · You ask | `ca-dots-grey.svg` (**0.45**) | hidden | hidden | shown (types in) | **whole row hidden** | hidden | **hidden** (text would read "checked 9,840 businesses") | Start frame. A faint grey California. Your words type in on the right. |
| 1.2 | 2 · It ranks the market | `ca-dots-grey.svg` (1) | hidden | hidden | shown | **from "9,840" shown**; arrow and to hidden (to = "412") | hidden ("Matches, most in the Sierra") | shown: `Search agent` / `checking 9,840 businesses` | The map fills in. The Search agent ranks every business in the state by how close it is to your words. |
| 1.3 | 3 · It reads and judges | `ca-dots-reading.svg` (1) | **shown** | hidden | shown | all shown; to = **"212"** | shown: **"Matches so far"** | `Search agent` / `reading websites` | Dots turn blue as websites prove a Match. They pile up along the Sierra. The count climbs. |
| 1.4 | 4 · One gets circled = Home Section 1 | `ca-dots-final.svg` (1) | shown | **shown** | shown | to = **"412"** | "Matches, most in the Sierra" | `Search agent` / `checked 9,840 businesses` | End frame. The count settles at 412. A coral loop draws around one near Truckee, and the hand note writes in. |

Map asset differences, all 363×404 with the same outline path (stroke #E2E0DB):
- `ca-dots-grey.svg`: 827 grey dots (r 1.9, #D3D1CC), plus the target dot at (152.8,120.8) at r 5.5, still **grey #D3D1CC**. There are no blue dots.
- `ca-dots-reading.svg`: 760 grey dots plus **67 blue dots** (r 2.5, #7CBDF2). The target dot is **#0F6FC0**, with a pale ellipse (157.9,130.4, rx 4.5, ry 8, fill #B9D9F4, stroke #7CBDF2). There is **no coral loop**.
- `ca-dots-final.svg`: identical to "reading" **plus the coral loop path** (stroke #FF4A3D, width 2, round caps) around the target dot. Draw it with stroke-dashoffset.

Suggested tweens:
- 1.1→1.2: map opacity 0.45→1; the 9,840 fades in; the pill fades in.
- 1.2→1.3: swap in blue dots with a staggered fade (reading-only dots: 67 blue plus the target); "Lake Tahoe" fades in; the arrow and N appear; count up 0→212; the sub reads "Matches so far".
- 1.3→1.4: count 212→412; the sub changes to "Matches, most in the Sierra"; the loop path draws on; the Caveat note fades/writes in; the pill status changes to "checked 9,840 businesses".

### Row 2: "2 Signals · Research agent"

Job line: "Job: find out what’s true about one business. Answers every Signal and keeps the line that proves it."

Each source row has three animated parts:
- **hl**: the highlight-bar track's opacity (1 or **0.2**)
- **conn**: the connector SVG's opacity
- **ans**: the answer stack's opacity

Slips are always visible, with their rotations. A "lit" row has hl 1, conn 1 and ans 1. An "unlit" row has hl 0.2, conn 0 and ans 0.

| Frame | Title | Website | Social | Search result | State filing | Pill status | "Coming soon: re-reads every month." | Caption |
|---|---|---|---|---|---|---|---|---|
| 2.1 | 1 · It gathers the sources | unlit | unlit | unlit | unlit | `gathering sources` | hidden | Start frame. Four slips slide in: website, social post, search result, state filing. Nothing is highlighted yet. |
| 2.2 | 2 · It reads the website | **lit** | unlit | unlit | unlit | `reading the website` | hidden | The website line lights up and draws out into its answer: Commercial snow removal. |
| 2.3 | 3 · Social and search | lit | **lit** | **lit** | unlit | `reading social and search` | hidden | The social post and the search result light up next. No evidence means no answer, never a guess. |
| 2.4 | 4 · State records, then done = Home Section 2 | lit | lit | lit | **lit** | `Sierra Line Grounds` | **shown** | End frame. The state filing gets its stamp and the last answer lands. The monthly re-read note fades in. |

Notes:
- The search-result slip's #7CBDF2 title bar and #C9C7C2 URL bar are always full opacity. Only its highlight track dims.
- The seal SVG on the filing slip is visible in every frame; the "stamp" in 2.4 is just the row lighting.
- Tween per row: the highlight track goes 0.2→1, then the connector line draws left to right (dash offset) with its dot landing, then the answer fades in or slides 6px.
- In 2.1 the slips "slide in": stagger translateY/opacity from 0.

### Row 3: "3 Score · Scoring agent"

Job line: "Coming soon. You mark a few, it learns what you want and ranks the rest."

Element keys:
- **marks**: the whole 230px marks column
- **arrow**: the curvy arrow
- **eyebrow**: the ranking eyebrow text
- **list**: the 6-row list
- **pillrow**: the pill plus the "Coming soon" chip

| Frame | Title | marks | arrow | eyebrow | list (order / opacity) | pillrow | Caption |
|---|---|---|---|---|---|---|---|
| 3.1 | 1 · Today's ranking | **hidden** | hidden | "Today’s ranking" | **A Alpine Edge Landscapes** (400), **B Sierra Line Grounds** (400, 16px), B bar 150, B bar 130, C bar 140 (0.7), D bar 120 (0.45); list opacity 1 | **hidden** (status would read "learned from 3 marks") | Start frame. Only the ranked list, from your Signals today. Sierra Line Grounds is a B. |
| 3.2 | 2 · You mark a few | **shown** (ticks, cross and note land one by one) | hidden | "Today’s ranking" | same as 3.1 | shown: `Scoring agent` / `reading your marks` + Coming soon | Two ticks and a cross land one by one. The hand note writes in: driveways only, skip. |
| 3.3 | 3 · It learns | shown | **shown** (draws) | "Re-ranking the other 409" | same order as 3.1, list wrapper **opacity 0.35** | `Scoring agent` / `learning from 3 marks` | The arrow draws. The list fades while the Scoring agent learns what your ticks share: commercial lots, not driveways. |
| 3.4 | 4 · It ranks the rest = Home Section 3 | shown | shown | "It ranks the other 409" | **A Sierra Line Grounds (weight 600)**, A Alpine Edge Landscapes, B 150, B 130, C 140 (0.7), D 120 (0.45); opacity 1 | `Scoring agent` / `learned from 3 marks` | End frame. The list comes back re-ranked. Sierra Line Grounds jumps to the top as an A. Coming soon. |

Key motion between 3.3 and 3.4:
- Sierra Line Grounds moves from row 2 to row 1.
- Its grade chip goes from B (#7CBDF2 bg, #0B3A63 letter) to A (#0F6FC0 bg, white letter).
- Its name goes from weight 400 to 600.
- Alpine Edge drops to row 2 and stays an A.
- Use FLIP for the swap; the list opacity goes 0.35→1.

In 3.2, stagger the marks: tick 1, tick 2, cross (and the name turns #9A9994), then the Caveat note writes in.

---

## 11. Section visual options (alternatives, not in the home build)

The "section visuals" artboard has bg #F7F6F4, padding 64px and gap 56px.
- Intro: "Section visuals, without the UI" in 40px/44px, weight 600, letter-spacing -0.03em.
- Sub: "Two options per section. A is non-UI: dots, type and a hand note. B is hybrid: two or three elements, no screens. Each one can still play as keyframes." in 17px/26px, #5F5E5A, 820px wide.

Each option is a 640px tile (440px stage plus a caption in 13px/19px with a bold #1C1C1A lead-in).

- **1A · The sieve, California.** "Every grey dot is a business. The ones that plow snow turn blue, packed along the Sierra around Lake Tahoe. One near Truckee gets circled with its proof." This is identical to the home Section 1 stage without the pill, and uses `ca-dots-final.svg`.
- **1B · Words meet proof.** "Your words on top, their words below, the matching phrase lights up, the Match stamp lands. No screen, just the evidence." The stage is a flex column, gap 28px, centered, 24px inline padding, and holds:
  1. A row (gap 10px):
     - "You asked" in 13px/16px, weight 500, uppercase, letter-spacing 0.06em, #8A8984
     - "landscapers that also plow snow" in 20px/26px, #1C1C1A, where "plow snow" has `text-decoration: underline 1px #FF4A3D`.
  2. A quote in 34px/42px, weight 500, letter-spacing -0.02em, #9A9994: "“We keep commercial properties sharp all year. Mowing in summer, and **commercial snow removal, November through March.**”" The bold part is colored #0B3A63.
  3. A row (gap 14px):
     - "sierralinegrounds.com/services" in 14px/18px, #5F5E5A
     - a "Match" stamp: bg #0F6FC0, radius 999, padding 5px/12px, white 14px/18px weight 600, `rotate:-3deg`.
- **2A · The highlighter.** "Four sources, each drawn as what it is: a web page, a social post, a search result and a state filing with its seal. One line on each lights up and becomes an answer." This is identical to the home Section 2 stage, and is the option the home build uses. There is no 2B tile; an empty 100×100 placeholder frame sits in that row.
- **3A · The climb.** "A plain ranking ladder with grade bands on the side. One dot climbs from 7 to 1, with the reason written next to the arrow."
  - The stage is 640×440 with padding-top 20px, holding the SVG `textures/v15/visual-3a-climb-ladder.svg` (640×400):
    - grade bands A, B and C as 6px bars at x 120 (#0F6FC0 y26–94, #7CBDF2 y106–294, #DCEBF8 y306–334)
    - 8 hairlines
    - 6 grey dots
    - a dashed origin ring at (380,280)
    - a coral curved arrow up to a blue dot at (380,40)
  - Absolute overlays:
    - "Sierra Line Grounds · 94" at left 400, top 46, in 15px/20px, weight 600, #1C1C1A
    - a Caveat note "up 6, B to A. Plows commercial lots" at left 478, top 170, 150px wide, in Caveat 26px/26px, #FF4A3D, `rotate:-4deg`, origin 0 0.
- **3B · Mark a few, it ranks the rest.** "You tick two snow businesses that plow commercial lots and cross one that only does home driveways. The other 409 fall into grades." This is identical to the home Section 3 stage without the pill row.

---

## 12. Asset map

| File (`mockups/textures/v15/`) | Native size | Used by | Box | Sizing |
|---|---|---|---|---|
| `hero-map.svg` | 688×400 | Hero → Map stage | left 6, top -20, 757×440 (inside 688×400 stage) | `background-size:100% 100%`, center, no-repeat |
| `search-halftone-bg.svg` | 1440×920 | Section 1 bg | left 0, top 0, 1440 × 100% (722) | `100% 100%` (stretched), **opacity 0.55** |
| `ca-dots-final.svg` | 363×404 | Section 1 stage; KF 1.4; option 1A | left 0, top 18, 363×404 | `100% 100%` |
| `ca-dots-reading.svg` | 363×404 | KF 1.3 | left 0, top 18, 363×404 | `100% 100%` |
| `ca-dots-grey.svg` | 363×404 | KF 1.1 (opacity 0.45), KF 1.2 (opacity 1) | left 0, top 18, 363×404 | `100% 100%` |
| `stories-halftone-bg.svg` | 1440×704 | Stories bg | left 0, top 0, 1440 × 100% | `100% 100%`, opacity 1 |
| `close-halftone-bg.svg` | 1440×510 | Close CTA bg | left 0, top 0, 1440 × 100% | `100% 100%`, opacity 1 |
| `visual-3a-climb-ladder.svg` | 640×400 | Option 3A (alternative only) | inline in 640×440 stage, below 20px top pad | natural |

Paper source URLs follow the pattern `https://app.paper.design/file-assets/01M1WW0X8JMYFWS9ATJXX4B7JC/<ID>.svg`. The IDs are:
- hero-map = 1Y8Q6B78KSJ33PCV9MFENA3E6F
- search-halftone-bg = 0V20WWXNTWENX87621PVZM87A2
- ca-dots-final = 5JYX49VKP3WK4MM3Y0AP3DQZ61
- ca-dots-reading = 2D4VZN04FAYEABABJ7Z2WQ4YVW
- ca-dots-grey = 2P86J2ZRGXP35SW28CTW5AAP1K
- stories-halftone-bg = 6ZP22JXTXCM4DFFT6XCR1T9YDJ
- close-halftone-bg = 4RTZVDVK2VQARN1VREYQ2B6MQ9

Animation tip for Row 1: the grey, reading and final maps share an identical outline and dot coordinates, so you can inline `ca-dots-final.svg` once and drive the states with CSS:
- grey state: every dot fill #D3D1CC
- reading state: 67 dots go to #7CBDF2 at r 2.5, the target goes blue, the ellipse is shown
- final state: the loop path draws in.
