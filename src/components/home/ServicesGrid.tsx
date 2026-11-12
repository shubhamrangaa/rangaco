import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/services/ServiceIcon";
import { SERVICES, serviceHref } from "@/content/services";
import SectionHeading from "./SectionHeading";

export default function ServicesGrid() {
  const featured = SERVICES.filter((s) => s.featured);
  return (
    <section id="services" aria-labelledby="services-heading" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 min-[760px]:py-32">
      <SectionHeading
        id="services-heading"
        eyebrow="Services"
        title="Everything your tax file needs, under one roof"
        lede="From your first GST registration to your annual audit, one team keeps your returns, books and deadlines in sync."
      />
      <ul className="mt-12 grid gap-4 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
        {featured.map((s) => (
          <li key={s.slug} className="reveal">
            <Link href={serviceHref(s.slug)} className="card card-hover group flex h-full flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-transform ease-spring-bouncy group-hover:-rotate-6 group-hover:scale-110">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-6 flex items-center gap-1 text-[19px] font-medium text-ink">
                {s.name}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-brand opacity-0 transition-[opacity,transform] ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{s.summary}</p>
              <p className="mt-6 border-t border-line pt-4 text-sm font-medium text-ink">{s.price}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/services" className="group mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-brand">
        See all {SERVICES.length} services
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform ease-spring group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
