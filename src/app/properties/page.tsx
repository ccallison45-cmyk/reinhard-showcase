"use client";

import { useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { FilterBar, FilterOption } from "@/components/FilterBar";

export default function PropertiesPage() {
  const [filter, setFilter] = useState<FilterOption>("all");

  const filtered = properties.filter((p) => {
    if (filter === "for-sale") return p.status === "Completed";
    if (filter === "in-progress") return p.status === "Active";
    return true;
  });

  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Our Properties
            </h1>
            <p className="mt-2 text-charcoal/60">
              {filtered.length} {filtered.length === 1 ? "property" : "properties"} available
            </p>
          </div>
          <FilterBar active={filter} onChange={setFilter} />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-charcoal/50">
            No properties match this filter.
          </p>
        )}
      </div>
    </div>
  );
}
