import { SERVICES } from "@/content/services";
import { SITE, yearsInPractice } from "@/content/site";

export default function ProofStrip() {
  const items = [
    { value: `${yearsInPractice()}+`, label: `years in practice, since ${SITE.foundingYear}` },
    { value: String(SERVICES.length), label: "tax and compliance services" },
    { value: "₹1,200", label: "starting fee for ITR filing" },
    { value: "1 day", label: "typical turnaround for most filings" },
  ];
  return (
    <section aria-label="At a glance" className="border-y border-line bg-paper/60">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 min-[760px]:grid-cols-4">
        {items.map((it, i) => (
          <div key={it.label} className={`reveal py-8 ${i % 2 ? "pl-6" : "pr-6"} min-[760px]:px-6 ${i ? "min-[760px]:border-l min-[760px]:border-line" : ""}`}>
            <dt className="sr-only">{it.label}</dt>
            <dd>
              <span className="block text-[32px] font-medium tracking-[-0.03em] text-ink tabular-nums">{it.value}</span>
              <span className="mt-1 block text-sm text-ink-muted">{it.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
