# AGENTS.md — Professional Skills E-Portfolio Development Guidelines & Instruction Manual

> **Permanent Project Guideline & Instruction Manual**  
> **Target Project:** Professional Skills E-Portfolio (University Academic Module)  
> **Status:** Active & Mandatory for all AI Agents and Developers  
> **Last Updated:** 2026-11-13  
> **Primary Academic Reference:** `reference/PS.pdf`

---

## 1. PROJECT OVERVIEW

### 1.1 Project Name & Definition
- **Project Name:** Professional Skills E-Portfolio
- **Nature of Project:** A state-of-the-art, interactive, academic e-portfolio web application developed for a university undergraduate module in **Professional Skills**.
- **Module Leadership Context:** Inspired by the pedagogical framework developed by Senior Lecturer Mrs. Ishara Raviharee Weerasinghe (Senior Lecturer in English & Lecturer In Charge for Professional Skills).

### 1.2 Core Purpose
The primary purpose of this portfolio is to curate, synthesize, and present rigorous academic learning, self-discovery, interpersonal mastery, and professional readiness across the nine foundational pillars of modern professional competence. It serves as:
1. A formal submission-ready **Assessment Portfolio** for university faculty and academic evaluators.
2. A polished, modern **Career & Dossier Portfolio** showcasing workplace readiness, emotional intelligence, communication excellence, and digital identity to prospective employers and industry recruiters.
3. A reflective learning log documenting personal development, character alignment, and growth mindset evolution.

### 1.3 Intended Audience
- **Academic Evaluators & Lecturers:** Require structural rigor, comprehensive coverage of all nine academic chapters, clear alignment with theoretical frameworks (e.g., Johari Window, Triune Brain Model, Mehrabian's Rule, 7 C's of Communication), transparent assessment criteria, and academic citations.
- **Industry Recruiters & Potential Employers:** Expect clean modern aesthetics, intuitive UX, clear demonstration of soft and transferable skills, professional communication standards, and real-world applicability.
- **Peer Reviewers & Professional Network:** Seek inspiration, collaborative insights, and benchmark-quality digital presentation.

### 1.4 Fundamental Mandates
- **Demonstration of Competence:** The portfolio must seamlessly balance academic depth, reflective self-awareness, professional polish, and technical web engineering.
- **Strict Academic Integrity:** Academic content must strictly adhere to the university curriculum preserved in `reference/PS.pdf`. Never omit a chapter, synthesize superficial summaries, or distort core models.
- **No Fabricated Personal Details:** Personal experiences, achievements, and identities must be strictly modular and template-ready with editable placeholders. Never extract or present personal student data from the reference PDF as the live student's data.

---

## 2. TECHNOLOGY STACK

The project must strictly utilize modern, production-grade web technologies adhering to current best practices, strict type safety, modular design, and robust dependency alignment.

| Technology | Role / Specification | Guidelines & Requirements |
| :--- | :--- | :--- |
| **Next.js** | Core Framework (App Router) | Version 14+ / 15 with Server Components (RSC) by default; use Client Components (`"use client"`) strictly when required for interactivity, animations, or DOM state. |
| **TypeScript** | Strict Type System | 100% strict typing (`strict: true` in `tsconfig.json`). Zero usage of `any`. Explicit interfaces for academic models, chapter data, navigation, and user placeholders. |
| **Tailwind CSS** | Styling & Design System | Utility-first styling configured with custom design tokens for luxury editorial aesthetics. Dark-mode native palette with light mode accents. |
| **Framer Motion** | Animation & Micro-Interactions | Restrained, physics-based UI transitions, scroll-triggered reveals, spring physics, and strict accessibility respect (`prefers-reduced-motion`). |
| **Lucide React** | Iconography | High-clarity, consistent stroke weight (1.5px to 2px) semantic icons. |
| **Node.js Environment** | Runtime Engine | LTS release compatible with modern Next.js build pipelines. |

### Dependency Governance
- Maintain complete compatibility between `next`, `react`, `react-dom`, `framer-motion`, and `lucide-react`.
- Avoid adding redundant UI component libraries or heavyweight styling wrappers.
- All styles and utility functions must remain clean, modular, and performant.

---

## 3. DESIGN SYSTEM & VISUAL IDENTITY

The design language moves deliberately away from clichéd SaaS cards, loud gradients, unreadable glassmorphism, and boilerplate university templates. It establishes an **haute-editorial, modern academic publication aesthetic** reminiscent of high-end architectural monographs and bespoke executive portfolios.

### 3.1 Color Palette & Design Tokens

```
====================================================================================
Token Name             Hex Code     RGB Equivalent     Usage / Semantic Role
====================================================================================
Primary Background     #0B0B0D      rgb(11, 11, 13)    Deep obsidian dark canvas
Secondary Background   #141417      rgb(20, 20, 23)    Elevated section background
Surface                #1C1C20      rgb(28, 28, 32)    Cards, modals, subtle panels
Light Background       #F5F5F2      rgb(245, 245, 242) High-contrast editorial callouts
Primary Accent         #C6A76B      rgb(198, 167, 107) Warm champagne gold (key actions, highlights)
Secondary Accent       #E4D4B0      rgb(228, 212, 176) Soft parchment gold (hover states, borders)
Primary Text           #F5F5F5      rgb(245, 245, 245) Main body & heading typography on dark
Secondary Text         #A5A5AA      rgb(165, 165, 170) Subheadings, metadata, captions
Dark Text              #181818      rgb(24, 24, 24)    Text on light background panels
Border Subdued         rgba(255,255,255,0.08)          Delicate hairline borders
Border Accent          rgba(198,167,107,0.3)           Gold interactive hairline borders
====================================================================================
```

### 3.2 Typography Hierarchy

- **Headings & Display:** `Space Grotesk` (sans-serif) — bold, structural, contemporary, and engineered.
- **Body & Functional Text:** `Inter` (sans-serif) — exceptionally legible, balanced optical kerning, neutral clarity.
- **Editorial & Accents:** Elegant Serif (`Playfair Display`, `Cinzel`, or `Cormorant Garamond` via `next/font/google`) — utilized selectively for chapter epigraphs, quotes, theoretical definitions, and formal acknowledgements.

```css
/* Typography Scale Standards */
Display Hero:    text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display
Section Title:   text-3xl md:text-5xl font-semibold tracking-tight font-display
Chapter Subhead: text-xl md:text-2xl font-medium text-accent-secondary
Body Standard:   text-base md:text-lg leading-relaxed text-text-secondary font-sans
Editorial Quote: text-xl md:text-2xl italic font-serif text-accent-primary
Caption/Meta:    text-xs md:text-sm uppercase tracking-widest text-text-muted
```

### 3.3 Design Principles & Visual Rules
1. **Restraint over Clutter:** Generous whitespace (padding/margins) to let complex academic diagrams and text breathe.
2. **Hairline Precision:** Clean `1px` borders (`border-white/10` or `border-accent/20`) instead of heavy dropshadows.
3. **Structured Editorial Layouts:** Asymmetrical magazine-style two-column and three-column grids, large chapter numbers (`01`, `02` ... `09`), and distinct visual markers for theory vs. personal reflection.
4. **No Generic Anti-Patterns:**
   - ❌ NO neon multi-color gradient blur spheres.
   - ❌ NO excessive frosted-glass effects that hinder legibility.
   - ❌ NO repetitive boilerplate cards where every chapter looks identical.
   - ❌ NO unstyled walls of academic text.
   - ❌ NO tiny, unreadable tables squeezed onto mobile screens.

---

## 4. ACADEMIC CONTENT REQUIREMENTS

The portfolio must contain all **nine distinct learning chapters** derived from `reference/PS.pdf`. Under no circumstances may any chapter be skipped, merged into ambiguity, or trivialized. Every chapter must represent its theoretical background, practical activities, diagrams/tables, key takeaways, and academic references.

```
+==================================================================================+
|                         THE 9 ACADEMIC CHAPTERS MATRIX                           |
+----+-----------------------------------------------------+-----------------------+
| Ch | Chapter Title                                       | Academic Focus        |
+----+-----------------------------------------------------+-----------------------+
| 01 | Introduction to Professional Skills & Johari Window | Self-Awareness & Mind |
| 02 | Portfolio Management & Engineering Digital Blueprint| Career Architecture   |
| 03 | Job Interviews & Mock Interview Skills              | Non-Verbal & STAR     |
| 04 | CV Writing & Career Documents                       | ATS & Strategic Pitch |
| 05 | Speaking Skills & Effective Meetings                | 7 C's & Parliamentary |
| 06 | Professional Email & Online Etiquette               | Digital Netiquette    |
| 07 | Telephone Etiquette & Customer Service              | Vocal Poise & De-esc  |
| 08 | Emotional Intelligence & Brain Dynamics             | Neuroscience & EQ     |
| 09 | Dining Etiquette & Table Manners                    | Executive Protocol    |
+----+-----------------------------------------------------+-----------------------+
```

### 4.1 Detailed Chapter Specifications

#### Chapter 01: Introduction to Professional Skills & Johari Window
- **Academic Lead:** Mrs. Ishara Raviharee Weerasinghe (Senior Lecturer in English | Lecturer In Charge).
- **Workplace Skills Taxonomy:**
  - *Technical Skills (Hard Skills):* Domain-specific abilities (e.g., Coding/IT, Data Analysis, System Architecture).
  - *Soft Skills (Interpersonal):* People orientation (e.g., Empathy, Active Listening, Team Collaboration).
  - *Transferable Skills:* Versatile cross-industry meta-capabilities (e.g., Problem-Solving, Adaptability, Time Management).
- **The Pillars of Character Framework (Mind Map):**
  - *Values:* Honesty, Integrity, Responsibility, Respect, Fairness.
  - *Beliefs:* Growth Mindset (vs. Fixed Mindset), Self-Efficacy, Internal Locus of Control.
  - *Attitudes:* Constructive Optimism, Intellectual Humility, Empathy, Tolerance.
  - *Character Outcomes:* Respectfulness, Ethical Courage, Social Caring.
- **The Johari Window Model (Luft & Ingham, 1955):**
  - Interactive 4-quadrant dynamic model:
    1. *Open Area (Arena):* Known to Self & Known to Others. (Goal: Expand through active feedback & disclosure).
    2. *Blind Area (Blind Spot):* Unknown to Self & Known to Others. (Goal: Shrink via soliciting constructive feedback).
    3. *Hidden Area (Façade):* Known to Self & Unknown to Others. (Goal: Shrink via appropriate self-disclosure).
    4. *Unknown Area:* Unknown to Self & Unknown to Others. (Discovered through novel challenges & crises).
  - Integration of personal strengths assessment (e.g., MyGrow Personal Strengths taxonomy).
- **Core Key Takeaways:**
  - Technical skills get the candidate an interview; soft and transferable skills retain the job and secure promotions.
  - Expanding the Open Arena directly drives psychological safety and team synergy.
- **Academic Citations:**
  - Dweck, C. S. (2006). *Mindset: The New Psychology of Success*. Random House.
  - Luft, J., & Ingham, H. (1955). "The Johari Window: A Graphic Model of Interpersonal Awareness." *Proceedings of the Western Training Laboratory in Group Development*.

---

#### Chapter 02: Portfolio Management & Engineering Your Digital Blueprint
- **The 4 Primary Portfolio Archetypes:**
  1. *Personal Portfolio:* Creative self-expression, UX/UI, multimedia artifacts for clients and creative communities.
  2. *Career / Dossier Portfolio:* Formal credentials, resume, transcripts, recommendations for hiring panels.
  3. *Employment Portfolio:* Internal performance reviews, leadership contributions, KPI achievements for promotion.
  4. *Assessment Portfolio:* University learning progress, self-critique, viva readiness, and pedagogical reflections.
- **The 3-Phase Portfolio Engineering Lifecycle:**
  - *Phase 1 — Strategy:* Purpose definition, audience mapping, format selection (digital web application vs. physical binder).
  - *Phase 2 — Assembly:* Systematic artifact gathering, modular categorization, contextualization ("Context is King").
  - *Phase 3 — Maintenance & Viva Defense:* Continuous iteration, version control, formal defense preparation.
- **Assessment Portfolio Viva Protocol:**
  - Formal academic defense rules: Strict business formal dress code, 15-minute prior arrival, answering 4 randomized viva cards drawn from the assessment box, presenting clear contextual evidence.
- **Academic Citations:**
  - Burnett, B., & Evans, D. (2016). *Designing Your Life: How to Build a Well-Lived, Joyful Life*. Knopf.
  - Zubizarreta, J. (2009). *The Learning Portfolio: Reflective Practice for Improving Student Learning*. Jossey-Bass.

---

#### Chapter 03: Job Interviews & Mock Interview Skills
- **Interview Conceptualization:** A structured, high-stakes, two-way evidence-gathering professional dialogue.
- **The Three Mandatory Candidate Questions:**
  1. *Why are you here?* (Passion, institutional alignment, career narrative).
  2. *What can you do for us?* (Hard competency, ROI, concrete problem-solving track record).
  3. *What kind of person are you?* (Culture fit, emotional stability, ethics, team dynamics).
- **The 6 C's (+ Confident) Evaluation Framework:**
  - Clear, Concise, Concrete, Correct, Coherent, Courteous, and Confident.
  - Comparative analysis: Successful vs. Unsuccessful candidates (deep company research vs. superficial buzzwords).
- **Mehrabian's Communication Model (1971):**
  - **55% Body Language** (Posture, open gestures, authentic eye contact, attire).
  - **38% Tone of Voice** (Pitch inflection, pace, volume, vocal warmth).
  - **7% Spoken Words** (Content, lexical choice, precision).
- **The STAR Behavioral Answering Methodology:**
  - **S**ituation (Contextual background).
  - **T**ask (Challenge/objective assigned).
  - **A**ction (Specific technical and interpersonal actions executed by the candidate).
  - **R**esult (Quantifiable outcomes, lessons learned, positive impact).
- **Grammatical Precision for Interviews:**
  - Present Tense for current strengths/habits; Past Simple / Present Perfect for completed projects and accomplishments; Future forms for aspirations.

---

#### Chapter 04: CV Writing & Career Documents
- **The 6 Essential Anatomy Components of a Winning CV:**
  1. *Header & Contact Data:* Full legal name, professional email (no casual handles), verified phone, location, LinkedIn, GitHub.
  2. *Professional Summary:* High-impact 3-line elevator pitch highlighting domain specialty and value proposition.
  3. *Work & Project Experience:* Reverse chronological sequence, dynamic action verbs, quantifiable metrics.
  4. *Education & Academic Honors:* Degree, institution, expected graduation, honors, relevant coursework.
  5. *Categorized Skills:* Segregated by Programming Languages, Frameworks, Tools, and Interpersonal proficiencies.
  6. *Referees:* Professional/academic references with verified contact information and prior consent.
- **CV Format Comparative Matrix:**
  - *Chronological CV:* Best for continuous career progression in consistent fields.
  - *Functional (Skills-Based) CV:* Tailored for career switchers or candidates with employment gaps.
  - *Combination / Hybrid CV:* Modern standard blending key skill competencies with chronological work history.
- **ATS (Applicant Tracking System) Optimization Rules:**
  - Standard fonts, zero graphic column nesting that confuses parsers, keyword alignment with job specifications, standard section titles.
- **CV vs. Resume Distinct Distinction:**
  - CV (Curriculum Vitae): Comprehensive, multi-page academic/professional record.
  - Resume: Highly concise, 1-2 page tailored marketing summary for specific private-sector job openings.

---

#### Chapter 05: Speaking Skills & Effective Meetings
- **The 7 C's of Executive Communication:**
  - Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.
- **Meeting Typology & Governance:**
  - *Internal Technical Sync:* Agile standup, sprint retrospectives.
  - *Client Negotiations & Customer Pitch:* External value alignment, contractual consensus.
  - *Executive Governance:* Board Meetings, AGM (Annual General Meeting), EGM (Extraordinary General Meeting).
- **The 10-Point Meeting Planning Checklist:**
  1. Explicit Purpose & Desired Outcomes.
  2. Strictly Timed Agenda circulated at least 48 hours in advance.
  3. Essential Participant Curation (avoid spectator bloat).
  4. Room Environment Optimization (maintain cooler ambient temperature to preserve alertness).
  5. Technology & AV Pre-Testing.
  6. Chairperson as Diplomatic Referee (moderating dominant voices, drawing out quiet members).
  7. Timekeeping Discipline (adhere to start/finish times).
  8. Minutes & Action Item Recording.
  9. Immediate Post-Meeting Distribution of Responsibilities.
  10. Follow-up Accountability Verification.

---

#### Chapter 06: Professional Email & Online Etiquette
- **Anatomy of an Executive Professional Email:**
  - *Recipient Field Protocol:* Judicious separation of `To` (primary action owners), `Cc` (informational stakeholders), and `Bcc` (confidential distribution / large lists). Strict avoidance of accidental "Reply All".
  - *Subject Line:* Action-oriented, concise, specific (e.g., `[Action Required] Project Alpha Architecture Review - Q3`).
  - *Salutation:* Formal, role-appropriate address (`Dear Professor Jayawardane,` or `Dear Ms. Maneesha,`).
  - *Opening Line:* Contextual, respectful hook without casual slang.
  - *Body Paragraphs:* Scannable, modular, single-topic blocks with bullet points where appropriate.
  - *Call to Action (CTA):* Explicit next step with deadline.
  - *Sign-off & Executive Signature Block:* Professional sign-off, full name, title, department, institution, contact channels.
- **The 7 Golden Rules of Netiquette:**
  1. Explicit subject lines always.
  2. Absolute prohibition of `ALL CAPS` (perceived as shouting).
  3. Rigorous proofreading before transmission.
  4. Professional email handle (e.g., `first.last@domain.com`).
  5. Attachment discipline (compressed, correctly named, referenced in body).
  6. Rapid response SLAs (within 24 hours on business days).
  7. Tone calibration (assuming all emails can be forwarded or archived permanently).
- **Essential Corporate Abbreviations Dictionary:**
  - `ASAP` (As Soon As Possible), `FYI` (For Your Information — No action needed), `COB` / `EOD` (Close of Business / End of Day), `TBD` / `TBA` (To Be Decided / Announced), `RSVP` (Répondez s'il vous plaît).

---

#### Chapter 07: Telephone Etiquette & Customer Service
- **The 5-Step Telephone Excellence Protocol:**
  - *Step 1 — Prompt Answering & Vocal Smile:* Pick up within 3 rings; smiling physically lifts the soft palate, producing a warmer, more resonant vocal frequency.
  - *Step 2 — Professional Salutation:* Department + Full Name + Courteous opening ("Good morning, Technology Support, Alex speaking, how may I assist you today?").
  - *Step 3 — Undivided Presence:* Zero multitasking, eating, typing loudly, or secondary conversations.
  - *Step 4 — Active Note-taking & Verification:* Accurate recording of names, phonetic spelling, contact digits, and precise recap.
  - *Step 5 — Gracious Closing:* Formal thank you, reassurance of follow-up timeline, allowing the caller to hang up first.
- **The 5 Immutable Rules for Placing Callers on Hold:**
  1. Always request permission first ("May I place you on a brief hold while I pull up your file?").
  2. Wait for the caller's explicit consent before muting/transferring.
  3. State an accurate expected duration (never exceed 60-90 seconds without checking back).
  4. Re-engage promptly if the delay extends.
  5. Thank the caller sincerely upon return ("Thank you for your patience, Mr. Davis").
- **De-escalation of Hostile Callers (The HEAT / LAST Method):**
  - **H**ear / **L**isten attentively without interruption.
  - **E**mpathize / **A**pologize with authentic concern ("I understand how frustrating this delay has been for your team").
  - **A**nalyze / **S**olve the underlying blocker systematically.
  - **T**hank / **T**ake Action with verified follow-through.
- **Acoustic & Social Sensitivities:**
  - Maintaining handset mouthpiece 1 inch from lips; eliminating chewing gum/food (cited by 80% of callers as offensive, triggering misophonia).

---

#### Chapter 08: Emotional Intelligence & Brain Dynamics
- **Neuroscience Foundation — The Triune Brain Model (Paul MacLean):**
  1. *Reptilian Complex (Brainstem & Cerebellum):* Primitive instinctual survival, autonomic physical regulation, fight-or-flight triggers.
  2. *Limbic System (Mammalian Brain — Amygdala & Hippocampus):* Emotional seat, memory encoding, rapid affective reactions.
  3. *Neocortex (Prefrontal Cortex — "The Corporate CEO"):* Executive decision-making, rational logic, abstract deduction, impulse inhibition.
- **The Amygdala Hijack Mechanism (Daniel Goleman):**
  - When emotional stimuli bypass rational prefrontal processing, triggering immediate defensive aggression or panic.
  - The **6-to-10 Second Respiration Interruption**: Deep breathing recalibrates physiological oxygenation, allowing the prefrontal cortex to regain cognitive command.
- **The 6 Primary Hard-Wired Emotions (Paul Ekman):**
  - Joy, Anger, Disgust, Fear, Sadness, Surprise.
- **Comparative Analysis: EQ vs. IQ in the Knowledge Workplace:**
  - *IQ:* Predicts baseline technical absorption and technical aptitude; remains relatively fixed after young adulthood.
  - *EQ:* Determines leadership trajectory, conflict resolution, collaborative durability, and stress tolerance; dynamically expandable throughout life.
- **The 4 Core Domains of Emotional Intelligence:**
  1. *Self-Awareness:* Accurate self-assessment, emotional radar.
  2. *Self-Management:* Emotional self-control, adaptability, integrity.
  3. *Social Awareness:* Organizational empathy, service orientation.
  4. *Relationship Management:* Inspirational leadership, constructive conflict mediation.

---

#### Chapter 09: Dining Etiquette & Table Manners
- **The Architectural Geography of the Formal Table Setting:**
  - *The "Outside-In" Cutlery Rule:* Progress through utensils from outermost edges inwards corresponding to each successive course.
  - *The "b" and "d" Spatial Finger Technique:* Making circular loops with index finger and thumb indicates bread plate on the left (`b`) and drink glass on the right (`d`).
  - *Cutlery Geography:* Forks on left, dinner knives (blades turned inward toward plate) and soup spoons on right, dessert silver horizontally above plate.
- **International Dining Styles:**
  - *Continental / European Style (Recommended):* Fork held continuously in left hand (tines pointed downward), knife in right hand; food conveyed directly to mouth without switching hands.
  - *American "Zig-Zag" Style:* Knife cuts food in right hand, knife is rested on rim of plate, fork switched to right hand (tines pointed upward) to eat.
- **Utensil Signaling Codes:**
  - *Resting Position:* Fork and knife positioned at an inverted "V" (4 and 8 o'clock or 8 and 4) indicating the diner is still eating.
  - *Finished Position:* Knife and fork placed parallel together vertically or diagonally (11 to 5 or 12 to 6 o'clock) with tines upward, signaling the server to clear the service.
- **Executive Protocol & Social Taboos:**
  - Napkin deployed immediately onto lap (never tucked into collar); if stepping away temporarily, placed neatly on seat; at conclusion of meal, placed loosely on left side of place setting.
  - Never pick up dropped silverware (ask server for replacement).
  - Pass salt and pepper shakers together as inseparable companions.
  - Strict prohibition of toothpicks, grooming, or mobile phones on the dining table.

---

## 5. WEBSITE STRUCTURE & ROUTING

The application must be architected with Next.js App Router, supporting deep-linking, semantic URL hierarchy, dynamic meta headers, and accessible navigation.

```
/ (Root)
│
├── / (Home / Landing)
│   ├── Editorial Hero Banner & Student Overview
│   ├── Quick Module Meta (Module Lead, Term, Academic Year)
│   ├── 9 Chapters Interactive Showcase Matrix
│   ├── Core Competencies & Skills Radar Summary
│   └── Call to Action (Explore Chapters / View Dossier)
│
├── /about (About Me & Philosophy)
│   ├── Student Bio & Academic Background (Placeholder)
│   ├── Philosophy of Professional Practice
│   ├── Values, Beliefs & Character Alignment Map
│   └── Career Trajectory & Learning Goals
│
├── /learning-portfolio (Curriculum Hub)
│   ├── Comprehensive Overview of the 9 Chapters
│   ├── Dynamic Filtering (Theoretical, Communication, Executive Skills)
│   └── Progress & Reflection Completion Tracker
│
├── /chapters/[slug] (Individual Learning Chapters - 9 Dedicated Views)
│   ├── 01-introduction-johari-window
│   ├── 02-portfolio-management-blueprint
│   ├── 03-job-interviews-mock-skills
│   ├── 04-cv-writing-career-docs
│   ├── 05-speaking-skills-meetings
│   ├── 06-professional-email-etiquette
│   ├── 07-telephone-customer-service
│   ├── 08-emotional-intelligence-brain
│   └── 09-dining-etiquette-table-manners
│
├── /reflections (Reflective Learning Synthesis)
│   ├── Gibbs' Reflective Cycle / Rolfe's Framework Implementation
│   ├── Personal Evolution Before vs. After the Module
│   └── Longitudinal Action Plan for Career Readiness
│
├── /evidence (Evidence & Documentation Gallery)
│   ├── Mock Interview Video / Audio Artefact Placeholders
│   ├── Sample CV & ATS Analysis Report Placeholders
│   ├── Professional Correspondence Transcripts
│   ├── Johari Window Peer Evaluation Records
│   └── Formal Presentation Slide Decks
│
├── /references (Academic Bibliography & Further Readings)
│   ├── Complete APA 7th Edition Reference Library
│   ├── External Links & DOI Citations for Module Readings
│   └── Recommended Executive Reading List
│
└── /acknowledgement (Formal Academic Acknowledgement)
    ├── Commendation for Senior Lecturer Mrs. Ishara Raviharee Weerasinghe
    ├── Gratitude to Academic Faculty & Institutional Support
    └── Peer Review & Cohort Collaboration Note
```

---

## 6. COMPONENT ARCHITECTURE & REUSABILITY

The codebase must follow a strict separation of concerns: **Academic Data & Types** must reside independently from **Presentation Components**.

```
src/
├── app/                        # Next.js App Router route handlers & pages
│   ├── layout.tsx              # Root layout with fonts, header, footer, metadata
│   ├── page.tsx                # Homepage / Hero
│   ├── about/page.tsx
│   ├── learning-portfolio/page.tsx
│   ├── chapters/[slug]/page.tsx
│   ├── reflections/page.tsx
│   ├── evidence/page.tsx
│   ├── references/page.tsx
│   └── acknowledgement/page.tsx
│
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx          # Sticky backdrop-blur navigation with route indicator
│   │   ├── MobileMenu.tsx      # Smooth drawer navigation for touch devices
│   │   ├── TableOfContents.tsx # Floating chapter reading indicator
│   │   └── Breadcrumbs.tsx     # Semantic hierarchy trail
│   │
│   ├── footer/
│   │   └── Footer.tsx          # Editorial footer with module citations & copyright
│   │
│   ├── home/
│   │   ├── HeroSection.tsx     # Typography-forward editorial introduction
│   │   ├── ChapterGrid.tsx     # Interactive preview of the 9 chapters
│   │   ├── CharacterPillars.tsx# Values / Beliefs / Character visual diagram
│   │   └── CompetencyBar.tsx   # Workplace skills taxonomy overview
│   │
│   ├── chapters/
│   │   ├── ChapterHeader.tsx   # Numbered display header, lecturer credit, reading time
│   │   ├── KeyTakeaways.tsx    # Gold-bordered executive summary box
│   │   ├── TheoryCard.tsx      # Deep academic concepts container
│   │   ├── ChapterNavigation.tsx# Prev / Next chapter pagination links
│   │   └── ReflectionBox.tsx   # Distinctive student reflection prompt container
│   │
│   ├── diagrams/               # Custom interactive diagrammatic visualizations
│   │   ├── JohariWindowGrid.tsx# Dynamic 4-quadrant interactive explorer
│   │   ├── TriuneBrainView.tsx # Interactive 3-layer neuroscience diagram
│   │   ├── TableSettingMap.tsx # Visual cutlery & glassware layout with hover details
│   │   ├── MeetingChecklist.tsx# 10-point interactive meeting preparation audit
│   │   ├── EmailAnatomy.tsx    # Interactive email breakdown with callouts
│   │   └── PhoneProtocolSteps.tsx# 5-step telephone excellence visual pipeline
│   │
│   ├── tables/
│   │   ├── PortfolioTypesTable.tsx # 4 portfolio archetypes comparative view
│   │   ├── EqVsIqTable.tsx     # EQ vs IQ dynamic matrix
│   │   ├── DiningStylesTable.tsx# Continental vs American dining comparison
│   │   └── ResponsiveTable.tsx # Universal mobile-card-folding table wrapper
│   │
│   ├── evidence/
│   │   ├── EvidenceCard.tsx    # Artefact preview card with modal trigger
│   │   ├── EvidenceGallery.tsx # Filterable grid (Interviews, Documents, Peer Reviews)
│   │   └── CertificateModal.tsx# Zoomable document inspection dialog
│   │
│   └── ui/                     # Primitives and atomic design tokens
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Modal.tsx
│       ├── Tabs.tsx
│       └── Accordion.tsx
│
├── data/                       # Strict TypeScript content repositories
│   ├── chaptersData.ts         # Full academic text, models, and metadata for 9 chapters
│   ├── studentProfile.ts       # Centralized editable student configuration
│   ├── referencesData.ts       # Curated academic citations & DOIs
│   └── evidenceData.ts         # Artefact descriptors & verification metadata
│
├── types/                      # TypeScript interface contracts
│   ├── chapter.ts
│   ├── student.ts
│   └── evidence.ts
│
└── lib/                        # Utilities & helper algorithms
    ├── utils.ts                # `cn` clsx/tailwind-merge helper
    └── motion.ts               # Centralized Framer Motion animation variants
```

---

## 7. PERSONAL INFORMATION & PLACEHOLDER GOVERNANCE

To safeguard academic privacy, adhere strictly to ethical guidelines, and allow any university student to personalize this portfolio effortlessly, personal student information must be handled via a **single configuration source of truth**:

```typescript
// src/data/studentProfile.ts
export interface StudentProfile {
  fullName: string;
  studentId: string;
  degreeProgramme: string;
  faculty: string;
  universityName: string;
  academicYear: string;
  semester: string;
  avatarUrl: string;
  bioSummary: string;
  professionalPhilosophy: string;
  careerAspirations: string[];
  contact: {
    email: string;
    linkedIn: string;
    github: string;
    location: string;
  };
}

export const STUDENT_PROFILE_PLACEHOLDER: StudentProfile = {
  fullName: "[STUDENT FULL NAME]",
  studentId: "[STUDENT ID / REGISTRATION NO]",
  degreeProgramme: "BSc (Hons) in Information Technology / Software Engineering",
  faculty: "Faculty of Computing",
  universityName: "[UNIVERSITY / INSTITUTION NAME]",
  academicYear: "Year 2",
  semester: "Semester 2",
  avatarUrl: "/images/placeholder-avatar.jpg",
  bioSummary: "An ambitious undergraduate student passionate about engineering scalable digital solutions and mastering executive interpersonal skills.",
  professionalPhilosophy: "Cultivating technical excellence through structured communication, emotional resilience, and lifelong growth mindset.",
  careerAspirations: [
    "Full-Stack Software Engineer",
    "Technical Solutions Architect",
    "Product & Engineering Leader"
  ],
  contact: {
    email: "student.name@university.ac.lk",
    linkedIn: "https://linkedin.com/in/student-placeholder",
    github: "https://github.com/student-placeholder",
    location: "Colombo, Sri Lanka"
  }
};
```

### Absolute Rules on Identity & Data:
1. **Never copy the reference student's identity:** Do not populate the site with `Kaushadha Perera`, `SA25610232`, or private personal artifacts from `reference/PS.pdf`.
2. **Always retain lecturer credits:** The module lecturer, `Mrs. Ishara Raviharee Weerasinghe` (Senior Lecturer in English | Lecturer In Charge), must be honored in Chapter 1, the syllabus credits, and the formal Acknowledgement page.
3. **No Fabricated Qualifications:** Never invent fake diplomas or corporate employment history. Present clear placeholders with instructions on how the student can attach their genuine credentials.

---

## 8. INTERACTION & ANIMATION GUIDELINES

Framer Motion must be used purposefully to enrich comprehension and reinforce the luxury editorial atmosphere.

### 8.1 Motion Choreography Rules
- **Duration:** Micro-interactions (150ms – 250ms); Page reveals & cards (400ms – 600ms).
- **Easing:** Bespoke cubic bezier curves for luxury deceleration: `[0.16, 1, 0.3, 1]` or standard `easeInOut`. Avoid bouncy, cartoonish springs.
- **Scroll Triggers:** `whileInView` with `viewport: { once: true, margin: "-50px" }` to prevent repeated flickering when scrolling up and down.
- **Staggering:** Stagger child cards by `0.08s` to `0.1s` for smooth sequential entrance.

```typescript
// src/lib/motion.ts
export const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};
```

### 8.2 Reduced Motion Compliance
All motion components must respect user operating system settings:
```typescript
import { useReducedMotion } from "framer-motion";

// In components:
const shouldReduceMotion = useReducedMotion();
const animationVariant = shouldReduceMotion ? {} : fadeIn;
```

---

## 9. RESPONSIVE DESIGN & ADAPTIVE LAYOUTS

Every page and component must be engineered for seamless usability across four explicit device viewports:

1. **Desktop / Large Displays (`>= 1280px`):** Multi-column editorial layouts, interactive alongside diagrams, floating table-of-contents sidebar.
2. **Laptop / Medium Screens (`1024px – 1279px`):** Balanced container widths (`max-w-6xl`), condensed side margins, proportional font scales.
3. **Tablets (`768px – 1023px`):** Two-column collapse into single or 1.5-column flow, touch-friendly interactive diagrams, collapsed table-of-contents.
4. **Mobile Devices (`< 768px`):**
   - Single-column flow with generous touch targets (minimum `44x44px`).
   - Sticky mobile drawer navigation with high-contrast accessibility.
   - **Tables:** Never rely on horizontal screen cutoffs; implement card-based responsive folding or clear horizontal scroll affordances with sticky column headers.
   - **Complex Diagrams:** Reconfigure into vertically stacked step cards (e.g., Johari Window transforms from a 2x2 grid to a 4-tab interactive carousel or stacked quadrant cards on small screens).

---

## 10. CODE QUALITY & ARCHITECTURAL RIGOR

All code produced for this project must satisfy high enterprise engineering standards:

1. **TypeScript Rigor:**
   - Explicit type definitions for all props, states, API payloads, and data models.
   - No `any` or ambiguous type assertions (`as unknown as T`).
2. **Component Modularity:**
   - Enforce single responsibility. Large page files over 250 lines must be decomposed into sub-components.
   - Separate stateful client logic (`"use client"`) from pure static markup.
3. **Semantic HTML & SEO:**
   - Appropriate semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.
   - Comprehensive metadata API utilization in `layout.tsx` and dynamic chapter pages.
4. **Accessibility (WCAG 2.1 AA Compliance):**
   - Ensure color contrast ratios meet or exceed 4.5:1 for body copy and 3:1 for large display headings.
   - Descriptive `alt` attributes on all images and visual figures.
   - Explicit ARIA attributes (`aria-expanded`, `aria-label`, `role="tab"`) on all interactive custom controls.
5. **Asset & Error Handling:**
   - Graceful fallback cards if an image fails to load or is unpopulated.
   - Clean Next.js error boundary (`error.tsx`) and not-found handler (`not-found.tsx`).

---

## 11. DEVELOPMENT WORKFLOW & STEP-BY-STEP ROADMAP

Development must strictly follow this phased, incremental roadmap. No stage should be bypassed or assumed complete without verification.

```
[Phase 1] Material Analysis & Architectural Blueprint
    │   └── Deep examination of reference/PS.pdf and curriculum breakdown (COMPLETED)
    │
[Phase 2] Foundational Project Initialization
    │   ├── Initialize Next.js App Router project with TypeScript & Tailwind CSS
    │   ├── Install dependencies: framer-motion, lucide-react, clsx, tailwind-merge
    │   ├── Configure Tailwind design system (colors, fonts, custom utilities)
    │   └── Set up TypeScript models and centralized data structures
    │
[Phase 3] Core Layout & Navigation Engineering
    │   ├── Root Layout with typography, favicon, and semantic metadata
    │   ├── Desktop & Mobile responsive Navigation with route indicators
    │   └── Haute-editorial Footer with institutional credits & citations
    │
[Phase 4] Academic Data Layer Development
    │   ├── Complete academic synthesis for all 9 chapters in `chaptersData.ts`
    │   ├── Student profile placeholder structure in `studentProfile.ts`
    │   └── APA 7th edition bibliography data in `referencesData.ts`
    │
[Phase 5] Primary Hub Pages
    │   ├── Homepage with editorial Hero, 9-chapter showcase, and competency radar
    │   ├── About Me page with personal philosophy & pillars of character
    │   ├── Learning Portfolio overview index
    │   ├── Evidence & Documentation gallery
    │   ├── Reflective Learning Synthesis page
    │   └── Acknowledgement page honoring Mrs. Ishara Raviharee Weerasinghe
    │
[Phase 6] 9 Individual Chapter Engine & Interactive Diagrams
    │   ├── Dynamic route `/chapters/[slug]` with prev/next navigation
    │   ├── Chapter 01: Johari Window interactive quadrant + Character Mind Map
    │   ├── Chapter 02: 4 Portfolio Archetypes Table + 3-Phase Lifecycle
    │   ├── Chapter 03: 6 C's Matrix + Mehrabian Rule + STAR behavioral framework
    │   ├── Chapter 04: CV Anatomy Breakdown + ATS Optimization Guide
    │   ├── Chapter 05: 7 C's of Communication + 10-Point Meeting Checklist
    │   ├── Chapter 06: Executive Email Anatomy + 7 Golden Netiquette Rules
    │   ├── Chapter 07: 5 Telephone Excellence Steps + HEAT/LAST De-escalation
    │   ├── Chapter 08: Triune Brain Interactive Model + Amygdala Hijack 10s Timer
    │   └── Chapter 09: Formal Table Setting Diagram + Continental vs American Guide
    │
[Phase 7] Interaction, Animation & Motion Polish
    │   ├── Page transitions & scroll-triggered micro-reveals
    │   ├── Interactive tabs, accordions, and dialog inspection modals
    │   └── Reduced-motion verification
    │
[Phase 8] Comprehensive Quality Assurance & Build Verification
    │   ├── TypeScript compile check (`npm run build` / `npx tsc`)
    │   ├── Route testing (all 9 chapters, evidence, about, reflections, references)
    │   ├── Responsive testing across mobile, tablet, laptop, and desktop
    │   └── Final visual polish
```

---

## 12. QUALITY ASSURANCE & VERIFICATION CHECKLIST

Before any release, milestone sign-off, or task completion, the developer or agent must verify every item on this checklist:

- [ ] **Build Validation:** Run `npm run build` or `npx next build` without any compilation errors, syntax issues, or type mismatches.
- [ ] **Console Cleanliness:** Browser developer tools console must be free of unhandled warnings, React hydration mismatches, and key duplication errors.
- [ ] **Complete 9-Chapter Verification:**
  - [ ] Chapter 01 (Johari Window & Character Pillars)
  - [ ] Chapter 02 (Portfolio Management & 3 Phases)
  - [ ] Chapter 03 (Mock Interviews, Mehrabian & STAR)
  - [ ] Chapter 04 (CV Writing, Formats & ATS)
  - [ ] Chapter 05 (Speaking Skills & Effective Meetings)
  - [ ] Chapter 06 (Email Netiquette & Anatomy)
  - [ ] Chapter 07 (Telephone Etiquette & HEAT De-escalation)
  - [ ] Chapter 08 (Emotional Intelligence & Triune Brain)
  - [ ] Chapter 09 (Formal Dining Etiquette & Place Setting)
- [ ] **Route Completeness:** Test `/`, `/about`, `/learning-portfolio`, `/chapters/[slug]` (all 9 slugs), `/reflections`, `/evidence`, `/references`, and `/acknowledgement`.
- [ ] **Navigation & Links:** Test all internal anchor links, previous/next chapter pagination, mobile drawer links, and external reference URLs.
- [ ] **Interactive Elements:** Verify tab toggles, modal dialogs, copy buttons, and interactive diagram quadrants function smoothly.
- [ ] **Mobile Responsiveness:** Audit layout integrity at `375px`, `768px`, `1024px`, and `1440px`. Confirm no horizontal text cutoffs.
- [ ] **Asset Integrity:** Verify all placeholder images and graphics display cleanly with fallbacks.
- [ ] **Strict Identity Privacy:** Confirm that no private student credentials from `reference/PS.pdf` appear in user-facing views.

---

## 13. AGENT BEHAVIOUR & OPERATIONAL DISCIPLINE

These instructions are binding for any AI agent or automated developer acting within this codebase:

1. **Thorough Code Inspection First:**
   - Always inspect relevant files (`read_file` or directory scans) before proposing or applying changes.
   - Understand existing abstractions, utility functions, and shared interfaces before introducing new code.
2. **Preserve Working Functionality:**
   - Never perform destructive blanket rewrites when an incremental edit suffices.
   - Preserve existing working components, styling tokens, and routes.
3. **Do Not Hallucinate Academic Concepts:**
   - When elaborating academic curriculum points, use the terminology, frameworks, and definitions documented in this manual and `reference/PS.pdf`.
4. **No Premature Stoppage:**
   - Never stop after generating an initial homepage or rough shell. Deliver a complete, navigable, fully realized e-portfolio encompassing all nine chapters.
5. **Issue Resolution over Reporting:**
   - If a build failure, missing asset, or syntax issue is detected during development, diagnose and fix the root cause immediately rather than merely describing the error.
6. **Submission-Ready Standard:**
   - Treat the end product as a high-stakes, submission-ready academic e-portfolio worthy of highest university honors and executive industry presentation.

---

*End of AGENTS.md — Professional Skills E-Portfolio Development Guidelines*
