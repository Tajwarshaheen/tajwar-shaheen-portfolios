import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails, onActionNotice }) {
  const [imageError, setImageError] = useState(false);

  const handleDemoClick = (e) => {
    e.stopPropagation();
    if (!project.liveUrl || project.liveUrl === '#') {
      onActionNotice?.({
        type: 'demo',
        projectTitle: project.title,
        message: `Live preview for "${project.title}" will open when you deploy your project URL. You can easily configure it in src/data/portfolioData.js.`,
      });
    } else {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    if (!project.githubUrl || project.githubUrl === '#') {
      onActionNotice?.({
        type: 'github',
        projectTitle: project.title,
        message: `GitHub repository link for "${project.title}" is configurable in src/data/portfolioData.js.`,
      });
    } else {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={() => onOpenDetails?.(project)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#168BFF] transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-[0_4px_35px_-5px_rgba(22,139,255,0.25)] cursor-pointer"
    >
      {/* Project Image Frame */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#F1F5F9] dark:bg-[#0A1929]">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white to-[#F1F5F9] dark:from-[#0D1E30] dark:to-[#0A1929] border-b border-[#E2E8F0] dark:border-[#18344D]">
            <Sparkles className="w-8 h-8 text-[#168BFF] dark:text-[#29B6F6] mb-2" />
            <span className="text-sm font-semibold text-[#0F172A] dark:text-[#F5F7FA]">{project.title}</span>
            <span className="text-xs text-[#475569] dark:text-[#A8B5C5] mt-1">{project.category}</span>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-slate-900/60 dark:bg-[#06111F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#168BFF] text-white text-xs font-semibold shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            View Project Details
          </span>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 dark:bg-[#06111F]/80 backdrop-blur-md border border-[#E2E8F0] dark:border-[#18344D] text-[11px] font-semibold text-[#168BFF] dark:text-[#29B6F6] transition-colors">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 xs:p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-xl font-bold text-[#0F172A] dark:text-[#F5F7FA] group-hover:text-[#168BFF] dark:group-hover:text-[#29B6F6] transition-colors duration-200">
            {project.title}
          </h3>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#475569] dark:text-[#A8B5C5] leading-relaxed line-clamp-2 transition-colors">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#0A1929] text-[#475569] dark:text-[#A8B5C5] border border-[#E2E8F0] dark:border-[#18344D]/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[#E2E8F0] dark:border-[#18344D]/70 flex items-center justify-between gap-2 sm:gap-3 transition-colors">
          <button
            type="button"
            onClick={handleDemoClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 xs:px-3 py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-white text-[11px] xs:text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(41,182,246,0.4)] cursor-pointer active:scale-95"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </button>

          <button
            type="button"
            onClick={handleGithubClick}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 xs:px-3 py-2 rounded-lg bg-[#F1F5F9] dark:bg-[#0A1929] hover:bg-[#E2E8F0] dark:hover:bg-[#18344D] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#168BFF] text-[#0F172A] dark:text-[#F5F7FA] text-[11px] xs:text-xs font-semibold transition-colors duration-200 cursor-pointer active:scale-95"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
