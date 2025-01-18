import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faReact, 
  faAws, 
  faGit, 
  faJsSquare,
  faNodeJs,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faFlask,
  faClock,
  faChartLine,
  faLightbulb,
  faServer,
  faSitemap,
  faThumbsUp 
} from '@fortawesome/free-solid-svg-icons'; // Flask y base de datos

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección de introducción */}
      <div className="intro-section text-center">
        <div className="photo-container mb-4">
          <img
            src="https://via.placeholder.com/200" // Cambia la URL por la de tu foto real
            alt="Tu foto"
            className="profile-photo"
          />
        </div>

        <div className="description">
          <h1 className="title display-4">¡Hola, soy Judit!</h1>
          <p className=" description lead ">
            Desarrolladora Full-Stack con un enfoque en la Inteligencia Artificial y la creación de soluciones tecnológicas innovadoras.
            Con experiencia en backend, frontend y desarrollo de aplicaciones completas. ¡Aquí es donde la magia ocurre!
          </p>
        </div>
      </div>

       {/* Sección de habilidades técnicas */}
       <div className="skills py-5">
        <h2 className="text-center mb-4">Mis Habilidades Técnicas</h2>
        <div className="skills-list d-flex flex-wrap justify-content-center">
          <div className="skill-card">
            <FontAwesomeIcon icon={faPython} className="skill-icon" size="2x" />
            <p className="text-center">Python</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faFlask} className="skill-icon" size="3x" />
            <p className="text-center">Flask</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faPython} className="skill-icon" size="3x" />
            <p className="text-center">Tkinter</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faSitemap } className="skill-icon" size="3x" />
            <p className="text-center">Inteligencia Artificial</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faDatabase} className="skill-icon" size="3x" />
            <p className="text-center">Pandas</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faDatabase} className="skill-icon" size="3x" />
            <p className="text-center">NumPy</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faSitemap} className="skill-icon" size="3x" />
            <p className="text-center">Scikit-learn</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faJsSquare} className="skill-icon" size="3x" />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faReact} className="skill-icon" size="3x" />
            <p className="text-center">React</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faReact} className="skill-icon" size="3x" />
            <p className="text-center">React Native</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faNodeJs} className="skill-icon" size="3x" />
            <p className="text-center">Node.js</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faJsSquare} className="skill-icon" size="3x" />
            <p className="text-center">TypeScript</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faAws} className="skill-icon" size="3x" />
            <p className="text-center">AWS</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faDatabase} className="skill-icon" size="3x" />
            <p className="text-center">SQLite</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faDatabase} className="skill-icon" size="3x" />
            <p className="text-center">SQLAlchemy</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faGit} className="skill-icon" size="3x" />
            <p className="text-center">Git</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faBootstrap } className="skill-icon" size="3x" />
            <p className="text-center">Bootstrap</p>
          </div>
        </div>
      </div>

      {/* Sección de habilidades blandas */}
      <div className="soft-skills py-5">
        <h2 className="text-center mb-4">Habilidades Blandas</h2>
        <div className="soft-skills-list d-flex flex-wrap justify-content-center">
          <div className="soft-skill-card">
            <FontAwesomeIcon icon={faThumbsUp } className="soft-skill-icon" size="3x" />
            <p className="text-center">Trabajo en equipo</p>
          </div>
          <div className="soft-skill-card">
            <FontAwesomeIcon icon={faLightbulb} className="soft-skill-icon" size="3x" />
            <p className="text-center">Creatividad</p>
          </div>
          <div className="soft-skill-card">
            <FontAwesomeIcon icon={faChartLine} className="soft-skill-icon" size="3x" />
            <p className="text-center">Orientada a resultados</p>
          </div>
          <div className="soft-skill-card">
            <FontAwesomeIcon icon={faClock} className="soft-skill-icon" size="3x" />
            <p className="text-center">Gestión del tiempo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
