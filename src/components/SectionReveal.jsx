import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';

const SectionReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% visible
  const [hasBlasted, setHasBlasted] = useState(false);

  useEffect(() => {
    if (isInView && !hasBlasted) {
      setHasBlasted(true);
      
      // The "Blast" effect
      const duration = 800; // ms
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 40 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
          particleCount,
          origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
          colors: ['#10b981', '#34d399', '#f8fafc', '#0b1120']
        }));
      }, 250);
      
      return () => clearInterval(interval);
    }
  }, [isInView, hasBlasted]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Delay slightly so blast leads the reveal
      style={{ width: '100%', position: 'relative', zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
