"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-md"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900 font-satoshi">
              Ranga & Company
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900 transition-colors font-satoshi"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-satoshi"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-gray-900 transition-colors font-satoshi"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors font-satoshi">
            <Phone className="w-4 h-4" />
            <span>Free 15min call</span>
          </button>
        </div>
      </div>
    </header>
  );
}
