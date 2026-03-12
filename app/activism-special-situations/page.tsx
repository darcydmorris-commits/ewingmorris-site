import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Activism & Special Situations",
  description: "A differentiated capability focused on governance, incentives, structure, and long-term value creation.",
};

export default function ActivismPage() {
  return (
    <main>
      <PageHero
        eyebrow="Activism & Special Situations"
        title="Selective where ownership can matter."
        description="This capability is used where governance, incentives, capital structure, or strategic alternatives are central to the investment case. It is analytical work first, not posture."
      />
      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <SectionHeading
            eyebrow="Orientation"
            title="Engaged when the facts justify it, restrained when they do not."
            description="The firm's activism and special situations work reflects the same principles that guide the rest of the platform: careful underwriting, alignment of incentives, and a preference for substance over posture."
          />
          <aside className="border-l border-slate-800/10 pl-6">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Differentiator</p>
            <p className="mt-2 font-sans-ui text-base leading-7 text-slate-600">The edge is not aggression. It is comfort with complexity, structure, and the realities of ownership.</p>
          </aside>
        </div>
      </section>
      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <SectionHeading eyebrow="What the capability includes" title="Governance, incentives, structure, and outcome pathways." />
        <div className="grid gap-7 lg:grid-cols-3">
          {[
            ["Governance analysis", "Assessment of boards, incentives, capital allocation history, and shareholder alignment."],
            ["Capital structure work", "Attention to how debt, equity, and strategic alternatives may affect the range of outcomes."],
            ["Selective engagement", "Constructive involvement where there is a clear rationale, credible path, and disciplined understanding of risk."],
          ].map(([title, copy], index) => (
            <article key={title} className="border-t border-slate-800/10 pt-5">
              <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">0{index + 1}</p>
              <h3 className="mt-2 max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{title}</h3>
              <p className="mt-2 font-sans-ui text-base leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
