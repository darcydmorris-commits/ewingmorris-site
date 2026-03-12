"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/strategies", label: "Strategies" },
  { href: "/wealth-management", label: "Wealth Management" },
  { href: "/activism-special-situations", label: "Activism" },
  { href: "/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-3 z-30 rounded-[28px] border border-white/10 bg-[rgba(7,14,25,0.76)] px-5 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.2)] backdrop-blur-xl md:px-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <Link href="/" className="flex items-center gap-4 text-[var(--foreground)] no-underline">
          <span className="grid h-14 w-14 place-items-center rounded-[20px] border border-[rgba(231,220,200,0.18)] bg-[linear-gradient(160deg,#0f2238_0%,#1e3b5b_100%)] text-sm tracking-[0.18em] text-stone-100">EM</span>
          <span className="grid gap-1">
            <strong className="text-lg font-medium tracking-[0.08em] text-stone-100">Ewing Morris</strong>
            <span className="font-sans-ui text-xs uppercase tracking-[0.18em] text-stone-300/70">Independent investment firm</span>
          </span>
        </Link>
        <div className="flex flex-col gap-4 xl:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-sans-ui text-[0.76rem] uppercase tracking-[0.11em] text-stone-300/70">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={active ? "text-stone-100" : "transition hover:text-stone-100"}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="button-primary min-h-10 px-4 text-[0.72rem]">
            Request a Private Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
