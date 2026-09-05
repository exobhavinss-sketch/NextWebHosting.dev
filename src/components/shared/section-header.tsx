"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ badge, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {badge && (
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mt-4 text-lg text-muted-foreground leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
