import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialPlaceholders = [
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '#' },
    { name: 'Read.cv', icon: <FileText className="w-4 h-4" />, href: '#' },
    { name: 'GitHub', icon: <Github className="w-4 h-4" />, href: '#' },
    { name: 'Email', icon: <Mail className="w-4 h-4" />, onClick: onOpenContact },
  ];

  return (
    <footer className="bg-[#0B0D0E] border-t border-white/10 py-16 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Short Descriptor */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors">
                VIGNESH V
              </span>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Designing digital products that solve real business problems.
            </p>
            <div className="text-xs font-mono text-gray-400">
              Enterprise SaaS · Operational Workflows · Design Systems
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact Placeholders */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
              Connect
            </span>
            <div className="flex flex-col gap-2 text-sm font-medium">
              {socialPlaceholders.map((s) => (
                s.onClick ? (
                  <button
                    key={s.name}
                    onClick={s.onClick}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 text-left"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </button>
                ) : (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400" />
                  </a>
                )
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Vignesh V. All rights reserved.</p>
          <p className="text-gray-400">Designed with clarity, systems thinking, and product maturity.</p>
        </div>
      </div>
    </footer>
  );
};
