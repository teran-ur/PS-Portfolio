"use client";

import React from "react";
import { Award, Users, MessageSquare, ShieldCheck, HeartHandshake, Globe2, Sparkles, CheckCircle2 } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

const COMPETENCY_ICONS: Record<string, React.ElementType> = {
  "Interpersonal Teamwork": Users,
  "Calibrated Communication": MessageSquare,
  "Professional Responsibility": ShieldCheck,
  "Community & Civic Duty": HeartHandshake,
  "Environmental Consciousness": Globe2,
};

export default function WhatWeAchieved() {
  const outcomes = OCEAN_CREW_DATA.outcomes;

  return (
    <section className="py-20 border-b border-[#E5E5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9488] font-bold">
              06 • Impact &amp; Competency Bridges
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            What We Achieved: <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0F2C4C]">
              Pedagogical Outcomes.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            Connecting real-world field conservation at the sanctuary directly to the theoretical principles of the Professional Skills academic curriculum at SLIIT City Uni.
          </p>
        </FadeIn>

        {/* Narrative Synthesis Block */}
        <FadeIn delay={0.1}>
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E2] shadow-card space-y-6">
            <div className="flex items-center space-x-2 text-[#0D9488]">
              <Award className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                Project Outcomes &amp; Impact Synthesis
              </span>
            </div>

            <p className="text-lg sm:text-xl font-display font-semibold text-[#171717] leading-relaxed">
              {outcomes.summary}
            </p>

            <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
              {outcomes.extended}
            </p>
          </div>
        </FadeIn>

        {/* 5 Core Competency Bridges to Professional Skills Curriculum */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
            <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
              The 5 Professional Skills Competency Bridges
            </span>
            <span className="text-xs font-mono text-[#8E8E93]">Module Alignment</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.competencyBridges.map((bridge, idx) => {
              const Icon = COMPETENCY_ICONS[bridge.skill] || CheckCircle2;

              return (
                <FadeIn
                  key={idx}
                  delay={idx * 0.06}
                  className="p-6 rounded-3xl bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#E6F7F5] text-[#0D9488] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8E8E93]">
                      Bridge 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-display font-bold text-[#171717] group-hover:text-[#0D9488] transition-colors">
                      {bridge.skill}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686868] leading-relaxed font-sans">
                      {bridge.detail}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
