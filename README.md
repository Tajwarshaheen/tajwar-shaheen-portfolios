# Tajwar Shaheen — Premium Developer & Digital Marketer Portfolio

A modern, responsive, high-performance developer portfolio built with React.js, Tailwind CSS, Framer Motion, and Lucide Icons.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18 or higher) installed on your computer.

### 2. Run in VS Code
1. Open the project folder in Visual Studio Code:
   ```bash
   code .
   ```
2. Open a new terminal (`Ctrl + \`` or `Cmd + \``).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🎨 How to Customize

### 1. Replace Profile Picture
- Place your photo inside the `public/` folder.
- Name it `profile.png`.
- Because Vite serves files from the `public/` directory at the root, your image will automatically appear in the Hero and throughout the site.

### 2. Update Personal Info & Social Links
Open `src/data/portfolioData.js`. You will find:
```javascript
export const personalInfo = {
  name: "Tajwar Shaheen",
  brandName: "Tajwar",
  title: "Web Developer & Digital Marketer",
  location: "Pakistan",
  email: "tajwarali804in@gmail.com",
  phone: "+92 300 0000000",
  whatsappNumber: "+923000000000",
  // ...
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/tajwarshaheen", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/tajwarshaheen", icon: "Linkedin" },
  // ...
];
```
Edit any of these fields and save.

### 3. Add or Modify Projects
In `src/data/portfolioData.js`, add or update items in `projectsData`:
```javascript
{
  id: 5,
  title: "Your Project Name",
  category: "Web Application",
  filterTag: "Web Development",
  description: "Description of what the project does...",
  image: "/projects/your-screenshot.jpg",
  tags: ["React.js", "Tailwind CSS"],
  liveUrl: "https://your-live-demo-link.com",
  githubUrl: "https://github.com/your-username/repo-name",
}
```
Place screenshots inside `public/projects/`.

### 4. Add Your CV (Resume)
- Place your PDF resume in `public/` and name it `Tajwar_Shaheen_CV.pdf`.
- Visitors can view, print, or download your resume directly through the interactive CV modal.

---

## 🌐 How to Deploy Online (Free)

### Deploying on Vercel
1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in.
3. Click **"Add New"** → **"Project"** and select your GitHub repository.
4. Vercel automatically detects Vite:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**. Your portfolio is live in ~1 minute!

### Deploying on Netlify
1. Go to [Netlify](https://netlify.com) and log in.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Connect your GitHub repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy site"**.

---

## 📁 Project Structure

```
├── public/
│   ├── profile.png
│   ├── workspace.jpg
│   └── projects/
│       ├── next-planner.jpg
│       ├── taju-runner.jpg
│       └── text-to-speech.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── CVModal.jsx
│   │   ├── CustomizationGuideModal.jsx
│   │   └── SocialLinks.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```
