import React from 'react'
import './Footer.css'
import { Outlet } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-space">
          <div className="footer-flex">
            <section className="footer-section">
              <h4 className="footer-section-title">Ayuda</h4>
              <nav>
                <ul>
                  <li>Centro de ayuda</li>
                  <li>Opciones de cancelacion</li>
                  <li>Problemas de entrega</li>
                </ul>
              </nav>
            </section>
            <section className="footer-section">
              <h4 className="footer-section-title">Acerca de</h4>
              <nav>
                <ul>
                  <li>Nuestra tienda</li>
                  <li>Investor relations</li>
                  <li>Blog</li>
                </ul>
              </nav>
            </section>
            <section className="footer-section">
              <h4 className="footer-section-title">Redes sociales</h4>
              <nav>
                <ul>
                  <li>Twitter</li>
                  <li>Youtube</li>
                  <li>Instagram</li>
                </ul>
              </nav>
            </section>
            <section className="footer-section">
              <h4 className="footer-section-title">Productos</h4>
              <nav>
                <ul>
                  <li>Categorias</li>
                  <li>Publicar tu producto</li>
                  <li>Opcion generica</li>
                </ul>
              </nav>
            </section>
          </div>
          <section className="footer-section-extra">
            <div className="footer-section-extra-items">
              <div>
                <p>© Iñaki P, Bautista S.</p>
              </div>
              <div>$ USD</div>
            </div>
          </section>
        </div>
      </footer>
      <Outlet />
    </>
  );
}

export default Footer