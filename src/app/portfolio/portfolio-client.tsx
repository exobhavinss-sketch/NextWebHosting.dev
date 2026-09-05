"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: "restaurant",
    title: "Gourmet Haven",
    category: "Hospitality",
    description: "A premium restaurant website featuring an interactive menu, online reservations, and beautiful food galleries.",
    image: "/images/portfolio-restaurant.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: ["Real-time Booking", "CMS Integration", "Mobile Responsive"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "gym",
    title: "FitCore Elite",
    category: "Healthcare",
    description: "High-energy fitness center website with class scheduling, trainer profiles, and membership signups.",
    image: "/images/portfolio-gym.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Class Schedule", "Member Portal", "Payment Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "dental",
    title: "SmileCare Clinic",
    category: "Healthcare",
    description: "Professional dental clinic website emphasizing trust, with patient forms and online appointment booking.",
    image: "/images/portfolio-dental.jpg",
    technologies: ["Next.js", "React Hook Form", "Tailwind CSS"],
    features: ["Appointment Booking", "Patient Portal", "Secure Forms"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "realestate",
    title: "Prime Properties",
    category: "Property",
    description: "Modern real estate platform with advanced property search, virtual tours, and agent directories.",
    image: "/images/portfolio-realestate.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Advanced Search", "Map Integration", "Virtual Tours"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "lawfirm",
    title: "Justice Partners",
    category: "Legal",
    description: "Authoritative law firm website detailing practice areas, attorney credentials, and secure client intake.",
    image: "/images/portfolio-lawfirm.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    features: ["Secure Contact", "Case Studies", "Blog Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "portfolio",
    title: "Creative Studio",
    category: "Creative",
    description: "A visually stunning portfolio for a design agency showcasing their best work with smooth page transitions.",
    image: "/images/portfolio-portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    features: ["Custom Animations", "Gallery View", "Image Optimization"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "startup",
    title: "TechFlow SaaS",
    category: "Technology",
    description: "Sleek landing page and dashboard for a modern SaaS startup, focused on conversions and user experience.",
    image: "/images/portfolio-startup.jpg",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: ["Auth Integration", "Pricing Tables", "Dashboard UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Hospitality", "Healthcare", "Property", "Legal", "Creative", "Technology"];

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        key={activeCategory}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            layout
            className="group bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} - Website designed by NextWebHosting`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a
                  href={project.liveUrl}
                  className="p-3 bg-white text-primary rounded-full hover:bg-white/90 transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={project.githubUrl}
                  className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  aria-label={`View source code of ${project.title}`}
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-secondary/50 text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
