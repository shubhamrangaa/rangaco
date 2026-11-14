import { FileCheck2, MessageCircle, ScanSearch } from "lucide-react";
import SectionHeading from "./SectionHeading";

export const STEPS = [
  { icon: MessageCircle, title: "Send your documents", body: "Share Form 16, bank statements or invoices on WhatsApp or email. No office visit needed." },
  { icon: ScanSearch, title: "We prepare and check", body: "We compute your tax under both regimes, reconcile with AIS and GSTR-2B, and flag anything that looks off." },
  { icon: FileCheck2, title: "You approve, we file", body: "You see the summary before anything is filed, then e-verify with an Aadhaar OTP. Done." },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="bg-paper py-24 min-[760px]:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading id="how-heading" eyebrow="How it works" title="Three steps, mostly on WhatsApp" center />
        <div className="relative mt-16">
          {/* Connector line draws in as the section scrolls into view. */}
          <svg aria-hidden="true" className="absolute left-[16%] right-[16%] top-7 hidden h-2 w-[68%] min-[760px]:block" viewBox="0 0 400 2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="400" y2="1" stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="4 6" className="opacity-40" />
            <line x1="0" y1="1" x2="400" y2="1" stroke="var(--color-brand)" strokeWidth="2" className="draw" style={{ ["--len" as string]: 400 }} />
          </svg>
          <ol className="relative grid gap-10 min-[760px]:grid-cols-3 min-[760px]:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="reveal text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-brand shadow-[0_8px_24px_-12px_rgb(18_137_72/0.4)]">
                  <s.icon aria-hidden="true" className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-strong text-xs font-medium text-white">{i + 1}</span>
                </span>
                <h3 className="mt-6 text-[19px] font-medium text-ink">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
