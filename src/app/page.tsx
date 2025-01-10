import React from 'react';

// Aquí va tu foto de perfil y tus habilidades
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
          <h1 className="display-4 text-dark">¡Hola, soy Judit!</h1>
          <p className="lead text-muted">
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
            <img src="https://via.placeholder.com/50" alt="Python" className="skill-icon" />
            <p className="text-center">Python</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="Django" className="skill-icon" />
            <p className="text-center">Django</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="React" className="skill-icon" />
            <p className="text-center">React</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="Flask" className="skill-icon" />
            <p className="text-center">Flask</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="Next.js" className="skill-icon" />
            <p className="text-center">Next.js</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="AWS" className="skill-icon" />
            <p className="text-center">AWS</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="SQLite" className="skill-icon" />
            <p className="text-center">SQLite</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="SQLAlchemy" className="skill-icon" />
            <p className="text-center">SQLAlchemy</p>
          </div>
          <div className="skill-card">
            <img src="https://via.placeholder.com/50" alt="Git" className="skill-icon" />
            <p className="text-center">Git</p>
          </div>
        </div>
      </div>

      {/* Sección de habilidades blandas */}
      <div className="soft-skills py-5">
        <h2 className="text-center mb-4">Habilidades Blandas</h2>
        <div className="soft-skills-list d-flex flex-wrap justify-content-center">
          <div className="soft-skill-card">
            <i className="bi bi-person-lines-fill" style={{ fontSize: '3rem' }}></i>
            <p className="text-center">Trabajo en equipo</p>
          </div>
          <div className="soft-skill-card">
            <i className="bi bi-lightbulb" style={{ fontSize: '3rem' }}></i>
            <p className="text-center">Creatividad</p>
          </div>
          <div className="soft-skill-card">
            <i className="bi bi-graph-up-arrow" style={{ fontSize: '3rem' }}></i>
            <p className="text-center">Orientada a resultados</p>
          </div>
          <div className="soft-skill-card">
            <i className="bi bi-clock" style={{ fontSize: '3rem' }}></i>
            <p className="text-center">Gestión del tiempo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
