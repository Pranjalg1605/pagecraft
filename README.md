# Pagecraft

A document editor for print-ready pages. It starts with resumes and will grow into other documents.

## What is here today

| File | What it is |
|---|---|
| `resume.html` | The editor: an A4 copy of the Canva resume, editable in place, with a print-to-PDF export. |
| `resume.json` | The resume's words, kept apart from the layout so the same layout can hold different content. |

## Known limits of this first version

The page was first built to run inside Claude's artifact viewer, which handles saving and downloads for it.

- **Opened on its own, it does not save edits or download yet.** Those two features rely on that viewer.
- **Opened by double-clicking `resume.html`, the content does not load.** Browsers block a page from
  reading a neighbouring file that way. Use **Open Pagecraft.cmd** instead (see below).
- **Small glitches show outside the viewer.** An empty notice bar sits above the page and a small black
  blob sits near the bottom: the notice bar's styling overrides its own "hidden" switch. Opened straight
  from disk, the dash in the header title also shows garbled, because the page never declares its text
  encoding; the local link below fixes that one.

Making it run on its own is the first piece of work.

## Open it on your computer

Double-click **Open Pagecraft.cmd**. A small window opens and your browser goes to
http://localhost:4321/. Keep the small window open while you use Pagecraft; close it to stop.
Only this computer can open that address. It needs Node.js, which is already installed here.

## Going public

Pagecraft stays private until it supports multiple users, each with their own account and their own
documents, where no one can see or reach anyone else's data.
