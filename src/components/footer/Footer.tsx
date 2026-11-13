import React from "react";
import Link from "next/link";
import { CHAPTERS_DATA } from "@/data/chaptersData";
import { STUDENT_PROFILE } from "@/data/studentProfile";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white pt-20 pb-12 mt-32 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[#2E2E2E]">
          {/* Column 1: Identity & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-9 h-9 rounded-xl bg-[#FF6B35] text-white flex items-center justify-center font-display font-extrabold text-sm shadow-subtle">
                TR
              </span>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                {STUDENT_PROFILE.fullName}
              </span>
            </div>
            <p className="text-xs text-[#A0A0A0] leading-relaxed font-sans max-w-xs">
              An academic and developer portfolio documenting nine core chapters of professional competence, applied software projects, and entrepreneurial experience.
            </p>
            <div className="pt-2 text-xs text-[#8E8E93] font-mono">
              <span className="text-[#FF6B35] font-semibold">{STUDENT_PROFILE.studentId}</span> • <span>{STUDENT_PROFILE.programme}</span>
            </div>
          </div>

          {/* Column 2: Academic Affiliation & Module Credit */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Academic Context
            </h4>
            <div className="space-y-1 text-xs text-[#A0A0A0]">
              <p className="font-bold text-white text-sm">{STUDENT_PROFILE.institution}</p>
              <p>{STUDENT_PROFILE.faculty}</p>
              <p className="text-[11px] text-[#8E8E93] font-mono">{STUDENT_PROFILE.batch} Intake • {STUDENT_PROFILE.academicLevel}</p>
            </div>
            <div className="pt-3 border-t border-[#2A2A2A] space-y-1 text-xs text-[#A0A0A0]">
              <p className="text-[11px] text-[#8E8E93] font-mono uppercase">Lecturer In Charge:</p>
              <p className="font-semibold text-white">Mrs. Ishara Raviharee Weerasinghe</p>
              <p className="text-[11px] text-[#8E8E93]">Senior Lecturer in English</p>
            </div>
          </div>

          {/* Column 3: Learning Chapters */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Curriculum Modules
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0A0]">
              {CHAPTERS_DATA.slice(0, 5).map((ch) => (
                <li key={ch.slug}>
                  <Link
                    href={`/chapters/${ch.slug}`}
                    className="hover:text-white transition-colors truncate block"
                  >
                    Ch {ch.number} • {ch.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/learning-portfolio"
                  className="text-[#FF6B35] text-xs hover:underline inline-flex items-center space-x-1 font-semibold"
                >
                  <span>View all 9 modules</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0A0]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About My Journey
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects &amp; Technical Stack
                </Link>
              </li>
              <li>
                <Link href="/projects/ocean-crew" className="text-[#14B8A6] hover:text-white transition-colors font-medium">
                  Ocean Crew Case Study ★
                </Link>
              </li>
              <li>
                <Link href="/reflections" className="hover:text-white transition-colors">
                  Reflective Learning Synthesis
                </Link>
              </li>
              <li>
                <Link href="/evidence" className="hover:text-white transition-colors">
                  Evidence &amp; Documentation
                </Link>
              </li>
              <li>
                <Link href="/acknowledgement" className="hover:text-white transition-colors">
                  Academic Acknowledgement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8E93] gap-4">
          <p>
            © {new Date().getFullYear()} {STUDENT_PROFILE.fullName} ({STUDENT_PROFILE.studentId}) • {STUDENT_PROFILE.institution}
          </p>
          <div className="flex items-center space-x-3 text-[11px] font-mono">
            <span>Built with Next.js &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-[#A0A0A0]">Creative Portfolio Direction A</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
