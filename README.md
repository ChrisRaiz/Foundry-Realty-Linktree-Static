# Foundry Realty Linktree

A linktree-style landing page for Foundry Realty Group that collects the group's forms, social profiles, and introduction video in one place, built with plain HTML, CSS, and JavaScript and hosted on GitHub Pages.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white)

---

## Overview

Foundry Realty Group needed one link to put in its social bios that points visitors to everything else. This page replaces a hosted link service with a static site the group owns outright: no build step, no framework, and no monthly fee.

- **One page** with the group's logo, tagline, and services, followed by a stack of buttons
- **Three kinds of links**: web pages, email (`mailto:`), and phone (`tel:`)
- **YouTube popups**: a button can play a video in an overlay without leaving the page, with a taller layout for Shorts
- **Privacy-friendly embeds**: videos load from `youtube-nocookie.com`
- **Accessible popup**: it closes with the × button, a click outside the video, or the Escape key, and focus returns to the button that opened it
- **Easy to edit**: each button is one self-contained block in `index.html`

## Tech Stack

- **HTML** for the page and buttons
- **CSS** for the layout, using custom properties for the brand colors
- **JavaScript** (no libraries) for the video popup
- **Inter** from Google Fonts
- **GitHub Pages** for hosting

## Getting Started

```bash
git clone https://github.com/ChrisRaiz/Foundry-Realty-Linktree-Static.git
cd Foundry-Realty-Linktree-Static
```

Open `index.html` in a browser, or run `npx serve` for a local server.

## Editing the Buttons

Everything lives in `index.html`, inside `<nav class="links">`. Buttons appear in the order they're written, so to reorder them, move a block up or down. To delete one, remove its whole block.

**A link** (web page, email, or phone):

```html
<a class="link" href="https://example.com">
  <img class="link-icon" src="assets/icons/link.svg" alt="" />
  Button text
</a>
```

For email use `href="mailto:name@example.com"`, and for phone use `href="tel:+15551234567"`.

**A YouTube video in a popup:**

```html
<button class="link" data-video-id="VIDEO_ID">
  <img class="link-icon" src="assets/icons/video.svg" alt="" />
  Button text
</button>
```

The video ID is the 11 characters in the YouTube address, after `watch?v=` or `shorts/`. For Shorts, add `data-video-vertical` next to `data-video-id` so the popup is tall.

## Icons

Icons are in `assets/icons`. Change the file name in a button's `src` to use a different one.

| Icon | Use |
|---|---|
| `calendar` | Booking or events |
| `contact` | Contact forms (a house) |
| `dollar` | Valuations and assessments |
| `facebook`, `instagram`, `tiktok`, `youtube` | Social profiles |
| `globe`, `link` | General web links |
| `mail` | Email |
| `map-pin` | Address or directions |
| `phone` | Phone number |
| `star` | Reviews |
| `video` | Video popups |

## Project Structure

```
.
├── index.html          # Page content and buttons
├── styles.css          # Layout and brand colors
├── script.js           # YouTube video popup
└── assets/
    ├── logo.svg
    ├── favicon.svg
    └── icons/          # Button icons
```
