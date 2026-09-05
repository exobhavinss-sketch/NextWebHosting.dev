import { constructMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our web development services, pricing, and process.",
  path: "/faq",
});

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services do you offer?",
        a: "We offer end-to-end web development services, including custom website design, e-commerce solutions, web application development, SEO optimization, and ongoing maintenance.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A standard 5-page website typically takes 2-3 weeks from start to finish. More complex projects, like custom web applications or e-commerce sites, can take 6-12 weeks depending on the requirements.",
      },
      {
        q: "Do I own the website after it's finished?",
        a: "Yes, absolutely. Once the project is completed and fully paid for, you retain 100% ownership of the website, its design, and all associated assets.",
      },
    ],
  },
  {
    category: "Development & Process",
    questions: [
      {
        q: "What technologies do you use?",
        a: "We specialize in modern web technologies like Next.js, React, TypeScript, and Tailwind CSS to ensure your website is fast, secure, and scalable.",
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Yes! All our websites are built with a mobile-first approach and are fully responsive across all devices, including smartphones, tablets, and desktops.",
      },
      {
        q: "Can I update the website content myself?",
        a: "Yes, we can integrate a Content Management System (CMS) like Sanity or WordPress if required, allowing you to easily update text, images, and blog posts without coding knowledge.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "How do your payment terms work?",
        a: "We typically request a 50% upfront deposit to begin the project, and the remaining 50% upon project completion and before the site goes live. We also offer milestone-based payments for larger projects.",
      },
      {
        q: "Are there any hidden costs?",
        a: "No hidden costs. Our initial quote covers all agreed-upon features. However, costs for third-party services like domain registration, hosting, and premium plugins are usually separate unless explicitly included in the contract.",
      },
      {
        q: "Do you offer maintenance packages?",
        a: "Yes, we offer ongoing maintenance and support packages starting from ₹5,000/month to ensure your website stays secure, updated, and performs optimally.",
      },
    ],
  },
  {
    category: "Technical & SEO",
    questions: [
      {
        q: "Do you provide web hosting?",
        a: "While we are a web development agency, we can set up and manage hosting for you on reliable platforms like Vercel, AWS, or DigitalOcean.",
      },
      {
        q: "Will my website be SEO optimized?",
        a: "Yes, basic on-page SEO is included in all our packages. We ensure proper HTML structure, meta tags, fast loading speeds, and mobile responsiveness. We also offer advanced SEO packages for competitive keywords.",
      },
      {
        q: "How do you handle website security?",
        a: "We follow industry best practices for security, including implementing SSL certificates, secure authentication, protection against common vulnerabilities (XSS, CSRF), and regular dependency updates.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        q: "What if I need help after the website goes live?",
        a: "All our packages include a period of free support (1-6 months depending on the tier) for bug fixes and minor adjustments. After that, we offer affordable hourly rates or monthly maintenance plans.",
      },
      {
        q: "How do I communicate with the team during the project?",
        a: "We use email and project management tools like Notion or Trello. We also schedule regular video calls via Google Meet to discuss progress and gather feedback.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services, process, and pricing."
            align="center"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-12">
            {faqs.map((category, index) => (
              <AnimatedContainer key={category.category} delay={index * 0.1}>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${index}-${i}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedContainer>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
