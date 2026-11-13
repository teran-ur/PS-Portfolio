import { StudentProfile } from "@/types/student";

/**
 * ============================================================================
 * CENTRALISED PERSONAL INFORMATION & IDENTITY CONFIGURATION
 * ============================================================================
 * Definitive source of truth for the Professional Skills E-Portfolio.
 * Written in a natural, authentic undergraduate voice without corporate jargon.
 * ============================================================================
 */

export const STUDENT_PROFILE: StudentProfile = {
  // Primary Student Identification
  fullName: "Teran Rathnayake",
  displayName: "Teran Rathnayake",
  studentId: "SA25610122",
  institution: "SLIIT City Uni",
  universityName: "SLIIT City Uni",
  faculty: "Faculty of Computing",
  programme: "Higher Diploma in Information Technology (HDIT)",
  degreeProgramme: "Higher Diploma in Information Technology (HDIT)",
  academicLevel: "Year 2 Semester 2",
  academicYear: "Year 2",
  semester: "Semester 2",
  batch: "February 2025",
  intake: "February 2025 Batch",
  avatarUrl: "/images/profile.png",

  // Natural Personal Introduction
  bioSummary:
    "I am an IT undergraduate at SLIIT City Uni currently in Year 2 Semester 2 of the Higher Diploma in Information Technology (February 2025 Batch). My background combines software development, cloud deployment, and hands-on business experience as the Co-Founder of LA'CEDRA. I started my education at Prince of Wales College and completed diplomas in IT and English at IMBS Green Campus. In this portfolio, I connect what I've learned in the Professional Skills curriculum with my day-to-day work as a developer and student.",

  // Personal Philosophy
  professionalPhilosophy:
    "Good software is more than clean code—it requires clear communication, honest teamwork, and the ability to listen to users and teammates.",

  // Personal Branding: The Triad of Identity
  personalBranding: {
    // Aspect 1: IT Undergraduate
    itUndergraduate: {
      title: "IT Undergraduate",
      subtitle: "Software Engineering & Digital Solutions",
      description:
        "Studying core computer science disciplines, web technologies, and database design. I enjoy building practical web applications and learning how modern systems scale.",
      focusAreas: [
        "Full-Stack Web Development (React, Next.js)",
        "Relational & Document Databases",
        "Cloud Hosting & Deployment (DigitalOcean, Apache)",
        "System Analysis & Clean Code Principles",
      ],
    },

    // Aspect 2: Entrepreneur
    entrepreneur: {
      title: "Entrepreneur",
      subtitle: "Business Development & Operations",
      description:
        "Co-Founder of LA'CEDRA. Gaining firsthand experience in software product development, client communications, requirements analysis, and delivering modern digital systems.",
      focusAreas: [
        "Venture Building & Digital Systems Delivery",
        "Client Requirement Gathering & Scoping",
        "Custom Web & POS Solutions Development",
        "Small Team Leadership & Collaboration",
      ],
    },

    // Aspect 3: Aspiring IT Professional
    aspiringProfessional: {
      title: "Aspiring IT Professional",
      subtitle: "Continuous Technical & Interpersonal Growth",
      description:
        "Focusing on the soft skills that make an engineer effective: active listening, structured presentations, emotional regulation under pressure, and professional ethics.",
      focusAreas: [
        "Emotional Intelligence (EQ) & Self-Regulation",
        "The 7 C's of Clear Communication",
        "Constructive Feedback & Johari Self-Awareness",
        "Ethical Responsibility in Technology",
      ],
    },
  },

  // Career Aspirations & Trajectory
  careerAspirations: [
    "Full-Stack Software Engineer",
    "Solutions Architect & Cloud Developer",
    "Technology Entrepreneur & Product Builder",
  ],

  // Contact & Network Coordinates
  contact: {
    email: "teran.rathnayake@my.sliit.lk",
    linkedIn: "https://linkedin.com/in/teranrathnayake",
    github: "https://github.com/teranrathnayake",
    location: "Colombo, Sri Lanka",
  },

  // Personal Credibility Audit (Currently Demonstrated, Developing, Future Goals)
  auditedSkills: {
    currentlyDemonstrated: [
      "Responsive Frontend Development (React, Next.js, HTML5, CSS3, Tailwind CSS)",
      "Server-Side Scripting & Backend Web Applications with Node.js & PHP",
      "Relational Database Design with MySQL",
      "Cloud VPS Deployment & Linux Server Administration (DigitalOcean, Apache)",
      "Basic Network Simulation (Cisco Packet Tracer)",
      "Structured Meeting Participation & Technical Presentation",
    ],
    developing: [
      "TypeScript Static Architecture & Advanced Next.js Patterns",
      "NoSQL Database Integration (MongoDB, Firebase)",
      "Client Contract Negotiations & Commercial Scoping",
      "Vocal Poise & Telephone Conflict De-escalation (HEAT Method)",
      "Automated Testing & Continuous Integration (CI/CD)",
    ],
    futureGoals: [
      "Enterprise Cloud Architecture & Distributed Microservices",
      "Advanced Cybersecurity Penetration Testing & Hardening",
      "Scaling Automated Systems & Client Deployments at LA'CEDRA",
      "Completing a Bachelor's Degree in Software Engineering",
    ],
  },

  // Tripartite Workplace Skills Taxonomy
  skillsSummary: {
    technical: [
      "Web Engineering (HTML, CSS, JavaScript, React, Next.js, TypeScript)",
      "Backend & Servers (PHP, Node.js, Apache, Linux)",
      "Databases (MySQL, MongoDB, Firebase)",
      "Tools (Git, GitHub, VS Code, Android Studio, Cisco Packet Tracer)",
    ],
    soft: [
      "Emotional Intelligence & Self-Regulation (6-10s breathing pause)",
      "Active Listening & Receiving Constructive Code Review Feedback",
      "Clear Spoken & Written Communication (7 C's)",
      "Team Collaboration & Empathy in High-Pressure Sprints",
    ],
    transferable: [
      "Project & Time Management Across Simultaneous Commitments",
      "Practical Problem-Solving Under Real Server Outages",
      "Business Systems Operations & Client Communications (LA'CEDRA)",
      "Technical Documentation & Presentation Skills",
    ],
  },

  // Character Principles
  characterPillars: {
    values: [
      "Honesty & Transparent Reporting (No hidden bugs)",
      "Accountability & Ownership of Code & Commitments",
      "Fairness, Respect & Constructive Teamwork",
    ],
    beliefs: [
      "Growth Mindset (Carol Dweck): Setbacks are data points to learn from",
      "Self-Efficacy: Confidence built through hands-on practice",
      "Internal Locus of Control: Taking personal responsibility for outcomes",
    ],
    attitudes: [
      "Curious Problem-Solving over Frustration",
      "Intellectual Humility: Welcoming critique from peers and mentors",
      "Respect for Different Roles: Valuing both technical and non-technical teammates",
    ],
    characterTraits: [
      "Integrity in Academic & Commercial Work",
      "Consistency & Follow-Through on Tasks",
      "Empathy & Social Responsibility",
    ],
  },

  // Academic Timeline (Editorial Chronological Record)
  academicTimeline: [
    {
      institution: "SLIIT City Uni",
      qualification: "Higher Diploma in Information Technology (HDIT)",
      period: "February 2025 – Present",
      status: "In Progress",
      type: "Higher Education",
      description:
        "Currently in Year 2 Semester 2 of the HDIT program. Studying software engineering, database systems, networking, and the nine-pillar Professional Skills curriculum led by Senior Lecturer Mrs. Ishara Raviharee Weerasinghe.",
      highlights: [
        "Coursework: Software Engineering, Database Systems, Web Development, Computer Security",
        "Professional Skills: Johari self-awareness, meeting governance, job interviews, viva defense",
        "Academic Level: Year 2 Semester 2 (February 2025 Batch)",
      ],
    },
    {
      institution: "IMBS Green Campus",
      qualification: "Diploma in Information Technology",
      period: "Completed",
      status: "Completed",
      type: "Professional Qualification",
      description:
        "Completed a practical diploma covering programming fundamentals, computer hardware, database basics, and office applications.",
      highlights: [
        "Core Modules: Programming logic, databases, web design, computing concepts",
        "Hands-on lab work and technical coursework",
      ],
    },
    {
      institution: "IMBS Green Campus",
      qualification: "Diploma in English",
      period: "Completed",
      status: "Completed",
      type: "Professional Qualification",
      description:
        "Completed a comprehensive English language diploma emphasizing professional communication, formal grammar, presentation skills, and written business correspondence.",
      highlights: [
        "Focus: Spoken English, presentation delivery, written correspondence, grammar",
        "Helped build clear communication skills for academic and client work",
      ],
    },
    {
      institution: "Prince of Wales College",
      qualification: "Schooling (Primary & Secondary)",
      period: "January 2015 – January 2023",
      status: "Completed",
      type: "Formal Schooling",
      description:
        "Completed eight foundational years of schooling in Moratuwa. Built a strong interest in science, invention, and sports through active involvement in student clubs.",
      highlights: [
        "Active member of Astronomy, New Inventor's, Aeronautical, and Athletics Clubs",
        "Developed curiosity, teamwork, and athletic discipline during formative years",
      ],
    },
  ],

  // Entrepreneurial Ventures
  entrepreneurialVentures: [
    {
      name: "LA'CEDRA",
      role: "Co-Founder",
      period: "Co-Founded",
      scope: "Web Development & Digital Systems",
      description:
        "Co-founded an IT-focused initiative providing custom web development, business management tools, and POS solutions for local small businesses looking to digitize their operations.",
      offerings: [
        "Multi-Page Corporate & Promotional Websites",
        "Business Management & Workflow Tools",
        "Point of Sale (POS) Solutions for Retail",
        "Digital Presence Consulting & Support",
      ],
      keyOutcomes: [
        "Collaborated on designing and building the official LA'CEDRA corporate website.",
        "Gathered requirements directly from clients and scoped deliverable timelines.",
        "Applied modern frontend technologies (React, Next.js, Tailwind CSS) to real client work.",
      ],
    },
  ],

  // Technical Interests (7 Core Domains)
  technicalInterests: [
    {
      name: "Full-Stack Web Development",
      category: "Software & Web",
      description:
        "Building responsive user interfaces with Next.js, React, and Tailwind CSS, connected to server-side APIs and databases.",
      keyDomains: ["Next.js & React", "TypeScript / JavaScript", "Tailwind CSS", "REST APIs"],
    },
    {
      name: "Software Engineering",
      category: "Software & Web",
      description:
        "Learning clean architecture, modular design, and how to structure code so that other developers can understand and maintain it.",
      keyDomains: ["System Design Principles", "Clean Code & Refactoring", "Agile Sprints", "Version Control"],
    },
    {
      name: "Database Management",
      category: "Data & Security",
      description:
        "Structuring relational databases in MySQL and experimenting with document-based storage in MongoDB and Firebase.",
      keyDomains: ["Relational Schema Design", "SQL Queries & Joins", "Normalization", "Firebase Firestore"],
    },
    {
      name: "Cybersecurity",
      category: "Data & Security",
      description:
        "Understanding common vulnerabilities, network threat models, secure coding practices, and human factors in security.",
      keyDomains: ["Vulnerability Assessment", "Secure Coding Basics", "Authentication & Access", "Network Hardening"],
    },
    {
      name: "Cloud Infrastructure",
      category: "Systems & Infrastructure",
      description:
        "Deploying web applications to live cloud servers (like DigitalOcean VPS), configuring Apache, and exploring Docker containers.",
      keyDomains: ["DigitalOcean Droplets", "Apache Web Server", "Linux Terminal & SSH", "Docker Basics"],
    },
    {
      name: "Networking",
      category: "Systems & Infrastructure",
      description:
        "Studying network protocols, IP subnetting, routing, and client-server architecture using tools like Cisco Packet Tracer.",
      keyDomains: ["TCP/IP & DNS", "Subnetting & Routing", "Cisco Packet Tracer", "Client-Server Model"],
    },
    {
      name: "Application Development",
      category: "Software & Web",
      description:
        "Designing practical applications and mobile concepts (such as ApPoint) that solve everyday problems for people in Sri Lanka.",
      keyDomains: ["Mobile UI Concepts", "Android Studio Basics", "POS Architecture", "User Journey Design"],
    },
  ],

  // Extracurricular Activities (Prince of Wales College)
  extracurricularActivities: [
    {
      clubName: "Astronomy Club",
      organisation: "Prince of Wales College",
      period: "School Years",
      category: "Science & Observation",
      description:
        "Participated in stargazing sessions, studied planetary systems and celestial mechanics, and built an early appreciation for scientific observation and empirical data.",
      takeaways: [
        "Developed curiosity about science, physics, and natural systems.",
        "Learned patience and systematic observation during night-sky workshops.",
      ],
    },
    {
      clubName: "New Inventor's Club",
      organisation: "Prince of Wales College",
      period: "School Years",
      category: "Innovation & Problem Solving",
      description:
        "Worked on simple hands-on invention challenges and prototypes, learning how to take an idea from a rough sketch to a functioning model.",
      takeaways: [
        "Fostered a builder's mindset: finding a problem and trying to fix it.",
        "Learned how to iterate when the first prototype inevitably fails.",
      ],
    },
    {
      clubName: "Aeronautical Club",
      organisation: "Prince of Wales College",
      period: "School Years",
      category: "Aviation & Aerodynamics",
      description:
        "Explored the physics of flight, aircraft structures, and model glider construction, understanding how lift, drag, and balance work together.",
      takeaways: [
        "Understood the importance of precision and balance in engineering.",
        "Appreciated how small adjustments change performance significantly.",
      ],
    },
    {
      clubName: "Athletics Club",
      organisation: "Prince of Wales College",
      period: "School Years",
      category: "Athletics & Discipline",
      description:
        "Trained regularly in track and field events, taking part in physical conditioning and collegiate sports meets.",
      takeaways: [
        "Built personal stamina, physical discipline, and consistency.",
        "Learned sportsmanship—how to compete hard while respecting opponents.",
      ],
    },
  ],

  // Personal Development Goals
  developmentGoals: [
    {
      pillar: "Technical Craftsmanship",
      objective: "Deepen Full-Stack & Cloud Knowledge",
      timeframe: "Next 12 Months",
      strategy:
        "Build more complex full-stack web applications with Next.js and TypeScript, improve database optimization skills, and deploy more projects using containers.",
      metrics: "Complete HDIT Year 2 coursework successfully and deploy at least two production-grade web systems.",
    },
    {
      pillar: "Entrepreneurial Experience",
      objective: "Strengthen Operations at LA'CEDRA",
      timeframe: "Ongoing (2025–2026)",
      strategy:
        "Expand client projects for LA'CEDRA, and focus on delivering reliable, maintainable digital systems for every client.",
      metrics: "Successfully deliver web projects for local clients and build steady operational processes.",
    },
    {
      pillar: "Interpersonal & Communication Skills",
      objective: "Practice Everyday Emotional Intelligence",
      timeframe: "Continuous Practice",
      strategy:
        "Apply the 7 C's of communication when emailing clients and lecturers; use the 6-10 second breathing pause during stressful deadlines or disagreements.",
      metrics: "Receive positive feedback on team presentations and conduct calm, productive client meetings.",
    },
    {
      pillar: "Education & Qualifications",
      objective: "Progress to a Bachelor's Degree in Software Engineering",
      timeframe: "Following HDIT Completion",
      strategy:
        "Maintain strong grades in the Higher Diploma at SLIIT City Uni to transition smoothly into the Bachelor of Science (Hons) in Information Technology degree pathway.",
      metrics: "Graduate HDIT with strong academic standing and earn degree entry.",
    },
  ],
};
