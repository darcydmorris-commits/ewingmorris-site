import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  const pageHeroClass = aside
    ? "section-shell mt-8 grid gap-10 overflow-hidden lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end"
    : "section-shell mt-8 grid gap-6 overflow-hidden";

  return (
    <section className={pageHeroClass}>
      <div className="max-w-3xl space-y-6">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-balance max-w-[11ch] text-[clamp(3rem,6.4vw,5.5rem)] leading-[0.98] tracking-[-0.05em] text-slate-950">{title}</h1>
        <p className="font-sans-ui max-w-[56ch] text-base leading-7 text-slate-700">{description}</p>
      </div>
      {aside ? (
        <div className="rounded-[28px] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(19,38,61,0.98),rgba(15,30,49,0.98))] p-7 text-stone-100 shadow-[0_24px_50px_rgba(9,17,29,0.18)]">
          {aside}
        </div>
      ) : null}
    </section>
  );
}
