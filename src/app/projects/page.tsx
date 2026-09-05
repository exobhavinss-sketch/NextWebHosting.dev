import { constructMetadata } from "@/lib/metadata";
import PageTransition from "@/components/shared/page-transition";
import AnimatedContainer from "@/components/shared/animated-container";
import PortfolioClient from "@/app/portfolio/portfolio-client";
import { Zap, Shield, Search, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = constructMetadata({
  title: "Client Projects & Case Studies",
  description:
    "Explore our complete portfolio of client websites, digital platforms, and production case studies built with modern web technologies.",
  path: "/projects",
});

const qualityHighlights = [
  {
    icon: Zap,
    title: "Performance 95+",
    desc: "Optimized Core Web Vitals, sub-second load times, and lightweight bundles.",
  },
  {
    icon: Shield,
    title: "WCAG 2.2 Accessibility",
    desc: "100% keyboard navigable, high color contrast, and screen reader tested.",
  },
  {
    icon: Search,
    title: "Search Engine Optimized",
    desc: "JSON-LD schema, dynamic metadata, semantic markup, and crawlability.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    desc: "Fluid layouts tested seamlessly across mobile, tablet, laptop, and ultra-wide screens.",
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pb-24 pt-32">
        <AnimatedContainer animation="fadeInUp" className="container mx-auto px-4 mb-16 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-4">
            Showcase & Standards
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Production Projects & Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every project we deliver adheres to rigorous engineering standards. Explore our live builds across hospitality, healthcare, luxury property, legal counsel, and technology startups.
          </p>
        </AnimatedContainer>

        {/* Quality Standard Badges */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Filter Grid */}
        <section className="container mx-auto px-4 mb-24">
          <PortfolioClient />
        </section>

        {/* Bottom CTA Banner */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-10 sm:p-16 text-white text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Have a Website Project in Mind?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Partner with NextWebHosting to build a world-class digital experience designed for speed, beauty, and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-md">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/services">Browse All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
