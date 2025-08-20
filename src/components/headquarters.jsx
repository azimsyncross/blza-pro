import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import contactInfo from "../utils/contactInfo";

export default function HeadquartersSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              BLZA PRO Headquarters
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're located in the heart of the tech hub, but our reach is
              global. Come say hello!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Our Office</h4>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="h-80 lg:h-96 bg-background rounded-lg p-4 border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Dummy map representation */}
            <div className="w-full h-full bg-secondary/30 rounded-md relative overflow-hidden">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
