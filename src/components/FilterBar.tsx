"use client";

export type FilterOption = "all" | "for-sale" | "in-progress";

export function FilterBar({
  active,
  onChange,
}: {
  active: FilterOption;
  onChange: (filter: FilterOption) => void;
}) {
  const filters: { value: FilterOption; label: string }[] = [
    { value: "all", label: "All" },
    { value: "for-sale", label: "For Sale" },
    { value: "in-progress", label: "In Progress" },
  ];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            active === filter.value
              ? "bg-primary text-white"
              : "bg-white text-charcoal/70 hover:bg-primary/10"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
