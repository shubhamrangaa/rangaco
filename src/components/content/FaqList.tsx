import { Plus } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/seo";
import type { Faq } from "@/content/faqs";

/** Accessible accordion on native <details>: works without JS, text stays crawlable. */
export default function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      {schema && <JsonLd data={faqLd(faqs)} />}
      <div className="divide-y divide-line rounded-3xl border border-line bg-white">
        {faqs.map((f) => (
          <details key={f.q} name="faq" className="group px-6">
            <summary className="flex list-none items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-ink [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <Plus aria-hidden="true" className="h-5 w-5 shrink-0 text-ink-muted transition-transform ease-spring group-open:rotate-45" />
            </summary>
            <p className="pb-6 text-[16px] leading-relaxed text-ink-body">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
