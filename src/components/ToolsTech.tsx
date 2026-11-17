import React from 'react';
import { PenTool, Image, Film, Cpu, Globe, Terminal, Sparkles } from 'lucide-react';
import { TOOLS_AND_TECH } from '../data/portfolioData';
import { EditorialReveal, EditorialStaggerGroup, EditorialStaggerItem } from './MotionPrimitives';

const toolIconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-5 h-5 text-indigo-400" />,
  Image: <Image className="w-5 h-5 text-indigo-400" />,
  Film: <Film className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Globe: <Globe className="w-5 h-5 text-indigo-400" />,
  Terminal: <Terminal className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
};

export const ToolsTech: React.FC = () => {
  return (
    <section id="tools" className="py-24 md:py-28 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <EditorialReveal className="max-w-3xl mb-14">
          <p className="text-xs font-mono text-indigo-400 tracking-wide mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Tools & Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            The core design, motion, implementation, and AI-assisted platforms powering my daily workflow.
          </p>
        </EditorialReveal>

        {/* 7 Tools Grid */}
        <EditorialStaggerGroup
          staggerDelay={0.05}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {TOOLS_AND_TECH.map((tool) => (
            <EditorialStaggerItem key={tool.id}>
              <div className="group h-full bg-[#16191E] rounded-2xl border border-white/10 p-5 hover:border-indigo-500/40 transition-colors duration-200 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#0B0D0E] border border-white/10 shrink-0">
                  {toolIconMap[tool.iconName] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                    {tool.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    {tool.category}
                  </p>
                </div>
              </div>
            </EditorialStaggerItem>
          ))}
        </EditorialStaggerGroup>

      </div>
    </section>
  );
};
