export interface PersonalBrandingPillar {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export interface AcademicMilestone {
  institution: string;
  qualification: string;
  period: string;
  status: "Completed" | "In Progress";
  type: "Higher Education" | "Professional Qualification" | "Formal Schooling";
  description: string;
  highlights?: string[];
}

export interface EntrepreneurialVenture {
  name: string;
  role: string;
  period: string;
  scope: string;
  description: string;
  offerings: string[];
  keyOutcomes: string[];
}

export interface TechnicalInterestItem {
  name: string;
  category: "Software & Web" | "Systems & Infrastructure" | "Data & Security";
  description: string;
  keyDomains: string[];
}

export interface ExtracurricularActivity {
  clubName: string;
  organisation: string;
  period: string;
  category: string;
  description: string;
  takeaways: string[];
}

export interface DevelopmentGoal {
  pillar: string;
  objective: string;
  timeframe: string;
  strategy: string;
  metrics: string;
}

export interface StudentProfile {
  // Primary Student Identification
  fullName: string;
  displayName: string;
  studentId: string;
  institution: string;
  universityName: string; // compatibility alias
  faculty: string;
  programme: string;
  degreeProgramme: string; // compatibility alias
  academicLevel: string;
  academicYear: string;
  semester: string;
  batch: string;
  intake: string;
  avatarUrl: string;

  // Personal Introduction & Philosophy
  bioSummary: string;
  professionalPhilosophy: string;

  // Triad of Identity (Personal Branding)
  personalBranding: {
    itUndergraduate: PersonalBrandingPillar;
    entrepreneur: PersonalBrandingPillar;
    aspiringProfessional: PersonalBrandingPillar;
  };

  // Career Aspirations
  careerAspirations: string[];

  // Verified Contact Channels
  contact: {
    email: string;
    linkedIn: string;
    github: string;
    location: string;
  };

  // Audited Skills Taxonomy (Credibility Audit)
  auditedSkills: {
    currentlyDemonstrated: string[];
    developing: string[];
    futureGoals: string[];
  };

  // Workplace Skills Taxonomy (Technical, Soft, Transferable)
  skillsSummary: {
    technical: string[];
    soft: string[];
    transferable: string[];
  };

  // Character Principles
  characterPillars: {
    values: string[];
    beliefs: string[];
    attitudes: string[];
    characterTraits: string[];
  };

  // Comprehensive Authentic Background Data
  academicTimeline: AcademicMilestone[];
  entrepreneurialVentures: EntrepreneurialVenture[];
  technicalInterests: TechnicalInterestItem[];
  extracurricularActivities: ExtracurricularActivity[];
  developmentGoals: DevelopmentGoal[];
}
