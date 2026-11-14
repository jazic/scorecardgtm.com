#!/usr/bin/env python3
"""Copy legal/privacy.md and legal/terms.md into site/seed/seed.json as the /privacy and /terms pages.

Each page is a `landing` entry with one `prose` block (heading, last-updated line, Portable Text body).
Handles what these files use: #/##/### headings, paragraphs, "- " bullets, **bold** and [links](url).
Run from anywhere: python3 legal/to-seed.py
Once the site is live, edit the pages in the CMS instead and treat these files as the review copy.
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SEED = ROOT / "site/seed/seed.json"
PAGES = {"privacy": "Privacy Policy", "terms": "Terms of Service"}


def spans(text, key):
    children, defs = [], []
    for i, part in enumerate(re.split(r"(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))", text)):
        if not part:
            continue
        marks = []
        if part.startswith("**"):
            part, marks = part[2:-2], ["strong"]
        elif (m := re.fullmatch(r"\[([^\]]+)\]\(([^)]+)\)", part)):
            dk = f"{key}l{i}"
            defs.append({"_type": "link", "_key": dk, "href": m.group(2)})
            part, marks = m.group(1), [dk]
        children.append({"_type": "span", "_key": f"{key}s{i}", "text": part, "marks": marks})
    return children, defs


def to_pt(md, slug):
    blocks, para = [], []

    def block(text, **extra):
        key = f"{slug}{len(blocks)}"
        children, defs = spans(text, key)
        blocks.append({"_type": "block", "_key": key, "style": "normal", "markDefs": defs, "children": children, **extra})

    def flush():
        if para:
            block(" ".join(para))
            para.clear()

    for line in md.splitlines():
        if not line.strip():
            flush()
        elif (m := re.match(r"(#{2,3}) (.*)", line)):
            flush()
            block(m.group(2), style="h2" if len(m.group(1)) == 2 else "h3")
        elif line.startswith("- "):
            flush()
            block(line[2:], listItem="bullet", level=1)
        else:
            para.append(line.strip())
    flush()
    return blocks


seed = json.loads(SEED.read_text())
landing = seed["content"]["landing"]
for slug, title in PAGES.items():
    md = (ROOT / f"legal/{slug}.md").read_text()
    lines = md.splitlines()
    heading = lines[0].lstrip("# ").strip()
    updated = next(l for l in lines if l.startswith("Last updated"))
    body = "\n".join(l for l in lines[1:] if not l.startswith("Last updated"))
    entry = {"id": slug, "slug": slug, "status": "published", "data": {
        "title": title,
        "description": f"Scorecard {title.lower()}.",
        "sections": [{"_type": "prose", "_version": 1, "_key": f"{slug}-prose", "heading": heading, "updated": updated, "body": to_pt(body, slug)}],
    }}
    landing[:] = [e for e in landing if e["slug"] != slug] + [entry]

SEED.write_text(json.dumps(seed, indent="\t", ensure_ascii=False) + "\n")
print("updated", ", ".join(f"/{s}" for s in PAGES))
