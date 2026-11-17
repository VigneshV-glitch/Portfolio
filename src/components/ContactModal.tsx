import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#12141A] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I have received your project details regarding <strong className="text-indigo-300">{formData.projectType}</strong> and will get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Project Inquiry</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-sm text-gray-300 mb-6">
              Have a complex product challenge? Fill in the details below to discuss collaboration.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {/* Project Type */}
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">Project Domain / Scope</label>
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

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
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
                    placeholder="alex@company.com"
                    className="w-full bg-[#16191E] border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>
              </div>

              {/* Company & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Milestone Logistics"
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

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-1">Project Summary / Requirements *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the operational challenge, user workflows, or core product goals..."
                  className="w-full bg-[#16191E] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 text-xs font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Send Project Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
