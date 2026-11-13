import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Compass, ShieldAlert, Check } from "lucide-react";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/MotionWrapper";

export const metadata = {
  title: `Reflective Learning Synthesis | ${STUDENT_PROFILE.fullName} (${STUDENT_PROFILE.studentId})`,
  description: `Gibbs' Reflective Cycle analysis and personal growth roadmap for ${STUDENT_PROFILE.fullName} (${STUDENT_PROFILE.institution}).`,
};

const GIBBS_STAGES = [
  {
    step: "01",
    stage: "Description",
    question: "What occurred during the Professional Skills semester?",
    reflection: "Engaged in 9 intensive modules covering Johari self-awareness, mock interviews, formal meeting facilitation, customer telephone de-escalation, emotional neurobiology, and executive dining protocols under Senior Lecturer Mrs. Ishara Raviharee Weerasinghe at SLIIT City Uni.",
    insight: "Experiential immersion proved that technical skills alone cannot navigate human systems.",
  },
  {
    step: "02",
    stage: "Feelings",
    question: "What affective reactions and anxieties emerged?",
    reflection: "Initially, I experienced imposter syndrome and apprehension regarding non-verbal presentation, camera recordings, and oral viva defenses. As exercises progressed from theory to recorded practice, initial tension transformed into calibrated poise.",
    insight: "Vulnerability in peer feedback sessions unlocked genuine growth.",
  },
  {
    step: "03",
    stage: "Evaluation",
    question: "What was challenging and what yielded breakthroughs?",
    reflection: "The peer feedback exercises were illuminating: discovering my blind spots in group mediation was initially uncomfortable but ultimately liberating. Practicing the STAR technique proved that structured discipline drastically reduces cognitive load.",
    insight: "Constructive critique is the fastest accelerator of self-awareness.",
  },
  {
    step: "04",
    stage: "Analysis",
    question: "How do theoretical neuroscience models explain these dynamics?",
    reflection: "Understanding the Amygdala Hijack and Triune Brain dynamics revealed that defensive reactions under critical stress are physiological responses, not permanent character defects. The 6-10 second respiration pause allowed my rational Neocortex to regain control during heated debates.",
    insight: "Physiological self-regulation is the prerequisite to executive emotional intelligence.",
  },
  {
    step: "05",
    stage: "Conclusion",
    question: "What strategic insights have solidified?",
    reflection: "I recognized that technical code quality without interpersonal mastery produces fragile, siloed outcomes. Earlier attention to the 7 C's of communication would have prevented friction and misalignments in past software engineering team projects.",
    insight: "Soft skills retain the client and secure the promotion.",
  },
  {
    step: "06",
    stage: "Action Plan",
    question: "What concrete protocols will govern future professional practice?",
    reflection: "I will implement a 10-point meeting preparation checklist for every client discovery call, apply the STAR behavioral framework during all stakeholder demos, and maintain emotional equilibrium using calibrated respiration during high-pressure system deployments.",
    insight: "Habitual protocols convert theoretical knowledge into enduring professional reflex.",
  },
];

export default function ReflectionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Editorial Header */}
      <FadeIn className="space-y-6 pb-12 border-b border-[#E5E5E2]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
            Pedagogical Synthesis
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            Gibbs&apos; Reflective Cycle
          </span>
          <span className="text-[#E5E5E2] font-mono text-xs">/</span>
          <span className="font-mono text-xs text-[#686868]">
            {STUDENT_PROFILE.fullName}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-[#171717] tracking-tight leading-[1.05]">
          Reflective Learning &amp; <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#FF6B35]">
            Personal Growth.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#686868] max-w-3xl font-sans leading-relaxed">
          Applying Graham Gibbs&apos; Reflective Cycle (1988) to critically examine affective reactions, cognitive shifts, emotional regulation breakthroughs, and leadership development throughout the Professional Skills academic curriculum at SLIIT City Uni.
        </p>

        {/* Candidate & Module Meta Strip */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
          <div>
            Candidate: <span className="text-[#171717] font-medium">{STUDENT_PROFILE.fullName}</span> ({STUDENT_PROFILE.studentId})
          </div>
          <span>•</span>
          <div>
            <span className="text-[#FF6B35] font-semibold">{STUDENT_PROFILE.programme}</span>
          </div>
          <span>•</span>
          <div>
            <span>{STUDENT_PROFILE.institution} ({STUDENT_PROFILE.batch} Batch)</span>
          </div>
        </div>
      </FadeIn>

      {/* Gibbs' Reflective Cycle Fluid Chronological Pathway */}
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-[#FF6B35]" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#171717]">
              The 6 Stages of Reflective Inquiry
            </h2>
          </div>
          <p className="text-sm text-[#686868] font-sans">
            Structured analysis through Gibbs&apos; framework tracing the arc from raw semester experience to durable professional habit.
          </p>
        </div>

        {/* Fluid Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E5E5E2]">
          {GIBBS_STAGES.map((g, idx) => (
            <FadeIn key={g.step} delay={idx * 0.08} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-[#171717] group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35] transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#171717] group-hover:bg-white transition-colors" />
              </div>

              {/* Stage Content */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                    Stage {g.step}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#FFF1EB] border border-[#FF6B35]/20 text-[#FF6B35] font-bold">
                    {g.stage}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-[#171717]">
                  {g.question}
                </h3>

                <p className="text-sm sm:text-base text-[#404040] leading-relaxed font-sans max-w-3xl">
                  {g.reflection}
                </p>

                {/* Key Insight Pill */}
                <div className="pt-1">
                  <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#686868] bg-[#F7F7F5] px-3.5 py-1.5 rounded-xl border border-[#E5E5E2]">
                    <span className="text-[#FF6B35] font-bold">Core Insight:</span>
                    <span>{g.insight}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Longitudinal Transformation: Before vs. After (Open Split Editorial) */}
      <FadeIn className="pt-12 border-t border-[#E5E5E2] space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-bold">
            Longitudinal Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#171717]">
            Personal Evolution: Before vs. After the Module
          </h2>
          <p className="text-sm sm:text-base text-[#686868] max-w-2xl font-sans">
            Direct comparison demonstrating mindset maturation across technical communication, emotional control, and executive protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Prior Mindset (Week 01) */}
          <div className="p-8 rounded-3xl bg-white border border-[#E5E5E2] space-y-6 shadow-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E2]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E8E93] font-bold">
                  Baseline (Week 01)
                </span>
                <span className="text-xs font-mono text-[#8E8E93]">Starting Position</span>
              </div>

              <h3 className="text-xl font-display font-bold text-[#171717]">
                The Solitary Coder Mindset
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#686868] font-sans">
                <li className="flex items-start space-x-3">
                  <span className="text-[#8E8E93] font-mono font-bold mt-0.5 shrink-0">✕</span>
                  <span>Equated professional capability almost solely with technical coding expertise and terminal fluency.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#8E8E93] font-mono font-bold mt-0.5 shrink-0">✕</span>
                  <span>Tended to become defensive during code reviews without recognizing physiological amygdala hijack reactions.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#8E8E93] font-mono font-bold mt-0.5 shrink-0">✕</span>
                  <span>Uncertain about formal dining geography, non-verbal interview weighting, and structured parliamentary meeting rules.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E5E5E2] text-xs font-mono text-[#8E8E93]">
              Focus: Code syntax &amp; personal output
            </div>
          </div>

          {/* Evolved Mastery (Week 14) */}
          <div className="p-8 rounded-3xl bg-[#171717] text-white border border-black space-y-6 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
                  Matured (Week 14)
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">Active Standard</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                The Integrated IT Professional &amp; Leader
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#EBEBE8] font-sans">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF6B35] font-mono font-bold mt-0.5 shrink-0">✓</span>
                  <span>Understands that interpersonal intelligence, customer empathy, and transferable meta-skills dictate career longevity.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF6B35] font-mono font-bold mt-0.5 shrink-0">✓</span>
                  <span>Applies the 6-to-10 second respiration pause to keep prefrontal executive cognition engaged during critical feedback.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FF6B35] font-mono font-bold mt-0.5 shrink-0">✓</span>
                  <span>Navigates formal executive dinners, viva defenses, and client negotiations with complete vocal and spatial poise.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#FF6B35] relative z-10">
              Focus: Emotional intelligence, leadership &amp; systems impact
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
