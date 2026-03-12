import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-8 rounded-[28px] border border-white/10 bg-[rgba(7,14,25,0.68)] px-6 py-8 text-stone-200/80 backdrop-blur-lg sm:px-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg text-stone-100">Ewing Morris</p>
          <p className="font-sans-ui text-sm leading-6 text-stone-300/72">Independent investment firm serving affluent families, entrepreneurs, professionals, and select institutions.</p>
          <p className="font-sans-ui text-sm uppercase tracking-[0.12em] text-stone-300/56">Toronto, Ontario, Canada</p>
        </div>
        <div className="space-y-3">
          <p className="eyebrow">Explore</p>
          <div className="font-sans-ui text-sm leading-7 text-stone-300/72">
            <Link href="/about" className="text-stone-100 hover:text-white">About</Link><br />
            <Link href="/team" className="text-stone-100 hover:text-white">Team</Link><br />
            <Link href="/insights" className="text-stone-100 hover:text-white">Insights</Link><br />
            <Link href="/legal" className="text-stone-100 hover:text-white">Legal</Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="eyebrow">Important Information</p>
          <p className="font-sans-ui text-sm leading-6 text-stone-300/72">The information on this website is provided for general informational purposes only.</p>
          <p className="font-sans-ui text-sm leading-6 text-stone-300/72">Any investment with the firm is subject to applicable offering and account documentation, including important information regarding eligibility, strategy terms, and risk considerations.</p>
        </div>
      </div>
    </footer>
  );
}
