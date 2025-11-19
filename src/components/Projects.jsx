import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management app with AI-based prioritization and automation features. Built with MERN stack and integrated with OpenAI API.',
      tags: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      type: 'Personal Project'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard. Responsive design with smooth animations.',
      tags: ['MERN', 'Stripe', 'Redux', 'Material-UI'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      type: 'Academic Project'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based chat app with real-time messaging, file sharing, and user authentication. Modern UI with dark mode support.',
      tags: ['React', 'Socket.io', 'Express', 'JWT'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      type: 'Learning Project'
    },
    {
      title: 'Automation Dashboard',
      description: 'Web automation tool for repetitive tasks with scheduling and monitoring. Integrates multiple APIs for workflow automation.',
      tags: ['Node.js', 'Puppeteer', 'Cron', 'React'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      type: 'Personal Project'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern 3D portfolio with Three.js animations, smooth scrolling, and interactive elements. Showcasing creative web development skills.',
      tags: ['React', 'Three.js', 'Framer Motion', 'Vite'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      type: 'Portfolio'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts, interactive maps, and data visualization. Clean and intuitive interface.',
      tags: ['React', 'API Integration', 'Charts', 'Geolocation'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      type: 'Learning Project'
    }
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            A collection of projects showcasing my skills and learning journey
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card interactive"
              variants={itemVariants}
              whileHover={{ y: -15 }}
            >
              <div className="project-gradient" style={{ background: project.gradient }}></div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="project-link interactive">
                    View Details
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="projects-note" variants={itemVariants}>
          <div className="note-content glass">
            <h4>🚀 Currently Learning & Building</h4>
            <p>
              As a fresher, I'm constantly working on new projects and expanding my skill set.
              These projects represent my journey in mastering full-stack development and AI integration.
              More exciting projects coming soon!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
