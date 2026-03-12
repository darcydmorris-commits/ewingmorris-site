import type { Metadata } from "next";
import { Blockquote } from "@/components/Blockquote";
import { CardElevated } from "@/components/CardElevated";
import { Eyebrow } from "@/components/Eyebrow";
import { NumberedList } from "@/components/NumberedList";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Activism & Special Situations",
  description: "Ewing Morris engages constructively in shareholder activism and special situations when governance, capital allocation, or strategy can be improved.",
};

const campaigns = [
  ["BTB REIT", "$32.8M tender offer (2025). ~9.85% ownership at $4.10/unit. Oversubscribed. Board nomination in progress."],
  ["Stoneridge (SRI)", "Active position. Ongoing engagement on capital allocation and operational performance."],
  ["Parkland Corporation (PKI)", "Dissident slate. Subsequently acquired by Sunoco (2025)."],
  ["ZCL Composites (TSX: ZCL)", "Board seat. Capital allocation and shareholder value."],
  ["Cedar Realty Trust (NYSE: CDR)", "Board seat. Governance and strategic alternatives."],
  ["Quisitive Technology (TSX: QUIS)", "Lead investor. Board seat. Growth strategy."],
] as const;

const approachItems = [
  "We start private. The first call is always to management.",
  "We do the work. Deep research, legal preparation, a clear thesis on what needs to change.",
  "We go public when necessary. Proxy campaigns, press releases, director nominations.",
  "We bring resources. Amy Freedman (former CEO, Kingsdale Advisors) advises on engagement strategy.",
  "We stay engaged. Board seats, governance monitoring, sustained focus. This isn't a one-quarter trade.",
];

export default function ActivismPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Activism & Special Situations"
        title="When boards aren't serving shareholders, we show up."
        lead="Shareholder activism is not a side project at Ewing Morris. It's a core capability that runs through our investment process. When we take a meaningful position in a company and believe governance, capital allocation, or strategy can be improved, we engage constructively and publicly."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <p>We do this because it works-for our clients, for the companies involved, and for Canadian capital markets.</p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Track record</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Selected campaigns.</h2>
          </div>
          <div className={shared.cardsStack}>
            {campaigns.map(([title, description]) => (
              <CardElevated key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </CardElevated>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Approach</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>How we engage.</h2>
          </div>
          <NumberedList items={approachItems} />
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper dark>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <p>Most institutional investors in Canada are passive. They own the index, vote with management, and move on. That's a structural problem for Canadian capital markets. We think it's also an opportunity.</p>
          </div>
          <Blockquote quote="Activism is a public service disguised as an investment strategy." />
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
