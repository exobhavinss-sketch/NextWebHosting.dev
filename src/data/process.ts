import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and specific requirements to create a comprehensive project roadmap.",
    icon: "search"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Our designers craft beautiful, intuitive interfaces tailored to your brand, focusing on user experience and conversion optimization.",
    icon: "pen-tool"
  },
  {
    id: 3,
    title: "Development",
    description: "We build your website using modern technologies like Next.js and Tailwind CSS, ensuring high performance, accessibility, and scalability.",
    icon: "code"
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Rigorous testing across all devices and browsers ensures your website works flawlessly and meets all quality standards.",
    icon: "check-circle"
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "We handle the deployment process and provide ongoing support and maintenance to keep your website secure and up-to-date.",
    icon: "rocket"
  }
];
