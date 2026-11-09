import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVModal from './components/CVModal';
import CustomizationGuideModal from './components/CustomizationGuideModal';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedServiceSubject, setSelectedServiceSubject] = useState('');
  const [actionNotice, setActionNotice] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenProjectDetails = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceSubject(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActionNotice = (notice) => {
    setActionNotice(notice);
    setTimeout(() => {
      setActionNotice(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#06111F] text-[#F5F7FA] font-sans antialiased selection:bg-[#168BFF]/30 selection:text-[#29B6F6]">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenCV={() => setIsCVModalOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative w-full overflow-x-hidden">
        <Hero
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenProjects={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          onOpenContact={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        />

        <About />

        <Skills />

        <Services onSelectService={handleSelectService} />

        <Projects
          onOpenDetails={handleOpenProjectDetails}
          onActionNotice={handleActionNotice}
        />

        <Experience />

        <Education />

        <Testimonials />

        <Contact prefilledSubject={selectedServiceSubject} />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onActionNotice={handleActionNotice}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <CustomizationGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Toast Notice for Project Links or Live Demos */}
      {actionNotice && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-sm z-50 p-4 rounded-xl bg-[#0D1E30] border border-[#168BFF] shadow-[0_0_25px_rgba(22,139,255,0.4)] text-xs text-[#F5F7FA]">
          <div className="font-semibold text-[#29B6F6] mb-1">
            {actionNotice.type === 'demo' ? 'Live Demo Notice' : 'Source Code Notice'}
          </div>
          <p className="text-[#A8B5C5] leading-relaxed">{actionNotice.message}</p>
        </div>
      )}
    </div>
  );
}
