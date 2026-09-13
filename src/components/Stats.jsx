import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import './Stats.css';

const AnimatedNumber = ({ endValue, shouldAnimate, isInfinity }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInfinity) return;
    if (!shouldAnimate) return;

    let startTimestamp = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease out expo function for smooth slowdown
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setValue(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setValue(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [endValue, shouldAnimate, isInfinity]);

  if (isInfinity) return "∞";
  
  // Format with leading zero if endValue is a single digit and we want it zero-padded
  const displayValue = (endValue < 10 && endValue > 0) ? `0${value}` : value;
  // Note: if value is 0 while counting to 4, it shows "00". Let's just do `0${value}` for single digit end values.
  return displayValue;
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          setInView(true);
          hasTriggered.current = true;
          
          // Trigger the sprinkles / confetti
          const duration = 3 * 1000; // 3 seconds of sprinkles
          const end = Date.now() + duration;

          (function frame() {
            // Blow sprinkles from the left
            confetti({
              particleCount: 5,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: ['#10b981', '#34d399', '#a7f3d0'] // Green shades to match theme
            });
            // Blow sprinkles from the right
            confetti({
              particleCount: 5,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ['#10b981', '#34d399', '#a7f3d0']
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          }());
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsData = [
    {
      value: 4,
      isInfinity: false,
      label: "YEARS BUILDING"
    },
    {
      value: 24,
      isInfinity: false,
      suffix: "+",
      label: "SYSTEMS SHIPPED"
    },
    {
      value: 10,
      isInfinity: false,
      label: "CORE TECHNOLOGIES"
    },
    {
      value: 0,
      isInfinity: true,
      label: "CURIOSITY INDEX"
    }
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-value">
              <AnimatedNumber 
                endValue={stat.value} 
                shouldAnimate={inView} 
                isInfinity={stat.isInfinity} 
              />
              {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
