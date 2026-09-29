# AI Platform Engineer Roadmap

Live site: https://chustert.github.io/ai-platform-engineer-roadmap/

A static website: plain HTML, one stylesheet (`style.css`) and one small script (`site.js`). No build step and no dependencies.

## Hosting

Upload the contents of this folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, Codeberg Pages, an S3 bucket, or any web server). `index.html` is the home page. All links are relative, so the site also works from a subfolder.

To preview locally, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Notes

- Fonts (Atkinson Hyperlegible Next and Mono) load from Google Fonts. Without a connection the pages fall back to system fonts.
- Checklist ticks are stored in the visitor's browser (localStorage) and are never sent anywhere.
