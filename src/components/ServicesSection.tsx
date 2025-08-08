"use client";

import Image from "next/image";
import Button from "./Button";

export default function ServicesSection() {
  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  const services = [
    {
      id: "income-tax",
      title: "Income Tax Filing & Planning",
      description:
        "Expert ITR filing services with tax planning to maximize your savings. We handle all types of returns including business, salary, and capital gains with guaranteed accuracy and timely filing.",
      image: "/income-tax-image-382d39.png",
      imageAlt: "Income Tax Filing & Planning Services",
      buttonText: "File ITR Now",
    },
    {
      id: "gst",
      title: "GST Compliance & Refunds",
      description:
        "Monthly GST 3B/3A, e-way bills, input-credit reconciliation and high-value refund claims—done right the first time. Get automated reminders so you never miss a due date again.",
      image: "/gst-compliance-image-50823b.png",
      imageAlt: "GST Compliance Services",
      buttonText: "Streamline My GST",
    },
    {
      id: "audit",
      title: "Statutory Audit & Assurance",
      description:
        "Comprehensive audit services ensuring compliance with Companies Act, Income Tax Act, and other regulatory requirements. We provide detailed audit reports and recommendations for business improvement.",
      image: "/audit-image-20847f.png",
      imageAlt: "Statutory Audit & Assurance Services",
      buttonText: "Get Audit Quote",
    },
    {
      id: "compliance",
      title: "Compliance Alerts & Resources",
      description:
        "Whether you need a statutory audit for lenders or a part-time CFO for board meetings, we deploy senior auditors and finance strategists to deliver clean reports and strategic insights.",
      image: "/compliance-image-776e78.png",
      imageAlt: "Compliance Alerts & Resources",
      buttonText: "Talk to Expert",
    },
  ];

  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-20 min-[700px]:px-100">
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col min-[700px]:flex-row items-center gap-8 min-[700px]:gap-[120px] w-full ${
              index !== services.length - 1 ? "mb-20" : ""
            }`}
          >
            {/* Image - Always first on mobile, alternates on desktop */}
            <div className="w-full min-[700px]:w-[500px] order-1">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={500}
                height={400}
                className="w-full h-[300px] min-[700px]:h-[400px] object-cover rounded-2xl"
                priority={index === 0}
                sizes="(max-width: 700px) 100vw, 500px"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 min-[700px]:gap-8 w-full min-[700px]:w-[500px] order-2">
              <div className="flex flex-col gap-4 min-[700px]:gap-5">
                <h2 className="text-3xl min-[700px]:text-[48px] font-bold text-black tracking-[-0.96px] leading-[40px] min-[700px]:leading-[56px] font-satoshi">
                  {service.title}
                </h2>
                <p className="text-sm min-[700px]:text-[20px] font-medium text-[#737373] tracking-[-0.40px] leading-[20px] min-[700px]:leading-[32px] font-satoshi">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col min-[700px]:flex-row items-center gap-3 min-[700px]:gap-5 w-full">
                <Button
                  variant="tertiary"
                  className="w-full min-[700px]:w-auto"
                  onClick={startCall}
                >
                  {service.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
