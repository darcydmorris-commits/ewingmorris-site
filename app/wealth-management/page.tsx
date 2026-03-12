import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Blockquote } from "@/components/Blockquote";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Wealth Management",
  description: "Wealth management designed to function as an extension of the client's family office.",
};

const items = [
  ["01", "Portfolio Design", "Portfolio decisions are made with attention to liquidity needs, concentration, external holdings, and family priorities."],
  ["02", "Manager Oversight", "The firm can help clients assess, coordinate, and challenge outside managers with an owner's mindset."],
  ["03", "Capital Decisions", "Liquidity events, transitions, and significant deployment decisions benefit from independent, steady counsel."],
  ["04", "Family Office Functions", "Where appropriate, the relationship can function as an extension of the client's own private office, without unnecessary complexity."],
] as const;

export default function WealthManagementPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Wealth Management"
        title="An extension of the family office."
        lead="The work goes beyond portfolio management. It is about helping clients make better capital decisions across liquidity, opportunity, risk, and time."
      />

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>Elegant in feel, rigorous in substance.</h2>
            <p>The firm approaches wealth management as a partnership with families, entrepreneurs, and private capital holders whose financial lives are more complex than a standard advisory model allows.</p>
          </div>
          <Blockquote quote="Advice should help the client feel more organized, more deliberate, and less exposed to fragmented decision-making." />
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>The role is broader than investment selection alone.</h2>
          </div>
          <div>
            {items.map(([number, title, description]) => (
              <Card key={number} number={number} title={title} description={description} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
