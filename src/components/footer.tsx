import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer text-center py-3">
      <div>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon 
            icon={faGithub} 
            className="footer-icon" 
            size="1x" // El tamaño ahora es igual al de las habilidades
          /> */}
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon 
            icon={faLinkedin} 
            className="footer-icon" 
            size="1x" // El tamaño ahora es igual al de las habilidades
          /> */}
        </a>
      </div>
      <p>&copy; 2025 Judit. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
