import { constructMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { ContactForm } from "@/components/shared/contact-form";
import { Suspense } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Us",
  description: "Get in touch with us to discuss your web development project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <SectionHeader
            title="Let's Build Something Great"
            description="Have a project in mind? Fill out the form below or use our contact details to reach out."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-16 max-w-6xl mx-auto">
            <AnimatedContainer delay={0.1}>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <Suspense fallback={<div className="h-[500px] w-full animate-pulse bg-muted rounded-2xl border border-border/50" />}>
                <ContactForm />
              </Suspense>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2} className="space-y-8 lg:mt-0 mt-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">hello@nextwebhosting.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We typically reply within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+91 9579111964</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">Solapur, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
