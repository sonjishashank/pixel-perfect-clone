import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarsetLogo from "./StarsetLogo";

const footerLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-16 lg:py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-4 mb-10 group">
          <StarsetLogo
            size={48}
            color="hsl(var(--foreground))"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-serif text-3xl font-bold text-foreground tracking-wide">
            Starset Solutions
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-10">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          © Starset Solutions. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
