"use client";

import React from "react";
import { Bookmark, Edit3, UserCheck, Compass, CheckCircle2, Sparkles } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function PersonalReflection() {
  const reflection = OCEAN_CREW_DATA.personalReflection;

  return (
    <section className="py-20 border-b border-[#E5E5E2] relative bg-[#F7F7F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
              09 • Individual Pedagogical Reflection
            </span>
            <span className="text-[#E5E5E2] font-mono text-xs">/</span>
            <span className="font-mono text-xs text-[#686868]">
              {STUDENT_PROFILE.fullName} ({STUDENT_PROFILE.studentId})
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            What I Took Away <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0D9488]">
              From This Experience.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#686868] font-sans leading-relaxed">
            {reflection.intro}
          </p>
        </FadeIn>

        {/* 6 Structured Reflection Prompt Blocks */}
        <div className="space-y-6">
          {reflection.sections.map((sec, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.05}
              className="p-8 rounded-3xl bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all space-y-4 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E5E5E2] gap-2">
                <div className="flex items-center space-x-2.5">
                  <span className="font-mono text-xs font-bold text-[#FF6B35]">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-display font-bold text-[#171717] group-hover:text-[#0D9488] transition-colors">
                    {sec.heading}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 text-[11px] font-mono text-[#8E8E93]">
                  <Edit3 className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Editable Student Reflection Slot</span>
                </div>
              </div>

              <div className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
                <span className="font-bold text-[#0F2C4C] uppercase tracking-wider">Reflective Focus: </span>
                <span>{sec.prompt}</span>
              </div>

              <p className="text-sm sm:text-base text-[#404040] leading-relaxed font-sans pt-1">
                {sec.content}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Candidate Authorship Box */}
        <FadeIn delay={0.2} className="p-6 rounded-3xl bg-[#0F2C4C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-card">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#14B8A6] font-bold block">
              Individual Assessment Declaration
            </span>
            <p className="text-sm font-sans text-white/90">
              Reflections written by {STUDENT_PROFILE.fullName} ({STUDENT_PROFILE.studentId}), Student 04 of Ocean Crew.
            </p>
          </div>

          <div className="text-xs font-mono text-white/60 shrink-0">
            {STUDENT_PROFILE.institution} • {STUDENT_PROFILE.programme}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
