import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { BsPersonCircle, BsCart2, BsBag, BsList, BsXLg } from "react-icons/bs";
import './Navbar.css';
import UserContext from '../../context/UserContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  const { user } = useContext(UserContext); //obtenemos el usuario del contexto
  
  //Manejo del menú hamburguesa
  //seteo para manejar si el menú está abierto o cerrado (cerrado/false por default)
  const [menuOpen, setMenuOpen] = useState(false);
  //llamamos al hook de location para usarlo en el useEffect
  const location = useLocation();

  //Usamos un useEffect para que, al cambiar de url, se cierre el menú automáticamente
  useEffect (() => {
      setMenuOpen(false)
    },[location.pathname]
  )
  //ToDo: cerrar menu/marcar en el menú cuando se hace click al mismo url en el que se está


  const navProductsContent = () => {
    return (
      <>
        <Link to="/products/Blusas">
            <button className="footer-button">Blusas</button>
        </Link>
        <Link to="/products/Pantalones">
          <button className="footer-button">Pantalones</button>
        </Link>
        <Link to="/products/Vestidos">
          <button className="footer-button">Vestidos</button>
        </Link>
      </>
    )
  }

  return (
    <nav className="navbar">
      
      {/* Grupo de enlaces a Productos la izquierda (ocultos en móvil) */}
      <div className='nav-left'>
        {navProductsContent()}
      </div>

      {/* Menú hamburguesa en móviles */}
      <div className='nav-burger'>
      <button 
          className="nav-burger-button" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen && <BsList />}
          {menuOpen && <BsXLg />}
        </button>
      </div>

      {/* Menú desplegable en móviles - old version
      {menuOpen && (
        <div className={'nav-left-mobile'}>
          {navProductsContent()}
        </div>
      )}
      */}
      {/* Menú desplegable en móviles - con animación */}
      <div className={`nav-left-mobile ${menuOpen ? "open" : ""}`}>
        {navProductsContent()}
      </div>
      
      {/* Centro: logo */}
      <div className='nav-logo-home'>
        <Link to="/" className="nav-link">
          <span className='nav-logo'>Nüa</span>
        </Link>
      
      </div>
      {/* Grupo de enlaces de usuario a la derecha (iconos en móvil)*/}
      <div className='nav-right'>
        {user ? (
          <>
            <span className="nav-user hidden-xs">Hola, {user.name || 'Desconocido'}!</span>
            <Link to="/profile">
              <button className="hidden-xs hidden-s nav-button">Perfil</button>
              <BsPersonCircle className='nav-icon hidden-md hidden-lg nav-user-icon-logged' />
            </Link>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <button className="hidden-xs hidden-s nav-button">Login</button>
            <BsPersonCircle className='nav-icon hidden-md hidden-lg' />
          </Link>
        )}
        <Link to="/products" className="nav-link">
          <button className="hidden-xs hidden-s nav-button">Productos</button>
          <BsBag className='nav-icon hidden-md hidden-lg' />
        </Link>
        <Link to="/cart">
          <button className="hidden-xs hidden-s nav-button">Carrito</button>
          <BsCart2 className='nav-icon hidden-md hidden-lg' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
