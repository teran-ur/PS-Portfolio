import React from "react";
import Link from "next/link";
import { Award, Users, BookOpen, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: "Academic Acknowledgement | Professional Skills E-Portfolio",
  description: "Formal academic acknowledgement honoring Lecturer In Charge Mrs. Ishara Raviharee Weerasinghe and faculty.",
};

export default function AcknowledgementPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Header */}
      <FadeIn className="space-y-6 pb-12 border-b border-[#E5E5E2]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
            Formal Dedication
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            Academic Commendation
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            SLIIT City Uni
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#171717] tracking-tight leading-[1.05]">
          Acknowledgement &amp; <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#FF6B35]">
            Gratitude.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#686868] max-w-2xl font-sans leading-relaxed">
          Formally recognizing the dedicated pedagogical leadership, academic stewardship, and collaborative peer community that guided this semester&apos;s learning journey.
        </p>
      </FadeIn>

      {/* Primary Commendation: Senior Lecturer Mrs. Ishara Raviharee Weerasinghe */}
      <FadeIn>
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E5E2] shadow-card relative overflow-hidden space-y-8">
          <Quote className="w-20 h-20 text-[#FF6B35]/10 absolute top-8 right-8 select-none pointer-events-none" />

          <div className="space-y-6 relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF1EB] border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-mono uppercase tracking-widest font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Dedicated Academic Leadership</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#171717] tracking-tight">
              To Lecturer In Charge <br />
              <span className="text-[#FF6B35]">Mrs. Ishara Raviharee Weerasinghe</span>
            </h2>

            <blockquote className="text-lg sm:text-xl font-serif italic text-[#171717] leading-relaxed pl-4 border-l-2 border-[#FF6B35]">
              &ldquo;I would like to extend my deepest academic gratitude to Mrs. Ishara Raviharee Weerasinghe, our Lecturer In Charge, for her inspiring guidance, structured curriculum frameworks, and dedicated encouragement throughout this semester.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#686868] leading-relaxed font-sans">
              Her interactive lectures, practical simulations (from mock interviews to formal dining workshops), and constructive feedback have given us a clear understanding of how emotional intelligence, communication standards, and technical competence work together in professional software and engineering careers.
            </p>

            <div className="pt-6 border-t border-[#E5E5E2] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8E8E93]">
              <div className="space-y-0.5">
                <span className="text-[#FF6B35] font-bold block">Lecturer In Charge</span>
                <span>Professional Skills Academic Module</span>
              </div>
              <div className="text-right">
                <span className="text-[#171717] font-medium block">SLIIT City Uni</span>
                <span>Academic Semester 2025/2026</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Cohort & Faculty Acknowledgements (Open Editorial Spreads) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Academic Faculty */}
        <FadeIn delay={0.1} className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35]">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-[#171717]">
            Academic Faculty &amp; Instructors
          </h3>
          <p className="text-sm text-[#686868] leading-relaxed font-sans">
            Sincere appreciation to the academic faculty across SLIIT City Uni for establishing an environment of intellectual curiosity, rigorous computing discipline, and academic integrity across our Higher Diploma programme.
          </p>
        </FadeIn>

        {/* Peer Evaluation Groups */}
        <FadeIn delay={0.15} className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-display font-bold text-[#171717]">
            Peer Cohort &amp; Collaborators
          </h3>
          <p className="text-sm text-[#686868] leading-relaxed font-sans">
            Warm appreciation to my fellow undergraduate peers for their candid constructive critique during Johari Window evaluations, teamwork workshops, meeting simulations, and mock interview preparations.
          </p>
        </FadeIn>
      </div>

      {/* Formal Closing Candidate Declaration */}
      <FadeIn delay={0.2} className="p-8 sm:p-10 rounded-3xl bg-[#F7F7F5] border border-[#E5E5E2] text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
          Undergraduate Candidate Declaration
        </span>
        <p className="text-sm sm:text-base text-[#686868] font-sans max-w-2xl mx-auto leading-relaxed">
          This digital portfolio represents authentic academic coursework, personal experiential synthesis, and verifiable evidence curated in strict accordance with module assessment guidelines.
        </p>
        <div className="pt-2 text-xs font-mono text-[#171717] font-semibold">
          {STUDENT_PROFILE.fullName} • Reg: {STUDENT_PROFILE.studentId} • {STUDENT_PROFILE.programme} • {STUDENT_PROFILE.institution}
        </div>
      </FadeIn>
    </div>
  );
}
