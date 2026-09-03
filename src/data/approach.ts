import type { ApproachItem } from "@/types";

export const approach: ApproachItem[] = [
  {
    title: "Read the system before changing it",
    body: "Almost every task starts inside code someone else wrote. I would rather spend an hour understanding why it looks the way it does than an afternoon undoing a decision I did not see.",
  },
  {
    title: "Small changes that can actually be reviewed",
    body: "Five commits that each do one thing beat one branch that touches everything. Review stays honest, and reverting a mistake costs minutes instead of a day.",
  },
  {
    title: "Reproduce, then fix",
    body: "When something breaks in production I go for logs, a reproduction and a narrowed-down case. Guessing at a fix and shipping it usually costs more time than it saves.",
  },
  {
    title: "Boring where it counts",
    body: "Auth, caching, migrations and anything touching money get the plain, unclever version. Complexity is worth paying for in the few places the product genuinely needs it.",
  },
  {
    title: "Types instead of arguments",
    body: "When a contract is typed from the database through to the component, the conversation with the team is about behavior rather than about what shape the response is in.",
  },
  {
    title: "Product before ticket",
    body: "A ticket describes a symptom often enough. Asking what the user was trying to do usually changes the solution, and sometimes removes the need for one.",
  },
];
