import { constructMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = constructMetadata({
  title: "Pricing",
  description: "Transparent and affordable pricing for premium web development services.",
  path: "/pricing",
});

const pricingTiers = [
  {
    name: "Student",
    price: "₹5,000",
    description: "Affordable and straightforward for students to build their personal portfolio or project site.",
    features: [
      "Up to 3 Pages",
      "Responsive Design",
      "Basic Contact Form",
      "Standard Performance",
      "14 Days Free Support",
    ],
    cta: "Get Student Plan",
    highlight: false,
  },
  {
    name: "Starter",
    price: "₹10,000",
    description: "Perfect for small businesses and individuals getting started.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "Social Media Links",
      "1 Month Free Support",
      "Standard Performance Tuning",
      "Basic Animations",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹30,000",
    description: "Ideal for growing businesses needing a strong online presence.",
    features: [
      "Up to 10 Pages",
      "Premium Custom Design",
      "CMS Integration (Blog/Portfolio)",
      "Advanced SEO Optimization",
      "Google Analytics Setup",
      "3 Months Free Support",
      "Advanced Performance Optimization",
      "Framer Motion Animations",
      "Newsletter Integration",
      "Priority Email Support",
    ],
    cta: "Choose Professional",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "Prices will be quoted after evaluating the specific requirements of the client.",
    features: [
      "Unlimited Pages",
      "Full Custom Web Application",
      "E-commerce Functionality",
      "Custom Backend/Database",
      "User Authentication",
      "API Integrations",
      "6 Months Free Support",
      "Dedicated Account Manager",
      "Premium Server Setup",
      "A/B Testing Setup",
      "Continuous SEO Monitoring",
      "24/7 Priority Support",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6 pt-8 pb-12 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
          <SectionHeader
            title="Simple, Transparent Pricing"
            description="Choose the perfect plan for your business needs. No hidden fees."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <AnimatedContainer
                key={tier.name}
                delay={index * 0.1}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  tier.highlight
                    ? "border-primary bg-primary/5 shadow-xl ring-1 ring-primary/20"
                    : "border-border bg-card shadow-sm"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {tier.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="text-muted-foreground mt-2 min-h-[40px]">
                    {tier.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  {tier.name !== "Enterprise" && (
                    <span className="text-muted-foreground">/project</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={tier.highlight ? "default" : "outline"}
                  className="w-full mt-auto"
                >
                  <Link href={tier.name === "Student" ? "/contact?plan=student" : "/contact"}>{tier.cta}</Link>
                </Button>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that every business is unique. If our standard packages don't fit your exact requirements, we'd be happy to create a tailored quote just for you.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
