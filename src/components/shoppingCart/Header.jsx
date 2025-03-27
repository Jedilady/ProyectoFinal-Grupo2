// ESTA FUNCION MUESTRA EL ESTADO ACTUAL DEL CARRITO
//  Y PROPORCIONA LOS ENLACES DE NAVEGACION "AGREGADO POR LEIDY"

import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";


const Header = ()=>{
    const { totalItems } = useCart();

    return (
        <header className="Header">
         <Link to="/" className="logo"> NÜA </Link>
         <Link to="/cart" className="cart-link">
           <FaShoppingCart className="cart-icon" />
           {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </header>
    );
};

export default Header;