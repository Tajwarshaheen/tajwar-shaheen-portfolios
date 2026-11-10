import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Send,
  Sparkles,
  CheckCircle,
  MapPin,
  Laptop,
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import SocialLinks from '../components/SocialLinks';

export default function Hero({ onOpenCV, onOpenProjects, onOpenContact }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden w-full transition-colors"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-48 w-80 sm:w-96 h-80 sm:h-96 bg-[#168BFF]/10 dark:bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-80 sm:w-96 h-80 sm:h-96 bg-[#29B6F6]/10 dark:bg-[#29B6F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F5F9] dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] text-[11px] sm:text-xs font-semibold text-[#168BFF] dark:text-[#29B6F6] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
              <span>Hello, I'm</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F5F7FA] leading-[1.15] break-words transition-colors">
                Tajwar{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#29B6F6] to-[#60A5FA]">
                  Shaheen
                </span>
              </h1>
              <p className="mt-2.5 sm:mt-3 text-base sm:text-xl font-semibold text-[#168BFF] dark:text-[#29B6F6] transition-colors">
                {personalInfo.title}
              </p>
            </div>

            {/* Introduction prose */}
            <p className="text-sm sm:text-base md:text-lg text-[#475569] dark:text-[#A8B5C5] leading-relaxed max-w-xl transition-colors">
              {personalInfo.introduction}
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_-5px_rgba(22,139,255,0.5)] transition-all duration-200 active:scale-95 cursor-pointer text-center"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-[#0D1E30] hover:bg-[#F1F5F9] dark:hover:bg-[#0A1929] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#168BFF] text-[#0F172A] dark:text-[#F5F7FA] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-center shadow-sm dark:shadow-none"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-[#168BFF] dark:text-[#29B6F6]" />
              </a>
            </div>

            {/* Social links row */}
            <div className="pt-3 sm:pt-4 flex flex-col xs:flex-row xs:items-center gap-2.5 sm:gap-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-[#A8B5C5]/70">
                Connect with me:
              </span>
              <SocialLinks links={socialLinks} variant="icons-only" />
            </div>
          </motion.div>

          {/* Right Column: Visual Frame & Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative my-4 sm:my-0"
          >
            {/* Ambient background glow ring */}
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#168BFF]/15 to-[#29B6F6]/15 blur-2xl pointer-events-none" />

            {/* Profile Frame with subtle float motion */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-52 h-52 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl p-2 bg-gradient-to-b from-[#E2E8F0] via-white to-[#168BFF]/25 dark:from-[#18344D] dark:via-[#0D1E30] dark:to-[#168BFF]/40 shadow-xl dark:shadow-[0_0_40px_-5px_rgba(22,139,255,0.35)] transition-colors"
            >
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#F1F5F9] dark:bg-[#0A1929] border border-[#E2E8F0] dark:border-[#18344D] relative">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white to-[#F1F5F9] dark:from-[#0D1E30] dark:to-[#0A1929]">
                    <div className="w-16 h-16 rounded-2xl bg-[#168BFF]/20 border border-[#168BFF] flex items-center justify-center text-[#168BFF] dark:text-[#29B6F6] mb-3">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-[#0F172A] dark:text-[#F5F7FA]">{personalInfo.name}</span>
                    <span className="text-xs text-[#168BFF] dark:text-[#29B6F6] mt-1">{personalInfo.title}</span>
                  </div>
                )}

                {/* Subtle corner highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 dark:from-[#06111F]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge: Creative Developer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-3 -left-1 xs:-left-3 sm:-bottom-5 sm:-left-6 px-2.5 xs:px-3.5 py-1.5 xs:py-2 rounded-xl bg-white/95 dark:bg-[#0D1E30]/95 backdrop-blur-md border border-[#E2E8F0] dark:border-[#18344D] shadow-lg dark:shadow-xl flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs font-semibold text-[#0F172A] dark:text-[#F5F7FA] transition-colors"
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-lg bg-[#168BFF]/15 dark:bg-[#168BFF]/20 border border-[#168BFF]/40 dark:border-[#168BFF]/50 flex items-center justify-center text-[#168BFF] dark:text-[#29B6F6] shrink-0">
                  <Laptop className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                </div>
                <span className="whitespace-nowrap">Creative Developer</span>
              </motion.div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-2.5 -right-1 xs:-right-3 sm:-top-4 sm:-right-4 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-xl bg-white/95 dark:bg-[#0D1E30]/95 backdrop-blur-md border border-[#E2E8F0] dark:border-[#18344D] shadow-lg dark:shadow-xl flex items-center gap-1.5 text-[10px] xs:text-[11px] font-medium text-[#475569] dark:text-[#A8B5C5] transition-colors"
              >
                <MapPin className="w-3 h-3 text-[#168BFF] dark:text-[#29B6F6] shrink-0" />
                <span className="whitespace-nowrap">{personalInfo.location}</span>
              </motion.div>
            </motion.div>

            {/* Decorative script text below photo */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 sm:mt-8 text-xs sm:text-sm italic font-serif text-[#168BFF] dark:text-[#29B6F6] tracking-wide"
            >
              "Let's Build Something Great"
            </motion.p>
          </motion.div>
        </div>

        {/* Quick Highlights Strip Below Split */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-20 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0D1E30]/80 border border-[#E2E8F0] dark:border-[#18344D] shadow-sm dark:shadow-none backdrop-blur-sm transition-colors"
        >
          <div className="flex items-center gap-3 p-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1F5F9] dark:bg-[#0A1929] border border-[#E2E8F0] dark:border-[#18344D] flex items-center justify-center text-[#168BFF] dark:text-[#29B6F6] shrink-0 transition-colors">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs text-[#475569] dark:text-[#A8B5C5]">Education</p>
              <p className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F5F7FA] truncate">{personalInfo.education} Certified</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1F5F9] dark:bg-[#0A1929] border border-[#E2E8F0] dark:border-[#18344D] flex items-center justify-center text-[#168BFF] shrink-0 transition-colors">
              <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs text-[#475569] dark:text-[#A8B5C5]">Specialization</p>
              <p className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F5F7FA] truncate">Web & Marketing</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1F5F9] dark:bg-[#0A1929] border border-[#E2E8F0] dark:border-[#18344D] flex items-center justify-center text-[#168BFF] dark:text-[#29B6F6] shrink-0 transition-colors">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs text-[#475569] dark:text-[#A8B5C5]">Interactive</p>
              <p className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F5F7FA] truncate">Modern React & 3D</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F1F5F9] dark:bg-[#0A1929] border border-[#E2E8F0] dark:border-[#18344D] flex items-center justify-center text-[#168BFF] shrink-0 transition-colors">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs text-[#475569] dark:text-[#A8B5C5]">Client Reach</p>
              <p className="text-xs sm:text-sm font-bold text-[#0F172A] dark:text-[#F5F7FA] truncate">Worldwide Ready</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
