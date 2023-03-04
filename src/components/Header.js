import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          to="/"
        >
          Home
        </NavLink>
      </li>
  
      <li className="nav-item">
        <NavLink
          to="projects-gallery"
        >
          Projects Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
    </div>
  );
}

export default Header;
