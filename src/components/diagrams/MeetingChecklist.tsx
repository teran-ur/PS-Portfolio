"use client";

import React, { useState } from "react";
import { CheckSquare, Square, Thermometer, Clock, Users, FileText, CheckCircle2 } from "lucide-react";

interface ChecklistItem {
  id: number;
  label: string;
  category: "Pre-Meeting" | "In-Meeting" | "Post-Meeting";
  description: string;
  rule: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 1, label: "Explicit Purpose & Desired Outcome", category: "Pre-Meeting", description: "Establish non-negotiable deliverables. If the outcome can be achieved via an email, cancel the meeting immediately.", rule: "Clarity of purpose eliminates 80% of unnecessary corporate meetings." },
  { id: 2, label: "Strictly Timed Agenda (48h Advance)", category: "Pre-Meeting", description: "Circulate a structured agenda with minute-by-minute timeboxing at least 48 hours prior to meeting kickoff.", rule: "Never open a meeting without an advance agenda." },
  { id: 3, label: "Essential Participant Curation", category: "Pre-Meeting", description: "Invite only decision-makers and key technical contributors. Eliminate spectator bloat.", rule: "Amazon 2-pizza rule: smaller meetings yield exponentially higher decision velocity." },
  { id: 4, label: "Room Environment & Temperature Optimization", category: "Pre-Meeting", description: "Maintain a cool ambient room temperature (cooler environments prevent carbon dioxide lethargy and sustain mental sharpness).", rule: "Overheated rooms cause 40% reduction in attendee cognitive attention." },
  { id: 5, label: "Technology & AV Pre-Testing", category: "Pre-Meeting", description: "Test video links, audio mics, and screen sharing 10 minutes prior to prevent wasted start time.", rule: "Fumbling with cables communicates amateur preparation." },
  { id: 6, label: "Chairperson as Diplomatic Referee", category: "In-Meeting", description: "The chairperson moderates dominant speakers and deliberately draws out insights from quieter participants.", rule: "A great chairperson facilitates without dominating." },
  { id: 7, label: "Punctual Timekeeping Discipline", category: "In-Meeting", description: "Start strictly on the dot (never wait for latecomers) and end at or before the scheduled conclusion.", rule: "Starting late rewards tardiness and penalizes punctual professionals." },
  { id: 8, label: "Action-Oriented Decision Recording", category: "In-Meeting", description: "Capture explicit decisions, assigned task owners, and deadline commitments rather than transcript ramblings.", rule: "Focus on WHO does WHAT by WHEN." },
  { id: 9, label: "Immediate Minutes Distribution (<24h)", category: "Post-Meeting", description: "Circulate concise action minutes and the accountability matrix within 24 hours while memory is fresh.", rule: "Unrecorded decisions are rarely executed." },
  { id: 10, label: "Follow-Up Accountability Verification", category: "Post-Meeting", description: "Verify that assigned task owners execute agreed deliverables prior to the subsequent review.", rule: "Accountability closes the operational feedback loop." },
];

export default function MeetingChecklist() {
  const [checkedIds, setCheckedIds] = useState<number[]>([1, 2, 4]);

  const toggleItem = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progressPercentage = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Executive Governance Tool • 10-Point Audit
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            Meeting Preparation &amp; Facilitation Audit
          </h3>
        </div>

        {/* Audit Completion Progress */}
        <div className="flex items-center space-x-3 bg-[#F7F7F5] px-4 py-2.5 rounded-xl border border-[#E5E5E2]">
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E93] block">
              Audit Progress
            </span>
            <span className="text-xs font-mono font-bold text-[#171717]">
              {checkedIds.length} of 10 Complete ({progressPercentage}%)
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-[#FF6B35] flex items-center justify-center font-mono font-bold text-xs text-[#FF6B35]">
            {progressPercentage}%
          </div>
        </div>
      </div>

      {/* Temperature Alert Box */}
      <div className="p-4 rounded-xl bg-[#FFF1EB] border border-[#FF6B35]/30 flex items-start space-x-3">
        <Thermometer className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35]">
            Critical Environmental Protocol (Point 4): Cool Room Temperature
          </h4>
          <p className="text-xs text-[#404040] mt-1 leading-relaxed">
            Academic research in conference management confirms that keeping meeting rooms noticeably cool prevents post-lunch lethargy, elevates oxygen delivery, and keeps participants mentally alert during high-stakes deliberations.
          </p>
        </div>
      </div>

      {/* Interactive 10-Item List */}
      <div className="space-y-2.5">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-4 ${
                isChecked
                  ? "bg-[#F7F7F5] border-[#171717] text-[#171717]"
                  : "bg-white border-[#E5E5E2] text-[#686868] hover:border-[#171717]"
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-[#FF6B35] shrink-0 focus:outline-none"
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#FF6B35]" />
                ) : (
                  <Square className="w-5 h-5 text-[#8E8E93]" />
                )}
              </button>

              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#FF6B35]">
                    #{item.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#686868] px-2 py-0.5 bg-[#EBEBE8] rounded">
                    {item.category}
                  </span>
                  <h4 className={`text-xs font-semibold ${isChecked ? "text-[#171717]" : "text-[#404040]"}`}>
                    {item.label}
                  </h4>
                </div>
                <p className="text-xs text-[#686868] mt-1">
                  {item.description}
                </p>
                <p className="text-[11px] text-[#FF6B35] font-mono italic mt-1">
                  Rule: {item.rule}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
