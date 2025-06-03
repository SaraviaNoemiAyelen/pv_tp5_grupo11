import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      
      <h1 className="home-title">Gestión de Alumnos</h1>
      
     <p className="home-description">
        Esta aplicación te permite gestionar fácilmente la información de los alumnos de forma organizada y eficiente.
        <br />
          Podrás agregar, editar, eliminar y consultar los datos detallados de cada estudiante en pocos pasos.
          Utilizá el menú de navegación para acceder rápidamente a todas las secciones del sistema
      </p>
      
    </div>
  );
}

export default Home;