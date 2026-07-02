# Japanhourse Landing Page

This folder contains the refactored static LadiPage export served by `/hold-on`.

## Editing Map

- `index.html`: page metadata, visible copy, and DOM structure. Keep `script_event_data` inline because the LadiPage runtime reads it directly from the DOM.
- `css/ladi-base.css`: original LadiPage reset and shared component CSS.
- `css/elements.css`: element positions, section heights, image backgrounds, colors, and most layout rules.
- `css/page.css`: page-level width and font settings.
- `css/animations.css` and `css/runtime-keyframes.css`: animation visibility and keyframes.
- `css/lazyload.css`: first-load image hiding rules used by the LadiPage lazyload script.
- `js/viewport.js`: mobile viewport setup.
- `js/lazyload.js`: lazyload bootstrap.
- `js/ladipage-run.js`: LadiPage runtime configuration.
- `js/facebook-pixel.js`: original tracking bootstrap.

## Notes

- The markup still uses LadiPage element IDs because the runtime script depends on them for actions, popup behavior, countdowns, and scrolling.
- Local images and mirrored scripts live in `/public/japanhourse-assets`.
- If `output: 'standalone'` is enabled, run `npm run build` then `npm run start`; the start script copies `public` into `.next/standalone` before launching.
