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

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="Cesta">
      <h1 className="Cesta">🛒 Carrito de Compra</h1>
      {cart.length === 0 ? (
        <p> Está vacío. </p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cesta">
                <span> {item.name}  € {item.price} x {item.quantity}</span>
                <button
                  className="cesta"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p className="cesta">Total: € {totalPrice.toFixed(2)}</p>
          <Link to="/checkout" className="cesta">
            Ir a Pagar
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
