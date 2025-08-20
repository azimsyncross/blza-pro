import { motion } from "framer-motion";

import { Zap } from "lucide-react";
import SectionHeader from "./section-header";

// Replace with your actual images
const storiesData = [
  {
    image: "s6.jpg",
    category: "Non-Profit",
    title: "Donation Drive Success for 'Hope Foundation'",
    description:
      "An emotional storytelling video campaign led to a 300% increase in online donations during the annual drive.",
    results: [
      "Increased average donation value by 50%",
      "Reached over 2 million viewers",
      "Grew email subscriber list by 20k",
    ],
  },

  {
    image: "s3.jpg",
    category: "Local Business",
    title: "Local SEO Dominance for 'The Corner Cafe'",
    description:
      "We put a beloved local cafe on the map, driving a 70% increase in foot traffic through local SEO.",
    results: [
      "Top 3 in Google Maps Pack",
      "5-star reviews increased by 150%",
      "Website bookings up by 200%",
    ],
  },
  {
    image: "s4.jpg",
    category: "Healthcare",
    title: "Patient Acquisition Boost for 'Wellness Plus Clinic'",
    description:
      "A targeted content marketing and  media strategy increased patient inquiries by 120% in 6 months.",
    results: [
      "Improved website traffic by 80%",
      "Grew  media followers by 3x",
      "Achieved 4.9-star Google rating",
    ],
  },
  {
    image: "s2.jpg",
    category: "SaaS",
    title: "Generated 5,000+ MQLs for 'InnovateAI'",
    description:
      "Through targeted PPC and LinkedIn campaigns, we fueled the sales pipeline for a leading AI startup.",
    results: [
      "30% lower cost-per-lead",
      "Expanded into 3 new markets",
      "Achieved a 5x ROAS",
    ],
  },
  {
    image: "s5.jpg",
    category: "Tech Startup",
    title: "Brand Awareness Surge for 'CloudSync'",
    description:
      "Integrated PR and influencer campaigns resulted in a 60% increase in brand mentions and media coverage.",
    results: [
      "Reached 1M+ impressions",
      "Partnership with 10+ influencers",
      "Secured media features in top tech blogs",
    ],
  },
  {
    image: "s1.jpg",
    category: "E-commerce",
    title: "250% Increase in Organic Traffic for 'Urban Kicks'",
    description:
      "A comprehensive SEO and content strategy catapulted this online sneaker store to the top of search results.",
    results: [
      "Doubled conversion rate",
      "Ranked #1 for 15+ keywords",
      "Reduced ad spend by 40%",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function SuccessStoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Proven Results"
          title="Our Success Stories"
          description="We don't just talk the talk. See how we've transformed businesses like yours."
        />

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {storiesData.map((story) => (
            <motion.div
              key={story.title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-lg bg-secondary/30 border border-border group"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={story.image}
                  alt={story.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary uppercase">
                    {story.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {story.description}
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground/80 mb-2">
                    Key Wins:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {story.results.map((result) => (
                      <li key={result} className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary/80" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
