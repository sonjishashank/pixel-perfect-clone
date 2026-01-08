import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import StarsetLogo from "./StarsetLogo";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "SERVICES", path: "/services" },
  { name: "ABOUT", path: "/about" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "CONTACT", path: "/contact" },
  { name: "CAREER", path: "/career" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <StarsetLogo 
            size={36} 
            color="hsl(var(--foreground))" 
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-foreground font-serif font-bold text-lg tracking-wide">
              STARSET
            </span>
            <span className="text-foreground/70 text-xs tracking-widest">
              SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:block btn-outline text-sm tracking-wide"
        >
          GET STARTED
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-lg mt-4 rounded-2xl"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 text-center ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-outline text-sm tracking-wide text-center mt-2"
          >
            GET STARTED
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
