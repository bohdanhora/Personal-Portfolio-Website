import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Surgical planning platform",
    kind: "Healthcare",
    period: "2025 to 2026",
    summary:
      "A production application clinicians use to plan operations. The difficult parts were all on screen: planning flows with a lot of interdependent state, long forms that have to validate without getting in the way, dense tables, and print output that has to match what the user just looked at. Every screen went through typed API contracts, and Playwright and Vitest carried the safety net for changes.",
    tech: [
      "React",
      "TypeScript",
      "TanStack Query",
      "TanStack Router",
      "Material UI",
      "Playwright",
      "Vitest",
    ],
  },
  {
    title: "Mobile hiring platform backend",
    kind: "Mobile product",
    period: "2026 to present",
    summary:
      "Backend for a mobile-first hiring product: authentication and onboarding, candidate matching, messaging, interview scheduling, notifications and content moderation. The endpoints are the visible half. The other half is caching, rate limits, background jobs and migrations that keep the data correct while several flows write to it at the same time.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "AWS", "Docker"],
  },
  {
    title: "Standards editing platform",
    kind: "Document tooling",
    period: "2026 to present",
    summary:
      "A structured editor for technical standards documents, with assisted generation and rewriting on top. Editor state lives in ProseMirror and has to stay in agreement with the document model, the database and the responses coming back from the OpenAI API. I work across the whole path, from schema and endpoints to editor integration and UI.",
    tech: ["React", "Fastify", "TypeScript", "PostgreSQL", "Knex", "ProseMirror", "OpenAI API"],
  },
  {
    title: "Trading platform and Vue to React migration",
    kind: "Fintech",
    period: "2022 to 2023",
    summary:
      "A cryptocurrency platform with live market data over WebSockets and dashboards assembled from draggable, resizable widgets. I worked on it first in Vue, then helped rebuild it in React while it stayed in production. The real constraint was leaving behavior untouched for existing users while the architecture underneath changed completely.",
    tech: ["Vue.js", "React", "TypeScript", "Zustand", "WebSockets", "REST"],
  },
  {
    title: "Finance",
    kind: "Personal project",
    period: "2025 to present",
    summary:
      "A personal finance application I built on both sides. The frontend handles monthly budgeting, transactions, savings goals, spending analytics, multi-currency balances and configurable PDF reports. The backend covers authentication with Google OAuth and refresh token rotation, month rollover, savings operations and activity streaks. It is where I get to try the things client work does not leave room for.",
    tech: ["Next.js", "React", "TypeScript", "NestJS", "MongoDB", "TanStack Query", "Chart.js"],
    links: [
      { label: "Live", href: "https://finance-front-zeta.vercel.app" },
      { label: "Frontend", href: "https://github.com/bohdanhora/finance-front" },
      { label: "Backend", href: "https://github.com/bohdanhora/finance-backend" },
    ],
  },
];
