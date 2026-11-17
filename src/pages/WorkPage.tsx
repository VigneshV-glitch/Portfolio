import React from 'react';
import { SelectedWork } from '../components/SelectedWork';
import { FinalCTA } from '../components/FinalCTA';
import { EditorialReveal } from '../components/MotionPrimitives';

interface WorkPageProps {
  onOpenContact: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-28 bg-[#0B0D0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <EditorialReveal immediate className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <span>Portfolio Archive</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Selected Work & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            A comprehensive catalog of complex product design initiatives across logistics, fleet operations, warehouse management, and AI technology.
          </p>
        </EditorialReveal>
      </div>

      <SelectedWork />
      <FinalCTA onOpenContact={onOpenContact} />
    </div>
  );
};
