import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AdditionalSkills.css';

function AnimatedSphere({ position, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

const AdditionalSkills = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: '🎨',
      skills: [
        { name: 'HTML5 & CSS3', level: 95, color: '#e34c26' },
        { name: 'JavaScript (ES6+)', level: 90, color: '#f7df1e' },
        { name: 'TypeScript', level: 80, color: '#3178c6' },
        { name: 'React.js', level: 90, color: '#61dafb' },
        { name: 'Next.js', level: 75, color: '#000000' },
        { name: 'Tailwind CSS', level: 85, color: '#38bdf8' },
        { name: 'Material-UI', level: 80, color: '#0081cb' },
        { name: 'Framer Motion', level: 75, color: '#ff0055' }
      ]
    },
    {
      title: 'Backend Technologies',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express.js', level: 85, color: '#000000' },
        { name: 'MongoDB', level: 80, color: '#47a248' },
        { name: 'MySQL', level: 70, color: '#4479a1' },
        { name: 'PostgreSQL', level: 65, color: '#336791' },
        { name: 'REST APIs', level: 85, color: '#6366f1' },
        { name: 'GraphQL', level: 70, color: '#e10098' },
        { name: 'JWT Authentication', level: 80, color: '#000000' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90, color: '#f05032' },
        { name: 'Docker', level: 65, color: '#2496ed' },
        { name: 'VS Code', level: 95, color: '#007acc' },
        { name: 'Postman', level: 85, color: '#ff6c37' },
        { name: 'NPM/Yarn', level: 90, color: '#cb3837' },
        { name: 'Webpack/Vite', level: 75, color: '#646cff' },
        { name: 'Linux/Ubuntu', level: 70, color: '#e95420' },
        { name: 'AWS Basics', level: 60, color: '#ff9900' }
      ]
    },
    {
      title: 'AI & Automation',
      icon: '🤖',
      skills: [
        { name: 'OpenAI API', level: 75, color: '#10a37f' },
        { name: 'Prompt Engineering', level: 80, color: '#8b5cf6' },
        { name: 'Python Basics', level: 70, color: '#3776ab' },
        { name: 'Puppeteer', level: 75, color: '#40b5a4' },
        { name: 'Web Scraping', level: 70, color: '#ec4899' },
        { name: 'Automation Scripts', level: 80, color: '#f59e0b' },
        { name: 'ChatGPT Integration', level: 85, color: '#10a37f' },
        { name: 'Workflow Automation', level: 75, color: '#6366f1' }
      ]
    },
    {
      title: 'Design & Creativity',
      icon: '🎭',
      skills: [
        { name: 'UI/UX Principles', level: 80, color: '#ff6b6b' },
        { name: 'Figma', level: 75, color: '#f24e1e' },
        { name: 'Responsive Design', level: 90, color: '#38bdf8' },
        { name: 'Accessibility (a11y)', level: 70, color: '#4ade80' },
        { name: 'Animation Design', level: 75, color: '#f59e0b' },
        { name: 'Color Theory', level: 80, color: '#ec4899' },
        { name: 'Typography', level: 75, color: '#8b5cf6' },
        { name: 'Prototyping', level: 70, color: '#06b6d4' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: '💡',
      skills: [
        { name: 'Problem Solving', level: 85, color: '#6366f1' },
        { name: 'Quick Learning', level: 90, color: '#8b5cf6' },
        { name: 'Team Collaboration', level: 80, color: '#ec4899' },
        { name: 'Communication', level: 85, color: '#f59e0b' },
        { name: 'Time Management', level: 80, color: '#10b981' },
        { name: 'Adaptability', level: 90, color: '#06b6d4' },
        { name: 'Critical Thinking', level: 85, color: '#f43f5e' },
        { name: 'Attention to Detail', level: 85, color: '#a855f7' }
      ]
    }
  ];

  return (
    <div className="additional-skills-page">
      <div className="skills-canvas">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere position={[-2, 0, 0]} color="#6366f1" />
          <AnimatedSphere position={[2, 0, 0]} color="#ec4899" />
          <AnimatedSphere position={[0, 2, -2]} color="#8b5cf6" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <motion.div
        className="additional-skills-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="page-header" variants={itemVariants}>
          <Link to="/" className="back-button interactive">
            <span>←</span> Back to Home
          </Link>
          <span className="section-tag">Complete Skillset</span>
          <h1 className="page-title">
            Additional <span className="gradient-text">Skills</span>
          </h1>
          <p className="page-description">
            A comprehensive overview of all the technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="category-section"
              variants={itemVariants}
            >
              <div className="category-title">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.title}</h2>
              </div>
              <div className="skills-grid-additional">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item interactive glass"
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <div className="skill-item-header">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="skills-footer" variants={itemVariants}>
          <div className="footer-content glass">
            <h3>Continuous Learning</h3>
            <p>
              This list is constantly evolving as I learn new technologies and deepen my expertise.
              As a fresher, I'm committed to staying updated with industry trends and best practices.
            </p>
            <div className="footer-buttons">
              <Link to="/" className="btn btn-primary interactive">
                Back to Home
              </Link>
              <button onClick={scrollToTop} className="btn btn-secondary interactive">
                Scroll to Top
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdditionalSkills;
