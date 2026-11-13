import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/content/PageHero";
import FaqList from "@/components/content/FaqList";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import KeyTerms from "@/components/content/KeyTerms";
import Cta from "@/components/ui/Cta";
import JsonLd from "@/components/ui/JsonLd";
import { serviceHref, type Service } from "@/content/services";
import { telHref, whatsappHref } from "@/content/site";
import type { Faq } from "@/content/faqs";
import { pageMetadata, serviceLd } from "@/lib/seo";

export const serviceMetadata = (s: Service): Metadata =>
  pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: serviceHref(s.slug) });

export default function ServicePage({ service, faqs = [], children }: { service: Service; faqs?: Faq[]; children: React.ReactNode }) {
  const path = serviceHref(service.slug);
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <JsonLd data={serviceLd({ name: service.h1, description: service.metaDescription, path, price: service.price })} />
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }, { name: service.name, path }]}
        eyebrow="Service"
        title={service.h1}
        lede={service.metaDescription}
      />

      <div className="mt-12 grid gap-12 min-[1024px]:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 max-w-[740px]">
          <div className="prose-rc">{children}</div>
          {faqs.length > 0 && (
            <section aria-labelledby="service-faq" className="mt-16">
              <h2 id="service-faq" className="mb-6 text-title font-medium text-ink">Frequently asked questions</h2>
              <FaqList faqs={faqs} />
            </section>
          )}
          <KeyTerms service={service.slug} />
        </div>

        <aside className="min-[1024px]:order-none">
          <div className="card sticky top-28 p-6">
            <p className="text-sm text-ink-muted">Pricing</p>
            <p className="mt-1 text-[26px] font-medium tracking-[-0.02em] text-ink">{service.price}</p>
            <ul className="mt-5 space-y-2.5 text-[15px] text-ink-body">
              {["Free document check", "Reply within one working day", "Online or at our Jalori Gate office"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4 text-brand" />{t}</li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <Cta href={whatsappHref(`Hi, I need help with ${service.name.toLowerCase()} in Jodhpur.`)} icon="whatsapp">WhatsApp us</Cta>
              <Cta href={telHref} variant="soft" icon="phone">Call now</Cta>
            </div>
          </div>
        </aside>
      </div>

      <RelatedLinks services={service.related} heading="Related services and guides" maxPosts={2} />
      <CtaBand />
    </main>
  );
}
