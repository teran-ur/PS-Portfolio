"use client";

import React, { useState } from "react";
import { Award, CheckCircle, Clock, FileCode, Layers } from "lucide-react";

interface StarSection {
  letter: "S" | "T" | "A" | "R";
  name: string;
  sharePercentage: string;
  description: string;
  grammaticalTense: string;
  sampleTechnicalResponse: string;
}

const STAR_SECTIONS: StarSection[] = [
  {
    letter: "S",
    name: "Situation",
    sharePercentage: "15% of Answer",
    description: "Set the context and project landscape. Be concise, establishing the company, client, or team setting without excessive storytelling.",
    grammaticalTense: "Past Simple: 'During our final semester cloud computing project, our team was building...'",
    sampleTechnicalResponse: "During our high-concurrency e-commerce deployment sprint, our microservices cluster experienced a sudden 400% spike in database deadlocks, threatening platform availability.",
  },
  {
    letter: "T",
    name: "Task",
    sharePercentage: "15% of Answer",
    description: "Clarify the precise objective, obstacle, or challenge assigned specifically to you under tight resource or time constraints.",
    grammaticalTense: "Past Simple: 'My specific responsibility was to...'",
    sampleTechnicalResponse: "As the backend lead, I was tasked with isolating the locking transactions within a 4-hour maintenance window and ensuring zero data loss across customer carts.",
  },
  {
    letter: "A",
    name: "Action",
    sharePercentage: "50% of Answer (Core Weight)",
    description: "Articulate the exact technical and interpersonal initiatives YOU led. Focus on 'I' rather than a vague 'we'. Highlight problem-solving and emotional poise.",
    grammaticalTense: "Active Action Verbs: 'I architected...', 'I refactored...', 'I mediated...'",
    sampleTechnicalResponse: "I analyzed the PostgreSQL query execution plans, identified unindexed foreign keys causing table scans, refactored the ORM queries into batched upserts, and coordinated an emergency review with the frontend team to throttle duplicate client retries.",
  },
  {
    letter: "R",
    name: "Result",
    sharePercentage: "20% of Answer",
    description: "Deliver quantifiable technical or business outcomes, performance metrics achieved, and meta-learning takeaways.",
    grammaticalTense: "Present Perfect / Past Simple: 'This resulted in a 70% decrease in latency...'",
    sampleTechnicalResponse: "The patch reduced database locking from 12.4 seconds to 85 milliseconds, sustained 15,000 concurrent checkout sessions without downtime, and earned commendation from our module evaluators.",
  },
];

export default function StarMethodBuilder() {
  const [activeLetter, setActiveLetter] = useState<"S" | "T" | "A" | "R">("S");
  const current = STAR_SECTIONS.find((s) => s.letter === activeLetter)!;

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Behavioral Interview Framework • Industry Benchmark
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            The STAR Answering Methodology
          </h3>
        </div>
        <div className="text-xs text-[#8E8E93] font-mono">
          Click letters below to inspect time allocations &amp; technical scripting
        </div>
      </div>

      {/* 4 Interactive Letters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {STAR_SECTIONS.map((sec) => {
          const isSelected = activeLetter === sec.letter;
          return (
            <button
              key={sec.letter}
              onClick={() => setActiveLetter(sec.letter)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#171717] bg-[#171717] text-white shadow-card"
                  : "border-[#E5E5E2] bg-[#F7F7F5] text-[#171717] hover:border-[#171717]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-2xl font-bold ${isSelected ? "text-[#FF6B35]" : "text-[#171717]"}`}>
                  {sec.letter}
                </span>
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${isSelected ? "bg-white/10 text-[#EBEBE8]" : "bg-white text-[#686868] border border-[#E5E5E2]"}`}>
                  {sec.sharePercentage}
                </span>
              </div>
              <h4 className="text-xs font-semibold mt-2">{sec.name}</h4>
            </button>
          );
        })}
      </div>

      {/* Selected Section Drilldown */}
      <div className="p-6 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-4">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#E5E5E2]">
          <span className="w-9 h-9 rounded-lg bg-white border border-[#E5E5E2] flex items-center justify-center font-mono font-bold text-[#FF6B35] text-base shadow-subtle">
            {current.letter}
          </span>
          <div>
            <h4 className="text-sm font-display font-bold text-[#171717]">
              {current.name} — Recommended Share: {current.sharePercentage}
            </h4>
            <p className="text-xs text-[#FF6B35] font-mono">
              Grammar Guideline: {current.grammaticalTense}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Strategic Objective
            </h5>
            <p className="text-xs text-[#404040] leading-relaxed bg-white p-3.5 rounded-lg border border-[#E5E5E2]">
              {current.description}
            </p>
          </div>

          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Exemplary Software Engineering Response
            </h5>
            <p className="text-xs text-[#171717] leading-relaxed bg-[#FFF1EB] p-3.5 rounded-lg border border-[#FF6B35]/20 font-serif italic">
              &ldquo;{current.sampleTechnicalResponse}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
