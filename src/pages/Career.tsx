import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Rocket, TrendingUp, Users, Search } from "lucide-react";
import { useState } from "react";

const positions = [
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
  {
    title: "senior frontend designer",
    location: "Remote",
    type: "Full time",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Innovative Projects",
    description: "Work on cutting-edge technology that pushes the boundries of what's possible",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "We invest in your development with continuous learning experience and mentorship oppurtunities",
  },
  {
    icon: Users,
    title: "Collabarative Culture",
    description: "Join a diverse team of experts who thrive on teamwork and shared success",
  },
  {
    icon: Briefcase,
    title: "Competeive Benefits",
    description: "Enjoy a comprehensive beneifts package designed to support your well-being.",
  },
];

const Career = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPositions = positions.filter((position) =>
    position.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section with Grid Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <GridBackground />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6"
            >
              Shape The Future With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg md:text-xl mb-8"
            >
              Join Starset's constellation of innovators and be a part of a<br />
              team that's building the technology of tommorow
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-8 py-3 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              View Open Positions
            </motion.button>
          </div>
        </section>

        {/* Why Starset Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
            >
              WHY STARSET
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border-2 border-card-foreground"
                >
                  <benefit.icon className="w-10 h-10 text-card-foreground mb-4" />
                  <h3 className="font-semibold text-lg text-card-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-card-foreground/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground italic mb-8"
            >
              Open Position
            </motion.h2>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-background/60" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Job Title or Keywords"
                  className="w-full pl-12 pr-4 py-3 bg-muted-foreground/60 rounded-lg text-background placeholder:text-background/60 focus:outline-none"
                />
              </div>
            </motion.div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4"
                >
                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground italic mb-2">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-6 text-foreground/80 text-sm">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-card text-card-foreground rounded-full font-medium hover:bg-card/90 transition-colors duration-300 whitespace-nowrap">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Career;
