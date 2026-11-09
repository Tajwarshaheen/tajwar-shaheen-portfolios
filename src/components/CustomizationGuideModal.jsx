import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Code2,
  Terminal,
  Image as ImageIcon,
  FolderPlus,
  Mail,
  FileText,
  CloudUpload,
  Check,
  Copy,
} from 'lucide-react';

export default function CustomizationGuideModal({ isOpen, onClose }) {
  const [copiedSection, setCopiedSection] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const steps = [
    {
      id: 'vscode',
      title: '1. How to Run the Project in VS Code',
      icon: Terminal,
      content: (
        <div className="space-y-2 text-xs text-[#A8B5C5]">
          <p>Open your project folder in VS Code, open a terminal (`Ctrl + \`` or `Cmd + \``), and run:</p>
          <div className="relative p-3 rounded-lg bg-[#06111F] font-mono text-xs text-[#29B6F6] border border-[#18344D]">
            <code>npm install</code>
            <br />
            <code>npm run dev</code>
            <button
              onClick={() => copyToClipboard('npm install && npm run dev', 'vscode')}
              className="absolute right-2 top-2 p-1 rounded bg-[#0D1E30] hover:bg-[#18344D] text-[#A8B5C5] hover:text-[#F5F7FA]"
            >
              {copiedSection === 'vscode' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          <p>Then open <span className="text-[#29B6F6]">http://localhost:3000</span> in your browser.</p>
        </div>
      ),
    },
    {
      id: 'profile',
      title: '2. How to Replace Your Profile Image (profile.png)',
      icon: ImageIcon,
      content: (
        <div className="space-y-2 text-xs text-[#A8B5C5]">
          <p>
            Simply place your photo inside the <code className="text-[#F5F7FA] font-mono">public/</code> directory and name it <code className="text-[#29B6F6] font-mono">profile.png</code>.
          </p>
          <p>
            Vite serves all files in <code className="text-[#F5F7FA] font-mono">public/</code> at root, so <code className="text-[#29B6F6] font-mono">/profile.png</code> will automatically update across the entire website without any code edits!
          </p>
        </div>
      ),
    },
    {
      id: 'links',
      title: '3. How to Update Email, Phone & Social Links',
      icon: Mail,
      content: (
        <div className="space-y-2 text-xs text-[#A8B5C5]">
          <p>
            Open <code className="text-[#F5F7FA] font-mono">src/data/portfolioData.js</code>. At the top of the file, customize your information:
          </p>
          <div className="p-3 rounded-lg bg-[#06111F] font-mono text-[11px] text-[#A8B5C5] border border-[#18344D]">
            <span className="text-blue-400">export const personalInfo</span> = &#123;<br />
            &nbsp;&nbsp;name: <span className="text-emerald-400">"Tajwar Shaheen"</span>,<br />
            &nbsp;&nbsp;email: <span className="text-emerald-400">"tajwarali804in@gmail.com"</span>,<br />
            &nbsp;&nbsp;phone: <span className="text-emerald-400">"+92 300 0000000"</span>,<br />
            &nbsp;&nbsp;whatsappNumber: <span className="text-emerald-400">"+923000000000"</span>,<br />
            &#125;;
          </div>
          <p>You can also edit each item in <code className="text-[#29B6F6] font-mono">socialLinks</code> with your exact LinkedIn, GitHub, Facebook, and Instagram URLs.</p>
        </div>
      ),
    },
    {
      id: 'projects',
      title: '4. How to Add New Projects',
      icon: FolderPlus,
      content: (
        <div className="space-y-2 text-xs text-[#A8B5C5]">
          <p>
            In <code className="text-[#F5F7FA] font-mono">src/data/portfolioData.js</code>, find the <code className="text-[#29B6F6] font-mono">projectsData</code> array. Add or edit an object:
          </p>
          <div className="p-3 rounded-lg bg-[#06111F] font-mono text-[11px] text-[#A8B5C5] border border-[#18344D] overflow-x-auto">
            &#123;<br />
            &nbsp;&nbsp;id: 5,<br />
            &nbsp;&nbsp;title: <span className="text-emerald-400">"Your New Project Name"</span>,<br />
            &nbsp;&nbsp;category: <span className="text-emerald-400">"Web Application"</span>,<br />
            &nbsp;&nbsp;description: <span className="text-emerald-400">"What this project does..."</span>,<br />
            &nbsp;&nbsp;image: <span className="text-emerald-400">"/projects/your-screenshot.jpg"</span>,<br />
            &nbsp;&nbsp;tags: [<span className="text-emerald-400">"React.js"</span>, <span className="text-emerald-400">"Tailwind CSS"</span>],<br />
            &nbsp;&nbsp;liveUrl: <span className="text-emerald-400">"https://your-demo-url.com"</span>,<br />
            &nbsp;&nbsp;githubUrl: <span className="text-emerald-400">"https://github.com/..."</span><br />
            &#125;
          </div>
          <p>Save project images in <code className="text-[#29B6F6] font-mono">public/projects/</code>.</p>
        </div>
      ),
    },
    {
      id: 'cv',
      title: '5. How to Add Your CV / Resume File',
      icon: FileText,
      content: (
        <div className="space-y-2 text-xs text-[#A8B5C5]">
          <p>
            Drop your PDF file into the <code className="text-[#F5F7FA] font-mono">public/</code> directory and name it <code className="text-[#29B6F6] font-mono">Tajwar_CV.pdf</code>.
          </p>
          <p>
            Users can also preview and download your official graphic CV PDF directly using the Download CV buttons.
          </p>
        </div>
      ),
    },
    {
      id: 'deploy',
      title: '6. How to Deploy the Website Online',
      icon: CloudUpload,
      content: (
        <div className="space-y-2 text-xs text-[#A8B5C5]">
          <p>You can deploy this React + Vite portfolio in 2 minutes for free on Vercel, Netlify, or GitHub Pages:</p>
          <ol className="list-decimal pl-4 space-y-1">
            <li>Push your code to a GitHub repository (<code className="text-[#29B6F6] font-mono">git push origin main</code>).</li>
            <li>Go to <span className="text-[#F5F7FA]">Vercel.com</span> or <span className="text-[#F5F7FA]">Netlify.com</span> and click "Import Project".</li>
            <li>Select your repository. Vite build settings will be auto-detected:
              <br /><span className="text-emerald-400 font-mono text-[11px]">Build command: npm run build | Output folder: dist</span>
            </li>
            <li>Click <strong>Deploy</strong> and your site will be live on a custom domain or free URL!</li>
          </ol>
        </div>
      ),
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-3 sm:p-6 overflow-y-auto bg-[#06111F]/85 backdrop-blur-md">
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
          className="relative w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-[#0D1E30] border border-[#18344D] shadow-[0_0_50px_rgba(22,139,255,0.25)] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-[#18344D] bg-[#0A1929] shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#168BFF]/10 border border-[#168BFF] flex items-center justify-center text-[#29B6F6] shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-[#F5F7FA] truncate">Portfolio Setup & Customization Guide</h3>
                <p className="text-[11px] sm:text-xs text-[#A8B5C5] truncate">VS Code, images, links, projects & deployment</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A8B5C5] hover:text-[#F5F7FA] hover:bg-[#18344D] transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-5">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.id}
                  className="p-3.5 sm:p-5 rounded-xl bg-[#0A1929] border border-[#18344D] space-y-2.5 sm:space-y-3"
                >
                  <div className="flex items-center gap-2 text-[#F5F7FA] font-semibold text-xs sm:text-sm">
                    <IconComp className="w-4 h-4 text-[#29B6F6] shrink-0" />
                    <span>{step.title}</span>
                  </div>
                  {step.content}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-3.5 sm:p-4 border-t border-[#18344D] bg-[#0A1929] flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 sm:py-2 rounded-lg bg-[#168BFF] hover:bg-[#29B6F6] text-white text-xs font-semibold shadow-[0_0_15px_rgba(22,139,255,0.4)] transition-all text-center"
            >
              Got it, Close Guide
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
