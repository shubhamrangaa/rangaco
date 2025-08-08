import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />

      {/* Hero Section */}
      <Hero />

      {/* Financial Services Section */}
      <Services />

      {/* Combined Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonial Section */}
      <Testimonial />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </main>
  );
}
