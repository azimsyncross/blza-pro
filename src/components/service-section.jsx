import { motion } from "framer-motion";
import { Search, ShieldCheck, Globe, Video, Zap, MessageCircle,Check } from "lucide-react";
import SectionHeader from "./section-header";

const servicesData = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher on search engines.",
    points: ["Keyword Research", "On-Page & Off-Page SEO", "Technical SEO Audits"],
    price: "499",
  },
  {
    icon: ShieldCheck,
    title: "Reputation Management",
    description: "Protect and enhance your online reputation effectively.",
    points: ["Review Monitoring", "Brand Sentiment Analysis", "Crisis Management"],
    price: "699",
  },
  {
    icon: Globe,
    title: "Global Market Expansion",
    description: "Reach international audiences with localized digital strategies.",
    points: ["Multilingual SEO", "Geo-Targeted Ads", "Cultural Consulting"],
    price: "899",
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Create captivating videos that drive engagement and conversions.",
    points: ["Scriptwriting & Storyboarding", "Video Production", "Distribution & Promotion"],
    price: "749",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Streamline campaigns and boost efficiency with automation tools.",
    points: ["Lead Nurturing Workflows", "Behavioral Targeting", "Email & SMS Automation"],
    price: "599",
  },
  {
    icon: MessageCircle,
    title: "Influencer Marketing",
    description: "Leverage influencers to authentically grow your brand awareness.",
    points: ["Influencer Identification", "Campaign Management", "Performance Tracking"],
    price: "799",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Services"
          title="What We Offer"
          description="We provide a comprehensive suite of digital marketing services to help your business grow."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col p-6 bg-background rounded-lg border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {service.points.map((point) => (
                     <li key={point} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border/50 flex-grow flex items-end justify-between">
                <p className="text-sm text-muted-foreground">
                    Starts at <span className="font-bold text-lg text-foreground">${service.price}</span>/mo
                </p>
                <a href="/contact-us" className="text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}