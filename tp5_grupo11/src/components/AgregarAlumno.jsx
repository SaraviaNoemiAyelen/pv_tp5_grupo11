import React, { useState } from "react";

function AgregarAlumno({ agregarAlumno }) {
  const [alumnoForm, setAlumnoForm] = useState({
    Lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumnoForm({ ...alumnoForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno(alumnoForm); 
    setAlumnoForm({
      Lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
  };

  return (
    <div className="agregar-container">
      <h2>Agregar Nuevo Alumno</h2>
      <form onSubmit={handleSubmit} className="agregar-form">
        <label>
          LU:
          <input
            type="text"
            name="Lu"
            value={alumnoForm.Lu}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={alumnoForm.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={alumnoForm.apellido}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Curso:
          <input
            type="text"
            name="curso"
            value={alumnoForm.curso}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={alumnoForm.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Domicilio:
          <input
            type="text"
            name="domicilio"
            value={alumnoForm.domicilio}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={alumnoForm.telefono}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-button">
          Agregar Alumno
        </button>
      </form>
    </div>
  );
}

export default AgregarAlumno;