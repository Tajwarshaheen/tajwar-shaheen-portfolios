import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Phone,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | 'error' | null
  const [methodPreference, setMethodPreference] = useState('email'); // 'email' | 'whatsapp'

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding: ${prefilledSubject}`,
      }));
    }
  }, [prefilledSubject]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide more details (at least 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setSubmittedStatus('error');
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch (err) {
      // ignore
    }

    if (methodPreference === 'whatsapp') {
      const waText = encodeURIComponent(
        `Hi Tajwar, my name is ${formData.fullName} (${formData.email}).\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      );
      const waUrl = `https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${waText}`;
      window.open(waUrl, '_blank');
      setSubmittedStatus('success');
    } else {
      // Direct mailto link composition
      const subjectEncoded = encodeURIComponent(formData.subject);
      const bodyEncoded = encodeURIComponent(
        `Sender: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      window.location.href = mailtoUrl;
      setSubmittedStatus('success');
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-[#06111F] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          kicker="Get In Touch"
          title="Let's Discuss Your Next Project"
          highlightWord="Next Project"
          subtitle="Whether you have an upcoming project, freelance inquiry, or job opportunity, feel free to reach out anytime."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">Contact Me</h3>
              <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#A8B5C5] leading-relaxed">
                I am actively seeking professional opportunities, freelance collaborations, and brand partnerships. Send me an email, reach out via WhatsApp, or connect on social media.
              </p>
            </div>

            {/* Direct contact cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0D1E30] border border-[#18344D] hover:border-[#168BFF] transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(22,139,255,0.3)]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] sm:text-xs text-[#A8B5C5]">Email Me Directly</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#F5F7FA] group-hover:text-[#29B6F6] truncate transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923485617282"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0D1E30] border border-[#18344D] hover:border-[#29B6F6] transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(41,182,246,0.3)]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#29B6F6] group-hover:scale-105 transition-transform shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] sm:text-xs text-[#A8B5C5]">WhatsApp Quick Chat</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#F5F7FA] group-hover:text-[#29B6F6] truncate transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0D1E30] border border-[#18344D]">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0A1929] border border-[#18344D] flex items-center justify-center text-[#168BFF] shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] sm:text-xs text-[#A8B5C5]">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#F5F7FA] truncate">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div>
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#29B6F6] mb-2.5 sm:mb-3">
                Social Profiles & Networks
              </h4>
              <SocialLinks links={socialLinks} variant="with-label" />
            </div>
          </motion.div>

          {/* Right Column: Verified Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0D1E30] border border-[#18344D] shadow-[0_0_35px_-5px_rgba(22,139,255,0.2)]">
              {/* Form header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#18344D]">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#F5F7FA]">Send a Direct Message</h4>
                  <p className="text-xs text-[#A8B5C5]">
                    Fill out the fields below to initiate your inquiry.
                  </p>
                </div>

                {/* Workflow picker */}
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0A1929] border border-[#18344D] text-xs self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setMethodPreference('email')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      methodPreference === 'email'
                        ? 'bg-[#168BFF] text-white font-medium'
                        : 'text-[#A8B5C5] hover:text-[#F5F7FA]'
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethodPreference('whatsapp')}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      methodPreference === 'whatsapp'
                        ? 'bg-[#29B6F6] text-slate-950 font-semibold'
                        : 'text-[#A8B5C5] hover:text-[#F5F7FA]'
                    }`}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Status Alert Messages */}
              <AnimatePresence>
                {submittedStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-200">
                        {methodPreference === 'whatsapp'
                          ? 'Opening your message in WhatsApp...'
                          : 'Opening your default mail client with prefilled details...'}
                      </p>
                      <p className="mt-1 text-emerald-300/80">
                        Message prepared directly for <strong>{personalInfo.email}</strong>. If your mail client did not open automatically, click above to send directly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submittedStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                    <div>
                      <p className="font-semibold text-rose-200">Please review highlighted form errors</p>
                      <p className="mt-0.5 text-rose-300/80">
                        Ensure all required fields are filled out accurately before sending.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#A8B5C5] mb-1.5 sm:mb-2"
                    >
                      Full Name <span className="text-[#29B6F6]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A1929] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A8B5C5]/40 focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-[#18344D] focus:border-[#168BFF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#A8B5C5] mb-1.5 sm:mb-2"
                    >
                      Email Address <span className="text-[#29B6F6]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@company.com"
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A1929] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A8B5C5]/40 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-[#18344D] focus:border-[#168BFF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8B5C5] mb-1.5 sm:mb-2"
                  >
                    Subject <span className="text-[#29B6F6]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry / Web Development"
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A1929] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A8B5C5]/40 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#18344D] focus:border-[#168BFF]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#A8B5C5] mb-1.5 sm:mb-2"
                  >
                    Your Message <span className="text-[#29B6F6]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your brand, project timeline, and specific goals..."
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0A1929] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A8B5C5]/40 focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#18344D] focus:border-[#168BFF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Notice regarding backend delivery honesty */}
                <p className="text-[11px] text-[#A8B5C5]/70 italic">
                  Note: Clicking send prepares your message directly in {methodPreference === 'whatsapp' ? 'WhatsApp' : 'your mail application'} addressed to {personalInfo.email}.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_-5px_rgba(22,139,255,0.4)] transition-all duration-200 cursor-pointer active:scale-[0.99] text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via {methodPreference === 'whatsapp' ? 'WhatsApp' : 'Email'}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
