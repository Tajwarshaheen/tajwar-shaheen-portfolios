import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Send,
  Sparkles,
  Download,
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
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#29B6F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1E30] border border-[#18344D] text-xs font-semibold text-[#29B6F6]">
              <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
              <span>Hello, I'm</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F7FA] leading-[1.1]">
                Tajwar{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#29B6F6] to-[#60A5FA]">
                  Shaheen
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-semibold text-[#29B6F6]">
                {personalInfo.title}
              </p>
            </div>

            {/* Introduction prose */}
            <p className="text-base sm:text-lg text-[#A8B5C5] leading-relaxed max-w-xl">
              {personalInfo.introduction}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#168BFF] hover:bg-[#29B6F6] text-white text-sm font-semibold shadow-[0_0_25px_-5px_rgba(22,139,255,0.5)] transition-all duration-200 active:scale-95 cursor-pointer"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D1E30] hover:bg-[#0A1929] border border-[#18344D] hover:border-[#168BFF] text-[#F5F7FA] text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-[#29B6F6]" />
              </a>
            </div>

            {/* Social links row */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A8B5C5]/70">
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
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient background glow ring */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#168BFF]/20 to-[#29B6F6]/20 blur-2xl pointer-events-none" />

            {/* Profile Frame with subtle float motion */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-2 bg-gradient-to-b from-[#18344D] via-[#0D1E30] to-[#168BFF]/40 shadow-[0_0_40px_-5px_rgba(22,139,255,0.35)]"
            >
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0A1929] border border-[#18344D] relative">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0D1E30] to-[#0A1929]">
                    <div className="w-16 h-16 rounded-2xl bg-[#168BFF]/20 border border-[#168BFF] flex items-center justify-center text-[#29B6F6] mb-3">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-bold text-[#F5F7FA]">{personalInfo.name}</span>
                    <span className="text-xs text-[#29B6F6] mt-1">{personalInfo.title}</span>
                  </div>
                )}

                {/* Subtle corner highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111F]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Small Floating Badge: Creative Developer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#0D1E30]/95 backdrop-blur-md border border-[#18344D] shadow-xl flex items-center gap-2 text-xs font-semibold text-[#F5F7FA]"
              >
                <div className="w-6 h-6 rounded-lg bg-[#168BFF]/20 border border-[#168BFF]/50 flex items-center justify-center text-[#29B6F6]">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <span>Creative Developer</span>
              </motion.div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1.5 rounded-xl bg-[#0D1E30]/95 backdrop-blur-md border border-[#18344D] shadow-xl flex items-center gap-2 text-[11px] font-medium text-[#A8B5C5]"
              >
                <MapPin className="w-3 h-3 text-[#29B6F6]" />
                <span>{personalInfo.location}</span>
              </motion.div>
            </motion.div>

            {/* Decorative script text below photo */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 text-sm italic font-serif text-[#29B6F6] tracking-wide"
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
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-[#0D1E30]/80 border border-[#18344D] backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#A8B5C5]">Education</p>
              <p className="text-sm font-bold text-[#F5F7FA]">{personalInfo.education} Certified</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#168BFF] shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#A8B5C5]">Specialization</p>
              <p className="text-sm font-bold text-[#F5F7FA]">Web & Marketing</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#A8B5C5]">Interactive</p>
              <p className="text-sm font-bold text-[#F5F7FA]">Modern React & 3D</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#168BFF] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#A8B5C5]">Client Reach</p>
              <p className="text-sm font-bold text-[#F5F7FA]">Worldwide Ready</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
