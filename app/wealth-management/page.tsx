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
        title="Most wealth management is either a bank product or a sales pitch. We built something different."
        lead="At a bank, your advisor is selling the house shelf. At most independents, wealth management is an afterthought bolted onto a fund business. At Ewing Morris, it's the relationship that holds everything together."
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
