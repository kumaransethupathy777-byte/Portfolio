import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate Junior Software Developer at <strong>Skill Mine</strong>, where I combine creativity with code to build exceptional digital experiences.
            </p>
            <p>
              With expertise in modern web technologies, I specialize in creating responsive, performant applications using <strong>React.js</strong> for dynamic frontends and <strong>Go</strong> and <strong>Nest.js</strong> for robust backend systems.
            </p>
            <p>
              I'm constantly learning and evolving, staying up-to-date with the latest industry trends and best practices. My goal is to write clean, maintainable code that solves real-world problems.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Tech Stacks</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-glow"></div>
              <div className="profile-content">
                <div className="profile-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Kumaran Sethupathy</h3>
                <p>Junior Software Developer</p>
                <div className="profile-tags">
                  <span className="tag">React.js</span>
                  <span className="tag">Go</span>
                  <span className="tag">Nest.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
