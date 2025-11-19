import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive, .skill-card, .project-card');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setCursorVariant('hover'));
      el.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    // Text hover effect
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    textElements.forEach(el => {
      el.addEventListener('mouseenter', () => setCursorVariant('text'));
      el.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(99, 102, 241, 0.5)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: 'rgba(236, 72, 153, 0.3)',
      mixBlendMode: 'difference',
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(139, 92, 246, 0.4)',
      mixBlendMode: 'difference',
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    }
  };

  // Hide cursor on mobile
  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-ring"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          opacity: isVisible ? 1 : 0
        }}
      />
      <motion.div
        className="cursor-dot"
        variants={dotVariants}
        animate="default"
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 28,
          mass: 0.3
        }}
        style={{
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
};

export default CustomCursor;
