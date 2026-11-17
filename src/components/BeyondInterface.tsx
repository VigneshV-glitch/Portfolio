import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOMAIN_EXPERIENCES } from '../data/portfolioData';
import { Truck, Package, Warehouse, Play, HeartPulse, Compass } from 'lucide-react';
import { EditorialReveal, EditorialStaggerGroup, EditorialStaggerItem, EDITORIAL_EASE } from './MotionPrimitives';

const domainIcons: Record<string, React.ReactNode> = {
  transportation: <Compass className="w-5 h-5 text-indigo-400" />,
  logistics: <Package className="w-5 h-5 text-indigo-400" />,
  'warehouse-operations': <Warehouse className="w-5 h-5 text-indigo-400" />,
  'fleet-operations': <Truck className="w-5 h-5 text-indigo-400" />,
  'sports-creative': <Play className="w-5 h-5 text-indigo-400" />,
  healthcare: <HeartPulse className="w-5 h-5 text-indigo-400" />,
};

export const BeyondInterface: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('transportation');

  const activeDomain = DOMAIN_EXPERIENCES.find((d) => d.id === selectedDomain) || DOMAIN_EXPERIENCES[0];

  return (
    <section className="py-24 md:py-32 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <EditorialReveal className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <span>Domain Experience Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            I enjoy solving problems where design meets complexity.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            My experience has taken me across products involving transportation, logistics, warehouse operations, SaaS platforms, mobile applications, digital communities, media, and AI-powered experiences.
            <br className="my-2" />
            <span className="text-white font-medium">
              These products have taught me to design not only for screens, but for workflows, systems, roles, edge cases, and real-world operations.
            </span>
          </p>
        </EditorialReveal>

        {/* Domain Grid & Inspector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Domains Selection Grid */}
          <EditorialStaggerGroup staggerDelay={0.05} className="lg:col-span-6 grid grid-cols-2 gap-3">
            {DOMAIN_EXPERIENCES.map((domain) => {
              const isSelected = selectedDomain === domain.id;
              return (
                <EditorialStaggerItem key={domain.id} yOffset={14}>
                  <button
                    onClick={() => setSelectedDomain(domain.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-28 ${
                      isSelected
                        ? 'bg-indigo-950/40 border-indigo-500/60 shadow-lg shadow-indigo-500/10 text-white scale-[1.02]'
                        : 'bg-[#16191E] border-white/10 hover:border-white/20 text-gray-300 hover:bg-[#1C2028]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-1.5 rounded-lg bg-[#0B0D0E] border border-white/10">
                        {domainIcons[domain.id]}
                      </div>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">{domain.name}</h4>
                      <span className="text-[10px] font-mono text-gray-400">Click to inspect</span>
                    </div>
                  </button>
                </EditorialStaggerItem>
              );
            })}
          </EditorialStaggerGroup>

          {/* Active Domain Detail Card */}
          <EditorialReveal delay={0.12} className="lg:col-span-6 bg-[#16191E] rounded-2xl border border-white/10 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {domainIcons[activeDomain.id]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-indigo-400 tracking-wider">Domain Focus</span>
                    <h3 className="text-2xl font-bold text-white">{activeDomain.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-normal mb-6">
                  {activeDomain.description}
                </p>

                {/* Complexity Factors */}
                <div className="mb-6 p-4 rounded-xl bg-[#0B0D0E] border border-white/10">
                  <span className="text-xs font-mono uppercase text-gray-400 block mb-2">
                    Domain Complexity Factors
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                    {activeDomain.complexityFactors.map((factor) => (
                      <li key={factor} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Challenges Solved */}
                <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-indigo-200 font-mono">
                  <span className="text-[10px] uppercase text-indigo-400 block font-bold mb-1">
                    Design Outcome
                  </span>
                  <p className="leading-relaxed">
                    {activeDomain.keyChallengesSolved}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </EditorialReveal>

        </div>

      </div>
    </section>
  );
};
