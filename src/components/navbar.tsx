// Navbar.js
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">Home</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item mx-4">
            <a className="nav-link" href="/proyectos">Proyectos</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/experiencia">Experiencia laboral</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/estudios">Educación</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/login">Blog personal</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
