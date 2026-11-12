import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Cta from "@/components/ui/Cta";
import { SITE, telHref, whatsappHref } from "@/content/site";
import { latestItrYear, itrHref } from "@/content/itr-years";
import MonthlyDueCard from "./MonthlyDueCard";

export default function Hero() {
  const itr = latestItrYear();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 min-[760px]:pt-40 min-[760px]:pb-28">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 min-[960px]:grid-cols-[1.15fr_1fr]">
        <div>
          <Link
            href={itrHref(itr.year)}
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/80 py-1.5 pl-2 pr-3 text-sm text-ink-body backdrop-blur transition-colors ease-spring hover:border-brand/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            ITR filing {itr.year}: due dates &amp; documents
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform ease-spring group-hover:translate-x-0.5" />
          </Link>

          <h1 className="mt-6 text-display font-medium text-ink">
            Tax consultant in Jodhpur for <span className="text-brand">income tax &amp; GST</span>
          </h1>
          <p className="mt-6 max-w-xl text-lede text-ink-muted">
            Since {SITE.foundingYear}, Ranga &amp; Company has filed returns, kept GST clean and answered notices for
            Jodhpur families and businesses, with a partner CA firm for audits.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[520px]:flex-row">
            <Cta href={whatsappHref("Hi, I need help with my taxes.")} icon="whatsapp">Send documents on WhatsApp</Cta>
            <Cta href={telHref} variant="soft" icon="phone">Free 15-min call</Cta>
          </div>
        </div>

        <MonthlyDueCard />
      </div>
    </section>
  );
}
