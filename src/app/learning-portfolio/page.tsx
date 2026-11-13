"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Filter, Sparkles, CheckCircle2, Waves } from "lucide-react";
import { CHAPTERS_DATA } from "@/data/chaptersData";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

const CATEGORIES = [
  "All Pillars",
  "Self-Awareness & Mind",
  "Career Architecture",
  "Non-Verbal & Dialogue",
  "Strategic Documentation",
  "Executive Communication",
  "Digital Netiquette",
  "Customer Service",
  "Neuroscience & EQ",
  "Executive Protocol",
];

export default function LearningPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Pillars");

  const filteredChapters =
    selectedCategory === "All Pillars"
      ? CHAPTERS_DATA
      : CHAPTERS_DATA.filter((ch) => ch.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Header */}
      <FadeIn className="space-y-6 pb-12 border-b border-[#E5E5E2]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
            Curriculum Directory
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            9 Core Academic Pillars
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            {STUDENT_PROFILE.fullName}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#171717] tracking-tight leading-[1.05]">
          The Learning <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#FF6B35]">
            Curriculum Index.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#686868] max-w-3xl font-sans leading-relaxed">
          Comprehensive synthesis across all nine foundational modules of the Professional Skills curriculum led by Mrs. Ishara Raviharee Weerasinghe (Lecturer In Charge). Every chapter bridges rigorous theoretical frameworks with experiential reflections connecting to software development, entrepreneurship, and leadership.
        </p>

        {/* Candidate & Module Meta Strip */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
          <div>
            Candidate: <span className="text-[#171717] font-medium">{STUDENT_PROFILE.fullName}</span> ({STUDENT_PROFILE.studentId})
          </div>
          <span>•</span>
          <div>
            <span className="text-[#FF6B35] font-bold">9</span> Chapters
          </div>
          <span>•</span>
          <div>
            <span className="text-[#FF6B35] font-bold">100%</span> Personalised Synthesis
          </div>
          <span>•</span>
          <div>
            <span>{STUDENT_PROFILE.institution}</span>
          </div>
        </div>
      </FadeIn>

      {/* Community Service Spotlight */}
      <FadeIn>
        <Link
          href="/projects/ocean-crew"
          className="p-6 rounded-3xl bg-[#0F2C4C] hover:bg-[#163A5F] text-white border border-[#0F2C4C] shadow-subtle transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#14B8A6]/20 text-[#14B8A6] flex items-center justify-center shrink-0">
              <Waves className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#14B8A6] text-[#0F2C4C] font-bold">
                  Major Module Component
                </span>
                <span className="text-xs font-mono text-white/70">10 Students • SLIIT City Uni</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white group-hover:text-[#14B8A6] transition-colors">
                Ocean Crew: Turtle Conservation &amp; Community Service Project
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#14B8A6] group-hover:text-white font-bold transition-colors shrink-0">
            <span>Explore Dedicated Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </FadeIn>

      {/* Category Filter Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-3.5 h-3.5 text-[#8E8E93] shrink-0 mr-1" />
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "bg-white text-[#686868] hover:text-[#171717] hover:border-[#171717] border border-[#E5E5E2]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chapters Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredChapters.map((ch, idx) => (
          <FadeIn
            key={ch.slug}
            delay={idx * 0.05}
            className="group relative p-8 rounded-3xl bg-white border border-[#E5E5E2] hover:border-[#171717] transition-all flex flex-col justify-between shadow-subtle hover:shadow-card overflow-hidden"
          >
            {/* Giant Architectural Watermark Number */}
            <div className="absolute right-4 top-2 text-7xl font-display font-black text-[#171717]/[0.04] group-hover:text-[#FF6B35]/[0.08] transition-colors select-none pointer-events-none">
              {ch.number}
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
                  Pillar {ch.number}
                </span>
                <span className="flex items-center space-x-1 text-xs font-mono text-[#8E8E93]">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>{ch.estimatedReadTime}</span>
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] block mb-1">
                  {ch.category}
                </span>
                <h2 className="text-xl font-display font-bold text-[#171717] group-hover:text-[#FF6B35] transition-colors leading-tight">
                  {ch.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#686868] line-clamp-3 leading-relaxed font-sans">
                {ch.overview}
              </p>

              {/* Learning Objectives Preview */}
              <div className="pt-4 border-t border-[#E5E5E2] space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E93] block mb-1 font-bold">
                  Core Competencies:
                </span>
                {ch.learningObjectives.slice(0, 2).map((obj, i) => (
                  <div key={i} className="text-xs text-[#404040] flex items-start space-x-2 font-sans">
                    <span className="text-[#FF6B35] font-mono font-bold">→</span>
                    <span className="line-clamp-1">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#E5E5E2] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8E8E93]">
                {ch.vivaPreparation?.randomQuestions.length || 4} Viva Cards
              </span>
              <Link
                href={`/chapters/${ch.slug}`}
                className="text-xs font-mono uppercase tracking-wider text-[#171717] group-hover:text-[#FF6B35] font-bold flex items-center space-x-1.5 transition-colors"
              >
                <span>Explore Chapter</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
