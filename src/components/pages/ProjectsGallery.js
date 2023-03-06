import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './Projects.json';


//Use .map to display cards with projects info sourced from json file.

function ProjectsGallery() {
  return (
<div className="project-container">
<h2 className="title">My projects</h2>
<div className="cards-container">
    {projects.map(function(projects) {
      return <ProjectCard
      key={projects.id}
      name={projects.name}
      image={projects.image}
      deployed={projects.deployed}
      github={projects.github}
      />
    })}
    </div>
    </div>
  );
}

export default ProjectsGallery;