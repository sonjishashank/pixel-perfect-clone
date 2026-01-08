import ParticleBackground from "@/components/ParticleBackground";
import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation with Purpose",
    description: "We build technology that solves real problems, not just impressive ideas on paper.",
  },
  {
    title: "Quality & Reliability",
    description: "Every system we deliver is engineered for performance, stability, and long-term value.",
  },
  {
    title: "Design & Usability",
    description: "Great technology should be intuitive, clean, and human-centric by design.",
  },
  {
    title: "Integrity & Collaboration",
    description: "We believe in transparency, ownership, and working closely with our clients and teams.",
  },
];

const teamMembers = [
  { name: "Alex Chen", role: "CEO & Founder", gradient: "from-violet-500 to-purple-600" },
  { name: "Sarah Johnson", role: "CTO", gradient: "from-blue-500 to-cyan-500" },
  { name: "Michael Park", role: "Lead Developer", gradient: "from-emerald-500 to-teal-500" },
  { name: "Emily Davis", role: "Design Director", gradient: "from-rose-500 to-pink-500" },
  { name: "James Wilson", role: "Project Manager", gradient: "from-amber-500 to-orange-500" },
  { name: "Lisa Martinez", role: "DevOps Lead", gradient: "from-indigo-500 to-blue-500" },
  { name: "David Kim", role: "Security Analyst", gradient: "from-red-500 to-rose-500" },
  { name: "Anna Thompson", role: "UX Researcher", gradient: "from-teal-500 to-emerald-500" },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section with Grid */}
          <section className="relative min-h-[60vh] flex items-center justify-center px-6 lg:px-12 pt-24 overflow-hidden">
            <GridBackground />
            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground italic leading-tight"
              >
                OUR MISSION AND VISION
              </motion.h1>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="relative py-16 lg:py-24 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-serif text-3xl md:text-4xl font-bold text-foreground italic text-center mb-12"
              >
                OUR MISSION AND VISION
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="feature-card text-center"
                >
                  <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">
                    OUR MISSION
                  </h3>
                  <p className="text-card-foreground/70 leading-relaxed">
                    To design and deliver intelligent, reliable, and future-ready technology solutions that solve real-world problems, empower organizations, and create measurable impact through innovation and engineering excellence.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="feature-card text-center"
                >
                  <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">
                    OUR VISION
                  </h3>
                  <p className="text-card-foreground/70 leading-relaxed">
                    To become a trusted global technology partner, driving digital innovation through scalable systems, secure architectures, and thoughtful design — shaping solutions that stand the test of time.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="relative py-16 lg:py-24 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-serif text-3xl md:text-4xl font-bold text-foreground italic text-center mb-12"
              >
                OUR VALUE
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="feature-card"
                  >
                    <h3 className="font-serif text-lg font-bold text-card-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-card-foreground/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet the Team Section */}
          <section className="relative py-16 lg:py-24 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-3xl p-8 lg:p-12"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-card-foreground text-center mb-12">
                  Meet the team
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group cursor-pointer"
                    >
                      <div className={`aspect-square rounded-xl bg-gradient-to-br ${member.gradient} mb-3 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                        <span className="text-white text-4xl font-serif font-bold opacity-30">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="font-medium text-card-foreground text-sm text-center">
                        {member.name}
                      </h4>
                      <p className="text-card-foreground/60 text-xs text-center">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
