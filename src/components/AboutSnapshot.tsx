import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, CheckCircle2 } from 'lucide-react';
import { EditorialReveal } from './MotionPrimitives';

export const AboutSnapshot: React.FC = () => {
  const lifecycleStages = [
    {
      index: '01',
      title: 'Requirements & Journey Mapping',
      desc: 'Understanding business requirements, mapping user journeys, and structuring clear information architecture.',
    },
    {
      index: '02',
      title: 'Interfaces & Design Systems',
      desc: 'Designing practical, consistent interfaces and building scalable design systems for enterprise products.',
    },
    {
      index: '03',
      title: 'Prototyping & Engineering Handoff',
      desc: 'Prototyping key interactions and collaborating closely with development teams through implementation.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text Content */}
          <EditorialReveal className="lg:col-span-6">
            <p className="text-xs font-mono text-indigo-400 tracking-wide mb-3">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
              Practical, consistent, and scalable product design.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8">
              <p>
                I specialize in designing enterprise applications, SaaS platforms and complex operational systems. My approach combines business understanding, user-centered thinking and functional design to create experiences that are practical, consistent and scalable.
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                I work across the complete product design lifecycle — understanding requirements, mapping user journeys, structuring information architecture, designing interfaces, building design systems, prototyping interactions and collaborating with development teams.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 rounded-xl transition-all duration-200 shadow-xl shadow-indigo-600/20 active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>More About Me</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-200" />
            </Link>
          </EditorialReveal>

          {/* Right Visual Artifact: Product Design Lifecycle Summary */}
          <EditorialReveal delay={0.12} className="lg:col-span-6 bg-[#12141A] rounded-2xl border border-white/10 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-indigo-400 font-semibold tracking-wide text-xs flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  End-to-End Product Design Lifecycle
                </span>
                <span className="text-[11px] text-gray-400">Enterprise & SaaS</span>
              </div>

              {lifecycleStages.map((stage) => (
                <div key={stage.index} className="p-4 rounded-xl bg-[#0B0D0E] border border-white/10 space-y-1.5">
                  <span className="text-indigo-300 text-[11px] font-semibold block">
                    {stage.index}. {stage.title}
                  </span>
                  <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}

              <div className="pt-2 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Discovery to Developer Handoff
                </span>
                <span className="text-indigo-300">7 Production Projects</span>
              </div>
            </div>
          </EditorialReveal>

        </div>

      </div>
    </section>
  );
};
