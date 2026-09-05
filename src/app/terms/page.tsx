import { constructMetadata } from "@/lib/metadata";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedContainer } from "@/components/shared/animated-container";

export const metadata = constructMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for NextWebHosting services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col pt-24 pb-16">
        <section className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
          <SectionHeader
            title="Terms & Conditions"
            description="Last updated: October 2023"
            align="left"
          />

          <AnimatedContainer delay={0.1} className="mt-8 prose prose-slate dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              We provide web development, design, and related digital services as outlined in the specific proposal or contract agreed upon between NextWebHosting and the client. The scope of work will be defined in a formal agreement before project commencement.
            </p>

            <h2>3. Payment Terms</h2>
            <p>
              Unless otherwise specified in a formal contract, our standard payment terms require a 50% upfront deposit before work begins, with the remaining balance due upon project completion and prior to final delivery or launch.
            </p>
            <p>
              Late payments may incur additional fees. We reserve the right to suspend services or withhold final deliverables if payment is not received.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, the client retains ownership of the final deliverables (website, custom code, design assets). NextWebHosting retains the right to display the completed project in our portfolio and promotional materials unless a Non-Disclosure Agreement (NDA) is signed.
            </p>
            <p>
              We retain ownership of any pre-existing code, libraries, or tools used in the development process that are not custom-built specifically for the client.
            </p>

            <h2>5. Liability</h2>
            <p>
              NextWebHosting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
            </p>

            <h2>6. Termination</h2>
            <p>
              Either party may terminate the agreement with written notice if the other party breaches a material term of the agreement. In the event of termination, the client shall pay for all work completed up to the date of termination.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact us at:
              <br />
              <strong>Email:</strong> legal@nextwebhosting.com
            </p>
          </AnimatedContainer>
        </section>
      </main>
    </PageTransition>
  );
}
