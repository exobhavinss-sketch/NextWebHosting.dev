"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Quote } from "lucide-react";
import {
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  XTwitterIcon,
} from "@/components/shared/brand-icons";
import { founderData, type FounderData } from "@/data/founder";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export interface FounderSectionProps {
  data?: Partial<FounderData>;
  compact?: boolean;
  className?: string;
  id?: string;
}

export function FounderSection({
  data: customData,
  compact = false,
  className,
  id = "founder",
}: FounderSectionProps) {
  const data = { ...founderData, ...customData };
  const prefersReducedMotion = useReducedMotion();

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" />;
      case "github":
        return <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />;
      case "instagram":
        return <InstagramIcon className="w-4 h-4 transition-transform group-hover:scale-110" />;
      case "twitter":
        return <XTwitterIcon className="w-4 h-4 transition-transform group-hover:scale-110" />;
      case "email":
        return <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />;
      default:
        return null;
    }
  };

  return (
    <section
      id={id}
      aria-label="Founder and Leadership"
      className={cn(
        "relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background",
        className
      )}
    >
      {/* Decorative ambient lighting & technical grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto"
        >
          {/* =========================================================
              LEFT COLUMN: Editorial Portrait Presentation
             ========================================================= */}
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Decorative background aura and frame */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-tr from-primary/30 via-sky-400/20 to-primary/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                aria-hidden="true"
              />

              {/* Technical geometric accent markers */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-sky-400/40 rounded-br-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main portrait container */}
              <figure className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl shadow-primary/10">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle glass reflection overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Portrait footer card */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-white font-bold text-base tracking-wide">
                        {data.name}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                        <Sparkles className="w-3 h-3" />
                        Founder & CEO
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      NextWebHosting • Web Development & Digital Products
                    </p>
                  </div>
                </div>

                {/* Placeholder advisory badge */}
                {data.isPlaceholderImage && (
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      title="Editorial artwork placeholder. Official executive portrait will be updated here."
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-slate-900/85 backdrop-blur-md text-slate-300 border border-white/10 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      Editorial Placeholder
                    </span>
                  </div>
                )}
              </figure>

              {/* Quote card below portrait (Desktop & Tablet) */}
              <motion.blockquote
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="mt-6 w-full p-5 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/60 shadow-sm relative overflow-hidden"
              >
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-80" />
                  <div>
                    <p className="text-sm font-medium italic text-foreground/90 leading-relaxed">
                      &ldquo;{data.quote.text}&rdquo;
                    </p>
                    <cite className="block text-xs font-semibold text-muted-foreground mt-2 not-italic">
                      — {data.quote.attribution}
                    </cite>
                  </div>
                </div>
              </motion.blockquote>
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: Narrative, Vision, Highlights & Socials
             ========================================================= */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {/* Eyebrow badge */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {data.eyebrow}
              </span>
            </motion.div>

            {/* Header: Name & Role */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp} className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Meet <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">{data.name}</span>
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-muted-foreground">
                {data.role}
              </p>
            </motion.div>

            {/* Professional Focus Tags */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="flex flex-wrap gap-2 pt-1"
              aria-label="Founder professional focus areas"
            >
              {data.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary/60 text-foreground/80 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Narrative Description */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed pt-2"
            >
              {compact ? (
                <p className="text-foreground/90 font-normal">
                  {data.shortDescription}
                </p>
              ) : (
                data.description.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-foreground/90 font-normal" : ""}>
                    {paragraph}
                  </p>
                ))
              )}
            </motion.div>

            {/* 3 Strategic Highlight Cards */}
            <motion.div
              variants={prefersReducedMotion ? undefined : staggerContainer}
              className="grid sm:grid-cols-3 gap-4 pt-2"
            >
              {data.highlights.map((highlight) => (
                <motion.div
                  key={highlight.number}
                  variants={prefersReducedMotion ? undefined : fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="block text-xs font-mono font-bold text-primary tracking-wider mb-2">
                      {highlight.number}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-sky-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links & Contact Action */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeInUp}
              className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              {/* Social Channels */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Connect Professionally
                </span>
                <div className="flex items-center gap-2.5">
                  {data.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.icon === "email" ? undefined : "_blank"}
                      rel={social.icon === "email" ? undefined : "noopener noreferrer"}
                      aria-label={social.ariaLabel}
                      title={social.name}
                      className="group flex items-center justify-center w-10 h-10 rounded-xl bg-background border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none shadow-sm"
                    >
                      {renderSocialIcon(social.icon)}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="flex flex-col sm:items-end gap-2">
                <span className="text-xs font-semibold text-muted-foreground">
                  {data.cta.prompt}
                </span>
                <Link
                  href={data.cta.buttonHref}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                >
                  {data.cta.buttonText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Structured Data: Schema.org Person metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.name,
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "NextWebHosting",
              url: "https://nextwebhosting.dev",
            },
            email: "mailto:exobhavinss@gmail.com",
            sameAs: [
              "https://www.linkedin.com/in/bhavin-shankur-8421a0371",
              "https://github.com/exobhavinss-sketch",
              "https://www.instagram.com/bhavinnh/",
              "https://x.com/BhavinShankur",
            ],
            knowsAbout: data.focus,
          }),
        }}
      />
    </section>
  );
}

export default FounderSection;
