"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";

const technologies = [
  { name: "Next.js", category: "Framework", description: "React framework for production" },
  { name: "React", category: "Library", description: "UI component library" },
  { name: "TypeScript", category: "Language", description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework" },
  { name: "Framer Motion", category: "Animation", description: "Production-grade animations" },
  { name: "shadcn/ui", category: "Components", description: "Accessible UI components" },
  { name: "Vercel", category: "Deployment", description: "Edge-optimized hosting" },
  { name: "GitHub", category: "Version Control", description: "Collaborative development" },
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology"
          title="Built With the Best Tools"
          description="We use industry-leading technologies to build fast, scalable, and maintainable websites."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="text-xl font-bold">{tech.name.charAt(0)}</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.description}</p>
              <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary/50 text-muted-foreground">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
