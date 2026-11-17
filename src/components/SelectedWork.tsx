import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { InteractiveSystemMockup } from './InteractiveSystemMockup';
import { EditorialReveal, EDITORIAL_EASE } from './MotionPrimitives';
import { Project } from '../types';

interface StackedProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const StackedProjectCard: React.FC<StackedProjectCardProps> = ({
  project,
  index,
  total,
  progress,
}) => {
  // Compact cascading sticky top offset so 8 stacked card edges stay clean inside the viewport
  const stickyTop = `calc(4.5rem + ${index * 10}px)`;

  const isLast = index === total - 1;
  const start = total > 1 ? index / total : 0;
  const targetScale = isLast ? 1 : 1 - (total - 1 - index) * 0.022;

  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const shadeOpacity = useTransform(progress, [start, 1], [0, isLast ? 0 : 0.36]);

  return (
    <div
      className="sticky pb-8 md:pb-12 last:pb-0"
      style={{
        top: stickyTop,
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{ scale }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{
          duration: 0.55,
          ease: EDITORIAL_EASE,
        }}
        className="group relative origin-top bg-[#12141A] rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-colors duration-300 shadow-[0_-16px_48px_rgba(0,0,0,0.75)]"
      >
        {/* Subtle depth darkening overlay as the next card overlaps */}
        <motion.div
          style={{ opacity: shadeOpacity }}
          className="absolute inset-0 bg-[#0B0D0E] pointer-events-none z-20"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8 items-center">
          {/* Project Information */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full order-2 lg:order-1">
            <div>
              {/* Index & Category (unboxed editorial metadata) */}
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-gray-400">
                <span className="text-indigo-400 font-bold">0{index + 1}</span>
                <span aria-hidden="true">·</span>
                <span>{project.industry}</span>
                <span aria-hidden="true">·</span>
                <span className="text-gray-300">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>

              {/* Project Overview */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 font-normal">
                {project.description}
              </p>

              {/* What I Worked On / Contribution Note */}
              {project.contributions.length > 0 ? (
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2">
                    What I worked on
                  </span>
                  <ul
                    className={`gap-x-4 gap-y-1.5 text-xs text-gray-300 ${
                      project.contributions.length > 6
                        ? 'grid grid-cols-1 sm:grid-cols-2'
                        : 'space-y-1.5'
                    }`}
                  >
                    {project.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                project.contributionNote && (
                  <div className="mb-4 p-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-xs text-gray-300">
                    <span className="font-mono text-indigo-300 block mb-1">Project contribution</span>
                    <p>{project.contributionNote}</p>
                  </div>
                )
              )}
            </div>

            <div>
              {/* Design Focus */}
              <div className="py-3 border-t border-white/10 mb-4">
                <span className="text-[11px] font-mono text-gray-400 block mb-1">
                  Design focus
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-200">
                  {project.designFocus}
                </span>
              </div>

              {/* View Case Study CTA */}
              <Link
                to={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600/90 hover:bg-indigo-500 border border-indigo-400/30 rounded-xl transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-600/25 whitespace-nowrap shrink-0"
              >
                <span>View Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-indigo-200" />
              </Link>
            </div>
          </div>

          {/* Project Visual Interactive Mockup */}
          <div className="lg:col-span-6 order-1 lg:order-2">
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
  const deckContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: deckContainerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="selected-work" className="py-24 md:py-32 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
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
        <div ref={deckContainerRef} className="relative space-y-12 sm:space-y-16 lg:space-y-20">
          {PROJECTS.map((project, index) => (
            <StackedProjectCard
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
