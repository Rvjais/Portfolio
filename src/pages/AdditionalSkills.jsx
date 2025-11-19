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
                    <div className="skill-badge" style={{ backgroundColor: skill.color }}>
                      <span className="skill-icon">✓</span>
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hobbies & Interests Section */}
        <motion.div className="hobbies-section" variants={itemVariants}>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-text">Beyond Coding</span>
            <span className="divider-line"></span>
          </div>

          <div className="hobbies-header">
            <h2 className="hobbies-title">
              Hobbies & <span className="gradient-text">Interests</span>
            </h2>
            <p className="hobbies-description">
              When I'm not coding, I love exploring different passions that keep me balanced and creative
            </p>
          </div>

          <div className="hobbies-grid">
            <motion.div
              className="hobby-card interactive glass"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
            >
              <div className="hobby-icon-wrapper">
                <span className="hobby-icon">🎵</span>
              </div>
              <h3>Music</h3>
              <p>Playing instruments and exploring different genres keeps my creative mind active</p>
              <div className="hobby-tags">
                <span className="hobby-tag">Guitar</span>
                <span className="hobby-tag">Piano</span>
              </div>
            </motion.div>

            <motion.div
              className="hobby-card interactive glass"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: -2 }}
            >
              <div className="hobby-icon-wrapper">
                <span className="hobby-icon">🥋</span>
              </div>
              <h3>Martial Arts</h3>
              <p>Practicing discipline, focus, and physical fitness through martial arts training</p>
              <div className="hobby-tags">
                <span className="hobby-tag">Karate</span>
                <span className="hobby-tag">Self-Defense</span>
              </div>
            </motion.div>

            <motion.div
              className="hobby-card interactive glass"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
            >
              <div className="hobby-icon-wrapper">
                <span className="hobby-icon">💃</span>
              </div>
              <h3>Dance</h3>
              <p>Expressing creativity and staying energetic through various dance forms</p>
              <div className="hobby-tags">
                <span className="hobby-tag">Hip-Hop</span>
                <span className="hobby-tag">Contemporary</span>
              </div>
            </motion.div>

            <motion.div
              className="hobby-card interactive glass"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: -2 }}
            >
              <div className="hobby-icon-wrapper">
                <span className="hobby-icon">📚</span>
              </div>
              <h3>Reading</h3>
              <p>Expanding knowledge through tech blogs, self-improvement books, and novels</p>
              <div className="hobby-tags">
                <span className="hobby-tag">Tech Blogs</span>
                <span className="hobby-tag">Fiction</span>
              </div>
            </motion.div>

            <motion.div
              className="hobby-card interactive glass"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
            >
              <div className="hobby-icon-wrapper">
                <span className="hobby-icon">🎮</span>
              </div>
              <h3>Gaming</h3>
              <p>Enjoying strategy games and learning problem-solving through interactive experiences</p>
              <div className="hobby-tags">
                <span className="hobby-tag">Strategy</span>
                <span className="hobby-tag">Puzzle</span>
              </div>
            </motion.div>

            <motion.div
              className="hobby-card interactive glass"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: -2 }}
            >
              <div className="hobby-icon-wrapper">
                <span className="hobby-icon">✈️</span>
              </div>
              <h3>Travel</h3>
              <p>Exploring new places, cultures, and gaining diverse perspectives</p>
              <div className="hobby-tags">
                <span className="hobby-tag">Adventure</span>
                <span className="hobby-tag">Culture</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Showcase Section */}
        <motion.div className="videos-section" variants={itemVariants}>
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-text">Skills in Action</span>
            <span className="divider-line"></span>
          </div>

          <div className="videos-header">
            <h2 className="videos-title">
              Video <span className="gradient-text">Showcase</span>
            </h2>
            <p className="videos-description">
              Watch me in action! Here are some videos showcasing my skills beyond coding
            </p>
          </div>

          <div className="videos-grid">
            <motion.div
              className="video-card interactive glass"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="video-thumbnail-wrapper">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Dance Performance"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="video-info">
                <div className="video-category">Dance</div>
                <h3>💃 Dance Performance</h3>
                <p>Contemporary dance routine showcasing rhythm and creativity</p>
                <div className="video-tags">
                  <span className="video-tag">Dance</span>
                  <span className="video-tag">Performance</span>
                  <span className="video-tag">Creativity</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="video-card interactive glass"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="video-thumbnail-wrapper">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Martial Arts Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="video-info">
                <div className="video-category">Martial Arts</div>
                <h3>🥋 Martial Arts Demo</h3>
                <p>Karate techniques and forms demonstration</p>
                <div className="video-tags">
                  <span className="video-tag">Martial Arts</span>
                  <span className="video-tag">Discipline</span>
                  <span className="video-tag">Fitness</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="video-card interactive glass"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="video-thumbnail-wrapper">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Music Performance"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="video-info">
                <div className="video-category">Music</div>
                <h3>🎵 Music Performance</h3>
                <p>Guitar cover of a popular song</p>
                <div className="video-tags">
                  <span className="video-tag">Music</span>
                  <span className="video-tag">Guitar</span>
                  <span className="video-tag">Cover</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="video-card interactive glass"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="video-thumbnail-wrapper">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Project Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="video-info">
                <div className="video-category">Coding</div>
                <h3>💻 Coding Project Demo</h3>
                <p>Walkthrough of a full-stack MERN application</p>
                <div className="video-tags">
                  <span className="video-tag">Coding</span>
                  <span className="video-tag">MERN Stack</span>
                  <span className="video-tag">Full-Stack</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

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
