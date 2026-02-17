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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React.js and Nest.js, featuring real-time inventory management and secure payment processing.',
      technologies: ['React.js', 'Nest.js', 'PostgreSQL']
    },
    {
      title: 'Task Management API',
      description: 'High-performance RESTful API built with Go, handling thousands of concurrent requests with efficient data processing and caching.',
      technologies: ['Go', 'Redis', 'MongoDB']
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with WebSocket support, built using React.js frontend and Nest.js backend with real-time message delivery.',
      technologies: ['React.js', 'Nest.js', 'WebSocket']
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
                  <a href="#" className="project-link">View Project</a>
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
