import type { TeamMember } from "@/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="space-y-3 border-t border-slate-800/10 pt-5">
      <div className="mb-4 grid aspect-[1/1.08] place-items-center rounded-[22px] bg-[linear-gradient(160deg,rgba(24,52,78,0.94),rgba(55,88,119,0.82))] text-xl tracking-[0.14em] text-stone-100">
        {member.initials}
      </div>
      <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">{member.title}</p>
      <h3 className="max-w-[18ch] text-[1.35rem] leading-[1.16] tracking-[-0.02em] text-slate-900">{member.name}</h3>
      <p className="font-sans-ui text-sm uppercase tracking-[0.08em] text-slate-400">{member.focus}</p>
      <p className="font-sans-ui text-base leading-7 text-slate-600">{member.bio}</p>
    </article>
  );
}
