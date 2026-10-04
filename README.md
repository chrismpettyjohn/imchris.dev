# imchris.dev

Personal site and blog. Static [Astro](https://astro.build) site: Markdown posts, one stylesheet, and one small script for the posts search.

## Develop

```sh
bun install
bun dev           # local dev server
bun run build     # static site into dist/
bun run preview   # serve the built site
```

## Write a post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL (`my-post.md` → `/blog/my-post/`).

```md
---
title: My post
description: One line shown in the post list and in link previews.
date: 2026-10-04
draft: true
---

Body goes here.
```

`draft: true` posts appear in `bun dev` but are left out of the build.

## Where things live

- `src/pages/` — routes: home (resume and posts), post pages, 404, RSS
- `src/layouts/` — page shell (nav, footer) and post layout
- `src/data/` — experience and skills shown on the About page
- `src/site.ts` — name, description, and profile links
- `src/styles/global.css` — all styling; colours follow the system light/dark setting
- `public/` — images and the resume PDF, served as-is
