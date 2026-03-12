export type Strategy = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  detail: string;
};

export const strategies: Strategy[] = [
  {
    slug: "small-mid-cap-equities",
    name: "Small & Mid Cap Equities",
    eyebrow: "Niche public markets",
    summary: "Public companies approached with a private-equity mindset.",
    detail: "The firm spends time in parts of the market where coverage is thinner, ownership matters more, and patient research can still lead to differentiated conclusions.",
  },
  {
    slug: "high-yield-credit",
    name: "High Yield Credit",
    eyebrow: "Credit",
    summary: "Flexible fixed income with a strong respect for downside.",
    detail: "Credit work is grounded in underwriting discipline, capital structure analysis, and the role defensive capital can play inside a broader portfolio.",
  },
  {
    slug: "activism-special-situations",
    name: "Activism & Special Situations",
    eyebrow: "Selective engagement",
    summary: "Situations where governance, incentives, and structure matter.",
    detail: "This capability is used selectively in cases where ownership, board-level thinking, or strategic alternatives are central to the investment case.",
  },
  {
    slug: "wealth-management",
    name: "Wealth Management",
    eyebrow: "Family office style partnership",
    summary: "Portfolio construction designed around the whole balance sheet.",
    detail: "The wealth-management relationship considers liquidity, taxes, concentration, outside managers, and long-term family priorities together rather than in separate compartments.",
  },
];
