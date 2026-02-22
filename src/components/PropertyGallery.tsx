"use client";

import Image from "next/image";
import { useState } from "react";
import { PropertyPhoto, PhotoCategory } from "@/data/types";

export function PropertyGallery({ photos }: { photos: PropertyPhoto[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<PhotoCategory | "All">(
    "All"
  );

  const filtered =
    categoryFilter === "All"
      ? photos
      : photos.filter((p) => p.category === categoryFilter);

  const categories: (PhotoCategory | "All")[] = ["All", "Before", "During", "After"];
  const availableCategories = categories.filter(
    (cat) => cat === "All" || photos.some((p) => p.category === cat)
  );

  const currentPhoto = filtered[selectedIndex] || filtered[0];

  return (
    <div>
      {/* Main image */}
      <div className="relative h-72 overflow-hidden rounded-lg sm:h-96 lg:h-[500px]">
        {currentPhoto && (
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
        )}
      </div>

      {/* Category tabs */}
      <div className="mt-4 flex gap-2">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategoryFilter(cat);
              setSelectedIndex(0);
            }}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              categoryFilter === cat
                ? "bg-primary text-white"
                : "bg-white text-charcoal/70 hover:bg-primary/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
        {filtered.map((photo, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all ${
              index === selectedIndex
                ? "ring-2 ring-accent"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
