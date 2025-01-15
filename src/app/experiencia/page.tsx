import React from 'react';
import './experiencia.css'; 

type Experience = {
  title: string;
  institution: string;
  year: string;
  description: string[];
};

type ExperiencesProps = {
  experience: Experience[]; 
};

const Experience: React.FC<ExperiencesProps> = ({ experience }) => {
  if (!experience || !Array.isArray(experience)) {
    return <p>No hay experiencia disponible.</p>;
  }

  return (
    <div className="container">
      <h2 className="title">Mi Experiencia Laboral</h2>
      <ul className="list">
        {experience.map((exp) => (
          <li key={exp.title} className="item">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="institution">{exp.institution}</p>
            <span className="year">{exp.year}</span>
            <ul className="description-list">
              {exp.description.map((point, index) => (
                <li key={index} className="description-item">{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
const experience = [
  {
    title: 'Desarrolladora Backend',
    institution: 'No Country',
    description: [
      "Desarrollar y mantener la arquitectura del servidor utilizando Django para una plataforma de búsqueda de empleo.",
      "Garantizar aplicaciones web estables y funcionales que satisfagan las necesidades de la empresa.",
      "Liderar a dos equipos adicionales, coordinando esfuerzos y asegurando la calidad y eficiencia en el desarrollo del proyecto."
    ],
    year: '2025'
  },
  {
    title: 'Full Stack Developer',
    institution: 'Bubbo T.V',
    description: [
      "Desarrollar y optimizar funciones clave en la app con React Native y TypeScript, asegurando que los usuarios puedan descubrir contenido de streaming adaptado a sus preferencias.",
      "Colaborar en la integración de características multidispositivo, asegurando una experiencia fluida en diferentes plataformas.",
      "Trabajar con un equipo multidisciplinario en un entorno ágil, donde cada iteración mejora la app de manera continua y basada en feedback directo de los usuarios."
    ],
    year: '2024'
  }
];

const App: React.FC = () => {
  return <Experience experience={experience} />;
};

export default App;
