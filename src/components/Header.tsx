import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/+919790815455';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/work' && (location.pathname === '/' || location.pathname === '/work' || location.pathname.startsWith('/work/'))) {
      return location.pathname === '/work' || location.pathname.startsWith('/work/');
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
      {/* Progressive top-to-bottom gradient blur & opacity progression */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -bottom-10 z-0 backdrop-blur-lg bg-gradient-to-b from-[#0B0D0E]/75 via-[#0B0D0E]/35 to-transparent [mask-image:linear-gradient(to_bottom,black_0%,black_38%,rgba(0,0,0,0.6)_66%,rgba(0,0,0,0.2)_86%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_38%,rgba(0,0,0,0.6)_66%,rgba(0,0,0,0.2)_86%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 z-0 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.88)_42%,rgba(0,0,0,0.4)_74%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.88)_42%,rgba(0,0,0,0.4)_74%,transparent_100%)]"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md py-1 px-1.5 -ml-1.5 transition-colors"
          aria-label="VIGNESH V Portfolio Home"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            VIGNESH V
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Senior UI/UX Designer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#16191E]/60 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/50 rounded-full transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-indigo-200" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-colors"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[#0F1115] border-b border-white/10 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  isActive(link.path)
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
