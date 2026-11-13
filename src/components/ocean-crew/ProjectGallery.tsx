"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Camera, Maximize2 } from "lucide-react";
import { OCEAN_CREW_DATA, OceanCrewGalleryImage } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

interface ProjectGalleryProps {
  externalSelectedPhoto?: string | null;
  onClearExternalPhoto?: () => void;
}

export default function ProjectGallery({
  externalSelectedPhoto,
  onClearExternalPhoto,
}: ProjectGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // If parent passes a photo to open, find its index
  useEffect(() => {
    if (externalSelectedPhoto) {
      const idx = OCEAN_CREW_DATA.gallery.findIndex(
        (img) => img.src === externalSelectedPhoto
      );
      if (idx !== -1) {
        setSelectedIdx(idx);
      }
    }
  }, [externalSelectedPhoto]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
    if (onClearExternalPhoto) onClearExternalPhoto();
  }, [onClearExternalPhoto]);

  const handlePrev = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) =>
        prev === 0 ? OCEAN_CREW_DATA.gallery.length - 1 : (prev as number) - 1
      );
    }
  }, [selectedIdx]);

  const handleNext = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) =>
        prev === OCEAN_CREW_DATA.gallery.length - 1 ? 0 : (prev as number) + 1
      );
    }
  }, [selectedIdx]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleClose, handlePrev, handleNext]);

  const currentImage =
    selectedIdx !== null ? OCEAN_CREW_DATA.gallery[selectedIdx] : null;

  return (
    <section id="gallery" className="py-20 border-b border-[#E5E5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
              04 • Documentary Record
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            The Experience: <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0D9488]">
              Sanctuary Photographic Archive.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            A photographic archive of 23 moments captured during our sanctuary fieldwork, showcasing tank cleaning, feeding, rehabilitation assistance, and peer collaboration.
          </p>
        </FadeIn>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Featured Large Spreads (Columns 1-7 & 8-12) */}
          {OCEAN_CREW_DATA.gallery.map((item, idx) => {
            // Determine column span for asymmetrical rhythm
            let colSpan = "md:col-span-4";
            if (item.aspectRatio === "wide") {
              colSpan = "md:col-span-8";
            } else if (item.aspectRatio === "landscape") {
              colSpan = "md:col-span-6";
            } else if (item.aspectRatio === "portrait") {
              colSpan = "md:col-span-4";
            } else if (item.aspectRatio === "square") {
              colSpan = "md:col-span-4";
            }

            return (
              <FadeIn
                key={item.id}
                delay={idx * 0.04}
                className={`${colSpan} group cursor-pointer space-y-2`}
                onClick={() => setSelectedIdx(idx)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#171717] border border-[#E5E5E2] shadow-subtle group-hover:border-[#171717] transition-all">
                  <div
                    className={`relative w-full ${
                      item.aspectRatio === "wide"
                        ? "aspect-[16/9]"
                        : item.aspectRatio === "landscape"
                        ? "aspect-[4/3]"
                        : item.aspectRatio === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#14B8A6] font-bold block">
                          {item.category}
                        </span>
                        <p className="text-xs font-sans line-clamp-2">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8E93] px-1">
                  <span className="text-[#171717] font-medium truncate max-w-[80%]">
                    {item.activityRef || item.category}
                  </span>
                  <span className="text-[#FF6B35] font-bold flex items-center space-x-1">
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Accessible Interactive Lightbox */}
      {selectedIdx !== null && currentImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            aria-label="Close Lightbox (Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            aria-label="Previous Image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
            aria-label="Next Image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center space-y-4">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/40">
              <Image
                src={currentImage.src}
                alt={currentImage.caption}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 85vw"
                priority
              />
            </div>

            {/* Lightbox Caption & Meta */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white px-2">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#14B8A6] font-bold block">
                  {currentImage.category} • {currentImage.activityRef || "Documented Fieldwork"}
                </span>
                <p className="text-sm font-sans text-white/90">
                  {currentImage.caption}
                </p>
              </div>

              <div className="text-xs font-mono text-white/60 shrink-0">
                {selectedIdx + 1} of {OCEAN_CREW_DATA.gallery.length} (Use ← / → keys)
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
