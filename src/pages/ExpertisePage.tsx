import React from 'react';
import { WhatIDo } from '../components/WhatIDo';
import { ToolsTech } from '../components/ToolsTech';
import { FinalCTA } from '../components/FinalCTA';
import { Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { EditorialReveal, EditorialStaggerGroup, EditorialStaggerItem } from '../components/MotionPrimitives';

interface ExpertisePageProps {
  onOpenContact: () => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-28 bg-[#0B0D0E] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <EditorialReveal immediate className="max-w-3xl">
          <p className="text-xs font-mono text-indigo-400 tracking-wide mb-3">
            Capabilities & Toolkit
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Design Capabilities & Tools
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            End-to-end product discovery, UX architecture, UI design systems, interactive prototyping, and developer handoff.
          </p>
        </EditorialReveal>
      </div>

      <WhatIDo />
      <ToolsTech />

      {/* Design System & AI Section */}
      <section className="py-20 bg-[#0B0D0E] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialStaggerGroup className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Design Systems Card */}
            <EditorialStaggerItem className="h-full">
              <div className="h-full bg-[#12141A] p-8 rounded-2xl border border-white/10 space-y-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit border border-indigo-500/20 text-indigo-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Design Systems Architecture</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Building multi-theme token hierarchies (Color, Typography, Spacing, Radius, Motion) synchronized across Figma components and CSS/Tailwind variables.
                </p>
                <ul className="space-y-2 text-xs font-mono text-gray-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Semantic Token Mapping (Primary, Surface, Alert)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>WCAG 2.2 AA Contrast Enforcement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>High-Density Control Components for Enterprise Data</span>
                  </li>
                </ul>
              </div>
            </EditorialStaggerItem>

            {/* AI Integration Card */}
            <EditorialStaggerItem className="h-full">
              <div className="h-full bg-[#12141A] p-8 rounded-2xl border border-white/10 space-y-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl w-fit border border-indigo-500/20 text-indigo-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI-Assisted Workflow Methodology</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Utilizing generative AI and automated inspection scripts to audit interface accessibility, generate variant exploratory states, and streamline handoffs.
                </p>
                <ul className="space-y-2 text-xs font-mono text-gray-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Automated WCAG & Touch-Target Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Rapid Edge-Case Scenario Synthesis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Explainable AI UX Principles for Copilots</span>
                  </li>
                </ul>
              </div>
            </EditorialStaggerItem>
          </EditorialStaggerGroup>
        </div>
      </section>

      <FinalCTA onOpenContact={onOpenContact} />
    </div>
  );
};
