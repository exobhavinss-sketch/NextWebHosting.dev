export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TechItem {
  name: string;
  icon: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  content: string;
  source: string;
  role: string;
}
