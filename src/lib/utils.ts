import { Property, PropertyPhoto, ProjectStage } from "@/data/types";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const STAGES: ProjectStage[] = [
  "Planning",
  "Demolition",
  "Foundation",
  "Framing",
  "Rough-In",
  "Finishing",
  "Final Inspection",
  "Complete",
];

export function getStageIndex(stage: ProjectStage): number {
  return STAGES.indexOf(stage);
}

export function getAllStages(): ProjectStage[] {
  return STAGES;
}

export function getHeroPhoto(property: Property): PropertyPhoto | undefined {
  return (
    property.photos.find((p) => p.category === "After") ??
    property.photos.find((p) => p.category === "During") ??
    property.photos[0]
  );
}
