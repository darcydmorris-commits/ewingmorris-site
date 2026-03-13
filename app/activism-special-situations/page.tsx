import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { NumberedList } from "@/components/NumberedList";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Shareholder Engagement",
  description:
    "Learn how Ewing Morris approaches shareholder engagement and special situations through ownership, stewardship, and disciplined capital allocation.",
};

const engagementConditions = [
  [
    "01",
    "Deep research conviction",
    "Engagement begins with research, not rhetoric. We engage when we have done the work, understand the business, and have a clear view on the source of mispricing or underperformance.",
  ],
  [
    "02",
    "Meaningful ownership",
    "Ownership matters. We prefer to engage where capital is genuinely at work and where our interests are aligned with long-term shareholders.",
  ],
  [
    "03",
    "Constructive opportunity",
    "The aim is not confrontation for its own sake. We engage when there is a realistic path to improving governance, capital allocation, strategic direction, or stewardship.",
  ],
] as const;

const engagementForms = [
  "Direct dialogue with management and boards when private engagement can be productive.",
  "Governance improvements where board structure, incentives, or oversight can be strengthened.",
  "Board representation when ownership and circumstances call for a more direct role in stewardship.",
  "Capital allocation work where balance sheet decisions, buybacks, asset sales, or reinvestment choices matter to value.",
  "Strategic alternatives when a business may be worth more under a different structure, ownership base, or strategic direction.",
];

export default function ShareholderEngagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Shareholder Engagement"
        title="Shareholder engagement when ownership calls for it."
        lead="At Ewing Morris, engagement is an extension of ownership. When we hold a meaningful stake and believe governance, capital allocation, or strategic direction can be improved, we are prepared to engage thoughtfully and constructively."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <Eyebrow>When Engagement Matters</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Why thoughtful engagement can create value.</h2>
            <p>
              Public markets do not always reward stewardship. Companies can remain misunderstood, boards can become complacent, and capital can be deployed without sufficient discipline. In those situations, engaged ownership can help close the gap between price and value.
            </p>
            <p>
              We think engagement works best when it is grounded in research, supported by real ownership, and focused on outcomes that improve the business for all shareholders.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Our Approach</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Three conditions for engagement.</h2>
          </div>
          <div>
            {engagementConditions.map(([number, title, description]) => (
              <Card key={number} number={number} title={title} description={description} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Forms of Engagement</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>How ownership can be expressed.</h2>
            <p>
              Engagement takes different forms depending on the facts, the company, and the opportunity. The common thread is stewardship rather than spectacle.
            </p>
          </div>
          <NumberedList items={engagementForms} />
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Special Situations</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Catalyst-driven opportunities, pursued selectively.</h2>
            <p>
              Alongside engagement, the firm also invests in catalyst-driven situations where change, restructuring, governance evolution, or capital allocation decisions may alter the underlying value of an asset.
            </p>
            <p>
              In some cases, these opportunities are best pursued through dedicated co-investments or special purpose vehicles. We do so selectively, when the structure suits the opportunity and the work is sufficiently differentiated.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper dark>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>Ownership carries responsibility.</h2>
            <p>
              We view shareholder engagement as part of disciplined capital allocation. When ownership creates both the right and the obligation to engage, we believe thoughtful stewardship can serve clients, companies, and the market more broadly.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
