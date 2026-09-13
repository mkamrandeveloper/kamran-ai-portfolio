import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Rocket.css';

const Rocket = () => {
  const { scrollYProgress } = useScroll();
  
  // Use a spring to make the motion smooth and feel like it has momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  // Swooping X motion
  const x = useTransform(
    smoothProgress, 
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1], 
    ['5vw', '85vw', '5vw', '85vw', '5vw', '85vw', '5vw']
  );
  
  // Gradual Y descent and ascent
  const y = useTransform(
    smoothProgress, 
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1], 
    ['10vh', '30vh', '50vh', '70vh', '50vh', '30vh', '10vh']
  );
  
  // Rough rotation to point in direction of travel
  const rotate = useTransform(
    smoothProgress, 
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1], 
    [45, 135, -45, 135, -45, 135, -45]
  );

  return (
    <motion.div 
      className="rocket-container"
      style={{ x, y, rotate }}
    >
      <div className="rocket-body">
        {/* Cool SVG Rocket */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#0b1120" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
        <div className="rocket-exhaust"></div>
      </div>
    </motion.div>
  );
};

export default Rocket;
