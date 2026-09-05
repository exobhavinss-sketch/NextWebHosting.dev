"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import * as animations from "@/lib/animations";

export interface AnimatedContainerProps {
  children: React.ReactNode;
  variants?: Variants;
  animation?: "fadeInUp" | "fadeInDown" | "fadeIn" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "staggerContainer" | "slideUp" | "textReveal" | string;
  className?: string;
  delay?: number;
  once?: boolean;
  id?: string;
}

export function AnimatedContainer({
  children,
  variants,
  animation,
  className,
  delay = 0,
  once = true,
  id,
}: AnimatedContainerProps) {
  const resolvedVariants =
    variants ||
    (animation && (animations as Record<string, any>)[animation]) ||
    animations.fadeInUp;

  return (
    <motion.div
      id={id}
      variants={resolvedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
