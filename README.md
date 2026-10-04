<div align="center">

# Bohdan Hora

**Full-Stack Software Engineer. TypeScript on both sides of the API.**

[LinkedIn](https://www.linkedin.com/in/bohdan-hora/) · [GitHub](https://github.com/bohdanhora) · [Telegram](https://t.me/cocobohd) · [bohdan.hora.developer@gmail.com](mailto:bohdan.hora.developer@gmail.com)

</div>

This is the source of my personal site: a one-page CV that also hands out a PDF version of itself
in English, Ukrainian and Russian.

## About me

I came into frontend through Vue in 2021 and have been moving down the stack since. These days I
write more backend than frontend: NestJS and Fastify services on PostgreSQL and Redis, with React
and Next.js on the other side. I live in Ukraine and work remotely at Computools.

| | |
| --- | --- |
| Position | Full-Stack Engineer (TypeScript, React, Node.js) |
| Commercial since | 2022 |
| Core stack | TypeScript, React, Next.js, NestJS, Fastify, PostgreSQL, Redis, MongoDB |
| Also | React Native (basics) |
| Beyond code | Task writing and estimates in Jira, Linear, Notion, Asana and Confluence; team budgeting, time reporting, business model design, running a project from idea to release |
| Languages | Ukrainian (native), English (B2), Russian (fluent) |
| Open to | Full-stack, frontend and backend roles |

### Personal projects

| Project | What it is | Links |
| --- | --- | --- |
| SkinScout | Market scanner for CS2 skins across five marketplaces: price spreads after fees, float and pattern finds, inventory valuation | [Live](https://skins-front-production.up.railway.app) · [Front](https://github.com/bohdanhora/skins-front) · [Back](https://github.com/bohdanhora/skins-back) |
| Sport Calorie | Calorie and fitness tracker with routines, a weekly plan and photo-based food entries | [Live](https://sport-calorie.vercel.app) · [Front](https://github.com/bohdanhora/sport-calorie) · [Back](https://github.com/bohdanhora/sport-calorie-back) |
| Finance | Personal finance app: budgets, savings goals, multi-currency balances, PDF reports | [Live](https://finance-front-zeta.vercel.app) · [Front](https://github.com/bohdanhora/finance-front) · [Back](https://github.com/bohdanhora/finance-backend) |

## About this site

- **One source of truth.** All copy lives in typed files under `src/data`. The page and the CV PDFs
  are both built from them, so they never disagree.
- **Three languages.** English at `/` by default, Ukrainian at `/uk`, Russian at `/ru`. Translated
  text sits inline as `{ en, uk, ru }`, and `t(value, locale)` in `src/lib/i18n.ts` picks it.
- **CV on build.** `npm run cv` typesets `public/bohdan-hora-cv.pdf`, `-uk.pdf` and `-ru.pdf` with
  pdfmake in the site's own fonts. It runs before every production build.
- **Static.** No backend, database or CMS. Every page is prerendered.
- **NDA-safe.** Client and product names are left out on purpose. Commercial work is described by
  product type and engineering scope only.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4 and Motion. Set in Unbounded, IBM Plex
Sans and Martian Mono.

## Running it

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run cv       # rebuild the three CV PDFs
npm run build    # production build, regenerates the CV first
```

`npm run lint`, `npm run typecheck` and `npm run format` keep the code in shape.

## Updating content

| What | Where |
| --- | --- |
| Name, position, contacts, phone, languages | `src/data/profile.ts` |
| Jobs, education, courses | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Headings, buttons, labels | `src/data/dictionary.ts` |

A phone number added to `profile.phone` appears on the site and in every CV.
