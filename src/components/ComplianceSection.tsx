"use client";

import Image from "next/image";
import Button from "./Button";

export default function ComplianceSection() {
  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-6 min-[700px]:px-0">
      <div className="flex flex-col min-[700px]:flex-row items-center gap-8 min-[700px]:gap-[100px] w-full max-w-[1200px] mx-auto">
        {/* Image */}
        <div className="w-full min-[700px]:w-1/2 order-1">
          <Image
            src="/compliance-image-776e78.png"
            alt="Compliance Alerts"
            width={426}
            height={408}
            className="w-full h-[256px] min-[700px]:h-[408px] object-cover rounded-[20px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 min-[700px]:gap-[56px] w-full min-[700px]:w-1/2 order-2">
          <div className="flex flex-col gap-4 min-[700px]:gap-[16px]">
            <h2 className="text-2xl min-[700px]:text-[48px] font-bold text-black tracking-[-0.96px] leading-[32px] min-[700px]:leading-[65px] font-satoshi">
              Compliance Alerts & Resources
            </h2>
            <p className="text-sm min-[700px]:text-[20px] font-medium text-black opacity-50 tracking-[-0.40px] leading-[20px] min-[700px]:leading-[32px] font-satoshi">
              Whether you need a statutory audit for lenders or a part-time CFO
              for board meetings, we deploy senior auditors and finance
              strategists to deliver clean reports and strategic insights.
            </p>
          </div>

          <Button variant="tertiary" onClick={startCall}>
            Talk to expert
          </Button>
        </div>
      </div>
    </section>
  );
}
