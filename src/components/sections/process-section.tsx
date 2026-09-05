"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import { Search, PenTool, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, target audience, and competitors. This phase shapes the entire project direction.",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description:
      "We create wireframes and visual designs that align with your brand identity. Every pixel is placed with purpose and intention.",
  },
  {
    step: 3,
    icon: Code2,
    title: "Development",
    description:
      "Our engineers build your website using modern technologies, ensuring clean code, optimal performance, and scalability.",
  },
  {
    step: 4,
    icon: TestTube,
    title: "Testing",
    description:
      "Rigorous testing across devices, browsers, and screen sizes. We check accessibility, performance, and SEO before launch.",
  },
  {
    step: 5,
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy your website, configure analytics, and provide documentation. Post-launch support ensures a smooth transition.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="How We Build Your Website"
          description="A proven, structured approach to delivering premium websites on time and within scope."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px hidden sm:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0 hidden sm:flex">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25">
                  {step.step}
                </div>
              </div>

              {/* Content card */}
              <div className={`flex-1 bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${
                index % 2 === 0 ? "lg:mr-auto lg:max-w-[calc(50%-3rem)]" : "lg:ml-auto lg:max-w-[calc(50%-3rem)]"
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
