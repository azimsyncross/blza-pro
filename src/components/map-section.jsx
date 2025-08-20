import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import contactInfo from "../utils/contactInfo";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Location"
          title="Visit Our Office"
          description="Visit us in person or get directions to our location in Seattle."
        />
        <motion.div
          className="mt-12 h-[450px] w-full rounded-lg overflow-hidden border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={contactInfo.location}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert-[90%] contrast-125"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
