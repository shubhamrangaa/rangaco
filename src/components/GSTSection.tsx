"use client";

import Image from "next/image";
import Button from "./Button";

export default function GSTSection() {
  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-6 min-[700px]:px-0">
      <div className="flex flex-col min-[700px]:flex-row items-center gap-8 min-[700px]:gap-[100px] w-full max-w-[1200px] mx-auto">
        {/* Image */}
        <div className="w-full min-[700px]:w-1/2 order-1">
          <Image
            src="/gst-compliance-image-50823b.png"
            alt="GST Compliance"
            width={439}
            height={361}
            className="w-full h-[256px] min-[700px]:h-[361px] object-cover rounded-[20px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 min-[700px]:gap-[56px] w-full min-[700px]:w-1/2 order-2">
          <div className="flex flex-col gap-4 min-[700px]:gap-[16px]">
            <h2 className="text-2xl min-[700px]:text-[48px] font-bold text-black tracking-[-0.96px] leading-[32px] min-[700px]:leading-[65px] font-satoshi">
              GST Compliance & Refunds
            </h2>
            <p className="text-sm min-[700px]:text-[20px] font-medium text-black opacity-50 tracking-[-0.40px] leading-[20px] min-[700px]:leading-[32px] font-satoshi">
              Monthly GST 3B/3A, e-way bills, input-credit reconciliation and
              high-value refund claims—done right the first time. Get automated
              reminders so you never miss a due date again.
            </p>
          </div>

          <Button variant="tertiary" onClick={startCall}>
            Streamline My GST
          </Button>
        </div>
      </div>
    </section>
  );
}
