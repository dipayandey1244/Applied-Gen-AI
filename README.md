# Applied Gen AI Website

This repository now contains a simple, shareable website that deploys automatically to GitHub Pages.

## Files
- `index.html` – main page structure
- `styles.css` – page styling
- `script.js` – lightweight client-side behavior
- `.github/workflows/deploy-pages.yml` – auto-deploy to GitHub Pages on pushes to `main`

## How to publish and get a public link
1. Push this repository to GitHub.
2. In GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Push or merge to `main`.
4. After the workflow finishes, your site will be live at:
   - `https://<your-github-username>.github.io/<repo-name>/`

## Local preview
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.
