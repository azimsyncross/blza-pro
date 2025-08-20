import { motion } from "framer-motion";
import ContactFormSection from "../components/contact-form";
import MapSection from "../components/map-section";
import FaqSection from "../components/faqs-section";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Custom Page Header for Contact Page */}
      <div className="py-20 md:py-28 bg-background text-center">
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Partner & Grow
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to revolutionize your digital presence? Partner with our marketing experts to create innovative solutions that accelerate expansion and establish market dominance.
          </motion.p>
      </div>
      <ContactFormSection/>
      <MapSection/>
      <FaqSection/>
    </motion.div>
  );
}
