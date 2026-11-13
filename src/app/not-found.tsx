import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl border border-[#FF6B35]/30 bg-[#FFF1EB] flex items-center justify-center text-[#FF6B35] shadow-subtle">
        <Compass className="w-8 h-8" />
      </div>
      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-[#FF6B35] font-bold">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-[#171717] tracking-tight mt-1">
          Page Not Located
        </h1>
        <p className="text-sm text-[#686868] mt-2 max-w-md mx-auto">
          The requested page or chapter does not exist in this portfolio. Please return to the learning portfolio.
        </p>
      </div>
      <Link
        href="/learning-portfolio"
        className="px-6 py-3 rounded-xl bg-[#171717] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#FF6B35] transition-colors flex items-center space-x-2 shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Learning Portfolio</span>
      </Link>
    </div>
  );
}
