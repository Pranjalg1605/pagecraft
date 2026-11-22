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
- **Opened by double-clicking the file, the content does not load.** Browsers block a page from reading a
  neighbouring file that way. It loads when served from a local web server, for example
  `npx serve .` and then opening the address it prints.

- **Small glitches show outside the viewer.** An empty notice bar sits above the page, a small black blob
  sits near the bottom, and the dash in the header title shows as garbled characters. Causes: the page never
  declares its text encoding (the viewer used to add that), and the notice bar's styling overrides its
  own "hidden" switch.

Making it run on its own is the first piece of work.
