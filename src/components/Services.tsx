"use client";

import Image from "next/image";

const services = [
  {
    title: "ITR Filing",
    description: "Online income-tax return with zero paperwork.",
    image: "/service-1-409fe6.png",
  },
  {
    title: "GST Registration",
    description: "New business? Get GSTIN in 3–5 working days with full support.",
    image: "/service-2-409fe6.png",
  },
  {
    title: "GST 3B/3A Returns",
    description: "Monthly & quarterly GST filing, late-fee mitigation, compliance calendar reminders.",
    image: "/service-3-409fe6.png",
  },
  {
    title: "TDS/TCS",
    description: "Online income-tax return with zero paperwork.",
    image: "/service-4-409fe6.png",
  },
  {
    title: "Audit & Assurance",
    description: "New business? Get GSTIN in 3–5 working days with full support.",
    image: "/service-5-409fe6.png",
  },
  {
    title: "Accounting & Payroll",
    description: "Monthly & quarterly GST filing, late-fee mitigation, compliance calendar reminders.",
    image: "/service-6-409fe6.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-6 px-4 min-[700px]:py-[121px] min-[700px]:px-[163px]" aria-labelledby="services-heading">
      <div className="flex flex-col items-center gap-12 min-[700px]:gap-[48px] w-full min-[700px]:w-[953px] min-[700px]:mx-auto">
        {/* Section Title */}
        <header className="text-center">
          <h2 id="services-heading" className="text-3xl min-[700px]:text-[48px] font-bold text-black tracking-[-0.96px] leading-[56px] font-satoshi">
            Financial services
          </h2>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 min-[700px]:grid-cols-3 gap-8 min-[700px]:gap-[64px] w-full justify-items-center" role="list" aria-label="Financial services offered">
          {services.map((service, index) => (
            <article
              key={index}
              className="flex flex-col items-center gap-8 min-[700px]:gap-[38px] p-6 min-[700px]:p-6 bg-white rounded-[24px] border-r-8 border-b-8 border-[#565656] h-auto min-[700px]:h-[296px] w-full max-w-[280px]"
              role="listitem"
            >
              {/* Service Image */}
              <div className="w-[83px] h-[87px]">
                <Image
                  src={service.image}
                  alt={`${service.title} service icon`}
                  width={83}
                  height={87}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col items-center gap-3 min-[700px]:gap-[12px] text-center">
                <h3 className="text-xl min-[700px]:text-[24px] font-bold text-black tracking-[-0.48px] leading-[27px] min-[700px]:leading-[32px] font-satoshi">
                  {service.title}
                </h3>
                <p className="text-sm min-[700px]:text-[16px] font-medium text-[#737373] tracking-[-0.32px] leading-[20px] min-[700px]:leading-[24px] font-satoshi">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
