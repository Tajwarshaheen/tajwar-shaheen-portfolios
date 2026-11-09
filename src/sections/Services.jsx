import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Solutions & Offerings"
          title="What I Do"
          highlightWord="What I Do"
          subtitle="Combining technical engineering with digital marketing insights to build websites that look stunning and perform for businesses."
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onInquire={onSelectService}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#0D1E30] via-[#0A1929] to-[#0D1E30] border border-[#18344D] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#F5F7FA]">
              Need a tailored web solution for your brand?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B5C5]">
              Let's discuss your project requirements, timeline, and goals.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs font-semibold shadow-[0_0_20px_rgba(22,139,255,0.4)] transition-all shrink-0 cursor-pointer active:scale-95"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
