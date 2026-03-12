import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Legal & Regulatory",
  description: "Legal and regulatory information for Ewing Morris, including investor portal links and public disclosures.",
};

export default function LegalPage() {
  return (
    <main>
      <PageHeader eyebrow="Legal" title="Legal & Regulatory" />

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h3>Investor Portal Logins</h3>
          </div>
          <div className={shared.portalList}>
            <a className={shared.portalItem} href="https://portal.ewingmorris.com" target="_blank" rel="noreferrer">Ewing Morris Investor Portal</a>
            <a className={shared.portalItem} href="https://f-engine.ndexsystems.com" target="_blank" rel="noreferrer">NDEX Client Login</a>
            <a className={shared.portalItem} href="https://myportfolioplus.ca" target="_blank" rel="noreferrer">National Bank My Portfolio+</a>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted narrow>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <p>Ewing Morris & Co. Investment Partners Ltd. is registered as a portfolio manager and exempt market dealer with the Ontario Securities Commission and other provincial regulators. The firm is also registered with the U.S. Securities and Exchange Commission as an investment adviser.</p>
            <p>The information on this website is provided for general informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any securities or investment products. Ewing Morris funds are available only to accredited investors who meet applicable suitability and sophistication requirements.</p>
            <p>[Full regulatory disclosure, complaint resolution, and required notices - pending compliance review before launch.]</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
