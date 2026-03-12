import type { Metadata } from "next";
import { Blockquote } from "@/components/Blockquote";
import { NumberedList } from "@/components/NumberedList";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { principles } from "@/content/firm";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ewing Morris, its philosophy, and the independent judgment that shapes the firm.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="Built on independent judgment and long-term alignment."
        lead="Ewing Morris was founded on a simple idea: thoughtful capital allocation requires independence, patience, and the willingness to look where larger institutions often do not."
      />

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>The firm begins with how capital should be judged, not how it should be packaged.</h2>
            <p>The investment philosophy is grounded in deep research, ownership thinking, and a preference for areas of the market where incentives, structure, and time horizon can create real edge.</p>
          </div>
          <Blockquote quote="Independent thinking is most valuable where complexity and misalignment cause others to look away." />
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper narrow>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>Operating beliefs that shape both the work and the relationship.</h2>
          </div>
          <NumberedList items={principles} />
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
