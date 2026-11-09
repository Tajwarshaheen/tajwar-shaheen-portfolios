import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Layers, Sparkles, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { journeyData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Practical Experience"
          title="My Development Journey"
          highlightWord="Journey"
          subtitle="Real hands-on development through self-learning, engineering practical applications, and digital marketing exploration."
        />

        {/* Timeline wrapper */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute top-4 bottom-4 left-3.5 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#168BFF] via-[#29B6F6] to-[#18344D]" />

          <div className="space-y-6 sm:space-y-12">
            {journeyData.experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0D1E30] border-2 border-[#168BFF] flex items-center justify-center text-[#29B6F6] z-10 shadow-[0_0_15px_rgba(22,139,255,0.4)]">
                    <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-9 sm:ml-0 sm:w-[calc(50%-2rem)] p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(22,139,255,0.25)] ${
                      isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#29B6F6] font-semibold uppercase">
                        {item.period}
                      </span>
                      <span className="text-xs text-[#A8B5C5] font-medium">{item.role}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA]">{item.title}</h3>

                    <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed">
                      {item.description}
                    </p>

                    {item.skills && (
                      <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#18344D]/80 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#0A1929] text-[#29B6F6] border border-[#18344D]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
