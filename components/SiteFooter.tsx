import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-slate-800/10 px-1 pt-5">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-sm font-medium">Ewing Morris</p>
          <p className="font-sans-ui text-sm text-slate-500">Independent investment firm serving affluent families, entrepreneurs, professionals, and select institutions.</p>
          <p className="font-sans-ui text-sm text-slate-500">Toronto, Ontario, Canada</p>
        </div>
        <div className="space-y-2">
          <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Explore</p>
          <p className="font-sans-ui text-sm text-slate-500">
            <Link href="/about" className="text-slate-700 hover:text-slate-900">About</Link>{" "}
            <span>|</span>{" "}
            <Link href="/team" className="text-slate-700 hover:text-slate-900">Team</Link>{" "}
            <span>|</span>{" "}
            <Link href="/insights" className="text-slate-700 hover:text-slate-900">Insights</Link>{" "}
            <span>|</span>{" "}
            <Link href="/legal" className="text-slate-700 hover:text-slate-900">Legal</Link>
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-sans-ui text-[0.72rem] uppercase tracking-[0.16em] text-amber-800">Important Information</p>
          <p className="font-sans-ui text-sm text-slate-500">The information on this website is provided for general informational purposes only.</p>
          <p className="font-sans-ui text-sm text-slate-500">Any investment with the firm is subject to applicable offering and account documentation, including important information regarding eligibility, strategy terms, and risk considerations.</p>
        </div>
      </div>
    </footer>
  );
}
