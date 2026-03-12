export function PrincipleList({ principles }: { principles: string[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {principles.map((principle, index) => (
        <article key={principle} className="rounded-[22px] border border-slate-900/8 bg-white/35 p-6 shadow-[0_18px_38px_rgba(19,38,61,0.06)]">
          <span className="number-chip">0{index + 1}</span>
          <p className="mt-4 font-sans-ui text-base leading-7 text-slate-800">{principle}</p>
        </article>
      ))}
    </div>
  );
}
