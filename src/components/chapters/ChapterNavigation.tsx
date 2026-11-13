import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { ChapterData } from "@/types/chapter";
import { CHAPTERS_DATA } from "@/data/chaptersData";

export default function ChapterNavigation({ currentChapter }: { currentChapter: ChapterData }) {
  const currentIndex = CHAPTERS_DATA.findIndex((c) => c.slug === currentChapter.slug);
  const prevChapter = currentIndex > 0 ? CHAPTERS_DATA[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS_DATA.length - 1 ? CHAPTERS_DATA[currentIndex + 1] : null;

  return (
    <div className="pt-12 border-t border-[#E5E5E2] mt-16 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Chapter */}
        {prevChapter ? (
          <Link
            href={`/chapters/${prevChapter.slug}`}
            className="group p-6 rounded-3xl bg-white hover:bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#F7F7F5] text-[#686868] group-hover:text-[#FF6B35] group-hover:bg-[#FFF1EB] transition-colors shrink-0 flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93] block">
                Previous • Pillar {prevChapter.number}
              </span>
              <span className="text-base font-display font-bold text-[#171717] group-hover:text-[#FF6B35] transition-colors truncate block">
                {prevChapter.title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next Chapter */}
        {nextChapter ? (
          <Link
            href={`/chapters/${nextChapter.slug}`}
            className="group p-6 rounded-3xl bg-white hover:bg-white border border-[#E5E5E2] hover:border-[#171717] shadow-subtle hover:shadow-card transition-all flex items-center justify-between space-x-4 md:text-right"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E8E93] block">
                Next • Pillar {nextChapter.number}
              </span>
              <span className="text-base font-display font-bold text-[#171717] group-hover:text-[#FF6B35] transition-colors truncate block">
                {nextChapter.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[#F7F7F5] text-[#686868] group-hover:text-[#FF6B35] group-hover:bg-[#FFF1EB] transition-colors shrink-0 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ) : (
          <Link
            href="/learning-portfolio"
            className="group p-6 rounded-3xl bg-white hover:bg-white border border-[#FF6B35]/40 hover:border-[#FF6B35] shadow-subtle hover:shadow-card transition-all flex items-center justify-between space-x-4 md:text-right"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B35] font-bold block">
                Curriculum Complete
              </span>
              <span className="text-base font-display font-bold text-[#171717] group-hover:text-[#FF6B35] transition-colors truncate block">
                Return to Learning Portfolio
              </span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[#FFF1EB] text-[#FF6B35] shrink-0 flex items-center justify-center">
              <Grid className="w-4 h-4" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
