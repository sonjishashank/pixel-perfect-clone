import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Shield, Database, Cpu } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to meet your unique business requirements and drive efficiency.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Applications",
    description: "Build once, deploy everywhere. Native-like performance across iOS, Android, and web platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud architecture that grows with your business while optimizing costs.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with enterprise-grade security measures and threat prevention.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    description: "Connect, monitor, and control devices with comprehensive IoT solutions for the modern enterprise.",
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6">
                Our Services
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to transform your business and drive innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="feature-card group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-card-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
