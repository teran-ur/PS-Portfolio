"use client";

import React, { useState } from "react";
import { Utensils, CheckCircle, Info, Sparkles } from "lucide-react";

interface TableItem {
  id: string;
  name: string;
  zone: "Left (Forks)" | "Right (Knives & Spoons)" | "Center" | "Upper (Dessert)" | "Upper Left (Bread)" | "Upper Right (Glasses)";
  rule: string;
}

const TABLE_ITEMS: TableItem[] = [
  { id: "bread", name: "Bread & Butter Plate with Butter Knife", zone: "Upper Left (Bread)", rule: "Mnemonic: Left hand index + thumb forms 'b' (Bread is on your left). Butter knife blade turned inward." },
  { id: "napkin", name: "Formal Napkin", zone: "Center", rule: "Placed on lap immediately upon seating; never tucked into collar; placed on chair if temporarily stepping away." },
  { id: "salad-fork", name: "Salad Fork (Outermost Left)", zone: "Left (Forks)", rule: "Used first for the salad course according to the strict Outside-In rule." },
  { id: "dinner-fork", name: "Dinner Fork (Inner Left)", zone: "Left (Forks)", rule: "Reserved for the main entrée course. Held in left hand with tines pointed down in Continental style." },
  { id: "service-plate", name: "Charger / Dinner Plate", zone: "Center", rule: "Base presentation plate; course plates are served on top of this central anchor." },
  { id: "dinner-knife", name: "Dinner Knife (Inner Right)", zone: "Right (Knives & Spoons)", rule: "Blade edge must face inward toward the plate at all times. Held in right hand." },
  { id: "soup-spoon", name: "Soup Spoon (Outermost Right)", zone: "Right (Knives & Spoons)", rule: "Used for soup course. Spoon soup away from you; sip silently from the side of the spoon." },
  { id: "dessert-spoon", name: "Dessert Spoon & Fork", zone: "Upper (Dessert)", rule: "Positioned horizontally above the plate; fork tines point right, spoon points left." },
  { id: "water-goblet", name: "Water Goblet & Wine Glasses", zone: "Upper Right (Glasses)", rule: "Mnemonic: Right hand index + thumb forms 'd' (Drink is on your right). Water goblet is closest to center." },
];

export default function TableSettingMap() {
  const [selectedItem, setSelectedItem] = useState<TableItem>(TABLE_ITEMS[0]);
  const [activeStyle, setActiveStyle] = useState<"continental" | "american">("continental");
  const [utensilSign, setUtensilSign] = useState<"resting" | "finished">("resting");

  return (
    <div className="bg-white border border-[#E5E5E2] rounded-2xl p-6 lg:p-8 my-8 shadow-subtle space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#E5E5E2] gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
            Dining Etiquette &amp; Professional Protocol
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-[#171717] mt-1">
            Formal Table Setting Architecture &amp; Cutlery Codes
          </h3>
        </div>
        <div className="text-xs text-[#8E8E93] font-mono">
          Click table elements to inspect placement rules
        </div>
      </div>

      {/* The "b" and "d" Rule Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-[#FF6B35]/30 bg-[#FFF1EB] flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#FF6B35] bg-white flex items-center justify-center font-mono font-bold text-[#FF6B35] text-xl shrink-0 shadow-subtle">
            b
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35]">
              Left Hand: Bread Plate
            </h4>
            <p className="text-xs text-[#404040] mt-0.5">
              Form a circle with your left thumb &amp; index finger: it forms a lowercase letter <strong className="text-[#FF6B35]">b</strong> for <em>Bread</em>.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#E5E5E2] bg-[#F7F7F5] flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#171717] bg-white flex items-center justify-center font-mono font-bold text-[#171717] text-xl shrink-0 shadow-subtle">
            d
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
              Right Hand: Drink Glasses
            </h4>
            <p className="text-xs text-[#404040] mt-0.5">
              Form a circle with your right thumb &amp; index finger: it forms a lowercase letter <strong className="text-[#171717]">d</strong> for <em>Drink</em>.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Table Geography Map */}
      <div className="bg-[#FAF8F5] border border-[#E5E5E2] rounded-xl p-6 relative overflow-hidden">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#8E8E93] mb-4 text-center font-bold">
          Place Setting Spatial Layout (Outside-In Rule)
        </div>

        {/* Visual Map Layout */}
        <div className="max-w-xl mx-auto border border-dashed border-[#E5E5E2] bg-white rounded-xl p-6 relative shadow-subtle">
          {/* Top Row: Bread (Left) & Dessert (Center) & Glasses (Right) */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E2]">
            <button
              onClick={() => setSelectedItem(TABLE_ITEMS[0])}
              className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                selectedItem.id === "bread" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868] hover:border-[#171717]"
              }`}
            >
              Bread &amp; Butter (Left)
            </button>

            <button
              onClick={() => setSelectedItem(TABLE_ITEMS[7])}
              className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                selectedItem.id === "dessert-spoon" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868] hover:border-[#171717]"
              }`}
            >
              Dessert Silver (Top)
            </button>

            <button
              onClick={() => setSelectedItem(TABLE_ITEMS[8])}
              className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                selectedItem.id === "water-goblet" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868] hover:border-[#171717]"
              }`}
            >
              Glasses (Right)
            </button>
          </div>

          {/* Middle Row: Forks (Left) | Charger (Center) | Knives/Spoons (Right) */}
          <div className="grid grid-cols-3 gap-4 items-center py-8">
            {/* Forks */}
            <div className="flex flex-col space-y-2 items-center">
              <button
                onClick={() => setSelectedItem(TABLE_ITEMS[2])}
                className={`w-full py-2 px-1 text-center rounded-lg border text-[11px] font-mono ${
                  selectedItem.id === "salad-fork" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868]"
                }`}
              >
                1. Salad Fork (Outer)
              </button>
              <button
                onClick={() => setSelectedItem(TABLE_ITEMS[3])}
                className={`w-full py-2 px-1 text-center rounded-lg border text-[11px] font-mono ${
                  selectedItem.id === "dinner-fork" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868]"
                }`}
              >
                2. Dinner Fork (Inner)
              </button>
            </div>

            {/* Center Plate / Napkin */}
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => setSelectedItem(TABLE_ITEMS[4])}
                className={`w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedItem.id === "service-plate"
                    ? "border-[#FF6B35] bg-[#FFF1EB] shadow-card text-[#FF6B35] font-bold"
                    : "border-[#E5E5E2] bg-[#F7F7F5] text-[#171717] hover:border-[#171717]"
                }`}
              >
                <span className="text-[11px] font-mono text-center">
                  Dinner Plate
                </span>
              </button>
              <button
                onClick={() => setSelectedItem(TABLE_ITEMS[1])}
                className="mt-2 text-xs font-mono text-[#FF6B35] underline decoration-dotted"
              >
                Napkin (Center)
              </button>
            </div>

            {/* Knives & Spoons */}
            <div className="flex flex-col space-y-2 items-center">
              <button
                onClick={() => setSelectedItem(TABLE_ITEMS[5])}
                className={`w-full py-2 px-1 text-center rounded-lg border text-[11px] font-mono ${
                  selectedItem.id === "dinner-knife" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868]"
                }`}
              >
                2. Dinner Knife (Inner)
              </button>
              <button
                onClick={() => setSelectedItem(TABLE_ITEMS[6])}
                className={`w-full py-2 px-1 text-center rounded-lg border text-[11px] font-mono ${
                  selectedItem.id === "soup-spoon" ? "border-[#FF6B35] bg-[#FFF1EB] text-[#FF6B35] font-bold" : "border-[#E5E5E2] text-[#686868]"
                }`}
              >
                1. Soup Spoon (Outer)
              </button>
            </div>
          </div>
        </div>

        {/* Selected Item Description Callout */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-[#E5E5E2] shadow-subtle">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#FF6B35]">
            <Info className="w-4 h-4" />
            <span>{selectedItem.name} ({selectedItem.zone})</span>
          </div>
          <p className="text-xs text-[#404040] mt-1.5 leading-relaxed font-sans">
            {selectedItem.rule}
          </p>
        </div>
      </div>

      {/* Two Tab Selectors: Dining Styles vs. Utensil Signaling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E2]">
        {/* Style Comparison */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
            International Dining Style Comparison
          </h4>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveStyle("continental")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                activeStyle === "continental"
                  ? "bg-[#171717] text-white font-medium"
                  : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
              }`}
            >
              Continental Style (Recommended)
            </button>
            <button
              onClick={() => setActiveStyle("american")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                activeStyle === "american"
                  ? "bg-[#171717] text-white font-medium"
                  : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
              }`}
            >
              American Zig-Zag
            </button>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] text-xs text-[#404040] leading-relaxed">
            {activeStyle === "continental" ? (
              <div>
                <p className="font-semibold text-[#171717] mb-1">Continental (European) Method:</p>
                <p>Fork held continuously in left hand (tines pointed downward), knife in right hand. Food is conveyed to mouth without switching hands. Considered the international gold standard for efficiency and seamless conversation during executive dinners.</p>
              </div>
            ) : (
              <div>
                <p className="font-semibold text-[#171717] mb-1">American Zig-Zag Method:</p>
                <p>Knife held in right hand to cut food while left fork stabilizes it. Knife is then rested on rim of plate, and fork is transferred to right hand (tines upward) to eat. More fragmented, involves frequent utensil hand-swaps.</p>
              </div>
            )}
          </div>
        </div>

        {/* Utensil Signaling Codes */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#171717] font-bold">
            Silent Waitstaff Utensil Signaling
          </h4>
          <div className="flex space-x-2">
            <button
              onClick={() => setUtensilSign("resting")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                utensilSign === "resting"
                  ? "bg-[#171717] text-white font-medium"
                  : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
              }`}
            >
              Resting (Still Eating)
            </button>
            <button
              onClick={() => setUtensilSign("finished")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                utensilSign === "finished"
                  ? "bg-[#171717] text-white font-medium"
                  : "border border-[#E5E5E2] bg-[#F7F7F5] text-[#686868] hover:text-[#171717]"
              }`}
            >
              Finished (Ready to Clear)
            </button>
          </div>
          <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E5E5E2] text-xs text-[#404040] leading-relaxed">
            {utensilSign === "resting" ? (
              <div>
                <p className="font-semibold text-[#171717] mb-1">Resting Code (Inverted &apos;V&apos;):</p>
                <p>Fork and knife positioned at an inverted &apos;V&apos; (tips pointing toward 12 o&apos;clock, handles at 4 and 8 o&apos;clock) with tines downward. Signals waitstaff that you are pausing conversation and still eating.</p>
              </div>
            ) : (
              <div>
                <p className="font-semibold text-[#171717] mb-1">Finished Code (11-to-5 or 12-to-6):</p>
                <p>Knife and fork placed parallel together either vertically (12 to 6) or diagonally (11 to 5) with knife blade facing inward and fork tines upward. Universally instructs waitstaff to clear your plate without asking.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
