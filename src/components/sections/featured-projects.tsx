"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";

const projects = [
  {
    title: "Restaurant Website",
    category: "Hospitality",
    description: "An elegant, dark-themed restaurant website with online reservation system, menu showcase, and immersive food photography layout.",
    image: "/images/portfolio-restaurant.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://aurum-ember-sigma.vercel.app/",
    githubUrl: "https://github.com/exobhavinss-sketch/Aurum-Ember",
  },
  {
    title: "Gym & Fitness",
    category: "Health & Fitness",
    description: "A bold, energetic fitness website with membership plans, class schedules, trainer profiles, and dynamic animations.",
    image: "/images/portfolio-gym.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Dental Clinic",
    category: "Healthcare",
    description: "A clean, trustworthy dental clinic website with appointment booking, service listings, and a calming, professional aesthetic.",
    image: "/images/portfolio-dental.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "React Hook Form"],
  },
  {
    title: "Real Estate",
    category: "Property",
    description: "A luxury real estate platform with property search, listing cards, location maps, and agent profiles.",
    image: "/images/portfolio-realestate.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-Commerce Boutique",
    category: "Retail",
    description: "A modern, high-converting e-commerce store with seamless checkout, inventory management, and beautiful product displays.",
    image: "/images/portfolio-startup.jpg",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Corporate Law Group",
    category: "Legal",
    description: "Professional and authoritative web presence for a corporate law firm with client portals and secure document sharing.",
    image: "/images/portfolio-lawfirm.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Eco-Friendly Resort",
    category: "Hospitality",
    description: "A visually stunning booking platform for a luxury eco-resort, featuring virtual tours and real-time availability.",
    image: "/images/portfolio-restaurant.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "FinTech Dashboard",
    category: "Technology",
    description: "A secure, data-rich financial dashboard with interactive charts, real-time tracking, and a sleek dark mode.",
    image: "/images/portfolio-startup.jpg",
    technologies: ["Next.js", "Recharts", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Creative Agency",
    category: "Creative",
    description: "An ultra-modern portfolio for a creative agency showcasing award-winning campaigns with cinematic scroll animations.",
    image: "/images/portfolio-portfolio.jpg",
    technologies: ["React", "Three.js", "Tailwind CSS"],
  },
  {
    title: "Luxury Real Estate",
    category: "Property",
    description: "High-end property listings platform offering detailed neighborhood guides, HD video tours, and agent scheduling.",
    image: "/images/portfolio-realestate.jpg",
    technologies: ["Next.js", "Prisma", "Tailwind CSS"],
  },
  {
    title: "Pediatric Clinic",
    category: "Healthcare",
    description: "A friendly and welcoming pediatric clinic website with patient registration forms and appointment reminders.",
    image: "/images/portfolio-dental.jpg",
    technologies: ["Next.js", "React Hook Form", "Tailwind CSS"],
  },
  {
    title: "Yoga Studio",
    category: "Health & Fitness",
    description: "A calming online hub for a yoga studio with integrated class streaming, schedule booking, and instructor profiles.",
    image: "/images/portfolio-gym.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "B2B SaaS Platform",
    category: "Technology",
    description: "A robust enterprise SaaS marketing site highlighting key features, security compliance, and ROI calculators.",
    image: "/images/portfolio-startup.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Family Dental Care",
    category: "Healthcare",
    description: "Comprehensive dental care platform featuring verified patient reviews, automated scheduling, and telehealth capabilities.",
    image: "/images/portfolio-dental.jpg",
    technologies: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Boutique Hotel",
    category: "Hospitality",
    description: "An immersive hotel experience website with integrated room booking, local guides, and concierge services.",
    image: "/images/portfolio-restaurant.jpg",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Commercial Property",
    category: "Property",
    description: "A commercial real estate directory for businesses to find office spaces, with advanced filtering and 3D floor plans.",
    image: "/images/portfolio-realestate.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Mapbox"],
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Featured Projects"
          description="A showcase of premium websites we've designed and developed for businesses across various industries."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - Website designed and developed by NextWebHosting`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.liveUrl ? (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg font-medium text-sm hover:bg-white/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg font-medium text-sm">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </span>
                    )}
                    {project.githubUrl ? (
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium text-sm backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <GithubIcon className="w-4 h-4" />
                        Source
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium text-sm backdrop-blur-sm">
                        <GithubIcon className="w-4 h-4" />
                        Source
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
