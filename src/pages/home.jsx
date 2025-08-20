import CtaSection from "../components/cta";
import HeroHome from "../components/hero-home";
import IndustriesSection from "../components/industries-section";
import NewsletterSection from "../components/newsletter";
import ProcessSection from "../components/process-section";
import ServicesSection from "../components/service-section";
import SuccessStoriesSection from "../components/success-stories";
import TestimonialsSection from "../components/testimonial";
import WhyChooseUsSection from "../components/why-choose";

export default function Home() {
  return (<>
  <HeroHome/>
  <ServicesSection/>
  <SuccessStoriesSection/>
  <ProcessSection/>
  <IndustriesSection/>
  <WhyChooseUsSection/>
  <TestimonialsSection/>
  <NewsletterSection/>
  <CtaSection/>
  </>);
}
