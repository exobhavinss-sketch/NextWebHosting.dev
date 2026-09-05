import { PageTransition } from "@/components/shared/page-transition";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <main className="flex min-h-[80vh] flex-col items-center justify-center pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedContainer delay={0.1} className="relative inline-block">
            <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-3xl -z-10 rounded-full" />
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
              Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <Link href="/">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              <Link href="/blog">
                <Search className="h-4 w-4" />
                Browse Articles
              </Link>
            </Button>
          </AnimatedContainer>
        </div>
      </main>
    </PageTransition>
  );
}
