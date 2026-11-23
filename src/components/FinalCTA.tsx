import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EditorialReveal } from './MotionPrimitives';

const WHATSAPP_URL = 'https://wa.me/+919790815455';

interface FinalCTAProps {
  onOpenContact?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = () => {
  return (
    <section className="py-28 md:py-36 bg-[#0B0D0E] relative border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <EditorialReveal>
          <p className="text-xs font-mono text-indigo-400 tracking-wide mb-4">
            Contact CTA
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12] [text-wrap:balance]">
            Let's Build Something Meaningful.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal mb-3 max-w-2xl mx-auto leading-relaxed">
            Have a product idea, a complex workflow or a digital experience that needs a better design approach?
          </p>

          <p className="text-base sm:text-xl text-indigo-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's connect and turn your vision into a thoughtful, functional and user-centered product.
          </p>
        </EditorialReveal>

        <EditorialReveal delay={0.1} yOffset={12} className="flex items-center justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 rounded-xl transition-all duration-200 shadow-2xl shadow-indigo-600/30 hover:shadow-indigo-500/40 active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-indigo-200" />
          </a>
        </EditorialReveal>

      </div>
    </section>
  );
};
