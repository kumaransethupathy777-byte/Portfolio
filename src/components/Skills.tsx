import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: string;
  progress: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactElement;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: [
        { name: 'React.js', level: 'Advanced', progress: 85 },
        { name: 'JavaScript/TypeScript', level: 'Advanced', progress: 80 },
        { name: 'HTML5 & CSS3', level: 'Expert', progress: 90 }
      ]
    },
    {
      title: 'Backend Development',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      skills: [
        { name: 'Go (Golang)', level: 'Intermediate', progress: 75 },
        { name: 'Nest.js', level: 'Intermediate', progress: 75 },
        { name: 'RESTful APIs', level: 'Advanced', progress: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9C14.3 4.5 13.7 4.5 13.3 4.9L8.7 9.5C8.3 9.9 8.3 10.5 8.7 10.9L13.3 15.5C13.7 15.9 14.3 15.9 14.7 15.5C15.1 15.1 15.1 14.5 14.7 14.1L10.8 10.2L14.7 6.3Z" fill="currentColor"/>
          <path d="M9.3 17.7C8.9 18.1 8.9 18.7 9.3 19.1C9.7 19.5 10.3 19.5 10.7 19.1L15.3 14.5C15.7 14.1 15.7 13.5 15.3 13.1L10.7 8.5C10.3 8.1 9.7 8.1 9.3 8.5C8.9 8.9 8.9 9.5 9.3 9.9L13.2 13.8L9.3 17.7Z" fill="currentColor"/>
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', progress: 85 },
        { name: 'Docker', level: 'Intermediate', progress: 70 },
        { name: 'MongoDB/PostgreSQL', level: 'Intermediate', progress: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
