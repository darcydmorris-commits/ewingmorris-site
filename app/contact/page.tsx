import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ewing Morris to request a confidential consultation.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Arrange a confidential introduction."
        description="A first conversation is designed to understand objectives, capital structure, and whether the firm's approach is a strong fit."
      />
      <section className="section-shell mt-8 grid gap-10 bg-[linear-gradient(135deg,rgba(23,49,75,0.96),rgba(43,74,107,0.94))] px-7 py-14 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:px-[4.5rem]">
        <div className="max-w-xl space-y-6">
          <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-stone-300">Private consultation</p>
          <h2 className="max-w-[13ch] text-balance text-[clamp(2rem,4vw,3.2rem)] leading-[1.07] tracking-[-0.038em] text-stone-100">Begin with a discreet conversation.</h2>
          <p className="font-sans-ui text-base leading-7 text-stone-200/80">Consultations are available by appointment in person and by video conference.</p>
          <div className="grid gap-5 border-t border-white/15 pt-5">
            <div>
              <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-stone-300">Office</p>
              <p className="mt-1 font-sans-ui text-base leading-7 text-stone-200/80">Toronto, Ontario, Canada</p>
            </div>
            <div>
              <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-stone-300">Contact</p>
              <p className="mt-1 font-sans-ui text-base leading-7 text-stone-200/80">info@ewingmorris.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
