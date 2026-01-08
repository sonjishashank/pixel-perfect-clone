import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6">
                About StarSet
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate technologists dedicated to crafting innovative solutions that transform businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            >
              <div className="feature-card">
                <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-card-foreground/70 leading-relaxed">
                  To empower organizations with cutting-edge technology solutions that drive growth, efficiency, and innovation in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="feature-card">
                <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-card-foreground/70 leading-relaxed">
                  To be the trusted technology partner of choice for businesses worldwide, known for our excellence, reliability, and transformative impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-20"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Innovation", "Excellence", "Integrity"].map((value, index) => (
                  <div key={value} className="feature-card text-center">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground">
                      {value}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
