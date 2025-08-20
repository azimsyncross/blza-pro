import CtaSection from "../components/cta";
import PageHeader from "../components/page-header";
import PricingSection from "../components/pricing-plan";
import ServiceIntroSection from "../components/service-intro";
import ServicesSection from "../components/service-section";
import { motion } from "framer-motion";
export default function Service() {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title="Our Services"
        description="Comprehensive digital marketing solutions tailored to fuel your growth."
        breadcrumbs={[{ label: "Services" }]}
      />
      <ServiceIntroSection/>
      <ServicesSection/>
      <PricingSection/>
      <CtaSection/>
      </motion.div>
  )
}
