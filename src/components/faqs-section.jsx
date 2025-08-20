import { motion } from "framer-motion";
import SectionHeader from "./section-header";

const faqData = [
  {
    question: "How fast can we begin?",
    answer: "We can usually start your marketing campaigns within 1-2 business days following our initial consultation and contract execution."
  },
  {
    question: "Do you serve businesses of all sizes?",
    answer: "Absolutely! We collaborate with startups, expanding businesses, and established enterprises. Our solutions are tailored to match your specific requirements and budget."
  },
  {
    question: "How do you evaluate success?",
    answer: "We monitor key performance metrics that impact your business - lead generation, conversion rates, revenue growth, and ROI. You receive comprehensive monthly reports."
  },
  {
    question: "What distinguishes you from other agencies?",
    answer: "Our analytics-driven approach, partnership philosophy, and dedication to transparency differentiate us. We function as growth partners, not merely service providers."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title="Common Questions"
          description="Frequently asked questions about our services and partnership methodology."
        />
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqData.map(item => (
            <motion.div
              key={item.question}
              variants={cardVariants}
              className="bg-secondary/30 border border-border rounded-lg p-6"
            >
              <h4 className="text-lg font-bold text-foreground">{item.question}</h4>
              <p className="mt-2 text-muted-foreground">{item.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}