import React from "react";
import { CheckCircle2, Bookmark } from "lucide-react";

export default function KeyTakeaways({ takeaways }: { takeaways: string[] }) {
  return (
    <div className="my-12 pt-8 border-t border-[#E5E5E2] space-y-6">
      <div className="flex items-center space-x-2">
        <Bookmark className="w-4 h-4 text-[#FF6B35]" />
        <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
          Core Academic Takeaways
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {takeaways.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-[#E5E5E2] flex items-start space-x-3 shadow-subtle hover:border-[#171717] transition-all"
          >
            <span className="font-mono text-xs font-bold text-[#FF6B35] shrink-0 mt-0.5">
              0{idx + 1}.
            </span>
            <p className="text-xs sm:text-sm text-[#171717] leading-relaxed font-sans">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
