import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Sales 360',
      description: 'Comprehensive sales management platform features real-time analytics, lead tracking, and performance metrics.',
      technologies: ['React.js', 'Go', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Skillzen',
      description: 'Educational technology platform streamlining learner management and course delivery with intuitive dashboards.',
      technologies: ['React.js', 'Nest.js', 'MongoDB', 'TypeScript']
    },
    {
      title: 'Indian Oil Project',
      description: 'Frontend development for a large-scale enterprise application, focusing on high-volume data visualization and reliability.',
      technologies: ['React.js', 'Material UI', 'State Management']
    },
    {
      title: 'DMS (Document Management System)',
      description: 'Secure enterprise document management solution with robust search, versioning, and access control.',
      technologies: ['React.js', 'Redux', 'RESTful API']
    },
    {
      title: 'Auth Project',
      description: 'Centralized authentication and authorization service implementing secure SSO and role-based access control.',
      technologies: ['Angular', 'TypeScript', 'OAuth 2.0']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
