import ParticleBackground from "@/components/ParticleBackground";
import DiagonalGridBackground from "@/components/DiagonalGridBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All Projects",
  "cloud solutions",
  "web development",
  "data analytics",
];

const projects = [
  {
    title: "Custom Software Solutions",
    description: "Tailor-made software systems designed around your workflows, performance needs, and scalability goals.",
    category: "cloud solutions",
  },
  {
    title: "Web & UI/UX Design",
    description: "Clean, intuitive, and responsive websites and interfaces focused on usability, branding, and experience.",
    category: "web development",
  },
  {
    title: "Cross-Platform App Development",
    description: "High-performance mobile applications for Android and iOS using modern cross-platform technologies.",
    category: "web development",
  },
  {
    title: "System Integration & Migration",
    description: "Seamless integration with existing systems, secure data migration, and smooth transitions with minimal disruption.",
    category: "cloud solutions",
  },
  {
    title: "Internal Business Systems",
    description: "Custom-built internal tools including dashboards, management platforms, and workflow automation systems.",
    category: "data analytics",
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable and secure e-commerce platforms with optimized user journeys and integrated payment systems.",
    category: "web development",
  },
  {
    title: "IoT & Wireless Automation",
    description: "Smart automation solutions including IoT devices, wireless communication systems, and remote monitoring.",
    category: "cloud solutions",
  },
  {
    title: "Security & Surveillance Systems",
    description: "Digital and physical security solutions including surveillance, monitoring, and access control systems.",
    category: "data analytics",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section with Cream Background and Diagonal Grid */}
          <section className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-12 pt-24 overflow-hidden bg-card">
            <DiagonalGridBackground />
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-card-foreground italic leading-tight mb-6"
              >
                Portfolio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-card-foreground/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Showcasing our innovative solutions for complex challenges across industries and technologies
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-card-foreground text-card px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-card-foreground/90 hover:scale-105"
              >
                Open Portfolio
              </motion.button>
            </div>
          </section>

          {/* Our Projects Section */}
          <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-card">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground italic mb-4">
                  Our Projects
                </h2>
                <p className="text-card-foreground/70 text-base md:text-lg max-w-3xl mx-auto">
                  A snapshot of systems, platforms, and digital solutions we've designed and built to solve real-world problems.
                </p>
              </motion.div>

              {/* Filter Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeCategory === category
                        ? "bg-card-foreground text-card border-card-foreground"
                        : "bg-card text-card-foreground border-card-foreground/20 hover:border-card-foreground/40"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-cream-dark rounded-3xl p-6 flex flex-col min-h-[280px] border border-card-foreground/10 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Black Title Badge */}
                    <div className="inline-block self-start bg-card-foreground text-card px-4 py-2 rounded-lg text-sm font-medium mb-auto">
                      {project.title}
                    </div>
                    
                    {/* Description at bottom */}
                    <p className="text-card-foreground/70 text-sm leading-relaxed text-center mt-auto pt-8">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Gray Divider */}
          <div className="h-16 bg-muted-foreground/30"></div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
