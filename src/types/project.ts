export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Tools"
  | "Infrastructure";

export interface TechnologySkill {
  name: string;
  category: TechCategory;
  proficiency: string; // Editable placeholder e.g. "[Editable: Proficient / Intermediate / Familiar]"
  description: string;
  badge?: string;
}

export interface ProjectEvidence {
  caption: string;
  type: "Screenshot" | "Architecture Diagram" | "System Terminal" | "Assessment Document" | "Mobile Wireframe";
  placeholderText: string;
  note?: string;
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Development" | "Systems & Cloud" | "E-Commerce" | "Mobile Concept" | "Cybersecurity";
  status: "Completed" | "Concept / In Development" | "Academic Project" | "Live Client Venture";
  period: string;
  overview: string;
  objectives: string[];
  technologiesUsed: string[];
  myResponsibilities: string[];
  challengesEncountered: string[];
  solutionsImplemented: string[];
  skillsDemonstrated: string[];
  learningOutcomes: string[];
  evidence: ProjectEvidence[];
  liveUrlPlaceholder?: string;
  repoUrlPlaceholder?: string;
}
