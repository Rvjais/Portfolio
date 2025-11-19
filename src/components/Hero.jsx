import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import './Hero.css';

function StarField(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function RotatingTorus() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <torusGeometry args={[0.7, 0.2, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function FloatingBox() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color="#ec4899"
        emissive="#ec4899"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function FloatingOctahedron() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    meshRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.8) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[0, -1.5, 0]}>
      <octahedronGeometry args={[0.6]} />
      <meshStandardMaterial
        color="#f59e0b"
        emissive="#f59e0b"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.3;
    meshRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[1, 1.5, -1]}>
      <icosahedronGeometry args={[0.5]} />
      <meshStandardMaterial
        color="#10b981"
        emissive="#10b981"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function FloatingCone() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[-1.5, -1, -0.5]}>
      <coneGeometry args={[0.4, 0.8, 4]} />
      <meshStandardMaterial
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches ||
                     'ontouchstart' in window ||
                     navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          <StarField />
          <RotatingTorus />
          <FloatingBox />
          <FloatingOctahedron />
          <FloatingIcosahedron />
          <FloatingCone />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enabled={!isMobile}
          />
        </Canvas>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-tag" variants={itemVariants}>
          <span className="tag-dot"></span>
          Available for Opportunities
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">Ranveer Jaiswal</span>
        </motion.h1>

        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          MERN Stack Developer & AI Automation Specialist
        </motion.h2>

        <motion.p className="hero-description" variants={itemVariants}>
          Passionate fresher crafting innovative web solutions with modern technologies.
          Specialized in building scalable applications with React, Node.js, and AI integration.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button className="btn btn-primary interactive" onClick={scrollToContact}>
            Let's Connect
          </button>
          <a href="#projects" className="btn btn-secondary interactive">
            View Projects
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <h3 className="gradient-text">MERN</h3>
            <p>Stack Developer</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h3 className="gradient-text">AI</h3>
            <p>Automation</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h3 className="gradient-text">Fresh</h3>
            <p>Perspective</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
