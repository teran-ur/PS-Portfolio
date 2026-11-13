import React from "react";
import { Lightbulb, HelpCircle, ShieldCheck } from "lucide-react";
import { ChapterData } from "@/types/chapter";

export default function ReflectionBox({ chapter }: { chapter: ChapterData }) {
  return (
    <div className="space-y-10 my-12 pt-8 border-t border-[#E5E5E2]">
      {/* Reflective Learning Prompt & Target Action */}
      {chapter.reflectionPrompts && chapter.reflectionPrompts.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-[#FF6B35]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
              Reflective Learning Prompt &amp; Target Action
            </h3>
          </div>

          <div className="space-y-4">
            {chapter.reflectionPrompts.map((rp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5E5E2] space-y-3 shadow-subtle"
              >
                <p className="text-sm sm:text-base font-serif italic text-[#171717] leading-relaxed">
                  &ldquo;{rp.prompt}&rdquo;
                </p>
                <div className="p-3.5 bg-[#F7F7F5] rounded-xl border border-[#E5E5E2] text-xs text-[#686868] flex items-start space-x-2.5">
                  <span className="font-mono text-[#FF6B35] uppercase text-[10px] tracking-wider font-bold shrink-0 mt-0.5">
                    Target Action:
                  </span>
                  <span className="font-sans leading-relaxed">{rp.actionItem}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Viva Voce Defense Card */}
      {chapter.vivaPreparation && (
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-[#171717]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
                Assessment Viva Voce Protocol (Random Question Box)
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8E8E93]">
              {chapter.vivaPreparation.randomQuestions.length} Questions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Randomized Assessment Questions */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E2] space-y-4 shadow-subtle">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] block font-bold">
                Randomized Assessment Questions:
              </span>
              <ul className="space-y-3">
                {chapter.vivaPreparation.randomQuestions.map((q, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#171717] flex items-start space-x-2.5">
                    <span className="font-mono text-[#FF6B35] font-bold text-xs shrink-0 mt-0.5">
                      Q0{idx + 1}.
                    </span>
                    <span className="leading-relaxed font-sans">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Viva Voce Protocol & Conduct */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E5E2] space-y-4 shadow-subtle">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] block font-bold">
                Defense Protocol &amp; Conduct:
              </span>
              <ul className="space-y-3">
                {chapter.vivaPreparation.defenseProtocol.map((dp, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#686868] flex items-start space-x-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-sans">{dp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
