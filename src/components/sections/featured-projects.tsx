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
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg font-medium text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium text-sm backdrop-blur-sm">
                      <GithubIcon className="w-4 h-4" />
                      Source
                    </span>
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
