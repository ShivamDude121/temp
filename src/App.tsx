import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, ChevronDown, Menu, X, Award, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, real-time inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization, natural language processing, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Interactive dashboard for visualizing real-time data with customizable widgets and export capabilities.",
      tech: ["React", "D3.js", "WebSocket", "Firebase"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform with posts, stories, messaging, and advanced privacy controls.",
      tech: ["React Native", "GraphQL", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    "Backend": ["Node.js", "Python", "Express", "Django", "GraphQL"],
    "Database": ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    "Tools": ["Git", "Docker", "AWS", "CI/CD", "Figma"]
  };

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications, mentored junior developers, and improved system performance by 40%."
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built responsive web applications using React and TypeScript, collaborated with design team on UI/UX improvements."
    },
    {
      role: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Developed features for MVP products, participated in agile development, and conducted code reviews."
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl text-center">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User size={64} className="text-cyan-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional web experiences that solve real-world problems. 
            Passionate about clean code, intuitive design, and continuous learning.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-slate-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in building scalable, 
                user-friendly applications that make a difference. My journey in tech started with a 
                curiosity for how things work and evolved into a passion for creating digital solutions.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and staying current with the latest 
                technologies. When I'm not coding, you'll find me contributing to open-source projects, 
                reading tech blogs, or exploring new frameworks.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg">
                  <Award className="text-cyan-400" size={20} />
                  <span className="text-sm">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg">
                  <Code className="text-cyan-400" size={20} />
                  <span className="text-sm">50+ Projects</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg">
                  <BookOpen className="text-cyan-400" size={20} />
                  <span className="text-sm">Always Learning</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, techs]) => (
                  <div key={category} className="bg-slate-900 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-cyan-400/30 last:pb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="bg-slate-900 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-cyan-400" size={20} />
                    <h3 className="text-xl font-bold">{job.role}</h3>
                  </div>
                  <p className="text-cyan-400 mb-2">{job.company}</p>
                  <p className="text-slate-500 text-sm mb-3">{job.period}</p>
                  <p className="text-slate-400">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-slate-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:john@example.com" className="p-6 bg-slate-900 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              <Mail className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm">john@example.com</p>
            </a>
            <a href="#" className="p-6 bg-slate-900 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              <Github className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm">@johndoe</p>
            </a>
            <a href="#" className="p-6 bg-slate-900 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              <Linkedin className="text-cyan-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm">/in/johndoe</p>
            </a>
          </div>
          <a 
            href="mailto:john@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>&copy; 2024 John Doe. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
