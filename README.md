# AI Platform Engineer Roadmap

A 12-month curriculum for engineers who build production AI systems with coding agents.

Live site: https://chustert.github.io/ai-platform-engineer-roadmap/

## What is in this repository

The site is plain HTML with one stylesheet, `style.css`, and one script, `site.js`. It has no build step and no dependencies. `index.html` is the home page. Every link is relative, so the site also works from a subfolder.

## Preview the site locally

Open `index.html` in a browser. Or run a local web server in this folder and open http://localhost:8000:

```sh
python3 -m http.server
```

## Deploy the site

The workflow in `.github/workflows/pages.yml` deploys the site to GitHub Pages. It runs on every push to `main`. To run it by hand, open the **Actions** tab, select **Deploy site to GitHub Pages**, and click **Run workflow**.

To host the site somewhere else, upload the files in this folder to any static host.

## Fonts and stored data

The pages load Atkinson Hyperlegible Next and Atkinson Hyperlegible Mono from Google Fonts. Without a network connection, the browser uses system fonts instead.

The checklists store ticks in the visitor's browser with `localStorage`. The site sends no data anywhere.
