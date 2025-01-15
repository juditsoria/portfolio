import React from "react";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#FF69B4' }}>
        <a className="navbar-brand" href="/" style={{ fontSize: '24px' }}>Home</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-4"> {/* Aumenté el margen entre los items */}
              <a className="nav-link" href="/proyectos" style={{ fontSize: '18px' }}>Proyectos</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/experiencia" style={{ fontSize: '18px' }}>Experiencia laboral</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/estudios" style={{ fontSize: '18px' }}>Educación</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/login" style={{ fontSize: '18px' }}>Blog personal</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="/contacto" style={{ fontSize: '18px' }}>Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
