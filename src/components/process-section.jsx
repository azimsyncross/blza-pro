import { motion } from "framer-motion";

import { ScanSearch, Puzzle, Rocket, TrendingUp } from "lucide-react";
import SectionHeader from "./section-header";

const processSteps = [
    {
      icon: ScanSearch,
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, and audience to build a tailored, data-backed strategy."
    },
    {
      icon: Puzzle,
      title: "Implementation",
      description: "Our experts execute the plan, from setting up campaigns and optimizing your site to creating compelling content."
    },
    {
      icon: Rocket,
      title: "Launch & Monitor",
      description: "We launch the campaigns and continuously monitor performance, making real-time adjustments for maximum impact."
    },
    {
      icon: TrendingUp,
      title: "Analysis & Growth",
      description: "We analyze the data, provide transparent reports, and refine our strategy to drive continuous, sustainable growth."
    }
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

export default function ProcessSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto max-w-7xl px-4">
                <SectionHeader
                    tagline="Our Method"
                    title="Our Strategic Process"
                    description="A proven, transparent process designed to deliver exceptional results every time."
                />
                <div className="relative mt-12">
                    {/* The connecting line */}
                    <div className="absolute left-6 top-6 h-full w-px bg-border -translate-x-1/2" aria-hidden="true" />

                    <motion.div 
                        className="space-y-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div key={index} className="relative flex items-start gap-6" variants={itemVariants}>
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-secondary border border-border text-primary font-bold text-lg z-10">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}