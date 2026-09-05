import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and personal brands looking to establish an online presence.",
    price: "₹15,000",
    period: "starting at",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Week Delivery",
      "1 Month Free Support"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses that need a comprehensive website with advanced features.",
    price: "₹35,000",
    period: "starting at",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "CMS Integration (Blog/Portfolio)",
      "Performance Optimization",
      "Google Analytics Setup",
      "2-3 Weeks Delivery",
      "3 Months Free Support"
    ],
    highlighted: true,
    cta: "Choose Professional"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations requiring robust, scalable, and highly customized web solutions.",
    price: "₹75,000+",
    period: "starting at",
    features: [
      "Unlimited Pages",
      "Premium Custom Design",
      "Complex Integrations (API/DB)",
      "E-commerce Functionality",
      "Advanced Animations",
      "Priority Support",
      "Custom Delivery Timeline",
      "6 Months Free Support"
    ],
    highlighted: false,
    cta: "Contact Us"
  }
];
