export interface ChapterSection {
  title: string;
  subtitle?: string;
  content: string[];
  callout?: {
    type: "note" | "tip" | "important" | "quote";
    title?: string;
    text: string;
    author?: string;
  };
  bulletPoints?: {
    label?: string;
    text: string;
  }[];
  table?: {
    headers: string[];
    rows: (string | React.ReactNode)[][];
    caption?: string;
  };
}

export interface ChapterActivityConnection {
  activityTitle: string;
  activityType: "Academic (SLIIT City Uni)" | "Software Development" | "Entrepreneurship (LA'CEDRA)" | "Teamwork & Leadership";
  description: string;
}

export interface ChapterPracticalApplication {
  scenario: string;
  implementation: string;
}

export interface ChapterPersonalSynthesis {
  topicMeaning: string; // 1. Explain what the topic means
  coreConceptsLearned: string[]; // 2. Important concepts learned
  whyItMattersInIT: string; // 3. Why the topic matters in the IT industry
  activityConnections: ChapterActivityConnection[]; // 4. Connect to academic or professional activities
  practicalApplications: ChapterPracticalApplication[]; // 5. Identify practical applications
  personalReflection: { // 6. Include a personal reflection
    narrative: string;
    editableInputPrompt: string; // Placeholder for user's personal ongoing input
  };
  areasForImprovement: string[]; // 7. Identify areas for improvement
  keyTakeaways: string[]; // 8. Present key takeaways
}

export interface ChapterData {
  number: string; // e.g. "01"
  slug: string; // e.g. "01-introduction-johari-window"
  title: string;
  subtitle: string;
  academicLead: string;
  academicRole?: string;
  estimatedReadTime: string;
  category: "Self-Awareness & Mind" | "Career Architecture" | "Non-Verbal & Dialogue" | "Strategic Documentation" | "Executive Communication" | "Digital Netiquette" | "Customer Service" | "Neuroscience & EQ" | "Executive Protocol";
  overview: string;
  learningObjectives: string[];
  sections: ChapterSection[];
  keyTakeaways: string[];
  interactiveComponentId?: string;
  vivaPreparation?: {
    randomQuestions: string[];
    defenseProtocol: string[];
  };
  academicReadings: {
    citation: string;
    annotation: string;
    link?: string;
  }[];
  reflectionPrompts: {
    prompt: string;
    actionItem: string;
  }[];
  personalSynthesis?: ChapterPersonalSynthesis;
}
