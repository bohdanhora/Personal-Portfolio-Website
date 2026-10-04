import type { Locale, Profile } from "@/types";

export const profile: Profile = {
  name: { en: "Bohdan Hora", uk: "Богдан Гора", ru: "Богдан Гора" },
  title: "Full-Stack Software Engineer",
  position: "Full-Stack Engineer (TypeScript, React, Node.js)",
  location: { en: "Ukraine, remote", uk: "Україна, віддалено", ru: "Украина, удалённо" },
  availability: {
    en: "Open to full-stack, frontend and backend roles",
    uk: "Відкритий до full-stack, frontend і backend ролей",
    ru: "Открыт к full-stack, frontend и backend ролям",
  },
  intro: [
    {
      en: "I build web products in TypeScript on both sides of the API.",
      uk: "Я будую вебпродукти на TypeScript по обидва боки API.",
      ru: "Я делаю веб-продукты на TypeScript по обе стороны API.",
    },
    {
      en: "React and Next.js on the front, NestJS and Fastify on the back, with PostgreSQL, MongoDB and Redis underneath.",
      uk: "React і Next.js на фронтенді, NestJS і Fastify на бекенді, під ними PostgreSQL, MongoDB і Redis.",
      ru: "React и Next.js на фронтенде, NestJS и Fastify на бэкенде, под ними PostgreSQL, MongoDB и Redis.",
    },
  ],
  about: [
    {
      en: "I came into frontend through Vue in 2021, and the work has been drifting backwards through the stack ever since.",
      uk: "Я прийшов у frontend через Vue у 2021 році, і відтоді робота поступово зсувається вглиб стеку.",
      ru: "Я пришёл во frontend через Vue в 2021 году, и с тех пор работа постепенно смещается вглубь стека.",
    },
    {
      en: "The first couple of years were dashboards and forms with live data behind them, which sounds duller than it was. Then the crypto platform I worked on got rebuilt in React, I did a large part of that migration, and React has been my main tool since.",
      uk: "Перші кілька років це були дашборди і форми з живими даними, що звучить нудніше, ніж було насправді. Потім криптоплатформу, над якою я працював, переписали на React, значну частину міграції зробив я, і відтоді React мій основний інструмент.",
      ru: "Первые пару лет это были дашборды и формы с живыми данными, что звучит скучнее, чем было на самом деле. Потом криптоплатформу, над которой я работал, переписали на React, значительную часть миграции сделал я, и с тех пор React мой основной инструмент.",
    },
    {
      en: "A year on a surgical planning product convinced me that the hard parts of a frontend are rarely the visual ones. It was validation that changed depending on three other fields, tables nobody could fit on a screen, print output that had to line up with what the user was looking at. These days I write more backend than frontend: NestJS, Fastify, Postgres, and the caching and background jobs that sit around them.",
      uk: "Рік на продукті для планування операцій переконав мене, що складні частини фронтенду рідко бувають візуальними. Це валідація, яка залежить від трьох інших полів, таблиці, що не вміщаються на екран, друк, який має збігатися з тим, що користувач бачить. Зараз я пишу більше бекенду, ніж фронтенду: NestJS, Fastify, Postgres, а також кешування і фонові задачі навколо них.",
      ru: "Год на продукте для планирования операций убедил меня, что сложные части фронтенда редко бывают визуальными. Это валидация, зависящая от трёх других полей, таблицы, которые не помещаются на экран, печать, которая должна совпадать с тем, что видит пользователь. Сейчас я пишу больше бэкенда, чем фронтенда: NestJS, Fastify, Postgres, а также кеширование и фоновые задачи вокруг них.",
    },
    {
      en: "Not all of the work has been code. I have set up and run task boards in Jira, Linear, Notion, Asana and Confluence, broken features into tickets someone else can pick up, and put estimates on them that held. When a problem had no owner I took it on, even outside my role: budgeting for teams, fixing how time was logged and reported, and helping shape the business model of a product. I know how a project should run from idea to release, which people the team needs, and how to plan the work so the estimate means something.",
      uk: "Не вся робота була кодом. Я налаштовував і вів дошки задач у Jira, Linear, Notion, Asana і Confluence, розбивав фічі на тікети, які може взяти будь-хто з команди, і ставив на них естімейти, що справджувалися. Коли проблема не мала власника, я брав її на себе, навіть поза своєю роллю: бюджет для команд, облік і звітність по часу, участь у проєктуванні бізнес-моделі продукту. Я знаю, як має йти проєкт від ідеї до релізу, хто потрібен у команді і як планувати роботу, щоб естімейт щось означав.",
      ru: "Не вся работа была кодом. Я настраивал и вёл доски задач в Jira, Linear, Notion, Asana и Confluence, разбивал фичи на тикеты, которые может взять любой в команде, и ставил на них эстимейты, которые сбывались. Когда у проблемы не было владельца, я брал её на себя, даже вне своей роли: бюджет для команд, учёт и отчётность по времени, участие в проектировании бизнес-модели продукта. Я знаю, как должен идти проект от идеи до релиза, кто нужен в команде и как планировать работу, чтобы эстимейт что-то значил.",
    },
    {
      en: "What I look for is work where almost correct is not good enough. So far that has meant money and medical planning. I live in Ukraine and work remotely with Computools.",
      uk: "Мене цікавить робота, де «майже правильно» недостатньо. Досі це були гроші та медичне планування. Я живу в Україні й працюю віддалено з Computools.",
      ru: "Меня интересует работа, где «почти правильно» недостаточно. Пока это были деньги и медицинское планирование. Я живу в Украине и работаю удалённо с Computools.",
    },
  ],
  facts: [
    { label: { en: "Commercial since", uk: "Комерційно з", ru: "Коммерчески с" }, value: "2022" },
    {
      label: { en: "Now", uk: "Зараз", ru: "Сейчас" },
      value: {
        en: "Backend and full-stack at Computools",
        uk: "Backend і full-stack у Computools",
        ru: "Backend и full-stack в Computools",
      },
    },
    {
      label: { en: "Core", uk: "Основа", ru: "Основа" },
      value: "TypeScript, React, Node.js, PostgreSQL",
    },
    {
      label: { en: "Beyond code", uk: "Окрім коду", ru: "Помимо кода" },
      value: {
        en: "Task planning, estimates, delivery from idea to release",
        uk: "Планування задач, естімейти, ведення проєкту від ідеї до релізу",
        ru: "Планирование задач, эстимейты, ведение проекта от идеи до релиза",
      },
    },
  ],
  email: "bohdan.hora.developer@gmail.com",
  languages: [
    {
      name: { en: "Ukrainian", uk: "Українська", ru: "Украинский" },
      level: { en: "Native", uk: "Рідна", ru: "Родной" },
    },
    {
      name: { en: "English", uk: "Англійська", ru: "Английский" },
      level: "B2, Upper-Intermediate",
    },
    {
      name: { en: "Russian", uk: "Російська", ru: "Русский" },
      level: { en: "Fluent", uk: "Вільно", ru: "Свободно" },
    },
  ],
  links: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bohdan-hora/",
      handle: "in/bohdan-hora",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/bohdanhora",
      handle: "bohdanhora",
    },
    telegram: {
      label: "Telegram",
      href: "https://t.me/cocobohd",
      handle: "@cocobohd",
    },
  },
};

export const cvFileName: Record<Locale, string> = {
  en: "bohdan-hora-cv.pdf",
  uk: "bohdan-hora-cv-uk.pdf",
  ru: "bohdan-hora-cv-ru.pdf",
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
