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
        title="Built from $2 million and a shared conviction."
        lead="In 2011, John Ewing and Darcy Morris left established careers to start an investment firm with $2 million, two lawn chairs, and a belief that the industry could be better. They read the Wall Street Journal at the public library. They took the bus from the airport on business trips. They built Ewing Morris one relationship at a time."
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
