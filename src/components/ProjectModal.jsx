import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, Globe } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose, onActionNotice }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-4 sm:p-6 overflow-y-auto bg-[#06111F]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl bg-[#0D1E30] border border-[#18344D] shadow-[0_0_50px_rgba(22,139,255,0.25)] z-10 my-auto"
        >
          {/* Header image */}
          <div className="relative aspect-video w-full bg-[#0A1929] overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-[#06111F]/80 text-[#F5F7FA] hover:text-[#29B6F6] hover:bg-[#06111F] border border-[#18344D] transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="absolute bottom-3 left-3 sm:left-4 px-2.5 sm:px-3 py-1 rounded-md bg-[#06111F]/80 backdrop-blur-md border border-[#18344D] text-[11px] sm:text-xs font-semibold text-[#29B6F6]">
              {project.category}
            </div>
          </div>

          {/* Modal body */}
          <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">{project.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#29B6F6] mb-2 sm:mb-3">
                  Key Capabilities & Highlights
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F7FA]">
                      <CheckCircle2 className="w-4 h-4 text-[#168BFF] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#A8B5C5] mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-2.5 py-1 rounded-md bg-[#0A1929] border border-[#18344D] text-[11px] sm:text-xs text-[#29B6F6] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-[#18344D] flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-lg bg-[#0A1929] hover:bg-[#18344D] text-xs font-medium text-[#A8B5C5] hover:text-[#F5F7FA] border border-[#18344D] transition-colors text-center"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!project.githubUrl || project.githubUrl === '#') {
                    onActionNotice?.({
                      type: 'github',
                      projectTitle: project.title,
                      message: `Configure your GitHub repository for "${project.title}" in src/data/portfolioData.js.`,
                    });
                  } else {
                    window.open(project.githubUrl, '_blank');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-lg bg-[#0A1929] hover:bg-[#18344D] text-xs font-semibold text-[#F5F7FA] border border-[#18344D] hover:border-[#168BFF] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!project.liveUrl || project.liveUrl === '#') {
                    onActionNotice?.({
                      type: 'demo',
                      projectTitle: project.title,
                      message: `Live preview for "${project.title}" will open when you deploy your app URL. Update liveUrl in src/data/portfolioData.js.`,
                    });
                  } else {
                    window.open(project.liveUrl, '_blank');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-xs font-semibold text-white shadow-[0_0_20px_rgba(22,139,255,0.4)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
