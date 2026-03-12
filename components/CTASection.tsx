import Link from "next/link";

export function CTASection({ eyebrow, title, description, ctaLabel, ctaHref }: { eyebrow: string; title: string; description: string; ctaLabel: string; ctaHref: string }) {
  return (
    <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-end">
        <div className="space-y-3">
          <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{eyebrow}</p>
          <h2 className="text-balance max-w-[13ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1.07] tracking-[-0.038em] text-slate-900">{title}</h2>
          <p className="font-sans-ui max-w-[56ch] text-base leading-7 text-slate-600">{description}</p>
        </div>
        <Link href={ctaHref} className="font-sans-ui inline-flex min-h-11 items-center justify-center rounded-full border border-slate-800 bg-slate-800 px-5 text-[0.78rem] uppercase tracking-[0.09em] text-stone-100 transition hover:-translate-y-px hover:bg-slate-900">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
