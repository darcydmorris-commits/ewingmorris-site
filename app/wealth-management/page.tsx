import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Wealth Management",
  description: "Wealth management designed to function as an extension of the client's family office.",
};

export default function WealthManagementPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wealth Management"
        title="An extension of the family office."
        description="The work goes beyond portfolio management. It is about helping clients make better capital decisions across liquidity, opportunity, risk, and time."
      />
      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <SectionHeading
            eyebrow="Approach"
            title="Elegant in feel, rigorous in substance."
            description="The firm approaches wealth management as a partnership with families, entrepreneurs, and private capital holders whose financial lives are more complex than a standard advisory model allows."
          />
          <aside className="border-l border-slate-800/10 pl-6">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">In practice</p>
            <p className="mt-2 font-sans-ui text-base leading-7 text-slate-600">Advice should help the client feel more organized, more deliberate, and less exposed to fragmented decision-making.</p>
          </aside>
        </div>
      </section>
      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <SectionHeading eyebrow="What clients rely on" title="The role is broader than investment selection alone." />
        <div className="grid gap-7 md:grid-cols-2">
          {[
            ["Portfolio Design", "Allocation with context", "Portfolio decisions are made with attention to liquidity needs, concentration, external holdings, and family priorities."],
            ["Manager Oversight", "Selection and monitoring", "The firm can help clients assess, coordinate, and challenge outside managers with an owner's mindset."],
            ["Capital Decisions", "Judgment around major moments", "Liquidity events, transitions, and significant deployment decisions benefit from independent, steady counsel."],
            ["Family Office Functions", "Coordination without theater", "Where appropriate, the relationship can function as an extension of the client's own private office, without unnecessary complexity."],
          ].map(([eyebrow, title, copy]) => (
            <article key={title} className="border-t border-slate-800/10 pt-5">
              <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{eyebrow}</p>
              <h3 className="mt-2 max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{title}</h3>
              <p className="mt-2 font-sans-ui text-base leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
