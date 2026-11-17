import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { InteractiveSystemMockup } from '../components/InteractiveSystemMockup';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { EditorialReveal, EditorialStaggerGroup, EditorialStaggerItem } from '../components/MotionPrimitives';

interface CaseStudyPageProps {
  onOpenContact: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Case Study Not Found</h2>
        <p className="text-gray-400 mb-6 font-mono text-sm">The requested case study path does not exist.</p>
        <Link
          to="/work"
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-500 transition-colors"
        >
          Back to Work
        </Link>
      </div>
    );
  }

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <article className="pt-28 pb-24 bg-[#0B0D0E] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <EditorialReveal immediate yOffset={10} className="mb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>
        </EditorialReveal>

        {/* Case Study Header */}
        <EditorialReveal immediate delay={0.06}>
          <header className="mb-12 border-b border-white/10 pb-12">
            <div className="flex items-center gap-3 mb-4 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                {project.industry}
              </span>
              <span className="text-gray-400">{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-3xl leading-relaxed mb-8">
              {project.subtitle}
            </p>

            {/* Role & Design Focus Metadata Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#12141A] p-6 rounded-2xl border border-white/10">
              <div className="md:col-span-5 space-y-1">
                <span className="text-[11px] font-mono text-gray-400 tracking-wide block">
                  Role & Category
                </span>
                <p className="text-sm font-semibold text-white">{project.role}</p>
              </div>

              <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 space-y-1">
                <span className="text-[11px] font-mono text-gray-400 tracking-wide block">
                  Design Focus
                </span>
                <p className="text-sm font-medium text-indigo-300">{project.designFocus}</p>
              </div>
            </div>
          </header>
        </EditorialReveal>

        {/* Overview & Challenge Section */}
        <EditorialReveal delay={0.08}>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">
                Executive Summary
              </h3>
              <p className="text-base text-gray-300 leading-relaxed font-normal">
                {project.caseStudy.overview}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4 bg-[#16191E] p-6 rounded-2xl border border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                The Operational Challenge
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>
          </section>
        </EditorialReveal>

        {/* Live Interactive Product Workspace Viewport */}
        <EditorialReveal>
          <section className="mb-20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                Interactive Interface Prototype Viewport
              </span>
              <span className="text-xs font-mono text-indigo-400">Live Simulation</span>
            </div>
            <InteractiveSystemMockup type={project.visualType} />
          </section>
        </EditorialReveal>

        {/* System Approach Section */}
        <EditorialReveal>
          <section className="mb-20 bg-[#12141A] p-8 sm:p-10 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase text-indigo-400 font-bold tracking-wider mb-3">
              System Design Architecture
            </h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Architectural Strategy & Decisions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs text-gray-300">
              {project.caseStudy.systemApproach.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0B0D0E] border border-white/10 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </EditorialReveal>

        {/* Key Features Breakdown */}
        <section className="mb-20 space-y-8">
          <EditorialReveal>
            <span className="text-xs font-mono uppercase text-indigo-400 font-bold tracking-wider block mb-2">
              Feature Deep Dive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Key Capabilities Delivered
            </h2>
          </EditorialReveal>

          <EditorialStaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.caseStudy.keyFeatures.map((feat) => (
              <EditorialStaggerItem key={feat.title} className="h-full">
                <div className="h-full bg-[#16191E] p-6 rounded-2xl border border-white/10 space-y-3">
                  <h4 className="text-lg font-bold text-white">{feat.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">{feat.description}</p>
                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-indigo-300">
                    {feat.detail}
                  </div>
                </div>
              </EditorialStaggerItem>
            ))}
          </EditorialStaggerGroup>
        </section>

        {/* Business & Operational Impact */}
        <EditorialReveal>
          <section className="mb-20 bg-[#16191E] p-8 rounded-2xl border border-white/10">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider mb-2">
              Measured Outcomes
            </h3>
            <h2 className="text-2xl font-bold text-white mb-6">Impact & Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
              {project.caseStudy.impact.map((imp) => (
                <div key={imp.title} className="bg-[#0B0D0E] p-5 rounded-xl border border-white/10">
                  <h4 className="text-base font-bold text-white mb-1">{imp.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">{imp.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </EditorialReveal>

        {/* Next Project Footer Link */}
        <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
              Next Case Study
            </span>
            <Link
              to={`/work/${nextProject.slug}`}
              className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors inline-flex items-center gap-2"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="w-5 h-5 text-indigo-400" />
            </Link>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/20"
          >
            Discuss a Similar Project
          </button>
        </footer>

      </div>
    </article>
  );
};
