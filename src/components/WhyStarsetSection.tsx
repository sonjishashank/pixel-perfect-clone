import { motion } from "framer-motion";
import { Layers, CheckCircle, Calendar, Link2 } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "End-to-End Development",
    description:
      "From initial concept and system design to development, deployment, and post-launch support — we manage the entire lifecycle so you get a cohesive, reliable solution without fragmentation.",
    isLarge: true,
  },
  {
    icon: CheckCircle,
    title: "Future-ready System",
    description: "",
    isLarge: false,
  },
  {
    icon: Calendar,
    title: "Design-Driven Approach",
    description: "",
    isLarge: false,
  },
  {
    icon: Link2,
    title: "Fast, Efficient Delivery",
    description: "",
    isLarge: false,
  },
];

const WhyStarsetSection = () => {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6">
            WHY STARSET?
          </h2>
          <p className="text-foreground text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Discover the advantages that make us the preferred partner for businesses
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 lg:row-span-1 feature-card flex flex-col"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-auto">
              <Layers className="w-7 h-7 text-primary" />
            </div>
            <div className="mt-auto pt-20">
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                End-to-End Development
              </h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                From initial concept and system design to development, deployment, and post-launch support — we manage the entire lifecycle so you get a cohesive, reliable solution without fragmentation.
              </p>
            </div>
          </motion.div>

          {/* Small Cards */}
          {features.slice(1).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="feature-card flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-auto">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="mt-auto pt-16">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStarsetSection;
