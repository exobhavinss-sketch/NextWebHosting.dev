"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import { MessageSquare } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Approach Delivers"
          description="We let our work speak for itself. Here's what our development process is designed to achieve for every client."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              quote:
                "Every website we build is designed to load in under 2 seconds, score 95+ on Lighthouse, and provide a seamless experience across all devices.",
              label: "Performance Promise",
            },
            {
              quote:
                "We follow WCAG 2.2 guidelines, implement proper semantic HTML, and test with screen readers to ensure your website is accessible to everyone.",
              label: "Accessibility Commitment",
            },
            {
              quote:
                "From structured data to Core Web Vitals optimization, every website we build is engineered to rank well and attract organic traffic.",
              label: "SEO Standards",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="relative bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-6">
                <MessageSquare className="w-5 h-5" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  NextWebHosting Standard
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-lg mx-auto"
        >
          Client testimonials will be displayed here once available. We believe in
          earning trust through genuine results, not fabricated reviews.
        </motion.p>
      </div>
    </section>
  );
}
