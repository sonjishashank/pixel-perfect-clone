import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyStarsetSection from "@/components/WhyStarsetSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <WhyStarsetSection />
          <WhatWeDoSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
