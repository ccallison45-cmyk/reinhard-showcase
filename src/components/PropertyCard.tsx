import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/types";
import { formatPrice, getHeroPhoto } from "@/lib/utils";

export function PropertyCard({ property }: { property: Property }) {
  const hero = getHeroPhoto(property);
  const isComplete = property.status === "Completed";

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        {hero && (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
              isComplete ? "bg-stage-complete" : "bg-stage-active"
            }`}
          >
            {isComplete ? "For Sale" : "In Progress"}
          </span>
          <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white">
            {property.projectType}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-primary">
          {property.address}
        </h3>
        <p className="text-sm text-charcoal/60">{property.municipality}</p>

        <div className="mt-3 flex items-center gap-4 text-sm text-charcoal/70">
          <span>{property.bedrooms} Bed</span>
          <span className="text-charcoal/30">|</span>
          <span>{property.bathrooms} Bath</span>
          <span className="text-charcoal/30">|</span>
          <span>{property.squareFeet.toLocaleString()} sqft</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {isComplete ? formatPrice(property.estimatedArv) : "Coming Soon"}
          </span>
          {!isComplete && (
            <span className="text-xs font-medium text-stage-active">
              {property.stage}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
