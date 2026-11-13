import { TechnologySkill, ProjectShowcaseItem } from "@/types/project";

/**
 * ============================================================================
 * TECHNOLOGIES & TOOLS DATA REPOSITORY
 * ============================================================================
 * Centralized list of technologies with editable proficiency levels.
 * You can modify the `proficiency` field of any technology below without
 * altering component code.
 * ============================================================================
 */
export const TECHNOLOGIES_DATA: TechnologySkill[] = [
  // --- FRONTEND TECHNOLOGIES ---
  {
    name: "HTML",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Semantic markup, accessible DOM structures, and standards-compliant document schemas.",
    badge: "Core Web",
  },
  {
    name: "CSS",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Responsive styling, modern Flexbox/Grid layouts, animations, and cross-browser consistency.",
    badge: "Core Web",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "ES6+ asynchronous execution, DOM manipulation, client-side event loops, and API consumption.",
    badge: "Language",
  },
  {
    name: "React",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Component-driven user interfaces, reactive state management, hooks, and virtual DOM reconciliation.",
    badge: "Framework",
  },
  {
    name: "Next.js",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Full-stack React framework with App Router, server components, SSR/SSG, and optimized assets.",
    badge: "Framework",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Strict static type systems, interface declarations, and maintainable large-scale codebases.",
    badge: "Language",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Utility-first design systems, custom color token palettes, and responsive UI choreography.",
    badge: "Styling",
  },

  // --- BACKEND TECHNOLOGIES ---
  {
    name: "PHP",
    category: "Backend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Server-side scripting, database query execution, session management, and dynamic page generation.",
    badge: "Server-Side",
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Event-driven asynchronous runtime, RESTful API design, and package management via npm.",
    badge: "Runtime",
  },

  // --- DATABASES ---
  {
    name: "MySQL",
    category: "Databases",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Relational database modeling, SQL querying, foreign keys, table joins, and transactional consistency.",
    badge: "RDBMS",
  },
  {
    name: "MongoDB",
    category: "Databases",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "NoSQL document database, JSON-like dynamic schema modeling, and scalable collection querying.",
    badge: "NoSQL",
  },
  {
    name: "Firebase",
    category: "Databases",
    proficiency: "[Editable: Proficient / Intermediate / Advanced]",
    description: "Realtime database, Cloud Firestore, authentication services, and serverless backend utilities.",
    badge: "Cloud DB",
  },

  // --- DEVELOPMENT TOOLS ---
  {
    name: "Git",
    category: "Tools",
    proficiency: "[Editable: Working Knowledge / Version Control]",
    description: "Distributed version control, branch management, merge conflict resolution, and commits.",
    badge: "VCS",
  },
  {
    name: "GitHub",
    category: "Tools",
    proficiency: "[Editable: Working Knowledge / Collaboration]",
    description: "Remote code repository management, pull requests, issue tracking, and collaboration workflows.",
    badge: "Platform",
  },
  {
    name: "Visual Studio Code",
    category: "Tools",
    proficiency: "[Editable: Primary IDE]",
    description: "Primary development environment with integrated debugging, extensions, and workspace configs.",
    badge: "IDE",
  },
  {
    name: "Antigravity",
    category: "Tools",
    proficiency: "[Editable: Advanced IDE / Agentic Tools]",
    description: "Agentic AI software development environment, automated engineering workflows, and system inspection.",
    badge: "Environment",
  },
  {
    name: "Android Studio",
    category: "Tools",
    proficiency: "[Editable: Mobile Development]",
    description: "Official Android IDE for mobile UI prototyping, emulator testing, and Gradle build management.",
    badge: "Mobile IDE",
  },
  {
    name: "NetBeans",
    category: "Tools",
    proficiency: "[Editable: Academic Development]",
    description: "Integrated development environment utilized for academic programming and software projects.",
    badge: "IDE",
  },

  // --- INFRASTRUCTURE & CLOUD ---
  {
    name: "Apache",
    category: "Infrastructure",
    proficiency: "[Editable: Web Server Management]",
    description: "HTTP web server configuration, virtual hosts management, .htaccess directives, and server modules.",
    badge: "Web Server",
  },
  {
    name: "DigitalOcean",
    category: "Infrastructure",
    proficiency: "[Editable: Cloud VPS Deployment]",
    description: "Cloud droplet provisioning, Linux server administration, SSH key management, and web deployment.",
    badge: "Cloud VPS",
  },
  {
    name: "Docker",
    category: "Infrastructure",
    proficiency: "[Editable: Container Fundamentals]",
    description: "Application containerization concepts, Dockerfiles, isolated environments, and image management.",
    badge: "Containers",
  },
  {
    name: "Oracle Cloud",
    category: "Infrastructure",
    proficiency: "[Editable: Cloud Compute]",
    description: "Cloud infrastructure services, virtual compute instances, network security lists, and cloud storage.",
    badge: "Enterprise Cloud",
  },
  {
    name: "Cisco Packet Tracer",
    category: "Infrastructure",
    proficiency: "[Editable: Network Simulation]",
    description: "Network simulation, router and switch configuration, IP subnetting, and topology audit analysis.",
    badge: "Networking",
  },
];

/**
 * ============================================================================
 * PROJECT SHOWCASE DATA REPOSITORY
 * ============================================================================
 * 5 Comprehensive Projects with all required structural attributes:
 * - Project title & overview
 * - Objectives
 * - Technologies used
 * - Responsibilities
 * - Challenges encountered
 * - Solutions implemented
 * - Skills demonstrated
 * - Learning outcomes
 * - Screenshots and supporting evidence placeholders
 * ============================================================================
 */
export const PROJECTS_DATA: ProjectShowcaseItem[] = [
  // --------------------------------------------------------------------------
  // PROJECT 1: LA'CEDRA Website
  // --------------------------------------------------------------------------
  {
    id: "lacedra-website",
    title: "LA'CEDRA Corporate Web Platform",
    subtitle: "Multi-Page Corporate Presence for a Digital Systems & IT Agency",
    category: "Web Development",
    status: "Live Client Venture",
    period: "2024 – Present",
    overview:
      "A comprehensive, multi-page corporate website engineered for LA'CEDRA—an IT-oriented venture co-founded to provide custom web engineering, Point of Sale (POS) solutions, business management platforms, and enterprise digital transformation services. The platform presents LA'CEDRA's value proposition, service offerings, and technological capabilities to prospective commercial clients.",
    objectives: [
      "Establish an authoritative, professional digital brand identity for LA'CEDRA in the regional IT services landscape.",
      "Architect a multi-page user journey detailing service verticals: bespoke web development, business systems, POS architecture, and digital transformation.",
      "Ensure rapid loading times, mobile responsiveness, and intuitive navigation across smartphones, tablets, and desktop workstations.",
      "Implement accessible contact and project inquiry channels to facilitate client onboarding and lead generation.",
    ],
    technologiesUsed: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    myResponsibilities: [
      "Co-conceptualized the information architecture and multi-page routing structure for the corporate brand.",
      "Engineered responsive page layouts using utility-first styling with Tailwind CSS and modular React components.",
      "Drafted high-impact commercial copy detailing technical service deliverables without excessive corporate jargon.",
      "Conducted cross-browser rendering audits and mobile responsiveness testing on multiple viewports.",
    ],
    challengesEncountered: [
      "Balancing rich technical service explanations with scannable layout aesthetics to avoid overwhelming prospective clients.",
      "Ensuring seamless typography rendering and smooth animations without adding heavy third-party bundle dependencies.",
    ],
    solutionsImplemented: [
      "Implemented a modular section hierarchy with expandable service breakdowns and clear call-to-action (CTA) buttons.",
      "Used lightweight CSS transitions and optimized component trees to maintain snappy sub-second page transitions.",
    ],
    skillsDemonstrated: [
      "Frontend Component Architecture",
      "Responsive Layout Engineering",
      "Commercial Value Proposition Pitching",
      "Client User Journey Mapping",
      "Brand Identity Alignment",
    ],
    learningOutcomes: [
      "Understood how digital agency positioning influences prospective client trust and initial discovery inquiries.",
      "Refined skills in managing real-world client-facing deliverables where design aesthetics directly impact commercial credibility.",
    ],
    evidence: [
      {
        caption: "Homepage Hero & Value Proposition Banner",
        type: "Screenshot",
        placeholderText: "[Evidence Placeholder: LA'CEDRA Corporate Homepage & Brand Monogram]",
        note: "Replace with live screenshot from production or staging URL.",
      },
      {
        caption: "Services Overview & Technical Capabilities Grid",
        type: "Screenshot",
        placeholderText: "[Evidence Placeholder: LA'CEDRA Services Page (Web, POS, Business Systems)]",
        note: "Highlights core technical offerings and solution architectures.",
      },
      {
        caption: "Mobile Viewport Responsive Drawer & Navigation",
        type: "Screenshot",
        placeholderText: "[Evidence Placeholder: Mobile Responsive Layout & Touch Drawer Menu]",
        note: "Demonstrates cross-device responsiveness on 375px–768px viewports.",
      },
    ],
    liveUrlPlaceholder: "https://lacedra.com (Or Staging URL)",
    repoUrlPlaceholder: "https://github.com/teranrathnayake/lacedra-website",
  },

  // --------------------------------------------------------------------------
  // PROJECT 2: TechMart
  // --------------------------------------------------------------------------
  {
    id: "techmart-ecommerce",
    title: "TechMart E-Commerce Platform",
    subtitle: "Full-Stack Retail Platform with Dynamic Catalog & Cart Architecture",
    category: "E-Commerce",
    status: "Academic Project",
    period: "Academic Year 2",
    overview:
      "A full-stack e-commerce web platform designed to simulate a modern consumer electronics and gadget marketplace. The application encompasses structured catalog navigation, real-time product search, interactive shopping cart state management, checkout validation, and persistent database storage.",
    objectives: [
      "Develop an end-to-end retail web application integrating responsive UI components with persistent backend data models.",
      "Implement essential e-commerce workflows: catalog browsing, multi-criteria filtering, shopping cart state, and order summary generation.",
      "Ensure transactional data consistency when adding, updating, or deleting items from active cart sessions.",
      "Incorporate clean visual hierarchy and accessible form inputs for customer account authentication and checkout data.",
    ],
    technologiesUsed: [
      "HTML5",
      "CSS3 / Tailwind CSS",
      "JavaScript",
      "PHP / Node.js",
      "MySQL / MongoDB",
      "Git & GitHub",
      "Visual Studio Code",
    ],
    myResponsibilities: [
      "Architected the product catalog layout with responsive grid mechanics and category sidebar navigation.",
      "Implemented client-side shopping cart calculations (item subtotals, tax computation, and order grand totals).",
      "Engineered backend endpoints handling product fetching, item detail retrieval, and order submission payloads.",
      "Designed the relational/document schema mapping products, categories, inventories, and orders.",
    ],
    challengesEncountered: [
      "Preventing cart state desynchronization when users refreshed the browser or modified quantities across multiple tabs.",
      "Handling edge-case validations such as zero-inventory items and empty cart submissions gracefully.",
    ],
    solutionsImplemented: [
      "Stored serialized cart state within local storage and synchronized with server sessions on status change.",
      "Added defensive client and server validation checks displaying clear, user-friendly toast alerts for out-of-stock items.",
    ],
    skillsDemonstrated: [
      "E-Commerce Workflow Architecture",
      "State Management & Cart Logic",
      "CRUD Database Operations",
      "Defensive Input Validation",
      "Responsive Product Grid Engineering",
    ],
    learningOutcomes: [
      "Acquired deep respect for data integrity in commercial transactions where price calculations must remain completely accurate.",
      "Enhanced understanding of consumer UX psychology regarding checkout friction and scannable product specifications.",
    ],
    evidence: [
      {
        caption: "TechMart Product Grid & Filter Navigation",
        type: "Screenshot",
        placeholderText: "[Evidence Placeholder: TechMart Product Catalog & Electronics Grid]",
        note: "Demonstrates category filtering, search input, and responsive card mechanics.",
      },
      {
        caption: "Interactive Shopping Cart Drawer & Order Summary",
        type: "Screenshot",
        placeholderText: "[Evidence Placeholder: TechMart Shopping Cart View with Subtotal Breakdown]",
        note: "Illustrates dynamic quantity modification, item removal, and subtotal calculation.",
      },
      {
        caption: "Database Schema Architecture for Products & Orders",
        type: "Architecture Diagram",
        placeholderText: "[Evidence Placeholder: TechMart Products, Inventory & Orders Entity Relationship]",
        note: "Highlights relational structure connecting products, categories, and customer orders.",
      },
    ],
    liveUrlPlaceholder: "[Editable: Demo Link or Localhost Video Walkthrough]",
    repoUrlPlaceholder: "https://github.com/teranrathnayake/techmart-ecommerce",
  },

  // --------------------------------------------------------------------------
  // PROJECT 3: ApPoint
  // --------------------------------------------------------------------------
  {
    id: "appoint-mobile-concept",
    title: "ApPoint Mobile Application Concept",
    subtitle: "On-Demand Hyperlocal Service Matching for Vendors & Skilled Tradespeople",
    category: "Mobile Concept",
    status: "Concept / In Development",
    period: "2024 – 2025",
    overview:
      "A mobile application concept designed to bridge Sri Lankan residential communities with informal mobile vendors (such as neighborhood bakery delivery vans, fresh produce distributors) and verified local skilled tradespeople (electricians, plumbers, carpenters, masonry specialists). The concept addresses the friction of locating essential on-demand neighborhood services through intuitive location-based matching.",
    objectives: [
      "Conceptualize a socio-economically tailored mobile platform that organizes informal trade services across Sri Lankan urban and suburban locales.",
      "Design a dual-sided user interface serving both everyday residential consumers and non-technical mobile vendors/tradespeople.",
      "Incorporate lightweight geolocation mapping concepts so consumers can track nearby vendor routes or request urgent trade assistance.",
      "Formulate a scalable service architecture leveraging cloud database connectivity (Firebase) and mobile-first responsive interfaces.",
    ],
    technologiesUsed: [
      "Android Studio",
      "React / React Native Concepts",
      "Firebase (Firestore / Auth)",
      "Google Maps API Concept",
      "Mobile UI Prototyping Tools",
    ],
    myResponsibilities: [
      "Conducted foundational problem discovery analyzing how neighborhood communities currently locate mobile vendors and emergency home trades.",
      "Mapped primary user journeys for two distinct personas: 'The Household Requester' and 'The Mobile Tradesperson'.",
      "Designed high-fidelity mobile wireframes detailing vendor map tracking, service category indexes, and direct call/booking screens.",
      "Structured the Firebase data schema for vendor locations, service rates, user ratings, and booking records.",
    ],
    challengesEncountered: [
      "Designing an interface accessible to non-digitally native tradespeople who may operate with basic smartphones and intermittent mobile data.",
      "Conceptualizing real-time location tracking that minimizes severe battery drain on vendor mobile devices.",
    ],
    solutionsImplemented: [
      "Designed high-contrast, icon-driven interface elements minimizing text entry in favor of one-tap status toggles (e.g., 'Active on Route').",
      "Formulated a periodic heartbeat geolocation ping (every 2–3 minutes) rather than continuous GPS streaming to conserve device battery.",
    ],
    skillsDemonstrated: [
      "Mobile UX/UI Design Thinking",
      "Grassroots Problem Identification",
      "Geolocation & Mapping Architecture",
      "Dual-Sided Marketplace System Design",
      "Socio-Technical Product Strategy",
    ],
    learningOutcomes: [
      "Gained critical appreciation for designing technology that fits local socio-cultural behaviors rather than copying generic Western models.",
      "Understood the operational complexities of mobile real-time systems and resource optimization on budget smartphone hardware.",
    ],
    evidence: [
      {
        caption: "ApPoint Mobile Wireframe: Vendor Route Discovery & Nearby Map",
        type: "Mobile Wireframe",
        placeholderText: "[Evidence Placeholder: ApPoint Mobile Screen — Hyperlocal Vendor Map & Proximity Radar]",
        note: "Highlights visual radius of active bread vans and produce trucks.",
      },
      {
        caption: "Tradesperson Profile & Verification Credential Screen",
        type: "Mobile Wireframe",
        placeholderText: "[Evidence Placeholder: ApPoint Mobile Screen — Skilled Tradesperson Profile & Direct Call]",
        note: "Shows electrician/plumber ratings, hourly estimates, and contact button.",
      },
      {
        caption: "Firebase Data Hierarchy for Geolocation & Bookings",
        type: "Architecture Diagram",
        placeholderText: "[Evidence Placeholder: Firestore NoSQL Document Architecture for ApPoint]",
        note: "Illustrates realtime collections for vendors, geo-coordinates, and service requests.",
      },
    ],
    liveUrlPlaceholder: "[Editable: Interactive Figma / Prototype Link]",
    repoUrlPlaceholder: "https://github.com/teranrathnayake/appoint-mobile-concept",
  },

  // --------------------------------------------------------------------------
  // PROJECT 4: Computer Security Vulnerability Assessment
  // --------------------------------------------------------------------------
  {
    id: "security-vulnerability-assessment",
    title: "Computer Security Vulnerability Assessment",
    subtitle: "Structured Technical Risk Auditing & Organizational Hardening Report",
    category: "Cybersecurity",
    status: "Academic Project",
    period: "Academic Year 2",
    overview:
      "A rigorous academic cybersecurity project focused on identifying, documenting, and mitigating both organizational and technical security vulnerabilities across enterprise networked infrastructure. The project examined systemic threat vectors including unpatched server daemons, insecure password policies, open network ports, weak cryptographic handshakes, and social engineering susceptibility.",
    objectives: [
      "Conduct a systematic threat modeling exercise across simulated corporate network topologies and server configurations.",
      "Identify high-risk technical vulnerabilities across networking hardware, operating systems, and internet-facing application endpoints.",
      "Evaluate human-factor and organizational vulnerabilities including phishing susceptibility, lack of multi-factor authentication, and weak netiquette.",
      "Synthesize an industry-standard risk audit report featuring CVSS-aligned severity ratings and practical, prioritized remediation guidelines.",
    ],
    technologiesUsed: [
      "Cisco Packet Tracer",
      "Network Auditing Tools",
      "Security Policy Frameworks",
      "Linux Security Basics",
      "Apache Security Hardening",
      "Risk Rating Matrices (CVSS Concepts)",
    ],
    myResponsibilities: [
      "Simulated enterprise LAN/WAN network architectures using Cisco Packet Tracer to inspect packet flow and vulnerable routing configurations.",
      "Audited web server configuration files (Apache `.conf` and `.htaccess`) to identify directory listing exposures and insecure HTTP headers.",
      "Drafted comprehensive risk assessment documentation detailing identified vulnerabilities, exploit likelihood, and business impact.",
      "Formulated prioritized defense-in-depth mitigation strategies, incorporating technical controls and organizational Netiquette governance.",
    ],
    challengesEncountered: [
      "Categorizing vulnerabilities where technical severity is low in isolation, but compounds into high risk when chained with social engineering vectors.",
      "Recommending security hardening measures that enhance defense without causing catastrophic friction for non-technical employees.",
    ],
    solutionsImplemented: [
      "Structured a two-dimensional risk matrix assessing both 'Technical Impact' and 'Exploit Likelihood' to prioritize critical fixes.",
      "Advocated for phased remediation: implementing non-disruptive protections first (MFA, header hardening) before strict network segmentations.",
    ],
    skillsDemonstrated: [
      "Vulnerability Identification & Auditing",
      "Network Topology Simulation (Cisco Packet Tracer)",
      "Threat Vector Modeling & Risk Classification",
      "Technical Security Documentation",
      "Defense-in-Depth Remediation Planning",
    ],
    learningOutcomes: [
      "Internalized that cybersecurity is fundamentally a continuous organizational culture, not merely a collection of software patches.",
      "Learned how professional netiquette, ethical digital communication, and disciplined employee training act as the first line of enterprise defense.",
    ],
    evidence: [
      {
        caption: "Cisco Packet Tracer Enterprise Network Simulation Topology",
        type: "Architecture Diagram",
        placeholderText: "[Evidence Placeholder: Cisco Packet Tracer Network Diagram with Subnets & Firewalls]",
        note: "Depicts corporate router topology, DMZ servers, and simulated access control lists.",
      },
      {
        caption: "Vulnerability Severity Matrix & Exploit Classification",
        type: "Assessment Document",
        placeholderText: "[Evidence Placeholder: Risk Assessment Table (Vulnerability, CVSS Rating, Remediation)]",
        note: "Structured matrix categorizing risks into Critical, High, Medium, and Low.",
      },
      {
        caption: "Apache Server Security Hardening Directives",
        type: "System Terminal",
        placeholderText: "[Evidence Placeholder: Hardened Apache Security Headers & Access Control Directives]",
        note: "Sample configuration restricting directory indexing and injecting CSP / X-Frame-Options headers.",
      },
    ],
    liveUrlPlaceholder: "[Editable: Academic Report PDF / Dossier Artifact Link]",
    repoUrlPlaceholder: "https://github.com/teranrathnayake/security-vulnerability-assessment",
  },
];
