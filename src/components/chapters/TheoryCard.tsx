import React from "react";
import { ChapterSection } from "@/types/chapter";
import { Quote } from "lucide-react";

export default function TheoryCard({ section }: { section: ChapterSection }) {
  return (
    <section className="py-8 border-b border-[#E5E5E2] space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#171717] tracking-tight">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="text-sm font-mono text-[#FF6B35] font-semibold">
            {section.subtitle}
          </p>
        )}
      </div>

      {/* Paragraphs directly on the canvas with comfortable reading line length */}
      <div className="space-y-4 max-w-3xl">
        {section.content.map((p, idx) => (
          <p key={idx} className="text-base text-[#404040] leading-relaxed font-sans">
            {p}
          </p>
        ))}
      </div>

      {/* Bullet Points with clean hairline accents */}
      {section.bulletPoints && section.bulletPoints.length > 0 && (
        <div className="space-y-3 pl-4 sm:pl-6 border-l-2 border-[#FF6B35]/40 my-6 max-w-3xl">
          {section.bulletPoints.map((bp, idx) => (
            <div key={idx} className="text-sm text-[#404040] leading-relaxed">
              {bp.label && (
                <strong className="text-[#171717] font-semibold mr-1.5 font-sans">
                  {bp.label}:
                </strong>
              )}
              <span className="text-[#555555]">{bp.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Structured Table */}
      {section.table && (
        <div className="my-8 overflow-x-auto rounded-2xl border border-[#E5E5E2] bg-white shadow-subtle">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-[#F7F7F5] border-b border-[#E5E5E2]">
                {section.table.headers.map((h, idx) => (
                  <th key={idx} className="py-3.5 px-4 font-mono font-semibold uppercase tracking-wider text-[#171717] text-[11px]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E2] bg-white">
              {section.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#F7F7F5]/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="py-3.5 px-4 text-[#404040] align-top leading-relaxed text-xs">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {section.table.caption && (
            <div className="p-3 bg-[#F7F7F5] text-[11px] text-[#8E8E93] font-mono italic text-right border-t border-[#E5E5E2]">
              {section.table.caption}
            </div>
          )}
        </div>
      )}

      {/* Callout Quote / Epigraph */}
      {section.callout && (
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#FFF1EB] border-l-4 border-l-[#FF6B35] relative">
          <Quote className="w-8 h-8 text-[#FF6B35]/25 absolute top-5 right-5" />
          {section.callout.title && (
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold block mb-2">
              {section.callout.title}
            </span>
          )}
          <blockquote className="text-base sm:text-lg font-serif italic text-[#171717] leading-relaxed max-w-2xl">
            &ldquo;{section.callout.text}&rdquo;
          </blockquote>
          {section.callout.author && (
            <div className="text-xs font-mono text-[#686868] mt-3">
              — {section.callout.author}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
