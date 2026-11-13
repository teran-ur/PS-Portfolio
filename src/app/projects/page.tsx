"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Cloud,
  Layers,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Award,
  BookOpen,
  Filter,
  Monitor,
  Shield,
  Smartphone,
  Globe,
  FileText,
  Sliders,
  Sparkles,
  Target,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  Waves,
} from "lucide-react";
import { TECHNOLOGIES_DATA, PROJECTS_DATA } from "@/data/projectsData";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { TechCategory } from "@/types/project";

const TECH_CATEGORIES: ("All" | TechCategory)[] = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
  "Infrastructure",
];

const PROJECT_CATEGORIES = [
  "All Projects",
  "Web Development",
  "Systems & Cloud",
  "E-Commerce",
  "Mobile Concept",
  "Cybersecurity",
];

export default function ProjectsPage() {
  const [selectedTechCategory, setSelectedTechCategory] = useState<"All" | TechCategory>("All");
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("All Projects");
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    "lacedra-website": true, // First project expanded by default
  });

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    PROJECTS_DATA.forEach((p) => {
      allExpanded[p.id] = true;
    });
    setExpandedProjects(allExpanded);
  };

  const collapseAll = () => {
    setExpandedProjects({});
  };

  const filteredTechnologies =
    selectedTechCategory === "All"
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((t) => t.category === selectedTechCategory);

  const filteredProjects =
    selectedProjectCategory === "All Projects"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedProjectCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-28 md:space-y-36">
      {/* =========================================================================
          PAGE HEADER (OPEN EDITORIAL TYPOGRAPHY)
          ========================================================================= */}
      <section className="pb-12 border-b border-[#E5E5E2] space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#686868]">
          <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
          <span className="text-[#171717] font-semibold">Engineering Portfolio</span>
          <span>•</span>
          <span>{STUDENT_PROFILE.fullName} ({STUDENT_PROFILE.studentId})</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-extrabold text-[#171717] tracking-tight leading-[0.92]">
            Selected Works &amp;{" "}
            <span className="text-[#FF6B35] font-serif italic font-normal">
              Stack.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-display font-medium text-[#404040]">
            Full-stack web applications, Linux VPS deployments, and enterprise systems.
          </p>
        </div>

        <p className="text-base sm:text-lg text-[#555555] font-sans max-w-3xl leading-relaxed">
          An authentic catalogue of technologies I work with and four software, cloud, and security projects. Below is a transparent breakdown of objectives, my specific involvement, challenges encountered, engineered resolutions, and verifiable proofs.
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono">
          <Link
            href="/projects/ocean-crew"
            className="px-6 py-3 rounded-full bg-[#0D9488] text-white hover:bg-[#FF6B35] transition-all flex items-center space-x-2 font-semibold shadow-subtle"
          >
            <Waves className="w-3.5 h-3.5" />
            <span>Featured Case Study: Ocean Crew</span>
          </Link>
          <a
            href="#projects-section"
            className="px-6 py-3 rounded-full bg-[#171717] text-white hover:bg-[#FF6B35] transition-all flex items-center space-x-2 font-semibold shadow-subtle"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>4 Technical Projects</span>
          </a>
          <a
            href="#technologies-section"
            className="px-6 py-3 rounded-full bg-white border border-[#E5E5E2] hover:border-[#171717] text-[#171717] transition-all flex items-center space-x-2 font-semibold"
          >
            <Code2 className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>Technologies Stack ({TECHNOLOGIES_DATA.length} Tools)</span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          FEATURED COMMUNITY SERVICE SHOWCASE: OCEAN CREW
          ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#0F2C4C] text-white shadow-card relative overflow-hidden space-y-8">
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-[#14B8A6]/20 via-[#FF6B35]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#14B8A6]/20 border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-mono uppercase tracking-widest font-bold flex items-center space-x-1.5">
                <Waves className="w-3.5 h-3.5" />
                <span>Featured Community Project</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-mono">
                Professional Skills Fieldwork
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Ocean Crew: <br className="hidden sm:inline" />
              Turtle Conservation &amp; Community Service
            </h2>

            <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed max-w-2xl">
              A major community service project conducted by 10 SLIIT City Uni undergraduates at a coastal sea turtle conservation sanctuary in Sri Lanka. Explores 8 hands-on field activities, 23 authentic photographs, individual &amp; group budget audits, and personal professional reflections.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-white/70">
              <div>10 Participants</div>
              <span>•</span>
              <div>8 Hands-On Tasks</div>
              <span>•</span>
              <div>LKR 30,000 Budget</div>
              <span>•</span>
              <div>Video Documentary</div>
            </div>

            <div className="pt-3">
              <Link
                href="/projects/ocean-crew"
                className="px-6 py-3.5 rounded-full bg-[#FF6B35] hover:bg-white text-white hover:text-[#171717] text-xs font-mono uppercase tracking-widest font-bold inline-flex items-center space-x-2 transition-all shadow-sm"
              >
                <span>Explore Dedicated Ocean Crew Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Real Photo Thumbnail */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-white/10 shadow-2xl group">
              <Image
                src="/images/ocean-crew/group-holding-turtle.jpeg"
                alt="Ocean Crew at turtle sanctuary"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div className="text-xs font-mono text-white/90">
                  Ocean Crew Group with Rescued Sea Turtle • SLIIT City Uni
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: 4 TECHNICAL PROJECTS (GIVEN PRIMARY PROMINENCE)
          ========================================================================= */}
      <section id="projects-section" className="space-y-10 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Project Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
              Software &amp; Security Projects.
            </h2>
            <p className="text-base text-[#686868] max-w-2xl leading-relaxed">
              Real projects covering web engineering, VPS infrastructure, e-commerce, mobile concepts, and security vulnerability audits.
            </p>
          </div>

          {/* Quick Expand / Collapse All Controls */}
          <div className="flex items-center space-x-3 text-xs font-mono shrink-0">
            <button
              onClick={expandAll}
              className="px-4 py-2 rounded-full bg-white border border-[#E5E5E2] hover:border-[#171717] text-[#171717] transition-all font-semibold"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 rounded-full bg-white border border-[#E5E5E2] hover:border-[#171717] text-[#171717] transition-all font-semibold"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Project Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-[#8E8E93] shrink-0 mr-1" />
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedProjectCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                selectedProjectCategory === cat
                  ? "bg-[#171717] text-white font-medium shadow-sm"
                  : "bg-white text-[#686868] hover:text-[#171717] hover:border-[#171717] border border-[#E5E5E2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project, pIdx) => {
            const isExpanded = !!expandedProjects[project.id];
            return (
              <div
                key={project.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-white border-[#171717] shadow-hover ring-1 ring-[#171717]/10"
                    : "bg-white border-[#E5E5E2] hover:border-[#171717] shadow-subtle"
                }`}
              >
                {/* Project Header Bar */}
                <div className="p-8 sm:p-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#FF6B35] px-3 py-1 rounded-full bg-[#FFF1EB]">
                        0{pIdx + 1}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[#8E8E93]">•</span>
                      <span className="text-xs font-mono text-[#686868]">
                        {project.status} ({project.period})
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#171717] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-[#FF6B35] font-semibold mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-base text-[#555555] leading-relaxed font-sans">
                      {project.overview}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs font-mono text-[#8E8E93] mr-1">Stack:</span>
                      {project.technologiesUsed.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono px-3 py-1 rounded-md bg-[#F7F7F5] text-[#171717] border border-[#E5E5E2]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Details Action */}
                  <div className="shrink-0">
                    <button
                      onClick={() => toggleProject(project.id)}
                      className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center space-x-2 ${
                        isExpanded
                          ? "bg-[#171717] text-white shadow-sm"
                          : "bg-[#F7F7F5] border border-[#E5E5E2] hover:border-[#171717] text-[#171717]"
                      }`}
                    >
                      <span>{isExpanded ? "Collapse Details" : "View Full Project Details"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Deep-Dive Drawer */}
                {isExpanded && (
                  <div className="px-8 sm:px-10 pb-10 pt-6 border-t border-[#E5E5E2] bg-[#FAF8F5]/80 space-y-10 animate-in fade-in duration-200">
                    {/* Objectives & Responsibilities Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                      {/* Project Objectives */}
                      <div className="p-8 rounded-2xl bg-white border border-[#E5E5E2] shadow-subtle space-y-4">
                        <div className="flex items-center space-x-2 pb-3 border-b border-[#E5E5E2]">
                          <Target className="w-4 h-4 text-[#FF6B35]" />
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
                            Project Objectives
                          </h4>
                        </div>
                        <ul className="space-y-3 text-sm text-[#555555] font-sans leading-relaxed">
                          {project.objectives.map((obj, oIdx) => (
                            <li key={oIdx} className="flex items-start space-x-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-2 shrink-0" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* My Responsibilities */}
                      <div className="p-8 rounded-2xl bg-white border border-[#E5E5E2] shadow-subtle space-y-4">
                        <div className="flex items-center space-x-2 pb-3 border-b border-[#E5E5E2]">
                          <CheckCircle2 className="w-4 h-4 text-[#171717]" />
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
                            My Development Responsibilities
                          </h4>
                        </div>
                        <ul className="space-y-3 text-sm text-[#555555] font-sans leading-relaxed">
                          {project.myResponsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start space-x-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Challenges & Implemented Resolutions */}
                    <div className="p-8 rounded-2xl bg-white border border-[#E5E5E2] shadow-subtle space-y-6">
                      <div className="flex items-center space-x-2 pb-3 border-b border-[#E5E5E2]">
                        <Lightbulb className="w-4 h-4 text-[#FF6B35]" />
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
                          Technical Challenges &amp; Implemented Resolutions
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        <div className="space-y-3">
                          <span className="text-xs font-mono uppercase tracking-wider text-rose-600 block font-bold">
                            Encountered Technical Friction:
                          </span>
                          {project.challengesEncountered.map((ch, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 text-xs text-[#171717] leading-relaxed flex items-start space-x-2.5"
                            >
                              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span>{ch}</span>
                            </div>
                          ))}
                        </div>

                        {/* Solutions */}
                        <div className="space-y-3">
                          <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 block font-bold">
                            Engineered Resolution:
                          </span>
                          {project.solutionsImplemented.map((sol, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-[#171717] leading-relaxed flex items-start space-x-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screenshots & Terminal Status Evidence */}
                    <div className="p-8 rounded-2xl bg-white border border-[#E5E5E2] shadow-subtle space-y-6">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-[#FF6B35]" />
                          <h4 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
                            Screenshots &amp; Supporting Evidence
                          </h4>
                        </div>
                        <span className="text-xs font-mono text-[#8E8E93]">
                          {project.evidence.length} Catalogued Artefacts
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.evidence.map((ev, evIdx) => (
                          <div
                            key={evIdx}
                            className="p-5 rounded-2xl bg-[#F7F7F5] border border-[#E5E5E2] flex flex-col justify-between space-y-4"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B35] px-2.5 py-0.5 rounded-full bg-white border border-[#E5E5E2] font-bold">
                                  {ev.type}
                                </span>
                                <span className="text-xs font-mono text-[#8E8E93]">
                                  0{evIdx + 1}
                                </span>
                              </div>
                              <h5 className="text-sm font-display font-bold text-[#171717]">
                                {ev.caption}
                              </h5>

                              {/* Terminal Status Evidence Block */}
                              <div className="p-4 rounded-xl bg-[#171717] text-white border border-black space-y-1.5 font-mono text-center">
                                <div className="flex items-center justify-center space-x-1.5 text-xs text-[#FF6B35] font-semibold">
                                  <Terminal className="w-3.5 h-3.5" />
                                  <span>{ev.placeholderText}</span>
                                </div>
                                {ev.note && (
                                  <span className="text-[10px] text-[#A5A5AA] block">
                                    {ev.note}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="pt-2 border-t border-[#E5E5E2] text-[10px] font-mono text-[#8E8E93] flex items-center justify-between">
                              <span>Verified Artefact</span>
                              <span className="text-[#FF6B35]">Editable Slot</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Repository Links Bar */}
                    <div className="pt-4 border-t border-[#E5E5E2] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                      <div className="flex flex-wrap items-center gap-6">
                        {project.liveUrlPlaceholder && (
                          <div className="flex items-center space-x-2 text-[#686868]">
                            <span className="text-[#8E8E93]">Live / Staging:</span>
                            <span className="text-[#FF6B35] font-semibold underline decoration-dotted">
                              {project.liveUrlPlaceholder}
                            </span>
                          </div>
                        )}
                        {project.repoUrlPlaceholder && (
                          <div className="flex items-center space-x-2 text-[#686868]">
                            <span className="text-[#8E8E93]">Repository:</span>
                            <span className="text-[#171717] font-semibold underline decoration-dotted">
                              {project.repoUrlPlaceholder}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="text-xs font-mono text-[#8E8E93]">
                        Project ID: <span className="text-[#FF6B35] font-bold">{project.id}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TECHNOLOGIES WORKED WITH (OPEN ARCHITECTURAL TOOLKIT)
          ========================================================================= */}
      <section id="technologies-section" className="space-y-10 scroll-mt-24 pt-8 border-t border-[#E5E5E2]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Technical Toolkit
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#171717] tracking-tight">
              Technologies Worked With.
            </h2>
            <p className="text-base text-[#686868] max-w-2xl leading-relaxed">
              Organized across five computing tiers. In strict compliance with instructions, proficiency status is kept transparent and editable rather than assumed or exaggerated.
            </p>
          </div>

          <div className="text-xs font-mono text-[#686868] bg-white px-4 py-2.5 rounded-full border border-[#E5E5E2] flex items-center space-x-2 shrink-0 shadow-subtle">
            <Sliders className="w-4 h-4 text-[#FF6B35]" />
            <span>Editable Proficiency Enabled</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-[#8E8E93] shrink-0 mr-1" />
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTechCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedTechCategory === cat
                  ? "bg-[#171717] text-white font-medium shadow-sm"
                  : "bg-white text-[#686868] hover:text-[#171717] hover:border-[#171717] border border-[#E5E5E2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Open Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E5E5E2] hover:border-[#171717] transition-all flex flex-col justify-between shadow-subtle"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
                    {tech.category}
                  </span>
                  {tech.badge && (
                    <span className="text-[10px] font-mono text-[#8E8E93] px-2 py-0.5 rounded bg-[#F7F7F5]">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-display font-bold text-[#171717]">
                  {tech.name}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed font-sans">
                  {tech.description}
                </p>
              </div>

              {/* Editable Status */}
              <div className="mt-6 pt-3 border-t border-[#E5E5E2] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8E8E93] text-[11px]">Proficiency:</span>
                <span className="text-[#FF6B35] font-semibold">{tech.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
