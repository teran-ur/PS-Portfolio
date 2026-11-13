"use client";

import React from "react";
import Image from "next/image";
import { FileText, Download, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function ProjectDocumentation() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9488] font-bold">
              10 • Academic Archival Access
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            Project Field <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0F2C4C]">
              Report &amp; Archive.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            The comprehensive submission report prepared by Ocean Crew for the Professional Skills academic assessment at SLIIT City Uni.
          </p>
        </FadeIn>

        {/* Document Showcase Spread */}
        <FadeIn delay={0.1}>
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E5E2] shadow-card flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Document Cover Thumbnail Frame */}
              <div className="relative w-32 h-44 rounded-2xl overflow-hidden border border-[#E5E5E2] shadow-subtle shrink-0 bg-[#F7F7F5]">
                <Image
                  src="/images/ocean-crew/cover.jpeg"
                  alt="Ocean Crew Report Cover"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-[#E6F7F5] border border-[#0D9488]/20 text-[#0D9488] text-xs font-mono uppercase tracking-wider font-bold">
                    Official Academic Report
                  </span>
                  <span className="text-xs font-mono text-[#8E8E93]">PDF • 1.16 MB</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#171717]">
                  {OCEAN_CREW_DATA.projectTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#686868] max-w-xl font-sans leading-relaxed">
                  Covers project background, 7 core objectives, 8 field activities, outcomes, budget breakdown, team roster, photographic evidence, and video documentation.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8E8E93] pt-2">
                  <span>Group: Ocean Crew</span>
                  <span>•</span>
                  <span>7 Pages Complete</span>
                  <span>•</span>
                  <span>SLIIT City Uni</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={OCEAN_CREW_DATA.reportPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#0F2C4C] hover:bg-[#FF6B35] text-white text-xs font-mono uppercase tracking-widest font-bold inline-flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Open Report in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={OCEAN_CREW_DATA.reportPdfUrl}
                download="Ocean_Crew_Turtle_Conservation_Project_Report.pdf"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F7F7F5] border border-[#E5E5E2] hover:border-[#171717] text-[#171717] text-xs font-mono uppercase tracking-widest font-bold inline-flex items-center justify-center space-x-2 transition-colors shadow-subtle"
              >
                <Download className="w-4 h-4 text-[#0D9488]" />
                <span>Download Project Report PDF</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
