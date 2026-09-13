import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Top Header */}
        <div className="proj-top-label">
          <span className="green-num">04</span>
          <span className="label-text">DIGITAL MUSEUM</span>
        </div>

        {/* Title Area */}
        <div className="proj-header-area">
          <div className="proj-header-left">
            <div className="selected-work-label">SELECTED WORK</div>
            <h2 className="proj-title">
              <span className="dark-text">Artifacts of </span>
              <span className="green-text">thought.</span>
            </h2>
            <div className="proj-glow"></div>
          </div>
          <div className="proj-header-right">
            <p>Small collection, high signal.</p>
            <p>Each one built to move an idea forward.</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              
              {/* Visual Box */}
              <div className={`project-visual bg-${project.visualType}`}>
                <div className="visual-top-bar">
                  <div className="visual-index">{project.id} / 0{projects.length}</div>
                  <div className="visual-link-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                
                {/* CSS Art for Visuals */}
                <div className="visual-art">
                  {project.visualType === 'sphere' && (
                    <div className="art-sphere-container">
                      <div className="art-orbit-1"></div>
                      <div className="art-orbit-2"></div>
                      <div className="art-sphere"></div>
                    </div>
                  )}
                  {project.visualType === 'diamond' && (
                    <div className="art-diamond-container">
                      <div className="art-diamond-outer"></div>
                      <div className="art-diamond-inner"></div>
                      <div className="art-diamond-core"></div>
                    </div>
                  )}
                  {project.visualType === 'crosshair' && (
                    <div className="art-crosshair-container">
                      <div className="crosshair-box"></div>
                      <div className="crosshair-h"></div>
                      <div className="crosshair-v"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Far right vertical tracker */}
        <div className="vertical-tracker proj-tracker">
          <div className="tracker-diamond top"></div>
          <div className="tracker-line"></div>
          <div className="tracker-diamond bottom"></div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
