# A little birthday magic — Jordyn, 24

Three working mobile birthday-card concepts, written in plain HTML, CSS and JavaScript.

- `index.html`: comparison gallery
- `meadow.html`: a three-part storybook letter
- `frog.html`: royal birthday decrees, a tappable badge and confetti
- `wishes.html`: 24 collectible birthday wishes

Serve this folder with `python3 -m http.server 4173` and visit http://localhost:4173.

All asset paths are relative for GitHub Pages compatibility. No build step or API keys are needed. Google Fonts is optional; system font fallbacks work offline. Sounds are synthesized locally, muted by default. Animations respect reduced-motion preferences. Wishes reset on reload so the card can be experienced again.

To publish after selecting a direction: put the contents of this folder in the chosen GitHub repository's Pages publishing root. Set Pages to publish from that branch/folder. The selected card can be shared by its direct HTML URL, or copied to index.html to become the homepage. The comparison gallery has not been deployed.

The birthday copy is suggested wording and can be edited directly in card.js. Original artwork is in assets/. Generation details are recorded in assets/ARTWORK.md.
