import { ChapterData } from "@/types/chapter";

export const CHAPTERS_DATA: ChapterData[] = [
  {
    number: "01",
    slug: "01-introduction-johari-window",
    title: "Introduction to Professional Skills & Johari Window",
    subtitle: "Self-Awareness, Character Pillars & Dynamic Interpersonal Growth",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "8 min read",
    category: "Self-Awareness & Mind",
    overview: "Establishes the foundational distinction between technical, soft, and transferable competencies. Explores the internal compass shaping workplace character and introduces the 1955 Johari Window model for expanding interpersonal awareness.",
    learningObjectives: [
      "Distinguish between Technical Skills, Soft Skills, and Transferable Meta-Competencies.",
      "Analyze the four connected elements of Character Architecture: Values, Beliefs, Attitudes, and Outcomes.",
      "Apply the Johari Window framework to plot personal strengths across the four quadrants.",
      "Understand how soliciting feedback shrinks the Blind Spot and how candid disclosure shrinks the Façade.",
      "Cultivate a Growth Mindset and an Internal Locus of Control for organizational resilience."
    ],
    sections: [
      {
        title: "Workplace Skills Taxonomy",
        subtitle: "The Three Dimensions of Professional Capability",
        content: [
          "In the modern knowledge economy, career excellence is not determined by coding or technical prowess alone. The curriculum establishes a rigorous tripartite classification of competencies required to thrive in multidisciplinary teams.",
          "While hard technical knowledge gets the candidate an interview, it is soft and transferable competencies that ensure long-term retention, cross-functional respect, and executive promotions."
        ],
        bulletPoints: [
          {
            label: "Technical Skills (Hard Skills)",
            text: "Job-specific, domain-bound competencies such as software programming, system architecture, database design, and algorithmic optimization."
          },
          {
            label: "Soft Skills (Interpersonal)",
            text: "People-oriented attributes including emotional intelligence, empathetic listening, constructive feedback delivery, and collaborative teamwork."
          },
          {
            label: "Transferable Skills",
            text: "Versatile meta-skills that transcend specific roles or industries: structured problem-solving, situational adaptability, and disciplined time management."
          }
        ]
      },
      {
        title: "The Pillars of Character Framework",
        subtitle: "How Internal Compasses Shape External Reputation",
        content: [
          "Professional reputation is not merely an outward presentation; it is an organic reflection of four deeply interconnected internal dimensions.",
          "When our core values genuinely align with our daily actions, we establish unshakeable integrity and earn psychological safety within high-stakes project environments."
        ],
        table: {
          headers: ["Dimension", "Core Components", "Workplace Manifestation"],
          rows: [
            ["Values", "Honesty, Integrity, Responsibility, Fairness, Respect", "Uncompromising adherence to truth in reporting bugs, meeting deadlines, and respecting colleagues."],
            ["Beliefs", "Growth Mindset, High Self-Efficacy, Internal Locus of Control", "Viewing difficult technical bugs as learning opportunities rather than personal inadequacies."],
            ["Attitudes", "Constructive Optimism, Intellectual Humility, Tolerance", "Welcoming peer code reviews with openness, rejecting defensive cognitive reactions."],
            ["Character", "Respectfulness, Caring, Moral & Ethical Courage", "Standing up for architectural quality, supporting struggling peers, and honoring ethical obligations."]
          ]
        }
      },
      {
        title: "The Johari Window Model (Luft & Ingham, 1955)",
        subtitle: "A Mathematical & Psychological Matrix of Awareness",
        content: [
          "Conceived by Joseph Luft and Harrington Ingham in 1955, the Johari Window is a cognitive tool for mapping and accelerating interpersonal awareness. It compares what an individual knows about themselves against what others perceive in them.",
          "The overarching objective in professional leadership is to maximize the Open Area (Arena) while intentionally reducing the Blind Area through requested feedback and the Hidden Area through judicious self-disclosure."
        ],
        bulletPoints: [
          {
            label: "1. Open Area (Arena)",
            text: "Known to Self & Known to Others. The zone of transparent collaboration, established mutual trust, and shared clarity. High arena size correlates with superior team velocity."
          },
          {
            label: "2. Blind Area (Blind Spot)",
            text: "Unknown to Self & Known to Others. Unconscious habits, vocal ticks, or latent mediation strengths. Can only be identified and shrunk through actively soliciting candid feedback."
          },
          {
            label: "3. Hidden Area (Façade)",
            text: "Known to Self & Unknown to Others. Private anxieties, fears of negative appraisal, or hidden talents. Reduced safely through gradual, authentic self-disclosure."
          },
          {
            label: "4. Unknown Area",
            text: "Unknown to Self & Unknown to Others. Dormant potential, undiscovered leadership in corporate crises, and latent capabilities awakened only through novel challenges."
          }
        ],
        callout: {
          type: "quote",
          title: "Pedagogical Epigraph",
          text: "Technical skills get you the interview, but soft and transferable skills help you keep the job and earn leadership promotions.",
          author: "Mrs. Ishara Raviharee Weerasinghe"
        }
      }
    ],
    keyTakeaways: [
      "Technical skills open corporate doors; soft and transferable meta-skills secure long-term leadership retention.",
      "Expanding the Johari Open Area requires soliciting constructive criticism to shrink Blind Spots and authentic disclosure to minimize the Façade.",
      "A Growth Mindset (Dweck, 2006) and Internal Locus of Control convert high-pressure workplace failures into catalytic learning milestones.",
      "A resilient professional character is produced only when Values, Beliefs, and Attitudes remain in harmonious alignment."
    ],
    interactiveComponentId: "johari-window",
    vivaPreparation: {
      randomQuestions: [
        "Explain the strategic importance of shrinking your Johari Blind Spot in a software engineering team.",
        "How does a Fixed Mindset sabotage technical collaboration compared to a Growth Mindset?",
        "Define the four dimensions of the Pillars of Character framework.",
        "Differentiate between soft skills and transferable skills with two concrete computing examples."
      ],
      defenseProtocol: [
        "Arrive 15 minutes prior to formal session in full business professional attire.",
        "Draw randomized question card from the official assessment box without hesitation.",
        "Structure spoken defense: Concept Definition -> Real-world Context -> Personal Reflective Application."
      ]
    },
    academicReadings: [
      {
        citation: "Dweck, C. S. (2006). Mindset: The New Psychology of Success. Random House.",
        annotation: "Seminal work establishing that individuals who embrace challenges, persist through setbacks, and learn from criticism achieve substantially higher intellectual and professional mastery.",
        link: "https://dpshowrah.dspaces.org/bitstream/123456789/109/1/01-11-2020-205951MINDSET%20BY%20CAROL%20S.%20DWECK.pdf"
      },
      {
        citation: "Luft, J., & Ingham, H. (1955). The Johari Window: A Graphic Model of Interpersonal Awareness. Western Training Laboratory in Group Development.",
        annotation: "The original clinical monograph modeling human interaction, self-disclosure, and interpersonal feedback dynamics.",
        link: "https://www.psychologytoday.com/us/basics/johari-window"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Reflect on a time when peer feedback revealed a strength or weakness you were previously blind to.",
        actionItem: "Implement a bi-weekly 10-minute feedback checkpoint with your team members to systematically minimize blind spots."
      }
    ]
  },
  {
    number: "02",
    slug: "02-portfolio-management-blueprint",
    title: "Portfolio Management & Engineering Your Digital Blueprint",
    subtitle: "The 4 Archetypes, 3-Phase Lifecycle & Academic Viva Defense",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "7 min read",
    category: "Career Architecture",
    overview: "Analyzes the four distinct archetypes of portfolios and articulates the end-to-end 3-phase engineering lifecycle. Emphasizes that 'Context is King' and details the rigorous assessment viva protocols.",
    learningObjectives: [
      "Categorize the 4 portfolio archetypes: Personal, Career/Dossier, Employment, and Assessment.",
      "Execute the 3-phase portfolio lifecycle: Strategy, Assembly, and Maintenance/Viva Defense.",
      "Master the academic principle that 'Context is King'—pairing every artefact with critical meta-reflection.",
      "Prepare for randomized viva card defenses through disciplined physical and vocal rehearsal."
    ],
    sections: [
      {
        title: "The 4 Primary Portfolio Archetypes",
        subtitle: "Selecting the Strategic Container for Your Output",
        content: [
          "Portfolios are not generic repositories; their format, tone, and curation are strictly governed by their underlying purpose and target audience.",
          "Confusing an Assessment Portfolio with a casual Personal Portfolio is one of the most common pitfalls in undergraduate academic evaluation."
        ],
        table: {
          headers: ["Portfolio Archetype", "Primary Objective", "Target Audience", "Core Content Architecture"],
          rows: [
            ["Personal Portfolio", "Express unique creative identity and aesthetic style", "Creative community, design leads, freelance clients", "UI/UX case studies, code playgrounds, visual media"],
            ["Career / Dossier", "Present formal hiring credentials for recruitment", "Hiring panels, executive recruiters, HR", "ATS Resume, cover letters, verified credentials, code repos"],
            ["Employment Portfolio", "Document internal performance and promotion readiness", "Current engineering managers, executive directors", "Quarterly KPIs, sprint contributions, internal awards"],
            ["Assessment Portfolio", "Demonstrate academic learning, self-critique & pedagogy", "University lecturers, academic examiners, viva boards", "9-chapter syllabus synthesis, reflective logs, viva cards"]
          ]
        }
      },
      {
        title: "The 3-Phase Engineering Lifecycle",
        subtitle: "From Inception to Viva Voce Defense",
        content: [
          "Building a world-class portfolio requires applying the same software engineering rigor used in building high-availability enterprise applications.",
          "Artefacts do not speak for themselves. An uncontextualized code snippet or certificate is meaningless without documenting the lessons learned, technical blockers surmounted, and skills acquired."
        ],
        bulletPoints: [
          {
            label: "Phase 1: Strategy",
            text: "Define clear outcomes, profile target evaluators, and select the digital delivery medium (Next.js App Router for high-performance interactivity)."
          },
          {
            label: "Phase 2: Assembly",
            text: "Systematically gather source artefacts, classify them into logical pillars, and annotate each with a reflective breakdown ('Context is King')."
          },
          {
            label: "Phase 3: Maintenance & Viva Defense",
            text: "Continuously update documentation, conduct mock viva card drills, and prepare for oral academic cross-examination."
          }
        ],
        callout: {
          type: "important",
          title: "Golden Rule of Portfolio Assessment",
          text: "Context is King: Always pair every project, certificate, or code snippet with a rigorous reflection explaining why it matters, what failed, and what meta-skills were forged.",
          author: "Zubizarreta (2009)"
        }
      }
    ],
    keyTakeaways: [
      "Distinct portfolio archetypes serve distinct stakeholders; academic assessment demands structural rigor and reflective depth.",
      "Context is King: Never display raw artefacts without articulating their pedagogical meaning and lessons learned.",
      "The 3-Phase Lifecycle (Strategy, Assembly, Maintenance) transforms chaotic project outputs into a cohesive career dossier.",
      "Viva Voce success depends on mastering randomized topic cards, arriving early, and presenting structured verbal evidence."
    ],
    interactiveComponentId: "portfolio-matrix",
    vivaPreparation: {
      randomQuestions: [
        "Explain the key architectural differences between a Career Portfolio and an Assessment Portfolio.",
        "What does the maxim 'Context is King' mean when documenting a failed programming sprint?",
        "Detail your execution of the 3-phase portfolio lifecycle during this academic term.",
        "How do you prepare your physical demeanor and voice for a high-stakes academic viva defense?"
      ],
      defenseProtocol: [
        "Business formal attire is mandatory (suit/tie or formal business equivalent).",
        "Arrive at the examination venue at least 15 minutes prior to the scheduled draw.",
        "Answer four randomized cards drawn from the assessment box using the STAR method."
      ]
    },
    academicReadings: [
      {
        citation: "Burnett, B., & Evans, D. (2016). Designing Your Life: How to Build a Well-Lived, Joyful Life. Knopf.",
        annotation: "Shows how design thinking frameworks (prototyping, testing, reframing) are applied to personal career mapping.",
        link: "https://designingyour.life"
      },
      {
        citation: "Zubizarreta, J. (2009). The Learning Portfolio: Reflective Practice for Improving Student Learning. Jossey-Bass.",
        annotation: "Comprehensive research proving that meta-reflection on student learning produces significantly deeper cognitive retention.",
        link: "https://www.wiley.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "How has your understanding of a 'portfolio' shifted from a simple CV repository to a dynamic learning blueprint?",
        actionItem: "Audit every project in your portfolio and write a 150-word contextual analysis outlining the key technical challenge surmounted."
      }
    ]
  },
  {
    number: "03",
    slug: "03-job-interviews-mock-skills",
    title: "Job Interviews & Mock Interview Skills",
    subtitle: "The Three Mandatory Questions, Mehrabian Non-Verbal Rule & STAR Method",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "9 min read",
    category: "Non-Verbal & Dialogue",
    overview: "Demystifies the interview room as a two-way evidence-gathering dialogue. Breaks down Mehrabian's 93% non-verbal communication rule, the 6 C's (+ Confident) evaluation framework, and the STAR behavioral answering methodology.",
    learningObjectives: [
      "Master the three foundational questions underlying every interview question.",
      "Evaluate candidate performance using the 6 C's (+ Confident) framework.",
      "Internalize Mehrabian's 7-38-55 Communication Rule for high-stakes interviews.",
      "Structure behavioral responses using the STAR methodology (Situation, Task, Action, Result).",
      "Employ precise grammatical tenses: Present for capabilities, Past for achievements, Future for vision."
    ],
    sections: [
      {
        title: "The Three Mandatory Candidate Questions",
        subtitle: "The Core Subtext of All Interview Inquiries",
        content: [
          "An interview is not an interrogation; it is a high-stakes, two-way evidence-gathering professional dialogue. Regardless of how an interviewer phrases their questions, they are fundamentally probing three foundational truths."
        ],
        bulletPoints: [
          {
            label: "1. Why are you here?",
            text: "Evaluates genuine motivation, institutional alignment, passion for the company's specific product ecosystem, and career narrative continuity."
          },
          {
            label: "2. What can you do for us?",
            text: "Assesses concrete technical competency, return on investment (ROI), domain proficiency, and ability to eliminate technical roadblocks."
          },
          {
            label: "3. What kind of person are you?",
            text: "Uncovers cultural fit, emotional resilience under stress, ethical courage, and collaborative demeanor within multidisciplinary teams."
          }
        ]
      },
      {
        title: "Mehrabian's Communication Rule (1971)",
        subtitle: "The 93% Non-Verbal Dominance in Human Appraisal",
        content: [
          "In 1971, Dr. Albert Mehrabian established that during face-to-face communication involving feelings and attitudes, literal words convey only a fraction of the total impression.",
          "If a candidate's verbal statements are incongruent with their posture or vocal inflection, the hiring panel will unconsciously believe the non-verbal signals every single time."
        ],
        table: {
          headers: ["Communication Layer", "Percentage Impact", "Interview Manifestation & Best Practice"],
          rows: [
            ["Body Language", "55%", "Upright open posture, authentic eye contact, firm handshake, purposeful gestures, professional attire."],
            ["Tone of Voice", "38%", "Warm resonance, moderate cadence, pitch modulation, eliminating uptalk and hesitant vocal fry."],
            ["Spoken Words", "7%", "Concise technical vocabulary, precise terminology, absence of colloquial slang and filler sounds ('um', 'like')."]
          ]
        }
      },
      {
        title: "The STAR Behavioral Answering Methodology",
        subtitle: "Engineering Quantifiable, High-Impact Evidence",
        content: [
          "Top-tier tech corporations (Google, Amazon, Microsoft) utilize behavioral interviewing based on the psychological premise that past performance is the best predictor of future behavior.",
          "The STAR formula guarantees that the candidate delivers structured, evidence-backed answers without meandering into superficial generalizations."
        ],
        bulletPoints: [
          {
            label: "S - Situation",
            text: "Establish the specific organizational context, project background, or corporate crisis (15% of answer time)."
          },
          {
            label: "T - Task",
            text: "Clarify the precise technical objective, deadline pressure, or explicit challenge you were assigned to solve (15% of answer time)."
          },
          {
            label: "A - Action",
            text: "Articulate the exact technical and interpersonal initiatives YOU led. Focus on 'I' rather than a vague 'we' (50% of answer time)."
          },
          {
            label: "R - Result",
            text: "Deliver quantifiable business or technical outcomes, metrics achieved, and lessons learned (20% of answer time)."
          }
        ],
        callout: {
          type: "tip",
          title: "Grammatical Tense Precision",
          text: "Use Present Tense for current capabilities ('I am proficient in TypeScript'); Past Simple / Present Perfect for completed achievements ('I engineered the database schema'); Future Tense for organizational vision ('I will optimize your query latency').",
          author: "Interview Communication Protocol"
        }
      }
    ],
    keyTakeaways: [
      "93% of an interview impression is non-verbal (55% body language + 38% vocal tone); words comprise only 7%.",
      "Every question is a disguised variant of: Why are you here? What can you do for us? What kind of person are you?",
      "The STAR method (Situation, Task, Action, Result) ensures candidate answers are concise, evidence-driven, and quantifiable.",
      "Successful candidates research company specifics and exhibit the 6 C's (+ Confident); unsuccessful candidates exhibit generic answers and fidgeting."
    ],
    interactiveComponentId: "star-builder",
    vivaPreparation: {
      randomQuestions: [
        "Deconstruct Mehrabian's 7-38-55 communication rule in the context of a virtual technical interview.",
        "Deliver a 90-second STAR response describing how you resolved a critical git merge conflict.",
        "List the 6 C's (+ Confident) of interview evaluation and explain how they prevent rambling.",
        "What grammatical tenses should you strictly apply when discussing current skills vs. past achievements?"
      ],
      defenseProtocol: [
        "Maintain upright, grounded posture with arms resting uncrossed on table or lap.",
        "Maintain 3-5 seconds of sustained, respectful eye contact with the interviewer before blinking naturally.",
        "Speak with deliberate vocal pace (130-150 words per minute), pausing deliberately between STAR sections."
      ]
    },
    academicReadings: [
      {
        citation: "Mehrabian, A. (1971). Silent Messages: Implicit Communication of Emotions and Attitudes. Wadsworth Publishing.",
        annotation: "The foundational psychological study demonstrating how paralanguage and kinetics supersede verbal lexical content.",
        link: "https://www.kaaj.com/psych/smorder.html"
      },
      {
        citation: "Yate, M. (2020). Knock 'em Dead: The Ultimate Job Search Guide. Adams Media.",
        annotation: "Comprehensive interview strategy manual breaking down behavioral question psychology and executive negotiation.",
        link: "https://knockemdead.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Review your latest mock interview recording: where did your vocal tone or body language contradict your spoken words?",
        actionItem: "Record three 2-minute STAR responses on camera, reviewing for vocal inflection, eye contact, and elimination of filler words."
      }
    ]
  },
  {
    number: "04",
    slug: "04-cv-writing-career-docs",
    title: "CV Writing & Career Documents",
    subtitle: "The 6 Essential Components, ATS Optimization & CV vs. Resume Distinction",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "8 min read",
    category: "Strategic Documentation",
    overview: "Details the structural anatomy of an ATS-compliant modern CV. Contrasts Chronological, Functional, and Combination formats, and establishes the definitive boundaries between a CV and a Resume.",
    learningObjectives: [
      "Identify the 6 essential anatomical sections of a winning curriculum vitae.",
      "Select appropriately between Chronological, Functional, and Hybrid CV formats.",
      "Optimize career documents to achieve 90%+ parse rates through Applicant Tracking Systems (ATS).",
      "Distinguish between an academic/global CV and a targeted private-sector Resume.",
      "Employ powerful action verbs and quantifiable metrics to validate technical achievements."
    ],
    sections: [
      {
        title: "The 6 Essential Anatomy Components of a Winning CV",
        subtitle: "Systematic Engineering of Career Data",
        content: [
          "Recruiters spend an average of six to seven seconds on an initial CV scan. A winning document must feature an immediate visual hierarchy that guides the human eye directly to relevant competencies and quantifiable value."
        ],
        bulletPoints: [
          {
            label: "1. Header & Verified Contact Data",
            text: "Full legal name in prominent display, verified professional email (e.g. first.last@domain.com, no casual handles), phone number, location, and verified links to LinkedIn and GitHub."
          },
          {
            label: "2. Tailored Professional Summary",
            text: "High-impact 3-line elevator pitch synthesizing domain specialty, key technologies, and concrete value proposition. Eliminates outdated, self-serving 'Objective' statements."
          },
          {
            label: "3. Work & Project Experience",
            text: "Reverse chronological order, dynamic action verbs ('Architected', 'Refactored', 'Optimized'), and metrics-driven bullet points (e.g. 'Reduced query latency by 38%')."
          },
          {
            label: "4. Education & Academic Honors",
            text: "Degree title, university, graduation year (or expected date), GPA/class honors, and specialized relevant coursework."
          },
          {
            label: "5. Categorized Skills Inventory",
            text: "Systematically segregated into Languages, Frameworks, Developer Tools, Databases, and Interpersonal proficiencies."
          },
          {
            label: "6. Verified Referees",
            text: "Two professional or academic contacts with verified corporate titles, official institutional email addresses, and confirmed prior consent."
          }
        ]
      },
      {
        title: "CV Format Comparative Matrix",
        subtitle: "Selecting the Right Layout for Your Career Stage",
        content: [
          "Different career narratives require different architectural containers. Using the wrong format can emphasize employment gaps or conceal critical technical skills."
        ],
        table: {
          headers: ["Format Archetype", "Core Structural Focus", "Ideal Candidate Profile", "ATS Friendliness"],
          rows: [
            ["Chronological CV", "Reverse time progression; emphasizes employer names and tenure length.", "Candidates with steady, continuous progression in the same industry.", "Extremely High (Standard industry parser default)."],
            ["Functional (Skills-Based)", "Groups accomplishments by skill competencies rather than dates.", "Career switchers or candidates with significant gaps in employment.", "Moderate (Can confuse chronological parser algorithms)."],
            ["Combination / Hybrid", "Blends a prominent skill competency matrix with chronological work history.", "Modern tech undergraduates, full-stack engineers, versatile specialists.", "High (When styled with clean semantic headers)."]
          ]
        }
      },
      {
        title: "ATS Optimization & The CV vs. Resume Distinction",
        subtitle: "Navigating Algorithmic Gatekeepers",
        content: [
          "Over 75% of job applications are filtered out by Applicant Tracking Systems before a human recruiter ever sees them.",
          "ATS engines struggle with multi-column table layouts, text placed inside graphical images, complex icons, and non-standard header names."
        ],
        bulletPoints: [
          {
            label: "CV (Curriculum Vitae)",
            text: "Comprehensive, multi-page (2-5+ pages) academic and professional ledger documenting full career history, publications, research, teaching, and credentials. Standard in academia and medicine."
          },
          {
            label: "Resume",
            text: "Highly concise, strictly 1-2 page tailored marketing document custom-built for a specific private-sector vacancy, highlighting only relevant achievements."
          }
        ],
        callout: {
          type: "important",
          title: "Golden Rules for ATS Parsing",
          text: "Use standard fonts (Inter, Arial, Calibri), eliminate text boxes and graphics, use universal section titles ('Work Experience', 'Skills', 'Education'), and match exact keywords from the target job specification.",
          author: "Innes (2016)"
        }
      }
    ],
    keyTakeaways: [
      "A winning CV contains 6 core components; the professional summary must be a 3-line value pitch, not an outdated objective.",
      "The Hybrid/Combination format is the gold standard for tech students, combining technical skill clusters with reverse-chronological evidence.",
      "ATS algorithms filter out over 75% of CVs; optimize with standard headings, single-column parsing, and job-specific keywords.",
      "A CV is an exhaustive academic and professional chronicle; a Resume is a 1-2 page tailored marketing brochure."
    ],
    interactiveComponentId: "ats-analyzer",
    vivaPreparation: {
      randomQuestions: [
        "Explain three architectural reasons why an ATS algorithm might reject an otherwise qualified developer's CV.",
        "Differentiate between a Curriculum Vitae and a Resume in purpose, length, and industry context.",
        "What are the six mandatory anatomy sections of a winning CV?",
        "Rewrite a weak bullet point ('Responsible for fixing bugs') into a high-impact, metrics-driven statement."
      ],
      defenseProtocol: [
        "Bring two printed physical copies of your hybrid CV in pristine portfolio folders.",
        "Be prepared to verbally defend any single bullet point or technology listed in your skills inventory.",
        "Explain the strategic reasoning behind your chosen CV format."
      ]
    },
    academicReadings: [
      {
        citation: "Innes, J. (2016). The CV Book: Your Definitive Guide to Writing the Perfect CV. Pearson Education.",
        annotation: "Comprehensive industry benchmark for structuring achievement-focused career documents and defeating digital parsers.",
        link: "https://www.pearson.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Analyze your current CV: how many bullet points begin with passive duties rather than dynamic action verbs with quantifiable metrics?",
        actionItem: "Rewrite at least four bullet points using the formula: [Action Verb] + [Technical Tool/Task] + [Quantified Result/Impact]."
      }
    ]
  },
  {
    number: "05",
    slug: "05-speaking-skills-meetings",
    title: "Speaking Skills & Effective Meetings",
    subtitle: "The 7 C's of Communication, Meeting Governance & The 10-Point Planning Audit",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "8 min read",
    category: "Executive Communication",
    overview: "Explores the 7 C's of executive verbal delivery and examines meeting governance types. Provides the 10-point planning audit checklist to eliminate corporate meeting bloat and enforce timekeeping discipline.",
    learningObjectives: [
      "Apply the 7 C's of Executive Communication across verbal presentations and meetings.",
      "Distinguish between meeting typologies: Agile Standups, Customer Negotiations, Board Meetings, AGMs, and EGMs.",
      "Execute the 10-point meeting planning checklist to ensure strict outcome-oriented facilitation.",
      "Master the role of Chairperson as diplomatic referee: moderating dominant voices and drawing out quiet contributors."
    ],
    sections: [
      {
        title: "The 7 C's of Executive Communication",
        subtitle: "The Universal Standard for Verbal & Written Clarity",
        content: [
          "Communication failure in engineering teams is rarely technical; it is almost always a breakdown in clarity, precision, or courtesy. The 7 C's provide an actionable filter for every spoken or written exchange."
        ],
        bulletPoints: [
          { label: "1. Clear", text: "Unambiguous message with simple language, free from confusing corporate jargon or obscure acronyms." },
          { label: "2. Concise", text: "Economical with the listener's time; sticking strictly to the point without filler or circular explanations." },
          { label: "3. Concrete", text: "Supported by solid facts, exact data, and verifiable metrics rather than vague abstractions." },
          { label: "4. Correct", text: "Accurate information, proper grammar, verified technical statistics, and appropriate register." },
          { label: "5. Coherent", text: "Logically structured with smooth transitions, ensuring each idea naturally connects to the next." },
          { label: "6. Complete", text: "Contains all required details, deadlines, and context so the receiver can act without requesting clarification." },
          { label: "7. Courteous", text: "Respectful, empathetic, professional tone that acknowledges the listener's perspective and time." }
        ]
      },
      {
        title: "Meeting Typologies & Governance",
        subtitle: "Matching Structure to Strategic Purpose",
        content: [
          "Meetings represent a massive expenditure of organizational capital. Ineffective meetings waste thousands of developer hours each month. Understanding the legal and operational structure of meetings ensures disciplined execution."
        ],
        table: {
          headers: ["Meeting Classification", "Frequency / Scope", "Governance Rules & Formal Protocols"],
          rows: [
            ["Agile Standup / Sprint Sync", "Daily (15 mins)", "Strict timebox; three questions: What was completed? What is next? What blockers exist?"],
            ["Customer / Client Negotiation", "Ad-hoc / Milestone-driven", "Contractual alignment, value consensus, documented scope bounds, formal minutes."],
            ["Board Meeting", "Monthly / Quarterly", "Executive directors; legal fiduciary oversight, corporate governance, strategic capital allocation."],
            ["AGM (Annual General Meeting)", "Mandatory Annually", "Open to all shareholders; financial statement approvals, board elections, statutory voting."],
            ["EGM (Extraordinary General Meeting)", "Emergency / Special crisis", "Convened under company law for urgent matters requiring immediate shareholder vote."]
          ]
        }
      },
      {
        title: "The 10-Point Meeting Planning Checklist",
        subtitle: "Eliminating Waste and Enforcing Accountability",
        content: [
          "A successful meeting begins 48 hours before anyone enters the conference room and finishes only when action minutes are verified and delivered."
        ],
        bulletPoints: [
          { label: "1. Explicit Purpose", text: "Define clear objectives; if the outcome can be achieved via an email, cancel the meeting." },
          { label: "2. Timed Agenda", text: "Circulate an agenda with exact minute allocations at least 48 hours in advance." },
          { label: "3. Curated Attendees", text: "Invite only decision-makers and vital contributors; eliminate spectator bloat." },
          { label: "4. Optimized Environment", text: "Maintain a cool ambient room temperature (cooler rooms promote mental alertness and combat drowsiness)." },
          { label: "5. Technology AV Check", text: "Pre-test projectors, video conferencing links, and screen sharing 10 minutes prior." },
          { label: "6. Chairperson as Referee", text: "Diplomatically rein in dominant talkers and actively invite insights from quiet team members." },
          { label: "7. Punctual Discipline", text: "Start strictly on time (never wait for latecomers) and end at or before the scheduled time." },
          { label: "8. Action-Oriented Minutes", text: "Record explicit decisions, assigned owners, and agreed deadlines rather than conversational transcripts." },
          { label: "9. Immediate Distribution", text: "Circulate summary minutes and task matrices within 24 hours of meeting completion." },
          { label: "10. Follow-up Accountability", text: "Verify that assignees execute agreed action items prior to the next scheduled sync." }
        ],
        callout: {
          type: "tip",
          title: "The Chairperson's Golden Rule",
          text: "A great chairperson is like a diplomatic sports referee: they do not dominate the game; they ensure fair participation, keep the ball moving forward, and penalize time-wasting.",
          author: "Meeting Governance Protocol"
        }
      }
    ],
    keyTakeaways: [
      "The 7 C's (Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous) govern all executive communications.",
      "Corporate meetings span operational standups, customer negotiations, board meetings, AGMs, and emergency EGMs.",
      "The 10-Point Checklist guarantees that every meeting is purposeful, strictly timed, and rigorously followed up.",
      "Keeping meeting rooms cool promotes alertness; chairpersons must act as referees to curb ramblers and empower quiet voices."
    ],
    interactiveComponentId: "meeting-checklist",
    vivaPreparation: {
      randomQuestions: [
        "Detail all 7 C's of Executive Communication with a technical computing example for each.",
        "Differentiate between an AGM and an EGM under corporate governance standards.",
        "Explain three key techniques a chairperson must use to moderate a meeting attendee who monopolizes time.",
        "Why is room temperature optimization cited in professional meeting management literature?"
      ],
      defenseProtocol: [
        "Stand or sit with open upper body posture, using natural hand gestures above the desk.",
        "Articulate the 7 C's without hesitation in a clear, rhythmic cadence.",
        "Cite the 10-point checklist in sequential lifecycle order."
      ]
    },
    academicReadings: [
      {
        citation: "Cutts, M. (2020). Oxford Guide to Plain English (5th ed.). Oxford University Press.",
        annotation: "The benchmark text for eliminating ambiguity, corporate jargon, and convoluted syntax in professional communications.",
        link: "https://global.oup.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Reflect on a meeting you attended that failed to produce clear outcomes: which points of the 10-point checklist were violated?",
        actionItem: "For your next team project meeting, volunteer to act as chairperson and draft a timed 3-item agenda 48 hours in advance."
      }
    ]
  },
  {
    number: "06",
    slug: "06-professional-email-etiquette",
    title: "Professional Email & Online Etiquette",
    subtitle: "Email Anatomy, The 7 Golden Rules of Netiquette & Corporate Abbreviations",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "8 min read",
    category: "Digital Netiquette",
    overview: "Deconstructs the anatomical elements of high-impact professional emails. Establishes the 7 Golden Rules of Netiquette, addresses permanent digital archiving risks, and provides a dictionary of essential corporate abbreviations.",
    learningObjectives: [
      "Master the structural anatomy of an executive email: To/Cc/Bcc, Subject, Salutation, Body, CTA, Signature.",
      "Enforce the 7 Golden Rules of Netiquette to protect organizational and individual reputation.",
      "Understand the legal and permanence risks of digital messaging (The Forwarding Rule).",
      "Apply common corporate acronyms (ASAP, FYI, COB/EOD, TBD, RSVP) with contextual accuracy."
    ],
    sections: [
      {
        title: "Anatomy of an Executive Professional Email",
        subtitle: "The 7 Building Blocks of High-Stakes Correspondence",
        content: [
          "An email is not a casual text message. It is a formal, legally archivable representation of your professional brand. Poor formatting, careless typos, or missing calls to action cause costly operational misunderstandings."
        ],
        bulletPoints: [
          {
            label: "1. Recipient Field Protocol (To / Cc / Bcc)",
            text: "'To' is strictly reserved for primary action owners. 'Cc' (Carbon Copy) is for informational awareness only. 'Bcc' (Blind Carbon Copy) protects recipient privacy in large distributions. Strict prohibition of careless 'Reply All'."
          },
          {
            label: "2. High-Impact Subject Line",
            text: "Concise, descriptive, and action-oriented. Never write 'Hello' or full sentences. Example: '[Action Required] API Gateway Migration Architecture Review - Oct 24'."
          },
          {
            label: "3. Role-Appropriate Salutation",
            text: "Formal opening matching the recipient's institutional status: 'Dear Professor Jayawardane,', 'Dear Ms. Maneesha,', or 'Dear Mr. Perera,'. Avoid casual openings ('Hey guys') in formal settings."
          },
          {
            label: "4. Respectful Contextual Hook",
            text: "Clear opening sentence setting immediate context without superfluous pleasantries. Example: 'I am writing to deliver the sprint retrospective report as agreed during Tuesday's sync.'"
          },
          {
            label: "5. Scannable Body Paragraphs",
            text: "Single-topic paragraphs separated by clean whitespace, utilizing bullet points for lists to allow rapid reading on mobile devices."
          },
          {
            label: "6. Explicit Call to Action (CTA)",
            text: "Unambiguous statement identifying the required next step and firm deadline. Example: 'Please review and confirm your architectural approval by Friday at 3:00 PM.'"
          },
          {
            label: "7. Professional Signature Block",
            text: "Formal sign-off ('Best regards,', 'Sincerely,'), full legal name, current title/academic year, department, institution, and professional contact links."
          }
        ]
      },
      {
        title: "The 7 Golden Rules of Online Netiquette",
        subtitle: "Digital Protocols for Professional Respect",
        content: [
          "Everything transmitted via institutional or corporate email servers can be subpoenaed, forwarded, or permanently archived. Conduct yourself with the assumption that your message may be read by the executive board."
        ],
        bulletPoints: [
          { label: "1. Explicit Subject Lines Always", text: "Every message must feature a specific subject line containing project name and intent." },
          { label: "2. Absolute Prohibition of ALL CAPS", text: "Typing in all caps ('PLEASE FINISH!') is universally perceived as aggressive digital shouting." },
          { label: "3. Rigorous Proofreading Before Send", text: "Audit names, spelling, tone, and attachment references before clicking send." },
          { label: "4. Professional Email Handle", text: "Use standard institutional or formal naming formats (e.g., first.last@domain.com, never gamer tags)." },
          { label: "5. Attachment Discipline", text: "Ensure attachments are compressed, virus-free, cleanly named, and explicitly referenced in the body text." },
          { label: "6. Respect Response SLAs", text: "Acknowledge receipt within 24 hours on business days, even if only to confirm work in progress." },
          { label: "7. Tone Calibration", text: "Never write or transmit an email when emotionally agitated; apply the 24-hour cooling-off rule." }
        ],
        callout: {
          type: "important",
          title: "The Golden Netiquette Rule",
          text: "Emails are permanent digital records: never write anything in an email that you would not be comfortable seeing projected onto a boardroom presentation screen.",
          author: "Schwalbe & Shipley (2017)"
        }
      },
      {
        title: "Essential Corporate Abbreviations Dictionary",
        subtitle: "Deciphering Workplace Communication Shorthand",
        content: [
          "Corporate emails frequently employ standard business acronyms to streamline communications. Knowing when and how to utilize them is essential for modern workplace fluency."
        ],
        table: {
          headers: ["Abbreviation", "Full Term", "Workplace Meaning & Usage Guideline"],
          rows: [
            ["ASAP", "As Soon As Possible", "High-urgency task; use sparingly to prevent urgency fatigue."],
            ["FYI", "For Your Information", "Shared strictly for recipient awareness; no response or deliverable required."],
            ["COB / EOD", "Close of Business / End of Day", "Submission deadline corresponding to standard office closing (typically 5:00 PM)."],
            ["TBD / TBA", "To Be Decided / Announced", "Parameters pending confirmation; used in scheduling and agendas."],
            ["RSVP", "Répondez s'il vous plaît", "Formal request for attendance confirmation; requires immediate RSVP reply."]
          ]
        }
      }
    ],
    keyTakeaways: [
      "Emails are formal business artefacts: separate 'To' (action owners) from 'Cc' (awareness) and avoid accidental 'Reply All'.",
      "Subject lines must be action-oriented; ALL CAPS is perceived as unprofessional digital shouting.",
      "The 7 Golden Rules of Netiquette protect personal brand and organizational integrity.",
      "Common corporate abbreviations (ASAP, FYI, COB, EOD, TBD, RSVP) streamline executive messaging when applied contextually."
    ],
    interactiveComponentId: "email-annotator",
    vivaPreparation: {
      randomQuestions: [
        "What is the functional and legal difference between placing an email address in the 'To', 'Cc', and 'Bcc' fields?",
        "List four of the 7 Golden Rules of Netiquette and describe the professional consequence of violating them.",
        "What are COB and EOD, and how do they differ from ASAP in operational task assignment?",
        "Deconstruct the anatomy of an effective signature block for a university computing student."
      ],
      defenseProtocol: [
        "Articulate the difference between formal email salutations and informal instant messaging.",
        "Walk through the 7 components of email anatomy in top-to-bottom sequence.",
        "Demonstrate professional composure and clarity in answering."
      ]
    },
    academicReadings: [
      {
        citation: "Schwalbe, W., & Shipley, D. (2017). Send: Why People Email So Badly and How to Do It Better. Knopf Doubleday.",
        annotation: "The preeminent guide to digital communications, tone calibration, and email governance in enterprise environments.",
        link: "https://www.penguinrandomhouse.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Review your sent email folder: have you ever sent an email in anger, or without an explicit subject line?",
        actionItem: "Audit your current email client signature block to ensure it includes your full name, academic degree, institution, and professional links."
      }
    ]
  },
  {
    number: "07",
    slug: "07-telephone-customer-service",
    title: "Telephone Etiquette & Customer Service",
    subtitle: "The 5 Steps to Telephone Excellence, Hold Protocols & The HEAT/LAST De-escalation Model",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "8 min read",
    category: "Customer Service",
    overview: "Covers the mechanics of professional voice communications in client and technical support. Explores physiological vocal smiles, the 5 rules for placing callers on hold, and the HEAT/LAST method for defusing hostile interactions.",
    learningObjectives: [
      "Execute the 5 Steps to Telephone Excellence from prompt pickup to gracious closing.",
      "Understand the biomechanics of the vocal smile and how it alters vocal resonance.",
      "Enforce the 5 immutable rules for placing callers on hold without causing frustration.",
      "Apply the HEAT and LAST de-escalation frameworks to manage upset or hostile callers.",
      "Identify acoustic sensitivities such as misophonia caused by chewing or background noise."
    ],
    sections: [
      {
        title: "The 5 Steps to Telephone Excellence",
        subtitle: "The Sequence of Professional Vocal Engagement",
        content: [
          "Telephone communication is uniquely challenging because it strips away all 55% of body language. Tone of voice (38%) and spoken words (7%) must carry 100% of your professional credibility."
        ],
        bulletPoints: [
          {
            label: "Step 1: Answer Promptly & Smile",
            text: "Pick up before the 3rd ring. Smiling physically elevates the soft palate in the mouth, creating a warmer, more welcoming acoustic resonance that callers detect immediately."
          },
          {
            label: "Step 2: Professional Three-Part Salutation",
            text: "State Department/Company + Full Name + Courteous Offer of Help ('Good morning, Technical Support, Alex speaking, how may I assist you today?')."
          },
          {
            label: "Step 3: Undivided Presence",
            text: "Zero multitasking, loud keyboard clatter, or eating/chewing. Maintain the mouthpiece exactly 1 inch from lips."
          },
          {
            label: "Step 4: Active Note-Taking & Verification",
            text: "Record names phonetically, write down numbers and dates, and recap critical facts back to the caller to ensure perfect alignment."
          },
          {
            label: "Step 5: Gracious Closing",
            text: "Thank the caller sincerely, confirm the next follow-up milestone, and allow the caller to hang up first."
          }
        ]
      },
      {
        title: "5 Rules for Placing Callers on Hold",
        subtitle: "Preserving Customer Goodwill During Inquiries",
        content: [
          "Improper hold protocol is one of the highest drivers of customer frustration. Being put on hold without consent feels dismissive and disrespectful."
        ],
        bulletPoints: [
          { label: "1. Always Request Permission First", text: "'May I place you on a brief hold while I pull up your system logs?'" },
          { label: "2. Wait for Explicit Consent", text: "Never hit the mute or hold button before hearing the caller say 'Yes' or 'Sure'." },
          { label: "3. State an Accurate Expected Timeframe", text: "Specify the duration (never exceed 60-90 seconds without checking back)." },
          { label: "4. Check Back Promptly", text: "If the inquiry requires longer, check back to reassure the caller you are actively working on it." },
          { label: "5. Sincere Gratitude Upon Return", text: "Always thank the caller upon returning: 'Thank you so much for your patience, Mr. Davis.'" }
        ]
      },
      {
        title: "De-escalation of Hostile Callers: The HEAT & LAST Models",
        subtitle: "Transforming Conflict into Customer Loyalty",
        content: [
          "When a customer or stakeholder calls in an angry emotional state, arguing with them triggers defensiveness. Applying structured de-escalation models calms the caller's amygdala and moves the dialogue into rational problem-solving."
        ],
        table: {
          headers: ["Method Stage", "HEAT Framework", "LAST Framework", "Professional Scripting / Action"],
          rows: [
            ["Listen", "Hear without interrupting", "Listen attentively", "'I understand, please tell me exactly what happened with the server outage.'"],
            ["Empathize", "Empathize with their distress", "Apologize with sincerity", "'I realize how stressful this delay has been for your team's launch schedule.'"],
            ["Analyze / Solve", "Analyze the root cause", "Solve the blocker", "'I am reviewing the deployment logs right now to isolate the database deadlock.'"],
            ["Take Action", "Take immediate follow-up", "Thank them for feedback", "'I will personally monitor the hotfix and call you back by 2:00 PM with verification.'"]
          ]
        },
        callout: {
          type: "important",
          title: "Acoustic Sensitivities & Misophonia",
          text: "Over 80% of callers cite chewing gum, eating, or heavy mouth-breathing on the phone as intensely offensive, triggering misophonia (hatred of sound). Maintain complete acoustic hygiene at all times.",
          author: "Evenson (2011)"
        }
      }
    ],
    keyTakeaways: [
      "On the telephone, vocal tone and words carry 100% of your impression; smiling physically lifts the soft palate to create warmth.",
      "Answer before the 3rd ring with a 3-part greeting: Department + Name + Offer of help.",
      "The 5 Hold Rules require asking permission, waiting for consent, stating a duration, and thanking the caller upon return.",
      "The HEAT / LAST de-escalation frameworks diffuse angry callers through active listening, empathy, systematic problem-solving, and verified follow-up."
    ],
    interactiveComponentId: "telephone-simulator",
    vivaPreparation: {
      randomQuestions: [
        "Explain the physiological mechanics behind why 'smiling through the phone' alters vocal resonance.",
        "List the 5 mandatory rules for placing a caller on hold.",
        "Compare and contrast the HEAT and LAST methods for de-escalating angry callers.",
        "Why is eating or chewing gum on the phone considered a catastrophic violation of customer service etiquette?"
      ],
      defenseProtocol: [
        "Simulate a telephone customer greeting with proper vocal projection and pacing.",
        "Demonstrate the de-escalation response using authentic empathy without defensive justification.",
        "Maintain professional posture and vocal poise throughout the defense."
      ]
    },
    academicReadings: [
      {
        citation: "Evenson, R. (2011). Powerful Phrases for Effective Customer Service. AMACOM.",
        annotation: "The definitive guide to customer service de-escalation, professional telephone protocols, and vocal reassurance phrasing.",
        link: "https://www.amacombooks.org"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Reflect on a telephone call where you felt unheard or dismissed: what specific rules did the representative violate?",
        actionItem: "Practice delivering the 3-part professional greeting aloud three times while smiling to hear the difference in vocal warmth."
      }
    ]
  },
  {
    number: "08",
    slug: "08-emotional-intelligence-brain",
    title: "Emotional Intelligence & Brain Dynamics",
    subtitle: "The Triune Brain Model, The Amygdala Hijack & EQ vs. IQ in Tech Leadership",
    academicLead: "Ms. Hubika Joshi",
    academicRole: "Lecturer",
    estimatedReadTime: "9 min read",
    category: "Neuroscience & EQ",
    overview: "Grounds emotional intelligence in evolutionary neuroscience. Analyzes Paul MacLean's Triune Brain Model, Daniel Goleman's Amygdala Hijack mechanism, Paul Ekman's 6 universal emotions, and the comparative value of EQ over IQ.",
    learningObjectives: [
      "Understand the three evolutionary layers of Paul MacLean's Triune Brain Model.",
      "Identify the neurobiological mechanism of the Amygdala Hijack and apply the 6-to-10 second respiration pause.",
      "Recognize Paul Ekman's 6 hard-wired universal human emotions.",
      "Contrast Emotional Quotient (EQ) and Intelligence Quotient (IQ) in career advancement.",
      "Develop the 4 core domains of EQ: Self-Awareness, Self-Management, Social Awareness, and Relationship Management."
    ],
    sections: [
      {
        title: "Neuroscience Foundation: The Triune Brain Model",
        subtitle: "The Three Evolutionary Strata of Human Cognition",
        content: [
          "Developed by neuroscientist Paul MacLean, the Triune Brain Model conceptualizes the human brain as three distinct, evolutionarily layered systems that cooperate (and frequently clash) under pressure."
        ],
        bulletPoints: [
          {
            label: "1. Reptilian Complex (Brainstem & Cerebellum)",
            text: "The oldest evolutionary layer (~500 million years old). Controls autonomic physical functions (heart rate, breathing) and instinctual survival drives: fight, flight, or freeze."
          },
          {
            label: "2. Limbic System (Mammalian Brain — Amygdala & Hippocampus)",
            text: "Evolved in early mammals (~150 million years old). The seat of emotions, social bonding, memory encoding, and rapid threat appraisal. Prioritizes immediate emotional survival over logic."
          },
          {
            label: "3. Neocortex (Prefrontal Cortex — 'The CEO')",
            text: "The newest evolutionary development. Responsible for rational logic, abstract deduction, architectural planning, impulse inhibition, and ethical decision-making."
          }
        ]
      },
      {
        title: "The Amygdala Hijack Mechanism (Goleman, 1995)",
        subtitle: "How Stress Short-Circuits Executive Function",
        content: [
          "When sensory input enters the brain via the thalamus, it splits into two pathways: a slow, high-resolution route to the Neocortex for rational processing, and a high-speed emergency shortcut to the Amygdala.",
          "When emotional stimuli are perceived as threats (e.g., severe critical feedback from a tech lead), the amygdala triggers an immediate flood of adrenaline and cortisol before the prefrontal cortex can process the data.",
          "This causes an 'Amygdala Hijack'—irrational outbursts, defensive panic, or cognitive shutdown."
        ],
        callout: {
          type: "tip",
          title: "The 6-to-10 Second Respiration Protocol",
          text: "Neurological research demonstrates that an amygdala hormonal surge lasts between 6 and 10 seconds. Taking slow, deep diaphragmatic breaths during this critical window replenishes prefrontal oxygenation, allowing the rational 'CEO' to regain command before you speak or act.",
          author: "Daniel Goleman"
        }
      },
      {
        title: "Paul Ekman's 6 Universal Emotions & EQ vs. IQ",
        subtitle: "Hard-Wired Biology and Workplace Performance",
        content: [
          "Psychologist Paul Ekman demonstrated across diverse global cultures that all human beings share six primary, biologically hard-wired emotions: Joy, Anger, Disgust, Fear, Sadness, and Surprise.",
          "In the knowledge workplace, IQ gets an engineer hired for technical skills, but EQ determines whether they can lead teams, resolve conflicts, withstand sprint pressure, and earn executive trust."
        ],
        table: {
          headers: ["Attribute", "Emotional Intelligence (EQ)", "Intelligence Quotient (IQ)"],
          rows: [
            ["Cognitive Focus", "Understanding, regulating, and harnessing emotions effectively.", "Logical reasoning, mathematical ability, and abstract spatial retention."],
            ["Plasticity Over Lifetime", "Dynamically expandable throughout life through deliberate practice.", "Relatively static after late adolescence and early adulthood."],
            ["Workplace Predictor", "Predicts leadership trajectory, stress resilience, and team cohesion.", "Predicts baseline technical comprehension and raw coding speed."],
            ["Crisis Performance", "Enables calm de-escalation, empathy, and psychological safety.", "Can break down into defensive paralysis during emotional conflict."]
          ]
        }
      }
    ],
    keyTakeaways: [
      "The Triune Brain consists of the Reptilian Complex (survival), Limbic System (emotion), and Neocortex (rational CEO).",
      "The Amygdala Hijack occurs when emotional stimuli bypass rational thinking; a 6-to-10 second respiration pause restores executive control.",
      "Paul Ekman identified 6 hard-wired emotions: Joy, Anger, Disgust, Fear, Sadness, and Surprise.",
      "EQ > IQ in the modern tech industry: technical skills solve code problems, but emotional intelligence solves human collaboration challenges."
    ],
    interactiveComponentId: "triune-brain",
    vivaPreparation: {
      randomQuestions: [
        "Explain the evolutionary neurobiology of the Amygdala Hijack and how the 6-to-10 second breathing pause mitigates it.",
        "List the three layers of Paul MacLean's Triune Brain Model and describe their respective workplace roles.",
        "Why is Emotional Intelligence (EQ) considered a superior predictor of executive success than IQ in software development?",
        "Name Paul Ekman's 6 universal human emotions and explain why they are culturally invariant."
      ],
      defenseProtocol: [
        "Explain the neurobiology calmly, using hand gestures to represent the brain's evolutionary layers.",
        "Connect the scientific theory to real-world software engineering stress scenarios.",
        "Demonstrate vocal self-regulation and composed poise under questioning."
      ]
    },
    academicReadings: [
      {
        citation: "Goleman, D. (1995). Emotional Intelligence: Why It Can Matter More Than IQ. Bantam Books.",
        annotation: "The seminal work that redefined leadership, proving that self-awareness, empathy, and emotional regulation drive corporate excellence.",
        link: "https://www.danielgoleman.info"
      },
      {
        citation: "MacLean, P. D. (1990). The Triune Brain in Evolution: Role in Paleocerebral Functions. Plenum Press.",
        annotation: "Detailed evolutionary neuroscience monograph mapping the phylogenetic development of the human brain.",
        link: "https://link.springer.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Reflect on a recent moment where you experienced an amygdala hijack: what physical symptoms did you experience before reacting?",
        actionItem: "Practice the 6-to-10 second deep breathing protocol the next time you encounter a frustrating compilation bug or unexpected code review comment."
      }
    ]
  },
  {
    number: "09",
    slug: "09-dining-etiquette-table-manners",
    title: "Dining Etiquette & Table Manners",
    subtitle: "Formal Table Geography, Cutlery Signaling Codes & Continental vs. American Styles",
    academicLead: "Mrs. Ishara Raviharee Weerasinghe",
    academicRole: "Lecturer In Charge",
    estimatedReadTime: "8 min read",
    category: "Executive Protocol",
    overview: "Unpacks executive formal dining protocols for business dinners and diplomatic banquets. Details the 'Outside-In' silverware rule, the 'b' and 'd' spatial trick, Continental vs. American styles, silent utensil signals, and social taboos.",
    learningObjectives: [
      "Master the architectural geography of a formal multi-course table setting.",
      "Apply the 'Outside-In' cutlery progression rule and the 'b' and 'd' spatial mnemonic.",
      "Contrast the Continental / European dining style with the American Zig-Zag style.",
      "Communicate silently with banquet service staff using universal resting and finished utensil codes.",
      "Identify high-risk executive social taboos: dropped silverware, toothpick usage, and digital devices."
    ],
    sections: [
      {
        title: "The Architectural Geography of the Formal Table Setting",
        subtitle: "Deciphering the Multi-Course Place Setting",
        content: [
          "High-level business contracts, executive hiring decisions, and diplomatic alliances are frequently sealed over formal corporate dinners. Dining etiquette is not mere elitism; it is a universal signifier of discipline, mindfulness, and social poise."
        ],
        bulletPoints: [
          {
            label: "The 'Outside-In' Silverware Rule",
            text: "Utensils are arranged in the exact order of meal service. Begin each course using the outermost silverware (salad fork/soup spoon) and progress inward toward the main plate."
          },
          {
            label: "The 'b' and 'd' Spatial Finger Mnemonic",
            text: "Make circular loops by touching index fingers to thumbs on both hands under the table: the left hand forms the letter 'b' (Bread plate is on your left), while the right hand forms the letter 'd' (Drink glasses are on your right)."
          },
          {
            label: "Cutlery Placement Geography",
            text: "Forks are placed strictly on the left of the dinner plate; knives (with cutting blades turned facing inward toward the plate) and spoons are placed on the right. Dessert silver rests horizontally above the plate."
          }
        ]
      },
      {
        title: "International Dining Styles: Continental vs. American",
        subtitle: "Elegance and Efficiency at the Table",
        content: [
          "Two primary dining styles dominate global corporate settings. In international business, the Continental method is widely preferred for its continuous elegance and efficiency."
        ],
        table: {
          headers: ["Dining Style", "Cutlery Mechanics", "Hand Switching", "Efficiency & Formality Rating"],
          rows: [
            ["Continental / European Style (Recommended)", "Fork held continuously in left hand (tines pointed downward), knife in right hand. Food conveyed directly to mouth without switching.", "Zero hand switching; highly efficient, elegant, and recommended for measured conversation.", "International Gold Standard for executive and diplomatic dining."],
            ["American 'Zig-Zag' Style", "Knife held in right hand to cut food while fork holds item with left hand. Knife rested on plate edge, fork transferred to right hand (tines upward) to eat.", "Constant hand switching between cutting and eating.", "Standard in domestic US dining; slower and more segmented."]
          ]
        }
      },
      {
        title: "Utensil Signaling Codes & Executive Taboos",
        subtitle: "Silent Communication with Banquet Service Staff",
        content: [
          "In formal banquets, servers are trained to read cutlery placement without speaking to or interrupting diners."
        ],
        bulletPoints: [
          {
            label: "Resting Position (Still Eating)",
            text: "Place fork and knife in an inverted 'V' formation across the center of the plate (tips pointing toward 12 o'clock, handles at 4 and 8 o'clock). Tines point downward in Continental style."
          },
          {
            label: "Finished Position (Ready to Clear)",
            text: "Place fork and knife parallel together either vertically (12 to 6 o'clock) or diagonally (11 to 5 o'clock) with knife blade facing inward and fork tines upward."
          },
          {
            label: "Napkin Protocol",
            text: "Place napkin on lap immediately upon sitting (never tuck into collar). When stepping away temporarily, place loosely on your chair seat. At meal conclusion, place loosely on the left side of your place setting."
          },
          {
            label: "Executive Social Taboos",
            text: "Never pick up dropped silverware (ask server for replacement); never use toothpicks at the table; pass salt and pepper shakers together as inseparable companions; zero mobile phones on the table."
          }
        ],
        callout: {
          type: "important",
          title: "The Golden Rule of Table Manners",
          text: "Never pick up dropped silverware from the floor, never use toothpicks at the table, and always pass salt and pepper together as inseparable partners.",
          author: "Emily Post Institute"
        }
      }
    ],
    keyTakeaways: [
      "Always follow the 'Outside-In' rule for silverware and the 'b' and 'd' finger mnemonic for bread (left) and drinks (right).",
      "Continental dining (fork in left hand, knife in right, no switching) is the international standard for executive dining.",
      "Utensil placement signals service staff silently: inverted 'V' for resting; parallel together at 11-to-5 or 12-to-6 for finished.",
      "Napkins belong on the lap (never in collar); never pick up dropped utensils; salt and pepper must always be passed together."
    ],
    interactiveComponentId: "dining-table",
    vivaPreparation: {
      randomQuestions: [
        "Explain the 'b' and 'd' finger mnemonic and how it prevents reaching for another diner's bread plate or glass.",
        "Demonstrate the resting and finished utensil signaling positions and explain their meaning to waitstaff.",
        "Contrast Continental European dining with the American Zig-Zag style.",
        "List three major dining taboos that can destroy an executive candidate's credibility during a formal recruitment dinner."
      ],
      defenseProtocol: [
        "Explain table setting geography with accurate spatial descriptions.",
        "Demonstrate the correct hand grip for knife and fork in Continental style.",
        "Present with executive poise, clarity, and confidence."
      ]
    },
    academicReadings: [
      {
        citation: "Post, L., & Post, D. (2022). Emily Post's Etiquette: The Centennial Edition. Ten Speed Press.",
        annotation: "The preeminent authority on formal dining protocol, diplomatic precedence, and corporate social decorum.",
        link: "https://emilypost.com"
      }
    ],
    reflectionPrompts: [
      {
        prompt: "Reflect on a formal dinner you attended: did you instinctively reach for the correct bread plate and beverage glass?",
        actionItem: "Set a formal place setting at home using the Outside-In rule, practicing the Continental dining style with fork tines downward."
      }
    ]
  }
];
