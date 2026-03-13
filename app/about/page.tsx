import type { Metadata } from "next";
import { Blockquote } from "@/components/Blockquote";
import { Eyebrow } from "@/components/Eyebrow";
import { NumberedList } from "@/components/NumberedList";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ewing Morris, its history, independence, and the values that shape the firm.",
};

const historyItems = [
  "John Ewing and Darcy Morris co-found Ewing Morris with $2 million in capital. The Opportunities Fund launches in September, focused on North American equities.",
  "Randy Steuart joins as Portfolio Manager to build the Flexible Fixed Income strategy. Perry Schultz joins to lead operations.",
  "Anthony Hammill joins as Partner. The Dark Horse Fund — a low-net long/short small-cap strategy — comes under the Ewing Morris umbrella.",
  "Breann Kelly joins as General Counsel and Chief Operating Officer, bringing institutional compliance and legal experience from BlackRock Canada and Osler. Will Jones joins as Partner, Relationships. The firm's wealth management platform begins to take shape.",
  "James Telfser and team join from Aventine, adding portfolio management depth and expanding the firm's wealth capabilities. The Endowment Model launches.",
  "Ewing Morris completes a $32.8 million tender offer for BTB REIT. John Ewing is appointed to the board of Sherritt International. Assets under management approach $1 billion.",
  "The firm continues to invest, build, and grow — independently.",
];

const valueItems = [
  "Investment results over asset-gathering. We'd rather be smaller and excellent than large and mediocre.",
  "Candour over comfort. Clients deserve the truth about their portfolio, not a performance deck that obscures it.",
  "Alignment over salesmanship. We eat our own cooking. Every partner has meaningful personal capital invested in EM strategies.",
  "Long-term over short-term. We think in decades. Our best clients do too.",
  "Independence over convenience. We answer to our clients, not a parent company.",
];

const historyYears = ["2011", "2015", "2017", "2018", "2024", "2025", "2026"];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="Built from $2 million and a shared conviction."
        lead="In 2011, John Ewing and Darcy Morris left established careers to start an investment firm with $2 million, two lawn chairs, and a belief that the industry could be better. They read the Wall Street Journal at the public library. They took the bus from the airport on business trips. They built Ewing Morris one relationship at a time."
      />

      <SectionWrapper narrow>
        <ScrollReveal>
          <p>Fourteen years later, the firm manages close to $1 billion for more than 500 families and select institutions. What began as a focused small-cap equity strategy has expanded into high-yield credit, shareholder activism, special situations, niche real estate, and a full private wealth platform. The team has grown to 17 people. The conviction hasn't changed.</p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={styles.quoteSection}>
            <Blockquote quote="Our aim is to create an investment firm we would want to be clients of." />
            <div className={`${shared.sectionIntro} ${styles.quoteSupport}`}>
              <p>This means focusing on investment results, not asset-gathering. Communicating candidly whether the news is good or bad. Investing our own capital alongside our clients on the same terms. And measuring ourselves by absolute returns, not relative benchmarks.</p>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>History</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>The Ewing Morris story</h2>
          </div>
          <div>
            {historyItems.map((item, index) => (
              <div key={historyYears[index]}>
                <div style={{ display: "none" }} />
              </div>
            ))}
          </div>
          <div>
            {historyItems.map((item, index) => (
              <div key={historyYears[index]} className={shared.timelineItem}>
                <p className={shared.timelineYear}>{historyYears[index]}</p>
                <p className={shared.timelineText}>{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <Eyebrow>Independence</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>Why we'll never sell.</h2>
            <p>In the past five years, CI Financial was taken private by Mubadala for $4.7 billion. Burgundy was acquired by BMO for $625 million. Guardian Capital was sold to Desjardins for $1.67 billion. The number of independent brokerages in Canada has fallen from roughly 200 to fewer than 160.</p>
            <p>We understand why firms sell. We've chosen a different path. Independence is what allows us to take concentrated positions when we have conviction, run activism campaigns when boards aren't serving shareholders, build SPVs for specific opportunities, and tell clients the truth even when it's uncomfortable.</p>
            <p>Ewing Morris is 100% employee-owned. Every partner invests alongside clients. Our interests are aligned because our structure requires it, not because our marketing says so.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <Eyebrow>Values</Eyebrow>
          <div className={shared.sectionIntro}>
            <h2>What we believe.</h2>
            <p>We don't put values on a wall. But if you spend time with the firm, you'll see these in how we work:</p>
          </div>
          <NumberedList items={valueItems} />
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
