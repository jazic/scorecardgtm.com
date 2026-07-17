# app-symlink

Symlinks to the **canonical product docs in the Scorecard app repo** so the
marketing surface stays in lockstep with the product's own source of truth.
Edit these in the app repo (`scorecard/agent-os/product/`), never here — the
files below are just windows onto that directory.

| Link | Points at (app repo) |
|------|----------------------|
| `mission.md` | `scorecard/agent-os/product/mission.md` |
| `roadmap.md` | `scorecard/agent-os/product/roadmap.md` |

`../00 mission.md` also redirects here (`app-symlink/mission.md`) — the app
mission is now the single source of truth; the old marketing-specific mission
lives in git history.

## Setup assumption

These are **relative symlinks** (`../../../scorecard/...`). They resolve only
when the app repo is checked out as a sibling of this repo:

```
Documents/vscode/
├── scorecard/          ← app repo (source of truth)
└── scorecardgtm.com/   ← this repo
```

On a fresh clone without `scorecard/` alongside, or in CI, these links dangle —
that's expected. `docs/` is not part of the Pages deploy (`website/` +
`design-system/` only), so dangling links never affect the published site.

## Not yet linked

- `tech-stack.md` — exists in the app repo but is currently empty (0 bytes).
- **strategy / wiki** — no such doc exists in the app repo yet. When the app
  adds one under `agent-os/product/`, link it here:
  `ln -sfn ../../../scorecard/agent-os/product/<file>.md docs/app-symlink/<file>.md`
