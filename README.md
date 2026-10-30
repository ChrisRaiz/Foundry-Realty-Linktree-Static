# Foundry Realty Linktree

The linktree page for Foundry Realty Group: plain HTML, CSS and JavaScript, with no build step, hosted on GitHub Pages.

## Editing the buttons

Everything lives in `index.html`, inside `<nav class="links">`. Buttons appear in the order they're written, so to reorder them, move a block up or down. To delete one, remove its whole block.

**A link** (web page, email or phone):

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

Icons are in `assets/icons`: `calendar`, `contact` (a house), `dollar`, `facebook`, `globe`, `instagram`, `link`, `mail`, `map-pin`, `phone`, `star`, `tiktok`, `video` and `youtube`. Change the file name in a button's `src` to use a different one.

## Trying it locally

Open `index.html` in a browser, or run `npx serve` for a local server.
