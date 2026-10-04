import type { Project } from "@/types";

const live = { en: "Live", uk: "Демо", ru: "Демо" };
const personal = { en: "Personal project", uk: "Особистий проєкт", ru: "Личный проект" };

export const projects: Project[] = [
  {
    title: {
      en: "Surgical planning platform",
      uk: "Платформа планування операцій",
      ru: "Платформа планирования операций",
    },
    kind: { en: "Healthcare", uk: "Медицина", ru: "Медицина" },
    period: "2025 - 2026",
    summary: {
      en: "A production application clinicians use to plan operations. The difficult parts were all on screen: planning flows with a lot of interdependent state, long forms that have to validate without getting in the way, dense tables, and print output that has to match what the user just looked at. Every screen went through typed API contracts, and Playwright and Vitest carried the safety net for changes.",
      uk: "Продакшн-застосунок, у якому лікарі планують операції. Усі складнощі були на екрані: сценарії планування з великою кількістю взаємозалежного стану, довгі форми, які валідуються, не заважаючи, щільні таблиці і друк, що має збігатися з тим, що користувач щойно бачив. Кожен екран працював через типізовані API-контракти, а Playwright і Vitest страхували зміни.",
      ru: "Продакшн-приложение, в котором врачи планируют операции. Все сложности были на экране: сценарии планирования с большим количеством взаимозависимого состояния, длинные формы, которые валидируются, не мешая, плотные таблицы и печать, которая должна совпадать с тем, что пользователь только что видел. Каждый экран работал через типизированные API-контракты, а Playwright и Vitest страховали изменения.",
    },
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
    title: {
      en: "Mobile hiring platform backend",
      uk: "Бекенд мобільної платформи найму",
      ru: "Бэкенд мобильной платформы найма",
    },
    kind: { en: "Mobile product", uk: "Мобільний продукт", ru: "Мобильный продукт" },
    period: { en: "2026 - present", uk: "2026 - дотепер", ru: "2026 - н.в." },
    summary: {
      en: "Backend for a mobile-first hiring product: authentication and onboarding, candidate matching, messaging, interview scheduling, notifications and content moderation. The endpoints are the visible half. The other half is caching, rate limits, background jobs and migrations that keep the data correct while several flows write to it at the same time.",
      uk: "Бекенд мобільного продукту для найму: автентифікація та онбординг, підбір кандидатів, повідомлення, планування співбесід, сповіщення і модерація контенту. Ендпоінти це видима половина. Інша половина це кешування, ліміти запитів, фонові задачі й міграції, які тримають дані коректними, коли в них одночасно пишуть кілька сценаріїв.",
      ru: "Бэкенд мобильного продукта для найма: аутентификация и онбординг, подбор кандидатов, сообщения, планирование собеседований, уведомления и модерация контента. Эндпоинты это видимая половина. Другая половина это кеширование, лимиты запросов, фоновые задачи и миграции, которые держат данные корректными, когда в них одновременно пишут несколько сценариев.",
    },
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "AWS", "Docker"],
  },
  {
    title: {
      en: "Standards editing platform",
      uk: "Платформа редагування стандартів",
      ru: "Платформа редактирования стандартов",
    },
    kind: { en: "Document tooling", uk: "Робота з документами", ru: "Работа с документами" },
    period: { en: "2026 - present", uk: "2026 - дотепер", ru: "2026 - н.в." },
    summary: {
      en: "A structured editor for technical standards documents, with assisted generation and rewriting on top. Editor state lives in ProseMirror and has to stay in agreement with the document model, the database and the responses coming back from the OpenAI API. I work across the whole path, from schema and endpoints to editor integration and UI.",
      uk: "Структурований редактор технічних стандартів з генерацією та переписуванням тексту. Стан редактора живе в ProseMirror і має узгоджуватися з моделлю документа, базою даних і відповідями OpenAI API. Я працюю на всьому шляху, від схеми й ендпоінтів до інтеграції редактора та UI.",
      ru: "Структурированный редактор технических стандартов с генерацией и переписыванием текста. Состояние редактора живёт в ProseMirror и должно согласовываться с моделью документа, базой данных и ответами OpenAI API. Я работаю на всём пути, от схемы и эндпоинтов до интеграции редактора и UI.",
    },
    tech: ["React", "Fastify", "TypeScript", "PostgreSQL", "Knex", "ProseMirror", "OpenAI API"],
  },
  {
    title: {
      en: "Trading platform and Vue to React migration",
      uk: "Торгова платформа і міграція з Vue на React",
      ru: "Торговая платформа и миграция с Vue на React",
    },
    kind: "Fintech",
    period: "2022 - 2023",
    summary: {
      en: "A cryptocurrency platform with live market data over WebSockets and dashboards assembled from draggable, resizable widgets. I worked on it first in Vue, then helped rebuild it in React while it stayed in production. The real constraint was leaving behavior untouched for existing users while the architecture underneath changed completely.",
      uk: "Криптовалютна платформа з ринковими даними через WebSocket і дашбордами з віджетів, які можна перетягувати й змінювати в розмірі. Спочатку я працював над нею на Vue, потім допомагав переписати її на React без зупинки продакшену. Головне обмеження: поведінка для користувачів не мала змінитися, хоча архітектура під нею змінилася повністю.",
      ru: "Криптовалютная платформа с рыночными данными через WebSocket и дашбордами из виджетов, которые можно перетаскивать и менять в размере. Сначала я работал над ней на Vue, потом помогал переписать её на React без остановки продакшена. Главное ограничение: поведение для пользователей не должно было измениться, хотя архитектура под ним поменялась полностью.",
    },
    tech: ["Vue.js", "React", "TypeScript", "Zustand", "WebSockets", "REST"],
  },
  {
    title: "SkinScout",
    kind: personal,
    period: { en: "2026 - present", uk: "2026 - дотепер", ru: "2026 - н.в." },
    personal: true,
    summary: {
      en: "A market scanner for CS2 skins across white.market, DMarket, CSFloat, lis-skins and the Steam Market. It finds items that are cheaper on one marketplace than another, resale spreads that survive the fees, and listings whose float, pattern or Doppler phase already qualifies for a higher buy order. Prices are compared with eight weeks of sales history, liquidity and order depth, and an AI assessment scores a lot on top of that. Sign-in goes through Steam OpenID, and a public Steam inventory can be valued per marketplace after fees.",
      uk: "Сканер ринку скінів CS2 на white.market, DMarket, CSFloat, lis-skins і Steam Market. Знаходить предмети, які на одному маркетплейсі дешевші, ніж на іншому, перепродаж, що лишається вигідним після комісій, і лоти, чий флоат, патерн або фаза Doppler уже підходять під дорожчу заявку. Ціни порівнюються з історією продажів за вісім тижнів, ліквідністю та глибиною заявок, а AI-оцінка дає лоту бал. Вхід через Steam OpenID, а відкритий інвентар Steam можна оцінити по кожному маркетплейсу після комісій.",
      ru: "Сканер рынка скинов CS2 на white.market, DMarket, CSFloat, lis-skins и Steam Market. Находит предметы, которые на одной площадке дешевле, чем на другой, перепродажу, которая остаётся выгодной после комиссий, и лоты, чей флоат, паттерн или фаза Doppler уже подходят под более дорогую заявку. Цены сравниваются с историей продаж за восемь недель, ликвидностью и глубиной заявок, а AI-оценка выставляет лоту балл. Вход через Steam OpenID, а открытый инвентарь Steam можно оценить по каждой площадке после комиссий.",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Anthropic API",
      "Docker",
    ],
    links: [
      { label: live, href: "https://skins-front-production.up.railway.app" },
      { label: "Frontend", href: "https://github.com/bohdanhora/skins-front" },
      { label: "Backend", href: "https://github.com/bohdanhora/skins-back" },
    ],
  },
  {
    title: "Sport Calorie",
    kind: personal,
    period: { en: "2026 - present", uk: "2026 - дотепер", ru: "2026 - н.в." },
    personal: true,
    summary: {
      en: "A calorie and fitness tracker that shows today's food, walking and workouts the moment it opens. Foods and routines are saved once and logged again in a tap, a weekly calendar takes drag-and-drop plans, and a dish can be described in words or photographed to get a draft entry. On the backend every formula, from BMR and TDEE to MET-based burn and the ACSM walking equation, lives in a pure domain layer covered by unit tests. Localized in English, Ukrainian and Russian.",
      uk: "Трекер калорій і тренувань, який одразу показує їжу, ходьбу й тренування за сьогодні. Продукти й рутини зберігаються один раз і додаються в один дотик, тижневий календар приймає плани перетягуванням, а страву можна описати словами або сфотографувати й отримати чернетку запису. На бекенді кожна формула, від BMR і TDEE до витрати за MET і рівняння ходьби ACSM, живе в чистому доменному шарі, покритому юніт-тестами. Локалізація англійською, українською та російською.",
      ru: "Трекер калорий и тренировок, который сразу показывает еду, ходьбу и тренировки за сегодня. Продукты и рутины сохраняются один раз и добавляются в одно касание, недельный календарь принимает планы перетаскиванием, а блюдо можно описать словами или сфотографировать и получить черновик записи. На бэкенде каждая формула, от BMR и TDEE до расхода по MET и уравнения ходьбы ACSM, живёт в чистом доменном слое, покрытом юнит-тестами. Локализация на английском, украинском и русском.",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "next-intl",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Playwright",
      "Jest",
    ],
    links: [
      { label: live, href: "https://sport-calorie.vercel.app" },
      { label: "Frontend", href: "https://github.com/bohdanhora/sport-calorie" },
      { label: "Backend", href: "https://github.com/bohdanhora/sport-calorie-back" },
    ],
  },
  {
    title: "Finance",
    kind: personal,
    period: { en: "2025 - present", uk: "2025 - дотепер", ru: "2025 - н.в." },
    personal: true,
    summary: {
      en: "A personal finance application built on both sides. The frontend handles monthly budgeting, transactions, savings goals, spending analytics, multi-currency balances and configurable PDF reports. The backend covers authentication with Google OAuth and refresh token rotation, month rollover, savings operations and activity streaks.",
      uk: "Застосунок для особистих фінансів, зроблений з обох боків. Фронтенд відповідає за місячний бюджет, транзакції, цілі заощаджень, аналітику витрат, мультивалютні баланси та налаштовувані PDF-звіти. Бекенд покриває автентифікацію через Google OAuth з ротацією refresh-токенів, перехід між місяцями, операції із заощадженнями та серії активності.",
      ru: "Приложение для личных финансов, сделанное с обеих сторон. Фронтенд отвечает за месячный бюджет, транзакции, цели накоплений, аналитику расходов, мультивалютные балансы и настраиваемые PDF-отчёты. Бэкенд покрывает аутентификацию через Google OAuth с ротацией refresh-токенов, переход между месяцами, операции с накоплениями и серии активности.",
    },
    tech: ["Next.js", "React", "TypeScript", "NestJS", "MongoDB", "TanStack Query", "Chart.js"],
    links: [
      { label: live, href: "https://finance-front-zeta.vercel.app" },
      { label: "Frontend", href: "https://github.com/bohdanhora/finance-front" },
      { label: "Backend", href: "https://github.com/bohdanhora/finance-backend" },
    ],
  },
];
