import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdditionalSkills from './pages/AdditionalSkills';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additional-skills" element={<AdditionalSkills />} />
      </Routes>
    </Router>
  );
}

export default App;
