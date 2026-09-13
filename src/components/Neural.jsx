import React from 'react';
import './Neural.css';

const Neural = () => {
  const steps = [
    { id: "01", title: "USER", isActive: false, image: "/images/user.jpg" },
    { id: "02", title: "AI AGENT", isActive: false, image: "/images/ai_agent.jpg" },
    { id: "03", title: "LLM", isActive: true, image: "/images/llm.jpg" },
    { id: "04", title: "TOOLS", isActive: false, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
    { id: "05", title: "RESULT", isActive: false, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section className="neural-section" id="ai-/-automation">
      <div className="neural-container">
        
        {/* Top Header */}
        <div className="neural-top-label">
          <span className="green-num">05</span>
          <span className="label-text-dark">NEURAL LABORATORY</span>
        </div>

        {/* Title Area */}
        <div className="neural-header-area">
          <div className="neural-header-left">
            <div className="signature-label">SIGNATURE SYSTEM / ACTIVE</div>
          </div>
          <div className="neural-header-center">
            <h2 className="neural-title">
              <span className="light-text">From signal<br/>to </span>
              <span className="green-text">outcome.</span>
            </h2>
            <div className="neural-glow"></div>
          </div>
          <div className="neural-header-right">
            <p className="neural-desc">Intelligent automation is not a black box. It's a visible, thoughtful chain of decisions.</p>
          </div>
        </div>

        {/* Process Flow */}
        <div className="process-flow">
          {/* The connecting horizontal line */}
          <div className="process-line">
            <div className="moving-dot"></div>
            <div className="moving-dot delayed"></div>
          </div>
          
          <div className="process-steps">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`process-node ${step.isActive ? 'active' : ''}`}>
                  <div className="node-id">{step.id}</div>
                  <div className="node-visual">
                    <img src={step.image} alt={step.title} className="node-image" />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="node-title">{step.title}</div>
                  <div className="node-status-dot"></div>
                </div>
                {/* Connector dots between nodes */}
                {index < steps.length - 1 && (
                  <div className="connector-dot"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Bottom Details */}
        <div className="neural-bottom">
          <div className="node-detail">
            <span className="green-text bold">NODE / 03</span> Transforms context into decisions
          </div>
        </div>

        {/* Footer line */}
        <div className="neural-footer">
          <div className="processing-time">PROCESSING / 000.034 MS</div>
          <div className="system-status">
            <span className="dot"></span> ALL SYSTEMS NOMINAL
          </div>
        </div>

        {/* Far right vertical tracker */}
        <div className="vertical-tracker neural-tracker">
          <div className="tracker-diamond top"></div>
          <div className="tracker-line"></div>
          <div className="tracker-diamond bottom"></div>
        </div>

      </div>
    </section>
  );
};

export default Neural;
