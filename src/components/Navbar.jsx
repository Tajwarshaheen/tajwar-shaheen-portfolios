import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Download,
  FileText,
  Sun,
  Moon,
  ArrowUpRight,
} from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { downloadCVPdf } from '../utils/downloadCV';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenCV, isDark: propIsDark, onToggleTheme: propToggleTheme, onOpenGuide }) {
  const themeContext = useTheme();
  const isDark = propIsDark !== undefined ? propIsDark : themeContext.isDark;
  const onToggleTheme = propToggleTheme || themeContext.toggleTheme;

  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#06111F]/90 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#18344D]/80 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2.5 sm:py-3'
          : 'bg-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo Zone */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink min-w-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#29B6F6] p-[1.5px] shadow-[0_0_15px_rgba(22,139,255,0.4)] transition-transform duration-300 group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-white dark:bg-[#06111F] rounded-[10px] flex items-center justify-center transition-colors">
                <span className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#168BFF] to-[#29B6F6] dark:from-[#F5F7FA] dark:to-[#29B6F6]">
                  T
                </span>
              </div>
            </div>
            <span className="text-base sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F5F7FA] group-hover:text-[#168BFF] dark:group-hover:text-[#29B6F6] transition-colors truncate max-w-[130px] xs:max-w-none">
              {personalInfo.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#168BFF] dark:text-[#29B6F6] font-semibold'
                      : 'text-[#475569] dark:text-[#A8B5C5] hover:text-[#0F172A] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#168BFF] rounded-full shadow-[0_0_8px_#168BFF]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Guide hint button */}
            <button
              onClick={onOpenGuide}
              title="How to run, edit, or customize this portfolio"
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[11px] font-medium text-[#475569] dark:text-[#A8B5C5] hover:text-[#168BFF] dark:hover:text-[#29B6F6] hover:border-[#168BFF] transition-colors cursor-pointer"
            >
              <span>Setup Guide</span>
            </button>

            {/* Preview CV Button */}
            <button
              onClick={onOpenCV}
              title="Preview Official CV Online"
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[11px] font-medium text-[#475569] dark:text-[#A8B5C5] hover:text-[#168BFF] dark:hover:text-[#29B6F6] hover:border-[#168BFF] transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Preview CV</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-lg bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[#475569] dark:text-[#A8B5C5] hover:text-[#168BFF] dark:hover:text-[#29B6F6] hover:border-[#168BFF] transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Download CV CTA */}
            <a
              href="/Tajwar_CV.pdf"
              download="Tajwar_CV.pdf"
              onClick={downloadCVPdf}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs font-semibold shadow-[0_0_20px_-3px_rgba(22,139,255,0.4)] transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[#0F172A] dark:text-[#F5F7FA] hover:text-[#168BFF] dark:hover:text-[#29B6F6] transition-colors shrink-0 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-[#E2E8F0] dark:border-[#18344D] bg-white/98 dark:bg-[#06111F]/98 backdrop-blur-xl px-4 py-5 max-h-[calc(100vh-4.5rem)] overflow-y-auto transition-colors"
          >
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F1F5F9] dark:bg-[#0D1E30] text-[#168BFF] dark:text-[#29B6F6] border border-[#168BFF]/40 font-semibold'
                        : 'text-[#475569] dark:text-[#A8B5C5] hover:text-[#0F172A] dark:hover:text-[#F5F7FA] hover:bg-[#F8FAFC] dark:hover:bg-[#0A1929]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#18344D] flex flex-col gap-2.5">
                {/* Mobile Drawer Theme Toggle Item */}
                <button
                  type="button"
                  onClick={() => {
                    onToggleTheme();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-xs font-medium text-[#0F172A] dark:text-[#F5F7FA] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {isDark ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-slate-700" />
                    )}
                    <span>Theme Mode: {isDark ? 'Dark (Navy Blue)' : 'Light (Clean)'}</span>
                  </span>
                  <span className="text-[11px] text-[#168BFF] dark:text-[#29B6F6] font-semibold">
                    Switch to {isDark ? 'Light' : 'Dark'}
                  </span>
                </button>

                <a
                  href="/Tajwar_CV.pdf"
                  download="Tajwar_CV.pdf"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    downloadCVPdf(e);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#168BFF] text-white text-xs font-semibold shadow-lg active:scale-95 transition-transform cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[#475569] dark:text-[#A8B5C5] hover:text-[#168BFF] dark:hover:text-[#29B6F6] text-xs font-medium active:scale-95 transition-transform cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Preview CV Online</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGuide();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[#475569] dark:text-[#A8B5C5] text-xs font-medium active:scale-95 transition-transform cursor-pointer"
                >
                  <span>Project Setup & Customization Guide</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
