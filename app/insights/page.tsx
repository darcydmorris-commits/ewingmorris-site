import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { InsightsFilter } from "@/components/InsightsFilter";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description: "Read Ewing Morris letters, commentary, media, and activism updates.",
};

const categories = [
  "All",
  "Quarterly Letters",
  "Op-Eds & Media",
  "Podcasts & Video",
  "Market Commentary",
  "Activism Updates",
];

const entries = [
  {
    date: "2025",
    category: "Quarterly Letters",
    title: "Q4 2025 Quarterly Letter",
    description: "Candid updates on the portfolio, our thinking, and market conditions.",
  },
  {
    date: "2025",
    category: "Op-Eds & Media",
    title: "Globe and Mail: Why Independence Matters",
    description: "The firm's public voice on Canadian capital markets and shareholder rights.",
  },
  {
    date: "2025",
    category: "Podcasts & Video",
    title: "Conversation with the Team",
    description: "Long-form thinking for investors who prefer depth over headlines.",
  },
  {
    date: "2025",
    category: "Market Commentary",
    title: "Canadian Small-Cap Outlook",
    description: "Timely analysis on specific sectors, companies, or market dynamics.",
  },
  {
    date: "2025",
    category: "Activism Updates",
    title: "BTB REIT Update",
    description: "Public statements and commentary on our engagement campaigns.",
  },
  {
    date: "2025",
    category: "Quarterly Letters",
    title: "Q3 2025 Quarterly Letter",
    description: "Written for clients, shared publicly because we believe in transparency.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Insights"
        title="What we're thinking about."
        lead="Our letters, commentary, and public writing are an extension of how we invest: direct, specific, and more interested in getting it right than getting attention. We publish when we have something worth saying, not on a schedule."
      />

      <SectionWrapper>
        <ScrollReveal>
          <InsightsFilter categories={categories} entries={entries} />
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h2>Stay informed.</h2>
            <p>Get our quarterly letter and select commentary delivered to your inbox.</p>
          </div>
          <form className={shared.subscribeForm}>
            <label>
              <span className="visually-hidden">Name</span>
              <input className={shared.subscribeInput} type="text" name="name" placeholder="Name" />
            </label>
            <label>
              <span className="visually-hidden">Email</span>
              <input className={shared.subscribeInput} type="email" name="email" placeholder="Email" />
            </label>
            <button type="submit" className={shared.subscribeButton}>Subscribe</button>
          </form>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
