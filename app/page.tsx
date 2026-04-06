import HeroSlider from "@/components/HeroSlider";
import ServicesCarousel from "@/components/ServicesCarousel";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import PartnerLogos from "@/components/PartnerLogos";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import BlogSection from "@/components/BlogSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-0 bg-[var(--color-bgDark)] overflow-x-hidden">
      
      {/* Sections stacked logically */}
      <HeroSlider />
      <ServicesCarousel />
      <AboutSection />
      <StatsCounter />
      <WhyChooseUs />
      <MarqueeBanner />
      <PricingSection />
      <PortfolioCarousel />
      <TestimonialsSlider />
      <PartnerLogos />
      <BlogSection />
      
      {/* Footer Area */}
      <FooterCTA />
    </main>
  );
}
