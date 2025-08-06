"use client";

import Image from "next/image";
import Button from "./Button";

export default function IncomeTaxSection() {
  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-6 min-[700px]:px-0">
      <div className="flex flex-col min-[700px]:flex-row items-center gap-8 min-[700px]:gap-[100px] w-full max-w-[1200px] mx-auto">
        {/* Content */}
        <div className="flex flex-col gap-8 min-[700px]:gap-[56px] w-full min-[700px]:w-1/2 order-2 min-[700px]:order-1">
          <div className="flex flex-col gap-4 min-[700px]:gap-[16px]">
            <h2 className="text-2xl min-[700px]:text-[48px] font-bold text-black tracking-[-0.96px] leading-[32px] min-[700px]:leading-[65px] font-satoshi">
              Income-Tax Advisory & Scrutiny Defence
            </h2>
            <p className="text-sm min-[700px]:text-[20px] font-medium text-black opacity-50 tracking-[-0.40px] leading-[20px] min-[700px]:leading-[32px] font-satoshi">
              Stay bullet-proof against notices and surprise assessments. From
              optimal advance-tax planning to hands-on scrutiny representation,
              our CA partners keep you compliant and tax-efficient.
            </p>
          </div>

          <Button variant="tertiary" onClick={startCall}>
            Talk to an Income-tax Expert
          </Button>
        </div>

        {/* Image */}
        <div className="w-full min-[700px]:w-1/2 order-1 min-[700px]:order-2">
          <Image
            src="/income-tax-image-382d39.png"
            alt="Income Tax Advisory"
            width={470}
            height={416}
            className="w-full h-[256px] min-[700px]:h-[416px] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}
