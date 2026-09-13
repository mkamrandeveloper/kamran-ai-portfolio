import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { num: '01', text: 'ABOUT' },
    { num: '02', text: 'EXPERIENCE' },
    { num: '03', text: 'PROJECTS' },
    { num: '04', text: 'AI / AUTOMATION' },
    { num: '05', text: 'SKILLS' },
    { num: '06', text: 'CONTACT' },
  ];

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <div className="logo-circle">K</div>
        <div className="logo-text">
          <span className="name-bold">KAMRAN</span>
          <span className="name-light">TUFAIL</span>
        </div>
      </div>

      {/* Middle: Links */}
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.num}>
            <a href={`#${link.text.toLowerCase().replace(/ /g, '-')}`}>
              <span className="link-num">{link.num}</span> {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Actions */}
      <div className="navbar-actions">
        <button className="sound-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
          SOUND OFF
        </button>
        <button
          className="connect-btn"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          LET'S CONNECT
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
