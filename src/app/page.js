import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className=" font-helvetica">
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}