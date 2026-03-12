export type Insight = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

export const insights = [
  {
    slug: "annual-letter",
    category: "Investing",
    title: "Long-horizon capital allocation",
    description: "A measured review of market conditions, portfolio discipline, and the ideas shaping long-term decision-making.",
    date: "Annual commentary",
  },
  {
    slug: "firm-update",
    category: "Firm Update",
    title: "Positioning in the present environment",
    description: "Periodic communication designed to explain priorities, portfolio context, and how the firm is weighing the current opportunity set.",
    date: "Quarterly update",
  },
  {
    slug: "wealth-perspective",
    category: "Wealth Management",
    title: "Where alternative capabilities fit",
    description: "Perspective on how differentiated investment work may complement family capital and a broader long-term plan.",
    date: "Planning note",
  },
] satisfies Insight[];
