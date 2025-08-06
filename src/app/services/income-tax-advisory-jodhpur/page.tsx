import BlogTemplate from "@/components/BlogTemplate";

const incomeTaxAdvisoryPost = {
  title: "Income-Tax Advisory & Planning in Jodhpur",
  content: `
    <h2>Legal Ways to Reduce Tax</h2>
    <p>We guide you on Section 80C, 80D, HRA, and depreciation planning so you keep more profit.</p>
    
    <h2>Advance-Tax Calculator & Alerts</h2>
    <p>Quarterly advance-tax schedules sent by email and WhatsApp; no interest for under-payment.</p>
    
    <h2>Notice Defence Included</h2>
    <p>If you receive a notice after using our plan, we draft the reply for <strong>zero extra fee</strong>.</p>
  `,
  relatedPosts: [
    {
      title: "ITR Filing Services",
      description:
        "Professional ITR filing services with expert guidance and fast processing times.",
      href: "/services/itr-filing-jodhpur",
    },
    {
      title: "Income-Tax Notice Reply Support",
      description:
        "Expert assistance with income tax notices and scrutiny proceedings.",
      href: "/services/income-tax-notice-reply-jodhpur",
    },
    {
      title: "Virtual CFO for SMEs",
      description:
        "Strategic financial guidance and CFO-level support for small and medium enterprises.",
      href: "/services/virtual-cfo-jodhpur",
    },
  ],
};

export default function IncomeTaxAdvisoryPage() {
  return <BlogTemplate post={incomeTaxAdvisoryPost} />;
}
