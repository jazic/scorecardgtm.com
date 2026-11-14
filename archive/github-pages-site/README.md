# Archived: the GitHub Pages site (retired 2026-11-14)

This is the old static scorecardgtm.com, served by GitHub Pages until 2026-11-14. It is **not deployed** any more.
The live site is `site/` (EmDash + Astro on Cloudflare Workers), with its content in the EmDash CMS at
https://scorecardgtm.com/_emdash/admin.

Kept for reference: `index.html` is the approved v35 homepage design that `site/src/components/home/` reproduces
one-to-one, and the other pages are the pre-CMS landing pages. Their old URLs 301 to the new pages
(`site/astro.config.mjs`).

To view locally: `python3 -m http.server 8000` from the repo root, then open http://localhost:8000/archive/github-pages-site/
