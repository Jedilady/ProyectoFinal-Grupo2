import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css"; 

const CustomFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">  
        {/* Sección de Empresa */}
        <div className="footer-section">
          <h3>Empresa</h3>  
          <nav className="footer-nav">
            <ul className="nav-list">
              <li><a href="#">Tiendas</a></li>
              <li><a href="#">Trabaja con Nosotros</a></li>
              <li><a href="#">Política de cookies</a></li>
            </ul>
          </nav>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: contacto@NÜA.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>  

        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon linkedin"/> </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon facebook" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <FaInstagram className="icon instagram" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon youtube" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon twitter" /></a>
          </div>
        </div>  
      </div>

      {/* Derechos Reservados */}
      <p className="copyright">&copy; 2025 NÜA - Todos los derechos reservados.</p>
    </footer>
  );
};

export default CustomFooter;


  