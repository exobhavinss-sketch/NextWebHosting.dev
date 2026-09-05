import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About", href: "/about" },
  { title: "Process", href: "/process" },
  { title: "Pricing", href: "/pricing" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export const footerNavItems = {
  services: [
    { title: "Business Websites", href: "/services#business" },
    { title: "Portfolio Websites", href: "/services#portfolio" },
    { title: "Landing Pages", href: "/services#landing" },
    { title: "SEO Optimization", href: "/services#seo" },
    { title: "Website Redesign", href: "/services#redesign" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Process", href: "/process" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
  ],
};
