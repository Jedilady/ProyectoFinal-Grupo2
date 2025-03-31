/*function CartPage() {
  return (
    <div>
      <h1>Esto es el Carrito de compra</h1>
    </div>
  );
}
export default CartPage;*/

//AGREGADO POR LEIDY//
// FUNCION QUE MUESTRA EL CONTENIDO DEL CARRITO Y PERMITE AL USUARIO GESTIONAR SUS PRODUCTOS
// ANTES DE PROCEDER AL PAGO.

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../components/shoppingCart/Cart.css";

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="cartContainer">
      <h2 className="cartTitle"> Tú Carrito de Compra</h2>
      {cart.length === 0 ? (
        <h3 className="emptyCartMessage">Está vacío. </h3>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span> {item.name}  € {item.price} x {item.quantity}</span>
                <button
                  className="cart-button"
                  onClick={() => removeFromCart(item.id)}>
                  Eliminar 
                </button>
              </li>
            ))}
          </ul>
          <h4 className="totelPrice">Total: € {totalPrice.toFixed(2)}</h4>
          <Link to="/checkout" className="checkoutLink">        
            <h5>Pagar Ahora</h5>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
