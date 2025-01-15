import React from 'react';
import './estudios.css'; 

type Study = {
  title: string;
  institution: string;
  year: string;
};

type StudiesProps = {
  studies: Study[];
};

const Studies: React.FC<StudiesProps> = ({ studies }) => {
  if (!studies || !Array.isArray(studies)) {
    return <p>No hay estudios disponibles.</p>;
  }

  return (
    <div className="container">
      <h2 className="title">Mis Estudios</h2>
      <ul className="list">
        {studies.map((study) => (
          <li key={study.title} className="item">
            <h3 className="study-title">{study.title}</h3>
            <p className="institution">{study.institution}</p>
            <span className="year">{study.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const study = [
  { title: 'Desarrolladora Full Stack', institution: '4Geeks', year: '2024' },
  { title: 'Máster en IA: Machine Learning y Deep Learning', institution: 'Universidad de Murcia', year: '2024' },
  { title: 'Bases de datos relacionales y modelado de datos', institution: 'Prosergues', year: '2024' },
];

const App: React.FC = () => {
  return <Studies studies={study} />;
};

export default App;
