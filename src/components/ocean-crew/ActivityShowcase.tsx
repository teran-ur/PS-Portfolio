"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Waves, ArrowRight, Eye } from "lucide-react";
import { OCEAN_CREW_DATA, OceanCrewActivity } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function ActivityShowcase({ onSelectPhoto }: { onSelectPhoto?: (src: string) => void }) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Direct Care", "Sanctuary Maintenance", "Education", "Community"];

  const filteredActivities =
    activeTab === "All"
      ? OCEAN_CREW_DATA.activities
      : OCEAN_CREW_DATA.activities.filter((a) => a.category === activeTab);

  return (
    <section id="activities" className="py-20 border-b border-[#E5E5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn className="space-y-4 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#0D9488] font-bold">
                03 • Practical Execution
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
              Our Documented <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#0F2C4C]">
                Field Activities.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
              Every task documented in Section 2.3 of the official project report, paired with authentic field photography captured on site during the sanctuary visit.
            </p>
          </FadeIn>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  activeTab === cat
                    ? "bg-[#0F2C4C] text-white font-bold shadow-sm"
                    : "bg-white text-[#686868] hover:text-[#171717] hover:border-[#171717] border border-[#E5E5E2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.map((act, idx) => (
            <FadeIn
              key={act.number}
              delay={idx * 0.05}
              className="p-5 rounded-3xl bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-4">
                {/* Photo frame */}
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F7F7F5] border border-[#E5E5E2] cursor-pointer"
                  onClick={() => onSelectPhoto && onSelectPhoto(act.image)}
                >
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 text-[#171717] text-[10px] font-mono uppercase tracking-wider font-bold shadow-sm flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-[#FF6B35]" />
                      <span>Enlarge</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FF6B35]">
                      Task {act.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0D9488] bg-[#E6F7F5] px-2 py-0.5 rounded-full font-semibold">
                      {act.category}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-[#171717] group-hover:text-[#0D9488] transition-colors leading-snug">
                    {act.title}
                  </h3>

                  <p className="text-xs text-[#686868] leading-relaxed font-sans line-clamp-3">
                    {act.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E5E2] flex items-center justify-between text-[11px] font-mono text-[#8E8E93]">
                <span>Documented Task</span>
                <span className="text-[#171717] font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Executed</span>
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
