import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";
import styles from "./wealth-management.module.css";

export const metadata: Metadata = {
  title: "Wealth",
  description:
    "Learn how Ewing Morris Wealth helps families allocate capital across internal strategies, external managers, passive exposures, and opportunistic investments.",
};

const balanceSheetItems = [
  "liquid investment portfolios",
  "concentrated stock positions",
  "private investments or businesses",
  "opportunistic investments",
  "liquidity needs and taxes",
  "outside managers and advisers",
  "long-term family priorities",
] as const;

const allocationCards = [
  [
    "01",
    "Low-cost exposure where markets are efficient",
    "Large cap equities and investment-grade bonds are often best accessed through low-cost index funds and ETFs. This keeps costs low and avoids paying active fees where the probability of consistent outperformance is limited.",
  ],
  [
    "02",
    "High-conviction active strategies",
    "Where markets are less efficient - smaller companies, special situations, credit, or shareholder engagement - the firm deploys capital through its internal investment strategies. These areas are where careful research, patience, and active judgment can create an edge.",
  ],
  [
    "03",
    "External managers",
    "Some opportunities are best pursued through exceptional outside managers. When appropriate, we allocate capital to a small number of carefully selected firms where we believe the manager's skill and alignment justify the cost.",
  ],
  [
    "04",
    "Opportunistic investments",
    "From time to time the firm pursues specific opportunities through co-investments or special purpose vehicles. These tend to be concentrated and situation-specific, often involving areas where the firm has deep research conviction.",
  ],
] as const;

const relationshipCards = [
  [
    "01",
    "Direct senior access",
    "Clients work directly with senior members of the firm. We intentionally keep the number of relationships limited so that each receives meaningful attention and thoughtful advice.",
  ],
  [
    "02",
    "Whole-balance-sheet thinking",
    "Investment portfolios do not exist in isolation. We coordinate closely with clients' accountants, lawyers, and other advisers to ensure that investment decisions align with tax planning, liquidity needs, and broader financial goals.",
  ],
  [
    "03",
    "Stewardship over the long term",
    "Capital allocation is a long-term exercise. Our focus is on building durable portfolios designed to compound capital thoughtfully over time rather than reacting to short-term market noise.",
  ],
] as const;

const clientItems = [
  "liquidity events such as selling a business",
  "accumulating significant concentrated positions",
  "becoming dissatisfied with traditional bank wealth platforms",
  "seeking a more thoughtful capital allocation partner",
] as const;

export default function WealthManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Wealth"
        title="Private wealth, built around capital allocation."
        lead="Most wealth platforms are designed to distribute products. Ewing Morris Wealth was built to help families make better long-term capital decisions."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <div className={styles.opening}>
            <p>
              The work goes beyond selecting investments. It involves thinking about the entire balance sheet - public markets, private opportunities, taxes, liquidity, and the role capital plays within a family's life.
            </p>
            <p>Our role is to help clients allocate capital thoughtfully across the whole balance sheet.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Your Balance Sheet, Seen as a Whole</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.sectionBlock}`}>
            <h2>Serious capital allocation looks at the whole balance sheet.</h2>
            <p>Most wealth platforms focus only on the investment account.</p>
            <p>For many families that includes:</p>
          </div>
          <ul className={styles.list}>
            {balanceSheetItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.sectionFollow}>
            <p>
              Ewing Morris Wealth helps clients allocate capital across this broader landscape with clarity and discipline.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper narrow className={styles.midPageSection}>
        <ScrollReveal>
          <div className={styles.midPageCta}>
            <div className={shared.sectionIntro}>
              <h2>Prefer to see how we invest?</h2>
              <p>
                Explore how Ewing Morris allocates capital across public markets, credit, and special situations.
              </p>
            </div>
            <Button href="/strategies" variant="secondary">How We Invest</Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>How We Allocate Capital</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Our approach combines several sources of opportunity.</h2>
          </div>
          <div>
            {allocationCards.map(([number, title, description]) => (
              <Card key={number} number={number} title={title} description={description} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>The Relationship</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Built to feel less like a platform and more like a long-term partnership.</h2>
          </div>
          <div>
            {relationshipCards.map(([number, title, description]) => (
              <Card key={number} number={number} title={title} description={description} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Who This Is For</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.sectionBlock}`}>
            <h2>Who this is for.</h2>
            <p>
              Ewing Morris Wealth typically works with families and individuals with investable assets ranging from approximately $1 million to $50 million and above.
            </p>
            <p>Many clients come to the firm after:</p>
          </div>
          <ul className={styles.list}>
            {clientItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.sectionFollow}>
            <p>
              Some institutional clients and family offices also partner with the firm for access to specific investment capabilities.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={`${shared.sectionIntro} ${styles.closingBlock}`}>
            <Eyebrow>Closing</Eyebrow>
            <h2>One philosophy, expressed through different forms of capital.</h2>
            <p>
              Ewing Morris Wealth integrates low-cost market exposure, internal investment strategies, external managers, and opportunistic investments into a coherent portfolio.
            </p>
            <p>
              The objective is simple: to help families allocate capital thoughtfully and steward wealth responsibly over the long term.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper className={styles.finalCtaSection}>
        <ScrollReveal>
          <div className={`${shared.sectionIntro} ${styles.finalCta}`}>
            <h2>Start a conversation.</h2>
            <p>
              Learn how Ewing Morris Wealth approaches portfolio construction and long-term capital allocation.
            </p>
          </div>
          <Button href="/contact">Start a conversation</Button>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
