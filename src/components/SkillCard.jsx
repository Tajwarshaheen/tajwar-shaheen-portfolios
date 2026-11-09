import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Code,
  Atom,
  Wind,
  Terminal,
  Cpu,
  TrendingUp,
  Share2,
  Smartphone,
  Layers,
} from 'lucide-react';

const skillIconMap = {
  FileCode2,
  Palette,
  Code,
  Atom,
  Wind,
  Terminal,
  Cpu,
  TrendingUp,
  Share2,
  Smartphone,
};

export default function SkillCard({ skill, index }) {
  const IconComponent = skillIconMap[skill.icon] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(22,139,255,0.28)]"
    >
      <div className="flex items-start justify-between gap-2.5 mb-2.5 sm:mb-3">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0A1929] border border-[#18344D] group-hover:border-[#29B6F6] flex items-center justify-center text-[#29B6F6] transition-colors duration-300 group-hover:text-[#F5F7FA] group-hover:bg-[#168BFF]/10 shrink-0">
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A8B5C5]/80 uppercase truncate">
          {skill.category}
        </span>
      </div>

      <div>
        <h3 className="text-sm sm:text-base font-semibold text-[#F5F7FA] group-hover:text-[#29B6F6] transition-colors duration-200">
          {skill.name}
        </h3>
        <p className="mt-1 sm:mt-1.5 text-xs text-[#A8B5C5] leading-relaxed line-clamp-2">
          {skill.description}
        </p>
      </div>

      <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#18344D]/60 flex items-center justify-between text-[11px] text-[#A8B5C5]">
        <span className="font-medium text-[#29B6F6]/90 text-[10px] sm:text-[11px]">{skill.badge}</span>
        <span className="text-[10px] opacity-75">Active Stack</span>
      </div>
    </motion.div>
  );
}
