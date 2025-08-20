import { motion } from "framer-motion";
import { ArrowRight, BarChart, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-20 md:py-32">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="block">Elevate Your Online</span>
              <span className="block bg-gradient-to-r from-primary to-violet-300 bg-clip-text text-transparent">
                Digital Presence.
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md mx-auto text-lg text-muted-foreground lg:mx-0 sm:max-w-xl"
            >
              We specialize in crafting personalized digital marketing solutions
              that increase traffic, boost conversions, and grow your brand
              sustainably.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start"
            >
              <Link
                to="/contact-us"
                className="group inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated Services */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-72 h-72 bg-primary rounded-full opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="relative grid grid-cols-2 gap-6 text-center max-w-md"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="p-6 bg-secondary/30 rounded-lg backdrop-blur-sm border border-border/20 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <BarChart className="mx-auto h-10 w-10 text-primary mb-3" />
                <p className="font-semibold text-foreground">SEO Mastery</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Boost your search rankings and organic traffic with our expert
                  SEO strategies.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 bg-secondary/30 rounded-lg backdrop-blur-sm border border-border/20 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <TrendingUp className="mx-auto h-10 w-10 text-primary mb-3" />
                <p className="font-semibold text-foreground">
                  Pay-Per-Click Ads
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Maximize ROI with highly targeted PPC campaigns tailored for
                  your audience.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 bg-secondary/30 rounded-lg backdrop-blur-sm border border-border/20 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Target className="mx-auto h-10 w-10 text-primary mb-3" />
                <p className="font-semibold text-foreground">
                  {" "}
                  Media Marketing
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Engage and grow your community across platforms with creative
                  media strategies.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-6 bg-secondary/30 rounded-lg backdrop-blur-sm border border-border/20 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center"
              >
                <p className="font-semibold text-foreground mb-2">
                  Content Marketing
                </p>
                <p className="text-sm text-muted-foreground">
                  Drive brand authority and customer loyalty with compelling,
                  SEO-optimized content.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
