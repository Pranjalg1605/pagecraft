# Pagecraft

A document editor for print-ready pages. It starts with resumes and will grow into other documents.

## What is here today

| File | What it is |
|---|---|
| `resume.html` | The editor: an A4 copy of the Canva resume, edited in place the way Notion works, with a print-to-PDF export. |
| `resume.json` | The resume's words and page style, kept apart from the layout so the same layout can hold different content. |

## How editing works

Notion is the model. There is no fixed formatting bar; tools appear where you work.

| To do this | Do this |
|---|---|
| Format words | Select them. A small bar pops up: turn into a heading or list, bold, italic, underline, strikethrough, link, colour, clear formatting. |
| Add a block | Type `/` on a line and pick one: text, entry title, entry details, bulleted or numbered list, a divider (line, dotted, or an empty space that never prints), job entry, section. |
| Move anything | Every line is a block: hover it and drag the ⋮⋮ handle. A job title's handle moves the whole job; a section label's handle moves the whole section. At the top of the page, the contact row, your name and your role can be reordered too (for example, contact details under your role). Click the handle for Move up, Move down, Duplicate, Delete, Two columns (sections) and the divider style (dividers). "+" adds one below. |
| Change fonts or size | Style, in the top bar: Notion's Default, Serif and Mono, plus 24 fonts. Fonts apply to the whole page, not single words. |
| Undo or redo | Ctrl+Z, and Ctrl+Y or Ctrl+Shift+Z. Works for every kind of change, anywhere on the page. |
| Link a contact detail | Click it, then the link button in the small bar. |

## Known limits

The page was first built to run inside Claude's artifact viewer, which handles saving and downloads for it.

- **Opened on its own, it does not save edits or download yet.** Those two features rely on that viewer.
- **Opened by double-clicking `resume.html`, the content does not load.** Browsers block a page from
  reading a neighbouring file that way. Use **Open Pagecraft.cmd** instead (see below).

Making it save and download on its own is the next piece of work.

## Open it on your computer

Double-click **Open Pagecraft.cmd**. A small window opens and your browser goes to
http://localhost:4321/. Keep the small window open while you use Pagecraft; close it to stop.
Only this computer can open that address. It needs Node.js, which is already installed here.

## Going public

Pagecraft stays private until it supports multiple users, each with their own account and their own
documents, where no one can see or reach anyone else's data.
