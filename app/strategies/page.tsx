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

const architectureDomains = [
  "Public Equities",
  "Credit",
  "Shareholder Engagement",
  "Special Situations / SPVs",
  "External Managers",
] as const;

export default function StrategiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="How We Invest"
        title="Capital allocation before products."
        lead="Ewing Morris begins with clients, capital, and the job portfolio construction is meant to do. Strategies matter only in the context of the balance sheet they serve and the opportunities that justify them."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <p>
            For families, private clients, and select institutions, the question is not which fund sits on a shelf. It is how capital should be allocated across public equities, credit, engagement-driven situations, co-investments, and selective real assets to build a more resilient and intentional portfolio.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Architecture</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.architectureIntro}`}>
            <h2>How the platform is organized.</h2>
            <p>
              Wealth is the hub. Capital allocation is the decision-making layer. The underlying domains are tools within that structure, used where they are most useful to the client balance sheet.
            </p>
          </div>
          <div className={styles.platformDiagram}>
            <div className={styles.platformNode}>Clients</div>
            <div className={styles.platformConnector} aria-hidden="true" />
            <div className={`${styles.platformNode} ${styles.platformHub}`}>Ewing Morris Wealth</div>
            <div className={styles.platformConnector} aria-hidden="true" />
            <div className={styles.platformNode}>Capital Allocation Engine</div>
            <div className={styles.platformConnector} aria-hidden="true" />
            <div className={styles.platformDomains}>
              {architectureDomains.map((domain) => (
                <div key={domain} className={styles.platformDomain}>
                  {domain}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Public Equities</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.domainSection}`}>
            <h2>Public markets, approached like business ownership</h2>
            <p>
              We spend most of our time in small and mid-cap companies where original research still matters. The work begins with business quality, capital allocation, and downside. From there, we look for durable compounders or situations where a catalyst can close the gap between price and value.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Credit</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.domainSection}`}>
            <h2>Underwriting first, yield second</h2>
            <p>
              Credit is useful when it is treated as credit rather than as a substitute for equity. We focus on structure, asset coverage, and the path through a difficult environment. Capital preservation matters at least as much as coupon.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Shareholder Engagement &amp; Special Situations</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.domainSection}`}>
            <h2>Ownership that does not stop at observation</h2>
            <p>
              When governance, capital allocation, or strategy stand in the way of value, we are prepared to do more than observe. That can mean private engagement, public activism, special situations, or board-level work where the facts support it.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Co-Investments</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.domainSection}`}>
            <h2>Dedicated capital for discrete opportunities</h2>
            <p>
              Some opportunities are best pursued with dedicated capital rather than inside a broad pool. In those cases, we may structure co-investments or SPVs for a defined idea, timeline, and risk profile. The objective is thoughtful, disciplined capital allocation.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Real Assets</Eyebrow>
          <div className={`${shared.sectionIntro} ${styles.domainSection}`}>
            <h2>Selective real assets, underwritten with the same discipline</h2>
            <p>
              Today that includes niche multi-family residential properties in the greater New York City area through a joint venture with Patoma Inc. We view real assets as a complement to public markets, pursued selectively and only where the underlying economics are compelling.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={`${shared.sectionIntro} ${styles.fitSection}`}>
            <Eyebrow>Integration</Eyebrow>
            <h2>One philosophy, expressed through different forms of capital.</h2>
            <p>
              The common thread across equities, credit, engagement, co-investments, and real assets is judgment. We prefer focused exposures, careful underwriting, and situations where patience is an advantage. For wealth clients, these capabilities expand the range of sensible choices without turning the relationship into product distribution.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>See how it fits within wealth.</h2>
            <p>
              Ewing Morris Wealth is where these capabilities become an actual client portfolio: tax-aware, balanced against liquidity needs, and shaped around the family or institution the capital belongs to.
            </p>
          </div>
          <Button href="/wealth-management">Learn how these capabilities fit within wealth</Button>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
