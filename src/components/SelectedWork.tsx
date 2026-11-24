import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Monitor, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { InteractiveSystemMockup } from './InteractiveSystemMockup';
import { EditorialReveal, EDITORIAL_EASE } from './MotionPrimitives';
import { Project } from '../types';

// Responsive sticky top offsets: compact 4px step on mobile, 10px cascade on desktop
const STICKY_TOP_CLASSES = [
  'top-[4.25rem] lg:top-[4.75rem]',
  'top-[4.5rem] lg:top-[5.375rem]',
  'top-[4.75rem] lg:top-[6rem]',
  'top-[5rem] lg:top-[6.625rem]',
  'top-[5.25rem] lg:top-[7.25rem]',
  'top-[5.5rem] lg:top-[7.875rem]',
  'top-[5.75rem] lg:top-[8.5rem]',
  'top-[6rem] lg:top-[9.125rem]',
];

interface StackedProjectCardProps {
  project: Project;
  index: number;
  total: number;
  cardRef: React.RefObject<HTMLDivElement | null>;
  nextCardRef?: React.RefObject<HTMLDivElement | null>;
}

const StackedProjectCard: React.FC<StackedProjectCardProps> = ({
  project,
  index,
  total,
  cardRef,
  nextCardRef,
}) => {
  const [mobilePreviewOpen, setMobilePreviewOpen] = useState(false);

  const isLast = index === total - 1;
  const targetScale = isLast ? 1 : 1 - (total - 1 - index) * 0.02;

  // Drive scale and depth shading precisely as the NEXT card approaches and overlaps this card
  const { scrollYProgress } = useScroll({
    target: nextCardRef ?? cardRef,
    offset: ['start end', 'start 84px'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const shadeOpacity = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : 0.34]);

  const stickyTopClass =
    STICKY_TOP_CLASSES[index] ?? STICKY_TOP_CLASSES[STICKY_TOP_CLASSES.length - 1];

  return (
    <div
      ref={cardRef}
      className={`${
        mobilePreviewOpen ? 'relative lg:sticky' : 'sticky'
      } ${stickyTopClass} pb-4 sm:pb-6 lg:pb-10 last:pb-0`}
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{ scale }}
        className="group relative origin-top bg-[#12141A] rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-colors duration-300 shadow-[0_-12px_40px_rgba(0,0,0,0.72)]"
      >
        {/* Subtle depth darkening overlay as the next card overlaps */}
        <motion.div
          style={{ opacity: shadeOpacity }}
          className="absolute inset-0 bg-[#0B0D0E] pointer-events-none z-20"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 p-4 sm:p-6 lg:p-8 items-center">
          {/* Project Information */}
          <div className="lg:col-span-6 min-w-0 flex flex-col justify-between h-full">
            <div>
              {/* Index & Category (unboxed editorial metadata) */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 sm:mb-3 text-[11px] sm:text-xs font-mono text-gray-400">
                <span className="text-indigo-400 font-bold">0{index + 1}</span>
                <span aria-hidden="true">·</span>
                <span>{project.industry}</span>
                <span aria-hidden="true">·</span>
                <span className="text-gray-300">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-2.5 group-hover:text-indigo-300 transition-colors leading-snug">
                {project.title}
              </h3>

              {/* Project Overview */}
              <p className="text-xs sm:text-base text-gray-300 leading-relaxed mb-3.5 sm:mb-4 font-normal">
                {project.description}
              </p>

              {/* What I Worked On / Contribution Note */}
              {project.contributions.length > 0 ? (
                <div className="mb-3.5 sm:mb-5 rounded-xl bg-gradient-to-b from-[#171B24]/95 to-[#0C0E13]/95 border border-indigo-400/20 p-3 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-indigo-400/35 transition-colors duration-300">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-indigo-300 shrink-0">
                      What I worked on
                    </span>
                    <div
                      aria-hidden="true"
                      className="h-px flex-1 bg-gradient-to-r from-indigo-400/35 via-white/10 to-transparent"
                    />
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 tabular-nums shrink-0">
                      {String(project.contributions.length).padStart(2, '0')} Scope
                    </span>
                  </div>
                  <ul className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {project.contributions.map((item, itemIdx) => {
                      const isOddTrailing =
                        project.contributions.length % 2 === 1 &&
                        itemIdx === project.contributions.length - 1;
                      return (
                        <li
                          key={item}
                          className={`min-w-0 flex items-start gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-[#0B0D0E]/75 border border-white/[0.07] hover:border-indigo-400/30 hover:bg-[#131722] transition-colors ${
                            isOddTrailing ? 'col-span-2' : ''
                          }`}
                        >
                          <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-indigo-400/90 tabular-nums pt-0.5 shrink-0">
                            {String(itemIdx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[11px] sm:text-xs text-gray-100 font-medium leading-snug break-words">
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                project.contributionNote && (
                  <div className="mb-3.5 sm:mb-5 rounded-xl bg-gradient-to-b from-[#171B24]/95 to-[#0C0E13]/95 border border-indigo-400/20 p-3 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] text-xs text-gray-200">
                    <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-indigo-300 block mb-1.5">
                      Project contribution
                    </span>
                    <p>{project.contributionNote}</p>
                  </div>
                )
              )}
            </div>

            <div>
              {/* Design Focus */}
              <div className="py-2.5 sm:py-3 border-t border-white/10 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 block mb-0.5 sm:mb-1">
                  Design focus
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-200 leading-snug block">
                  {project.designFocus}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600/90 hover:bg-indigo-500 border border-indigo-400/30 rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-600/25 whitespace-nowrap shrink-0"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-indigo-200" />
                </Link>

                {/* Mobile Interactive UI Preview Toggle so collapsed cards fit inside mobile viewports */}
                <button
                  type="button"
                  onClick={() => setMobilePreviewOpen((prev) => !prev)}
                  aria-expanded={mobilePreviewOpen}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-indigo-300 bg-[#0B0D0E] hover:bg-[#16191E] border border-indigo-500/25 rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  {mobilePreviewOpen ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>Hide UI</span>
                    </>
                  ) : (
                    <>
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Live UI</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Expandable Interactive UI Mockup */}
          <AnimatePresence initial={false}>
            {mobilePreviewOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
                className="lg:hidden min-w-0 overflow-hidden"
              >
                <div className="pt-1 rounded-xl overflow-hidden">
                  <InteractiveSystemMockup type={project.visualType} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Project Visual Interactive Mockup */}
          <div className="hidden lg:block lg:col-span-6 min-w-0">
            <div className="relative rounded-xl overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-300">
              <InteractiveSystemMockup type={project.visualType} />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export const SelectedWork: React.FC = () => {
  const cardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    PROJECTS.map(() => React.createRef<HTMLDivElement | null>())
  );

  return (
    <section id="selected-work" className="py-20 sm:py-24 md:py-32 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <EditorialReveal className="max-w-3xl">
            <p className="text-xs font-mono text-indigo-400 tracking-wide mb-3">
              Selected Projects
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4 [text-wrap:balance]">
              Transforming complex operations into clear product experiences.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              Seven enterprise SaaS, logistics, facility, marketplace, and creative product engagements across the complete design lifecycle.
            </p>
          </EditorialReveal>
        </div>

        {/* Sticky Stacked Case Study Deck */}
        <div className="relative space-y-6 sm:space-y-10 lg:space-y-14">
          {PROJECTS.map((project, index) => (
            <StackedProjectCard
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS.length}
              cardRef={cardRefs.current[index]}
              nextCardRef={cardRefs.current[index + 1]}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
