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

/**
 * Official WhatsApp Vector Icon (Brand Standard SVG)
 */
function WhatsAppIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

const iconMap = {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  WhatsApp: WhatsAppIcon,
  Whatsapp: WhatsAppIcon,
};

export default function SocialLinks({ links, variant = 'icons-only', className = '' }) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {links.map((item) => {
        const isWhatsApp =
          item.name?.toLowerCase() === 'whatsapp' ||
          item.icon?.toLowerCase() === 'whatsapp';
        const IconComponent = iconMap[item.icon] || (isWhatsApp ? WhatsAppIcon : ExternalLink);

        const isLinkedIn =
          item.name?.toLowerCase() === 'linkedin' ||
          item.icon?.toLowerCase() === 'linkedin';
        const isLinkedInColor = isLinkedIn || isWhatsApp;

        const buttonClasses =
          variant === 'with-label'
            ? isLinkedInColor
              ? 'px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#0A66C2] text-xs sm:text-sm text-[#475569] dark:text-[#A8B5C5] hover:text-[#0A66C2] hover:bg-[#F1F5F9] dark:hover:bg-[#0A1929] gap-1.5 sm:gap-2 shadow-sm dark:shadow-none'
              : 'px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#168BFF] text-xs sm:text-sm text-[#475569] dark:text-[#A8B5C5] hover:text-[#168BFF] dark:hover:text-[#F5F7FA] hover:bg-[#F1F5F9] dark:hover:bg-[#0A1929] gap-1.5 sm:gap-2 shadow-sm dark:shadow-none'
            : isLinkedInColor
              ? 'w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#0A66C2] text-[#475569] dark:text-[#A8B5C5] hover:text-[#0A66C2] hover:bg-[#F1F5F9] dark:hover:bg-[#0A1929] shadow-sm dark:shadow-none shrink-0'
              : 'w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white dark:bg-[#0D1E30] border border-[#E2E8F0] dark:border-[#18344D] hover:border-[#168BFF] text-[#475569] dark:text-[#A8B5C5] hover:text-[#168BFF] dark:hover:text-[#29B6F6] hover:bg-[#F1F5F9] dark:hover:bg-[#0A1929] shadow-sm dark:shadow-none shrink-0';

        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isWhatsApp ? 'Chat with Tajwar on WhatsApp' : `Visit Tajwar's ${item.name} profile`}
            className={`group relative flex items-center justify-center transition-all duration-300 cursor-pointer ${buttonClasses}`}
          >
            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110 shrink-0" />
            {variant === 'with-label' && <span className="font-medium">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
