"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Video, ExternalLink, QrCode, Play, Sparkles } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function ProjectVideo() {
  const [embedLoaded, setEmbedLoaded] = useState(false);

  return (
    <section className="py-20 border-b border-[#E5E5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9488] font-bold">
              08 • Documentary Media
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            Project Video: <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0F2C4C]">
              Fieldwork Journey.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            &ldquo;Take a glimpse into our journey with Ocean Crew. Click the link below or scan the QR code to watch a short video showcasing our project activities and experiences.&rdquo;
          </p>
        </FadeIn>

        {/* Video Player & QR Code Split Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Embed / Player Box (8 Cols) */}
          <FadeIn delay={0.1} className="lg:col-span-8 space-y-4">
            <div className="rounded-3xl overflow-hidden bg-[#171717] border border-[#E5E5E2] shadow-card aspect-[16/9] relative">
              <iframe
                src={OCEAN_CREW_DATA.videoEmbedUrl}
                title="Ocean Crew Project Video"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                onLoad={() => setEmbedLoaded(true)}
              />

              {/* Fallback overlay if iframe is blocked by third-party cookies / CORS */}
              {!embedLoaded && (
                <div className="absolute inset-0 bg-[#0F2C4C]/90 flex flex-col items-center justify-center p-6 text-white text-center space-y-4 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center text-white shadow-lg animate-pulse">
                    <Play className="w-7 h-7 ml-1" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold">
                      Loading Project Video...
                    </h3>
                    <p className="text-xs text-white/70 max-w-sm font-sans">
                      Connecting to Google Drive media stream. If the player is blocked by your browser settings, use the external viewing button below.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Direct External Action Bar */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5E5E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold block">
                  Hosted on Google Drive
                </span>
                <p className="text-xs text-[#686868] font-sans">
                  Documentary video preserved in cloud storage.
                </p>
              </div>

              <a
                href={OCEAN_CREW_DATA.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#0F2C4C] hover:bg-[#FF6B35] text-white text-xs font-mono uppercase tracking-widest font-bold inline-flex items-center justify-center space-x-2 transition-colors shadow-sm shrink-0"
              >
                <span>Watch on Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>

          {/* QR Code Card (4 Cols) */}
          <FadeIn delay={0.15} className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle space-y-6 text-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F5] border border-[#0D9488]/20 text-[#0D9488] text-xs font-mono uppercase tracking-wider font-bold">
                <QrCode className="w-3.5 h-3.5" />
                <span>Instant Mobile Scan</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-display font-bold text-[#171717]">
                  Scan to Watch on Phone
                </h3>
                <p className="text-xs text-[#686868] font-sans">
                  Scan with your mobile camera to launch the video stream instantly.
                </p>
              </div>

              {/* QR Code Image */}
              <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border border-[#E5E5E2] p-2 bg-white shadow-inner">
                <Image
                  src={OCEAN_CREW_DATA.videoQrCode}
                  alt="QR code to watch Ocean Crew video"
                  fill
                  className="object-contain p-2"
                  sizes="192px"
                />
              </div>

              <div className="text-[11px] font-mono text-[#8E8E93] pt-2 border-t border-[#E5E5E2]">
                Links directly to Google Drive Video Stream
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
