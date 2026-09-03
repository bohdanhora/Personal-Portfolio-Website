import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Bohdan Hora",
  title: "Full-Stack Software Engineer",
  location: "Ukraine",
  availability: "Open to full-stack and backend roles",
  intro: [
    "I build web products in TypeScript on both sides of the API.",
    "React and Next.js on the front, NestJS and Fastify on the back, with PostgreSQL, MongoDB and Redis underneath.",
  ],
  about: [
    "I started in 2021 with Vue and spent my first years on frontend work: reusable components, dashboards, forms, live data. A migration from Vue to React on a trading platform is what moved me over to React, and it stayed my main tool for the next two years.",
    "Since then the work has kept moving down the stack. On a healthcare product I owned complex, data-heavy screens and the typed contracts behind them. Now most of my time goes into backend services with NestJS and Fastify, plus full-stack features on a document editing platform where the editor, the database and the model responses all have to agree with each other.",
    "The products I enjoy most are the ones with real constraints: state that has to stay correct, data that arrives out of order, screens people sit in front of for hours. I am based in Ukraine and work remotely with Computools.",
  ],
  email: "bohdan.hora.developer@gmail.com",
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
  },
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
