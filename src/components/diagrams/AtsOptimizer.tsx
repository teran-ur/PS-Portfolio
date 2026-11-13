"use client";

import React, { useState } from "react";
import { CheckCircle, AlertTriangle, FileText, Check, ShieldCheck } from "lucide-react";

export default function AtsOptimizer() {
  const [selectedFormat, setSelectedFormat] = useState<"hybrid" | "chronological" | "functional">("hybrid");

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Recruitment Engineering • ATS Parser Standards
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            ATS Optimization &amp; CV Format Comparison
          </h3>
        </div>

        {/* Format Switcher */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedFormat("hybrid")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              selectedFormat === "hybrid"
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
            }`}
          >
            Hybrid (Recommended)
          </button>
          <button
            onClick={() => setSelectedFormat("chronological")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              selectedFormat === "chronological"
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
            }`}
          >
            Chronological
          </button>
          <button
            onClick={() => setSelectedFormat("functional")}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
              selectedFormat === "functional"
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
            }`}
          >
            Functional
          </button>
        </div>
      </div>

      {/* Format Detailed Comparison */}
      <div className="p-5 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-2">
        {selectedFormat === "hybrid" && (
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B35] font-bold block mb-1">
              The Recommended Architecture for IT Undergraduates
            </span>
            <h4 className="text-base font-display font-bold text-[#171717]">
              Combination / Hybrid CV Architecture
            </h4>
            <p className="text-xs text-[#686868] mt-1 leading-relaxed">
              Blends a prominent categorized technical competencies matrix at the top with a reverse-chronological project and employment ledger below. Allows ATS scanners to ingest exact keywords while human evaluators verify real code repositories and achievements.
            </p>
          </div>
        )}
        {selectedFormat === "chronological" && (
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#686868] font-bold block mb-1">
              Traditional Industry Default
            </span>
            <h4 className="text-base font-display font-bold text-[#171717]">
              Reverse-Chronological CV Architecture
            </h4>
            <p className="text-xs text-[#686868] mt-1 leading-relaxed">
              Focuses strictly on employment timeline, job titles, and tenures. Best for experienced candidates with steady, uninterrupted career paths in a single domain.
            </p>
          </div>
        )}
        {selectedFormat === "functional" && (
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-bold block mb-1">
              Skill-Cluster Focused
            </span>
            <h4 className="text-base font-display font-bold text-[#171717]">
              Functional (Skills-Based) CV Architecture
            </h4>
            <p className="text-xs text-[#686868] mt-1 leading-relaxed">
              De-emphasizes dates in favor of major competency clusters. Useful for career switchers or candidates with employment gaps, though some automated ATS parsers struggle to link skills with timelines.
            </p>
          </div>
        )}
      </div>

      {/* ATS Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2.5">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-emerald-700">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>ATS Compliance: What to Include</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#171717]">
            <li>• Standard section headings: &apos;Work Experience&apos;, &apos;Education&apos;, &apos;Skills&apos;.</li>
            <li>• Universal web-safe typography: Inter, Arial, Calibri, Space Grotesk.</li>
            <li>• Direct keyword alignment matching the target employer&apos;s job description.</li>
            <li>• Metrics-driven bullet points using verified dynamic action verbs.</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2.5">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>ATS Rejection Triggers: What to Avoid</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#171717]">
            <li>• Multi-column nested graphical tables that confuse vertical line parsers.</li>
            <li>• Important contact or skill text embedded inside raster images or SVG icons.</li>
            <li>• Outdated 90s &apos;Objective&apos; statements instead of tailored 3-line pitches.</li>
            <li>• Unconventional creative titles like &apos;Full-Stack Ninja&apos; or &apos;Code Guru&apos;.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
