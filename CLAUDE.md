# Pagecraft — project notes

A document editor for print-ready pages, starting with Pranjal's resume. Personal project, not work.

## Where things live

- **Local folder:** `C:\Important\pagecraft`. Deliberately on the C drive, outside the user folder: Pranjal
  asked for it there on 2026-11-22 (it briefly sat at `C:\Users\Pranjal Gupta\pagecraft` first). His work
  projects live on `G:\Claude Project\`; this one is the exception. Do not move it to G.
- **GitHub:** his **personal** account `Pranjalg1605`, never his work account (the default `gh` sign-in on this computer).
  Repo: https://github.com/Pranjalg1605/pagecraft — **private** (the resume data holds his phone number
  and personal email).
- **Two accounts on one machine:** the work account stays the default (`gh auth status`) so his work
  projects push as work. This folder's own git settings point GitHub sign-in at the personal account
  (`gh auth token --user Pranjalg1605`), so `git push` / `git pull` here just work. The `gh` command does
  NOT follow that — prefix it: `GH_TOKEN=$(gh auth token --user Pranjalg1605) gh pr create ...`.
  Never `gh auth switch` to personal and leave it there.
- **Commit identity:** set in this folder only — Pranjal Gupta <pranjalg1605@gmail.com>.
- **Pushing:** commit locally, show him, wait for an explicit "push it". Same rule as every project.

## How it started

`resume.html` and `resume.json` were built in a Claude desktop app session on 2026-11-22 and published as
the artifact "Pranjal Gupta Resume" (https://claude.ai/artifact/Aq7uHs77hcqy1YK1e4qzHH). An earlier
version is "Pranjal Gupta — Resume" (https://claude.ai/artifact/AcDkY2RDcn3Ay5vui48Gyk).

## How the page works today

- `resume.html` draws an A4 page (210 × 297 mm) matching the original Canva PDF. Measurements in its
  styles come from that PDF at 96 dpi. The page keeps one fixed paper look in light and dark mode.
- It reads its content from `resume.json` when it opens. The file holds contact links, name, title,
  summary, a list of sections (each with a layout: `two-column` or `entries`, and its HTML), and
  `hiddenKeywords`: keyword groups printed in the page colour so they are invisible on paper but stay
  readable to applicant screening software.
- Editing is done in place on the page. Strict style rules stop pasted or merged text from drifting off
  the design.
- **Saving edits and the download button depend on the Claude artifact viewer** (`window.claude`). Outside
  it, they do nothing yet. Opened straight from disk, the content fails to load because the browser
  blocks reading `resume.json`; it works when served locally (for example `npx serve .`).
- Seen on the first standalone open (2026-11-22): no `<meta charset>` in the editor page, so the title's
  dash shows garbled; `.banner { display: flex }` overrides the `hidden` attribute, so an empty restore
  banner shows on load; a small black blob (likely the empty toast) sits near the bottom.

## Direction

Grow from one resume into a general document editor: the layout and the content stay separate, so new
document types are new layouts plus new content files. First job: make the page run on its own (save
and export without the artifact viewer).
