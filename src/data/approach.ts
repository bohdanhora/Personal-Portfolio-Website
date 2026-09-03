import type { ApproachItem } from "@/types";

export const approach: ApproachItem[] = [
  {
    title: "I read the code before I change it",
    body: "Most tasks land in a codebase someone else has been living in for two years. There is usually a reason things look strange, and it is cheaper to go find that reason than to run into it later.",
  },
  {
    title: "Small commits",
    body: "I split work into changes that fit in one review. It is not about tidiness. It is that when something breaks two weeks later, you want to revert one commit rather than a branch that touched half the app.",
  },
  {
    title: "Reproduce first",
    body: "In production I go for logs and a reproduction before I go for a fix. Shipping a guess and watching whether it helps is the slowest way to debug anything, and I have used it enough times to be sure of that.",
  },
  {
    title: "Boring code in the dangerous places",
    body: "Auth, migrations, caching, anything that touches money. Those get the dull, obvious version even when a clever one exists. The complexity budget is better spent on the part of the product that actually needs it.",
  },
  {
    title: "Types across the boundary",
    body: "If a response is typed from the database through to the component, nobody has to ask what an endpoint returns. That removes a category of conversation I do not enjoy having.",
  },
  {
    title: "Ask what the user was doing",
    body: "Tickets describe symptoms. Often enough the fix that was requested is not the fix that is needed, and the only way to find that out is to ask what the person was trying to do when they hit it.",
  },
];
