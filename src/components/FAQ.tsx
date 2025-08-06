"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I file my GST return online in Jodhpur?",
      answer:
        "Log in at GST .gov.in with your GSTIN → choose GSTR-3B (monthly/quarterly) → add sales & purchase details → offset tax with input credit → pay challan → submit and download the receipt. If you send us your data, Ranga & Company completes all steps for you in 24 hours.",
    },
    {
      question: "What is the GSTR-3B due date each month?",
      answer:
        "For regular (monthly) filers the due date is the 20th of the next month. QRMP taxpayers file their 3B on the 22nd or 24th, depending on state code.",
    },
    {
      question:
        "How much late fee and interest apply if I miss the GST return deadline?",
      answer:
        "Late fee is ₹50 per day (₹25 CGST + ₹25 SGST). For a NIL return it drops to ₹20 per day. Interest on unpaid tax runs at 18% per year from the original due date.",
    },
    {
      question:
        "Is GST registration compulsory below ₹40 lakh turnover in Rajasthan?",
      answer:
        "Goods suppliers can wait until turnover crosses ₹40 lakh; service providers register after ₹20 lakh. Voluntary registration is allowed if you want input-tax credit or sell on e-commerce.",
    },
    {
      question: "Which documents are needed for GST registration in Jodhpur?",
      answer:
        "PAN, Aadhaar, photograph, business proof (incorporation / partnership deed), address proof (utility bill or rent agreement) and a bank statement or cancelled cheque.",
    },
    {
      question:
        "What is the last date to file the Income-Tax Return (ITR) for FY 2024-25?",
      answer:
        "The standard deadline for most taxpayers is 31 July 2025. Businesses needing audit get time till 31 October 2025.",
    },
    {
      question:
        "Can I file my ITR myself or should I hire a tax consultant in Jodhpur?",
      answer:
        "You can self-file on the Income-Tax portal, but a CA makes sure you claim every deduction, avoid errors and minimise the chance of a notice—especially important if you have multiple income sources.",
    },
    {
      question: "When is a statutory audit mandatory for a private company?",
      answer:
        "Under the Companies Act, every company—no matter the size—must get its accounts audited each financial year. For other entities (LLPs, partnerships, sole proprietors) audit kicks in once turnover crosses ₹1 crore for business or ₹50 lakh for profession.",
    },
    {
      question: "What are the TDS payment and return due dates for FY 2025-26?",
      answer:
        "Pay TDS by the 7th of the next month (30 April for deductions in March). File quarterly returns: 31 July (Q1), 31 Oct (Q2), 31 Jan (Q3) and 31 May (Q4).",
    },
    {
      question: "How do I reply to an Income-Tax notice under Section 143(2)?",
      answer:
        "Log in to the e-Filing portal, open 'e-Proceedings,' choose the notice, attach a point-by-point reply with supporting evidence, then submit before the deadline. Ranga & Company can draft and upload the reply and attend hearings on your behalf.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-white py-6 min-[700px]:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="flex flex-col items-center gap-8 min-[700px]:gap-[32px] w-full px-4 min-[700px]:w-[628px] min-[700px]:mx-auto min-[700px]:px-0">
        {/* Section Title */}
        <header className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl min-[700px]:text-[32px] font-bold text-black tracking-[-0.64px] leading-[40px] min-[700px]:leading-[43px] font-satoshi"
          >
            Frequently asked questions
          </h2>
        </header>

        {/* FAQ Items */}
        <div
          className="flex flex-col gap-4 w-full"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-[#F5F5F5] rounded-2xl p-4 min-[700px]:p-4 cursor-pointer transition-all duration-200"
              onClick={() => toggleFAQ(index)}
              role="listitem"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg min-[700px]:text-[20px] font-medium text-black leading-[1.35] tracking-[-0.4px] font-satoshi pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#0F172A] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </div>
              {openIndex === index && (
                <div className="mt-4 text-black leading-[1.5] tracking-[-0.4px] font-satoshi">
                  <p className="text-sm min-[700px]:text-base">{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
