import Link from "next/link";
import { properties } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

export function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 text-charcoal/60">
            From new construction to expert renovations — explore our latest work
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/properties"
            className="inline-block rounded-md border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
