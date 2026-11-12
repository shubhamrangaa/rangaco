import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import YearCalendar from "@/components/home/YearCalendar";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import LatestPosts from "@/components/home/LatestPosts";
import SectionHeading from "@/components/home/SectionHeading";
import FaqList from "@/components/content/FaqList";
import CtaBand from "@/components/content/CtaBand";
import { HOME_FAQS } from "@/content/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Tax Consultant in Jodhpur for ITR & GST",
    description:
      "Tax consultant in Jodhpur since 1990: ITR filing from ₹1,200, GST registration and returns, TDS, accounting and notice replies, with a partner CA firm for audits.",
    path: "/",
  }),
  title: { absolute: "Tax Consultant in Jodhpur for ITR & GST | Ranga & Company" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofStrip />
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
