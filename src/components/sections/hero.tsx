"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, staggerContainer, fadeInRight } from "@/lib/animations";
import { FloatingElement } from "@/components/shared/floating-element";
import { GradientText } from "@/components/shared/gradient-text";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/5 pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Premium Web Development Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              We Build{" "}
              <GradientText>Premium</GradientText>
              <br />
              Websites That{" "}
              <span className="relative">
                Convert
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8.5C32 3.5 68 1.5 100 4.5C132 7.5 168 9.5 198 5.5"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Helping businesses establish a modern online presence through
              high-quality websites that are fast, responsive, accessible,
              scalable, and SEO-friendly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-secondary/50 rounded-xl hover:bg-secondary/80 transition-all duration-300 border border-border"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Lightning Fast</p>
                  <p className="text-xs text-muted-foreground">95+ Performance</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Fully Accessible</p>
                  <p className="text-xs text-muted-foreground">WCAG 2.2</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Modern Stack</p>
                  <p className="text-xs text-muted-foreground">Next.js & React</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <FloatingElement duration={4} y={15}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
                <Image
                  src="/images/hero-illustration.jpg"
                  alt="Premium web development - modern UI components and code floating in space"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </FloatingElement>

            {/* Floating badge cards */}
            <FloatingElement duration={3} delay={0.5} y={8} className="absolute -bottom-6 -left-6 z-10">
              <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Performance</p>
                    <p className="text-xs text-green-500 font-bold">98/100</p>
                  </div>
                </div>
              </div>
            </FloatingElement>

            <FloatingElement duration={3.5} delay={1} y={10} className="absolute -top-4 -right-4 z-10">
              <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">SEO Score</p>
                    <p className="text-xs text-primary font-bold">100/100</p>
                  </div>
                </div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
