"use client";

import React, { useState } from "react";
import { PhoneCall, Pause, ShieldAlert, Check, Volume2, Smile } from "lucide-react";

export default function PhoneProtocolSteps() {
  const [activeTab, setActiveTab] = useState<"steps" | "hold" | "deescalate">("steps");

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Vocal Poise &amp; Customer Support Protocols
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            Telephone Excellence &amp; Dispute De-escalation
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("steps")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeTab === "steps"
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
            }`}
          >
            5 Steps
          </button>
          <button
            onClick={() => setActiveTab("hold")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeTab === "hold"
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
            }`}
          >
            5 Hold Rules
          </button>
          <button
            onClick={() => setActiveTab("deescalate")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              activeTab === "deescalate"
                ? "bg-[#171717] text-white font-medium shadow-sm"
                : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
            }`}
          >
            HEAT / LAST
          </button>
        </div>
      </div>

      {/* Tab 1: 5 Steps to Telephone Excellence */}
      {activeTab === "steps" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-xl bg-[#FFF1EB] border border-[#FF6B35]/30 flex items-center space-x-3">
            <Smile className="w-5 h-5 text-[#FF6B35] shrink-0" />
            <p className="text-xs text-[#404040]">
              <strong className="text-[#FF6B35]">The Vocal Smile:</strong> Smiling physically elevates your soft palate, altering vocal resonance and projecting warmth that callers perceive within two seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { step: "01", title: "Answer & Smile", desc: "Pick up before the 3rd ring with an audible vocal smile." },
              { step: "02", title: "Introduction", desc: "State Department + Full Name + 'How may I assist you today?'" },
              { step: "03", title: "Full Attention", desc: "Zero multitasking, eating, or loud typing. Mouthpiece 1 inch away." },
              { step: "04", title: "Notes & Recap", desc: "Spell names, record numbers, and recap core deliverables back to caller." },
              { step: "05", title: "Gracious Close", desc: "Sincere thank you, state follow-up timeline, and let caller hang up first." },
            ].map((s) => (
              <div key={s.step} className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl font-bold text-[#FF6B35]">{s.step}</span>
                  <h4 className="text-xs font-semibold text-[#171717] mt-1">{s.title}</h4>
                  <p className="text-[11px] text-[#686868] mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: 5 Hold Rules */}
      {activeTab === "hold" && (
        <div className="space-y-3 animate-in fade-in duration-200">
          {[
            { num: "1", rule: "Always Ask Permission First", phrase: "'May I place you on a brief hold while I pull up your system logs?'" },
            { num: "2", rule: "Wait for Explicit Consent", phrase: "Wait for the caller to say 'Yes' before pressing mute or transfer." },
            { num: "3", rule: "State an Expected Duration", phrase: "Specify a realistic timeframe (never leave them unattended beyond 60-90s)." },
            { num: "4", rule: "Re-engage if Delayed", phrase: "If lookup exceeds the estimate, return to apologize and offer an ongoing status." },
            { num: "5", rule: "Thank Sincerely Upon Return", phrase: "'Thank you so much for your patience, Mr. Davis.'" },
          ].map((h) => (
            <div key={h.num} className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] flex items-start space-x-4">
              <span className="w-8 h-8 rounded-full bg-white border border-[#E5E5E2] flex items-center justify-center font-mono font-bold text-xs text-[#FF6B35] shrink-0 shadow-subtle">
                {h.num}
              </span>
              <div>
                <h4 className="text-xs font-semibold text-[#171717]">{h.rule}</h4>
                <p className="text-xs text-[#FF6B35] font-mono mt-0.5">{h.phrase}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: HEAT / LAST De-escalation */}
      {activeTab === "deescalate" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35] pb-2 border-b border-[#E5E5E2]">
                The HEAT Framework
              </h4>
              <ul className="space-y-3 text-xs">
                <li><strong className="text-[#171717]">H - Hear:</strong> Listen attentively without interruption until the caller vents completely.</li>
                <li><strong className="text-[#171717]">E - Empathize:</strong> Acknowledge their distress with authentic concern and validation.</li>
                <li><strong className="text-[#171717]">A - Analyze:</strong> Systematically dissect the underlying root blocker without taking anger personally.</li>
                <li><strong className="text-[#171717]">T - Take Action:</strong> Commit to verified, measurable follow-up milestones and execution.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] pb-2 border-b border-[#E5E5E2]">
                The LAST Framework
              </h4>
              <ul className="space-y-3 text-xs">
                <li><strong className="text-[#171717]">L - Listen:</strong> Give undivided presence and take accurate notes on key facts.</li>
                <li><strong className="text-[#171717]">A - Apologize:</strong> Offer a sincere, non-defensive apology for the impact of the disruption.</li>
                <li><strong className="text-[#171717]">S - Solve:</strong> Propose a concrete technical resolution or temporary workaround.</li>
                <li><strong className="text-[#171717]">T - Thank:</strong> Thank the caller for bringing the vulnerability to your attention.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
