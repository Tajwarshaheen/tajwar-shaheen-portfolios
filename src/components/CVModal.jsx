import React from 'react';
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
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillsData, journeyData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // ignore
    }

    // Generate formatted printable text/markdown cv or trigger download
    const cvText = `# CURRICULUM VITAE - ${personalInfo.name.toUpperCase()}
${personalInfo.title}
Location: ${personalInfo.location} | Email: ${personalInfo.email}

---

## PROFESSIONAL SUMMARY
${personalInfo.introduction}

---

## EDUCATION
* ${journeyData.education[0]?.title} - ${journeyData.education[0]?.institution} (${journeyData.education[0]?.period})
  ${journeyData.education[0]?.description}

---

## TECHNICAL SKILLS
* Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS, Responsive Web Design
* Programming: Basic Python, C++
* Marketing: Digital Marketing, Social Media Marketing, Brand Strategy

---

## RECENT PROJECTS & EXPERIENCE
* Next Planner Academy (Online Learning Platform) - React.js, Tailwind CSS
* Taju Runner 3D (Interactive Runner Game) - JavaScript, 3D Game Mechanics
* Text-to-Speech Web Application - Speech Synthesis API, React.js
* Personal Developer Portfolio - React.js, Vite, Framer Motion
`;

    const blob = new Blob([cvText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Tajwar_Shaheen_Resume.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#06111F]/85 backdrop-blur-md">
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
          className="relative w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-[#0D1E30] border border-[#18344D] shadow-[0_0_50px_rgba(22,139,255,0.25)] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#18344D] bg-[#0A1929]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#168BFF]/10 border border-[#168BFF] flex items-center justify-center text-[#29B6F6]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#F5F7FA]">Curriculum Vitae Preview</h3>
                <p className="text-xs text-[#A8B5C5]">{personalInfo.name} — {personalInfo.title}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A8B5C5] hover:text-[#F5F7FA] hover:bg-[#18344D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Resume Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-[#A8B5C5]">
            {/* Header section */}
            <div className="p-5 rounded-xl bg-[#06111F] border border-[#18344D]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xl font-bold text-[#F5F7FA]">{personalInfo.name}</h4>
                  <p className="text-sm text-[#29B6F6] font-medium">{personalInfo.title}</p>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#A8B5C5]">
                    <MapPin className="w-3.5 h-3.5 text-[#168BFF]" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#A8B5C5]">
                    <Mail className="w-3.5 h-3.5 text-[#168BFF]" />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[#A8B5C5]">
                {personalInfo.introduction}
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29B6F6] mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0A1929] border border-[#18344D]">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-[#F5F7FA]">{journeyData.education[0]?.title}</h5>
                    <p className="text-xs text-[#A8B5C5]">{journeyData.education[0]?.institution}</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#168BFF]/10 text-[#29B6F6] border border-[#168BFF]/30">
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
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29B6F6] mb-3">
                <Award className="w-4 h-4" />
                <span>Key Competencies</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skillsData.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-2 p-2 rounded-lg bg-[#0A1929] border border-[#18344D]/80 text-xs text-[#F5F7FA]"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical experience */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#29B6F6] mb-3">
                <Briefcase className="w-4 h-4" />
                <span>Focus & Practical Experience</span>
              </div>
              <div className="space-y-2.5">
                {journeyData.experience.map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-[#0A1929] border border-[#18344D]">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold text-xs text-[#F5F7FA]">{exp.title}</h5>
                      <span className="text-[10px] text-[#29B6F6]">{exp.role}</span>
                    </div>
                    <p className="text-xs text-[#A8B5C5] mt-1.5">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notice to customize */}
            <div className="p-3 rounded-lg bg-[#168BFF]/10 border border-[#168BFF]/30 text-xs text-[#29B6F6]">
              Tip: Place your actual <code className="text-white font-mono">Tajwar_Shaheen_CV.pdf</code> inside the <code className="text-white font-mono">public/</code> directory to link an official PDF file directly.
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-4 border-t border-[#18344D] bg-[#0A1929] flex items-center justify-between gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#06111F] hover:bg-[#18344D] text-[#A8B5C5] hover:text-[#F5F7FA] border border-[#18344D] text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Resume</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs font-semibold shadow-[0_0_20px_rgba(22,139,255,0.4)] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV File</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
