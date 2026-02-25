import React, { useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <section id="home" className={`hero ${isLocked ? 'locked' : 'unlocked'}`}>
      {isLocked && (
        <div className="lock-overlay">
          <div className="lock-container">
            <svg className="lock-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="lock-body" d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="lock-shackle" d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <button className="unlock-btn" onClick={() => setIsLocked(false)}>
              Unlock Portfolio
            </button>
            <p className="lock-hint">Welcome Agent. Secure Access Required.</p>
          </div>
        </div>
      )}
      
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Kumaran Sethupathy</h1>
          <p className="hero-title">Junior Software Developer</p>
          <p className="hero-subtitle">Crafting amazing solutions with React.js, Go & Nest.js</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="window-title">developer.tsx</span>
            </div>
            <div className="window-content">
              <pre><code><span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}{'\n'}
  <span className="code-property">name</span>: <span className="code-string">"Kumaran Sethupathy"</span>,{'\n'}
  <span className="code-property">role</span>: <span className="code-string">"Junior Software Developer"</span>,{'\n'}
  <span className="code-property">company</span>: <span className="code-string">"Skill Mine"</span>,{'\n'}
  <span className="code-property">skills</span>: [{'\n'}
    <span className="code-string">"React.js"</span>,{'\n'}
    <span className="code-string">"Go"</span>,{'\n'}
    <span className="code-string">"Nest.js"</span>{'\n'}
  ],{'\n'}
  <span className="code-property">passion</span>: <span className="code-string">"Building amazing web apps"</span>{'\n'}
{'}'};
              </code></pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
