<div align="center">

# Bohdan Hora

**Personal portfolio site of a full-stack software engineer working with TypeScript across frontend and backend.**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[LinkedIn](https://www.linkedin.com/in/bohdan-hora/) · [GitHub](https://github.com/bohdanhora)

</div>

## Overview

A single-page portfolio that gives a recruiter or an engineering manager a clear picture of my
background in about two minutes: what I work on, which systems I have built, how my career moved
from Vue and React frontends into backend and full-stack work, and how to reach me.

The site is frontend only. There is no backend, database or CMS. All content lives in typed files
under `src/data`, which keeps copy separate from presentation and makes updates a one-file change.

## Sections

| Section | What it covers |
| --- | --- |
| Hero | Name, title and a two-line summary of what I actually do |
| About | Career direction and current focus |
| Experience | Timeline of roles by company, with scope and technologies |
| Selected work | Five products described at the level of the engineering problem |
| Skills | Technologies grouped by area, only ones I have used in practice |
| Approach | How I work on a team and in existing codebases |
| Contact | Email, LinkedIn and GitHub |

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS 4 with a small token layer in `globals.css` |
| Animation | Motion, with full `prefers-reduced-motion` support |
| Typography | Newsreader, Inter and JetBrains Mono through `next/font` |
| Metadata | Next.js Metadata API, generated Open Graph image, sitemap, robots, JSON-LD |
| Tooling | ESLint, Prettier, TypeScript in strict mode |

Nothing else is installed. The whole page is prerendered as static content.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting |
| `npm run format` | Format `src` with Prettier |

## Project structure

```text
src/
  app/            Root layout, page, metadata, sitemap, robots, Open Graph image
  components/
    layout/       Header with scroll-aware navigation, footer
    sections/     One component per page section
    ui/           Section shell, reveal and list primitives
  data/           All site content: profile, experience, projects, skills, approach
  hooks/          Active section tracking, scroll position
  lib/            Shared motion variants and helpers
  types/          Shapes for the content files
```

Editing content means editing `src/data`. Components read from it and never hold copy of their own.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin so canonical URLs, the sitemap and Open Graph
tags point at the right place. On Vercel the production URL is picked up automatically if the
variable is not set.

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-domain
```

## Content and NDA

Most of my commercial work is under NDA. Client and product names are left out on purpose, and
projects are described by the type of product, the engineering problems involved and my part in
solving them. No internal metrics, architecture details or business information appear anywhere on
the site.

## Design and accessibility

The layout is built around typography and spacing rather than effects: a warm paper palette, one
restrained accent, and a light and dark theme that follows the system setting. Animation is used
to guide attention and is fully removed when the visitor asks for reduced motion. Navigation is
keyboard accessible with visible focus states, and body text meets WCAG AA contrast in both themes.

## Author

**Bohdan Hora**

- GitHub: [bohdanhora](https://github.com/bohdanhora)
- LinkedIn: [in/bohdan-hora](https://www.linkedin.com/in/bohdan-hora/)
