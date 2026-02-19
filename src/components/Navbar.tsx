import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">KS</span>
        </div>
        
        <div className="nav-right">
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')} className="nav-link">Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className="nav-link">About</a></li>
            <li><a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a></li>
            <li><a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <ThemeToggle />
            
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
