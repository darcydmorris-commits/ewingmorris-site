"use client";

export function ContactForm() {
  return (
    <form
      className="grid gap-4 rounded-[24px] bg-white/10 p-7"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const subject = encodeURIComponent("Private Consultation Request");
        const body = encodeURIComponent(
          [
            `Name: ${formData.get("name") ?? ""}`,
            `Email: ${formData.get("email") ?? ""}`,
            `Investor Profile: ${formData.get("profile") ?? ""}`,
            "",
            "Discussion Notes:",
            `${formData.get("message") ?? ""}`,
          ].join("\n"),
        );
        window.location.href = `mailto:info@ewingmorris.com?subject=${subject}&body=${body}`;
      }}
    >
      <label className="grid gap-2">
        <span className="font-sans-ui text-sm tracking-[0.02em] text-stone-100">Name</span>
        <input name="name" required className="font-sans-ui rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-slate-900 outline-none" />
      </label>
      <label className="grid gap-2">
        <span className="font-sans-ui text-sm tracking-[0.02em] text-stone-100">Email</span>
        <input type="email" name="email" required className="font-sans-ui rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-slate-900 outline-none" />
      </label>
      <label className="grid gap-2">
        <span className="font-sans-ui text-sm tracking-[0.02em] text-stone-100">Investor Profile</span>
        <select name="profile" required className="font-sans-ui rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-slate-900 outline-none">
          <option value="">Select one</option>
          <option>Affluent Family</option>
          <option>Entrepreneur or Founder</option>
          <option>Professional</option>
          <option>Institution or Allocator</option>
          <option>Other Qualified Investor</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="font-sans-ui text-sm tracking-[0.02em] text-stone-100">What would you like to discuss?</span>
        <textarea name="message" rows={5} className="font-sans-ui min-h-32 rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-slate-900 outline-none" placeholder="Tell us briefly about your priorities or questions." />
      </label>
      <button type="submit" className="font-sans-ui inline-flex min-h-11 items-center justify-center rounded-full border border-stone-100 bg-stone-100 px-5 text-[0.78rem] uppercase tracking-[0.09em] text-slate-900 transition hover:-translate-y-px hover:bg-white">
        Request Consultation
      </button>
      <p className="font-sans-ui text-[0.78rem] uppercase tracking-[0.08em] text-stone-200/80">Submitting opens a private email addressed to the firm with your details included.</p>
    </form>
  );
}
