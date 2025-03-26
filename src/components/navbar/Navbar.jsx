import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsPersonCircle, BsCart2, BsBag } from "react-icons/bs";
import './Navbar.css';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useContext(UserContext); //obtenemos el usuario del contexto

  return (
    <nav className="navbar">
      <div className='nav-left'>
        {/* Grupo de enlaces a Productos la izquierda (ocultos en móvil) */}
        <Link to="/products/Blusas">
            <button className="footer-button">Blusas</button>
        </Link>
        <Link to="/products/Pantalones">
          <button className="footer-button">Pantalones</button>
        </Link>
        <Link to="/products/Vestidos">
          <button className="footer-button">Vestidos</button>
        </Link>
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
            <span className="nav-user">Hola, {user.name || 'Desconocido'}!</span>
            <Link to="/profile">
              <button className="nav-button">Perfil</button>
            </Link>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <button className="hidden-xs nav-button">Login</button>
            <BsPersonCircle className='hidden-md hidden-lg' />
          </Link>
        )}
        <Link to="/products" className="nav-link">
          <button className="hidden-xs nav-button">Productos</button>
          <BsBag className='hidden-md hidden-lg' />
        </Link>
        <Link to="/cart">
          <button className="hidden-xs nav-button">Carrito</button>
          <BsCart2 className='hidden-md hidden-lg' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
