import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Ewing Morris for high-agency people seeking real responsibility and long-term growth.",
};

const differentiators = [
  ["01", "Ownership.", "We're 100% employee-owned. Partners invest their own capital alongside clients. The incentives are aligned because the structure demands it."],
  ["02", "Independence.", "No parent company. No product shelf. No house view. You'll develop your own investment judgment, not learn to sell someone else's."],
  ["03", "Intellectual freedom.", "We invest across equities, credit, activism, SPVs, and real assets. If you have an idea and can defend it, there's a path to deploy capital behind it."],
  ["04", "Impact.", "At a 17-person firm managing nearly $1 billion, every person's contribution is visible. You're not a cog. You're someone people rely on."],
  ["05", "Growth.", "We're going from $1 billion to $5 billion. The people who join now will build the next chapter of this firm-and own a piece of it."],
] as const;

export default function CareersPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Careers"
        title="Small firm. Real responsibility. No ceiling."
        lead="Ewing Morris has 17 people. There are no layers, no committees, and no waiting three years to touch a portfolio. If you're good, you'll know it quickly-because you'll be doing the work from day one."
      />

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>What makes this place different.</h2>
          </div>
          <div>
            {differentiators.map(([number, title, description]) => (
              <Card key={number} number={number} title={title} description={description} />
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>Who thrives here.</h2>
            <p>We suit people who are intellectually curious, self-directed, and comfortable with ambiguity. People who'd rather own a problem than wait for instructions. People who want to work alongside senior decision-makers every day, not in five years.</p>
            <p>Our team includes former lawyers, engineers, hockey players, and career investors. The common thread isn't pedigree-it's judgment, work ethic, and the ability to think independently.</p>
            <p className={shared.boldParagraph}>We are building this firm for the next 25 years. If that timeline excites you, we should talk.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <p>We don't always have open roles, but we're always interested in meeting exceptional people. If you think you belong at Ewing Morris, we'd like to hear from you.</p>
          </div>
          <Button href="/contact">Send us a note</Button>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
