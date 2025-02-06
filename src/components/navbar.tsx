"use client";

import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand" href="/">Home</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menú colapsable */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <a className="nav-link" href="/proyectos">Proyectos</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/experiencia">Experiencia laboral</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/estudios">Educación</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
