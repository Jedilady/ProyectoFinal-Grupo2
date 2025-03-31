//ESTA FUNCION MUESTRA EL PRODUCTO DENTRO DEL CARRITO CON INFORMACION
// DE UN PRODUCTO ESPECIFICO CON OPCION DE COMPRA

import React from 'react';
import { useCart} from "../context/CartContext";
import "../components/shoppingCart/Cart.css";

const Cart = ({ product }) => {
  const { addToCart } = useCart(); //se encarga de añadir productos//

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: € {product.price}</p>
      <button
        onClick={() => addToCart(product)}>🛒 Agregar al carrito
      </button>
    </div>
  );
};

export default Cart;
