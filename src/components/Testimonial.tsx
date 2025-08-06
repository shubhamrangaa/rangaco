"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="bg-white py-6 px-4 min-[700px]:py-20 min-[700px]:px-0">
      <div className="relative bg-[#473BF0] rounded-2xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.064]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500"></div>
        </div>

        {/* Abstract Pattern SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.064]">
          <Image
            src="/abstractpattern.svg"
            alt="Abstract Pattern"
            width={1073}
            height={635}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 min-[700px]:gap-[68px] py-12 min-[700px]:py-[76px] px-4 min-[700px]:px-0">
          {/* Testimonial Text */}
          <div className="flex flex-col items-center gap-4 min-[700px]:gap-[15px] w-full max-w-[370px]">
            <h3 className="text-[13px] font-bold text-[#68D585] tracking-[1.625px] uppercase text-center leading-[1.35] font-satoshi">
              what are customers say
            </h3>
            <p className="text-2xl min-[700px]:text-[32px] font-bold text-white text-center leading-[1.375] tracking-[-1.2px] font-satoshi">
              &ldquo;Ranga & Company ne hamara GST hamesha time par file kiya;
              ₹0 penalty.&rdquo;
            </p>
          </div>

          {/* Avatar and Name */}
          <div className="flex flex-col items-center gap-4 min-[700px]:gap-[17px] w-full max-w-[175px]">
            <div className="w-[62px] h-[76px] rounded-full overflow-hidden">
              <Image
                src="/testimonial-avatar-c32e2a.png"
                alt="Client Avatar"
                width={62}
                height={76}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="text-[17px] font-bold text-white text-center leading-[1.706] tracking-[-0.2px] font-satoshi">
                Our Client
              </h4>
              <p className="text-[15px] font-normal text-white text-center leading-[1.733] tracking-[-0.1px] font-satoshi opacity-65">
                Business owner in Jodhpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
