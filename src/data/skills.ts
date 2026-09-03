import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue 3",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "SCSS",
    ],
  },
  {
    title: "State and data",
    items: [
      "TanStack Query",
      "TanStack Router",
      "Zustand",
      "SWR",
      "React Hook Form",
      "Zod",
      "Axios",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "TypeORM",
      "Knex",
      "MongoDB",
      "Mongoose",
      "Redis",
    ],
  },
  {
    title: "Infrastructure and testing",
    items: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Playwright", "Vitest", "Jest"],
  },
  {
    title: "Engineering",
    items: [
      "REST API design",
      "Authentication and authorization",
      "Caching and rate limiting",
      "Background jobs",
      "Database migrations",
      "Real-time data over WebSockets",
      "Production debugging",
      "Code review",
    ],
  },
];
