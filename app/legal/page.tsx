import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Legal / Disclosures / Privacy",
  description: "Legal, disclosure, and privacy information for the Ewing Morris website.",
};

export default function LegalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal / Disclosures / Privacy"
        title="Important information."
        description="The information on this website is provided for general informational purposes only."
      />
      <section className="section-shell mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-10 lg:grid-cols-3">
          <section className="space-y-3 border-t border-slate-800/10 pt-5">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Legal</p>
            <p className="font-sans-ui text-base leading-7 text-slate-600">This website does not constitute investment advice, an offer to sell, or a solicitation to buy any security or investment product.</p>
          </section>
          <section className="space-y-3 border-t border-slate-800/10 pt-5">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Disclosures</p>
            <p className="font-sans-ui text-base leading-7 text-slate-600">Any investment relationship with the firm is subject to applicable account opening, offering, and legal documentation, including information regarding eligibility, strategy terms, and risk considerations.</p>
          </section>
          <section className="space-y-3 border-t border-slate-800/10 pt-5">
            <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Privacy</p>
            <p className="font-sans-ui text-base leading-7 text-slate-600">Privacy language should be reviewed and supplemented before public launch to reflect the firm's actual information-handling practices and applicable regulatory requirements.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
