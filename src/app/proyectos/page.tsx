import React from 'react';

// Define la interfaz para un repositorio
interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
}

// Define un tipo para manejar la respuesta que puede ser un array de repositorios o un error
type ReposData = Repo[] | { error: string };

// Aquí definimos los nombres de los repositorios que quieres mostrar
const selectedReposNames = [
    "Cocktails_and_Dishes", 
    "practicas-Python",
    "Gestor_Productos",
    "gestor_libros",
    "i003-cerem-back",
    "spain-fs-pt-67-JA-JR"
];

// Este es un componente de servidor en Next.js 13
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

  // Filtrar repositorios seleccionados
  const filteredRepos = reposData.filter((repo) =>
    selectedReposNames.includes(repo.name)
  );

  return (
      <div className="container mt-5">
          <h1 className="text-center mb-4 text-dark">Mis Proyectos</h1>
          
          {/* Card Contenedor Principal */}
          <div className="card shadow-lg p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: '15px' }}>
              {/* Fila con fondo degradado y alineación de cards */}
              <div className="row py-4 d-flex justify-content-center" style={{ background: 'linear-gradient(to right, #BB377D, #FBD3E9)', borderRadius: '10px', flexWrap: 'wrap' }}>
                  {filteredRepos.map((repo) => (
                      <div className="col-md-4 mb-4" key={repo.id} style={{ display: 'flex', justifyContent: 'center' }}>
                          <div className="card shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', width: '300px' }}>
                              <div className="card-body">
                                  <h5 className="card-title text-dark">{repo.name}</h5>
                                  <h6 className="card-subtitle mb-2 text-muted">{repo.language}</h6>
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
