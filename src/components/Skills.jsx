import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import Background3D from './Background3D';
import './Skills.css';

const Skills = () => {
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
        staggerChildren: 0.1,
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

  const mernSkills = [
    {
      name: 'MongoDB',
      icon: '🍃',
      description: 'NoSQL database for scalable applications',
      color: '#47A248'
    },
    {
      name: 'Express.js',
      icon: '⚡',
      description: 'Fast, minimalist web framework',
      color: '#000000'
    },
    {
      name: 'React.js',
      icon: '⚛️',
      description: 'Building dynamic user interfaces',
      color: '#61DAFB'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      description: 'JavaScript runtime for backend',
      color: '#339933'
    }
  ];

  const aiSkills = [
    {
      name: 'AI Integration',
      icon: '🤖',
      description: 'Integrating AI APIs and models',
      color: '#FF6B6B'
    },
    {
      name: 'Automation',
      icon: '⚙️',
      description: 'Workflow automation and scripting',
      color: '#4ECDC4'
    },
    {
      name: 'Machine Learning',
      icon: '🧠',
      description: 'ML concepts and implementation',
      color: '#95E1D3'
    },
    {
      name: 'AI Tools',
      icon: '🛠️',
      description: 'OpenAI, Hugging Face, TensorFlow',
      color: '#F38181'
    }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <Background3D />
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-tag">My Expertise</span>
          <h2 className="section-title">
            Core <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-description">
            Specialized in modern web development and AI automation
          </p>
        </motion.div>

        <div className="skills-grid">
          <motion.div className="skill-category" variants={itemVariants}>
            <div className="category-header">
              <h3>MERN Stack Development</h3>
              <p>Full-stack JavaScript development with modern tools</p>
            </div>
            <div className="skills-list">
              {mernSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card interactive glass"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon" style={{ filter: `drop-shadow(0 4px 8px ${skill.color}80)` }}>{skill.icon}</span>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skill-category" variants={itemVariants}>
            <div className="category-header">
              <h3>AI & Automation</h3>
              <p>Intelligent automation and AI-powered solutions</p>
            </div>
            <div className="skills-list">
              {aiSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card interactive glass"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="skill-header">
                    <span className="skill-icon" style={{ filter: `drop-shadow(0 4px 8px ${skill.color}80)` }}>{skill.icon}</span>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="skills-cta" variants={itemVariants}>
          <div className="cta-content glass">
            <h3>Want to see more?</h3>
            <p>Explore my additional skills and technologies I work with</p>
            <Link to="/additional-skills" className="btn btn-primary interactive">
              View All Skills
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
