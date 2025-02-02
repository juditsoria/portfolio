import React from 'react';
import './proyectos.css';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

type ReposData = Repo[] | { error: string };

// Aquí definimos los nombres de los repositorios
const selectedReposNames = [
  "NeuroNet",
  "Cocktails_and_Dishes",
  "practicas-Python",
  "Gestor_Productos",
  "gestor_libros",
  "i003-cerem-back",
  "spain-fs-pt-67-JA-JR",
];

const manualDescriptions: { [key: string]: string } = {
  "NeuroNet": "Este es un proyecto para la gestión de recursos psicológicos, reservas y evaluaciones en línea. Además, cuenta con una API para integrar artículos relacionados con temas psicológicos, como la ansiedad, y otros recursos que pueden ser consultados por los usuarios.",
  "Cocktails_and_Dishes": "Aplicación para gestionar recetas de cócteles y platos. Hecha con Next.js para en frontend, flask para el backend y SQLite para la base de datos con el ORM SQLAlchemy.",
  "practicas-Python": "Repositorio con ejercicios y proyectos de Python y varias de sus librerias.",
  "Gestor_Productos": "Aplicación para gestionar productos en una tienda online hecha con la libreria Tkinter, SQLite para la base de datos con el ORM SQLAlchemy.",
  "gestor_libros": "Sistema para gestionar una librería, con búsqueda y administración.",
  "i003-cerem-back": "Backend del proyecto Cerem: plataforma de marketing impusada por Inteligencia Artificial. Django, Pruebas unitarias con unittest y BBDD con postrgreSQL.",
  "spain-fs-pt-67-JA-JR": "Repositorio del proyecto Fullstack en el curso de desarrollo.",
};
const Projects = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  let reposData: Repo[] = [];

  try {
    const res = await fetch(`https://api.github.com/users/juditsoria/repos`);
    if (!res.ok) {
      throw new Error('No se pudieron cargar los repositorios');
    }
    reposData = await res.json();
  } catch (err: any) {
    return <p className="alert alert-danger">Error: {err.message}</p>;

  }


  const filteredRepos = reposData.filter((repo) =>
    selectedReposNames.includes(repo.name)
  );

  return (
    <div className="container">
      <h1 className="text-center mb-4">Mis Proyectos</h1>
      <div className="row">
        {filteredRepos.map((repo, index) => (
          <div className="col-md-4 mb-4" key={repo.id}>
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2">{repo.language}</h6>
                <p className="card-text text-dark">
                  {manualDescriptions[repo.name] || repo.description || 'Sin descripción disponible.'}
                </p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-2">
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default Projects;
