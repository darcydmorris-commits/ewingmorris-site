import type { Metadata } from "next";
import { InsightCard } from "@/components/InsightCard";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Read commentary from Ewing Morris on investing, markets, activism, and wealth management.",
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Writing meant to sharpen judgment, not create noise."
        description="The firm publishes commentary to explain how it thinks about capital allocation, market structure, and the practical questions that matter to clients."
      />
      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
    </main>
  );
}
