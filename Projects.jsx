import React from 'react';
import { Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cyberportifolio website',
      description: 'Made my portiflio from a language called react. Note I have used AI.',
      tech: ['HTML','react js','css'],
      status: 'Production'
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className={`project-status ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="section-header">
        <Code className="section-icon" />
        <h2 className="section-title">Featured Projects</h2>
      </div>
      
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;