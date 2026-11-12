import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/content/PageHero";
import RelatedLinks from "@/components/content/RelatedLinks";
import CtaBand from "@/components/content/CtaBand";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Jodhpur Tax Consultants Since 1990",
  description:
    "Family-run tax consultancy in Jodhpur, founded in 1990 by Jugal Kishore Ranga: ITR, GST, TDS and accounting, with a partner CA firm for audits.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-28 min-[760px]:pt-32">
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        title="About Ranga & Company"
        lede={`A family-run tax consultancy in Jodhpur since ${SITE.foundingYear}.`}
      />
      <div className="prose-rc mt-12 max-w-[740px]">
      <h2>Over 35 years of tax practice in Jodhpur</h2>
      <p>Founded in 1990 by <strong>Jugal Kishore Ranga</strong>, Ranga & Company has been serving businesses and individuals across Rajasthan with comprehensive tax and financial services. Our journey began with a simple mission: to make tax compliance simple, efficient, and stress-free for our clients.</p>
      <p>In loving memory of <strong>Kishore Ranga</strong>, our esteemed ex-CEO and co-founder, whose vision, dedication, and unwavering commitment to excellence continue to inspire our team every day. His legacy of integrity, professionalism, and client-first approach remains the cornerstone of our firm’s values and success.</p>
      <h2>Our Core Values</h2>
      <ul>
      <li><strong>Integrity:</strong> We maintain the highest ethical standards in all our dealings</li>
      <li><strong>Excellence:</strong> Every client receives our best effort and attention to detail</li>
      <li><strong>Innovation:</strong> We continuously adapt to changing tax laws and technology</li>
      <li><strong>Client-First:</strong> Your success is our priority</li>
      </ul>
      <h2>Why Choose Ranga & Company?</h2>
      <h3>Expert Team</h3>
      <p>Our team of tax professionals brings decades of combined experience, and we work with a partner CA firm for statutory audits, tax audits and certificates that must be signed by a practising chartered accountant. We stay updated with the latest tax regulations and technological advancements to provide you with the most accurate and efficient services.</p>
      <h3>Comprehensive Services</h3>
      <p>From basic ITR filing to complex audit requirements, we offer end-to-end solutions under one roof. Our services include:</p>
      <ul>
      <li><Link href="/services/itr-filing-jodhpur">Income Tax Return Filing & Planning</Link></li>
      <li><Link href="/services/gst-registration-jodhpur">GST Registration, Filing & Refund Assistance</Link></li>
      <li><Link href="/services/tds-tcs-compliance-jodhpur">TDS & TCS Compliance Services</Link></li>
      <li><Link href="/services/statutory-audit-jodhpur">Statutory & Internal Audit</Link></li>
      <li><Link href="/services/accounting-payroll-jodhpur">Accounting & Payroll Outsourcing</Link></li>
      <li><Link href="/services/virtual-cfo-jodhpur">Virtual CFO Services</Link></li>
      <li><Link href="/services/income-tax-notice-reply-jodhpur">Tax Advisory & Notice Reply</Link></li>
      </ul>
      <h3>Technology-Driven Approach</h3>
      <p>We leverage modern technology and software to ensure accuracy, speed, and transparency in all our processes. Our digital-first approach means faster processing times and better communication with clients.</p>
      <h2>Our Commitment to Jodhpur & Rajasthan</h2>
      <p>As a local firm deeply rooted in Jodhpur, we understand the unique challenges and opportunities that businesses in Rajasthan face. Our local expertise combined with national-level knowledge helps us serve businesses across the state.</p>
      <h2>Client Success Stories</h2>
      <p>Over the years, we’ve helped thousands of businesses and individuals achieve their financial goals. From small startups to established enterprises, our clients trust us with their most important financial decisions.</p>
      <h2>Get Started Today</h2>
      <p>Whether you’re a business owner looking for comprehensive financial services or an individual needing help with tax filing, our team is ready to assist you. Contact us for a free consultation and discover how we can help you achieve your financial objectives.</p>
      </div>
      <RelatedLinks services={["itr-filing-jodhpur", "gst-registration-jodhpur", "accounting-payroll-jodhpur"]} heading="Explore our services" maxPosts={2} />
      <CtaBand />
    </main>
  );
}
