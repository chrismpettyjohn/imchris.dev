---
title: Hello, world
description: A placeholder first post. Replace it with something worth reading.
date: 2026-10-04
---

This is a placeholder post so the blog isn't empty. Edit or delete
`src/content/blog/hello-world.md` and it goes away.

## Writing a post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL, and the
frontmatter supplies the rest:

```md
---
title: My post
description: One line shown in the post list and in link previews.
date: 2026-10-04
draft: true
---

Body goes here.
```

Posts marked `draft: true` show up in local development but are left out of the
published site.

## What Markdown gives you

Ordinary prose, **bold**, *italics*, [links](https://imchris.dev), `inline code`,
lists, and quotes:

> Simplicity is the ultimate sophistication.

Code blocks are highlighted and follow the light or dark theme:

```ts
export function greet(name: string) {
  return `Hello, ${name}`;
}
```
