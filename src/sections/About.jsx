import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Compass,
  Target,
  MapPin,
  Mail,
  Clock,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo, aboutCards } from '../data/portfolioData';
import profileImage from '../assets/images/tajwar_profile_1793376652112.jpg';


const cardIconMap = {
  GraduationCap,
  Compass,
  Target,
};

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Background & Vision"
          title="A Little About Me"
          highlightWord="About Me"
          subtitle="Get to know the developer behind the code — passion, continuous education, and driven to create impactful digital web products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Workspace Image / Visual setup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0D1E30] border border-[#18344D] shadow-[0_0_35px_-5px_rgba(22,139,255,0.25)] group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0A1929]">
                {!imgError ? (
                  <img
                   src={profileImage}
                    alt="Tajwar's Developer Workspace Setup"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0D1E30] to-[#0A1929]">
                    <Sparkles className="w-8 h-8 text-[#29B6F6] mb-2" />
                    <span className="text-sm font-semibold text-[#F5F7FA]">Workspace Coding Setup</span>
                  </div>
                )}
              </div>

              {/* Caption banner */}
              <div className="p-3.5 sm:p-4 bg-[#0D1E30]/95 border-t border-[#18344D] flex items-center justify-between text-xs">
                <span className="font-mono text-[#A8B5C5]">Development Environment</span>
                <span className="text-[#29B6F6] font-medium">Modern Tech Stack</span>
              </div>
            </div>

            {/* Quick stats floating tag */}
            <div className="mt-3.5 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-[#0D1E30] border border-[#18344D] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-[#A8B5C5]">
                <Clock className="w-4 h-4 text-[#29B6F6] shrink-0" />
                <span>Status:</span>
              </div>
              <span className="text-xs font-semibold text-[#F5F7FA] text-right">{personalInfo.availability}</span>
            </div>
          </motion.div>

          {/* Biography & Metadata details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#A8B5C5] leading-relaxed">
              <p>{personalInfo.bioParagraph1}</p>
              <p>{personalInfo.bioParagraph2}</p>
            </div>

            {/* Key info pills / quick attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 sm:pt-2">
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1E30] border border-[#18344D] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-[#A8B5C5]">Location</span>
                  <p className="text-xs font-semibold text-[#F5F7FA] truncate">{personalInfo.location}</p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#0D1E30] border border-[#18344D] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#168BFF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] text-[#A8B5C5]">Direct Inquiries</span>
                  <p className="text-xs font-semibold text-[#F5F7FA] truncate">{personalInfo.email}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The 3 Specific Information Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {aboutCards.map((card, idx) => {
            const IconComp = cardIconMap[card.icon] || Compass;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(22,139,255,0.25)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] mb-4 sm:mb-5">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A8B5C5] uppercase">
                    0{idx + 1} // Detail
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA] mt-1">
                    {card.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#29B6F6] mt-0.5">
                    {card.subtitle}
                  </p>

                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#18344D]/70 text-[11px] text-[#A8B5C5] font-medium">
                  {card.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
