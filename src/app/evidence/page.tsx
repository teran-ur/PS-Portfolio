"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderCheck, FileText, Video, Mic, CheckCircle, ExternalLink, Filter, X, ShieldCheck, Code2, ChevronRight } from "lucide-react";
import { EVIDENCE_ARTEFACTS } from "@/data/evidenceData";
import { EvidenceArtefact } from "@/types/evidence";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

const CATEGORIES = ["All Artefacts", "Evaluations", "Documentation", "Interviews", "Correspondence", "Presentations"];

export default function EvidencePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Artefacts");
  const [activeModalArtefact, setActiveModalArtefact] = useState<EvidenceArtefact | null>(null);

  const filteredArtefacts =
    selectedCategory === "All Artefacts"
      ? EVIDENCE_ARTEFACTS
      : EVIDENCE_ARTEFACTS.filter((ev) => ev.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Header */}
      <FadeIn className="space-y-6 pb-12 border-b border-[#E5E5E2]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
            Evidence Archive
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            Verifiable Coursework &amp; Artefacts
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            {STUDENT_PROFILE.fullName}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#171717] tracking-tight leading-[1.05]">
          Evidence &amp; <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#FF6B35]">
            Documentation Gallery.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#686868] max-w-3xl font-sans leading-relaxed">
          Verifiable evidence artefacts demonstrating real-world application of the 9 curriculum chapters: peer evaluation matrices, mock interview logs, ATS CV analyses, meeting minutes, and self-regulation journals.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
          <div>
            Candidate: <span className="text-[#171717] font-medium">{STUDENT_PROFILE.fullName}</span> ({STUDENT_PROFILE.studentId})
          </div>
          <span>•</span>
          <div>
            <span className="text-[#FF6B35] font-bold">{EVIDENCE_ARTEFACTS.length}</span> Documented Artefacts
          </div>
          <span>•</span>
          <div>
            <span className="text-[#FF6B35] font-bold">100%</span> Contextualized
          </div>
          <span>•</span>
          <div>
            <span>{STUDENT_PROFILE.programme}</span>
          </div>
        </div>
      </FadeIn>

      {/* Category Filter Pills */}
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

      {/* Artefact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtefacts.map((art, idx) => (
          <FadeIn
            key={art.id}
            delay={idx * 0.05}
            className="p-8 rounded-3xl bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B35] px-2.5 py-0.5 rounded bg-[#FFF1EB] border border-[#FF6B35]/20 font-bold">
                  {art.category}
                </span>
                <span className="text-xs font-mono text-[#8E8E93]">
                  {art.fileType}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-[#171717] group-hover:text-[#FF6B35] transition-colors leading-snug">
                {art.title}
              </h3>
              <p className="text-xs font-mono text-[#FF6B35] mt-1">
                {art.chapterReference}
              </p>
              <p className="text-xs sm:text-sm text-[#686868] mt-3 line-clamp-3 leading-relaxed font-sans">
                {art.description}
              </p>

              {/* Skills Tags */}
              <div className="mt-4 pt-3 border-t border-[#E5E5E2] flex flex-wrap gap-1.5">
                {art.skillsDemonstrated.map((sk, sidx) => (
                  <span
                    key={sidx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E5E5E2] text-[#686868]"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5E2] flex items-center justify-between">
              <span className="text-xs font-mono text-[#8E8E93]">
                {art.dateCreated}
              </span>
              <button
                onClick={() => setActiveModalArtefact(art)}
                className="text-xs font-mono uppercase tracking-wider text-[#171717] group-hover:text-[#FF6B35] flex items-center space-x-1 font-bold transition-colors"
              >
                <span>Inspect Artefact</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Cross-Link Banner to Technical Project Evidence (INTENTIONAL DARK CONTRAST) */}
      <FadeIn>
        <div className="p-8 md:p-12 rounded-3xl bg-[#171717] text-white border border-black flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-card relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
                Technical Systems Evidence
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Applied Development Artefacts &amp; Systems Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A5AA] max-w-2xl font-sans leading-relaxed">
              Inspect screenshots, DigitalOcean VPS terminal status, MySQL schema diagrams, mobile wireframes, and Cisco Packet Tracer network topology maps across 5 documented projects.
            </p>
          </div>

          <Link
            href="/projects#projects-section"
            className="px-6 py-3.5 rounded-full bg-[#FF6B35] text-white text-xs font-mono uppercase tracking-widest font-bold hover:bg-white hover:text-[#171717] transition-all flex items-center space-x-2 shrink-0 shadow-sm relative z-10"
          >
            <span>View Technical Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </FadeIn>

      {/* Artefact Inspection Modal */}
      {activeModalArtefact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-[#E5E5E2] rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveModalArtefact(null)}
              className="absolute top-6 right-6 p-2 text-[#8E8E93] hover:text-[#171717] rounded-full hover:bg-[#F7F7F5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#8E8E93]">
                <span className="text-[#FF6B35] font-semibold">{activeModalArtefact.category}</span>
                <span>•</span>
                <span>{activeModalArtefact.fileType}</span>
                <span>•</span>
                <span>{activeModalArtefact.dateCreated}</span>
              </div>

              <h2 className="text-2xl font-display font-bold text-[#171717] pr-8">
                {activeModalArtefact.title}
              </h2>
              <p className="text-xs font-mono text-[#FF6B35]">
                Curriculum Origin: {activeModalArtefact.chapterReference}
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-[#E5E5E2] text-xs sm:text-sm text-[#404040] leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8E8E93] block mb-1 font-bold">
                  Artefact Description &amp; Specification:
                </span>
                {activeModalArtefact.description}
              </div>

              {/* Context is King Reflective Meta-Analysis */}
              <div className="p-4 rounded-2xl bg-[#FFF1EB] border border-[#FF6B35]/20 text-xs sm:text-sm leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF6B35] font-bold block mb-1">
                  Context is King — Pedagogical Reflection:
                </span>
                <p className="text-[#171717]">
                  {activeModalArtefact.reflectionSummary}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {activeModalArtefact.skillsDemonstrated.map((sk, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F7F7F5] border border-[#E5E5E2] text-[#686868]"
                  >
                    Verified: {sk}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E5E5E2] flex items-center justify-between text-xs font-mono text-[#8E8E93]">
                <span className="flex items-center space-x-1.5 text-[#171717]">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                  <span>Academic Evidence Archive</span>
                </span>
                <button
                  onClick={() => setActiveModalArtefact(null)}
                  className="px-5 py-2.5 rounded-full bg-[#171717] text-white hover:bg-[#FF6B35] uppercase tracking-wider text-xs font-mono font-bold transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
