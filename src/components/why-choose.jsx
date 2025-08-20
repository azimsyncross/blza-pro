import { motion } from "framer-motion";

import { BarChartHorizontal, ShieldCheck, Users } from "lucide-react";
import SectionHeader from "./section-header";

const reasonsData = [
  {
    icon: BarChartHorizontal,
    title: "Data-Driven Strategies",
    description:
      "Every decision is backed by data. We analyze, iterate, and optimize for maximum ROI, ensuring your marketing budget works harder.",
  },
  {
    icon: Users,
    title: "A Team of Experts",
    description:
      "Our team consists of certified professionals and industry veterans who are passionate about digital marketing and dedicated to your success.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    description:
      "No black boxes. You get clear, comprehensive reports that show you exactly where your money is going and the results we're achieving.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Advantage"
          title="Why ChooseBLZA PRO ?"
          description="We're more than just a marketing agency; we're your dedicated growth partner."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {reasonsData.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className="p-8 bg-background rounded-lg border border-border text-center"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
