"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Compass,
  User,
  BookOpen,
  Code2,
  BookmarkCheck,
  FolderCheck,
  ChevronDown,
  Sparkles,
  Waves,
} from "lucide-react";
import { CHAPTERS_DATA } from "@/data/chaptersData";
import { STUDENT_PROFILE } from "@/data/studentProfile";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Compass },
  { name: "About", href: "/about", icon: User },
  { name: "Learning Portfolio", href: "/learning-portfolio", icon: BookOpen },
  { name: "Projects", href: "/projects", icon: Code2 },
  { name: "Reflections", href: "/reflections", icon: BookmarkCheck },
  { name: "Evidence", href: "/evidence", icon: FolderCheck },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chaptersDropdownOpen, setChaptersDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setChaptersDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#F7F7F5]/85 backdrop-blur-md border-b border-[#E5E5E2] py-3 shadow-subtle"
          : "bg-[#F7F7F5]/70 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <Link href="/" className="group flex items-center space-x-3">
            <span className="w-9 h-9 rounded-xl bg-[#171717] text-white flex items-center justify-center font-display font-extrabold text-sm tracking-tight group-hover:bg-[#FF6B35] transition-colors shadow-subtle">
              TR
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-[#171717] tracking-tight group-hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                {STUDENT_PROFILE.fullName}
                <span className="text-[#FF6B35] font-black text-xs">●</span>
              </span>
              <span className="text-[11px] text-[#686868] font-sans">
                Professional Skills E-Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 p-1.5 rounded-full border border-[#E5E5E2] shadow-subtle">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all duration-150 relative ${
                    isActive
                      ? "text-white bg-[#171717] font-semibold shadow-sm"
                      : "text-[#686868] hover:text-[#171717] hover:bg-[#F7F7F5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Quick Chapters Dropdown */}
            <div className="relative">
              <button
                onClick={() => setChaptersDropdownOpen(!chaptersDropdownOpen)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center space-x-1 ${
                  pathname.startsWith("/chapters")
                    ? "text-[#FF6B35] bg-[#FFF1EB] font-semibold"
                    : "text-[#686868] hover:text-[#171717] hover:bg-[#F7F7F5]"
                }`}
              >
                <span>Modules</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    chaptersDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {chaptersDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 rounded-2xl bg-white border border-[#E5E5E2] shadow-hover py-2 px-2 z-50 animate-in fade-in duration-150"
                  onMouseLeave={() => setChaptersDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 mb-1 border-b border-[#E5E5E2] flex items-center justify-between text-[11px] text-[#686868] font-mono">
                    <span className="font-bold text-[#171717]">9 Curriculum Modules</span>
                    <Link
                      href="/learning-portfolio"
                      className="text-[#FF6B35] hover:underline font-semibold"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="max-h-[340px] overflow-y-auto space-y-0.5">
                    {CHAPTERS_DATA.map((ch) => (
                      <Link
                        key={ch.slug}
                        href={`/chapters/${ch.slug}`}
                        className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                          pathname === `/chapters/${ch.slug}`
                            ? "bg-[#FFF1EB] text-[#FF6B35] font-semibold"
                            : "text-[#686868] hover:text-[#171717] hover:bg-[#F7F7F5]"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-[#FF6B35] text-[10px] font-bold">
                            {ch.number}
                          </span>
                          <span className="truncate">{ch.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Ocean Crew Project Spotlight in Dropdown */}
                  <div className="pt-2 mt-1 border-t border-[#E5E5E2]">
                    <Link
                      href="/projects/ocean-crew"
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs bg-[#E6F7F5] text-[#0D9488] font-bold hover:bg-[#0D9488] hover:text-white transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <Waves className="w-3.5 h-3.5 text-[#0D9488] group-hover:text-white" />
                        <span>Ocean Crew Case Study</span>
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-white text-[#0D9488] font-bold">
                        Special Feature
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Academic Badge Pill on Desktop */}
          <div className="hidden xl:flex items-center pl-4 border-l border-[#E5E5E2]">
            <div className="flex items-center space-x-2 text-xs bg-white px-3.5 py-1.5 rounded-full border border-[#E5E5E2] shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-[#171717]">SLIIT City Uni</span>
              <span className="text-[#8E8E93]">•</span>
              <span className="text-xs font-mono text-[#686868]">HDIT Y2S2</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-[#E5E5E2] text-[#171717] hover:bg-[#F7F7F5] focus:outline-none transition-colors shadow-subtle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B35]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#F7F7F5] border-t border-[#E5E5E2] px-5 py-6 overflow-y-auto z-40">
          <div className="space-y-4">
            {/* Candidate Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E5E5E2] shadow-subtle">
              <div className="text-base font-display font-bold text-[#171717]">
                {STUDENT_PROFILE.fullName}
              </div>
              <div className="text-xs text-[#FF6B35] font-mono mt-0.5 font-semibold">
                {STUDENT_PROFILE.studentId} • {STUDENT_PROFILE.programme}
              </div>
              <div className="text-xs text-[#686868] mt-1">
                {STUDENT_PROFILE.institution} • {STUDENT_PROFILE.batch}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] px-3 pb-1 font-bold">
                Navigation
              </div>
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center space-x-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white bg-[#171717] font-semibold shadow-sm"
                        : "text-[#171717] hover:bg-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#FF6B35]" : "text-[#686868]"}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              {/* Ocean Crew Mobile Nav Item */}
              <Link
                href="/projects/ocean-crew"
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                  pathname === "/projects/ocean-crew"
                    ? "text-white bg-[#0D9488]"
                    : "text-[#0D9488] bg-[#E6F7F5] hover:bg-[#0D9488] hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Waves className="w-4 h-4" />
                  <span>Ocean Crew Project</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#0D9488]">
                  Case Study
                </span>
              </Link>
            </div>

            <div className="pt-3 border-t border-[#E5E5E2]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] px-3 pb-1 font-bold">
                9 Learning Modules
              </div>
              <div className="grid grid-cols-1 gap-1 pt-1">
                {CHAPTERS_DATA.map((ch) => (
                  <Link
                    key={ch.slug}
                    href={`/chapters/${ch.slug}`}
                    className={`px-3 py-2.5 rounded-xl text-xs flex items-center space-x-2 ${
                      pathname === `/chapters/${ch.slug}`
                        ? "text-[#FF6B35] bg-[#FFF1EB] font-semibold"
                        : "text-[#686868] hover:text-[#171717] hover:bg-white"
                    }`}
                  >
                    <span className="font-mono text-[#FF6B35] text-[10px] font-bold">
                      {ch.number}
                    </span>
                    <span className="truncate">{ch.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
