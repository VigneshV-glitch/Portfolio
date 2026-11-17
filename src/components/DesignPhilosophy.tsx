import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle, Search, Users, GitMerge, Layers, PlaySquare, Code2 } from 'lucide-react';
import { EditorialReveal, EDITORIAL_EASE } from './MotionPrimitives';

const stepIcons = [
  <Search className="w-4 h-4 text-indigo-400" />,
  <Users className="w-4 h-4 text-indigo-400" />,
  <GitMerge className="w-4 h-4 text-indigo-400" />,
  <Layers className="w-4 h-4 text-indigo-400" />,
  <PlaySquare className="w-4 h-4 text-indigo-400" />,
  <Code2 className="w-4 h-4 text-indigo-400" />,
];

export const DesignPhilosophy: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0B0D0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Box */}
        <EditorialReveal className="max-w-4xl mb-14">
          <p className="text-xs font-mono text-indigo-400 tracking-wide mb-3">
            My Design Process
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight [text-wrap:balance]">
            From requirements to reality
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
            A structured, repeatable workflow connecting business discovery, UX architecture, design systems, and developer collaboration across every engagement.
          </p>
        </EditorialReveal>

        {/* Process Flow Diagram */}
        <EditorialReveal delay={0.08} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono tracking-wide text-gray-400">
              End-to-End Delivery Workflow
            </span>
            <span className="text-xs font-mono text-indigo-400 tabular-nums">
              Step 0{activeStep + 1} of 0{PROCESS_STEPS.length}
            </span>
          </div>

          {/* Desktop Horizontal Process Flow */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-2 bg-[#12141A] p-2 rounded-2xl border border-white/10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl text-left transition-all relative ${
                    isActive
                      ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30 scale-[1.02] z-10'
                      : 'bg-[#16191E] text-gray-400 hover:text-gray-200 hover:bg-[#1C2028]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold tabular-nums ${isActive ? 'text-indigo-200' : 'text-gray-400'}`}>
                      0{idx + 1}
                    </span>
                    <span className={isActive ? 'text-white' : ''}>
                      {stepIcons[idx]}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold leading-snug">{step.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Mobile Stacked Process Flow Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'bg-[#16191E] text-gray-400 hover:bg-[#1C2028]'
                  }`}
                >
                  <span className="text-[10px] font-mono block text-indigo-200 tabular-nums">0{idx + 1}</span>
                  <span className="text-xs font-semibold">{step.title}</span>
                </button>
              );
            })}
          </div>
        </EditorialReveal>

        {/* Selected Step Inspector Box */}
        <EditorialReveal delay={0.12}>
          <div className="bg-[#16191E] rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-3">
                    <span className="text-indigo-400 font-bold">Stage 0{activeStep + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentStep.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {currentStep.title}
                  </h3>

                  <p className="text-base text-gray-300 leading-relaxed font-normal">
                    {currentStep.description}
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#0B0D0E] p-5 sm:p-6 rounded-xl border border-white/10">
                  <span className="text-xs font-mono tracking-wide text-gray-400 block mb-3">
                    Core Focus Areas
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-mono">
                    {currentStep.keyActivities.map((activity) => (
                      <li key={activity} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </EditorialReveal>

      </div>
    </section>
  );
};
