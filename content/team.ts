export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  focus: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Darcy Morris",
    title: "Chief Executive Officer & Co-Founder",
    initials: "DM",
    focus: "Wealth management, high yield credit, activism, niche real assets",
    bio: "Darcy Morris co-founded Ewing Morris in 2011. His work spans wealth management, high yield credit, small and mid-cap equities, shareholder activism, and selected real asset opportunities.",
  },
  {
    name: "John Ewing, CFA",
    title: "Chief Investment Officer & Co-Founder",
    initials: "JE",
    focus: "Investment process, equities, portfolio construction",
    bio: "John Ewing, CFA, co-founded Ewing Morris in 2011 and leads the firm's investment team with a focus on long-term compounding, deep research, and disciplined portfolio construction.",
  },
  {
    name: "Breann Kirincich, LLB",
    title: "Operations, Legal & Compliance",
    initials: "BK",
    focus: "Platform, legal, compliance, operational infrastructure",
    bio: "Breann Kirincich supports the firm's operating platform across legal, compliance, and execution matters, helping translate investment discipline into a reliable client experience.",
  },
  {
    name: "Randy Steuart, CFA",
    title: "Partner, Investments",
    initials: "RS",
    focus: "Credit, underwriting, risk-aware fixed income",
    bio: "Randy Steuart, CFA, brings fixed income and credit-investing depth to the firm, with a focus on underwriting discipline, downside awareness, and capital preservation.",
  },
];
