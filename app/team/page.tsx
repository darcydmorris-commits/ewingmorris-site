import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TeamCard } from "@/components/TeamCard";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team at Ewing Morris, including co-founders, partners, and advisors.",
};

const coFounders = [
  {
    initials: "DM",
    name: "Darcy Morris",
    title: "CEO & Co-Founder",
    bio: "Darcy co-founded Ewing Morris in 2011 with John Ewing. He oversees the firm's strategy, client relationships, activism work, and business development. He has led numerous shareholder engagement and activism campaigns across North American public markets, serving on boards and dissident slates to improve governance and unlock value for shareholders.\n\nHis investing career started at 15 on the bond trading floor at Cantor Fitzgerald. Before EM, he was an Associate at Burgundy Asset Management and Portfolio Manager at MacDougall, MacDougall, MacTier. He played semi-professional hockey before pivoting to finance.\n\nDarcy serves on the board of Caldwell Partners (TSX: CWL) and has previously served on the boards of Cedar Realty Trust (NYSE: CDR), ZCL Composites (TSX: ZCL), and Quisitive Technology (TSX: QUIS). He was Chair of the Art Gallery of Ontario Foundation, Treasurer of the Toronto Public Library Foundation, and is a member of the Young Presidents' Organization.",
    email: "darcymorris@ewingmorris.com",
  },
  {
    initials: "JE",
    name: "John Ewing, CFA",
    title: "Chief Investment Officer & Co-Founder",
    bio: "John co-founded Ewing Morris in 2011 with Darcy Morris and leads the investment team. He is always on the hunt for the next compounder-companies that can grow earnings 10-15% per year through business quality and disciplined capital allocation.\n\nBefore EM, John was Director of Research at Burgundy Asset Management, where he also served as lead analyst for Burgundy's Canadian Small Cap Fund. He graduated with distinction from the University of Guelph with an Honours B.Sc. in Engineering and a Minor in Business Administration, winning the President's Trophy as Guelph's top student-athlete. He has completed the Investment Management Workshop at Harvard Business School. John serves on the board of Sherritt International and chairs the University of Guelph's Investment Committee.",
    email: "johnewing@ewingmorris.com",
  },
];

const partners = [
  {
    initials: "BK",
    name: "Breann Kelly, LLB",
    title: "General Counsel, Chief Operating Officer & Chief Compliance Officer",
    bio: "Breann joined Ewing Morris in 2018 and runs the firm's operational backbone: legal, compliance, and execution. Before EM, she spent five years as VP, Legal & Compliance at BlackRock Canada and began her career as a corporate lawyer at Osler, Hoskin & Harcourt. She holds an LL.B. from Dalhousie Law School and studied Finance at Saint Mary's University. She serves on the investment committee for OCAD University.",
    tagline: "Breann is the person who makes sure the firm's ambitions are matched by institutional-grade infrastructure.",
  },
  {
    initials: "RS",
    name: "Randy Steuart, CFA",
    title: "Partner, Investments - Portfolio Manager, Flexible Fixed Income Fund",
    bio: "Randy joined Ewing Morris in 2015 and built the Flexible Fixed Income Fund from inception. His approach to credit starts with underwriting and downside, not yield in isolation. Before EM, he was a Portfolio Manager at Norrep Capital Management and Marret Asset Management.",
    tagline: "Randy is known internally for his relentless focus on downside protection-the kind of discipline that matters most when markets stop cooperating.",
  },
  {
    initials: "AH",
    name: "Anthony Hammill, CFA",
    title: "Partner, Investments - Chairman & Portfolio Manager, Dark Horse Fund",
    bio: "Anthony joined in 2017 and leads the Dark Horse Fund, a low-net market exposure long-short strategy focused on North American small-cap companies. He has been in the investment management industry since 1999, starting as a research analyst at Georgian Capital Partners after completing his Commerce degree at Queen's University. He previously worked at AIC Investment Services and co-founded Broadview Capital.",
    tagline: "Anthony brings a quiet intensity to his work-deep research, patient conviction, and a bias toward understanding businesses rather than trading stocks.",
  },
  {
    initials: "WJ",
    name: "Will Jones, JD",
    title: "Partner, Relationships",
    bio: "Will joined in 2019 and leads the firm's client relationships and wealth management outreach. Before EM, he was a partner at Borden Ladner Gervais (BLG), one of Canada's largest law firms. He brings a relationship-first approach to private wealth, focused on understanding families deeply before discussing portfolios.",
    tagline: "Will is the person most clients meet first-and the reason many of them stay.",
    email: "williamjones@ewingmorris.com",
  },
  {
    initials: "JT",
    name: "James Telfser",
    title: "Head of EM Wealth",
    bio: "James joined in 2024, bringing his team from Aventine to strengthen EM's wealth management platform. He has served as a Portfolio Manager for two leading independent investment firms in Toronto and previously worked as an investment consultant developing quantitative strategies for institutional portfolio managers. He is a CFA Charterholder.",
    tagline: "James thinks about wealth management the way an architect thinks about a building-every element serves the whole.",
  },
  {
    initials: "PS",
    name: "Perry Schultz",
    title: "Partner, Operations",
    bio: "Perry joined in 2015 and oversees the firm's operational infrastructure. Before EM, he worked at Delaney Capital Management, Bluewater Investments, and Leon Frazer & Associates in various operational roles. He studied at Wilfrid Laurier University.",
    tagline: "Perry is the person who makes sure everything works-quietly, reliably, and without drama.",
    email: "perryschultz@ewingmorris.com",
  },
];

const team = [
  {
    initials: "DK",
    name: "Danielle Kee",
    title: "Investment Counsellor",
    bio: "Danielle joined the wealth team in 2025, working directly with families on portfolio construction, financial planning, and ongoing relationship management.",
  },
  {
    initials: "NH",
    name: "Nicholas Hart",
    title: "Senior Associate",
    bio: "Nicholas supports the investment and client service teams on research, analysis, and client deliverables.",
  },
  {
    initials: "YL",
    name: "Yuki Liao",
    title: "Operations Analyst",
    bio: "Yuki joined in 2022 and supports the firm's operational, reporting, and portfolio administration functions.",
  },
  {
    initials: "MG",
    name: "Michelle-May Grazette",
    title: "Associate, Client Services",
    bio: "Michelle-May joined in 2022 and is the firm's first point of contact for clients. She manages scheduling, events, CRM, and ensures every client interaction reflects EM's service standard.",
  },
  {
    initials: "LG",
    name: "Loretta Grazette",
    title: "Executive Assistant to the CEO",
    bio: "Loretta manages Darcy's external scheduling and coordination. If you're trying to reach Darcy, Loretta is the person to know.",
  },
];

const advisor = {
  initials: "AF",
  name: "Amy Freedman",
  title: "Advisor, Engagement Fund Investing",
  bio: "Amy is the former CEO of Kingsdale Advisors, Canada's leading shareholder services and advisory firm. She advises EM on activism strategy, proxy campaigns, and engagement investing. Prior to Kingsdale, she spent over 15 years in capital markets as an investment banker with Stifel and Morgan Stanley.",
};

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Team"
        title="17 people. One firm. Every partner invested alongside you."
        lead="We're small by design. Everyone at Ewing Morris knows every client. Decisions are made by the people you talk to, not a committee you'll never meet."
      />

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Co-Founders</Eyebrow>
          <div className={shared.teamGrid}>
            {coFounders.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Partners</Eyebrow>
          <div className={shared.teamGrid}>
            {partners.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Team</Eyebrow>
          <div className={shared.teamGrid}>
            {team.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Advisor</Eyebrow>
          <div className={shared.teamGrid}>
            <TeamCard {...advisor} />
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
