"use client";

import React from "react";
import { Target, Heart, Shield, BookOpen, Users, Leaf, HandHeart, Coins } from "lucide-react";
import { OCEAN_CREW_DATA, OceanCrewObjective } from "@/data/oceanCrewData";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

const OBJECTIVE_ICONS: Record<string, React.ElementType> = {
  "01": Heart,
  "02": Shield,
  "03": BookOpen,
  "04": Users,
  "05": Leaf,
  "06": HandHeart,
  "07": Coins,
};

export default function ProjectObjectives() {
  return (
    <section className="py-20 border-b border-[#E5E5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
              02 • Purpose &amp; Motivation
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            Why We Did It: <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0D9488]">
              The 7 Core Objectives.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            Derived directly from the original project documentation, these seven objectives guided our group fieldwork—balancing direct animal welfare with interpersonal development and social accountability.
          </p>
        </FadeIn>

        {/* Asymmetrical Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCEAN_CREW_DATA.objectives.map((obj, idx) => {
            const Icon = OBJECTIVE_ICONS[obj.number] || Target;
            const isHighlight = obj.number === "01" || obj.number === "04";

            return (
              <FadeIn
                key={obj.number}
                delay={idx * 0.05}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  isHighlight
                    ? "bg-[#0F2C4C] text-white border-[#0F2C4C] shadow-card"
                    : "bg-white text-[#171717] border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        isHighlight
                          ? "bg-white/10 text-[#14B8A6]"
                          : "bg-[#FFF1EB] text-[#FF6B35]"
                      }`}
                    >
                      Objective {obj.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                        isHighlight
                          ? "bg-white/10 text-white"
                          : "bg-[#F7F7F5] text-[#171717] group-hover:bg-[#FF6B35] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold leading-snug">
                      {obj.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-sans ${
                        isHighlight ? "text-white/80" : "text-[#686868]"
                      }`}
                    >
                      {obj.focus}
                    </p>
                  </div>
                </div>

                <div
                  className={`pt-6 mt-6 border-t text-[11px] font-mono uppercase tracking-wider ${
                    isHighlight ? "border-white/10 text-[#14B8A6]" : "border-[#E5E5E2] text-[#8E8E93]"
                  }`}
                >
                  Documented In Project Report
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
