import Link from "next/link";

export function CTASection({ eyebrow, title, description, ctaLabel, ctaHref }: { eyebrow: string; title: string; description: string; ctaLabel: string; ctaHref: string }) {
  return (
    <section className="section-shell mt-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-end">
        <div className="space-y-3">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-balance max-w-[13ch] text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.04em] text-slate-950">{title}</h2>
          <p className="font-sans-ui max-w-[56ch] text-base leading-7 text-slate-700">{description}</p>
        </div>
        <Link href={ctaHref} className="button-primary">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
