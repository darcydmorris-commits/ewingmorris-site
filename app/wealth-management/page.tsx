import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Wealth Management",
  description: "Ewing Morris wealth management for families, entrepreneurs, professionals, and select institutions seeking a true thinking partner.",
};

const relationshipCards = [
  ["01", "Direct senior access.", "You work with the people making decisions. Not a junior advisor, not a call centre, not a layered service chain. Darcy, Will, James, and Danielle are the people who know your family, understand your objectives, and pick up the phone. Expect regular portfolio reviews, proactive communication, and direct access whenever you need it."],
  ["02", "Holistic, not siloed.", "We think across your entire financial life: investment strategy, estate and tax planning considerations, concentrated stock positions, liquidity events, outside manager oversight, and long-term family priorities. We coordinate with your accountant, lawyer, and other advisors so the pieces work together."],
  ["03", "Transparent reporting.", "Addepar powers our client reporting platform. You see exactly what you own, what it's worth, how it's performing, and how the pieces fit together-across all accounts, strategies, and asset classes. No black boxes."],
  ["04", "Built for the long term.", "We don't chase quarterly performance or manufacture urgency. Our best client relationships are measured in decades, not transactions. We're building something we'd want for our own families."],
] as const;

export default function WealthManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Wealth Management"
        title="Most wealth management is either a bank product or a sales pitch. We built something different."
        lead="At a bank, your advisor is selling the house shelf. At most independents, wealth management is an afterthought bolted onto a fund business. At Ewing Morris, it's the relationship that holds everything together."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <p>We built our wealth platform for families, entrepreneurs, and professionals who want a thinking partner, not a product distributor. Someone who understands your full balance sheet-liquidity, taxes, concentrated positions, outside managers, new opportunities-and can help you make better capital decisions across all of it.</p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Investment approach</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>The Endowment Model.</h2>
            <p>We call our approach the Endowment Model because it's inspired by how the best endowments invest: low cost where markets are efficient, high conviction where we have a genuine edge.</p>
            <p>In practice, this means a barbell structure. The passive side uses low-cost index funds and ETFs for efficient market exposure. The active side allocates to our proprietary strategies-small/mid-cap equities, high-yield credit, long-short, activism-where our research, concentration, and patience create real alpha. The whole portfolio is managed tax-aware, rebalanced with discipline, and reported through Addepar.</p>
            <p>The result is a portfolio that's cheaper than a bank, sharper than a robo-advisor, and more personal than either.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>The relationship</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>What the relationship looks like.</h2>
          </div>
          <div>
            {relationshipCards.map(([number, title, description]) => (
              <Card key={number} number={number} title={title} description={description} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Clients</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Who we work with.</h2>
            <p>Our clients are typically families, entrepreneurs, and professionals with $1 million to $50 million or more in investable assets. Many come to us after a liquidity event, a change in circumstances, or simply dissatisfaction with what they've experienced at a bank or larger institution.</p>
            <p>We also work with select institutions and family offices who want access to our investment strategies, our activism capabilities, or both.</p>
          </div>
          <Button href="/contact">Start with a conversation</Button>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
