import type { Metadata } from "next";
import { Blockquote } from "@/components/Blockquote";
import { Button } from "@/components/Button";
import { CardElevated } from "@/components/CardElevated";
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
    body: "For families, entrepreneurs, and professionals who want a thinking partner, not a product shelf. Our Endowment Model combines low-cost passive investing where markets are efficient with high-conviction active strategies where we have a genuine edge-tax-aware, holistic, and built for decades.",
    href: "/wealth-management",
    cta: "Explore Private Wealth",
  },
  {
    title: "Investment Strategies",
    body: "For accredited investors, institutions, and family offices who want access to concentrated, research-driven strategies in small/mid-cap equities, high-yield credit, activism, and co-investment SPVs-areas where patience and original research create real advantage.",
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

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal className={styles.heroInner}>
            <div className={styles.heroGrid}>
              <h1 className={styles.heroHeadline}>
                Invest
                <br />
                <span className={styles.heroHeadlineItalic}>with Ewing Morris</span>
              </h1>
              <p className={styles.heroLead}>
                Ewing Morris is an independent, employee-owned investment firm based in Toronto. We manage close to $1 billion for more than 500 families and select institutions, applying a private equity mindset to public markets, credit, and select real assets.
              </p>
            </div>
            <p className={styles.heroSecondary}>
              Founded in 2011 by John Ewing and Darcy Morris with $2 million and a shared conviction: the best investment firm is one we&apos;d want to be clients of.
            </p>
            <div className={styles.heroActions}>
              <a href="/contact" className={styles.heroPrimaryCta}>Start a conversation</a>
              <a href="/strategies" className={styles.heroSecondaryCta}>How we invest</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionWrapper muted>
        <ScrollReveal stagger className={styles.pathsGrid}>
          {paths.map((path) => (
            <div key={path.title} className={styles.pathColumn}>
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathBody}>{path.body}</p>
              <Button href={path.href} variant="link">{path.cta}</Button>
            </div>
          ))}
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
          <Eyebrow>Independence</Eyebrow>
          <div className={styles.sectionIntro}>
            <h2>Why independence matters.</h2>
            <p>
              The Canadian asset management industry is consolidating quickly. Independent firms are disappearing. We&apos;ve chosen a different path.
            </p>
            <p>
              No product shelf to fill. No house view to defend. No pressure to make every client look the same. Independence is the reason we can do our best work.
            </p>
            <Button href="/about" variant="link">Read the full story</Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Insights</Eyebrow>
          <div className={styles.sectionIntro}>
            <h2>What we&apos;re thinking about.</h2>
          </div>
          <div className={styles.insightsPlaceholder}>
            <CardElevated>
              <p className={styles.placeholderText}>[3 most recent posts from CMS]</p>
            </CardElevated>
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
