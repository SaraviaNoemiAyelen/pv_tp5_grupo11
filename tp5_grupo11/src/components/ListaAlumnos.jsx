import React from "react";
import { Link } from "react-router-dom"; // Importa Link para los botones de navegación
import "./ListaAlumnos.css";

function ListaAlumnos({ alumnos, eliminarAlumno }) {
  return (
    <div className="lista-alumnos-container">
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos registrados. ¡Agrega uno nuevo!</p>
      ) : (
        <table className="alumnos-table">
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.Lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>
                  
                  <Link to={`/alumnos/${alumno.id}`} className="btn-view">
                    Ver Detalles
                  </Link>
                  <Link to={`/alumnos/${alumno.id}/editar`} className="btn-edit">
                    Editar
                  </Link>
                  <button
                    onClick={() => eliminarAlumno(alumno.id)}
                    className="btn-delete"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaAlumnos;
