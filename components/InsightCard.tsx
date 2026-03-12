import type { Insight } from "@/content/insights";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="rounded-[24px] border border-slate-900/8 bg-white/40 p-6 shadow-[0_18px_38px_rgba(19,38,61,0.08)]">
      <p className="eyebrow">{insight.category}</p>
      <h3 className="mt-3 max-w-[18ch] text-[1.45rem] leading-[1.1] tracking-[-0.03em] text-slate-950">{insight.title}</h3>
      <p className="mt-3 font-sans-ui text-[0.78rem] uppercase tracking-[0.12em] text-slate-500">{insight.date}</p>
      <p className="mt-4 font-sans-ui text-base leading-7 text-slate-700">{insight.description}</p>
    </article>
  );
}
