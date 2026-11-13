import React from "react";
import Link from "next/link";
import { BookOpen, ExternalLink, Bookmark, Sparkles, CheckCircle2 } from "lucide-react";
import { ACADEMIC_REFERENCES } from "@/data/referencesData";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: "Academic References & Bibliography | Professional Skills E-Portfolio",
  description: "Complete APA 7th edition bibliography and annotated reading list for the Professional Skills curriculum.",
};

export default function ReferencesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Header */}
      <FadeIn className="space-y-6 pb-12 border-b border-[#E5E5E2]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
            Scholarship &amp; Citations
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            APA 7th Edition
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            Peer-Reviewed Literature
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#171717] tracking-tight leading-[1.05]">
          Academic References &amp; <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#FF6B35]">
            Primary Literature.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#686868] max-w-3xl font-sans leading-relaxed">
          Complete APA 7th Edition bibliography supporting all nine academic modules. Includes foundational scholarship from Carol Dweck, Joseph Luft &amp; Harry Ingham, Albert Mehrabian, Daniel Goleman, Paul MacLean, and the Emily Post Institute.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
          <div>
            <span className="text-[#FF6B35] font-bold">{ACADEMIC_REFERENCES.length}</span> Primary Academic Citations
          </div>
          <span>•</span>
          <div>
            <span className="text-[#171717] font-semibold">APA 7th Edition</span> Standard
          </div>
          <span>•</span>
          <div>
            <span className="text-[#FF6B35] font-bold">100%</span> Annotated Scholarship
          </div>
        </div>
      </FadeIn>

      {/* Bibliography Items */}
      <div className="space-y-6">
        {ACADEMIC_REFERENCES.map((ref, idx) => (
          <FadeIn
            key={ref.id}
            delay={idx * 0.04}
            className="p-8 rounded-3xl bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all space-y-4 group"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B35] px-3 py-1 rounded-full bg-[#FFF1EB] border border-[#FF6B35]/20 font-bold">
                Chapter {ref.chapterNumber} • {ref.chapterTitle}
              </span>
              {ref.doiOrUrl && (
                <a
                  href={ref.doiOrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#686868] group-hover:text-[#FF6B35] flex items-center space-x-1.5 transition-colors"
                >
                  <span>Open Primary Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* APA Formatted Citation */}
            <p className="text-base font-sans font-medium text-[#171717] leading-relaxed pl-6 -indent-6">
              {ref.authors} ({ref.year}). <em className="font-serif italic font-semibold">{ref.title}</em>. {ref.source}
            </p>

            {/* Critical Pedagogical Annotation */}
            <div className="p-5 bg-[#F7F7F5] rounded-2xl border border-[#E5E5E2] text-xs sm:text-sm text-[#404040] leading-relaxed">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E8E93] block mb-1 font-bold">
                Pedagogical Contribution &amp; Coursework Relevance:
              </span>
              {ref.annotation}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
