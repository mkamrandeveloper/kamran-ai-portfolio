import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Scroll indicator - technically sits above the about content */}
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      <div className="about-container">
        {/* Background glow for this section */}
        <div className="about-glow"></div>

        <div className="about-top-label">
          <span className="green-num">02</span>
          <span className="label-text">IDENTITY ROOM</span>
        </div>

        <div className="about-content">
          {/* Left Side */}
          <div className="about-left">
            <div className="operator-label">
              THE OPERATOR
            </div>
            
            <h2 className="about-title">
              <span className="dark-text">Good systems<br/>feel<br/></span>
              <span className="green-text">quietly<br/>inevitable.</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="about-right">
            <p className="about-desc-main">
              I work at the intersection of human intent and<br/>
              machine capability. My practice is grounded in clear<br/>
              thinking, useful interfaces and software that earns<br/>
              trust through every interaction.
            </p>
            <p className="about-desc-sub">
              From first principles to final pixel, I turn complex intelligence into<br/>
              tools people can actually use.
            </p>
          </div>
          
          {/* Far right vertical tracker */}
          <div className="vertical-tracker">
            <div className="tracker-diamond top"></div>
            <div className="tracker-line"></div>
            <div className="tracker-diamond bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
