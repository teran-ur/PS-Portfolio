"use client";

import React from "react";
import { Coins, Ticket, Utensils, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { OCEAN_CREW_DATA } from "@/data/oceanCrewData";
import { FadeIn } from "@/components/motion/MotionWrapper";

export default function ProjectBudget() {
  const budget = OCEAN_CREW_DATA.budget;

  return (
    <section className="py-20 border-b border-[#E5E5E2] relative bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <FadeIn className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D9488] font-bold">
              05 • Financial Transparency
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[#171717] tracking-tight">
            Project Budget &amp; <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#FF6B35]">
              Resource Allocation.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            Complete financial breakdown calculated across the 10 participating undergraduates. Every rupee was funded directly by the student group.
          </p>
        </FadeIn>

        {/* Financial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Breakdown of Expenses (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E8E93] font-bold block mb-2">
              Cost Allocation per Participating Student
            </span>

            {budget.perStudent.map((item, idx) => {
              const Icon =
                idx === 0 ? Ticket : idx === 1 ? Utensils : HeartHandshake;
              const percentage = Math.round(
                (item.totalCost / budget.totalBudget) * 100
              );

              return (
                <FadeIn
                  key={item.number}
                  delay={idx * 0.08}
                  className="p-6 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle hover:border-[#171717] transition-all space-y-4 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F7F7F5] group-hover:bg-[#FFF1EB] text-[#171717] group-hover:text-[#FF6B35] transition-colors flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E93] block">
                          Expense 0{idx + 1} • {percentage}% of Budget
                        </span>
                        <h3 className="text-lg font-display font-bold text-[#171717]">
                          {item.expense}
                        </h3>
                        <p className="text-xs text-[#686868] font-sans">
                          {item.purpose}
                        </p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <div className="text-xl font-display font-bold text-[#171717]">
                        LKR {item.costPerStudent.toLocaleString()}
                      </div>
                      <span className="text-xs font-mono text-[#8E8E93]">
                        x 10 = LKR {item.totalCost.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Visual Proportion Bar */}
                  <div className="w-full bg-[#F7F7F5] rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        idx === 0
                          ? "bg-[#0D9488]"
                          : idx === 1
                          ? "bg-[#FF6B35]"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right Column: Total Budget Summary Card (5 Cols) */}
          <FadeIn delay={0.2} className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F2C4C] text-white shadow-card space-y-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-[#14B8A6]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#14B8A6] font-bold">
                    Full Project Financial Audit
                  </span>
                  <span className="text-xs font-mono text-white/70">10 Students</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/60 block">
                    Total Project Investment
                  </span>
                  <div className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight">
                    LKR 30,000
                  </div>
                  <p className="text-xs font-mono text-[#14B8A6]">
                    Calculation: LKR 3,000 × 10 = LKR 30,000
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-sans text-white/80">
                  <div className="flex items-center justify-between py-1">
                    <span>Sanctuary Entrance Fees (10x)</span>
                    <span className="font-mono font-bold text-white">LKR 15,000</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Group Fieldwork Lunch (10x)</span>
                    <span className="font-mono font-bold text-white">LKR 10,000</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-emerald-400">
                    <span className="font-medium">Direct Sanctuary Donation</span>
                    <span className="font-mono font-bold">LKR 5,000</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs font-mono text-white/60 flex items-center justify-between relative z-10">
                <span className="flex items-center space-x-1.5 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
                  <span>100% Student Self-Funded</span>
                </span>
                <span className="text-white/40">SLIIT City Uni</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
