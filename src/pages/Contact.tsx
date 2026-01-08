import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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
      <div className="relative z-10">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground italic underline underline-offset-8">
                CONTACT US
              </h1>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-muted-foreground/30"
              >
                {/* Header */}
                <div className="bg-muted-foreground/60 py-4 px-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-card italic text-center">
                    CONTACT INFORMATION
                  </h2>
                </div>
                
                {/* Content */}
                <div className="bg-muted-foreground/40 p-6 space-y-6">
                  {/* Address */}
                  <div className="text-center">
                    <p className="text-foreground/70 text-sm mb-1">Address</p>
                    <p className="text-foreground font-medium">
                      Starset Office,1st Floor, Near Jijamata<br />
                      School,Bidar,Karnataka,585403
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-muted-foreground/30" />

                  {/* Phone */}
                  <div className="text-center">
                    <p className="text-foreground/70 text-sm mb-1">Phone No.</p>
                    <p className="text-foreground font-medium">9108613402</p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-muted-foreground/30" />

                  {/* Email */}
                  <div className="text-center">
                    <p className="text-foreground/70 text-sm mb-1">E-mail ID</p>
                    <p className="text-foreground font-medium">Starset-services@gmail.com</p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-muted-foreground/30" />
                </div>

                {/* Bottom gray area */}
                <div className="bg-muted-foreground/50 h-24" />
              </motion.div>

              {/* Contact Form Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border-2 border-foreground overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground italic text-center mb-8">
                    Send Us A Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-muted rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="johnn doe"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        E-mail Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-muted rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="johndoes@gmail.com"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-muted rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Inquiry about about web-services"
                      />
                    </div>

                    <div>
                      <label className="block text-foreground text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-muted rounded-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Inquiry about about web-services"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
