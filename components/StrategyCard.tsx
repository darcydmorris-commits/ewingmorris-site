import type { Strategy } from "@/content/strategies";

export function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <article className="grid gap-5 rounded-[24px] border border-slate-900/8 bg-white/35 p-6 shadow-[0_18px_38px_rgba(19,38,61,0.06)] lg:grid-cols-[minmax(230px,0.7fr)_minmax(0,1.3fr)] lg:gap-7">
      <div className="space-y-3">
        <p className="eyebrow">{strategy.eyebrow}</p>
        <h3 className="max-w-[18ch] text-[1.45rem] leading-[1.1] tracking-[-0.03em] text-slate-950">{strategy.name}</h3>
      </div>
      <div className="space-y-3">
        <p className="font-sans-ui text-base leading-7 text-slate-800">{strategy.summary}</p>
        <p className="font-sans-ui text-base leading-7 text-slate-700">{strategy.detail}</p>
      </div>
    </article>
  );
}
