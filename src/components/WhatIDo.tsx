import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Layout, GitMerge, Layers, Search, PlaySquare, Code2, CheckCircle2 } from 'lucide-react';
import { EditorialReveal, EditorialStaggerGroup, EditorialStaggerItem } from './MotionPrimitives';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5 text-indigo-400" />,
  GitMerge: <GitMerge className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-indigo-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  PlaySquare: <PlaySquare className="w-5 h-5 text-indigo-400" />,
  Code2: <Code2 className="w-5 h-5 text-indigo-400" />,
};

export const WhatIDo: React.FC = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#0B0D0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <EditorialReveal className="max-w-3xl mb-16">
          <p className="text-xs font-mono text-indigo-400 tracking-wide mb-3">
            Design Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            What I Bring to Every Project
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            End-to-end UX strategy, structured architecture, scalable design systems, and collaborative engineering delivery.
          </p>
        </EditorialReveal>

        {/* 6 Capabilities Grid */}
        <EditorialStaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => (
            <EditorialStaggerItem key={cap.id} className="h-full">
              <div
                className="group h-full bg-[#12141A] rounded-2xl border border-white/10 p-6 sm:p-7 hover:border-indigo-500/40 transition-colors duration-200 flex flex-col justify-between hover:bg-[#16191E]"
              >
                <div>
                  {/* Header: Index & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      {cap.index}
                    </span>
                    <div className="p-2 rounded-lg bg-[#0B0D0E] border border-white/10">
                      {iconMap[cap.iconName] || <Layout className="w-5 h-5 text-indigo-400" />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                    {cap.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </EditorialStaggerItem>
          ))}
        </EditorialStaggerGroup>

      </div>
    </section>
  );
};
