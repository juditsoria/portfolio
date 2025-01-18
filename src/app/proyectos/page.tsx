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
    "Cocktails_and_Dishes", 
    "practicas-Python",
    "Gestor_Productos",
    "gestor_libros",
    "i003-cerem-back",
    "spain-fs-pt-67-JA-JR"
    ];


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
      <div className="container mt-5">
          <h1 className="text-center mb-4 text-dark">Mis Proyectos</h1>
          <div className="card shadow-lg p-4" >
              <div className="row py-4 d-flex justify-content-center">
                  {filteredRepos.map((repo) => (
                      <div className="col-md-4 mb-4" key={repo.id} >
                          <div className="card shadow-lg" >
                              <div className="card-body">
                                  <h5 className="card-title">{repo.name}</h5>
                                  <h6 className="card-subtitle mb-2">{repo.language}</h6>
                                  <p className="card-text text-dark">{repo.description || 'Sin descripción disponible.'}</p>
                                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-2">
                                      Ver en GitHub
                                  </a>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Projects;
