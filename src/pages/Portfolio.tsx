import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Resource Planning",
    category: "Software Development",
    gradient: "from-purple-500 to-cyan-400",
  },
  {
    title: "Smart Home Automation",
    category: "IoT Systems",
    gradient: "from-rose-500 to-orange-400",
  },
  {
    title: "Financial Analytics Platform",
    category: "Data Analytics",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    gradient: "from-blue-500 to-indigo-400",
  },
  {
    title: "E-Commerce Platform",
    category: "Cross-Platform App",
    gradient: "from-pink-500 to-purple-400",
  },
  {
    title: "Logistics Tracking System",
    category: "Cloud Infrastructure",
    gradient: "from-amber-500 to-red-400",
  },
];

const Portfolio = () => {
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
                Our Portfolio
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative h-64 rounded-3xl bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-end cursor-pointer group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="relative z-10">
                    <span className="text-white/80 text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
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

export default Portfolio;
