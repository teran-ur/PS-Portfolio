"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Award,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Code2,
  Briefcase,
  Sparkles,
  GraduationCap,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Lock,
  Cloud,
  Network,
  Rocket,
  Telescope,
  Lightbulb,
  Plane,
  Flame,
  Target,
  ArrowRight,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

export default function AboutPage() {
  const {
    personalBranding,
    academicTimeline,
    entrepreneurialVentures,
    technicalInterests,
    extracurricularActivities,
    developmentGoals,
    auditedSkills,
  } = STUDENT_PROFILE;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-28 md:space-y-36">
      {/* =========================================================================
          1. INTRODUCTION & CANDIDATE PROFILE OVERVIEW (OPEN EDITORIAL SPREAD)
          ========================================================================= */}
      <section className="pb-16 border-b border-[#E5E5E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio Narrative directly on canvas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#686868]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span className="text-[#171717] font-semibold">About Me</span>
              <span>•</span>
              <span>Academic &amp; Professional Background</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-extrabold text-[#171717] tracking-tight leading-[0.92]">
                Teran{" "}
                <span className="text-[#FF6B35] font-serif italic font-normal">
                  Rathnayake.
                </span>
              </h1>
              <p className="text-xl font-display font-medium text-[#404040] pt-1">
                IT Undergraduate at {STUDENT_PROFILE.institution} • Co-Founder @ LA&apos;CEDRA
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#555555] leading-relaxed font-sans pt-2">
              <p>
                I am an undergraduate student in Information Technology at{" "}
                <strong className="text-[#171717] font-semibold">{STUDENT_PROFILE.institution}</strong>, currently enrolled in Year 2 Semester 2 of the Higher Diploma in Information Technology (February 2025 Batch).
              </p>
              <p>
                My educational foundation took shape over eight formative years at{" "}
                <strong className="text-[#171717] font-semibold">Prince of Wales College</strong> in Moratuwa, where I actively participated in the Astronomy, New Inventor&apos;s, Aeronautical, and Athletics societies. Following school, I completed professional diplomas in both Information Technology and English at <strong className="text-[#171717] font-semibold">IMBS Green Campus</strong> to broaden my technical fluency and communication standards before entering university.
              </p>
              <p>
                Alongside my university studies, I co-founded <strong className="text-[#171717] font-semibold">LA&apos;CEDRA</strong>, an IT-focused organization where we build custom web applications, business management portals, and Point-of-Sale (POS) solutions for commercial clients.
              </p>
            </div>

            {/* Factual Coordinates */}
            <div className="pt-4 border-t border-[#E5E5E2] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#686868]">
              <div>Student ID: <strong className="text-[#171717]">{STUDENT_PROFILE.studentId}</strong></div>
              <div>Intake: <strong className="text-[#171717]">{STUDENT_PROFILE.batch}</strong></div>
              <div>Location: <strong className="text-[#171717]">{STUDENT_PROFILE.contact.location}</strong></div>
            </div>
          </div>

          {/* Right Column: Authentic Photographic Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border border-[#FF6B35]/40 pointer-events-none -z-10" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EBEBE8] border border-[#E5E5E2] shadow-hover group">
                <Image
                  src="/images/profile.png"
                  alt={STUDENT_PROFILE.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-lg font-display font-bold leading-tight">{STUDENT_PROFILE.fullName}</p>
                    <p className="text-xs text-[#EBEBE8] font-mono mt-0.5">SLIIT City Uni • HDIT Y2S2</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#8E8E93]">
                <span>Sri Lanka</span>
                <span className="text-[#FF6B35] font-semibold">Co-Founder @ LA&apos;CEDRA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SKILL CREDIBILITY AUDIT: OPEN THREE-COLUMN SPREAD
          ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
            Transparent Self-Evaluation
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
            Skill Credibility Audit.
          </h2>
          <p className="text-base text-[#686868] max-w-3xl leading-relaxed">
            In keeping with academic integrity, skills are divided honestly into what I have already demonstrated in working code, what I am currently developing, and what remains a future goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          {/* Column 1: Currently Demonstrated */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-3 border-b-2 border-emerald-500 text-xs font-mono uppercase tracking-wider font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Currently Demonstrated</span>
            </div>
            <p className="text-xs text-[#8E8E93] font-mono">
              Backed by working projects &amp; academic labs:
            </p>
            <ul className="space-y-3 text-sm text-[#333333] font-sans">
              {auditedSkills.currentlyDemonstrated.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Developing */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-3 border-b-2 border-[#FF6B35] text-xs font-mono uppercase tracking-wider font-bold text-[#FF6B35]">
              <Sparkles className="w-4 h-4" />
              <span>Actively Developing</span>
            </div>
            <p className="text-xs text-[#8E8E93] font-mono">
              In active study during current academic semester:
            </p>
            <ul className="space-y-3 text-sm text-[#333333] font-sans">
              {auditedSkills.developing.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Future Goals */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-3 border-b-2 border-[#171717] text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
              <Compass className="w-4 h-4" />
              <span>Future Goals</span>
            </div>
            <p className="text-xs text-[#8E8E93] font-mono">
              Target milestones following higher diploma completion:
            </p>
            <ul className="space-y-3 text-sm text-[#333333] font-sans">
              {auditedSkills.futureGoals.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ACADEMIC TIMELINE (OPEN EDITORIAL VERTICAL SPREAD)
          ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
            Formal Qualifications
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
            Academic Timeline.
          </h2>
          <p className="text-base text-[#686868] max-w-3xl leading-relaxed">
            From formative school years at Prince of Wales College to specialized diplomas and current higher diploma studies at SLIIT City Uni.
          </p>
        </div>

        <div className="relative pl-8 border-l border-[#E5E5E2] space-y-14 pt-4">
          {academicTimeline.map((item, idx) => {
            const isCurrent = item.status === "In Progress";
            return (
              <div key={idx} className="relative group space-y-2">
                {/* Hairline Node */}
                <div
                  className={`absolute -left-[37px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white transition-colors ${
                    isCurrent ? "border-[#FF6B35] bg-[#FF6B35]" : "border-[#171717]"
                  }`}
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#FF6B35] font-bold">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8E8E93]">
                    {item.type} • {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#171717]">
                  {item.qualification}
                </h3>
                <p className="text-sm text-[#171717] font-mono font-medium">
                  {item.institution}
                </p>

                <p className="text-sm text-[#555555] leading-relaxed font-sans max-w-3xl pt-1">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-2 space-y-1">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-[#686868] flex items-start space-x-2 font-mono">
                        <span className="text-[#FF6B35] font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. ENTREPRENEURIAL EXPERIENCE: LA'CEDRA
          ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
            Venture Management
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
            Entrepreneurial Experience.
          </h2>
          <p className="text-base text-[#686868] max-w-3xl leading-relaxed">
            Co-founding and managing LA&apos;CEDRA has provided a realistic testing ground for software product engineering, client requirements analysis, and delivering modern digital systems.
          </p>
        </div>

        <div className="max-w-4xl pt-2">
          {entrepreneurialVentures.map((venture, vIdx) => (
            <div
              key={vIdx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle hover:border-[#171717] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
                  <div>
                    <h3 className="text-3xl font-display font-bold text-[#171717]">
                      {venture.name}
                    </h3>
                    <p className="text-xs font-mono text-[#FF6B35] font-bold mt-0.5">
                      {venture.role}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#8E8E93]">
                    {venture.period}
                  </span>
                </div>

                <p className="text-xs text-[#171717] font-mono">
                  Scope: {venture.scope}
                </p>

                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {venture.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-[#8E8E93] uppercase tracking-wider block font-bold">
                    Offerings &amp; Verticals:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {venture.offerings.map((off, oIdx) => (
                      <span
                        key={oIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#F7F7F5] border border-[#E5E5E2] text-xs font-mono text-[#171717]"
                      >
                        {off}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E5E2] space-y-1.5">
                  <span className="text-xs font-mono text-[#8E8E93] uppercase tracking-wider block font-bold">
                    Operational Learnings:
                  </span>
                  {venture.keyOutcomes.map((out, outIdx) => (
                    <div key={outIdx} className="text-xs text-[#555555] flex items-start space-x-2 font-sans">
                      <span className="text-[#FF6B35] font-bold">•</span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
                Status: Active Enterprise
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. TECHNICAL INTERESTS (7 CORE COMPUTING DOMAINS)
          ========================================================================= */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Software &amp; Computing Focus
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
              Technical Interests.
            </h2>
            <p className="text-base text-[#686868] max-w-2xl leading-relaxed">
              Seven areas of computer science and software development where I spend time coding, configuring servers, and experimenting.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#FF6B35] font-bold shrink-0 group"
          >
            <span>View Working Projects &amp; Stack</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Clean Open Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
          {technicalInterests.map((interest, idx) => (
            <div
              key={idx}
              className="space-y-3 pb-6 border-b border-[#E5E5E2] flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                  0{idx + 1} / {interest.category}
                </span>
                <h3 className="font-display font-bold text-xl text-[#171717]">
                  {interest.name}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed font-sans">
                  {interest.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {interest.keyDomains.map((kd, kIdx) => (
                  <span
                    key={kIdx}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#F7F7F5] border border-[#E5E5E2] text-[#404040]"
                  >
                    {kd}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. EXTRACURRICULAR ACTIVITIES (PRINCE OF WALES COLLEGE)
          ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
            Formative Years
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
            School Clubs &amp; Activities.
          </h2>
          <p className="text-base text-[#686868] max-w-3xl leading-relaxed">
            During my school years at Prince of Wales College (2015–2023), these clubs encouraged curiosity, experimentation, and athletic discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-2">
          {extracurricularActivities.map((act, idx) => (
            <div key={idx} className="space-y-2 pb-6 border-b border-[#E5E5E2]">
              <span className="text-[11px] font-mono text-[#8E8E93] uppercase tracking-wider block">
                {act.category}
              </span>
              <h3 className="font-display font-bold text-lg text-[#171717]">
                {act.clubName}
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed font-sans">
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. PROFESSIONAL DEVELOPMENT GOALS
          ========================================================================= */}
      <section id="development-goals" className="space-y-10 scroll-mt-24">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
            Longitudinal Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
            Personal &amp; Professional Development Goals.
          </h2>
          <p className="text-base text-[#686868] max-w-3xl leading-relaxed">
            Concrete milestones across technical skills, entrepreneurial operations, everyday communication, and academic progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {developmentGoals.map((goal, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-wider">
                  {goal.pillar}
                </span>
                <span className="text-xs font-mono text-[#8E8E93]">
                  {goal.timeframe}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-[#171717]">
                {goal.objective}
              </h3>

              <p className="text-sm text-[#555555] leading-relaxed font-sans">
                {goal.strategy}
              </p>

              <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] text-xs font-mono text-[#171717]">
                <span className="text-[#8E8E93] block text-[10px] uppercase tracking-wider mb-1">Target Measurement:</span>
                <span>{goal.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
