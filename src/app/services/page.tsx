import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Income-Tax Return (ITR) Filing in Jodhpur",
    description:
      "Professional ITR filing services with expert guidance and fast processing times.",
    href: "/services/itr-filing-jodhpur",
    price: "Starting from ₹1,200",
  },
  {
    title: "GST Registration Services in Jodhpur",
    description:
      "Complete GST registration support with end-to-end assistance and fast turnaround times.",
    href: "/services/gst-registration-jodhpur",
    price: "Starting from ₹2,999",
  },
  {
    title: "GST Return Filing (GSTR-3B & GSTR-1) in Jodhpur",
    description:
      "Professional GST return filing services to keep your business compliant and avoid penalties.",
    href: "/services/gst-return-filing-jodhpur",
    price: "Starting from ₹799 per return",
  },
  {
    title: "TDS & TCS Compliance Services in Jodhpur",
    description:
      "Comprehensive TDS and TCS compliance services to ensure timely filing and avoid penalties.",
    href: "/services/tds-tcs-compliance-jodhpur",
    price: "Starting from ₹2,500",
  },
  {
    title: "Statutory & Internal Audit Firm in Jodhpur",
    description:
      "Professional audit services to ensure compliance and financial transparency.",
    href: "/services/statutory-audit-jodhpur",
    price: "Starting from ₹50,000",
  },
  {
    title: "Outsourced Accounting & Payroll Services in Jodhpur",
    description:
      "Comprehensive accounting and payroll services to streamline your business operations.",
    href: "/services/accounting-payroll-jodhpur",
    price: "Starting from ₹5,000/month",
  },
  {
    title: "Virtual CFO Services for SMEs in Jodhpur",
    description:
      "Strategic financial guidance and CFO-level support for small and medium enterprises.",
    href: "/services/virtual-cfo-jodhpur",
    price: "Starting from ₹25,000/month",
  },
  {
    title: "Income-Tax Advisory & Planning in Jodhpur",
    description:
      "Expert tax planning and advisory services to optimize your tax liability.",
    href: "/services/income-tax-advisory-jodhpur",
    price: "Custom pricing",
  },
  {
    title: "GST Refund Assistance in Jodhpur",
    description:
      "Professional assistance with GST refund applications and processing.",
    href: "/services/gst-refund-assistance-jodhpur",
    price: "5% of refund amount",
  },
  {
    title: "Income-Tax Notice Reply & Scrutiny Support in Jodhpur",
    description:
      "Expert assistance with income tax notices and scrutiny proceedings.",
    href: "/services/income-tax-notice-reply-jodhpur",
    price: "Starting from ₹7,500",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax and financial services to keep your business
              compliant and growing
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">
                    {service.price}
                  </span>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Professional Tax Help?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get expert assistance with your tax filing, GST compliance, and
              financial planning. Our team of experienced professionals is here
              to help you stay compliant and save money.
            </p>
            <Button variant="secondary" icon="phone">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
