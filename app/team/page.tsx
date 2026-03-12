import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the leadership and investment team at Ewing Morris.",
};

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Team"
        title="Led by investors with operating judgment and market depth."
        description="The team combines private wealth sensibility with experience across public markets, credit, governance, and capital allocation."
      />
      <section className="section-shell section-shell-alt mt-8 px-7 py-14 sm:px-10 lg:px-[4.5rem]">
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
