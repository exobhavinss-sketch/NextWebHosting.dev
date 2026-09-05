"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-white/20 text-white border border-white/20">
              Ready to Get Started?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Let&apos;s Build Something{" "}
            <span className="text-accent">Amazing</span> Together
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Ready to take your online presence to the next level? Get in touch
            with us today and let&apos;s discuss how we can help your business
            grow.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white text-primary rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:nextwebhosting.dev@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
