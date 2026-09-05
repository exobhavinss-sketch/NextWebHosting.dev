"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies do you use to build websites?",
    answer:
      "We build with Next.js, React, TypeScript, and Tailwind CSS — modern technologies that ensure your website is fast, scalable, and maintainable. We also use Framer Motion for animations, shadcn/ui for accessible components, and deploy on platforms like Vercel and Netlify.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timeline varies based on complexity. A simple landing page takes 1-2 weeks. A full business website typically takes 3-5 weeks. Complex projects with custom features may take 6-8 weeks. We'll provide a detailed timeline after the discovery phase.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance plans that include regular updates, security patches, performance monitoring, content updates, and technical support. We want your website to continue performing at its best long after launch.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive and tested across desktop, laptop, tablet, and mobile devices. We design mobile-first and ensure a seamless experience on all screen sizes.",
  },
  {
    question: "Do you handle SEO optimization?",
    answer:
      "Yes. SEO is built into our development process. This includes proper meta tags, structured data (Schema.org), Open Graph tags, sitemaps, robots.txt, semantic HTML, Core Web Vitals optimization, and more.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We offer website redesign services. We'll analyze your current site, understand your goals, and create a modern, high-performance website that better serves your business and users.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our web development services, process, and pricing."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors py-5 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
