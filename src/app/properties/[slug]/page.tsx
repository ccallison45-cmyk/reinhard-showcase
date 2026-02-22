import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyTimeline } from "@/components/PropertyTimeline";
import { PropertyStats } from "@/components/PropertyStats";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: property.address,
    description: property.description,
    openGraph: {
      images: property.photos[0]?.src ? [property.photos[0].src] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) notFound();

  const isComplete = property.status === "Completed";

  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-charcoal/50">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/properties" className="hover:text-primary">
            Properties
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{property.address}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {property.address}
            </h1>
            <p className="mt-1 text-charcoal/60">{property.municipality}</p>
          </div>
          <div className="flex gap-2">
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold text-white ${
                isComplete ? "bg-stage-complete" : "bg-stage-active"
              }`}
            >
              {isComplete ? "For Sale" : "In Progress"}
            </span>
            <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
              {property.projectType}
            </span>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-8">
          <PropertyGallery photos={property.photos} />
        </div>

        {/* Stats */}
        <div className="mt-8">
          <PropertyStats property={property} />
        </div>

        {/* Timeline */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-heading text-xl font-bold text-primary">
            Project Progress
          </h2>
          <PropertyTimeline currentStage={property.stage} />
          <div className="mt-4 flex justify-between text-xs text-charcoal/50">
            <span>Started: {formatDate(property.startDate)}</span>
            <span>
              {property.completedDate
                ? `Completed: ${formatDate(property.completedDate)}`
                : `Expected: ${formatDate(property.expectedCompletion)}`}
            </span>
          </div>
        </div>

        {/* Description + Features */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-primary">
                About This Property
              </h2>
              <p className="mt-3 leading-relaxed text-charcoal/70">
                {property.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {property.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="font-heading text-xl font-bold text-primary">
                Features
              </h2>
              <ul className="mt-3 space-y-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-charcoal/70"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-stage-complete"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-6 rounded-lg bg-primary p-6 text-center">
              <h3 className="font-heading text-lg font-bold text-white">
                Interested?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {isComplete
                  ? "Schedule a showing today."
                  : "Get updates on this project."}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
