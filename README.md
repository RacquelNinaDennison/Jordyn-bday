# Happy 24th birthday, Jordyn ♡

The finished duck birthday card is in this folder. It has drifting fireflies, a three-page birthday letter, and a confetti finale. The layout adapts from a full-screen illustrated card on phones to an open storybook on wide screens. Short screens and long letters scroll naturally. There is no audio or sound control. Animations respect the device’s reduced-motion setting.

## Files to upload to GitHub

Upload these files and the assets folder at the top level of your repository:

```
index.html
styles.css
card.js
.nojekyll
assets/
  meadow.png
```

No installation or build step is needed. You can leave out `birthday-cards/`, which preserves the earlier concept previews, and this README. Optional Google Fonts have system-font fallbacks.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new **public** repository, for example `jordyn-birthday`.
2. On the repository page, use **uploading an existing file** (or **Add file → Upload files**). Upload the files listed above, keeping `meadow.png` inside `assets`. Commit the upload to `main`. Upload the contents, not a folder containing them: `index.html` must be at the repository’s top level.
3. Open the repository’s **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set the branch to **main** and the folder to **/ (root)**, then click **Save**.
6. Wait for deployment to finish. The Pages settings will show the live link. It will normally look like `https://YOUR-USERNAME.github.io/jordyn-birthday/`.
7. Open that live link on your phone, test the letter, and send it to Jordyn.

The local preview address (`127.0.0.1`) only works on this computer; send Jordyn the published GitHub Pages link.

If you see a 404, check that `index.html` is at the top level and that Pages points to the correct branch and `/ (root)` folder. Check the repository’s **Actions** tab for deployment progress.

Official references (checked September 24, 2026):
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Personalise the message

Edit the `pages` array near the top of `card.js`. The greeting on the cover is in `index.html`.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server 4173` from this folder and visit `http://127.0.0.1:4173/`.
