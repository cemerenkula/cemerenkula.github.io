# cemerenkula.com

Personal site and portfolio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run locally

```sh
nvm use          # Node 22
npm install
npm run dev      # http://localhost:4321
```

`npm run build` writes the static site to `dist/`.

## Where things live

| What | Where |
| --- | --- |
| Name, email, social links, menu | `src/data/site.ts` |
| CV page | `src/data/cv.ts` |
| Projects | `src/content/projects/*.md` (images in `src/assets/projects/`) |
| Blog posts | `src/content/blog/*.md` |
| Colors, fonts, spacing | `src/styles/global.css` |

### Add a blog post

Create `src/content/blog/my-post.md`:

```md
---
title: My post
description: One-sentence summary for the list and link previews.
date: 2026-10-01
tags: [unity]
---

Write in Markdown here.
```

It's published at `/blog/my-post/`. Add `draft: true` to keep it out of the live site.

### Add a project

Create `src/content/projects/my-project.md`, put its images in `src/assets/projects/my-project/`,
and copy the frontmatter from an existing project. `featured: 1` puts it first on the home page.

## Deploy

Every push to `master` builds and deploys via `.github/workflows/deploy.yml`.
The custom domain is set in `public/CNAME`.
