import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import CtaBand from "@/components/content/CtaBand";
import ServiceIcon from "@/components/services/ServiceIcon";
import { SERVICES, serviceHref } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tax & Compliance Services in Jodhpur",
  description:
    "ITR filing, GST registration and returns, TDS, accounting, audit support, virtual CFO and notice replies in Jodhpur, with published starting fees.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        title="Tax and compliance services in Jodhpur"
        lede="Ten services, one team. Every fee below is a published starting price; we confirm the final quote after a free document check."
      />
      <ul className="mt-12 grid gap-4 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.slug} className="reveal">
            <Link href={serviceHref(s.slug)} className="card card-hover group flex h-full flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-transform ease-spring-bouncy group-hover:-rotate-6 group-hover:scale-110">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-6 flex items-center gap-1 text-[19px] font-medium text-ink">
                {s.h1}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-brand opacity-0 transition-[opacity,transform] ease-spring group-hover:opacity-100" />
              </h2>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{s.summary}</p>
              <p className="mt-6 border-t border-line pt-4 text-sm font-medium text-ink">{s.price}</p>
            </Link>
          </li>
        ))}
      </ul>
      <CtaBand />
    </main>
  );
}
