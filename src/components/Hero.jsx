import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      {/* Background decorations */}
      <div className="bg-glow"></div>
      <div className="bg-grid"></div>
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      
      <div className="hero-content">
        {/* Left Column */}
        <div className="hero-left">
          <div className="badge">
            <span className="dot"></span> DIGITAL INTELLIGENCE LAB / 001
          </div>
          
          <h1 className="hero-title">
            <span className="dark-text reveal-text delay-1">Building</span>
            <span className="dark-text reveal-text delay-2">intelligence</span>
            <span className="green-text reveal-text delay-3">with</span>
            <span className="green-text reveal-text delay-4">intention.</span>
          </h1>
          
          <p className="hero-description">
            I'm Muhammad Kamran Tufail — an AI engineer crafting
            intelligent systems, AI agents and automation experiences
            for the next era of software.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn-primary" 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW MY WORK 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              LET'S CONNECT
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="green-arrow">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column (3D Core visual) */}
        <div className="hero-right">
          <div className="core-container">
            <div className="core-specimen">
              SPECIMEN / AI-CORE 01 <span className="dot"></span>
            </div>
            
            <div className="core-visual">
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
              <div className="orbit orbit-3"></div>
              <div className="sphere"></div>
              <div className="particles"></div>
            </div>

            <div className="core-status">
              <div className="status-badge">
                <span className="dot"></span> SYSTEM STANDBY
              </div>
              <div className="status-text">
                DRAG CORE / CLICK TO RUN DIAGNOSTIC
              </div>
            </div>

            <div className="core-activate">
              TAP TO ACTIVATE
            </div>
            
            <div className="core-icon">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                 <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                 <line x1="12" y1="22" x2="12" y2="15.5"></line>
                 <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                 <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                 <line x1="12" y1="2" x2="12" y2="8.5"></line>
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
