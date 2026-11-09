import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Layout,
  Smartphone,
  Sparkles,
  Share2,
  Megaphone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const serviceIconMap = {
  Globe,
  Layout,
  Smartphone,
  Sparkles,
  Share2,
  Megaphone,
};

export default function ServiceCard({ service, index, onInquire }) {
  const IconComponent = serviceIconMap[service.icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between h-full p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(22,139,255,0.25)]"
    >
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0A1929] border border-[#18344D] group-hover:border-[#29B6F6] flex items-center justify-center text-[#168BFF] group-hover:text-[#29B6F6] group-hover:bg-[#168BFF]/10 transition-all duration-300 shrink-0">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-xs font-mono text-[#A8B5C5]/60">0{index + 1}</span>
        </div>

        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#F5F7FA] group-hover:text-[#29B6F6] transition-colors duration-200">
          {service.title}
        </h3>

        <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed">
          {service.description}
        </p>

        {service.features && (
          <ul className="mt-5 space-y-2 border-t border-[#18344D]/80 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-[#A8B5C5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29B6F6] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-[#18344D]/60 flex items-center justify-between">
        <span className="text-xs font-medium text-[#29B6F6]">Custom Solution</span>
        <button
          onClick={() => onInquire?.(service.title)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#A8B5C5] group-hover:text-[#F5F7FA] transition-colors cursor-pointer"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
