import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TeamCard } from "@/components/TeamCard";
import shared from "@/app/interior.module.css";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the people behind Ewing Morris, a partnership of investors, operators, and builders organized around judgment and long-term alignment.",
};

const leadership = [
  {
    initials: "DM",
    name: "Darcy Morris",
    title: "CEO & Co-Founder",
    focus:
      "Investor and builder focused on capital allocation, shareholder engagement, and long-term alignment with clients.",
    bio: `Darcy co-founded Ewing Morris in 2011 and helps shape the firm's direction across client relationships, shareholder engagement, and the broader capital allocation work of the partnership. His work sits at the intersection of investing, ownership, and firm building.

He started in markets early, including time on the bond trading floor at Cantor Fitzgerald, and later worked at Burgundy Asset Management and MacDougall, MacDougall, MacTier. He has led numerous public-market engagement efforts and has served on boards and dissident slates where governance, capital allocation, or strategy required change.

Darcy currently serves on the board of Caldwell Partners and has previously served on the boards of Cedar Realty Trust, ZCL Composites, and Quisitive Technology. He has also held leadership roles with the Art Gallery of Ontario Foundation and the Toronto Public Library Foundation.`,
    email: "darcymorris@ewingmorris.com",
  },
  {
    initials: "JE",
    name: "John Ewing, CFA",
    title: "Chief Investment Officer & Co-Founder",
    focus:
      "Fundamental investor focused on small public companies, disciplined underwriting, and long-term compounding.",
    bio: `John co-founded Ewing Morris in 2011 and leads the investment team. His work is grounded in business quality, capital allocation, and the search for companies that can compound value over long periods of time.

Before launching the firm, he was Director of Research at Burgundy Asset Management and lead analyst for Burgundy's Canadian Small Cap Fund. He graduated with distinction from the University of Guelph in Engineering with a Minor in Business Administration and later completed the Investment Management Workshop at Harvard Business School.

John serves on the board of Sherritt International and chairs the University of Guelph's Investment Committee.`,
    email: "johnewing@ewingmorris.com",
  },
  {
    initials: "BK",
    name: "Breann Kelly, LLB",
    title: "General Counsel, Chief Operating Officer & Chief Compliance Officer",
    focus:
      "Operator focused on translating investment ambition into institutional discipline, legal rigor, and durable infrastructure.",
    bio: `Breann helps hold together the operating core of the firm across legal, compliance, and execution. Her role is to ensure that thoughtful investing is matched by thoughtful infrastructure.

Before joining Ewing Morris in 2018, she spent five years as Vice President, Legal & Compliance at BlackRock Canada and began her career as a corporate lawyer at Osler, Hoskin & Harcourt. She holds an LL.B. from Dalhousie Law School and studied Finance at Saint Mary's University.

She also serves on the investment committee for OCAD University.`,
  },
] as const;

const investmentTeam = [
  {
    initials: "RS",
    name: "Randy Steuart, CFA",
    title: "Partner, Investments",
    focus:
      "Credit investor focused on underwriting, downside protection, and resilient fixed-income construction.",
    bio: `Randy built the firm's Flexible Fixed Income strategy from inception and brings a creditor's mindset to capital allocation. His work starts with downside, structure, and the ability to get paid back.

Before joining Ewing Morris in 2015, he was a Portfolio Manager at Norrep Capital Management and Marret Asset Management.`,
  },
  {
    initials: "AH",
    name: "Anthony Hammill, CFA",
    title: "Partner, Investments",
    focus:
      "Fundamental investor focused on North American small caps, deep research, and patient conviction.",
    bio: `Anthony leads the Dark Horse strategy, a low-net long-short approach focused on North American small-cap companies. He brings a research-intensive style rooted in understanding businesses rather than reacting to market noise.

He has worked in investment management since 1999, beginning as a research analyst at Georgian Capital Partners. He later worked at AIC Investment Services and co-founded Broadview Capital.`,
  },
  {
    initials: "NH",
    name: "Nicholas Hart",
    title: "Senior Associate",
    focus:
      "Generalist analyst focused on research, synthesis, and turning investment work into client-ready thinking.",
    bio: `Nicholas supports both the investment and client teams with research, analysis, and written work. His role sits close to the connective tissue of the firm: helping ideas become decisions and decisions become clear communication.`,
  },
] as const;

const wealthAndOperations = [
  {
    initials: "WJ",
    name: "Will Jones, JD",
    title: "Partner, Relationships",
    focus:
      "Relationship builder focused on private clients, trust, and long-term capital stewardship.",
    bio: `Will leads many of the firm's client relationships and helps shape how Ewing Morris Wealth works with families over time. His orientation is simple: understand the family first, then build the portfolio around what actually matters.

Before joining the firm, he was a partner at Borden Ladner Gervais, where he advised sophisticated clients in complex situations.`,
    email: "williamjones@ewingmorris.com",
  },
  {
    initials: "JT",
    name: "James Telfser, CFA",
    title: "Head of Ewing Morris Wealth",
    focus:
      "Portfolio architect focused on whole-balance-sheet thinking and disciplined wealth allocation.",
    bio: `James leads the firm's wealth platform and thinks about portfolios as part of a larger architecture that includes liquidity, taxes, outside managers, and long-term family priorities.

He joined Ewing Morris in 2024 with his team from Aventine after serving as a portfolio manager at two leading independent firms in Toronto and earlier working as an investment consultant developing quantitative strategies for institutional portfolio managers.`,
  },
  {
    initials: "PS",
    name: "Perry Schultz",
    title: "Partner, Operations",
    focus:
      "Operating partner focused on reliability, execution, and the infrastructure serious stewardship requires.",
    bio: `Perry oversees the firm's operational infrastructure with a temperament that is steady, practical, and exacting. He helps ensure that the day-to-day mechanics of the firm remain as dependable as the long-term thinking behind it.

He joined Ewing Morris in 2015 after operational roles at Delaney Capital Management, Bluewater Investments, and Leon Frazer & Associates.`,
    email: "perryschultz@ewingmorris.com",
  },
  {
    initials: "DK",
    name: "Danielle Kee",
    title: "Investment Counsellor",
    focus:
      "Wealth adviser focused on portfolio construction, planning, and direct partnership with families.",
    bio: `Danielle works directly with families on portfolio construction, financial planning, and ongoing relationship management. She helps translate the firm's investment capabilities into decisions that are practical, durable, and tailored to real lives.`,
  },
  {
    initials: "YL",
    name: "Yuki Liao",
    title: "Operations Analyst",
    focus:
      "Operations specialist focused on reporting, administration, and the precision that underpins client trust.",
    bio: `Yuki supports the firm's operational, reporting, and portfolio administration functions. Her work helps ensure that a high-touch client relationship is backed by accurate, disciplined execution.`,
  },
  {
    initials: "MG",
    name: "Michelle-May Grazette",
    title: "Associate, Client Services",
    focus:
      "Client service operator focused on consistency, responsiveness, and the quality of every client interaction.",
    bio: `Michelle-May is often the first point of contact for clients and helps shape the day-to-day experience of the firm. She manages scheduling, events, CRM, and client coordination with a standard of care that reflects the broader ethos of the partnership.`,
  },
  {
    initials: "LG",
    name: "Loretta Grazette",
    title: "Executive Assistant to the CEO",
    focus:
      "Coordinator focused on clarity, continuity, and the practical rhythm around senior leadership.",
    bio: `Loretta manages Darcy's external scheduling and coordination. Her work is quiet but essential: maintaining order around a role that sits at the center of the firm's external relationships.`,
  },
] as const;

const advisor = {
  initials: "AF",
  name: "Amy Freedman",
  title: "Advisor, Shareholder Engagement",
  focus:
    "Strategic adviser focused on proxy contests, governance, and the practical mechanics of shareholder engagement.",
  bio: `Amy advises Ewing Morris on engagement strategy, proxy campaigns, and shareholder communications. She brings decades of experience at the intersection of capital markets, governance, and contested situations.

She is the former Chief Executive Officer of Kingsdale Advisors and previously spent more than 15 years in investment banking with Stifel and Morgan Stanley.`,
} as const;

const snapshotItems = [
  "Founded 2011",
  "~$1B AUM",
  "17 people",
  "Toronto",
  "Independent",
] as const;

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        eyebrow="People"
        title="A partnership built around judgment."
        lead="Ewing Morris is a partnership of investors, operators, and builders. The firm is intentionally small, with senior people close to decisions, clients, and the long-term stewardship of capital."
      />

      <SectionWrapper>
        <ScrollReveal>
          <div className={styles.snapshotBand}>
            {snapshotItems.map((item) => (
              <span key={item} className={styles.snapshotItem}>
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={styles.groupIntro}>
            <Eyebrow>Leadership</Eyebrow>
            <h2>Partners responsible for the direction of the firm.</h2>
            <p>
              A small group of partners sets the direction of the firm across investing, wealth relationships, operating discipline, and long-term ownership.
            </p>
          </div>
          <ScrollReveal stagger className={shared.teamGrid}>
            {leadership.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={styles.groupIntro}>
            <Eyebrow>Investment Team</Eyebrow>
            <h2>Investors with different lenses, working from the same discipline.</h2>
            <p>
              The investment team brings different lenses to the same task: careful underwriting, original research, and disciplined capital deployment.
            </p>
          </div>
          <ScrollReveal stagger className={shared.teamGrid}>
            {investmentTeam.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={styles.groupIntro}>
            <Eyebrow>Wealth, Client &amp; Operating Team</Eyebrow>
            <h2>The people who turn investment judgment into durable client work.</h2>
            <p>
              Wealth relationships are sustained by people who can combine portfolio judgment, client partnership, and operational reliability.
            </p>
          </div>
          <ScrollReveal stagger className={shared.teamGrid}>
            {wealthAndOperations.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={styles.groupIntro}>
            <Eyebrow>Advisor</Eyebrow>
            <h2>Specialist counsel when shareholder work becomes more complex.</h2>
            <p>
              The firm also draws on specialist counsel when a situation demands deeper experience in shareholder engagement and contested governance work.
            </p>
          </div>
          <ScrollReveal stagger className={shared.teamGrid}>
            <TeamCard {...advisor} />
          </ScrollReveal>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <p className={styles.closingLine}>Small by design. Built for judgment.</p>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
