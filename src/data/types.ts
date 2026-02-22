export type ProjectType = "New Construction" | "Renovation" | "Demolition" | "Addition";

export type ProjectStage =
  | "Planning"
  | "Demolition"
  | "Foundation"
  | "Framing"
  | "Rough-In"
  | "Finishing"
  | "Final Inspection"
  | "Complete";

export type PropertyStatus = "Active" | "Completed" | "On Hold";

export type PhotoCategory = "Before" | "During" | "After";

export interface PropertyPhoto {
  src: string;
  alt: string;
  category: PhotoCategory;
}

export interface Property {
  slug: string;
  address: string;
  municipality: string;
  projectType: ProjectType;
  stage: ProjectStage;
  status: PropertyStatus;
  description: string;
  highlights: string[];
  estimatedArv: number;
  startDate: string;
  expectedCompletion: string;
  completedDate?: string;
  photos: PropertyPhoto[];
  featured: boolean;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize: string;
  yearBuilt?: number;
  features: string[];
}
