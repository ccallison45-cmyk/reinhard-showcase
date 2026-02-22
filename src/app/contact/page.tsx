import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about our West Hartford properties. Schedule a showing or ask about our current projects.",
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-2 text-charcoal/60">
          Interested in a property or want to learn more about our work?
          We&apos;d love to hear from you.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-primary">
                Contact Information
              </h2>
              <div className="mt-4 space-y-3 text-sm text-charcoal/70">
                <p>
                  <span className="font-medium text-charcoal">Phone:</span>
                  <br />
                  (860) 555-0100
                </p>
                <p>
                  <span className="font-medium text-charcoal">Email:</span>
                  <br />
                  info@vonhollander.com
                </p>
                <p>
                  <span className="font-medium text-charcoal">Location:</span>
                  <br />
                  West Hartford, CT 06107
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-primary p-6 text-white">
              <h2 className="font-heading text-lg font-bold">Our Process</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="font-bold text-accent">1.</span>
                  We find undervalued properties in great neighborhoods
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-accent">2.</span>
                  Expert design and planning with top contractors
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-accent">3.</span>
                  Quality construction with full transparency
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-accent">4.</span>
                  Deliver move-in ready homes families love
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
