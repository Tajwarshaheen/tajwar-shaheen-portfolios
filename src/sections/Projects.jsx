import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenDetails, onActionNotice }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Development', 'Interactive & Games'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.filterTag === activeFilter);

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#06111F] relative w-full overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Portfolio & Case Studies"
          title="Featured Projects"
          highlightWord="Projects"
          subtitle="A showcase of functional web applications, interactive games, and developer experiences built with modern technologies."
        />

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#168BFF] text-white shadow-md'
                    : 'bg-white dark:bg-[#0D1E30] text-[#475569] dark:text-[#A8B5C5] hover:text-[#0F172A] dark:hover:text-[#F5F7FA] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#168BFF]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
              onActionNotice={onActionNotice}
            />
          ))}
        </div>

        {/* Project note */}
        <div className="mt-12 p-4 rounded-xl bg-white/80 dark:bg-[#0D1E30]/60 border border-[#E2E8F0] dark:border-[#18344D] shadow-sm dark:shadow-none text-center text-xs text-[#475569] dark:text-[#A8B5C5] transition-colors">
          <span>
            Looking for something specific or want to collaborate on a new project?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#168BFF] dark:text-[#29B6F6] font-medium hover:underline"
            >
              Get in touch directly
            </a>
            .
          </span>
        </div>
      </div>
    </section>
  );
}
