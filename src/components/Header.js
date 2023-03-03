import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Maciej Klimowicz Portfolio</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
  
      <li className="nav-item">
        <NavLink
          to="projects-gallery"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects Gallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
    </div>
  );
}

export default Header;
