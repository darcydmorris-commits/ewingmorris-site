import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InsightCard } from "@/components/InsightCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { insights } from "@/content/insights";
import { strategies } from "@/content/strategies";

export const metadata: Metadata = {
  title: "Independent Investment Firm",
  description:
    "Ewing Morris is an independent investment firm for affluent families, entrepreneurs, professionals, and select institutions.",
};

const capabilityCopy: Record<string, { summary: string; detail: string }> = {
  "small-mid-cap-equities": {
    summary: "The firm studies smaller public companies the way an owner would: business quality, capital allocation, incentives, and the path to long-term value.",
    detail:
      "This is slower work in less efficient parts of the market, where patience and original research still matter.",
  },
  "high-yield-credit": {
    summary: "Credit work begins with underwriting and downside, not yield in isolation.",
    detail:
      "The role of fixed income is considered in context: resilience, liquidity, and how it supports the broader portfolio.",
  },
  "activism-special-situations": {
    summary: "In selected situations, governance, capital structure, or strategic change can shape the outcome as much as the market's first impression.",
    detail:
      "The approach is constructive, selective, and grounded in deep work rather than noise.",
  },
  "wealth-management": {
    summary: "Wealth management is handled with the same seriousness as the firm's investment work.",
    detail:
      "That means thinking across taxes, liquidity, concentration, manager selection, and family priorities rather than treating each decision on its own.",
  },
};

export default function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Independent investment firm"
        title="Independent minds. Serious capital."
        description="Ewing Morris works with families, founders, professionals, and select institutions who want more than a conventional advisory relationship. The firm combines thoughtful wealth management with differentiated investment work and direct senior partnership."
        aside={
          <>
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-stone-300">How the firm is built</p>
            <h2 className="max-w-[12ch] text-balance text-[clamp(2rem,4vw,3rem)] leading-[1.07] tracking-[-0.038em] text-stone-100">Institutional discipline without the institutional script.</h2>
            <p className="font-sans-ui max-w-[42ch] text-base leading-7 text-stone-200/80">Independent ownership matters in practical ways. It means no product shelf to fill, no house view to defend, and no pressure to make every client look the same.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-sans-ui text-sm uppercase tracking-[0.08em] text-stone-300">Independence</p>
                <p className="mt-2 font-sans-ui text-sm leading-6 text-stone-200/80">Advice and capital allocation shaped by judgment rather than distribution.</p>
              </div>
              <div>
                <p className="font-sans-ui text-sm uppercase tracking-[0.08em] text-stone-300">Partnership</p>
                <p className="mt-2 font-sans-ui text-sm leading-6 text-stone-200/80">Senior relationships, careful portfolio construction, and differentiated investment work under one roof.</p>
              </div>
            </div>
          </>
        }
      />

      <section className="mt-8 grid border-y border-slate-800/10 py-5 md:grid-cols-4">
        {[
          ["Founded", "2011", "Independent since inception."],
          ["Ownership", "Employee-Owned", "Incentives begin with alignment."],
          ["Based In", "Toronto", "Serving private clients and select institutions."],
          ["Approach", "Research-Driven", "Private-equity habits applied to public markets."],
        ].map(([label, value, note], index) => (
          <article key={label} className={`px-5 ${index < 3 ? "md:border-r md:border-slate-800/6" : ""}`}>
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{label}</p>
            <p className="mt-2 font-sans-ui text-base font-semibold text-slate-900">{value}</p>
            <p className="mt-1 font-sans-ui text-sm leading-6 text-slate-500">{note}</p>
          </article>
        ))}
      </section>

      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <SectionHeading
          eyebrow="Why independence matters"
          title="Clear thinking starts with structure."
          description="Independence is not branding. It changes how advice is given, how capital is allocated, and how relationships are managed over time."
        />
        <div className="grid gap-7 lg:grid-cols-3">
          {[
            ["No captive shelf", "The firm is not built to distribute proprietary products or fit clients into a house model."],
            ["Direct senior access", "Clients work with the people making decisions, not a layered service chain."],
            ["Wider field of view", "Wealth management and differentiated investment capabilities can be considered together when it is useful to do so."],
          ].map(([title, copy], index) => (
            <article key={title} className="border-t border-slate-800/10 pt-5">
              <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">0{index + 1}</p>
              <h3 className="mt-2 max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{title}</h3>
              <p className="mt-2 font-sans-ui text-base leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Wealth management"
              title="Closer to a family office."
              description="For many clients, the real need is not more products. It is a thinking partner who can help organize the full picture: liquidity, taxes, concentrated positions, outside managers, new opportunities, and long-term family priorities."
            />
            <p className="max-w-[64ch] font-sans-ui text-base leading-7 text-slate-600">
              Ewing Morris is built for relationships that benefit from continuity, judgment, and context. The goal is to be useful across decisions, not just manage an account.
            </p>
            <Link href="/wealth-management" className="mt-5 inline-block font-sans-ui text-[0.76rem] uppercase tracking-[0.1em] text-slate-700 hover:text-slate-900">
              Read about wealth management
            </Link>
          </div>
          <aside className="border-l border-slate-800/10 pl-6">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Working principle</p>
            <blockquote className="mt-2 text-[1.8rem] leading-[1.12] tracking-[-0.03em] text-slate-900">
              Good counsel should make a family's balance sheet simpler, steadier, and easier to act on.
            </blockquote>
          </aside>
        </div>
      </section>

      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <SectionHeading
          eyebrow="Capabilities"
          title="A few areas of real edge."
          description="The firm does not try to be everything. It focuses on areas where judgment, structure, and patient research can still create an advantage."
        />
        <div className="border-t border-slate-800/10">
          {strategies.map((strategy) => {
            const copy = capabilityCopy[strategy.slug] ?? {
              summary: strategy.summary,
              detail: strategy.detail,
            };

            return (
              <article key={strategy.slug} className="grid gap-5 border-b border-slate-800/10 py-6 lg:grid-cols-[minmax(230px,0.7fr)_minmax(0,1.3fr)] lg:gap-7">
                <div className="space-y-2">
                  <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{strategy.eyebrow}</p>
                  <h3 className="max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{strategy.name}</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-sans-ui text-base leading-7 text-slate-700">{copy.summary}</p>
                  <p className="font-sans-ui text-base leading-7 text-slate-600">{copy.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <SectionHeading
            eyebrow="Insights"
            title="A visible point of view."
            description="The firm's letters and commentary are an extension of how it works: measured, specific, and more interested in clarity than performance."
          />
          <div className="grid gap-7 md:grid-cols-2">
            {insights.slice(0, 2).map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Careers"
        title="For people who want real responsibility."
        description="The firm suits people who value judgment, intellectual honesty, and the chance to do careful work in a small, serious environment."
        ctaLabel="View Careers"
        ctaHref="/careers"
      />
    </main>
  );
}
