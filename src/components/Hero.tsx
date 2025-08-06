"use client";

import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  const openGoogleMaps = () => {
    const address = "A7, Abhay Chambers, Jalori Gate, Jodhpur, Rajasthan";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  return (
    <section className="relative w-full h-[85vh] min-[700px]:h-[695px] bg-white" role="banner" aria-label="Hero section">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center gap-8 min-[700px]:gap-[56px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 min-[700px]:w-[628px] min-[700px]:px-0">
        <header className="flex flex-col items-center gap-4 min-[700px]:gap-5 w-full">
          <h1 className="w-full font-black text-[#1f1f1f] text-3xl min-[700px]:text-[48px] text-center tracking-[-0.96px] leading-[40px] min-[700px]:leading-[56px] font-satoshi">
            Tax Consultant in Jodhpur for Income-Tax & GST Filing
          </h1>

          <p className="w-full min-[700px]:w-[487px] opacity-50 font-bold text-black text-sm min-[700px]:text-[20px] text-center tracking-[-0.40px] leading-[20px] min-[700px]:leading-[32px] font-satoshi">
            35+ years helping Rajasthan businesses stay compliant—fast ITR, GST
            3B, TDS & audit under one roof.
          </p>
        </header>

        <div className="flex flex-col min-[700px]:flex-row items-center justify-center gap-3 min-[700px]:gap-5 w-full" role="group" aria-label="Call to action buttons">
          <Button
            variant="secondary"
            icon="folder"
            className="w-full min-[700px]:w-auto"
            onClick={openGoogleMaps}
            aria-label="File my taxes now - opens Google Maps to our office location"
          >
            File My Taxes Now
          </Button>

          <Button
            variant="brand"
            icon="phone"
            className="w-full min-[700px]:w-auto"
            onClick={startCall}
            aria-label="Free 15 minute consultation call"
          >
            Free 15min call
          </Button>
        </div>
      </div>

      {/* Background ellipse */}
      <div className="absolute w-[904px] h-[367px] top-[-239px] left-[214px] bg-[#128948] rounded-[452px/183.5px] blur-[400px]" />
    </section>
  );
}
