import React from 'react'
import './Footer.css'
import { Outlet } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer-section">
          <h2>Ayuda</h2>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </section>
        <section className="footer-section">
          <h2>Contacto</h2>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </section>
        <section className="footer-section">
          <h2>Productos</h2>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </section>
      </footer>
      <Outlet />
    </>
  );
}

export default Footer