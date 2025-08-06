"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  CheckCircle,
  FileText,
  Calculator,
  Shield,
  Users,
  Award,
} from "lucide-react";

export default function ITRFilingPage() {
  const [countdown, setCountdown] = useState("Loading...");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const deadline = new Date("2025-09-15T23:59:59+05:30").getTime();

    const tick = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        setCountdown("Deadline passed");
        return;
      }
      const d = Math.floor(diff / 864e5);
      const h = Math.floor((diff % 864e5) / 36e5);
      const m = Math.floor((diff % 36e5) / 6e4);
      const s = Math.floor((diff % 6e4) / 1e3);
      setCountdown(`${d}d ${h}h ${m}m ${s}s left`);
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 min-h-[80vh] flex items-center justify-center px-4 min-[700px]:px-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl min-[700px]:text-5xl font-bold text-gray-900 mb-6 font-satoshi">
            ITR Filing in Jodhpur (AY 2025-26)
          </h1>
          <p className="text-lg min-[700px]:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Deadline extended to{" "}
            <strong className="text-red-600">15 September 2025</strong>. File
            your return on time with Ranga & Company&apos;s trusted Chartered
            Accountants.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="text-2xl min-[700px]:text-3xl font-bold text-red-600 mb-2">
              {isClient ? countdown : "Loading..."}
            </div>
            <p className="text-sm text-gray-600">Days left to file ITR</p>
          </div>

          <div className="flex flex-col min-[700px]:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" onClick={scrollToContact}>
              Book My Slot Now
            </Button>
            <Button variant="brand" onClick={startCall} icon="phone">
              Call Now
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Free document check – No hidden fees.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className="py-12 px-4 min-[700px]:py-20 min-[700px]:px-100"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <h2 className="text-2xl min-[700px]:text-4xl font-bold text-gray-900 mb-8 text-center font-satoshi">
            Why Choose Ranga & Company?
          </h2>

          <div className="flex flex-col min-[700px]:flex-row gap-4 min-[700px]:gap-8   justify-start items-start min-[700px]:justify-center min-[700px]:items-center mx-auto">
            <div className="space-y-4 w-full">
              <div className="flex items-start gap-3 w-full">
                <Award className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    35+ years of tax-filing expertise
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Trusted name in Jodhpur for all tax-related services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 w-full">
                <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    10,000+ returns handled
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Across individuals, HUFs & SMEs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 w-full">
                <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    AI-driven error checks
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ensure 0% defective returns
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 w-full">
              <div className="flex items-start gap-3 w-full">
                <FileText className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    End-to-end support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Computation, filing, e-verification & notices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 w-full">
                <Calculator className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Transparent pricing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Starting at <strong>₹499</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 w-full">
                <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Wide service coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Pali, Bikaner, Barmer, Nagaur & Osian
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/gst-registration-jodhpur"
              className="text-green-600 hover:text-green-700 underline text-sm"
            >
              Need GST registration too? We can help.
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-gray-50 py-12 px-4 min-[700px]:py-20 min-[700px]:px-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl min-[700px]:text-4xl font-bold text-gray-900 mb-8 text-center font-satoshi">
            How Our 100% Online ITR Process Works
          </h2>

          <div className="grid min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Upload Documents",
                description: "via our secure portal or WhatsApp",
              },
              {
                step: "02",
                title: "Expert Review",
                description: "by a licensed CA (CAFIRM/123456)",
              },
              {
                step: "03",
                title: "Tax Optimisation",
                description: "we apply all eligible deductions & rebates",
              },
              {
                step: "04",
                title: "Client Approval",
                description: "draft summary shared for sign-off",
              },
              {
                step: "05",
                title: "E-Filing & E-Verification",
                description: "within 24 hours",
              },
              {
                step: "06",
                title: "Post-Filing Support",
                description: "help with refunds & AO notices up to 1 year",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section
        id="documents"
        className="py-12 px-4 min-[700px]:py-20 min-[700px]:px-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl min-[700px]:text-4xl font-bold text-gray-900 mb-8 text-center font-satoshi">
            Documents You&apos;ll Need (Salaried Individuals)
          </h2>

          <div className="grid min-[700px]:grid-cols-2 gap-6">
            <div className="space-y-3">
              {[
                "Form 16 (Parts A & B)",
                "AIS/TIS download (optional but recommended)",
                "Bank statements",
                "Rent receipts or HRA proofs",
              ].map((doc, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Investment proofs (80C, 80D, PPF, ELSS etc.)",
                "Capital-gain statements (if any)",
                "Aadhaar & PAN copy",
              ].map((doc, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Need a full checklist?{" "}
              <a
                href="/blog/itr-documents-2025"
                className="text-green-600 hover:text-green-700 underline"
              >
                See our detailed guide
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="bg-gray-50 py-12 px-4 min-[700px]:py-20 min-[700px]:px-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl min-[700px]:text-4xl font-bold text-gray-900 mb-8 text-center font-satoshi">
            Pricing
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        Return Type
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Fees (₹)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Salaried (ITR-1)", fee: "499" },
                      { type: "Capital gains (ITR-2)", fee: "999" },
                      { type: "Business / Freelancers (ITR-3)", fee: "1499" },
                      { type: "Presumptive income (ITR-4)", fee: "799" },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 text-gray-900">{row.type}</td>
                        <td className="px-6 py-4 font-semibold text-green-600">
                          ₹{row.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faqs"
        className="py-12 px-4 min-[700px]:py-20 min-[700px]:px-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl min-[700px]:text-4xl font-bold text-gray-900 mb-8 text-center font-satoshi">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Is the ITR deadline really 15 September 2025?",
                answer:
                  "Yes. CBDT Circular 06/2025 extended the due date for non-audit taxpayers from 31 July to 15 September 2025.",
              },
              {
                question: "What happens if I miss the deadline?",
                answer:
                  "You can still file a belated return till 31 December 2025, but late fees of up to ₹5,000 and interest under Sections 234A/B/C will apply.",
              },
              {
                question: "Can I file jointly for my spouse and me?",
                answer:
                  "Income-tax returns are filed individually, but we can prepare both returns together to optimise deductions and coordinate refunds.",
              },
              {
                question: "Do you compare old vs new tax regimes?",
                answer:
                  "Absolutely. Our software runs both calculations and recommends the regime that minimises your tax.",
              },
              {
                question: "How long will my refund take?",
                answer:
                  "Refunds are usually issued within 7-15 days of successful e-verification, but may take longer in peak season.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-12 px-4 min-[700px]:py-20 min-[700px]:px-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 min-[700px]:p-12 text-white text-center">
            <h2 className="text-2xl min-[700px]:text-4xl font-bold mb-4 font-satoshi">
              Book Your ITR Filing Now
            </h2>
            <p className="text-base min-[700px]:text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Beat the 15 Sep 2025 deadline—upload your documents today and get
              your return filed by Jodhpur&apos;s most-trusted Chartered
              Accountants within 24 hours. Transparent fees from ₹499, free
              document check, and full refund-tracking support.
            </p>
            <div className="flex justify-center">
              <Button variant="primary" onClick={scrollToContact}>
                File ITR Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is the ITR deadline really 15 September 2025?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. CBDT Circular 06/2025 extended the due date for non-audit taxpayers from 31 July to 15 September 2025.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I miss the deadline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can still file a belated return till 31 December 2025, but late fees of up to ₹5,000 and interest may apply.",
                },
              },
              {
                "@type": "Question",
                name: "Can I file jointly for my spouse and me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Income tax returns are filed individually, but we can prepare both returns together for convenience and optimal deductions.",
                },
              },
              {
                "@type": "Question",
                name: "Do you compare old vs new tax regimes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our system compares both regimes and recommends the option that minimises your tax liability.",
                },
              },
              {
                "@type": "Question",
                name: "How long will my refund take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Refunds are typically issued within 7-15 days of e-verification, subject to IT-department workload.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
