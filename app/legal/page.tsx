import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Divider } from "@/components/Divider";
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

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h3>Regulatory Registration</h3>
            <p>Ewing Morris & Co. Investment Partners Ltd. is registered as a portfolio manager and exempt market dealer with the Ontario Securities Commission and other provincial regulators. The firm is also registered with the U.S. Securities and Exchange Commission as an investment adviser.</p>
            <p>Registration does not imply a certain level of skill or training. Further information about the firm&rsquo;s registration status is available upon request.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h3>Important Disclosures</h3>
            <p>The information on this website is provided for general informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any securities or investment products.</p>
            <p>Ewing Morris funds are available only to accredited investors who meet applicable suitability and sophistication requirements. Past performance is not indicative of future results. Investing involves risk, including the possible loss of principal.</p>
            <p>This website may contain forward-looking statements. Such statements are subject to risks and uncertainties that could cause actual results to differ materially from those expressed or implied.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h3>Privacy Policy</h3>
            <p>Ewing Morris is committed to protecting the privacy of its clients and website visitors. Personal information collected through this website or in the course of providing investment management services is handled in accordance with applicable Canadian and U.S. privacy legislation.</p>
            <p>We collect personal information only as necessary to provide our services and communicate with prospective and existing clients. We do not sell, trade, or otherwise transfer personal information to outside parties.</p>
            <p>For a complete copy of our Privacy Policy, please contact us at <a href="mailto:info@ewingmorris.com">info@ewingmorris.com</a>.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h3>Complaint Resolution</h3>
            <p>Ewing Morris has established policies and procedures for handling client complaints. If you wish to make a complaint, please contact us in writing at:</p>
            <p className={shared.boldParagraph}>Ewing Morris & Co. Investment Partners Ltd.<br />1407 Yonge Street, Suite 500<br />Toronto, Ontario M4T 1Y7<br />Attention: Chief Compliance Officer</p>
            <p>Alternatively, you may email <a href="mailto:compliance@ewingmorris.com">compliance@ewingmorris.com</a>. We will acknowledge receipt of your complaint within five business days and provide a substantive response within 90 days.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.sectionIntro}>
            <h3>Accessibility</h3>
            <p>Ewing Morris is committed to ensuring that our services and communications are accessible to all individuals, including those with disabilities. We strive to meet the requirements of the Accessibility for Ontarians with Disabilities Act (AODA) and the Accessible Canada Act.</p>
            <p>If you require information in an accessible format or need accommodation to access our services, please contact us at <a href="mailto:info@ewingmorris.com">info@ewingmorris.com</a> or call 416-640-2791.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
