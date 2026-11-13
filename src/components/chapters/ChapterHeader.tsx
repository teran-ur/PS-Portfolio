import React from "react";
import Link from "next/link";
import { Clock, UserCheck, ChevronRight, BookOpen } from "lucide-react";
import { ChapterData } from "@/types/chapter";

export default function ChapterHeader({ chapter }: { chapter: ChapterData }) {
  return (
    <div className="pb-10 border-b border-[#E5E5E2] space-y-6 relative overflow-hidden">
      {/* Subtle Architectural Number Accent */}
      <span className="absolute -top-6 -right-2 font-display font-black text-8xl md:text-9xl text-[#171717]/[0.03] select-none pointer-events-none">
        {chapter.number}
      </span>

      {/* Breadcrumb Trail */}
      <nav className="flex items-center space-x-2 text-xs font-mono text-[#8E8E93] relative z-10">
        <Link href="/" className="hover:text-[#171717] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/learning-portfolio" className="hover:text-[#171717] transition-colors">
          Learning Portfolio
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#FF6B35] font-semibold">Chapter {chapter.number}</span>
      </nav>

      {/* Meta Indicators */}
      <div className="flex flex-wrap items-center gap-3 relative z-10">
        <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-[#FFF1EB] text-[#FF6B35] font-bold tracking-wider">
          Module {chapter.number}
        </span>
        <span className="text-xs font-mono uppercase text-[#171717] font-semibold">
          {chapter.category}
        </span>
        <span className="text-[#8E8E93]">•</span>
        <span className="flex items-center space-x-1.5 text-xs text-[#686868] font-mono">
          <Clock className="w-3.5 h-3.5 text-[#FF6B35]" />
          <span>{chapter.estimatedReadTime} read</span>
        </span>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-2 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#171717] tracking-tight leading-[1]">
          {chapter.title}
        </h1>
        <p className="text-xl font-display font-medium text-[#404040] pt-1">
          {chapter.subtitle}
        </p>
      </div>

      {/* Academic Lecturer Citation Banner (Clean Editorial Strip) */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-t border-[#E5E5E2] relative z-10">
        <div className="flex items-center space-x-3">
          <span className="text-[#FF6B35] font-bold">Academic Lead:</span>
          <span className="font-semibold text-[#171717]">{chapter.academicLead}</span>
          <span className="text-[#8E8E93]">({chapter.academicRole})</span>
        </div>

        <div className="text-[#8E8E93]">
          SLIIT City Uni • Professional Skills Assessment Standard
        </div>
      </div>
    </div>
  );
}
