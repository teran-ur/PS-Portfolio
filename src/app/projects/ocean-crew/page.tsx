"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Compass, Waves } from "lucide-react";
import OceanCrewHero from "@/components/ocean-crew/OceanCrewHero";
import ProjectOverview from "@/components/ocean-crew/ProjectOverview";
import ProjectObjectives from "@/components/ocean-crew/ProjectObjectives";
import ActivityShowcase from "@/components/ocean-crew/ActivityShowcase";
import ProjectGallery from "@/components/ocean-crew/ProjectGallery";
import ProjectBudget from "@/components/ocean-crew/ProjectBudget";
import WhatWeAchieved from "@/components/ocean-crew/WhatWeAchieved";
import TeamMembers from "@/components/ocean-crew/TeamMembers";
import ProjectVideo from "@/components/ocean-crew/ProjectVideo";
import PersonalReflection from "@/components/ocean-crew/PersonalReflection";
import ProjectDocumentation from "@/components/ocean-crew/ProjectDocumentation";
import { STUDENT_PROFILE } from "@/data/studentProfile";

export default function OceanCrewPage() {
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<string | null>(null);

  const handleSelectPhoto = (photoSrc: string) => {
    setSelectedGalleryPhoto(photoSrc);
    // Smooth scroll down to the gallery if needed
    const galleryEl = document.getElementById("gallery");
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article className="min-h-screen bg-[#F7F7F5] selection:bg-[#0D9488] selection:text-white pb-24">
      {/* SECTION A: CINEMATIC HERO */}
      <OceanCrewHero />

      {/* SECTION B: PROJECT OVERVIEW */}
      <ProjectOverview />

      {/* SECTION C: WHY WE DID IT (OBJECTIVES) */}
      <ProjectObjectives />

      {/* SECTION D: OUR ACTIVITIES */}
      <ActivityShowcase onSelectPhoto={handleSelectPhoto} />

      {/* SECTION E: THE EXPERIENCE (PHOTOGRAPHIC GALLERY & LIGHTBOX) */}
      <ProjectGallery
        externalSelectedPhoto={selectedGalleryPhoto}
        onClearExternalPhoto={() => setSelectedGalleryPhoto(null)}
      />

      {/* SECTION F: PROJECT BUDGET */}
      <ProjectBudget />

      {/* SECTION G: WHAT WE ACHIEVED (OUTCOMES & SKILLS BRIDGES) */}
      <WhatWeAchieved />

      {/* SECTION H: THE TEAM (OCEAN CREW ROSTER) */}
      <TeamMembers />

      {/* SECTION I: PROJECT VIDEO */}
      <ProjectVideo />

      {/* SECTION J: PERSONAL REFLECTION */}
      <PersonalReflection />

      {/* SECTION K: ORIGINAL DOCUMENTATION */}
      <ProjectDocumentation />

      {/* Bottom Editorial Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-[#E5E5E2] flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-[#E5E5E2] hover:border-[#171717] text-xs font-mono uppercase tracking-widest text-[#171717] hover:text-[#FF6B35] transition-all shadow-subtle group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to All Technical Projects</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="/learning-portfolio"
            className="text-xs font-mono uppercase tracking-wider text-[#686868] hover:text-[#171717] transition-colors"
          >
            Explore 9 Academic Pillars →
          </Link>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 rounded-full bg-[#171717] text-white hover:bg-[#FF6B35] transition-colors shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
