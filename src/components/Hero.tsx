import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
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
          <p className="hero-subtitle">Crafting elegant solutions with React.js, Go & Nest.js</p>
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
