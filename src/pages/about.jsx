import { motion } from "framer-motion";
import AboutIntroSection from "../components/about-intro";
import AboutStorySection from "../components/about-story";
import AchievementsSection from "../components/achievements";
import CoreValuesSection from "../components/core-values";
import CtaSection from "../components/cta";
import HeadquartersSection from "../components/headquarters";
import PageHeader from "../components/page-header";
import TeamSection from "../components/team-section";
export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="About BLZA PRO "
          breadcrumbs={[{ label: "About Us" }]}
        />
        <AboutIntroSection />
        <AboutStorySection />
        <CoreValuesSection />
        <TeamSection />
        <HeadquartersSection />
        <AchievementsSection />
        <CtaSection />
      </motion.div>
    </>
  );
}
