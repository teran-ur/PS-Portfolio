"use client";

import React, { useState } from "react";
import { Mail, AlertCircle, CheckCircle2, UserCheck, ShieldCheck } from "lucide-react";
import { STUDENT_PROFILE } from "@/data/studentProfile";

interface EmailComponent {
  id: string;
  name: string;
  sampleText: string;
  fieldNote: string;
  rule: string;
}

export default function EmailAnatomy() {
  const EMAIL_COMPONENTS: EmailComponent[] = [
    {
      id: "recipients",
      name: "1. Recipient Curation (To / Cc / Bcc)",
      sampleText: "To: hiring.team@techpartner.lk\nCc: academic.supervisor@sliit.lk (Informational Awareness)\nBcc: [Protected distribution list]",
      fieldNote: "To = Direct action owners. Cc = Informational stakeholders. Bcc = Confidential distribution.",
      rule: "Never use 'Reply All' when only the sender needs confirmation. Careless reply-all inundates inboxes.",
    },
    {
      id: "subject",
      name: "2. High-Impact Subject Line",
      sampleText: `Subject: [Action Required] Internship Application — Software Engineering — ${STUDENT_PROFILE.fullName} (${STUDENT_PROFILE.studentId})`,
      fieldNote: "Never write vague phrases like 'Hello' or empty subjects. State clear project tag + explicit outcome.",
      rule: "The subject line determines if the email is opened promptly or archived unread.",
    },
    {
      id: "salutation",
      name: "3. Role-Appropriate Salutation",
      sampleText: "Dear Mr. Fernando, / Dear Professor Jayawardane, / Dear Ms. Weerasinghe,",
      fieldNote: "Formal title + family name. Avoid casual greetings ('Hey guys') in professional first contacts.",
      rule: "Accurately spelling names and titles sets an immediate baseline of professional respect.",
    },
    {
      id: "hook",
      name: "4. Respectful Contextual Hook",
      sampleText: "I am writing to submit my application for the Software Engineering Internship position discussed during yesterday's campus technology forum.",
      fieldNote: "First sentence establishes immediate context without irrelevant pleasantries.",
      rule: "Respect the reader's time by stating the 'why' in sentence one.",
    },
    {
      id: "body",
      name: "5. Scannable Body Paragraphs",
      sampleText: "• Technical Focus: Full-stack web development with React, Next.js, Node.js, and MySQL.\n• Project Portfolio: Built and deployed production web properties including LA'CEDRA and TechMart.\n• Academic Level: Higher Diploma in IT (Year 2 Semester 2) at SLIIT City Uni.",
      fieldNote: "Modular blocks, clean spacing, and bullet points optimized for mobile scanning.",
      rule: "Long unbroken walls of text are skipped. Break complex deliverables into bullet points.",
    },
    {
      id: "cta",
      name: "6. Explicit Call to Action (CTA) & Deadline",
      sampleText: "Please find attached my CV and portfolio documentation. I would welcome an opportunity for a brief introductory interview at your earliest convenience.",
      fieldNote: "Defines exactly WHO must do WHAT by WHEN.",
      rule: "An email without an explicit call to action causes operational delays.",
    },
    {
      id: "signature",
      name: "7. Professional Signature Block",
      sampleText: `Best regards,\n${STUDENT_PROFILE.fullName}\nUndergraduate IT Student (${STUDENT_PROFILE.studentId}) | ${STUDENT_PROFILE.academicLevel}\n${STUDENT_PROFILE.programme}\n${STUDENT_PROFILE.institution} (${STUDENT_PROFILE.faculty})\nEmail: ${STUDENT_PROFILE.contact.email} | LinkedIn: ${STUDENT_PROFILE.contact.linkedIn}`,
      fieldNote: "Sign-off, full name, academic year, degree, institution, and professional links.",
      rule: "A complete signature block authenticates identity and provides instant alternate channels.",
    },
  ];

  const [selectedComp, setSelectedComp] = useState<EmailComponent>(EMAIL_COMPONENTS[0]);

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Digital Netiquette • Professional Correspondence
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            Anatomy of an Executive Professional Email
          </h3>
        </div>
        <div className="text-xs text-[#8E8E93] font-mono">
          Click any component to inspect Netiquette rules
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Component Selector Sidebar */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] px-1 pb-1 font-bold">
            7 Anatomical Sections
          </div>
          {EMAIL_COMPONENTS.map((comp) => {
            const isSelected = selectedComp.id === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedComp(comp)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-[#171717] text-white font-semibold shadow-sm"
                    : "bg-[#F7F7F5] text-[#686868] hover:text-[#171717] hover:border-[#171717] border border-[#E5E5E2]"
                }`}
              >
                {comp.name}
              </button>
            );
          })}
        </div>

        {/* Live Email Mockup Viewer */}
        <div className="lg:col-span-2 bg-[#F7F7F5] border border-[#E5E5E2] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-[#E5E5E2]">
              <Mail className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
                Email Component Preview
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E5E5E2] whitespace-pre-line text-[#171717] font-mono text-xs leading-relaxed shadow-subtle">
              {selectedComp.sampleText}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5E5E2] space-y-2">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
              <span className="text-xs text-[#171717] font-sans font-medium">
                {selectedComp.fieldNote}
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-xs text-[#686868] font-sans italic">
                Rule: {selectedComp.rule}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
