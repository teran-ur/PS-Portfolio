import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CHAPTERS_DATA } from "@/data/chaptersData";
import ChapterHeader from "@/components/chapters/ChapterHeader";
import KeyTakeaways from "@/components/chapters/KeyTakeaways";
import TheoryCard from "@/components/chapters/TheoryCard";
import ChapterNavigation from "@/components/chapters/ChapterNavigation";
import ReflectionBox from "@/components/chapters/ReflectionBox";
import ChapterInteractiveDispatcher from "@/components/diagrams/ChapterInteractiveDispatcher";
import PersonalSynthesisSection from "@/components/chapters/PersonalSynthesisSection";
import { CHAPTER_PERSONAL_SYNTHESIS } from "@/data/personalSynthesisData";
import { BookOpen, ExternalLink, GraduationCap } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CHAPTERS_DATA.map((ch) => ({
    slug: ch.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const chapter = CHAPTERS_DATA.find((c) => c.slug === params.slug);
  if (!chapter) {
    return {
      title: "Chapter Not Found | Professional Skills",
    };
  }

  return {
    title: `Ch ${chapter.number}: ${chapter.title} | Professional Skills E-Portfolio`,
    description: chapter.overview,
  };
}

export default function ChapterPage({ params }: PageProps) {
  const chapter = CHAPTERS_DATA.find((c) => c.slug === params.slug);

  if (!chapter) {
    notFound();
  }

  const synthesis = CHAPTER_PERSONAL_SYNTHESIS[chapter.number] || chapter.personalSynthesis;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Chapter Editorial Header */}
      <ChapterHeader chapter={chapter} />

      {/* Chapter Pedagogical Overview */}
      <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold block mb-2">
            Curriculum Overview &amp; Context
          </span>
          <p className="text-base sm:text-lg text-[#171717] leading-relaxed font-sans font-medium">
            {chapter.overview}
          </p>
        </div>

        {/* Learning Objectives List */}
        <div className="pt-6 border-t border-[#E5E5E2] space-y-3">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 h-4 text-[#FF6B35]" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
              Core Competencies &amp; Learning Objectives
            </h4>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#404040]">
            {chapter.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start space-x-2.5 font-sans">
                <span className="text-[#FF6B35] font-mono font-bold mt-0.5 shrink-0">→</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Core Academic Theory Sections */}
      <div className="space-y-8">
        {chapter.sections.map((section, idx) => (
          <TheoryCard key={idx} section={section} />
        ))}
      </div>

      {/* Interactive Academic Diagram / Model */}
      {chapter.interactiveComponentId && (
        <ChapterInteractiveDispatcher componentId={chapter.interactiveComponentId} />
      )}

      {/* Experiential Synthesis: 8-Step Academic & Personal Contextual Connection */}
      {synthesis && (
        <PersonalSynthesisSection
          synthesis={synthesis}
          chapterNumber={chapter.number}
          chapterTitle={chapter.title}
        />
      )}

      {/* Key Takeaways */}
      <KeyTakeaways takeaways={chapter.keyTakeaways} />

      {/* Specific Academic Readings & Citations */}
      {chapter.academicReadings && chapter.academicReadings.length > 0 && (
        <div className="space-y-6 pt-8 border-t border-[#E5E5E2]">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#FF6B35]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
              Academic Literature &amp; Primary Citations (APA 7th)
            </h3>
          </div>
          <div className="space-y-4">
            {chapter.academicReadings.map((ref, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E5E5E2] space-y-2 shadow-subtle">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-sans font-medium text-[#171717] leading-relaxed">
                    {ref.citation}
                  </p>
                  {ref.link && (
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6B35] hover:text-[#171717] p-1 shrink-0"
                      title="Open citation source"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#686868] leading-relaxed font-sans">
                  {ref.annotation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Reflection & Viva Defense Card */}
      <ReflectionBox chapter={chapter} />

      {/* Previous / Next Chapter Pagination */}
      <ChapterNavigation currentChapter={chapter} />
    </article>
  );
}
