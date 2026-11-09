import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo, navLinks, socialLinks } from '../data/portfolioData';
import SocialLinks from './SocialLinks';

export default function Footer({ onOpenGuide }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06111F] border-t border-[#18344D] pt-12 pb-8 sm:pt-16 sm:pb-12 overflow-hidden w-full">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#168BFF]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 pb-8 sm:pb-12 border-b border-[#18344D]/80">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#29B6F6] p-[1.5px] shadow-[0_0_15px_rgba(22,139,255,0.4)] shrink-0">
                <div className="w-full h-full bg-[#06111F] rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#F5F7FA] to-[#29B6F6]">
                    T
                  </span>
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#F5F7FA]">
                {personalInfo.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#29B6F6]">
              {personalInfo.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#A8B5C5] leading-relaxed max-w-sm">
              {personalInfo.introduction}
            </p>

            <div className="pt-1 sm:pt-2">
              <SocialLinks links={socialLinks} variant="icons-only" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="sm:col-span-1 md:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#F5F7FA] font-semibold">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#A8B5C5] hover:text-[#29B6F6] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact & Guide Column */}
          <div className="sm:col-span-1 md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#F5F7FA] font-semibold">
              Get In Touch
            </h4>
            <p className="text-xs text-[#A8B5C5] leading-relaxed">
              Have a project in mind or looking for a developer? Let's connect and build something impactful.
            </p>
            <div className="space-y-1 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-[#29B6F6] hover:underline truncate"
              >
                {personalInfo.email}
              </a>
              <p className="text-[#A8B5C5]">{personalInfo.location}</p>
            </div>

            <button
              onClick={onOpenGuide}
              className="inline-flex items-center text-xs text-[#29B6F6] hover:text-[#F5F7FA] underline underline-offset-4 cursor-pointer pt-1"
            >
              Developer Setup & Editing Guide
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B5C5] text-center sm:text-left">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
            <span className="hidden sm:inline">Crafted with modern React & Tailwind</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] text-[#F5F7FA] hover:text-[#29B6F6] transition-colors cursor-pointer active:scale-95 text-center"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
