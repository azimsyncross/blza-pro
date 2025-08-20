import { motion } from "framer-motion";
import SectionHeader from "../components/section-header";
import { Lightbulb, ShieldCheck, Handshake, TrendingUp, Microscope, Users } from "lucide-react";

const valuesData = [
  { icon: ShieldCheck, title: "Integrity", description: "We operate with unwavering honesty and transparency." },
  { icon: Lightbulb, title: "Innovation", description: "We constantly explore new ideas and technologies." },
  { icon: Handshake, title: "Partnership", description: "We build collaborative relationships based on trust." },
  { icon: TrendingUp, title: "Results-Driven", description: "Our focus is on delivering measurable success." },
  { icon: Microscope, title: "Data-Obsessed", description: "We let data guide our every strategic move." },
  { icon: Users, title: "Client-Centric", description: "Your success is the ultimate measure of our own." },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

export default function CoreValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader tagline="Our Principles" title="Our Core Values" />
        <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
        >
          {valuesData.map((value) => (
            <motion.div key={value.title} variants={cardVariants} className="flex items-start gap-4 p-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary/50 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-1 text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}