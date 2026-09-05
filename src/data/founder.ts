export interface FounderHighlight {
  number: string;
  title: string;
  description: string;
}

export interface FounderSocialLink {
  name: string;
  url: string;
  ariaLabel: string;
  icon: "linkedin" | "github" | "instagram" | "twitter" | "email";
}

export interface FounderData {
  name: string;
  eyebrow: string;
  role: string;
  focus: string[];
  description: string[];
  shortDescription: string;
  image: string;
  imageAlt: string;
  isPlaceholderImage: boolean;
  quote: {
    text: string;
    attribution: string;
  };
  highlights: FounderHighlight[];
  socials: FounderSocialLink[];
  cta: {
    prompt: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const founderData: FounderData = {
  name: "Bhavin Shankur",
  eyebrow: "THE PERSON BEHIND NEXTWEBHOSTING",
  role: "Founder & CEO, NextWebHosting",
  focus: [
    "Web Development",
    "UI/UX",
    "Modern Web Technologies",
    "Digital Products",
    "AI-Assisted Development",
  ],
  description: [
    "Bhavin Shankur is the Founder & CEO of NextWebHosting, focused on building modern digital experiences that combine clean design, strong user experience, reliable engineering, and modern web technologies.",
    "With a strong interest in web development, AI, and emerging technologies, Bhavin is building NextWebHosting with a simple goal: to help businesses and professionals establish a powerful presence on the web through fast, responsive, accessible, and thoughtfully designed digital experiences.",
    "He believes great websites should not only look impressive, but should also be easy to use, performant, scalable, and designed around real business goals.",
    "NextWebHosting is being built with a long-term mindset: start small, focus on quality, learn continuously, serve clients professionally, and grow through real results.",
  ],
  shortDescription:
    "Bhavin Shankur is the Founder & CEO of NextWebHosting, building modern, high-performance websites and digital experiences with a strong focus on design, technology, usability, and continuous innovation.",
  image: "/images/founder-placeholder.jpg",
  imageAlt: "Bhavin Shankur — Founder & CEO of NextWebHosting (Editorial Silhouette)",
  isPlaceholderImage: true,
  quote: {
    text: "Build with purpose. Design with clarity. Grow with consistency.",
    attribution: "Bhavin Shankur",
  },
  highlights: [
    {
      number: "01",
      title: "Technology",
      description:
        "Exploring modern web technologies and AI-assisted development.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Focused on clean interfaces, intuitive UX, and polished digital experiences.",
    },
    {
      number: "03",
      title: "Vision",
      description:
        "Building NextWebHosting into a reliable long-term digital partner for businesses.",
    },
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhavin-shankur-8421a0371",
      ariaLabel: "Connect with Bhavin Shankur on LinkedIn",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/exobhavinss-sketch",
      ariaLabel: "View Bhavin Shankur's GitHub profile",
      icon: "github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bhavinnh/",
      ariaLabel: "Follow Bhavin Shankur on Instagram",
      icon: "instagram",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/BhavinShankur",
      ariaLabel: "Follow Bhavin Shankur on X (Twitter)",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:exobhavinss@gmail.com",
      ariaLabel: "Send an email to Bhavin Shankur",
      icon: "email",
    },
  ],
  cta: {
    prompt: "Have a project in mind?",
    buttonText: "Let's Talk",
    buttonHref: "/contact",
  },
};
