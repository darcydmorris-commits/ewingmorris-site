import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { strategies } from "@/content/strategies";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Investment Strategies",
  description: "Explore the differentiated investment capabilities of Ewing Morris across public equities, credit, activism, and special situations.",
};

export default function StrategiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Investment Strategies"
        title="A differentiated toolkit, used with restraint."
        lead="The firm's capabilities reflect a clear preference for areas of the market where judgment, structure, and patient work can still matter."
      />

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>Public markets approached with an owner's mindset.</h2>
            <p>Each strategy sits inside a broader capital allocation philosophy. The emphasis is on where the work is repeatable, the edge is real, and the role in portfolio is clear.</p>
          </div>
          <div>
            {strategies.map((strategy, index) => (
              <Card key={strategy.slug} number={String(index + 1).padStart(2, "0")} title={strategy.name} description={`${strategy.summary} ${strategy.detail}`} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
