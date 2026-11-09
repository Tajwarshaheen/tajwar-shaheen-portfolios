import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  kicker,
  title,
  highlightWord,
  subtitle,
  align = 'center',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-2 sm:mb-3 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase text-[#29B6F6]"
        >
          <span className="w-4 sm:w-6 h-[2px] bg-[#168BFF]" aria-hidden="true" />
          <span>{kicker}</span>
          {isCenter && <span className="w-4 sm:w-6 h-[2px] bg-[#168BFF]" aria-hidden="true" />}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] break-words"
        style={{ textWrap: 'balance' }}
      >
        {highlightWord ? (
          <>
            {title.replace(highlightWord, '')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#29B6F6] to-[#60A5FA]">
              {highlightWord}
            </span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#A8B5C5] leading-relaxed"
          style={{ textWrap: 'balance' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
