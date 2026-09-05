import { constructMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for NextWebHosting services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col pt-24 pb-16">
        <section className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
          <SectionHeader
            title="Privacy Policy"
            description="Last updated: October 2023"
            align="left"
          />

          <AnimatedContainer delay={0.1} className="mt-8 prose prose-slate dark:prose-invert max-w-none">
            <h2>1. Information Collection</h2>
            <p>
              We collect information that you provide directly to us when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, phone number, company name, and project details.
            </p>
            <p>
              We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and referring URL.
            </p>

            <h2>2. Use of Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Communicating with you about your project or inquiries</li>
              <li>Sending administrative information, such as updates to our terms or policies</li>
              <li>Analyzing usage trends to improve user experience</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>
              We implement reasonable security measures to protect the confidentiality and integrity of your personal information. However, no data transmission over the internet or electronic storage system is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie preferences through your browser settings.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may use third-party services (such as Google Analytics or Vercel Analytics) that collect, monitor, and analyze data. These third-party service providers have their own privacy policies addressing how they use such information.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> privacy@nextwebhosting.com
            </p>
          </AnimatedContainer>
        </section>
      </main>
    </PageTransition>
  );
}
