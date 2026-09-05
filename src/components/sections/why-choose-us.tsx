"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Zap,
  Users,
  HeadphonesIcon,
  Code2,
  Search,
  Shield,
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use the latest frameworks and tools — Next.js, React, TypeScript, and Tailwind CSS — to build websites that are fast and future-proof.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Every website we build targets 95+ Lighthouse scores across performance, accessibility, SEO, and best practices.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "We design with your users in mind. Beautiful interfaces that are intuitive, accessible, and optimized for conversions.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built-in SEO best practices including structured data, meta tags, sitemaps, and Core Web Vitals optimization.",
  },
  {
    icon: Shield,
    title: "Accessible & Inclusive",
    description:
      "WCAG 2.2 compliant websites with proper ARIA labels, keyboard navigation, color contrast, and screen reader support.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. We provide ongoing maintenance, updates, and technical support to keep your site running smoothly.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Why Choose Us"
          title="Why Businesses Trust NextWebHosting"
          description="We combine technical excellence with design thinking to deliver websites that genuinely serve your business goals."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="group flex gap-5"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
