import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  const pageHeroClass = aside
    ? "section-shell mt-8 grid gap-12 overflow-hidden px-7 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:px-[4.5rem]"
    : "section-shell mt-8 grid gap-6 px-7 py-16 sm:px-10 lg:px-[4.5rem]";

  return (
    <section className={pageHeroClass}>
      <div className="max-w-3xl space-y-6">
        <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{eyebrow}</p>
        <h1 className="text-balance max-w-[10.5ch] text-[clamp(2.9rem,6.6vw,5.4rem)] leading-[1.02] tracking-[-0.045em] text-slate-900">{title}</h1>
        <p className="font-sans-ui max-w-[52ch] text-base leading-7 text-slate-600">{description}</p>
      </div>
      {aside ? <div className="rounded-[28px] bg-[linear-gradient(180deg,rgba(23,47,72,0.98),rgba(28,57,84,0.95))] p-8 text-stone-100">{aside}</div> : null}
    </section>
  );
}
