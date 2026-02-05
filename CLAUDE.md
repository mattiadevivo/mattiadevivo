# Project Context

Personal portfolio and blog website built with Astro.

## Tech Stack

- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x via Vite plugin + custom CSS variables in `src/styles/global.css`
- **Content:** Markdown/MDX via Astro content collections
- **Package manager:** pnpm 10.4.1
- **Node:** >=22.0.0 <23.0.0
- **TypeScript:** Strict mode, path alias `@/*` -> `./src/*`

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Project Structure

```
src/
  content/blog/       # Blog posts (*.md, *.mdx)
  content.config.ts   # Content collection schema
  components/         # Reusable Astro components
  layouts/            # BlogPost.astro, etc.
  pages/              # File-based routing (index, blog/index, blog/[...slug])
  styles/global.css   # Global styles and CSS custom properties
  consts.ts           # Site-wide constants (SITE_TITLE, SITE_DESCRIPTION, social links)
public/
  blog/               # Blog post images (referenced as /blog/filename.png)
  fonts/              # Atkinson font files
```

## Blog Post Conventions

### Frontmatter Schema (defined in `src/content.config.ts`)

Required fields:
- `title` (string)
- `description` (string)
- `pubDate` (date, e.g. "2026-01-10")

Optional fields:
- `updatedDate` (date)
- `image` (string, path like "/blog/image-name.png")
- `keywords` (string array)

### Image handling

- Place blog images in `public/blog/` as PNG files
- Reference in frontmatter as `/blog/filename.png`
- Naming: lowercase, hyphens or dots (e.g. `12-factor-app.png`, `trevisorifiuti.top.png`)

### File naming

- Blog post files: lowercase with hyphens, `.md` or `.mdx` extension
- The filename (without extension) becomes the URL slug: `/blog/{filename}/`

## Key Files

- `astro.config.mjs` - Site URL: https://mattiadevivo.dev, MDX + sitemap integrations
- `src/layouts/BlogPost.astro` - Blog post layout (hero image, keywords badges, prose container)
- `src/pages/blog/[...slug].astro` - Dynamic blog post routing
- `src/pages/blog/index.astro` - Blog listing (sorted by pubDate desc, grid layout)
- `src/pages/rss.xml.js` - RSS feed generation
