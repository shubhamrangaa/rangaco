"use client";

import {
  Phone,
  Send,
  MessageCircle,
  ArrowRight,
  ArrowBigRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const startCall = () => {
    window.location.href = "tel:+919829021030";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919829021030", "_blank");
  };

  return (
    <footer className="bg-white relative px-4 min-[700px]:px-10 pt-4">
      {/* Gradient Background Image */}
      <div className="absolute inset-0 bg-[url('/gradientBg.png')] bg-cover bg-center "></div>

      {/* Top Section with White Background */}
      <div className="relative z-10 bg-white rounded-2xl my-8 min-[700px]:my-8">
        <div className="p-8 min-[700px]:p-10">
          {/* Top Row */}
          <div className="flex flex-col min-[700px]:flex-row justify-between items-start gap-6 min-[700px]:gap-4">
            {/* Logo Section */}
            <div className="flex flex-col gap-[10px] w-full min-[700px]:w-[352px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-col items-center min-[700px]:items-start gap-[14px]">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                    <Image
                      src="/LogoRangaCo.svg"
                      alt="Logo Ranga & Co"
                      width={45}
                      height={47}
                      className="w-[45px] h-[47px]"
                    />
                  </div>
                  <span className="text-2xl font-normal text-[#1f1f1f] tracking-[-0.96px] leading-6 font-dm-serif text-center min-[700px]:text-left">
                    Ranga & Company
                  </span>
                </div>
              </div>
            </div>

            {/* Services, Company, Resources */}
            <div className="flex flex-col min-[700px]:flex-row gap-6 min-[700px]:gap-4 w-full min-[700px]:w-[619px]">
              {/* Services */}
              <div className="flex flex-col gap-3 min-[700px]:gap-6 w-full">
                <div className="text-[10px] font-medium text-ink opacity-60 tracking-[0.4px] uppercase">
                  services
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="/itr-filing-2025-jodhpur"
                    className="text-[16px] font-bold text-[#473BF0] hover:text-brand transition-colors"
                  >
                    ITR Filing 2025 <ArrowBigRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/services/itr-filing-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    ITR Filing
                  </a>
                  <a
                    href="/small-business-itr-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Small Business ITR Filing
                  </a>
                  <a
                    href="/services/gst-registration-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    GST Registration
                  </a>
                  <a
                    href="/services/gst-return-filing-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    GST Return (GSTR-3B / 3A)
                  </a>
                  <a
                    href="/services/tds-tcs-compliance-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    TDS / TCS Compliance
                  </a>
                  <a
                    href="/services/statutory-audit-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Audit & Assurance
                  </a>
                  <a
                    href="/services/accounting-payroll-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Accounting & Payroll
                  </a>
                  <a
                    href="/services/virtual-cfo-jodhpur"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Virtual CFO
                  </a>
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-3 min-[700px]:gap-6 w-full">
                <div className="text-[10px] font-medium text-ink opacity-60 tracking-[0.4px] uppercase">
                  company
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="/about"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    About us
                  </a>
                  <a
                    href="/about#testimonials"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Testimonials
                  </a>
                  <Link
                    href="/#faq"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link
                    href="/blog"
                    className="text-[16px] font-normal text-ink hover:text-brand transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-start min-[700px]:items-end gap-4">
              <button
                className="bg-ink text-white px-4 py-2 rounded-lg flex items-center gap-[10px] hover:bg-[#2a2a2a] transition-colors"
                onClick={startCall}
              >
                <Phone className="w-4 h-4" />
                <span className="text-[14px] font-semibold">
                  Free 15min call
                </span>
              </button>
              <div className="flex flex-col items-start min-[700px]:items-end">
                <div className="text-[12px] font-semibold text-ink">
                  +91 9829021030
                </div>
                <div className="text-[12px] font-semibold text-ink">
                  kr@rangaco.com
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col min-[700px]:flex-row justify-between items-start min-[700px]:items-center mt-6 min-[700px]:mt-24 gap-4 min-[700px]:gap-0">
            {/* Social Icons */}
            <div className="flex gap-2">
              <button
                className="w-10 h-10 bg-ink rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
                onClick={openWhatsApp}
              >
                <Send className="w-[18px] h-[14px] text-white" />
              </button>
              <button
                className="w-10 h-10 bg-ink rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Address */}
            <div className="text-[12px] font-semibold text-ink w-full min-[700px]:w-[197px]">
              A7, Abhay Chambers, Jalori Gate, Jodhpur, Rajasthan
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section - Directly on Gradient Background */}
      <div className="relative z-10 flex flex-col min-[700px]:flex-row justify-between items-start min-[700px]:items-center gap-4 py-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl min-[700px]:text-[40px] font-extrabold text-white tracking-[-0.8px] leading-[32px] min-[700px]:leading-[40px]">
            One stop shop for all your tax and GST needs.
          </h3>
        </div>

        <div className="flex flex-col gap-2 w-full min-[700px]:w-auto">
          <p className="text-[14px] font-medium text-white">
            Just send us your contact email and we will contact you.
          </p>
          <div className="flex border border-white/60 rounded-xl p-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-white placeholder-white/50 text-[10px] font-medium tracking-[0.4px] uppercase px-4 py-2 focus:outline-none"
              suppressHydrationWarning
            />
            <ArrowRight className="w-[15px] h-[8px] text-white" />
          </div>
        </div>
      </div>

      {/* Copyright - Directly on Gradient Background */}
      <div className="relative z-10 flex flex-col min-[700px]:flex-row justify-between items-start min-[700px]:items-center py-6 gap-4 min-[700px]:gap-0">
        <div className="text-[10px] font-normal text-white">
          © {new Date().getFullYear()} — Copyright Ranga & Company, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
