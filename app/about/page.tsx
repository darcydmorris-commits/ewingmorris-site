import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PrincipleList } from "@/components/PrincipleList";
import { SectionHeading } from "@/components/SectionHeading";
import { principles } from "@/content/firm";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ewing Morris, its philosophy, and the independent judgment that shapes the firm.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Built on independent judgment and long-term alignment."
        description="Ewing Morris was founded on a simple idea: thoughtful capital allocation requires independence, patience, and the willingness to look where larger institutions often do not."
      />
      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <SectionHeading
            eyebrow="Philosophy"
            title="The firm begins with how capital should be judged, not how it should be packaged."
            description="The investment philosophy is grounded in deep research, ownership thinking, and a preference for areas of the market where incentives, structure, and time horizon can create real edge."
          />
          <aside className="border-l border-slate-800/10 pl-6">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Founding view</p>
            <blockquote className="mt-2 text-[1.8rem] leading-[1.12] tracking-[-0.03em] text-slate-900">
              Independent thinking is most valuable where complexity and misalignment cause others to look away.
            </blockquote>
          </aside>
        </div>
      </section>
      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <SectionHeading eyebrow="Principles" title="Operating beliefs that shape both the work and the relationship." />
        <PrincipleList principles={principles} />
      </section>
    </main>
  );
}
