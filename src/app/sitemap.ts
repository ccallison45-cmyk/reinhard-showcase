import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

const BASE_URL = "https://reinhard-showcase.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyPages = properties.map((p) => ({
    url: `${BASE_URL}/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: p.status === "Active" ? ("weekly" as const) : ("monthly" as const),
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/properties`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...propertyPages,
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
