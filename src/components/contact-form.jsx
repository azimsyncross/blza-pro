import { motion } from "framer-motion";
import {
  CheckCircle,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import contactInfo from "../utils/contactInfo";

// Reusable Input Field Component
const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  children,
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-sm font-medium text-primary">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children || (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="block w-full rounded-lg border border-border bg-background/50 p-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
      />
    )}
  </div>
);

const ContactCard = ({ icon: Icon, title, value, delay }) => (
  <motion.div
    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
        {value}
      </p>
    </div>
  </motion.div>
);

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission with 3 second delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactDetails = [
    {
      icon: User,
      title: "Full Name",
      value: contactInfo.contactPerson,
      delay: 0.1,
    },
    {
      icon: Mail,
      title: "Email Contact",
      value: contactInfo.email,
      delay: 0.2,
    },
    {
      icon: Phone,
      title: "Primary Phone Number",
      value: contactInfo.phone,
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: contactInfo.address,
      delay: 0.4,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      delay: 0.5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Digital Journey?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to your business success. Contact us through any
            channel, and we'll respond with strategic insights within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Contact Cards */}
          <div className="xl:col-span-1">
            <motion.h3
              className="text-2xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h3>
            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <ContactCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Right Column: Enhanced Form */}
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Form background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/20 to-background/50 rounded-2xl" />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm rounded-2xl" />

              <div className="relative z-10 border border-border/50 rounded-2xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    Send Us a Message
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Personal Info Section */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        1
                      </div>
                      Personal Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField
                        label="Full Name"
                        name="fullname"
                        placeholder="Enter your full name"
                        required
                      />
                      <InputField
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                      />
                      <InputField
                        label="Company Name"
                        name="company"
                        placeholder="Your company name"
                      />
                      <InputField
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        2
                      </div>
                      Project Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <InputField label="Service Interest" name="service">
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            className="block w-full appearance-none rounded-lg border border-border bg-background/50 p-4 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                          >
                            <option>Select a service</option>
                            <option>SEO Optimization</option>
                            <option>PPC Advertising</option>
                            <option> Media Marketing</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                        </div>
                      </InputField>

                      <InputField label="Budget Range" name="budget">
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            className="block w-full appearance-none rounded-lg border border-border bg-background/50 p-4 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                          >
                            <option>Select budget range</option>
                            <option>$500 - $1,000</option>
                            <option>$1,000 - $5,000</option>
                            <option>$5,000+</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                        </div>
                      </InputField>
                    </div>

                    <div>
                      <label
                        htmlFor="details"
                        className="text-sm font-medium text-primary block mb-2"
                      >
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows="6"
                        placeholder="Share your business objectives, current challenges, and what you're aiming to accomplish..."
                        required
                        className="block w-full rounded-lg border border-border bg-background/50 p-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Section */}
                  <div className="pt-4 border-t border-border/30">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-muted-foreground">
                          Thank you for reaching out. We'll get back to you
                          within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                          We'll get back to you within 24 hours
                        </p>
                        <motion.button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="group relative overflow-hidden inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 min-w-[160px] disabled:opacity-70 disabled:cursor-not-allowed"
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                          <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                        </motion.button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
