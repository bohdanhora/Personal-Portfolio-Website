import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Frontend and mobile", uk: "Frontend і мобільні", ru: "Frontend и мобильные" },
    items: [
      "React",
      "Next.js",
      "Vue 3",
      { en: "React Native (basics)", uk: "React Native (базово)", ru: "React Native (базово)" },
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Radix UI",
      "SCSS",
    ],
  },
  {
    title: { en: "State and data", uk: "Стан і дані", ru: "Состояние и данные" },
    items: [
      "TanStack Query",
      "TanStack Router",
      "Zustand",
      "SWR",
      "React Hook Form",
      "Zod",
      "next-intl",
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
      "Prisma",
      "Knex",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: {
      en: "Infrastructure and testing",
      uk: "Інфраструктура і тести",
      ru: "Инфраструктура и тесты",
    },
    items: ["Docker", "AWS", "GitHub Actions", "Vercel", "Railway", "Playwright", "Vitest", "Jest"],
  },
  {
    title: { en: "Engineering", uk: "Інженерія", ru: "Инженерия" },
    items: [
      { en: "REST API design", uk: "Проєктування REST API", ru: "Проектирование REST API" },
      {
        en: "Authentication and authorization",
        uk: "Автентифікація та авторизація",
        ru: "Аутентификация и авторизация",
      },
      {
        en: "Caching and rate limiting",
        uk: "Кешування і rate limiting",
        ru: "Кеширование и rate limiting",
      },
      { en: "Background jobs", uk: "Фонові задачі", ru: "Фоновые задачи" },
      { en: "Database migrations", uk: "Міграції баз даних", ru: "Миграции баз данных" },
      {
        en: "Real-time data over WebSockets",
        uk: "Real-time дані через WebSocket",
        ru: "Real-time данные через WebSocket",
      },
      { en: "LLM integrations", uk: "Інтеграції з LLM", ru: "Интеграции с LLM" },
      { en: "Production debugging", uk: "Дебаг у продакшені", ru: "Дебаг в продакшене" },
      { en: "Code review", uk: "Код-рев'ю", ru: "Код-ревью" },
    ],
  },
  {
    title: { en: "Product and delivery", uk: "Продукт і менеджмент", ru: "Продукт и управление" },
    items: [
      "Jira",
      "Confluence",
      "Linear",
      "Notion",
      "Asana",
      {
        en: "Writing and grooming tasks",
        uk: "Постановка і грумінг задач",
        ru: "Постановка и груминг задач",
      },
      { en: "Estimation", uk: "Оцінка задач", ru: "Оценка задач" },
      {
        en: "Planning from idea to release",
        uk: "Планування від ідеї до релізу",
        ru: "Планирование от идеи до релиза",
      },
      { en: "Team composition", uk: "Формування команди", ru: "Формирование команды" },
      { en: "Team budgeting", uk: "Бюджетування команд", ru: "Бюджетирование команд" },
      {
        en: "Time tracking and reporting",
        uk: "Облік часу і звітність",
        ru: "Учёт времени и отчётность",
      },
      {
        en: "Business model design",
        uk: "Проєктування бізнес-моделі",
        ru: "Проектирование бизнес-модели",
      },
    ],
  },
];
