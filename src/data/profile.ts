import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Bohdan Hora",
  title: "Full-Stack Software Engineer",
  location: "Ukraine",
  availability: "Open to full-stack, frontend and backend roles",
  intro: [
    "I build web products in TypeScript on both sides of the API.",
    "React and Next.js on the front, NestJS and Fastify on the back, with PostgreSQL, MongoDB and Redis underneath.",
  ],
  about: [
    "I came into frontend through Vue in 2021, and the work has been drifting backwards through the stack ever since.",
    "The first couple of years were dashboards and forms with live data behind them, which sounds duller than it was. Then the crypto platform I worked on got rebuilt in React, I did a large part of that migration, and React has been my main tool since.",
    "A year on a surgical planning product convinced me that the hard parts of a frontend are rarely the visual ones. It was validation that changed depending on three other fields, tables nobody could fit on a screen, print output that had to line up with what the user was looking at. These days I write more backend than frontend: NestJS, Fastify, Postgres, and the caching and background jobs that sit around them.",
    "What I look for is work where almost correct is not good enough. So far that has meant money and medical planning. I live in Ukraine and work remotely with Computools.",
  ],
  facts: [
    { label: "Commercial since", value: "2022" },
    { label: "Now", value: "Backend and full-stack at Computools" },
    { label: "Core", value: "TypeScript, React, Node.js, PostgreSQL" },
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

/** Written by `npm run cv` into `public`, and linked from the site. */
export const cvFileName = "bohdan-hora-cv.pdf";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
