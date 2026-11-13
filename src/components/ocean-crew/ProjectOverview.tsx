"use client";

import React from "react";
import Image from "next/image";
import { Waves, Heart, Shield, Users, Landmark, Coins } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function ProjectOverview() {
  return (
    <section id="overview" className="py-20 border-b border-[#E5E5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Masthead */}
        <FadeIn className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9488] font-bold">
              01 • Project Context &amp; Purpose
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            Conserving Marine Life Through{" "}
            <span className="font-serif italic font-normal text-[#0F2C4C]">
              Direct Civic Action.
            </span>
          </h2>
        </FadeIn>

        {/* Narrative & Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <FadeIn delay={0.1} className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl font-sans font-medium text-[#171717] leading-relaxed">
              {OCEAN_CREW_DATA.purpose}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
              <p>
                {OCEAN_CREW_DATA.background}
              </p>
            </div>

            {/* Editorial Blockquote */}
            <div className="pl-6 border-l-2 border-[#0D9488] py-2 space-y-2 bg-[#E6F7F5]/30 rounded-r-2xl p-4">
              <p className="text-base sm:text-lg font-serif italic text-[#0F2C4C] leading-relaxed">
                &ldquo;The experience allowed us to understand how even a small contribution of time, effort, and resources can support animal welfare and the wider community.&rdquo;
              </p>
              <span className="text-xs font-mono text-[#686868] block">
                — Ocean Crew Project Documentation Report, SLIIT City Uni
              </span>
            </div>
          </FadeIn>

          {/* Editorial Metric Spread (Not Generic Cards) */}
          <FadeIn delay={0.15} className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0F2C4C] text-white shadow-card space-y-8 relative overflow-hidden">
              <div className="absolute right-2 -bottom-6 text-9xl font-display font-black text-white/[0.04] select-none pointer-events-none">
                OC
              </div>

              <div className="space-y-2 relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#14B8A6] font-bold">
                  Operational Parameters
                </span>
                <h3 className="text-2xl font-display font-bold">
                  Fieldwork Snapshot
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 relative z-10 pt-2 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-display font-black text-[#14B8A6]">
                    10
                  </span>
                  <span className="text-xs font-mono text-white/70 block uppercase tracking-wider">
                    Undergraduates
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-display font-black text-[#FF6B35]">
                    08
                  </span>
                  <span className="text-xs font-mono text-white/70 block uppercase tracking-wider">
                    Core Activities
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-display font-black text-white">
                    30K
                  </span>
                  <span className="text-xs font-mono text-white/70 block uppercase tracking-wider">
                    Total Budget (LKR)
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-display font-black text-emerald-400">
                    5,000
                  </span>
                  <span className="text-xs font-mono text-white/70 block uppercase tracking-wider">
                    Donation Given (LKR)
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/60 space-y-1 relative z-10">
                <div>Institution: SLIIT City Uni</div>
                <div>Module: Professional Skills</div>
                <div>Supervision: Sanctuary Conservation Staff</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
