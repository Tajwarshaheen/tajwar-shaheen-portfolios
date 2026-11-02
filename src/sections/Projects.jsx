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
    <section id="projects" className="py-20 lg:py-28 bg-[#06111F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Portfolio & Case Studies"
          title="Featured Projects"
          highlightWord="Projects"
          subtitle="A showcase of functional web applications, interactive games, and developer experiences built with modern technologies."
        />

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#168BFF] text-white shadow-[0_0_20px_rgba(22,139,255,0.4)]'
                    : 'bg-[#0D1E30] text-[#A8B5C5] hover:text-[#F5F7FA] border border-[#18344D] hover:border-[#168BFF]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="mt-12 p-4 rounded-xl bg-[#0D1E30]/60 border border-[#18344D] text-center text-xs text-[#A8B5C5]">
          <span>
            Looking for something specific or want to collaborate on a new project?{' '}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#29B6F6] font-medium hover:underline"
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
