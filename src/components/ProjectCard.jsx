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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(22,139,255,0.3)] cursor-pointer"
    >
      {/* Project Image Frame */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0A1929]">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0D1E30] to-[#0A1929] border-b border-[#18344D]">
            <Sparkles className="w-8 h-8 text-[#29B6F6] mb-2" />
            <span className="text-sm font-semibold text-[#F5F7FA]">{project.title}</span>
            <span className="text-xs text-[#A8B5C5] mt-1">{project.category}</span>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#06111F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#168BFF] text-white text-xs font-semibold shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            View Project Details
          </span>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#06111F]/80 backdrop-blur-md border border-[#18344D] text-[11px] font-medium text-[#29B6F6]">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#F5F7FA] group-hover:text-[#29B6F6] transition-colors duration-200">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded bg-[#0A1929] text-[#A8B5C5] border border-[#18344D]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-[#18344D]/70 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDemoClick}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(41,182,246,0.4)] cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </button>

          <button
            type="button"
            onClick={handleGithubClick}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0A1929] hover:bg-[#18344D] border border-[#18344D] hover:border-[#168BFF] text-[#F5F7FA] text-xs font-semibold transition-colors duration-200 cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
