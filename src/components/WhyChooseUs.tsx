"use client";

import { Star, Clock, Layers } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Star,
      title: "35 yrs legacy",
      description: "Family-run CA firm serving 2,500 + clients",
    },
    {
      icon: Clock,
      title: "24hr turnaround time",
      description: "Most filings completed within a single business day.",
    },
    {
      icon: Layers,
      title: "One-Stop Compliance",
      description: "ITR, GST, audit, ROC, payroll—handled under one roof.",
    },
  ];

  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-20 min-[700px]:px-0">
      <div className="flex flex-col items-center gap-8 min-[700px]:gap-[64px] w-full min-[700px]:w-[890px] min-[700px]:mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl min-[700px]:text-[32px] font-bold text-black tracking-[-0.64px] leading-[40px] min-[700px]:leading-[43px] font-satoshi">
            Why Ranga & Company?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col min-[700px]:flex-row items-center min-[700px]:items-start gap-8 min-[700px]:gap-[120px] w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-[700px]:items-start gap-4 min-[700px]:gap-4"
            >
              {/* Icon */}
              <div className="flex justify-center min-[700px]:justify-start">
                <div className="w-[35px] h-[32px] text-[#128948]">
                  <feature.icon className="w-full h-full" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl min-[700px]:text-[24px] font-bold text-black tracking-[-0.48px] leading-[28px] min-[700px]:leading-[32px] font-satoshi text-center min-[700px]:text-left">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm min-[700px]:text-[16px] font-medium text-[#737373] tracking-[-0.32px] leading-5 min-[700px]:leading-6 font-satoshi w-full min-[700px]:w-[178px] text-center min-[700px]:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
