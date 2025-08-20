import { motion } from "framer-motion";

import { Stethoscope, Building, UtensilsCrossed, GraduationCap, LandPlot } from "lucide-react";
import SectionHeader from "./section-header";

const industriesData = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Building, name: "SaaS & Tech" },
  { icon: UtensilsCrossed, name: "Food & Beverage" },
  { icon: GraduationCap, name: "Education" },
  { icon: LandPlot, name: "Real Estate" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Expertise"
          title="Industries We Transform"
          description="We adapt our strategies to fit the unique needs of various industries, delivering unparalleled results."
        />

        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {industriesData.map((industry) => (
            <motion.div
              key={industry.name}
              variants={cardVariants}
              className="group text-center p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                <industry.icon className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground">{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}