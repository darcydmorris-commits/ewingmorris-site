import type { Metadata } from "next";
import { Blockquote } from "@/components/Blockquote";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Independent Investment Firm",
  description:
    "Independent, employee-owned investment firm based in Toronto, serving private wealth clients and select institutions.",
};

const paths = [
  {
    title: "Private Wealth",
    body: "For families, entrepreneurs, and professionals who want thoughtful counsel, disciplined portfolio construction, and a relationship that can function as an extension of the family office.",
    href: "/wealth-management",
    cta: "Explore Private Wealth",
  },
  {
    title: "Investment Strategies",
    body: "For accredited investors, institutions, and family offices seeking concentrated, research-driven exposure to less efficient parts of North American capital markets.",
    href: "/strategies",
    cta: "Explore Strategies",
  },
];

const stats = [
  { label: "Founded", value: "2011" },
  { label: "AUM", value: "~$1 billion" },
  { label: "Families", value: "500+" },
  { label: "Professionals", value: "17" },
  { label: "Ownership", value: "100% independent" },
  { label: "Registration", value: "SEC-registered" },
];

const insights = [
  {
    date: "2025",
    category: "Quarterly Letters",
    title: "Q4 2025 Quarterly Letter",
    description: "Candid updates on the portfolio, our thinking, and market conditions.",
  },
  {
    date: "2025",
    category: "Op-Eds & Media",
    title: "Globe and Mail: Why Independence Matters",
    description: "The firm's public voice on Canadian capital markets and shareholder rights.",
  },
  {
    date: "2025",
    category: "Activism Updates",
    title: "BTB REIT Update",
    description: "Public statements and commentary on our engagement campaigns.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal className={styles.heroInner}>
            <div className={styles.heroGrid}>
              <h1 className={styles.heroHeadline}>Independent, by design.</h1>
              <p className={styles.heroLead}>
                Independent, employee-owned investment firm in Toronto for families and select institutions across public markets, credit, and select real assets.
              </p>
            </div>
            <p className={styles.heroSecondary}>
              Founded in 2011, Ewing Morris manages nearly $1 billion with a private equity mindset and direct senior partnership.
            </p>
            <div className={styles.heroActions}>
              <a href="/contact" className={styles.heroPrimaryCta}>Start a conversation</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>How the firm works</Eyebrow>
          <div className={styles.sectionIntro}>
            <h2>One philosophy. Two expressions.</h2>
            <p>
              The same discipline runs through the whole firm: independent thinking, concentrated work where the edge is real, and relationships built around judgment rather than distribution.
            </p>
          </div>
          <div className={styles.pathsGrid}>
            {paths.map((path) => (
              <div key={path.title} className={styles.pathColumn}>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathBody}>{path.body}</p>
                <Button href={path.href} variant="link">{path.cta}</Button>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Independence</Eyebrow>
          <div className={styles.independenceIntro}>
            <h2>Why independence matters.</h2>
            <p>
              Independence is not a positioning line. It is the operating condition that makes the firm's work possible.
            </p>
          </div>
          <div className={styles.independenceGrid}>
            <p>
              No captive product shelf. No house view to defend. No pressure to make every client relationship look the same.
            </p>
            <p>
              It allows the firm to move between wealth management, activism, credit, special situations, and concentrated public-market investing with a single standard: whether the work is sound and the opportunity is real.
            </p>
            <p>
              It also changes the client experience. Advice stays direct. Incentives stay aligned. Judgment is not filtered through a distribution model.
            </p>
          </div>
          <div className={styles.sectionAction}>
            <Button href="/about" variant="link">Read the full story</Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal stagger className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <p className={styles.statLabel}>{stat.label}</p>
              <h3 className={styles.statValue}>{stat.value}</h3>
            </div>
          ))}
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Insights</Eyebrow>
          <div className={styles.sectionIntro}>
            <h2>What we're thinking about.</h2>
          </div>
          <div className={styles.insightsList}>
            {insights.map((item) => (
              <article key={item.title} className={styles.insightRow}>
                <p className={styles.insightMeta}>{item.date}</p>
                <p className={styles.insightMeta}>{item.category}</p>
                <h3 className={styles.insightTitle}>{item.title}</h3>
                <p className={styles.insightDescription}>{item.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.sectionAction}>
            <Button href="/insights" variant="link">View all</Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper dark>
        <ScrollReveal>
          <Blockquote
            quote="Our aim is to create an investment firm we would want to be clients of."
            attribution="John Ewing & Darcy Morris, Co-Founders"
          />
          <div className={styles.darkAction}>
            <Button href="/team" variant="link">Meet the team</Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
