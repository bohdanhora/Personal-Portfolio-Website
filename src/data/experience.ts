import type { Company, Course, Education } from "@/types";

const remote = { en: "Remote", uk: "Віддалено", ru: "Удалённо" };
const ukraine = { en: "Ukraine", uk: "Україна", ru: "Украина" };
const lviv = { en: "Lviv, Ukraine", uk: "Львів, Україна", ru: "Львов, Украина" };

export const companies: Company[] = [
  {
    name: "Computools",
    period: { en: "Oct 2023 - present", uk: "Жовт 2023 - дотепер", ru: "Окт 2023 - н.в." },
    location: ukraine,
    arrangement: remote,
    roles: [
      {
        title: "Backend Software Engineer",
        period: { en: "Aug 2026 - present", uk: "Серп 2026 - дотепер", ru: "Авг 2026 - н.в." },
        start: "2026-08",
        end: "present",
        summary: {
          en: "Backend services for a production mobile hiring platform covering authentication, onboarding, matching, messaging, interview scheduling, notifications and moderation.",
          uk: "Бекенд-сервіси для мобільної платформи найму в продакшені: автентифікація, онбординг, матчинг, повідомлення, планування співбесід, сповіщення і модерація.",
          ru: "Бэкенд-сервисы для мобильной платформы найма в продакшене: аутентификация, онбординг, матчинг, сообщения, планирование собеседований, уведомления и модерация.",
        },
        duties: [
          {
            en: "Design and build REST endpoints for the mobile clients, from schema to documentation",
            uk: "Проєктування і розробка REST-ендпоінтів для мобільних клієнтів, від схеми до документації",
            ru: "Проектирование и разработка REST-эндпоинтов для мобильных клиентов, от схемы до документации",
          },
          {
            en: "Add caching and rate limiting with Redis on the hot paths",
            uk: "Кешування і rate limiting на Redis для навантажених маршрутів",
            ru: "Кеширование и rate limiting на Redis для нагруженных маршрутов",
          },
          {
            en: "Move slow work into background jobs and keep multi-table writes consistent",
            uk: "Винесення повільних операцій у фонові задачі, узгодженість записів у кілька таблиць",
            ru: "Вынос медленных операций в фоновые задачи, согласованность записей в несколько таблиц",
          },
          {
            en: "Write and review database migrations, integrate third-party services",
            uk: "Написання і рев'ю міграцій бази даних, інтеграція сторонніх сервісів",
            ru: "Написание и ревью миграций базы данных, интеграция сторонних сервисов",
          },
        ],
        tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "AWS", "Docker"],
      },
      {
        title: "Full-Stack Software Engineer",
        period: { en: "Aug 2026 - present", uk: "Серп 2026 - дотепер", ru: "Авг 2026 - н.в." },
        start: "2026-08",
        end: "present",
        summary: {
          en: "A standards editing platform: a structured document editor on ProseMirror, wired into generation and rewriting flows through the OpenAI API.",
          uk: "Платформа для редагування стандартів: структурований редактор документів на ProseMirror, підключений до генерації та переписування тексту через OpenAI API.",
          ru: "Платформа для редактирования стандартов: структурированный редактор документов на ProseMirror, подключённый к генерации и переписыванию текста через OpenAI API.",
        },
        duties: [
          {
            en: "Deliver features end to end: database schema, Fastify endpoints, frontend state and UI",
            uk: "Фічі від початку до кінця: схема БД, ендпоінти на Fastify, стан і UI на фронтенді",
            ru: "Фичи от начала до конца: схема БД, эндпоинты на Fastify, состояние и UI на фронтенде",
          },
          {
            en: "Keep ProseMirror editor state in agreement with the document model and the database",
            uk: "Синхронізація стану редактора ProseMirror з моделлю документа і базою даних",
            ru: "Синхронизация состояния редактора ProseMirror с моделью документа и базой данных",
          },
          {
            en: "Build scheduled jobs, email flows and file processing",
            uk: "Задачі за розкладом, email-сценарії та обробка файлів",
            ru: "Задачи по расписанию, email-сценарии и обработка файлов",
          },
          {
            en: "Cover the logic with Vitest tests",
            uk: "Покриття логіки тестами на Vitest",
            ru: "Покрытие логики тестами на Vitest",
          },
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
        period: {
          en: "Oct 2025 - Jul 2026",
          uk: "Жовт 2025 - Лип 2026",
          ru: "Окт 2025 - Июл 2026",
        },
        start: "2025-10",
        end: "2026-07",
        summary: {
          en: "Frontend for a healthcare product clinicians use to plan surgeries: planning workflows, long validated forms, dense tables and print-ready views.",
          uk: "Фронтенд медичного продукту, у якому лікарі планують операції: сценарії планування, довгі форми з валідацією, щільні таблиці та версії для друку.",
          ru: "Фронтенд медицинского продукта, в котором врачи планируют операции: сценарии планирования, длинные формы с валидацией, плотные таблицы и версии для печати.",
        },
        duties: [
          {
            en: "Build planning flows with a lot of interdependent state",
            uk: "Розробка сценаріїв планування з великою кількістю взаємозалежного стану",
            ru: "Разработка сценариев планирования с большим количеством взаимозависимого состояния",
          },
          {
            en: "Drive every screen from strongly typed API contracts and TanStack Query",
            uk: "Кожен екран працює через строго типізовані API-контракти і TanStack Query",
            ru: "Каждый экран работает через строго типизированные API-контракты и TanStack Query",
          },
          {
            en: "Make print output match what the user sees on screen",
            uk: "Друк, який точно збігається з тим, що користувач бачить на екрані",
            ru: "Печать, которая точно совпадает с тем, что пользователь видит на экране",
          },
          {
            en: "Write Playwright and Vitest coverage, because regressions here are expensive",
            uk: "Тести на Playwright і Vitest, бо регресії в такому продукті дорогі",
            ru: "Тесты на Playwright и Vitest, потому что регрессии в таком продукте дорогие",
          },
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
        period: { en: "Mar 2024 - Jul 2026", uk: "Бер 2024 - Лип 2026", ru: "Мар 2024 - Июл 2026" },
        start: "2024-03",
        end: "2026-07",
        summary: {
          en: "A client portal in React and TypeScript.",
          uk: "Клієнтський портал на React і TypeScript.",
          ru: "Клиентский портал на React и TypeScript.",
        },
        duties: [
          {
            en: "Build and maintain shared UI components on Tailwind CSS and shadcn/ui",
            uk: "Розробка і підтримка спільних UI-компонентів на Tailwind CSS і shadcn/ui",
            ru: "Разработка и поддержка общих UI-компонентов на Tailwind CSS и shadcn/ui",
          },
          {
            en: "Set up localization across the portal",
            uk: "Локалізація всього порталу",
            ru: "Локализация всего портала",
          },
          {
            en: "Own the data layer on TanStack Query and Zustand",
            uk: "Шар даних на TanStack Query і Zustand",
            ru: "Слой данных на TanStack Query и Zustand",
          },
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand"],
      },
      {
        title: "Middle Vue Engineer",
        period: {
          en: "Oct 2023 - Feb 2024",
          uk: "Жовт 2023 - Лют 2024",
          ru: "Окт 2023 - Фев 2024",
        },
        start: "2023-10",
        end: "2024-02",
        summary: {
          en: "Vue 3 applications with TypeScript and Vuetify in a codebase that predated me.",
          uk: "Застосунки на Vue 3 з TypeScript і Vuetify в кодовій базі, яка існувала задовго до мене.",
          ru: "Приложения на Vue 3 с TypeScript и Vuetify в кодовой базе, которая существовала задолго до меня.",
        },
        duties: [
          {
            en: "Develop features across both the Options and the Composition API",
            uk: "Розробка фіч як на Options API, так і на Composition API",
            ru: "Разработка фич как на Options API, так и на Composition API",
          },
          {
            en: "Take requirements directly from the client and turn them into tasks",
            uk: "Збір вимог безпосередньо від клієнта і перетворення їх на задачі",
            ru: "Сбор требований напрямую от клиента и превращение их в задачи",
          },
        ],
        tech: ["Vue 3", "TypeScript", "Vuetify", "SCSS", "Tailwind CSS"],
      },
    ],
  },
  {
    name: "IntenseLab",
    period: { en: "Jun 2022 - Nov 2023", uk: "Черв 2022 - Лист 2023", ru: "Июн 2022 - Ноя 2023" },
    location: lviv,
    arrangement: { en: "Hybrid", uk: "Гібрид", ru: "Гибрид" },
    roles: [
      {
        title: "React Developer",
        period: {
          en: "May 2023 - Nov 2023",
          uk: "Трав 2023 - Лист 2023",
          ru: "Май 2023 - Ноя 2023",
        },
        start: "2023-05",
        end: "2023-11",
        summary: {
          en: "Rebuilt a cryptocurrency platform from Vue in React and TypeScript while it stayed in production.",
          uk: "Переписування криптовалютної платформи з Vue на React і TypeScript без зупинки продакшену.",
          ru: "Переписывание криптовалютной платформы с Vue на React и TypeScript без остановки продакшена.",
        },
        duties: [
          {
            en: "Port existing functionality without changing what users were used to",
            uk: "Перенесення функціоналу без змін у звичній для користувачів поведінці",
            ru: "Перенос функциональности без изменений в привычном для пользователей поведении",
          },
          {
            en: "Keep real-time WebSocket behavior intact through the migration",
            uk: "Збереження real-time поведінки на WebSocket під час міграції",
            ru: "Сохранение real-time поведения на WebSocket во время миграции",
          },
          {
            en: "Move state to Zustand and reimplement configurable dashboard grids",
            uk: "Перенесення стану на Zustand, нова реалізація налаштовуваних сіток дашбордів",
            ru: "Перенос состояния на Zustand, новая реализация настраиваемых сеток дашбордов",
          },
        ],
        tech: ["React", "TypeScript", "Zustand", "WebSockets", "REST"],
      },
      {
        title: "Vue.js Frontend Developer",
        period: {
          en: "Jun 2022 - Nov 2023",
          uk: "Черв 2022 - Лист 2023",
          ru: "Июн 2022 - Ноя 2023",
        },
        start: "2022-06",
        end: "2023-11",
        summary: {
          en: "Frontend of a cryptocurrency platform with live market data.",
          uk: "Фронтенд криптовалютної платформи з ринковими даними в реальному часі.",
          ru: "Фронтенд криптовалютной платформы с рыночными данными в реальном времени.",
        },
        duties: [
          {
            en: "Build draggable, configurable dashboard layouts",
            uk: "Перетягувані налаштовувані макети дашбордів",
            ru: "Перетаскиваемые настраиваемые макеты дашбордов",
          },
          {
            en: "Develop reusable components and the asynchronous data flows behind them",
            uk: "Перевикористовувані компоненти та асинхронні потоки даних за ними",
            ru: "Переиспользуемые компоненты и асинхронные потоки данных за ними",
          },
          {
            en: "Lay the groundwork for moving the product to React",
            uk: "Підготовка продукту до переходу на React",
            ru: "Подготовка продукта к переходу на React",
          },
        ],
        tech: ["Vue.js", "TypeScript", "WebSockets", "REST", "SCSS"],
      },
    ],
  },
  {
    name: { en: "Freelance", uk: "Фриланс", ru: "Фриланс" },
    period: { en: "Jan 2022 - Jun 2022", uk: "Січ 2022 - Черв 2022", ru: "Янв 2022 - Июн 2022" },
    location: lviv,
    arrangement: { en: "Independent", uk: "Самостійно", ru: "Самостоятельно" },
    roles: [
      {
        title: "Frontend Developer",
        period: {
          en: "Jan 2022 - Jun 2022",
          uk: "Січ 2022 - Черв 2022",
          ru: "Янв 2022 - Июн 2022",
        },
        start: "2022-01",
        end: "2022-06",
        summary: {
          en: "Small commercial sites and landing pages for e-commerce and service businesses, including wine retail, perfume and solar energy.",
          uk: "Невеликі комерційні сайти та лендинги для e-commerce і сервісного бізнесу: продаж вина, парфумерія, сонячна енергетика.",
          ru: "Небольшие коммерческие сайты и лендинги для e-commerce и сервисного бизнеса: продажа вина, парфюмерия, солнечная энергетика.",
        },
        duties: [
          {
            en: "Build WordPress sites, with Vue for the parts that needed real behavior",
            uk: "Сайти на WordPress, з Vue там, де потрібна була справжня інтерактивність",
            ru: "Сайты на WordPress, с Vue там, где нужна была настоящая интерактивность",
          },
          {
            en: "Work directly with clients from requirements to delivery",
            uk: "Робота напряму з клієнтами від вимог до здачі",
            ru: "Работа напрямую с клиентами от требований до сдачи",
          },
        ],
        tech: ["Vue.js", "JavaScript", "WordPress", "SCSS"],
      },
    ],
  },
];

export const education: Education = {
  institution: {
    en: "Zhytomyr Agrotechnical College",
    uk: "Житомирський агротехнічний коледж",
    ru: "Житомирский агротехнический колледж",
  },
  qualification: { en: "Junior Specialist", uk: "Молодший спеціаліст", ru: "Младший специалист" },
  field: {
    en: "Computer Systems and Software Maintenance",
    uk: "Обслуговування комп'ютерних систем і програмного забезпечення",
    ru: "Обслуживание компьютерных систем и программного обеспечения",
  },
  period: "2015 - 2019",
  note: {
    en: "Professional qualification: technician-programmer.",
    uk: "Професійна кваліфікація: технік-програміст.",
    ru: "Профессиональная квалификация: техник-программист.",
  },
};

export const courses: Course[] = [
  {
    title: {
      en: "Vue.js development program",
      uk: "Програма з розробки на Vue.js",
      ru: "Программа по разработке на Vue.js",
    },
    provider: "Viseven",
    period: { en: "Aug 2021 - Nov 2021", uk: "Серп 2021 - Лист 2021", ru: "Авг 2021 - Ноя 2021" },
    note: {
      en: "Components, props and events, state basics and API integration, with practice projects alongside the theory.",
      uk: "Компоненти, props та події, основи стану й інтеграція з API, з практичними проєктами паралельно з теорією.",
      ru: "Компоненты, props и события, основы состояния и интеграция с API, с практическими проектами параллельно с теорией.",
    },
  },
];
