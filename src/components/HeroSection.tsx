import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight mb-8"
        >
          CRAFTING NEXT-GEN{" "}
          <span className="italic">SOLUTIONS</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-light"
        >
          StarSet creates high-performance software, cross-platform 
          applications, IoT systems, and secure digital solutions that help 
          organizations scale faster and operate smarter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-card text-primary px-10 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-cream-dark hover:scale-105 border border-transparent"
          >
            Start your project
          </Link>
          <Link
            to="/portfolio"
            className="bg-card text-card-foreground px-10 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-cream-dark hover:scale-105 border border-card"
          >
            Explore our works
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
