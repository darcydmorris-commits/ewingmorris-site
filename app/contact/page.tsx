import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import shared from "@/app/interior.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ewing Morris to begin a conversation about fit, priorities, and the right relationship.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Start with a conversation."
        lead="The best relationships begin with a straightforward conversation about what you're looking for and whether we're the right fit. No pressure, no pitch."
      />

      <SectionWrapper>
        <ScrollReveal>
          <div className={shared.contactGrid}>
            <ContactForm />
            <div className={shared.contactDetails}>
              <h3>Ewing Morris & Co. Investment Partners</h3>
              <p>1407 Yonge Street, Suite 500</p>
              <p>Toronto, ON M4T 1Y7</p>
              <p><a href="tel:14166402791">416-640-2791</a></p>
              <p><a href="mailto:info@ewingmorris.com">info@ewingmorris.com</a></p>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper muted>
        <ScrollReveal>
          <div className={shared.contactLines}>
            <p>For scheduling with Darcy Morris, reach Loretta Grazette at <a href="mailto:lorettagrazette@ewingmorris.com">lorettagrazette@ewingmorris.com</a>.</p>
            <p>For client service and scheduling, reach Michelle-May Grazette at <a href="mailto:michellemay@ewingmorris.com">michellemay@ewingmorris.com</a>.</p>
            <p>For wealth management conversations, reach Will Jones at <a href="mailto:williamjones@ewingmorris.com">williamjones@ewingmorris.com</a> or <a href="tel:14163170050">416-317-0050</a>.</p>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
