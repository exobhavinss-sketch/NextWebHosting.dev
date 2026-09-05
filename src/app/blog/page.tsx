import { constructMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Construction } from "lucide-react";

export const metadata = constructMetadata({
  title: "Blog",
  description: "Insights and articles on web development, design, and technology.",
  path: "/blog",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col pt-24 pb-16 items-center justify-center">
        <section className="container px-4 md:px-6 py-12 text-center max-w-3xl mx-auto">
          <AnimatedContainer delay={0.1} className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Construction className="h-16 w-16" />
            </div>
          </AnimatedContainer>
          
          <SectionHeader
            title="Blog Coming Soon"
            description="We are working hard to bring you insightful articles on web development, Next.js, React, and digital strategy. Stay tuned!"
            align="center"
          />

          <AnimatedContainer delay={0.2} className="mt-12 p-8 border rounded-3xl bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-4">Get Notified When We Launch</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to be the first to know when our blog goes live.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3} className="mt-12 flex items-center justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedContainer>
        </section>
      </main>
    </PageTransition>
  );
}
