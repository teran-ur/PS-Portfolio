"use client";

import React from "react";
import { Users, GraduationCap, Award, ShieldCheck } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function TeamMembers() {
  const members = OCEAN_CREW_DATA.teamMembers;

  return (
    <section className="py-20 border-b border-[#E5E5E2] relative bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
              07 • Group Roster
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            The Team: <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0F2C4C]">
              Ocean Crew Roster.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            The 10 undergraduate student participants listed in Section 4 of the official project report, collaborating together for our Professional Skills community service submission.
          </p>
        </FadeIn>

        {/* 10 Team Members Clean Roster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {members.map((m, idx) => {
            const isMe = m.isCurrentUser;

            return (
              <FadeIn
                key={m.number}
                delay={idx * 0.04}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isMe
                    ? "bg-[#0F2C4C] text-white border-[#0F2C4C] shadow-card ring-2 ring-[#FF6B35]/40"
                    : "bg-white text-[#171717] border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isMe ? "text-[#14B8A6]" : "text-[#FF6B35]"
                      }`}
                    >
                      Member {m.number}
                    </span>
                    {isMe && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FF6B35] text-white text-[9px] font-mono uppercase tracking-wider font-bold">
                        Author
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-display font-bold leading-tight">
                      {m.name}
                    </h3>
                    <div
                      className={`text-xs font-mono ${
                        isMe ? "text-white/80" : "text-[#686868]"
                      }`}
                    >
                      {m.saNumber}
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[10px] font-mono uppercase tracking-wider ${
                    isMe ? "border-white/10 text-[#14B8A6]" : "border-[#E5E5E2] text-[#8E8E93]"
                  }`}
                >
                  SLIIT City Uni
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="p-4 rounded-2xl bg-white border border-[#E5E5E2] text-xs font-mono text-[#8E8E93] flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center space-x-1.5 text-[#171717]">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span>Transcribed verbatim from Section 4 (Student Details) of official project report</span>
          </span>
          <span>10 Registered Students • Feb 2025 Batch</span>
        </div>
      </div>
    </section>
  );
}
