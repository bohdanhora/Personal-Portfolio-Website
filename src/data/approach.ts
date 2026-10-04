import type { ApproachItem } from "@/types";

export const approach: ApproachItem[] = [
  {
    title: {
      en: "I read the code before I change it",
      uk: "Спочатку читаю код, потім змінюю",
      ru: "Сначала читаю код, потом меняю",
    },
    body: {
      en: "Most tasks land in a codebase someone else has been living in for two years. There is usually a reason things look strange, and it is cheaper to go find that reason than to run into it later.",
      uk: "Більшість задач потрапляє в кодову базу, у якій хтось інший живе вже два роки. Зазвичай є причина, чому щось виглядає дивно, і знайти її дешевше, ніж наткнутися на неї пізніше.",
      ru: "Большинство задач попадает в кодовую базу, в которой кто-то другой живёт уже два года. Обычно есть причина, почему что-то выглядит странно, и найти её дешевле, чем наткнуться на неё позже.",
    },
  },
  {
    title: { en: "Small commits", uk: "Маленькі коміти", ru: "Маленькие коммиты" },
    body: {
      en: "I split work into changes that fit in one review. It is not about tidiness. It is that when something breaks two weeks later, you want to revert one commit rather than a branch that touched half the app.",
      uk: "Я розбиваю роботу на зміни, які вміщаються в одне рев'ю. Справа не в охайності. Коли через два тижні щось зламається, хочеться відкотити один коміт, а не гілку, яка зачепила пів застосунку.",
      ru: "Я разбиваю работу на изменения, которые помещаются в одно ревью. Дело не в аккуратности. Когда через две недели что-то сломается, хочется откатить один коммит, а не ветку, которая задела пол-приложения.",
    },
  },
  {
    title: { en: "Reproduce first", uk: "Спочатку відтворити", ru: "Сначала воспроизвести" },
    body: {
      en: "In production I go for logs and a reproduction before I go for a fix. Shipping a guess and watching whether it helps is the slowest way to debug anything, and I have used it enough times to be sure of that.",
      uk: "У продакшені я спершу дивлюся логи й відтворюю проблему, а вже потім виправляю. Викатити здогадку й дивитися, чи допомогло, це найповільніший спосіб дебагу, і я робив так достатньо разів, щоб бути в цьому впевненим.",
      ru: "В продакшене я сначала смотрю логи и воспроизвожу проблему, а уже потом исправляю. Выкатить догадку и смотреть, помогло ли, это самый медленный способ дебага, и я делал так достаточно раз, чтобы быть в этом уверенным.",
    },
  },
  {
    title: {
      en: "Boring code in the dangerous places",
      uk: "Нудний код у небезпечних місцях",
      ru: "Скучный код в опасных местах",
    },
    body: {
      en: "Auth, migrations, caching, anything that touches money. Those get the dull, obvious version even when a clever one exists. The complexity budget is better spent on the part of the product that actually needs it.",
      uk: "Автентифікація, міграції, кешування, усе, що стосується грошей. Там я пишу нудну й очевидну версію, навіть коли існує хитріша. Бюджет складності краще витратити на ту частину продукту, якій він справді потрібен.",
      ru: "Аутентификация, миграции, кеширование, всё, что касается денег. Там я пишу скучную и очевидную версию, даже когда существует более хитрая. Бюджет сложности лучше потратить на ту часть продукта, которой он действительно нужен.",
    },
  },
  {
    title: {
      en: "Types across the boundary",
      uk: "Типи через усю межу",
      ru: "Типы через всю границу",
    },
    body: {
      en: "If a response is typed from the database through to the component, nobody has to ask what an endpoint returns. That removes a category of conversation I do not enjoy having.",
      uk: "Якщо відповідь типізована від бази даних до компонента, нікому не треба питати, що повертає ендпоінт. Це прибирає цілий клас розмов, які я не люблю вести.",
      ru: "Если ответ типизирован от базы данных до компонента, никому не нужно спрашивать, что возвращает эндпоинт. Это убирает целый класс разговоров, которые я не люблю вести.",
    },
  },
  {
    title: {
      en: "Ask what the user was doing",
      uk: "Питати, що робив користувач",
      ru: "Спрашивать, что делал пользователь",
    },
    body: {
      en: "Tickets describe symptoms. Often enough the fix that was requested is not the fix that is needed, and the only way to find that out is to ask what the person was trying to do when they hit it.",
      uk: "Тікети описують симптоми. Досить часто виправлення, яке попросили, не те, яке потрібне, і єдиний спосіб це з'ясувати це спитати, що людина намагалася зробити, коли на це натрапила.",
      ru: "Тикеты описывают симптомы. Довольно часто исправление, которое попросили, не то, которое нужно, и единственный способ это выяснить это спросить, что человек пытался сделать, когда на это наткнулся.",
    },
  },
];
