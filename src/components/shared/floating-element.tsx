"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
}

export function FloatingElement({ children, className, duration = 3, delay = 0, y = 10 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [-y, y, -y] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
