import type { Company, Education } from "@/types";

/**
 * Client names are intentionally left out. Roles are described by product type
 * and engineering scope instead.
 */
export const companies: Company[] = [
  {
    name: "Computools",
    period: "Oct 2023 to present",
    location: "Austria",
    arrangement: "Remote",
    roles: [
      {
        title: "Backend Software Engineer",
        period: "Aug 2026 to present",
        start: "2026-08",
        end: "present",
        summary:
          "Backend services for a production mobile platform covering authentication, onboarding, matching, messaging, interview scheduling, notifications and moderation. Most of the work sits behind the endpoints: caching, rate limiting, background jobs, migrations and keeping data consistent across flows that touch several tables at once.",
        focus: [
          "REST API design",
          "Caching and rate limiting",
          "Background jobs",
          "Database migrations",
          "Third-party integrations",
        ],
        tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "AWS", "Docker"],
      },
      {
        title: "Full-Stack Software Engineer",
        period: "Aug 2026 to present",
        start: "2026-08",
        end: "present",
        summary:
          "Features built end to end on a standards editing platform: database schema, REST endpoints, frontend state and UI. A large part of it is a structured document editor on ProseMirror, wired into generation and rewriting flows through the OpenAI API.",
        focus: [
          "End-to-end feature delivery",
          "Structured rich-text editing",
          "Scheduled jobs and email flows",
          "File processing",
        ],
        tech: [
          "React",
          "TypeScript",
          "Fastify",
          "PostgreSQL",
          "Knex",
          "ProseMirror",
          "OpenAI API",
          "Zustand",
          "Vitest",
        ],
      },
      {
        title: "Frontend Software Engineer",
        period: "Oct 2025 to Jul 2026",
        start: "2025-10",
        end: "2026-07",
        summary:
          "Frontend for a healthcare product used to plan surgeries. Planning workflows, long validated forms, dense tables and print-ready views, all driven by strongly typed API contracts. A good share of the time went into Playwright and Vitest coverage, because regressions in this kind of product are expensive.",
        focus: [
          "Data-heavy interfaces",
          "Typed API contracts",
          "Server-state management",
          "Automated testing",
        ],
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
        title: "React Developer",
        period: "Mar 2024 to Jul 2026",
        start: "2024-03",
        end: "2026-07",
        summary:
          "Built and maintained a client portal in React and TypeScript: shared UI components, localization and the data layer on top of TanStack Query and Zustand.",
        focus: ["Component architecture", "Localization", "Server state"],
        tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand"],
      },
      {
        title: "Middle Vue Engineer",
        period: "Oct 2023 to Feb 2024",
        start: "2023-10",
        end: "2024-02",
        summary:
          "Vue 3 applications with TypeScript and Vuetify, working across both the Options and Composition API in a codebase that predated me. Requirements came straight from the client.",
        tech: ["Vue 3", "TypeScript", "Vuetify", "SCSS", "Tailwind CSS"],
      },
    ],
  },
  {
    name: "IntenseLab",
    period: "Jun 2022 to Nov 2023",
    location: "Lviv, Ukraine",
    arrangement: "Hybrid",
    roles: [
      {
        title: "React Developer",
        period: "May 2023 to Nov 2023",
        start: "2023-05",
        end: "2023-11",
        summary:
          "Rebuilt the platform's Vue functionality in React and TypeScript without losing real-time behavior or changing what existing users were used to. State moved to Zustand and the configurable dashboard grids were reimplemented from scratch.",
        focus: ["Framework migration", "State management", "Real-time data"],
        tech: ["React", "TypeScript", "Zustand", "WebSockets", "REST"],
      },
      {
        title: "Vue.js Frontend Developer",
        period: "Jun 2022 to Nov 2023",
        start: "2022-06",
        end: "2023-11",
        summary:
          "Frontend of a cryptocurrency platform with live market data. Draggable, configurable dashboard layouts, reusable components and the asynchronous data flows behind them, then the groundwork for moving the product to React.",
        focus: ["Interactive dashboards", "WebSocket data flows", "Component libraries"],
        tech: ["Vue.js", "TypeScript", "WebSockets", "REST", "SCSS"],
      },
    ],
  },
  {
    name: "Freelance",
    period: "Jan 2022 to Jun 2022",
    location: "Lviv, Ukraine",
    arrangement: "Independent",
    roles: [
      {
        title: "Frontend Developer",
        period: "Jan 2022 to Jun 2022",
        start: "2022-01",
        end: "2022-06",
        summary:
          "Small commercial sites and landing pages for e-commerce and service businesses, including wine retail, perfume and solar energy. WordPress builds plus Vue for the parts that needed real behavior, handled directly with clients from requirements to delivery.",
        tech: ["Vue.js", "JavaScript", "WordPress", "SCSS"],
      },
    ],
  },
  {
    name: "Viseven",
    period: "Aug 2021 to Nov 2021",
    location: "Zhytomyr, Ukraine",
    arrangement: "Part-time",
    roles: [
      {
        title: "Vue.js Development Student",
        period: "Aug 2021 to Nov 2021",
        start: "2021-08",
        end: "2021-11",
        summary:
          "A structured start in frontend development with Vue: components, props and events, state basics and API integration, with practice projects alongside the theory.",
        tech: ["Vue.js", "JavaScript"],
      },
    ],
  },
];

export const education: Education = {
  institution: "Zhytomyr Agrotechnical College",
  qualification: "Junior Specialist",
  field: "Computer Systems and Software Maintenance",
  period: "2015 to 2019",
  note: "Professional qualification: technician-programmer.",
};
