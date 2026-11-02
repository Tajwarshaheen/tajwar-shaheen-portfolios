import React from 'react';
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
};

export default function SocialLinks({ links, variant = 'icons-only', className = '' }) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((item) => {
        const IconComponent = iconMap[item.icon] || ExternalLink;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Tajwar's ${item.name} profile`}
            className={`group relative flex items-center justify-center transition-all duration-300 ${
              variant === 'with-label'
                ? 'px-3.5 py-2 rounded-lg bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] text-sm text-[#A8B5C5] hover:text-[#F5F7FA] gap-2 hover:shadow-[0_0_15px_-3px_rgba(22,139,255,0.3)]'
                : 'w-10 h-10 rounded-lg bg-[#0D1E30] border border-[#18344D] hover:border-[#29B6F6] text-[#A8B5C5] hover:text-[#29B6F6] hover:bg-[#0A1929] hover:shadow-[0_0_20px_-3px_rgba(41,182,246,0.35)]'
            }`}
          >
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            {variant === 'with-label' && <span className="font-medium">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
