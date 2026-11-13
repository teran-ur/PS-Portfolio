"use client";

import React, { useState } from "react";
import { FolderGit2, Briefcase, Award, GraduationCap, CheckCircle2 } from "lucide-react";

interface PortfolioArchetype {
  id: string;
  title: string;
  icon: React.ElementType;
  primaryGoal: string;
  targetAudience: string;
  coreContents: string[];
  evaluationCriterion: string;
}

const ARCHETYPES: PortfolioArchetype[] = [
  {
    id: "personal",
    title: "1. Personal Portfolio",
    icon: FolderGit2,
    primaryGoal: "Express unique creative identity, coding style, aesthetic sensibility, and independent projects.",
    targetAudience: "Creative peers, open-source communities, hackathon organizers, freelance clients.",
    coreContents: ["Interactive UI/UX prototypes", "GitHub repositories", "Creative writing / technical blogs", "Design experiments"],
    evaluationCriterion: "Aesthetic uniqueness, experimental courage, and technical ingenuity.",
  },
  {
    id: "career",
    title: "2. Career / Dossier Portfolio",
    icon: Briefcase,
    primaryGoal: "Present structured professional qualifications to secure full-time employment or internships.",
    targetAudience: "Corporate hiring managers, HR screeners, technical recruiters, admissions panels.",
    coreContents: ["ATS-optimized Hybrid Resume", "Targeted cover letters", "Verified recommendations", "Production code samples"],
    evaluationCriterion: "Quantifiable ROI, domain expertise, and clear evidence of execution.",
  },
  {
    id: "employment",
    title: "3. Employment Portfolio",
    icon: Award,
    primaryGoal: "Demonstrate ongoing business value as a current employee to earn promotions and leadership roles.",
    targetAudience: "Current engineering leads, department directors, and internal compensation committees.",
    coreContents: ["Quarterly KPI metrics", "Sprint retrospective logs", "Internal training certifications", "Cross-team contributions"],
    evaluationCriterion: "Organizational impact, peer mentorship, and team velocity enhancement.",
  },
  {
    id: "assessment",
    title: "4. Assessment Portfolio",
    icon: GraduationCap,
    primaryGoal: "Demonstrate rigorous academic learning, self-critique, viva readiness, and mastery of syllabus pillars.",
    targetAudience: "University lecturers, academic examiners, and viva voce evaluation boards.",
    coreContents: ["9-chapter curriculum synthesis", "Gibbs' reflective logs", "Randomized viva card drills", "Pedagogical citations"],
    evaluationCriterion: "Reflective depth, alignment with theoretical models, and viva defense composure.",
  },
];

export default function PortfolioMatrix() {
  const [selectedId, setSelectedId] = useState<string>("assessment");
  const active = ARCHETYPES.find((a) => a.id === selectedId)!;

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Curriculum Taxonomy • 4 Primary Archetypes
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            Comparative Portfolio Archetypes Matrix
          </h3>
        </div>
        <div className="text-xs text-[#8E8E93] font-mono">
          Select an archetype to contrast purpose and standards
        </div>
      </div>

      {/* 4 Archetype Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ARCHETYPES.map((arch) => {
          const Icon = arch.icon;
          const isSelected = selectedId === arch.id;
          return (
            <button
              key={arch.id}
              onClick={() => setSelectedId(arch.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#171717] bg-[#171717] text-white shadow-card"
                  : "border-[#E5E5E2] bg-[#F7F7F5] text-[#171717] hover:border-[#171717]"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#FF6B35]" : "text-[#686868]"}`} />
                <span className="text-xs font-semibold">{arch.title}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Archetype Inspection */}
      <div className="p-6 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-5">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#E5E5E2]">
          <span className="p-2.5 rounded-lg bg-white border border-[#E5E5E2] text-[#FF6B35] shadow-subtle">
            {React.createElement(active.icon, { className: "w-5 h-5" })}
          </span>
          <div>
            <h4 className="text-base font-display font-bold text-[#171717]">{active.title}</h4>
            <p className="text-xs text-[#686868] font-mono">
              Audience: {active.targetAudience}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Primary Goal &amp; Strategic Purpose
            </h5>
            <p className="text-xs text-[#404040] leading-relaxed bg-white p-3.5 rounded-lg border border-[#E5E5E2] mb-3">
              {active.primaryGoal}
            </p>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-1 font-bold">
              Academic Assessment Standard
            </h5>
            <p className="text-xs text-[#FF6B35] bg-[#FFF1EB] p-3.5 rounded-lg border border-[#FF6B35]/20 font-medium">
              {active.evaluationCriterion}
            </p>
          </div>

          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Core Content Architecture
            </h5>
            <ul className="space-y-2">
              {active.coreContents.map((content, idx) => (
                <li key={idx} className="text-xs text-[#404040] flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] mt-0.5 shrink-0" />
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
