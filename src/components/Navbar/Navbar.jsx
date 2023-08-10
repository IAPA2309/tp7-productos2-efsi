import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar sticky">
        <nav>
          <Link to="/home">Inicio</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/chart">Carrito</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
