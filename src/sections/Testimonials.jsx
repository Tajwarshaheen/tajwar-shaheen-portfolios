import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star, Clock, Handshake, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const hasReviews = testimonialsData.reviews && testimonialsData.reviews.length > 0;

  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Social Proof & Trust"
          title="Client Feedback"
          highlightWord="Feedback"
          subtitle="Honest relationships and committed delivery for every brand and client collaboration."
        />

        <div className="max-w-2xl mx-auto">
          {!hasReviews ? (
            /* Required Initial State */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 xs:p-7 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0D1E30] border border-[#18344D] text-center shadow-[0_0_35px_-5px_rgba(22,139,255,0.2)]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] mx-auto mb-4 sm:mb-6 shadow-inner">
                <MessageSquareQuote className="w-6 h-6 sm:w-8 sm:h-8 text-[#168BFF]" />
              </div>

              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#F5F7FA]">
                {testimonialsData.notice}
              </h3>

              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed max-w-lg mx-auto">
                {testimonialsData.subNotice}
              </p>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#18344D] flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-[#A8B5C5]">
                <div className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-[#29B6F6] shrink-0" />
                  <span>Open for First International Collabs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#168BFF] shrink-0" />
                  <span>100% Commitment & Quality</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Structured dynamic reviews for future additions */
            <div className="grid grid-cols-1 gap-6">
              {testimonialsData.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0D1E30] border border-[#18344D]"
                >
                  <p className="text-sm text-[#A8B5C5] italic">"{review.feedback}"</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#F5F7FA]">{review.clientName}</h4>
                      <p className="text-xs text-[#29B6F6]">{review.clientRole}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
