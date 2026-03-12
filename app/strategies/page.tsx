import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CardElevated } from "@/components/CardElevated";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Strategies",
  description: "Ewing Morris strategies across small and mid-cap equities, high-yield credit, long-short equity, special situations, and select real assets.",
};

const strategyCards = [
  ["Small & Mid-Cap Equities", "Opportunities Fund", "Inception: September 2011. Global/NA equities, compounders + catalyst + selective short selling. The portfolio is concentrated-typically 15-25 core positions-long-biased with selective short exposure, and managed with a long-term orientation."],
  ["Small & Mid-Cap Equities", "Small Cap Fund", "Inception: May 2015. North American small-cap compounders + catalyst. Focused on the least efficient part of the public equity market: companies too small for institutional coverage but too complex for retail investors."],
  ["High-Yield Credit", "Flexible Fixed Income Fund", "Inception: February 2016. Capital preservation, 5-7% target, high yield + equity short hedge. Credit investing starts with underwriting and downside, not yield in isolation."],
  ["Long-Short Equity", "Dark Horse Fund", "Inception: April 2009. Low-net market exposure long-short strategy in North American small-cap companies. Designed to generate returns with limited directionality relative to broader equity markets."],
  ["Multi-Strategy", "Partners Fund", "Wraps core strategies into a single, diversified allocation for private clients. Combines the Offensive Playbook (equities), the Defensive Playbook (fixed income), and the Neutral Zone Playbook (long-short)."],
  ["Special Situations", "Co-Investment SPVs", "PE-like co-investments in public or private opportunities where concentrated capital, active engagement, or structural expertise can drive outsized returns. Participation by invitation."],
] as const;

export default function StrategiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Strategies"
        title="A private equity mindset applied to public markets."
        lead="We invest in areas where patience, research, and conviction create an edge that scale and speed cannot replicate. Our strategies operate in the less efficient corners of North American capital markets-small and mid-cap equities, high-yield credit, activism and special situations, and select real assets."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <p>Every strategy shares a common discipline: concentrated portfolios, deep fundamental research, capital preservation, and alignment through co-investment. We'd rather own 15 things we understand deeply than 150 things we've screened.</p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.twoColumn}>
            {strategyCards.map(([eyebrow, title, description]) => (
              <CardElevated key={title}>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h3>{title}</h3>
                <p>{description}</p>
              </CardElevated>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Real Assets</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Niche multi-family real estate.</h2>
            <p>Through a joint venture with Patoma Inc., we invest in niche multi-family residential properties in the greater New York City area. This strategy provides exposure to real assets with income characteristics that complement our public market portfolios.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper dark>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <p>Our strategies are available to accredited investors who meet applicable suitability requirements.</p>
          </div>
          <Button href="/contact">Start a conversation</Button>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
