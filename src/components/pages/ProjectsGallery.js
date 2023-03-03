import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Project from './Project';

function ProjectsGallery(props) {
  return (
    <div>
      <h1>Projects Gallery</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. 
      </p>
      <Link to="project" role="button" className="btn btn-link">
        Show project
      </Link>
      <Link to="project-gallery" role="button" className="btn btn-link">
        Hide project
      </Link>
      <Routes>
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default ProjectsGallery;
