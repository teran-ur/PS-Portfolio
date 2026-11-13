"use client";

import React, { useState, useEffect } from "react";
import { Brain, Zap, Shield, Play, RotateCcw } from "lucide-react";

interface BrainLayer {
  id: "neocortex" | "limbic" | "reptilian";
  name: string;
  evolution: string;
  alias: string;
  icon: React.ElementType;
  primaryFunctions: string[];
  workplaceRole: string;
  stressVulnerability: string;
  colorBorder: string;
}

const BRAIN_LAYERS: BrainLayer[] = [
  {
    id: "neocortex",
    name: "Neocortex (Prefrontal Cortex)",
    evolution: "Newest Layer (~2-3M Years)",
    alias: "The Corporate CEO",
    icon: Brain,
    primaryFunctions: [
      "Abstract deduction and strategic planning",
      "Algorithmic logic and code architecture",
      "Impulse inhibition and conscious restraint",
      "Ethical deduction and moral evaluation",
    ],
    workplaceRole: "Acts as the executive director of technical problem-solving, making rational decisions under deadline pressure.",
    stressVulnerability: "Easily starved of oxygen and glucose during severe emotional panic, leading to mental paralysis.",
    colorBorder: "border-[#FF6B35]",
  },
  {
    id: "limbic",
    name: "Limbic System (Amygdala & Hippocampus)",
    evolution: "Mammalian Brain (~150M Years)",
    alias: "The Emotional Sentinel",
    icon: Zap,
    primaryFunctions: [
      "Rapid emotional threat appraisal",
      "Long-term affective memory encoding",
      "Social bonding and team empathy",
      "Triggering emergency fight-or-flight hormones",
    ],
    workplaceRole: "Scans team dynamics for psychological danger, feeling hurt by harsh feedback or energized by praise.",
    stressVulnerability: "Triggers the 'Amygdala Hijack', hijacking rational thought in milliseconds before the Neocortex can evaluate reality.",
    colorBorder: "border-amber-500",
  },
  {
    id: "reptilian",
    name: "Reptilian Complex (Brainstem & Cerebellum)",
    evolution: "Oldest Primitive Layer (~500M Years)",
    alias: "The Survival Core",
    icon: Shield,
    primaryFunctions: [
      "Autonomic cardiovascular & respiratory control",
      "Instinctive survival reflexes (fight, flight, freeze)",
      "Physical territory defense",
      "Core homeostasis maintenance",
    ],
    workplaceRole: "Operates beneath conscious awareness to keep the physical organism alive and alert during crisis.",
    stressVulnerability: "Generates visceral physical tension (stiff neck, clenched jaw, racing heartbeat) during difficult meetings.",
    colorBorder: "border-emerald-500",
  },
];

export default function TriuneBrainView() {
  const [selectedLayer, setSelectedLayer] = useState<BrainLayer>(BRAIN_LAYERS[0]);
  const [timerActive, setTimerActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, secondsLeft]);

  const handleStartTimer = () => {
    setSecondsLeft(10);
    setTimerActive(true);
  };

  const handleResetTimer = () => {
    setTimerActive(false);
    setSecondsLeft(10);
  };

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Neuroscience Framework • Paul MacLean &amp; Daniel Goleman
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            Triune Brain Dynamics &amp; Amygdala Hijack Mitigation
          </h3>
        </div>
        <div className="text-xs text-[#8E8E93] font-mono">
          Select an evolutionary layer to analyze cognitive impact
        </div>
      </div>

      {/* 3-Tier Layer Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {BRAIN_LAYERS.map((layer) => {
          const Icon = layer.icon;
          const isSelected = selectedLayer.id === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer)}
              className={`text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? "border-[#171717] bg-[#171717] text-white shadow-card"
                  : "border-[#E5E5E2] bg-[#F7F7F5] text-[#171717] hover:border-[#171717]"
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#FF6B35]" : "text-[#686868]"}`} />
                <span className={`text-xs font-mono font-semibold uppercase ${isSelected ? "text-[#FF6B35]" : "text-[#171717]"}`}>
                  {layer.alias}
                </span>
              </div>
              <h4 className="text-xs font-display font-bold truncate">
                {layer.name}
              </h4>
              <p className={`text-[10px] font-mono mt-1 ${isSelected ? "text-[#EBEBE8]" : "text-[#8E8E93]"}`}>{layer.evolution}</p>
            </button>
          );
        })}
      </div>

      {/* Layer Detail Card */}
      <div className="p-6 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] space-y-4">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#E5E5E2]">
          <div className="p-2.5 rounded-lg bg-white border border-[#E5E5E2] text-[#FF6B35] shadow-subtle">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-display font-bold text-[#171717]">
              {selectedLayer.name} — Cognitive Mechanics
            </h4>
            <p className="text-xs text-[#FF6B35] font-mono">Role: {selectedLayer.alias}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-2 font-bold">
              Primary Evolutionary Functions
            </h5>
            <ul className="space-y-1.5">
              {selectedLayer.primaryFunctions.map((func, i) => (
                <li key={i} className="text-xs text-[#404040] flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                  <span>{func}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div>
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-1 font-bold">
                Workplace Manifestation
              </h5>
              <p className="text-xs text-[#404040] leading-relaxed bg-white p-3.5 rounded-lg border border-[#E5E5E2]">
                {selectedLayer.workplaceRole}
              </p>
            </div>
            <div>
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-amber-700 mb-1 font-bold">
                Stress Vulnerability
              </h5>
              <p className="text-xs text-[#171717] leading-relaxed bg-amber-50 p-3.5 rounded-lg border border-amber-200">
                {selectedLayer.stressVulnerability}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 6-to-10 Second Respiration Interruption Tool */}
      <div className="bg-[#FFF1EB] p-6 rounded-xl border border-[#FF6B35]/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Neuroscience Intervention Protocol
            </span>
            <h4 className="text-base font-display font-bold text-[#171717]">
              The 6-to-10 Second Amygdala De-escalation Pause
            </h4>
            <p className="text-xs text-[#686868] max-w-xl leading-relaxed">
              When triggered by harsh criticism or stress, an amygdala hormone surge floods the bloodstream for 6 to 10 seconds. Deep diaphragmatic respiration allows the Neocortex (CEO) to regain cognitive control before reacting impulsively.
            </p>
          </div>

          {/* Interactive Countdown */}
          <div className="flex items-center space-x-4 self-center md:self-auto shrink-0">
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-[#FF6B35] bg-white shadow-subtle">
              <span className="text-2xl font-mono font-bold text-[#FF6B35]">
                {secondsLeft}s
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#8E8E93]">
                {timerActive ? "Breathe" : "Pause"}
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <button
                onClick={handleStartTimer}
                disabled={timerActive}
                className="px-4 py-2 rounded-lg bg-[#FF6B35] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#171717] disabled:opacity-50 transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Simulate</span>
              </button>
              <button
                onClick={handleResetTimer}
                className="px-4 py-2 rounded-lg border border-[#E5E5E2] bg-white text-[#686868] text-xs font-mono uppercase tracking-wider hover:text-[#171717] hover:border-[#171717] transition-colors flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
