import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Custom Software Solutions",
    description:
      "We design and develop tailor-made software systems built around your unique workflows, performance requirements, and long-term scalability goals. Every solution is engineered for reliability, efficiency, and future growth.",
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Build once, deploy everywhere. Our cross-platform applications deliver native-like performance across iOS, Android, and web platforms.",
  },
  {
    title: "IoT Systems",
    description:
      "Connect, monitor, and control your devices with our comprehensive IoT solutions designed for reliability and scalability.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud architecture that grows with your business while maintaining optimal performance and cost efficiency.",
  },
];

const WhatWeDoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-8">
              What Do We Do?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center lg:text-left">
              From cybersecurity to cloud computing, we offer a full spectrum of IT services tailored to your needs
            </p>
          </motion.div>

          {/* Right - Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Background Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Card 3 (back) */}
              <motion.div
                animate={{
                  rotate: 12,
                  x: 40,
                  scale: 0.9,
                }}
                className="absolute w-72 h-80 bg-muted rounded-3xl shadow-xl flex items-center justify-center"
              >
                <span className="text-muted-foreground/30 font-serif text-4xl font-bold">ST</span>
              </motion.div>

              {/* Card 2 (middle) */}
              <motion.div
                animate={{
                  rotate: -8,
                  x: -30,
                  scale: 0.95,
                }}
                className="absolute w-72 h-80 bg-muted rounded-3xl shadow-xl flex items-center justify-center"
              >
                <span className="text-muted-foreground/30 font-serif text-4xl font-bold">ST</span>
              </motion.div>

              {/* Card 1 (front - gradient) */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-80 card-gradient rounded-3xl shadow-2xl p-8 flex flex-col justify-center text-center cursor-pointer z-10"
              >
                <h3 className="text-white font-serif text-xl font-bold mb-4">
                  {services[activeIndex].title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {services[activeIndex].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-foreground w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
