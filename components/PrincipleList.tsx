export function PrincipleList({ principles }: { principles: string[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {principles.map((principle, index) => (
        <article key={principle} className="border-t border-slate-800/10 pt-5">
          <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">0{index + 1}</p>
          <p className="mt-2 font-sans-ui text-base leading-7 text-slate-700">{principle}</p>
        </article>
      ))}
    </div>
  );
}
