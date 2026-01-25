import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatBot from "@/components/ui/chatbot";
import ExitIntentPopup from "@/components/ui/exit-intent-popup";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhyUsSection from "@/components/sections/why-us-section";
import TrustBadges from "@/components/sections/trust-badges";
import GallerySection from "@/components/sections/gallery-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TrustBadges />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Elements */}
      <ChatBot />
      <ExitIntentPopup />
    </>
  );
}
