import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { journeyData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Academic Background"
          title="Education & Studies"
          highlightWord="Education"
          subtitle="Foundational academic certification and dedicated independent studies in computer science and software development."
        />

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {journeyData.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(22,139,255,0.25)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 sm:pb-4 border-b border-[#18344D]/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA]">{edu.title}</h3>
                    <p className="text-xs text-[#29B6F6] font-medium">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-xs font-mono text-[#A8B5C5]">{edu.period}</span>
                  <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-[#168BFF]/10 text-[#29B6F6] border border-[#168BFF]/30">
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 space-y-2.5 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-[#A8B5C5]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                    <span>{edu.location}</span>
                  </span>
                  <span className="text-[#18344D]">·</span>
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                    <span>{edu.field}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A8B5C5] leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Transparent note */}
          <div className="p-4 rounded-xl bg-[#0A1929] border border-[#18344D] flex items-start gap-3 text-xs text-[#A8B5C5]">
            <CheckCircle className="w-4 h-4 text-[#29B6F6] shrink-0 mt-0.5" />
            <div>
              <p className="text-[#F5F7FA] font-semibold">Self-Driven Continuous Learning</p>
              <p className="mt-0.5">
                Every line of code and concept in my projects is the result of focused practice, reading technical documentation, and exploring real-world development patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
