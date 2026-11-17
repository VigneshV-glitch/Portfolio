import React from 'react';
import { AboutSnapshot } from '../components/AboutSnapshot';
import { BeyondInterface } from '../components/BeyondInterface';
import { DesignPhilosophy } from '../components/DesignPhilosophy';
import { FinalCTA } from '../components/FinalCTA';
import { CheckCircle2 } from 'lucide-react';
import { EditorialReveal, EditorialStaggerGroup, EditorialStaggerItem } from '../components/MotionPrimitives';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  const principles = [
    {
      title: 'Clarity over Cleverness',
      desc: 'In complex enterprise systems, ambiguous UI pattern choices lead to operational errors. I prioritize clarity, high contrast, and predictable interactions.',
    },
    {
      title: 'Systems-First Architecture',
      desc: 'Interfaces are temporary; design token structures and component hierarchies endure. I construct scalable component libraries designed to evolve.',
    },
    {
      title: 'Respect Cognitive Load',
      desc: 'Dispatchers, dock operators, and warehouse managers make high-stakes decisions under pressure. I use progressive disclosure to surface information only when needed.',
    },
    {
      title: 'AI as a Capability Multiplier',
      desc: 'AI should empower designers to audit accessibility, analyze contrast, and automate repetitive tasks without sacrificing human design judgment.',
    },
  ];

  return (
    <div className="pt-28 bg-[#0B0D0E] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <EditorialReveal immediate className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <span>Senior UI/UX Designer Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Designing clarity for high-complexity domains.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm Vignesh V, a Senior UI/UX Designer who specializes in digital products, SaaS platforms, enterprise systems, operational workflows, and AI-assisted product experiences.
          </p>
        </EditorialReveal>
      </div>

      <AboutSnapshot />

      {/* Operating Principles */}
      <section className="py-20 bg-[#0F1115] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialReveal className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider block mb-2">
              Working Principles
            </span>
            <h2 className="text-3xl font-bold text-white">How I Approach Product Design</h2>
          </EditorialReveal>

          <EditorialStaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <EditorialStaggerItem key={p.title} className="h-full">
                <div className="h-full bg-[#16191E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">{p.desc}</p>
                </div>
              </EditorialStaggerItem>
            ))}
          </EditorialStaggerGroup>
        </div>
      </section>

      <DesignPhilosophy />
      <BeyondInterface />
      <FinalCTA onOpenContact={onOpenContact} />
    </div>
  );
};
