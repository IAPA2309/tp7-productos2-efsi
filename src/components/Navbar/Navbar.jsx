import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/home">Inicio</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar