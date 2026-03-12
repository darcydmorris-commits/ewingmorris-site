export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-9 grid max-w-3xl gap-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-balance max-w-[14ch] text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.04em] text-slate-950">{title}</h2>
      {description ? <p className="font-sans-ui max-w-[62ch] text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}
