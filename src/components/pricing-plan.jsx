import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./section-header";

const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    description:
      "Ideal for new businesses looking to establish a digital footprint.",
    features: [
      "Basic SEO Setup",
      " Media Management (2 platforms)",
      "Monthly Performance Report",
      "Email Support",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "999",
    description:
      "Perfect for growing businesses aiming to accelerate their market reach.",
    features: [
      "Advanced SEO & Content Strategy",
      "PPC Campaign Management",
      " Media Management (4 platforms)",
      "Bi-weekly Strategy Calls",
      "Priority Email & Chat Support",
    ],
    highlight: true,
    cta: "Choose Plan",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "A comprehensive, fully-customized solution for large-scale businesses.",
    features: [
      "Full-Suite SEO & PPC",
      "Dedicated Account Manager",
      "Advanced Analytics & CRO",
      "Custom Integrations",
      "24/7 Priority Support",
    ],
    highlight: false,
    cta: "Contact Sales",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Pricing Plans"
          title="Find Your Perfect Plan"
          description="Transparent pricing for businesses of all sizes. No hidden fees, just pure results."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative flex flex-col p-8 rounded-lg h-full ${
                plan.highlight
                  ? "bg-background border-2 border-primary shadow-2xl shadow-primary/20"
                  : "bg-background border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground h-10">
                {plan.description}
              </p>

              <div className="mt-6">
                {plan.price === "Custom" ? (
                  <p className="text-4xl font-extrabold text-foreground">
                    Custom
                  </p>
                ) : (
                  <p className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-lg text-muted-foreground">
                      /mo
                    </span>
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-4 text-sm flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  to="/contact-us"
                  className={`block w-full text-center rounded-md px-6 py-3 font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-accent text-accent-foreground hover:bg-accent/80"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
