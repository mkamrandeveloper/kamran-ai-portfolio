import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: "React", x: 60, y: 15, isHighlighted: false },
    { name: "Python", x: 25, y: 25, isHighlighted: false },
    { name: "Machine Learning", x: 70, y: 35, isHighlighted: false },
    { name: "FastAPI", x: 95, y: 30, isHighlighted: false },
    { name: "OpenAI", x: 45, y: 45, isHighlighted: true },
    { name: "TypeScript", x: 35, y: 55, isHighlighted: false },
    { name: "LangChain", x: 85, y: 55, isHighlighted: false },
    { name: "n8n", x: 15, y: 70, isHighlighted: false },
    { name: "PostgreSQL", x: 65, y: 75, isHighlighted: false },
    { name: "Docker", x: 90, y: 65, isHighlighted: false }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        {/* Top Header */}
        <div className="skills-top-label">
          <span className="green-num">06</span>
          <span className="label-text">TECHNOLOGY CONSTELLATION</span>
        </div>

        <div className="skills-content">
          {/* Left Column */}
          <div className="skills-left">
            <div className="toolkit-label">THE TOOLKIT</div>
            <h2 className="skills-title">
              <span className="dark-text">Fluent across<br/></span>
              <span className="green-text">the stack.</span>
            </h2>
            <p className="skills-desc">
              The best tool is the one that makes the<br/>
              system clearer. These are the<br/>
              instruments I reach for most.
            </p>
          </div>

          {/* Right Column: Constellation Visual */}
          <div className="skills-right">
            <div className="constellation-container">
              {/* Background Lines */}
              <div className="constellation-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
              
              {/* Glow */}
              <div className="constellation-glow"></div>

              {/* Skill Nodes */}
              {skillsList.map((skill, index) => (
                <div 
                  key={index}
                  className={`skill-node ${skill.isHighlighted ? 'highlighted' : ''}`}
                  style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Far right vertical tracker */}
        <div className="vertical-tracker skills-tracker">
          <div className="tracker-diamond top"></div>
          <div className="tracker-line"></div>
          <div className="tracker-diamond bottom"></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
