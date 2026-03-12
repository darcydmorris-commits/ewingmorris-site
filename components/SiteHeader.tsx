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
    <header className="sticky top-4 z-30 rounded-full border border-white/70 bg-[rgba(255,248,240,0.8)] px-5 py-4 shadow-[0_24px_56px_rgba(30,45,62,0.09)] backdrop-blur md:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3 text-slate-900 no-underline">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/30 bg-[linear-gradient(160deg,#16314a_0%,#2b5174_100%)] text-sm tracking-[0.14em] text-stone-100">EM</span>
          <span className="grid gap-0.5">
            <strong className="text-base font-medium tracking-[0.04em]">Ewing Morris</strong>
            <span className="font-sans-ui text-xs tracking-[0.06em] text-slate-500">Independent investment firm</span>
          </span>
        </Link>
        <div className="flex flex-col gap-4 lg:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 font-sans-ui text-[0.78rem] uppercase tracking-[0.09em] text-slate-500">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={active ? "text-slate-900" : "hover:text-slate-800"}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="font-sans-ui inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 text-[0.78rem] uppercase tracking-[0.09em] text-slate-900 transition hover:bg-white/40">
            Request a Private Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
