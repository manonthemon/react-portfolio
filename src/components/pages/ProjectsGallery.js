import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './Projects.json';


function ProjectsGallery(props) {
  return (

    <div className="project-container">
      <h2 className="title">My projects</h2>
    <div className="row justify-content-center">
      <div className="col-md-4">
        <ProjectCard
          name={projects[0].name}
          image={projects[0].image}
          deployed={projects[0].deployed}
          github={projects[0].github}
        />
      </div>
      <div className="col-md-4">
        <ProjectCard
          name={projects[1].name}
          image={projects[1].image}
          deployed={projects[1].deployed}
          github={projects[1].github}
        />
      </div>
      <div className="col-md-4">
        <ProjectCard
          name={projects[2].name}
          image={projects[2].image}
          deployed={projects[2].deployed}
          github={projects[2].github}
        />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-4">
        <ProjectCard
          name={projects[3].name}
          image={projects[3].image}
          deployed={projects[3].deployed}
          github={projects[3].github}
        />
      </div>
      <div className="col-md-4">
        <ProjectCard
          name={projects[4].name}
          image={projects[4].image}
          deployed={projects[4].deployed}
          github={projects[4].github}
        />
      </div>
      <div className="col-md-4">
        <ProjectCard
          name={projects[5].name}
          image={projects[5].image}
          deployed={projects[5].deployed}
          github={projects[5].github}
        />
      </div>
    </div>
  </div>
  );
}

export default ProjectsGallery;