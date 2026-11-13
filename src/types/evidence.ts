export interface EvidenceArtefact {
  id: string;
  title: string;
  category: "Interviews" | "Documentation" | "Correspondence" | "Evaluations" | "Presentations" | "Certificates";
  chapterReference: string;
  description: string;
  dateCreated: string;
  fileType: "PDF" | "Video Recording" | "Audio Log" | "Transcript" | "Certificate";
  skillsDemonstrated: string[];
  reflectionSummary: string;
  placeholderText?: string;
  actionUrl?: string;
}
