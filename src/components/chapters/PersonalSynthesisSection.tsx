"use client";

import React from "react";
import {
  Compass,
  Lightbulb,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Bookmark,
  Award,
  Edit3,
  ArrowRight,
} from "lucide-react";
import { ChapterPersonalSynthesis } from "@/types/chapter";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

interface PersonalSynthesisProps {
  synthesis: ChapterPersonalSynthesis;
  chapterNumber: string;
  chapterTitle: string;
}

export default function PersonalSynthesisSection({
  synthesis,
  chapterNumber,
  chapterTitle,
}: PersonalSynthesisProps) {
  const chNumInt = parseInt(chapterNumber, 10);
  const formattedCh = chNumInt < 10 ? `0${chNumInt}` : `${chNumInt}`;

  return (
    <section className="my-16 pt-12 border-t-2 border-[#171717] space-y-12">
      {/* Editorial Chapter Synthesis Masthead */}
      <FadeIn className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
            Chapter {formattedCh} Experiential Synthesis
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            {STUDENT_PROFILE.fullName} ({STUDENT_PROFILE.studentId})
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            {STUDENT_PROFILE.institution}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#171717] tracking-tight leading-tight">
          Connecting Theory to Practice:{" "}
          <span className="font-serif italic font-normal text-[#FF6B35]">
            Undergraduate &amp; Developer
          </span>
        </h2>
        <p className="text-sm sm:text-base text-[#686868] max-w-3xl font-sans leading-relaxed">
          Reflective analysis connecting {chapterTitle} to coursework at SLIIT City Uni, software engineering projects (LA&apos;CEDRA, TechMart, ApPoint), digital systems at LA&apos;CEDRA, and collaborative teamwork.
        </p>
      </FadeIn>

      {/* =========================================================================
          STEP 1 & 2: TOPIC MEANING & CORE CONCEPTS (OPEN ASYMMETRICAL EDITORIAL)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Step 1: Meaning */}
        <div className="lg:col-span-6 space-y-3 pl-4 border-l-2 border-[#FF6B35]">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
              01. Meaning &amp; Conceptual Core
            </span>
          </div>
          <p className="text-sm md:text-base text-[#171717] leading-relaxed font-sans font-medium">
            {synthesis.topicMeaning}
          </p>
        </div>

        {/* Step 2: Important Concepts Learned */}
        <div className="lg:col-span-6 space-y-3 pl-4 border-l-2 border-[#171717]">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-[#171717]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
              02. Key Theoretical Concepts Acquired
            </span>
          </div>
          <div className="space-y-2 pt-1">
            {synthesis.coreConceptsLearned.map((concept, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#404040] font-sans">
                <span className="text-[#FF6B35] font-mono font-bold shrink-0 mt-0.5">→</span>
                <span>{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          STEP 3: WHY THE TOPIC MATTERS IN THE IT INDUSTRY (DARK GRAPHIC GROUNDING)
          ========================================================================= */}
      <FadeIn>
        <div className="p-8 md:p-10 rounded-3xl bg-[#171717] text-white border border-black relative overflow-hidden shadow-card">
          {/* Subtle watermark */}
          <div className="absolute right-4 bottom-2 text-7xl md:text-9xl font-display font-black text-white/[0.03] select-none pointer-events-none">
            IT//EQ
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="flex items-center space-x-2 pb-3 border-b border-white/10">
              <Cpu className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
                03. Industry Imperative — Why This Matters in Tech
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#F7F7F5] leading-relaxed font-sans">
              {synthesis.whyItMattersInIT}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* =========================================================================
          STEP 4: CONNECTION TO ACADEMIC & DEVELOPMENT ACTIVITIES
          ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#FF6B35]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
              04. Applied Evidence Across My Projects &amp; Studies
            </h3>
          </div>
          <span className="text-xs font-mono text-[#8E8E93]">
            {synthesis.activityConnections.length} Practical Applications
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {synthesis.activityConnections.map((act, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E5E5E2] hover:border-[#171717] transition-all space-y-3 shadow-subtle group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B35] px-2.5 py-0.5 rounded bg-[#FFF1EB] border border-[#FF6B35]/20 font-semibold">
                  {act.activityType}
                </span>
                <span className="text-xs font-mono text-[#8E8E93]">
                  Evidence 0{idx + 1}
                </span>
              </div>
              <h4 className="text-base font-display font-bold text-[#171717] group-hover:text-[#FF6B35] transition-colors">
                {act.activityTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#686868] leading-relaxed font-sans">
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          STEP 5: CONCRETE PRACTICAL APPLICATIONS
          ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 pb-3 border-b border-[#E5E5E2]">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
            05. Practical Workplace &amp; Venture Applications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {synthesis.practicalApplications.map((app, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#E5E5E2] space-y-2 shadow-subtle"
            >
              <div className="text-xs font-mono font-semibold text-[#171717] flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[#FF6B35] font-bold">Scenario {idx + 1}:</span>
                <span className="truncate">{app.scenario}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed pl-3.5 border-l border-emerald-500/30">
                {app.implementation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          STEP 6: PERSONAL REFLECTION & EDITABLE STUDENT INPUT PROMPT
          ========================================================================= */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center space-x-2 pb-3 border-b border-[#E5E5E2]">
          <Bookmark className="w-4 h-4 text-[#FF6B35]" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
            06. Personal Learning Reflection &amp; Self-Critique
          </h3>
        </div>

        {/* Narrative Reflection as an Editorial Epigraph */}
        <div className="pl-6 border-l-2 border-[#FF6B35] space-y-2 py-2">
          <p className="text-base sm:text-lg font-serif italic text-[#171717] leading-relaxed">
            &ldquo;{synthesis.personalReflection.narrative}&rdquo;
          </p>
          <span className="font-mono text-xs text-[#8E8E93] block">
            — {STUDENT_PROFILE.fullName}, Personal Reflection Log
          </span>
        </div>

        {/* Editable Student Input Placeholder Block */}
        <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-[#E5E5E2] space-y-3">
          <div className="flex items-center space-x-2 text-[#FF6B35]">
            <Edit3 className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold">
              Editable Student Input Prompt
            </span>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#686868] leading-relaxed bg-[#F7F7F5] p-4 rounded-xl border border-[#E5E5E2]">
            {synthesis.personalReflection.editableInputPrompt}
          </p>
          <div className="text-[11px] font-mono text-[#8E8E93] flex items-center justify-between pt-1">
            <span>Status: Editable Placeholder Ready</span>
            <span className="text-[#171717] font-medium">{STUDENT_PROFILE.studentId}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          STEP 7 & 8: IMPROVEMENT FRONTIERS & KEY PERSONAL TAKEAWAYS
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        {/* Step 7: Areas for Improvement (Amber Editorial) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFBF0] border border-amber-200/80 space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-amber-200/60">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              07. Active Learning Frontiers
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#686868] font-sans">
            Honest self-awareness identifying continuous growth areas:
          </p>
          <ul className="space-y-2.5 pt-1">
            {synthesis.areasForImprovement.map((area, idx) => (
              <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#171717] font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Step 8: Key Personal Takeaways (Orange Accent Card) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFF1EB] border border-[#FF6B35]/30 space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-[#FF6B35]/20">
            <Award className="w-4 h-4 text-[#FF6B35]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
              08. Personal Key Takeaways
            </h3>
          </div>
          <div className="space-y-3 pt-1">
            {synthesis.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#171717]">
                <span className="font-mono text-[#FF6B35] font-bold shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="font-sans font-medium">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
