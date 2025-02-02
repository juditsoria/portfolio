"use client";
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
import ContributionGraph from '@raulcanodev/react-github-dots'

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección de introducción */}
      <div className="intro-section text-center">

        <div className="description">
          <h1 className="title display-4">¡Hola, soy Judit!</h1>
          <h4> Estas son mis contribuciones en GitHub:</h4>
          <ContributionGraph
            username="juditsoria"
            token={process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN ?? ""}
            customColorScheme={[
              "#2d2d2d",  // Sin contribuciones (negro)
              "#cc0000",  // Poca actividad (rojo claro)
              "#990000",  // Actividad moderada (rojo oscuro)
              "#660000",  // Alta actividad (rojo más oscuro)
              "#330000"   // Máxima actividad (rojo muy oscuro)
            ]}
          />
          <br></br>
          <br></br>
          <p className=" description lead ">
          Desarrolladora Full Stack con un enfoque en backend y tecnologías emergentes. 
          Mi propósito es construir soluciones que hagan más fácil y eficiente la vida de las 
          personas. Busco constantemente optimizar procesos y contribuir a proyectos que transformen
           la tecnología en herramientas accesibles y eficaces. Trabajo de manera ágil, colaborativa 
           y siempre abierta a aprender algo nuevo. ¡La curiosidad es mi motor!
          Fuera del código, me encanta explorar nuevos lugares y probar sabores que despierten mi 
          creatividad.  ¡Conectemos y trabajemos juntos en la creación de algo 
          increíble!
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
            <p className="text-center">Django</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faPython} className="skill-icon" size="3x" />
            <p className="text-center">Tkinter</p>
          </div>
          <div className="skill-card">
            <FontAwesomeIcon icon={faSitemap} className="skill-icon" size="3x" />
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
            <FontAwesomeIcon icon={faBootstrap} className="skill-icon" size="3x" />
            <p className="text-center">Bootstrap</p>
          </div>
        </div>
      </div>

      {/* Sección de habilidades blandas */}
      <div className="soft-skills py-5">
        <h2 className="text-center mb-4">Habilidades Blandas</h2>
        <div className="soft-skills-list d-flex flex-wrap justify-content-center">
          <div className="soft-skill-card">
            <FontAwesomeIcon icon={faThumbsUp} className="soft-skill-icon" size="3x" />
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
