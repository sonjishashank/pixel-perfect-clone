import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="cta-card flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-card-foreground italic mb-3">
              Ready To Launch Your Project?
            </h2>
            <p className="text-card-foreground/70 text-base md:text-lg">
              Let's collaborate together and get started by reaching out to our team.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-2 text-card-foreground font-serif text-xl font-semibold hover:text-primary transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
