import React, { useState } from 'react';
import { Mail, Clock, Send, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { InquiryFormData } from '../types';
import { EditorialReveal } from '../components/MotionPrimitives';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'SaaS & Enterprise System',
    timeline: 'Within 1-3 months',
    budget: '$15k - $30k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = [
    'SaaS & Enterprise System',
    'Logistics & Fleet Operations',
    'AI Product Experience',
    'Design System Architecture',
    'UX Strategy & Advisory',
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0B0D0E] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <EditorialReveal immediate className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Talk
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Have a complex product problem or need experienced UX leadership for your platform? Send a message below or reach out directly.
          </p>
        </EditorialReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Details */}
          <EditorialReveal immediate delay={0.08} className="lg:col-span-5 space-y-6">
            <div className="bg-[#12141A] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0D0E] border border-white/10">
                  <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Primary Email</span>
                    <a href="mailto:vigneshv7678@gmail.com" className="text-white hover:text-indigo-300 font-bold transition-colors">
                      vigneshv7678@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0D0E] border border-white/10">
                  <Clock className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Availability & Response</span>
                    <span className="text-white">Active for Q3/Q4 Projects (24h response time)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0D0E] border border-white/10">
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Location & Timezone</span>
                    <span className="text-white">Remote Global / US & Europe Business Hours</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 leading-relaxed">
                Specialized in long-term product engagements, design systems architecture, and high-impact operational UX overhauls.
              </div>
            </div>
          </EditorialReveal>

          {/* Form */}
          <EditorialReveal immediate delay={0.14} className="lg:col-span-7 bg-[#12141A] p-6 sm:p-8 rounded-2xl border border-white/10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. I have received your message regarding <strong className="text-indigo-300">{formData.projectType}</strong> and will follow up with you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-mono font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Select Project Scope / Domain</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((pt) => (
                      <button
                        type="button"
                        key={pt}
                        onClick={() => setFormData({ ...formData, projectType: pt })}
                        className={`px-3 py-1.5 rounded-lg border text-left transition-all text-xs font-mono ${
                          formData.projectType === pt
                            ? 'bg-indigo-600 text-white border-indigo-400 font-semibold'
                            : 'bg-[#16191E] text-gray-400 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-[#16191E] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@logistics.com"
                      className="w-full bg-[#16191E] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full bg-[#16191E] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#16191E] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-xs"
                    >
                      <option>Immediate (Within 2 weeks)</option>
                      <option>Within 1-3 months</option>
                      <option>Flexible / Planning phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Project Details / Goals *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your product goals, current friction points, or design team needs..."
                    className="w-full bg-[#16191E] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 text-xs font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </EditorialReveal>

        </div>

      </div>
    </div>
  );
};
