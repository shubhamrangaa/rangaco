"use client";

import Image from "next/image";
import Button from "./Button";

export default function AuditSection() {
  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-20 min-[700px]:px-80">
      <div className="flex flex-col min-[700px]:flex-row items-center gap-8 min-[700px]:gap-[120px] w-full min-[700px]:w-[1040px] min-[700px]:mx-auto">
        {/* Content */}
        <div className="flex flex-col gap-6 min-[700px]:gap-8 w-full min-[700px]:w-[520px] order-2 min-[700px]:order-1">
          <div className="flex flex-col gap-4 min-[700px]:gap-5">
            <h2 className="text-3xl min-[700px]:text-[48px] font-bold text-black tracking-[-0.96px] leading-[40px] min-[700px]:leading-[56px] font-satoshi">
              Statutory Audit & Assurance
            </h2>
            <p className="text-sm min-[700px]:text-[20px] font-medium text-[#737373] tracking-[-0.40px] leading-[20px] min-[700px]:leading-[32px] font-satoshi">
              Comprehensive audit services ensuring compliance with Companies
              Act, Income Tax Act, and other regulatory requirements. We provide
              detailed audit reports and recommendations for business
              improvement.
            </p>
          </div>

          <div className="flex flex-col min-[700px]:flex-row items-center gap-3 min-[700px]:gap-5 w-full">
            <Button
              variant="tertiary"
              className="w-full min-[700px]:w-auto"
              onClick={startCall}
            >
              Get Audit Quote
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full min-[700px]:w-[400px] order-1 min-[700px]:order-2">
          <Image
            src="/audit-image-20847f.png"
            alt="Statutory Audit & Assurance Services"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-2xl"
            priority
            sizes="(max-width: 700px) 100vw, 400px"
          />
        </div>
      </div>
    </section>
  );
}
