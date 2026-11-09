import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/portfolioData';

const categories = ['All', 'Frontend', 'Styling', 'Core Language', 'Programming', 'Marketing', 'Core Skill'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[350px] sm:h-[400px] bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Capabilities & Tooling"
          title="Technologies & Tools"
          highlightWord="Technologies"
          subtitle="A solid foundation across modern frontend web development, programming languages, and audience-growth marketing strategies."
        />

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#168BFF] text-white shadow-[0_0_15px_rgba(22,139,255,0.4)]'
                    : 'bg-[#0D1E30] text-[#A8B5C5] hover:text-[#F5F7FA] border border-[#18344D] hover:border-[#168BFF]/50'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Skills footer reassurance */}
        <div className="mt-8 sm:mt-12 text-center text-xs text-[#A8B5C5] flex items-center justify-center gap-2 px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#29B6F6] shrink-0" />
          <span>Focused on continuous hands-on practice, clean architectural patterns, and real-world project delivery.</span>
        </div>
      </div>
    </section>
  );
}
