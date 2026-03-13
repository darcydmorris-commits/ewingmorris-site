import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";
import styles from "./strategies.module.css";

export const metadata: Metadata = {
  title: "How We Invest",
  description:
    "Learn how Ewing Morris approaches capital allocation across public equities, credit, shareholder engagement, co-investments, and selective real assets.",
};

const architectureSteps = [
  "Clients",
  "Ewing Morris Wealth",
  "Capital Allocation",
  "Internal Strategies + External Managers",
  "Investment Domains",
] as const;

const domainItems = [
  {
    eyebrow: "Public Equities",
    title: "Concentrated ownership in less efficient markets.",
    body: "We spend most of our time in small and mid-cap companies where original research still matters. The work begins with business quality, capital allocation, and downside. From there, we look for either durable compounders or situations where a catalyst can close the gap between price and value.",
  },
  {
    eyebrow: "Credit",
    title: "Underwriting first, yield second.",
    body: "Credit is useful when it is treated as credit rather than as a substitute for equity. We focus on underwriting, structure, asset coverage, and the path through a difficult environment. Capital preservation matters at least as much as coupon.",
  },
  {
    eyebrow: "Shareholder Engagement & Special Situations",
    title: "A willingness to engage when stewardship is required.",
    body: "When governance, capital allocation, or strategy are standing in the way of value, we are prepared to do more than observe. That can mean private engagement, public activism, special situations, or board-level work where we believe the facts support it.",
  },
  {
    eyebrow: "Co-Investments",
    title: "Special purpose vehicles for specific opportunities.",
    body: "Some opportunities are best pursued with dedicated capital rather than inside a broad pool. In those cases, we may structure co-investments or SPVs for a defined idea, timeline, and risk profile. The aim is precision, not product proliferation.",
  },
  {
    eyebrow: "Real Assets",
    title: "Selective exposure where the economics are durable.",
    body: "Our real asset work is highly selective. Today that includes niche multi-family residential properties in the greater New York City area through a joint venture with Patoma Inc. We view real assets as a complement to public markets, not a style allocation in search of marketing language.",
  },
] as const;

export default function StrategiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="How We Invest"
        title="Capital allocation before products."
        lead="Ewing Morris begins with clients, capital, and the job that portfolio construction is meant to do. Strategies matter, but only in the context of the balance sheet they serve and the opportunities that justify them."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <p>
            Wealth comes first. For private clients, families, and select institutions, the question is not which fund sits on a shelf. It is how capital should be allocated across public markets, credit, engagement-driven situations, co-investments, and selective real assets so the whole portfolio is more resilient, more intentional, and more aligned with long-term objectives.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Public Equities</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.domainIntro}`}>
            <h2>Public markets, approached like business ownership.</h2>
            <p>
              We are drawn to areas of the equity market that are too small, too complex, or too out-of-favour for larger institutions to study carefully. The advantage is not speed. It is time, concentration, and a willingness to understand a business more deeply than the market does.
            </p>
          </div>
          <div className={styles.domainStack}>
            {domainItems.slice(0, 1).map((item) => (
              <div key={item.eyebrow} className={styles.domainItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Credit</Eyebrow>
          <div className={styles.domainStack}>
            {domainItems.slice(1, 2).map((item) => (
              <div key={item.eyebrow} className={styles.domainItem}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Shareholder Engagement &amp; Special Situations</Eyebrow>
          <div className={styles.domainStack}>
            {domainItems.slice(2, 3).map((item) => (
              <div key={item.eyebrow} className={styles.domainItem}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Co-Investments</Eyebrow>
          <div className={styles.domainStack}>
            {domainItems.slice(3, 4).map((item) => (
              <div key={item.eyebrow} className={styles.domainItem}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Real Assets</Eyebrow>
          <div className={styles.domainStack}>
            {domainItems.slice(4).map((item) => (
              <div key={item.eyebrow} className={styles.domainItem}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Architecture</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>How these capabilities fit together.</h2>
            <p>
              The structure is simple. Clients come first. Wealth management provides the decision-making framework. Capital is then allocated across internal strategies and, where appropriate, external managers. The underlying domains are tools within that architecture, not a collection of products competing for attention.
            </p>
          </div>
          <div className={styles.architecture}>
            {architectureSteps.map((step, index) => (
              <div key={step} className={styles.architectureStep}>
                <p>{step}</p>
                {index < architectureSteps.length - 1 ? (
                  <span className={styles.architectureArrow} aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={`${shared.sectionIntro} ${styles.fitSection}`}>
            <Eyebrow>Integration</Eyebrow>
            <h2>One philosophy, expressed through different forms of capital.</h2>
            <p>
              The common thread across equities, credit, engagement, co-investments, and real assets is judgment. We prefer focused exposures, careful underwriting, and situations where patience is an advantage. For wealth clients, these capabilities matter because they expand the menu of sensible choices without turning the relationship into product distribution.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>See how it fits within wealth.</h2>
            <p>
              Ewing Morris Wealth is where these capabilities are turned into an actual client portfolio: tax-aware, balanced against liquidity needs, and shaped around the family or institution the capital belongs to.
            </p>
          </div>
          <Button href="/wealth-management">Explore Wealth Management</Button>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
