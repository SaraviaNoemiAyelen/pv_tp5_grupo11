import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar fixed-top">
      <div className="container">

        {/* Barra de navegación en escritorio */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link btn-1" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-1" to="/alumnos">
              Lista de Alumnos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-1" to="/alumnos/nuevo">
              Agregar Alumno
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-1" to="/acerca">
              Acerca de
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default NavBar;
