import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <span className='nav-logo'>Nua</span>
      </Link>

      <Link to="/login" className="nav-link">
        <button className="nav-button">Login</button>
      </Link>

      <Link to="/products" className="nav-link">
        <button className="nav-button">Productos</button>
      </Link>
      <Link to="/cart">
        <button className="nav-button">Carrito</button>
      </Link>
    </nav>
  );
};

export default Navbar;
