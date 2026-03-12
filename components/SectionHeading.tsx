export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-9 grid max-w-3xl gap-3">
      <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{eyebrow}</p>
      <h2 className="text-balance max-w-[14ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1.07] tracking-[-0.038em] text-slate-900">{title}</h2>
      {description ? <p className="font-sans-ui max-w-[62ch] text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
