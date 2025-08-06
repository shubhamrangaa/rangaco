import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import IncomeTaxSection from "@/components/IncomeTaxSection";
import GSTSection from "@/components/GSTSection";
import AuditSection from "@/components/AuditSection";
import ComplianceSection from "@/components/ComplianceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Lazy load components for better performance
const DynamicTestimonial = dynamic(() => import("@/components/Testimonial"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Income Tax Section */}
      <IncomeTaxSection />

      {/* GST Section */}
      <GSTSection />

      {/* Audit Section */}
      <AuditSection />

      {/* Compliance Section */}
      <ComplianceSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonial Section */}
      <DynamicTestimonial />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
