import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const profileRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleMouseMove = (e) => {
    if (!profileRef.current) return;

    const rect = profileRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation based on mouse position (max 20 degrees)
    const rotateY = (mouseX / rect.width) * 20;
    const rotateX = -(mouseY / rect.height) * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

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

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div className="profile-section" variants={itemVariants}>
          <div
            ref={profileRef}
            className="profile-image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="profile-ring"></div>
            <div className="profile-ring-2"></div>
            <img src="/profile.svg" alt="Ranveer Jaiswal" className="profile-image" />
            <div className="profile-badge glass">
              <span className="badge-icon">💻</span>
              <span className="badge-text">Developer</span>
            </div>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-card glass">
              <h3>Who I Am</h3>
              <p>
                I'm Ranveer Jaiswal, a passionate and driven fresher developer currently embarking on
                my first professional journey in the tech industry. With a strong foundation in the
                MERN stack and a keen interest in AI automation, I'm committed to creating innovative
                solutions that make a difference.
              </p>
              <p>
                As someone starting their career, I bring fresh perspectives, eagerness to learn,
                and a dedication to writing clean, efficient code. I believe in continuous learning
                and staying updated with the latest technologies to deliver modern web applications.
              </p>
            </div>

            <div className="about-card glass">
              <h3>My Journey</h3>
              <p>
                Currently working in my first professional role, I'm gaining hands-on experience
                while building real-world applications. My focus is on mastering full-stack
                development with React, Node.js, Express, and MongoDB, while exploring the
                exciting possibilities of AI integration.
              </p>
              <p>
                I'm particularly interested in creating user-centric applications that combine
                beautiful design with powerful functionality, leveraging AI to automate and
                enhance user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            <div className="highlight-card interactive">
              <div className="highlight-icon">🎓</div>
              <h4>Fresh Graduate</h4>
              <p>Ready to learn and grow with industry best practices</p>
            </div>

            <div className="highlight-card interactive">
              <div className="highlight-icon">💼</div>
              <h4>First Job</h4>
              <p>Gaining valuable experience in professional development</p>
            </div>

            <div className="highlight-card interactive">
              <div className="highlight-icon">🚀</div>
              <h4>Tech Enthusiast</h4>
              <p>Passionate about MERN stack and AI automation</p>
            </div>

            <div className="highlight-card interactive">
              <div className="highlight-icon">💡</div>
              <h4>Problem Solver</h4>
              <p>Creative thinker with attention to detail</p>
            </div>
          </motion.div>
        </div>

        <motion.div className="about-values" variants={itemVariants}>
          <div className="value-item">
            <span className="value-number">01</span>
            <h4>Clean Code</h4>
            <p>Writing maintainable and scalable solutions</p>
          </div>
          <div className="value-item">
            <span className="value-number">02</span>
            <h4>User Focus</h4>
            <p>Creating intuitive and delightful experiences</p>
          </div>
          <div className="value-item">
            <span className="value-number">03</span>
            <h4>Continuous Learning</h4>
            <p>Staying updated with latest technologies</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
