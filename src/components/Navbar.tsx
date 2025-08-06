"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "./Button";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md rounded-2xl mx-4 min-[700px]:mx-10 my-4 min-[700px]:my-4">
      <div className="flex items-center justify-between px-4 py-2 min-[700px]:px-4 min-[700px]:py-2">
        {/* Logo */}
        <div
          className="flex items-center gap-[14px] cursor-pointer"
          onClick={navigateToHome}
        >
          <Image
            src="/LogoRangaCo.svg"
            alt="Logo Ranga & Co"
            width={56}
            height={56}
            className="w-14 h-14"
          />
          <span className="text-2xl font-normal text-[#1f1f1f] tracking-[-0.96px] leading-6 font-dm-serif">
            Ranga & Company
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden min-[700px]:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-[16px] font-bold text-[#101010] tracking-[-0.32px] leading-8 font-satoshi hover:text-[#128948] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[16px] font-bold text-[#101010] tracking-[-0.32px] leading-8 font-satoshi hover:text-[#128948] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[16px] font-bold text-[#101010] tracking-[-0.32px] leading-8 font-satoshi hover:text-[#128948] transition-colors"
          >
            FAQ
          </button>
          <Button
            variant="primary"
            icon="phone"
            onClick={() => (window.location.href = "tel:+919829021030")}
          >
            Free 15min call
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="min-[700px]:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button className="p-2">
                <ChevronDown className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <DropdownMenuItem
                onClick={() => {
                  scrollToSection("services");
                  setIsOpen(false);
                }}
                className="cursor-pointer"
              >
                Services
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  scrollToSection("about");
                  setIsOpen(false);
                }}
                className="cursor-pointer"
              >
                About
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  scrollToSection("faq");
                  setIsOpen(false);
                }}
                className="cursor-pointer"
              >
                FAQ
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  window.location.href = "tel:+919829021030";
                  setIsOpen(false);
                }}
                className="cursor-pointer"
              >
                Free 15min call
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
