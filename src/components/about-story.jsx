import { motion } from "framer-motion";

export default function AboutStorySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Our Story */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h2 className="text-4xl font-extrabold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground prose prose-invert lg:prose-lg max-w-none">
              <p>
                BLZA PRO was established with the vision of making
                sophisticated digital marketing strategies accessible to
                businesses across all sectors. We identified the increasing
                demand for outcome-focused marketing solutions that deliver
                authentic business transformation.
              </p>
              <p>
                Our journey started through comprehensive research into digital
                marketplace challenges. We’ve concentrated on creating strategic
                frameworks and innovative solutions that tackle these
                complexities through validated methodologies and
                success-oriented principles.
              </p>
              <p>
                Today, we function as reliable marketing partners who comprehend
                your business objectives and develop customized solutions that
                accelerate expansion and establish market leadership in the
                digital realm.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Vision & Goal Card */}
          <motion.div
            className="bg-background/50 border border-border rounded-lg p-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To supply businesses with transformative digital marketing
                solutions that are strategically robust, outcome-focused, and
                engineered to scale with business expansion and market
                evolution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our Goal
              </h3>
              <p className="text-muted-foreground">
                To become the premier digital marketing agency for businesses
                pursuing professional excellence, innovative solutions, and
                quantifiable results that drive significant business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
