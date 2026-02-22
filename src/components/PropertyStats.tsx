import { Property } from "@/data/types";
import { formatPrice } from "@/lib/utils";

export function PropertyStats({ property }: { property: Property }) {
  const isComplete = property.status === "Completed";

  const stats = [
    { label: "Bedrooms", value: property.bedrooms.toString() },
    { label: "Bathrooms", value: property.bathrooms.toString() },
    { label: "Sq Ft", value: property.squareFeet.toLocaleString() },
    { label: "Lot Size", value: property.lotSize },
    ...(isComplete
      ? [{ label: "Price", value: formatPrice(property.estimatedArv) }]
      : [{ label: "Est. Value", value: formatPrice(property.estimatedArv) }]),
    ...(property.yearBuilt
      ? [{ label: "Year Built", value: property.yearBuilt.toString() }]
      : []),
  ];

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg bg-white p-3 text-center shadow-sm"
        >
          <p className="text-lg font-bold text-primary">{stat.value}</p>
          <p className="text-xs text-charcoal/60">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
