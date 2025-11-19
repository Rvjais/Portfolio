import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: '#',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:ranveer@example.com',
      color: '#ea4335'
    }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-description">
            I'm always open to discussing new opportunities, projects, or just having a chat about tech!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-card glass">
              <h3>Let's Work Together</h3>
              <p>
                As a passionate fresher in my first job, I'm excited to collaborate on interesting
                projects and learn from experienced professionals. Whether it's a freelance opportunity,
                a full-time position, or just a tech discussion, feel free to reach out!
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Available for Remote Work</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">💼</span>
                  <div>
                    <h4>Work Status</h4>
                    <p>Currently Employed & Learning</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <div>
                    <h4>Response Time</h4>
                    <p>Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="social-link interactive"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    <span className="social-icon">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="interactive"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="interactive"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="interactive"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  required
                  className="interactive"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary interactive">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer className="footer" variants={itemVariants}>
        <p>&copy; 2024 Ranveer Jaiswal. Crafted with passion and code.</p>
        <p className="footer-tagline">Building the future, one line at a time.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
