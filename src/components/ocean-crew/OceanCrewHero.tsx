"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown, Users, Compass, Waves, HeartHandshake, ShieldCheck } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn, ImageReveal } from "@/components/motion/MotionWrapper";

export default function OceanCrewHero() {
  return (
    <section className="relative pt-12 pb-20 md:py-24 border-b border-[#E5E5E2] overflow-hidden">
      {/* Subtle organic marine background tints */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#14B8A6]/[0.06] via-[#0F2C4C]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none select-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-[#FF6B35]/[0.04] to-transparent rounded-full blur-2xl pointer-events-none select-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link & Category Path */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#686868] hover:text-[#FF6B35] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#E6F7F5] border border-[#0D9488]/20 text-[#0D9488] text-xs font-mono uppercase tracking-wider font-bold">
              Community Service
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FFF1EB] border border-[#FF6B35]/20 text-[#FF6B35] text-xs font-mono uppercase tracking-wider font-semibold">
              Professional Skills
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E5E5E2] text-[#686868] text-xs font-mono">
              SLIIT City Uni
            </span>
          </div>
        </div>

        {/* Hero Title & Intro Text */}
        <div className="space-y-6 max-w-4xl">
          <FadeIn delay={0.05} className="space-y-3">
            <div className="flex items-center space-x-2 text-[#0D9488] font-mono text-xs uppercase tracking-widest font-bold">
              <Waves className="w-4 h-4" />
              <span>Dedicated Group Field Case Study</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold text-[#171717] tracking-tight leading-[1.02]">
              OCEAN <span className="font-serif italic font-normal text-[#0F2C4C]">CREW.</span>
            </h1>

            <p className="text-xl sm:text-2xl font-display font-semibold text-[#FF6B35] tracking-tight">
              {OCEAN_CREW_DATA.projectTitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-base sm:text-lg text-[#404040] leading-relaxed font-sans max-w-3xl">
              A community service experience focused on turtle conservation, teamwork and environmental responsibility. Fieldwork conducted by 10 undergraduate students at a coastal sea turtle conservation sanctuary in Sri Lanka.
            </p>
          </FadeIn>
        </div>

        {/* Asymmetrical Documentary Photography Frame */}
        <FadeIn delay={0.15} className="pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Primary Hero Photograph: Group holding turtle */}
            <div className="lg:col-span-8 relative group">
              <div className="relative rounded-3xl overflow-hidden bg-[#171717] border border-[#E5E5E2] shadow-card aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src="/images/ocean-crew/group-holding-turtle.jpeg"
                  alt="Ocean Crew student group holding a rescued sea turtle with sanctuary staff"
                  fill
                  priority
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* On-image caption badge */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#FF6B35] font-bold inline-block">
                      Primary Documentary Evidence
                    </span>
                    <h2 className="text-lg sm:text-xl font-display font-bold">
                      Ocean Crew Group at the Sanctuary
                    </h2>
                    <p className="text-xs text-white/80 font-sans max-w-md">
                      All 10 students actively participating in turtle care, sanctuary maintenance, and environmental conservation.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-white/70 shrink-0">
                    SLIIT City Uni • 10 Members
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Asymmetrical Card: Report Cover & Coordinates */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5E2] space-y-6 shadow-subtle relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E2]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0D9488] font-bold flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Academic Work</span>
                  </span>
                  <span className="text-xs font-mono text-[#8E8E93]">Module PS</span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8E8E93] block">
                    Key Project Coordinates
                  </span>
                  <div className="space-y-2 text-xs sm:text-sm font-sans">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#F7F7F5]">
                      <span className="text-[#686868]">Group Name</span>
                      <span className="font-bold text-[#171717] font-mono">Ocean Crew</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#F7F7F5]">
                      <span className="text-[#686868]">Participants</span>
                      <span className="font-bold text-[#171717] font-mono">10 Undergraduates</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#F7F7F5]">
                      <span className="text-[#686868]">Activities Documented</span>
                      <span className="font-bold text-[#0D9488] font-mono">8 Core Tasks</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#F7F7F5]">
                      <span className="text-[#686868]">Total Group Budget</span>
                      <span className="font-bold text-[#FF6B35] font-mono">LKR 30,000</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-[#686868]">Sanctuary Support</span>
                      <span className="font-bold text-emerald-600 font-mono">LKR 5,000 Donation</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#overview"
                    className="w-full py-3 rounded-full bg-[#171717] text-white hover:bg-[#FF6B35] text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-colors shadow-sm"
                  >
                    <span>Explore Case Study</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
