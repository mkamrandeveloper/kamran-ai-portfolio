import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';
import profileImg from '../assets/profile.png';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        
        {/* Profile Image on the Right */}
        <div className="exp-profile-wrapper">
          <img src={profileImg} alt="Muhammad Kamran Tufail" className="exp-profile-image" />
        </div>
        
        {/* Top Header */}
        <div className="exp-top-label">
          <span className="green-num">03</span>
          <span className="label-text">SYSTEM HISTORY</span>
        </div>

        <div className="exp-header">
          <div className="the-log-label">THE LOG</div>
          <h2 className="exp-title">
            <span className="dark-text">Experience in </span>
            <span className="green-text">motion.</span>
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="timeline-container">
          {/* Background glow */}
          <div className="timeline-glow"></div>

          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              {/* Left: Date */}
              <div className="timeline-date">
                {exp.date}
              </div>

              {/* Middle: Node & Line */}
              <div className="timeline-node-container">
                <div className="timeline-node">
                  <div className="node-dot"></div>
                </div>
                {/* Don't show the line after the last item */}
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
                {/* For the last item, we still need a line that fades out or just ends. The screenshot shows the dotted line continues down a bit. */}
                {index === experiences.length - 1 && <div className="timeline-line fade-out"></div>}
              </div>

              {/* Right: Content */}
              <div className="timeline-content">
                <div className="exp-company">{exp.company}</div>
                <h3 className="exp-role">{exp.role}</h3>
                <ul className="exp-desc-list">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>
                      <span className="bullet-arrow">›</span> {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Far Right: Index */}
              <div className="timeline-index">
                {exp.id}
              </div>
            </div>
          ))}
          
        </div>
        
        {/* Far right vertical tracker */}
        <div className="vertical-tracker exp-tracker">
          <div className="tracker-diamond top"></div>
          <div className="tracker-line"></div>
          <div className="tracker-diamond bottom"></div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
