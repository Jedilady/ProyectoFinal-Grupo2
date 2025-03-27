import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import './Navbar.css';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const { user } = useContext(UserContext); //obtenemos el usuario del contexto

  const { totalItems } = useCart(); //SE OBTIENE EL NUMERO TOTAL DE PRODUCTOS EN EL CARRITO LEIDY//
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <span className='nav-logo'>NÜA</span>
      </Link>

      {user ? (
        <>
          <span className="nav-user">Hola, {user.name || 'Desconocido'}!</span>
          <Link to="/profile">
            <button className="nav-button">Perfil</button>
          </Link>
        </>
      ) : (
        <Link to="/login" className="nav-link">
          <button className="nav-button">Login</button>
        </Link>
      )}

      <Link to="/products" className="nav-link">
        <button className="nav-button">Productos</button>
      </Link>
      <Link to="/cart">🛒Carrito ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;
