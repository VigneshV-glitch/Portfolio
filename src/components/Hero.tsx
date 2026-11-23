import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, User } from 'lucide-react';
import { EditorialReveal } from './MotionPrimitives';
import profilePortrait from '../assets/images/vignesh_profile_portrait_1794570177176.jpg';

const WHATSAPP_URL = 'https://wa.me/+919790815455';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] bg-indigo-600/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Hero Left Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <EditorialReveal immediate delay={0.04} yOffset={12}>
              <p className="text-xs sm:text-sm font-mono text-indigo-300/90 tracking-wide mb-5">
                Vignesh V <span aria-hidden="true" className="mx-1.5 text-gray-600">·</span> Senior UI/UX Designer
              </p>
            </EditorialReveal>

            <EditorialReveal immediate delay={0.12} yOffset={18} duration={0.65}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-2xl [text-wrap:balance]">
                Designing Digital Products That Solve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-blue-300">
                  Real Business Problems.
                </span>
              </h1>
            </EditorialReveal>

            <EditorialReveal immediate delay={0.2} yOffset={16} duration={0.65}>
              <div className="space-y-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-9 max-w-xl">
                <p>
                  I'm a Senior UI/UX Designer focused on transforming complex business requirements into intuitive, scalable and user-friendly digital experiences.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  From product discovery and UX architecture to design systems, interactive prototypes and developer handoff, I turn ideas into meaningful product experiences.
                </p>
              </div>
            </EditorialReveal>

            <EditorialReveal immediate delay={0.28} yOffset={14}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#selected-work"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 rounded-xl transition-all duration-200 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-500/30 active:scale-95 whitespace-nowrap shrink-0"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-indigo-200" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-200 bg-[#16191E] hover:bg-[#1F242C] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </EditorialReveal>
          </div>

          {/* Hero Right Featured Profile Portrait */}
          <EditorialReveal immediate delay={0.18} yOffset={20} duration={0.7} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#12141A] border border-white/10 shadow-2xl shadow-black/50">
              {!imageFailed ? (
                <>
                  <img
                    src={profilePortrait}
                    alt="Vignesh V, Senior UI/UX Designer studio portrait"
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/55 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#16191E] to-[#0B0D0E] text-gray-400 p-6 text-center">
                  <User className="w-12 h-12 text-indigo-400/70 mb-3" />
                  <span className="text-sm font-medium text-white">Vignesh V</span>
                  <span className="text-xs font-mono text-gray-400 mt-1">Senior UI/UX Designer</span>
                </div>
              )}
            </div>
          </EditorialReveal>

        </div>
      </div>
    </section>
  );
};
