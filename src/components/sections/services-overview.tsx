"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Globe,
  Palette,
  Search,
  Gauge,
  Smartphone,
  Wrench,
  Rocket,
  Shield,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites designed to establish credibility and convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces crafted with attention to detail and user experience best practices.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored web solutions built with modern technologies for optimal performance and scalability.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Strategic search engine optimization to improve visibility and drive organic traffic to your website.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Blazing-fast websites optimized for Core Web Vitals with 95+ Lighthouse performance scores.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect designs that look stunning and work flawlessly across all devices and screen sizes.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Ongoing website maintenance, updates, and support to keep your online presence running smoothly.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Seamless deployment and hosting setup with CI/CD pipelines for hassle-free launches.",
  },
  {
    icon: Shield,
    title: "Accessibility",
    description:
      "WCAG 2.2 compliant websites ensuring your content is accessible to all users, including those with disabilities.",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Everything You Need to Build a Powerful Online Presence"
          description="From design to deployment, we handle every aspect of your web development project with precision and care."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group relative bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
