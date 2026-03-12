import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore careers at Ewing Morris.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="For people who prefer depth to noise."
        description="The firm values sound judgment, intellectual honesty, ownership, and the ability to think clearly under uncertainty."
      />
      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <div className="space-y-3">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">What the work demands</p>
            <h2 className="max-w-[13ch] text-balance text-[clamp(2rem,4vw,3.2rem)] leading-[1.07] tracking-[-0.038em] text-slate-900">Curiosity, discipline, and a tolerance for complexity.</h2>
            <p className="font-sans-ui max-w-[56ch] text-base leading-7 text-slate-600">Ewing Morris is likely to appeal to people who want responsibility, close work with decision-makers, and an environment where ideas are expected to stand up to scrutiny.</p>
          </div>
          <aside className="border-l border-slate-800/10 pl-6">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Working style</p>
            <p className="mt-2 font-sans-ui text-base leading-7 text-slate-600">Clear thinking. Ownership. Precision. A preference for substance over theater.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
