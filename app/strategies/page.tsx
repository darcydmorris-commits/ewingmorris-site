import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StrategyCard } from "@/components/StrategyCard";
import { strategies } from "@/content/strategies";

export const metadata: Metadata = {
  title: "Investment Strategies",
  description: "Explore the differentiated investment capabilities of Ewing Morris across public equities, credit, activism, and special situations.",
};

export default function StrategiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Investment Strategies"
        title="A differentiated toolkit, used with restraint."
        description="The firm's capabilities reflect a clear preference for areas of the market where judgment, structure, and patient work can still matter."
      />
      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <SectionHeading
          eyebrow="Capabilities"
          title="Public markets approached with an owner’s mindset."
          description="Each strategy sits inside a broader capital allocation philosophy. The emphasis is on where the work is repeatable, the edge is real, and the role in portfolio is clear."
        />
        <div className="border-t border-slate-800/10">
          {strategies.map((strategy) => (
            <StrategyCard key={strategy.slug} strategy={strategy} />
          ))}
        </div>
      </section>
    </main>
  );
}
