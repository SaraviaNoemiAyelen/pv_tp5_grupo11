import React from "react";
import "./AcercaDe.css"; // ¡Añade esta línea!

function AcercaDe() {
  return (
    <div className="acerca-container">
      <h2>Acerca de</h2>
      <p className="acerca-text">
        Esta aplicación fue desarrollada por el Grupo 11 para
        el Trabajo Práctico N° 5 de Programación Visual.
      </p>
      <h3>Integrantes del grupo:</h3>
      <ul className="integrantes-lista">
        <li>Marcela Susana Guzmán</li>
        <li>Axel Humberto Nahuel Llampa</li>
        <li>Matias Esteban Mamani</li>
        <li>Camila Isabel Mendoza</li>
        <li>Noemí Ayelén Saravia</li>
      </ul>
    </div>
  );
}
export default AcercaDe;