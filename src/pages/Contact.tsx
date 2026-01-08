import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic mb-6">
                Get In Touch
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Ready to start your project? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="feature-card flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">Email</h3>
                    <p className="text-card-foreground/70">hello@starsetsolutions.com</p>
                  </div>
                </div>

                <div className="feature-card flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">Phone</h3>
                    <p className="text-card-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="feature-card flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">Location</h3>
                    <p className="text-card-foreground/70">San Francisco, CA</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="feature-card space-y-6"
              >
                <div>
                  <label className="block text-card-foreground/70 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-card-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-card-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-card-foreground/70 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-card-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-card-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-card-foreground/70 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-card-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-card-foreground"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-card-foreground/70 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 rounded-xl border border-card-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-card-foreground resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-burgundy-light transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
