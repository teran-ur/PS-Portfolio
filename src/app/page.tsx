"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Briefcase,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Globe,
  Server,
  Layers,
  GraduationCap,
  Calendar,
  ChevronRight,
  Shield,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import { CHAPTERS_DATA } from "@/data/chaptersData";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { PROJECTS_DATA } from "@/data/projectsData";
import { creativeEasing } from "@/lib/motion";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activePreviewChapter, setActivePreviewChapter] = useState(CHAPTERS_DATA[0]);

  // Motion variants with reduced motion respect
  const heroTextVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: creativeEasing,
        delay: shouldReduceMotion ? 0 : custom * 0.1,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: creativeEasing,
        delay: shouldReduceMotion ? 0 : 0.25,
      },
    },
  };

  return (
    <div className="space-y-28 md:space-y-40 pb-24">
      {/* =========================================================================
          1. HERO SECTION: INTEGRATED EDITORIAL COMPOSITION
          ========================================================================= */}
      <section className="pt-8 sm:pt-14 md:pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typographic Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* Context Line */}
              <motion.div
                custom={0}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center space-x-3 text-xs font-mono text-[#686868]"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span className="text-[#171717] font-semibold">{STUDENT_PROFILE.fullName}</span>
                <span>•</span>
                <span>IT Undergraduate, SLIIT City Uni</span>
              </motion.div>

              {/* Oversized Headline with Selective Serif Italic */}
              <motion.div
                custom={1}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-display font-extrabold text-[#171717] tracking-tight leading-[0.92]">
                  Beyond the{" "}
                  <span className="text-[#FF6B35] font-serif italic font-normal tracking-normal">
                    Code.
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-display font-medium text-[#404040] max-w-xl">
                  Engineering software, launching ventures, and mastering the interpersonal skills that turn technology into impact.
                </p>
              </motion.div>

              {/* Natural Student Introduction (Direct on Canvas) */}
              <motion.p
                custom={2}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg text-[#555555] font-sans leading-relaxed max-w-xl"
              >
                I am an IT undergraduate at{" "}
                <strong className="text-[#171717] font-semibold">{STUDENT_PROFILE.institution}</strong>{" "}
                (Year 2 Semester 2). I develop full-stack applications with React, Next.js, and TypeScript, design relational databases, and co-founded LA&apos;CEDRA to engineer modern digital systems for clients. This portfolio records my growth across all nine academic modules of Professional Skills.
              </motion.p>

              {/* Action Anchors */}
              <motion.div
                custom={3}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  href="/learning-portfolio"
                  className="px-7 py-3.5 rounded-full bg-[#171717] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#FF6B35] transition-all flex items-center space-x-2.5 shadow-subtle group"
                >
                  <span>Explore the 9 Modules</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="px-7 py-3.5 rounded-full bg-white border border-[#E5E5E2] hover:border-[#171717] text-[#171717] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#F7F7F5] transition-all flex items-center space-x-2"
                >
                  <span>View Projects &amp; Tech Stack</span>
                </Link>
              </motion.div>

              {/* Academic Coordinates Line */}
              <motion.div
                custom={4}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="pt-6 border-t border-[#E5E5E2] flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#686868] font-mono"
              >
                <span>{STUDENT_PROFILE.institution}</span>
                <span>/</span>
                <span>{STUDENT_PROFILE.programme}</span>
                <span>/</span>
                <span>{STUDENT_PROFILE.academicLevel} ({STUDENT_PROFILE.batch})</span>
                <span>/</span>
                <span className="text-[#8E8E93]">ID: {STUDENT_PROFILE.studentId}</span>
              </motion.div>
            </div>

            {/* Right Column: Integrated Photographic Composition */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Asymmetrical Accent Background Border */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-[#FF6B35]/40 pointer-events-none -z-10" />

                {/* Primary Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EBEBE8] border border-[#E5E5E2] shadow-hover group">
                  <Image
                    src="/images/profile.png"
                    alt={STUDENT_PROFILE.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    priority
                    className="object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Dark Vignette Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                    <p className="text-xl font-display font-bold leading-tight">{STUDENT_PROFILE.fullName}</p>
                    <p className="text-xs text-[#EBEBE8] font-mono mt-0.5">
                      Co-Founder @ LA&apos;CEDRA • IT Undergraduate
                    </p>
                  </div>
                </div>

                {/* Integrated Editorial Caption Beneath Image */}
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#8E8E93] px-1">
                  <span>Portrait 2025 • Colombo, Sri Lanka</span>
                  <span className="text-[#FF6B35] font-semibold">Active Undergraduate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PERSONAL JOURNEY: OPEN EDITORIAL TIMELINE (NO COOKIE-CUTTER BOXES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5E2] pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Section Header & Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                Personal &amp; Academic Journey
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight leading-[1.05]">
                Where technology meets real-world practice.
              </h2>
              <p className="text-base text-[#555555] leading-relaxed font-sans">
                My pathway has never been confined to theory alone. From early experiments in school invention clubs to delivering live software solutions for clients and managing supply chains, every step has shaped my engineering approach.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#FF6B35] font-bold group"
                >
                  <span>Read Full Background &amp; Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Fluid Editorial Timeline directly on canvas */}
            <div className="lg:col-span-7 relative pl-8 border-l border-[#E5E5E2] space-y-12">
              {/* Milestone 1: Prince of Wales College */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#171717] group-hover:bg-[#FF6B35] transition-colors" />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E8E93]">2015 – 2023 • Secondary School</span>
                  <h3 className="text-xl font-display font-bold text-[#171717]">Prince of Wales College</h3>
                  <p className="text-sm text-[#FF6B35] font-mono">Foundations of Curiosity &amp; Leadership</p>
                  <p className="text-sm text-[#555555] leading-relaxed pt-1">
                    Eight formative years participating actively in the Astronomy Club, New Inventor&apos;s Club, Aeronautical Club, and Athletics society. Nurtured analytical problem-solving and self-discipline before university.
                  </p>
                </div>
              </div>

              {/* Milestone 2: IMBS Green Campus */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#171717] group-hover:bg-[#FF6B35] transition-colors" />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E8E93]">Post-School Studies</span>
                  <h3 className="text-xl font-display font-bold text-[#171717]">IMBS Green Campus</h3>
                  <p className="text-sm text-[#FF6B35] font-mono">Diploma in Information Technology &amp; Diploma in English</p>
                  <p className="text-sm text-[#555555] leading-relaxed pt-1">
                    Formalized foundational computing architectures and professional English communication, establishing the verbal and technical groundwork for university-level work.
                  </p>
                </div>
              </div>

              {/* Milestone 3: SLIIT City Uni */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#FF6B35] bg-[#FF6B35]" />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#FF6B35] font-bold">February 2025 Batch • Currently In Progress</span>
                  <h3 className="text-2xl font-display font-bold text-[#171717]">SLIIT City Uni</h3>
                  <p className="text-sm text-[#171717] font-mono font-semibold">Higher Diploma in Information Technology (Year 2 Semester 2)</p>
                  <p className="text-sm text-[#555555] leading-relaxed pt-1">
                    Undergraduate studies centered on software engineering, database design, cybersecurity audits, and web systems, coupled with Senior Lecturer Mrs. Ishara Raviharee Weerasinghe&apos;s Professional Skills curriculum.
                  </p>
                </div>
              </div>

              {/* Milestone 4: Entrepreneurship */}
              <div className="relative group">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#171717] group-hover:bg-[#FF6B35] transition-colors" />
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E8E93]">Co-Founded</span>
                  <h3 className="text-xl font-display font-bold text-[#171717]">LA&apos;CEDRA</h3>
                  <p className="text-sm text-[#FF6B35] font-mono">Co-Founder • Web Development &amp; Systems</p>
                  <p className="text-sm text-[#555555] leading-relaxed pt-1">
                    Co-founded an IT-focused organization building custom multi-page websites, business management portals, and Point-of-Sale (POS) software solutions for commercial clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT I'VE LEARNED: NUMBER-LED EDITORIAL DIRECTORY WITH INTERACTIVE PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5E2] pt-16 md:pt-24 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                Curriculum Synthesis
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
                The Nine Modules of Professional Skills.
              </h2>
              <p className="text-base text-[#686868] max-w-2xl leading-relaxed">
                Led by Senior Lecturer Mrs. Ishara Raviharee Weerasinghe, the curriculum synthesizes interpersonal, non-verbal, and executive mastery. Hover or tap any module to preview its core pedagogical model.
              </p>
            </div>
            <Link
              href="/learning-portfolio"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#FF6B35] font-bold shrink-0 group"
            >
              <span>Full Curriculum Hub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Interactive Split View: Directory on Left, Live Preview Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Clean Editorial List */}
            <div className="lg:col-span-7 divide-y divide-[#E5E5E2] border-y border-[#E5E5E2]">
              {CHAPTERS_DATA.map((ch) => {
                const isSelected = activePreviewChapter.number === ch.number;
                return (
                  <div
                    key={ch.slug}
                    onMouseEnter={() => setActivePreviewChapter(ch)}
                    onClick={() => setActivePreviewChapter(ch)}
                    className={`py-4 px-3 sm:px-4 cursor-pointer transition-all flex items-center justify-between group ${
                      isSelected ? "bg-white text-[#171717]" : "hover:bg-white/60 text-[#404040]"
                    }`}
                  >
                    <div className="flex items-center space-x-4 sm:space-x-6 min-w-0">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? "text-[#FF6B35]" : "text-[#8E8E93] group-hover:text-[#171717]"
                        }`}
                      >
                        {ch.number}
                      </span>
                      <div className="truncate">
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#171717] group-hover:text-[#FF6B35] transition-colors truncate">
                          {ch.title}
                        </h3>
                        <p className="text-xs text-[#686868] font-sans truncate">
                          {ch.subtitle}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/chapters/${ch.slug}`}
                      className="ml-4 p-2 rounded-full hover:bg-[#F7F7F5] text-[#8E8E93] group-hover:text-[#FF6B35] transition-colors shrink-0"
                      title="Read full chapter"
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Right 5 cols: Live Context Preview */}
            <div className="lg:col-span-5 sticky top-24 hidden lg:block">
              <div className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
                  <span className="font-mono text-3xl font-extrabold text-[#FF6B35]">
                    {activePreviewChapter.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#686868] px-2.5 py-1 rounded-full bg-[#F7F7F5] border border-[#E5E5E2]">
                    {activePreviewChapter.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-[#171717] leading-tight">
                    {activePreviewChapter.title}
                  </h4>
                  <p className="text-xs font-mono text-[#FF6B35] font-semibold">
                    {activePreviewChapter.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  {activePreviewChapter.overview}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E5E5E2]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] font-bold block">
                    Core Learning Takeaways:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#404040]">
                    {activePreviewChapter.keyTakeaways.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#FF6B35] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/chapters/${activePreviewChapter.slug}`}
                  className="w-full py-3 rounded-xl bg-[#171717] text-white hover:bg-[#FF6B35] text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>Read Chapter {activePreviewChapter.number} &amp; Synthesis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BEYOND THE CLASSROOM: APPLIED SOFTWARE & VENTURES (FULL-WIDTH NARRATIVE)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5E2] pt-16 md:pt-24 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                Applied Software &amp; Operations
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
                Software builds, cloud servers, and enterprises.
              </h2>
              <p className="text-base text-[#686868] max-w-2xl leading-relaxed">
                Putting theory into practice: production web applications, DigitalOcean cloud VPS hosting, and real-world business leadership.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#FF6B35] font-bold shrink-0 group"
            >
              <span>Explore Technical Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Asymmetrical Project Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Featured Project: LA'CEDRA Corporate Web & Systems */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle hover:border-[#171717] transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF1EB] text-[#FF6B35] font-bold">
                    Web Systems &amp; Co-Founder
                  </span>
                  <span className="text-xs font-mono text-[#8E8E93]">Production Web Architecture</span>
                </div>

                <h3 className="text-3xl font-display font-bold text-[#171717]">
                  LA&apos;CEDRA Corporate Website
                </h3>
                <p className="text-sm font-mono text-[#686868]">
                  Multi-Page Corporate &amp; Digital Solutions Platform
                </p>

                <p className="text-sm text-[#555555] leading-relaxed font-sans">
                  The primary digital portal for LA&apos;CEDRA, designed to present web engineering capabilities, custom business tools, and retail POS solutions. Engineered with modern responsive frontend principles, modular navigation, and clean semantic structure.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F7F7F5] border border-[#E5E5E2] text-[#171717]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal Snippet Box */}
              <div className="p-4 rounded-xl bg-[#171717] text-white font-mono text-xs space-y-1 shadow-inner">
                <div className="flex items-center space-x-2 text-[#8E8E93] pb-1 border-b border-white/10 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>lacedra-core: git status &amp;&amp; next build</span>
                </div>
                <p className="text-emerald-400">✓ Compiled successfully • 0 type errors</p>
                <p className="text-white/70">   Deploying production bundle to high-performance CDN</p>
              </div>
            </div>

            {/* Right Column: TechMart & Ocean Crew Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* TechMart E-Commerce Card */}
              <div className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle hover:border-[#171717] transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                    E-Commerce
                  </span>
                  <span className="text-xs font-mono text-[#8E8E93]">Academic Project</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-[#171717]">
                  TechMart E-Commerce Platform
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed font-sans">
                  Full-stack digital retail system featuring product catalog filtering, interactive cart state persistence, and normalized MySQL relational inventory schemas.
                </p>
                <div className="text-xs font-mono text-[#171717] pt-1">
                  Stack: JavaScript • HTML5 • CSS3 • MySQL
                </div>
              </div>

              {/* Ocean Crew Community Card */}
              <div className="p-8 rounded-3xl bg-[#0F2C4C] text-white shadow-subtle hover:border-[#14B8A6] transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#14B8A6] font-bold">
                    Community Fieldwork
                  </span>
                  <span className="text-xs font-mono text-white/60">10 Students</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-white">
                  Ocean Crew: Turtle Sanctuary
                </h4>
                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  Field community service project dedicated to coastal turtle conservation in Sri Lanka, documenting 8 hands-on activities, 23 photos, and personal reflections.
                </p>
                <div className="pt-1">
                  <Link
                    href="/projects/ocean-crew"
                    className="text-xs font-mono text-[#14B8A6] hover:text-white font-bold flex items-center space-x-1"
                  >
                    <span>View Ocean Crew Showcase →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PERSONAL DEVELOPMENT & SKILL AUDIT: OPEN THREE-COLUMN SPREAD
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#E5E5E2] pt-16 md:pt-24 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                Self-Awareness &amp; Growth
              </span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
                Honest Skill Audit.
              </h2>
              <p className="text-base text-[#686868] max-w-2xl leading-relaxed">
                Rather than claiming complete mastery, capabilities are audited transparently into demonstrated proof, active coursework, and long-term milestones.
              </p>
            </div>
            <Link
              href="/reflections"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#FF6B35] font-bold shrink-0 group"
            >
              <span>Gibbs&apos; Reflective Cycle</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Three Open Columns directly on canvas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
            {/* Column 1: Currently Demonstrated */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-3 border-b-2 border-emerald-500 text-xs font-mono uppercase tracking-wider font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Currently Demonstrated</span>
              </div>
              <p className="text-xs text-[#8E8E93] font-mono">
                Verified through working code repositories &amp; academic assignments:
              </p>
              <ul className="space-y-3 text-sm text-[#333333] font-sans">
                {STUDENT_PROFILE.auditedSkills.currentlyDemonstrated.map((sk, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Actively Developing */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-3 border-b-2 border-[#FF6B35] text-xs font-mono uppercase tracking-wider font-bold text-[#FF6B35]">
                <Sparkles className="w-4 h-4" />
                <span>Actively Developing</span>
              </div>
              <p className="text-xs text-[#8E8E93] font-mono">
                Current academic semester focus areas and active learning edges:
              </p>
              <ul className="space-y-3 text-sm text-[#333333] font-sans">
                {STUDENT_PROFILE.auditedSkills.developing.map((sk, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-2 shrink-0" />
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Future Goals */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-3 border-b-2 border-[#171717] text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
                <Layers className="w-4 h-4" />
                <span>Future Goals</span>
              </div>
              <p className="text-xs text-[#8E8E93] font-mono">
                Post-graduation targets following higher diploma progression:
              </p>
              <ul className="space-y-3 text-sm text-[#333333] font-sans">
                {STUDENT_PROFILE.auditedSkills.futureGoals.map((sk, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 shrink-0" />
                    <span>{sk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CLOSING SECTION: GRAPHIC EDITORIAL FINALE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-16 md:p-20 rounded-3xl bg-[#171717] text-white shadow-2xl relative overflow-hidden border border-black">
          <div className="max-w-3xl space-y-8 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
              Looking Forward
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1]">
              Technical skills open the door. Character and poise build the future.
            </h2>
            <p className="text-base sm:text-lg text-[#D4D4D4] leading-relaxed font-sans">
              As I progress through my Higher Diploma in IT at SLIIT City Uni and scale projects across LA&apos;CEDRA, this portfolio remains an open record of continuous self-improvement.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/learning-portfolio"
                className="px-8 py-4 rounded-full bg-[#FF6B35] text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-white hover:text-[#171717] transition-all flex items-center space-x-2.5 shadow-sm"
              >
                <span>Curriculum Learning Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-full border border-white/20 text-white text-xs font-mono uppercase tracking-wider font-bold hover:bg-white/10 transition-all"
              >
                <span>Read Full Background</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
