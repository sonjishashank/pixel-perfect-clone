import ParticleBackground from "@/components/ParticleBackground";
import WavyLinesBackground from "@/components/WavyLinesBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Custom Software Solutions",
    description:
      "We design and develop tailor-made software systems built around your unique workflows, performance requirements, and long-term scalability goals. Every solution is engineered for reliability, efficiency, and future growth.",
  },
  {
    title: "Web & UI/UX Design",
    description:
      "We create clean, intuitive, and responsive websites and interfaces that balance visual clarity with usability. Our design approach focuses on branding, accessibility, and seamless user experience across devices.",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "We build high-performance mobile applications for Android and iOS using modern cross-platform technologies, ensuring faster development, consistent user experience, and optimized performance.",
  },
  {
    title: "System Integration & Migration",
    description:
      "We seamlessly integrate new systems with existing infrastructure, securely migrate data, and modernize legacy platforms while ensuring minimal downtime and uninterrupted operations.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "We architect and deploy scalable cloud solutions that grow with your business. Our expertise spans AWS, Azure, and Google Cloud, ensuring optimal performance, security, and cost efficiency.",
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "We protect your digital assets with comprehensive security audits, penetration testing, and enterprise-grade protection systems to safeguard against evolving cyber threats.",
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "We develop connected device ecosystems and embedded software solutions that enable real-time monitoring, automation, and intelligent decision-making across industries.",
  },
  {
    title: "Data Analytics & AI",
    description:
      "We transform raw data into actionable insights using advanced analytics, machine learning, and AI-powered solutions that drive informed business decisions.",
  },
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const currentServices = services.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section with Wavy Lines */}
          <section className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-12 pt-24 overflow-hidden">
            <WavyLinesBackground />
            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground italic leading-tight mb-8"
              >
                Technology Built for What's Next
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
              >
                We design, build, and integrate intelligent digital systems that scale 
                with your business —<br />
                from software and platforms to security and automation.
              </motion.p>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="relative py-24 lg:py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6">
                  Our Services
                </h2>
                <p className="text-foreground text-base md:text-lg max-w-4xl mx-auto font-medium leading-relaxed">
                  We deliver end-to-end technology solutions tailored to your requirements — combining 
                  engineering precision, modern design, and long-term reliability.
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {currentServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    {/* Service Title Button */}
                    <div className="inline-block bg-card text-card-foreground px-6 py-3 rounded-lg font-serif font-semibold text-sm mb-6 border border-card">
                      {service.title}
                    </div>
                    
                    {/* Service Description */}
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center max-w-6xl mx-auto">
                <button
                  onClick={prevPage}
                  className="p-3 text-foreground hover:text-foreground/70 transition-colors duration-200"
                  aria-label="Previous services"
                >
                  <ArrowLeft size={32} strokeWidth={2} />
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPage
                          ? "bg-foreground w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="p-3 text-foreground hover:text-foreground/70 transition-colors duration-200"
                  aria-label="Next services"
                >
                  <ArrowRight size={32} strokeWidth={2} />
                </button>
              </div>
            </div>
          </section>

          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
