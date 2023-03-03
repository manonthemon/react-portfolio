import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects.json';

// function ProjectsGallery(props) {
//   return (
//     <div>
//       <h1>Projects Gallery</h1>
//       <h2>
//  My latest projects
//       </h2>

//       {/*TODO {Cards with projects imported from JSON file will go here} */}

//       <Link to="project" role="button" className="btn btn-link">
//         Show project
//       </Link>
//       <Link to="project-gallery" role="button" className="btn btn-link">
//         Hide project
//       </Link>
//       <Routes>
//         <Route path="project" element={<Project />} />
//       </Routes>
//     </div>
//   );
// }

// export default ProjectsGallery;



function ProjectsGallery(props) {
  return (

    <div class="container">
      <h2 id="projects-header">My projects</h2>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <ProjectCard
          name={projects[0].name}
          image={projects[0].image}
          url={projects[0].url}
          github={projects[0].github}
        />
      </div>
      <div class="col-md-4">
        <ProjectCard
          name={projects[1].name}
          image={projects[1].image}
          url={projects[1].url}
          github={projects[1].github}
        />
      </div>
      <div class="col-md-4">
        <ProjectCard
          name={projects[2].name}
          image={projects[2].image}
          url={projects[2].url}
          github={projects[2].github}
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <ProjectCard
          name={projects[3].name}
          image={projects[3].image}
          url={projects[3].url}
          github={projects[3].github}
        />
      </div>
      <div class="col-md-4">
        <ProjectCard
          name={projects[4].name}
          image={projects[4].image}
          url={projects[4].url}
          github={projects[4].github}
        />
      </div>
      <div class="col-md-4">
        <ProjectCard
          name={projects[5].name}
          image={projects[5].image}
          url={projects[5].url}
          github={projects[5].github}
        />
      </div>
    </div>
  </div>
  );
}

export default ProjectsGallery;