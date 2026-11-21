# Birthday Friendship Scrapbook

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code and run:
   ```sh
   npm install
   npm run dev
   ```
3. Open the local URL printed by Vite. Use `Ctrl+C` to stop the server.

## Personal media

Keep the existing filenames:

- Photos: `public/images/img1.jpeg` through `img43.jpeg`, plus `img45.jpeg`
- Videos: `public/videos/vdo1.mp4` through `vdo8.mp4`
- Music: `public/music/tuuReprise.mpeg`

The WhatsApp-named photo is byte-identical to `img2.jpeg`; both original files are preserved, and the duplicate is shown once. All distinct photos and all eight videos are used in the scrapbook.

## Personal messages

Edit `src/data/content.js` to update the opening note, section messages, the ten keepsake notes, birthday wishes, and captions.

## Publish

Run `npm run build` to create the `dist` folder. Deploy that folder to a static host such as Netlify (manual deploy) or Vercel. The Vite configuration uses a relative base path for static hosting.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository. The included workflow deploys pushes to the `main` branch; update its branch filter if your default branch has a different name.
2. In the repository, open **Settings → Pages** and set the deployment source to **GitHub Actions**.
3. Push to `main` or run **Deploy birthday scrapbook to GitHub Pages** from the **Actions** tab. The workflow builds the site and publishes `dist`.
4. Open the Pages URL shown in the workflow deployment, usually `https://<your-user>.github.io/<repository-name>/`.

The relative `./` base in `vite.config.js` keeps the built assets, photos, videos, and soundtrack working under the repository subpath.
