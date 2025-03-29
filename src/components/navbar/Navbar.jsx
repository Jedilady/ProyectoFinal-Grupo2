import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { BsPersonCircle, BsCart2, BsBag, BsList, BsXLg, BsBoxArrowInRight } from 'react-icons/bs';
import { useCart } from '../../context/CartContext';
import './Navbar.css';
import UserContext from '../../context/UserContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(UserContext); //obtenemos el usuario del contexto
  const { totalItems } = useCart(); //SE OBTIENE EL NUMERO TOTAL DE PRODUCTOS EN EL CARRITO LEIDY//

  //Manejo del menú hamburguesa
  //seteo para manejar si el menú está abierto o cerrado (cerrado/false por default)
  const [menuOpen, setMenuOpen] = useState(false);
  //llamamos al hook de location para usarlo en el useEffect
  const location = useLocation();

  //Usamos un useEffect para que, al cambiar de url, se cierre el menú automáticamente
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  //ToDo: cerrar menu/marcar en el menú cuando se hace click al mismo url en el que se está

  //manejador de los enlaces a productos
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
    );
  };

  return (
    <nav className="navbar">
      {/* Grupo de enlaces a Productos la izquierda (ocultos en móvil) */}
      <div className="nav-left">{navProductsContent()}</div>

      {/* Menú hamburguesa en móviles */}
      <div className="nav-burger">
        <button
          className="nav-burger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen && <BsList />}
          {menuOpen && <BsXLg />}
        </button>
      </div>

      {/* Menú desplegable en móviles - con animación */}
      <div className={`nav-left-mobile ${menuOpen ? 'open' : ''}`}>
        {navProductsContent()}
      </div>

      {/* Centro: logo */}
      <div className="nav-logo-home">
        <Link to="/" className="nav-link">
          <span className="nav-logo-img"></span>
          <span className="nav-logo">Nüa</span>
        </Link>
      </div>
      {/* Grupo de enlaces de usuario a la derecha (iconos en móvil)*/}
      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user hidden-xs hidden-s">
              Hola, {user.name || 'Desconocido'}!
            </span>
            <Link to="/profile">
              <button className="hidden-xs hidden-s hidden-md nav-button">Perfil</button>
              <BsPersonCircle className="nav-icon hidden-lg hidden-xlg nav-user-icon-logged" />
            </Link>
            <button
              onClick={logout}
              className="hidden-xs hidden-s nav-button hidden-md logout-button"
            >
              Log Out
            </button>
            <BsBoxArrowInRight className="nav-icon hidden-lg hidden-xlg" />
          </>
        ) : (
          <Link to="/login" className="nav-link">
            <button className="hidden-xs hidden-s hidden-md nav-button">Login</button>
            <BsPersonCircle className="nav-icon hidden-lg hidden-xlg" />
          </Link>
        )}
        <Link to="/products" className="nav-link">
          <button className="hidden-xs hidden-s hidden-md nav-button">Productos</button>
          <BsBag className="nav-icon hidden-lg hidden-xlg" />
        </Link>
        <Link to="/cart" className="nav-cart-bt">
          <button className="hidden-xs hidden-s hidden-md nav-button">
            Carrito ({totalItems})
          </button>
          <BsCart2 className="nav-icon hidden-lg hidden-xlg" />
          <span className="hidden-lg hidden-xlg">({totalItems})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
