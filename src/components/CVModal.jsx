import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Eye,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillsData, journeyData } from '../data/portfolioData';
import { downloadCVPdf } from '../utils/downloadCV';

export default function CVModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('graphic'); // 'graphic' | 'structured'

  if (!isOpen) return null;

  const handlePrint = () => {
    window.open('/Tajwar_CV.pdf', '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (e) => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }
    downloadCVPdf(e);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-3 sm:p-6 overflow-y-auto bg-[#06111F]/85 backdrop-blur-md">
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
          className="relative w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden rounded-2xl bg-[#0D1E30] border border-[#18344D] shadow-[0_0_50px_rgba(22,139,255,0.25)] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-[#18344D] bg-[#0A1929] shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#168BFF]/10 border border-[#168BFF] flex items-center justify-center text-[#29B6F6] shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-[#F5F7FA] truncate">
                  Official Curriculum Vitae
                </h3>
                <p className="text-[11px] sm:text-xs text-[#A8B5C5] truncate">
                  {personalInfo.name} — {personalInfo.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Switcher */}
              <div className="flex items-center p-1 rounded-lg bg-[#06111F] border border-[#18344D] text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('graphic')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'graphic'
                      ? 'bg-[#168BFF] text-white font-medium'
                      : 'text-[#A8B5C5] hover:text-[#F5F7FA]'
                  }`}
                >
                  Graphic CV
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('structured')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'structured'
                      ? 'bg-[#168BFF] text-white font-medium'
                      : 'text-[#A8B5C5] hover:text-[#F5F7FA]'
                  }`}
                >
                  Details
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#A8B5C5] hover:text-[#F5F7FA] hover:bg-[#18344D] transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-sm text-[#A8B5C5]">
            {activeTab === 'graphic' ? (
              /* Exact Official Graphic CV Preview */
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#A8B5C5]">
                  <div className="flex items-center gap-1.5 text-[#29B6F6]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-medium">Original Single-Page Graphic CV</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A8B5C5]/70">
                    PDF format • 1414 × 2000 px
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-[#0A1929] border border-[#18344D] shadow-2xl flex items-center justify-center p-1 sm:p-2">
                  <img
                    src="/assets/aistudio/White_Cream_And_Beige_Geometric_Minimalist_Graphic_Designer_Resume_7c716fe1.jpg"
                    alt="Tajwar Shaheen Official Graphic CV"
                    className="w-full max-w-xl h-auto rounded-lg object-contain shadow-lg"
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/30 text-xs text-[#29B6F6] flex items-center justify-between gap-3">
                  <span>
                    This exact graphic CV is compiled into <strong className="text-white">Tajwar_CV.pdf</strong> and ready for immediate download.
                  </span>
                  <a
                    href="/Tajwar_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F5F7FA] hover:text-[#29B6F6] underline font-medium shrink-0"
                  >
                    <span>Open Full PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              /* Structured breakdown text view */
              <div className="space-y-5 sm:space-y-6">
                {/* Header section */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#06111F] border border-[#18344D]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#F5F7FA]">
                        {personalInfo.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#29B6F6] font-medium">
                        {personalInfo.title}
                      </p>
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="flex items-center gap-2 text-[#A8B5C5]">
                        <MapPin className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                        <span>{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A8B5C5]">
                        <Mail className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                        <span className="truncate">{personalInfo.email}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#A8B5C5]">
                    {personalInfo.introduction}
                  </p>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29B6F6] mb-2.5 sm:mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A1929] border border-[#18344D]">
                    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1.5">
                      <div>
                        <h5 className="font-semibold text-xs sm:text-sm text-[#F5F7FA]">
                          {journeyData.education[0]?.title}
                        </h5>
                        <p className="text-xs text-[#A8B5C5]">
                          {journeyData.education[0]?.institution}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#168BFF]/10 text-[#29B6F6] border border-[#168BFF]/30">
                        {journeyData.education[0]?.period}
                      </span>
                    </div>
                    <p className="text-xs text-[#A8B5C5] mt-2">
                      {journeyData.education[0]?.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29B6F6] mb-2.5 sm:mb-3">
                    <Award className="w-4 h-4" />
                    <span>Key Competencies</span>
                  </div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                    {skillsData.map((s) => (
                      <div
                        key={s.id}
                        className="flex items-center gap-2 p-2 rounded-lg bg-[#0A1929] border border-[#18344D]/80 text-xs text-[#F5F7FA]"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                        <span className="truncate">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical experience */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29B6F6] mb-2.5 sm:mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span>Focus & Practical Experience</span>
                  </div>
                  <div className="space-y-2.5">
                    {journeyData.experience.map((exp) => (
                      <div
                        key={exp.id}
                        className="p-3 sm:p-3.5 rounded-xl bg-[#0A1929] border border-[#18344D]"
                      >
                        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1">
                          <h5 className="font-semibold text-xs text-[#F5F7FA]">{exp.title}</h5>
                          <span className="text-[10px] text-[#29B6F6]">{exp.role}</span>
                        </div>
                        <p className="text-xs text-[#A8B5C5] mt-1.5">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer actions */}
          <div className="p-3.5 sm:p-4 border-t border-[#18344D] bg-[#0A1929] flex flex-col-reverse xs:flex-row items-stretch xs:items-center justify-between gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-lg bg-[#06111F] hover:bg-[#18344D] text-[#A8B5C5] hover:text-[#F5F7FA] border border-[#18344D] text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Open PDF</span>
            </button>

            <a
              href="/Tajwar_CV.pdf"
              download="Tajwar_CV.pdf"
              onClick={handleDownload}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs font-semibold shadow-[0_0_20px_rgba(22,139,255,0.4)] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (Tajwar_CV.pdf)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
