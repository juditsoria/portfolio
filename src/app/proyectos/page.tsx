import React from "react";
import "./proyectos.css";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

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
  "NeuroNet": "Este es un proyecto para la gestión de recursos psicológicos...",
  "Cocktails_and_Dishes": "Aplicación para gestionar recetas de cócteles y platos...",
  "practicas-Python": "Repositorio con ejercicios y proyectos de Python...",
  "Gestor_Productos": "Aplicación para gestionar productos en una tienda online...",
  "gestor_libros": "Sistema para gestionar una librería...",
  "i003-cerem-back": "Backend del proyecto Cerem...",
  "spain-fs-pt-67-JA-JR": "Repositorio del proyecto Fullstack...",
};


export default async function Projects() {
  // Si quieres usar el username dinámico proveniente de params, descomenta la siguiente línea:
  // const { username } = params;
  // Por ahora se mantiene un valor fijo para facilitar las pruebas:
  const username = "juditsoria";
  
  let reposData: Repo[] = [];

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!res.ok) {
      throw new Error("No se pudieron cargar los repositorios");
    }
    reposData = await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      return <p className="alert alert-danger">Error: {err.message}</p>;
    }
    return <p className="alert alert-danger">Error desconocido</p>;
  }

  const filteredRepos = reposData.filter((repo) =>
    selectedReposNames.includes(repo.name)
  );

  return (
    <div className="container">
      <h1 className="text-center mb-4">Mis Proyectos</h1>
      <div className="row">
        {filteredRepos.map((repo) => (
          <div className="col-md-4 mb-4" key={repo.id}>
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2">{repo.language}</h6>
                <p className="card-text text-dark">
                  {manualDescriptions[repo.name] ||
                    repo.description ||
                    "Sin descripción disponible."}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary mt-2"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
