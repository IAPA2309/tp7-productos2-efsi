import {React, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import SearchInput from "../SearchInput/SearchInput";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div>
      <div
        className={scrolled ? "navbar sticky floating-shadow" : "navbar sticky"}
      >
        <div className="navbar-grid-container">
          <SearchInput />
          <nav className="nav-container">
            <Link to="/home">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/chart">Carrito</Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
