import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import TrustedBy from "@/components/home/TrustedBy";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import YearCalendar from "@/components/home/YearCalendar";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import LatestPosts from "@/components/home/LatestPosts";
import SectionHeading from "@/components/home/SectionHeading";
import FaqList from "@/components/content/FaqList";
import CtaBand from "@/components/content/CtaBand";
import JsonLd from "@/components/ui/JsonLd";
import { HOME_FAQS } from "@/content/faqs";
import { SITE } from "@/content/site";
import { getService } from "@/content/services";
import { pageMetadata, websiteLd } from "@/lib/seo";

const itrFee = getService("itr-filing-jodhpur").price.replace(/^From /, "");

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Tax Consultant in Jodhpur for ITR & GST",
    description: `Tax consultant in Jodhpur since ${SITE.foundingYear}: ITR filing from ${itrFee}, GST registration and returns, TDS, accounting and notice replies. Audits via a partner CA firm.`,
    path: "/",
  }),
  title: { absolute: "Tax Consultant in Jodhpur for ITR & GST | Ranga & Company" },
  // Plain-Markdown copy of this page for AI agents (src/app/index.md).
  alternates: { canonical: "/", types: { "text/markdown": "/index.md" } },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={websiteLd()} />
      <Hero />
      <ProofStrip />
      <TrustedBy />
      <ServicesGrid />
      <HowItWorks />
      <YearCalendar />
      <WhyUs />
      <Testimonials />
      <LatestPosts />
      <section id="faq" aria-labelledby="faq-heading" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24 min-[760px]:py-32">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions about tax consultants and CA firms in Jodhpur" center />
        <div className="mt-12">
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <CtaBand />
      </div>
    </main>
  );
}
