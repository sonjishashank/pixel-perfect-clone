import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Engineering",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
  },
  {
    title: "DevOps Engineer",
    location: "New York, NY",
    type: "Full-time",
    department: "Operations",
  },
  {
    title: "Project Manager",
    location: "Remote",
    type: "Full-time",
    department: "Management",
  },
  {
    title: "IoT Solutions Architect",
    location: "Austin, TX",
    type: "Full-time",
    department: "Engineering",
  },
];

const Career = () => {
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
                Join Our Team
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Build the future with us. We're looking for passionate individuals to join our growing team.
              </p>
            </motion.div>

            <div className="space-y-4">
              {positions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-primary text-sm font-medium">{position.department}</span>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mt-1">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-card-foreground/60 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-card-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
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

export default Career;
