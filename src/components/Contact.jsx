import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-content">
          {/* Left Column: Visual */}
          <div className="contact-left">
            <div className="contact-glow"></div>
            <div className="contact-visual">
              <div className="ring-dashed"></div>
              <div className="ring-solid"></div>
              <div className="ring-inner">
                <div className="logo-center">K</div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="contact-right">
            <div className="contact-label">
              <span className="green-num">07 / </span>
              <span className="label-text-gray">OPEN CHANNEL</span>
            </div>
            
            <h2 className="contact-title">
              <span className="dark-text">Let's build<br/>something<br/></span>
              <span className="green-text">intelligent.</span>
            </h2>
            
            <p className="contact-desc">
              Open to freelance projects, collaborations,<br/>
              and full-time AI engineering roles.
            </p>
            
            <div className="contact-links">
              <a href={`mailto:${contact.email}`} className="contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {contact.email}
              </a>

              <a href={`tel:${contact.phone}`} className="contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {contact.phone}
              </a>
              
              <a href={contact.github} target="_blank" rel="noreferrer" className="contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub Profile
              </a>
              
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn Profile
              </a>

              <div className="contact-link static-info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {contact.location}
              </div>

              <div className="contact-link static-info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                {contact.institution}
              </div>
            </div>
          </div>
        </div>

        {/* Far right vertical tracker */}
        <div className="vertical-tracker contact-tracker">
          <div className="tracker-diamond top"></div>
          <div className="tracker-line"></div>
          <div className="tracker-diamond bottom"></div>
        </div>

      </div>

      {/* Very Bottom Footer Area */}
      <div className="footer-bottom">
        <div className="footer-center">
          {contact.footerText}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
