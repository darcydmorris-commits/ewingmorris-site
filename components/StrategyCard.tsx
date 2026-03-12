import type { Strategy } from "@/content/strategies";

export function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <article className="grid gap-5 border-t border-slate-800/10 py-6 lg:grid-cols-[minmax(230px,0.7fr)_minmax(0,1.3fr)] lg:gap-7">
      <div className="space-y-2">
        <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{strategy.eyebrow}</p>
        <h3 className="max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{strategy.name}</h3>
      </div>
      <div className="space-y-2">
        <p className="font-sans-ui text-base leading-7 text-slate-700">{strategy.summary}</p>
        <p className="font-sans-ui text-base leading-7 text-slate-600">{strategy.detail}</p>
      </div>
    </article>
  );
}
