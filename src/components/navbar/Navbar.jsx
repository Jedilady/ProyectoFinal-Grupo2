import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import './Navbar.css';

const Navbar = () => {
  const { totalItems } = useCart(); //SE OBTIENE EL NUMERO TOTAL DE PRODUCTOS EN EL CARRITO LEIDY//
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <span className='nav-logo'>NÜA</span>
      </Link>

      <Link to="/login" className="nav-link">
        <button className="nav-button">Login</button>
      </Link>

      <Link to="/products" className="nav-link">
        <button className="nav-button">Productos</button>
      </Link>
      <Link to="/cart">🛒Carrito ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;
