import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessSection } from "@/components/sections/process-section";
import { TechStack } from "@/components/sections/tech-stack";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FounderSection } from "@/components/sections/founder-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <ProcessSection />
      <TechStack />
      <WhyChooseUs />
      <FounderSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
