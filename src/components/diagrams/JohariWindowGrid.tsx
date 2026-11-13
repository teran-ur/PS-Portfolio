"use client";

import React, { useState } from "react";
import { UserCheck, EyeOff, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

interface Quadrant {
  id: "open" | "blind" | "hidden" | "unknown";
  title: string;
  subtitle: string;
  icon: React.ElementType;
  characteristics: string[];
  strategicGoal: string;
  actionMethod: string;
  colorBorder: string;
  bgColor: string;
}

const QUADRANTS: Record<string, Quadrant> = {
  open: {
    id: "open",
    title: "1. Open Area (Arena)",
    subtitle: "Known to Self & Known to Others",
    icon: UserCheck,
    characteristics: [
      "Logical & Analytical Reasoning",
      "Reliable Team Collaboration",
      "Transparent Dedication",
      "Known Technical Proficiencies",
    ],
    strategicGoal: "Maximize this arena through bidirectional feedback and appropriate personal disclosure.",
    actionMethod: "High Open Area correlates with team velocity, psychological safety, and clear mutual expectations.",
    colorBorder: "border-[#FF6B35]",
    bgColor: "bg-[#FFF1EB]",
  },
  blind: {
    id: "blind",
    title: "2. Blind Area (Blind Spot)",
    subtitle: "Unknown to Self & Known to Others",
    icon: EyeOff,
    characteristics: [
      "Unconscious habits under stress",
      "Latent diplomatic mediation",
      "Vocal cadence / body mannerisms",
      "How others actually perceive your tone",
    ],
    strategicGoal: "Shrink this quadrant by actively soliciting candid, constructive peer feedback.",
    actionMethod: "Schedule bi-weekly retrospective feedback sessions: 'What is one thing I do that blocks collaboration?'",
    colorBorder: "border-blue-400",
    bgColor: "bg-blue-50",
  },
  hidden: {
    id: "hidden",
    title: "3. Hidden Area (Façade)",
    subtitle: "Known to Self & Unknown to Others",
    icon: ShieldAlert,
    characteristics: [
      "Private fear of making mistakes",
      "Overthinking before technical tasks",
      "Unshared creative ambitions",
      "Imposter syndrome feelings",
    ],
    strategicGoal: "Shrink this quadrant by practicing calibrated, authentic self-disclosure with trusted peers.",
    actionMethod: "Sharing vulnerabilities transforms fragile facades into genuine, relatable leadership.",
    colorBorder: "border-amber-400",
    bgColor: "bg-amber-50",
  },
  unknown: {
    id: "unknown",
    title: "4. Unknown Area",
    subtitle: "Unknown to Self & Unknown to Others",
    icon: Sparkles,
    characteristics: [
      "Untapped crisis leadership",
      "Hidden executive negotiation skills",
      "Unconscious artistic aptitudes",
      "Latent technological intuition",
    ],
    strategicGoal: "Discover and awaken this zone through embracing unprecedented workplace challenges.",
    actionMethod: "Volunteering for high-stakes, unfamiliar projects exposes latent capabilities that neither you nor others knew existed.",
    colorBorder: "border-purple-400",
    bgColor: "bg-purple-50",
  },
};

export default function JohariWindowGrid() {
  const [activeQuadrant, setActiveQuadrant] = useState<Quadrant>(QUADRANTS.open);

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Interactive Model • Luft &amp; Ingham (1955)
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            The Dynamic Johari Window Matrix
          </h3>
        </div>
        <div className="text-xs text-[#8E8E93] font-mono">
          Click any quadrant to inspect behavioral mechanics
        </div>
      </div>

      {/* 2x2 Grid Representation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.values(QUADRANTS).map((q) => {
          const Icon = q.icon;
          const isSelected = activeQuadrant.id === q.id;
          return (
            <button
              key={q.id}
              onClick={() => setActiveQuadrant(q)}
              className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                isSelected
                  ? `${q.colorBorder} ${q.bgColor} shadow-card ring-1 ring-[#FF6B35]/20`
                  : "border-[#E5E5E2] bg-[#F7F7F5] hover:border-[#171717]"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold tracking-wider text-[#171717] uppercase flex items-center space-x-2">
                  <Icon className="w-4 h-4 text-[#FF6B35]" />
                  <span>{q.title}</span>
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                )}
              </div>
              <p className="text-xs text-[#686868] mb-3 font-sans italic">{q.subtitle}</p>
              <div className="space-y-1">
                {q.characteristics.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="text-[11px] text-[#404040] flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Quadrant Detailed Breakdown */}
      <div className="p-6 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-4">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#E5E5E2]">
          <span className="p-2 rounded-lg bg-white border border-[#E5E5E2] text-[#FF6B35] shadow-subtle">
            {React.createElement(activeQuadrant.icon, { className: "w-5 h-5" })}
          </span>
          <div>
            <h4 className="text-sm font-display font-bold text-[#171717]">
              {activeQuadrant.title} — Strategic Architecture
            </h4>
            <p className="text-xs text-[#FF6B35] font-mono">{activeQuadrant.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Key Strengths &amp; Traits
            </h5>
            <ul className="space-y-1.5">
              {activeQuadrant.characteristics.map((char, index) => (
                <li key={index} className="text-xs text-[#404040] flex items-start space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B35] mt-0.5 shrink-0" />
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Psychological Objective &amp; Action Protocol
            </h5>
            <p className="text-xs text-[#171717] font-semibold mb-2">
              {activeQuadrant.strategicGoal}
            </p>
            <p className="text-xs text-[#686868] leading-relaxed bg-white p-3.5 rounded-lg border border-[#E5E5E2]">
              {activeQuadrant.actionMethod}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
