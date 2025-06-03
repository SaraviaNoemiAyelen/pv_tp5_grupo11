import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditarAlumno.css";
function EditarAlumno({ obtenerAlumno, editarAlumno }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const alumnoExistente = obtenerAlumno(id);

  const [alumno, setAlumno] = useState(
    alumnoExistente || {
      Lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    }
  );

  useEffect(() => {
    if (alumnoExistente) {
      setAlumno(alumnoExistente);
    }
  }, [alumnoExistente]);

  if (!alumnoExistente) {
    return <div>Alumno no encontrado.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarAlumno(alumno); 
    navigate("/alumnos"); 
  };

  return (
    <div className="editar-container">
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit} className="editar-form">
        <label>
          LU:
          <input
            type="text"
            name="Lu"
            value={alumno.Lu}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={alumno.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={alumno.apellido}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Curso:
          <input
            type="text"
            name="curso"
            value={alumno.curso}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={alumno.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Domicilio:
          <input
            type="text"
            name="domicilio"
            value={alumno.domicilio}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={alumno.telefono}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-button">
          Guardar Cambios
        </button>
        <button
          type="button"
          className="cancel-button"
          onClick={() => navigate("/alumnos")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default EditarAlumno;
