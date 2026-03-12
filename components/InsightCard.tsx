import type { Insight } from "@/content/insights";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="space-y-2 border-t border-slate-800/10 pt-5">
      <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{insight.category}</p>
      <h3 className="max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{insight.title}</h3>
      <p className="font-sans-ui text-[0.78rem] uppercase tracking-[0.08em] text-slate-400">{insight.date}</p>
      <p className="font-sans-ui text-base leading-7 text-slate-600">{insight.description}</p>
    </article>
  );
}
