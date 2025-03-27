// AQUI ESTA TODAS LAS FUNCIONALIDADEDS DEL CARRITO, Y PERMITE QUE LA APLICACION
// SEA MAS ESCALABLE Y FACIL DE MANTENER.

import { createContext, useState, useContext } from "react";
/*import products from "../data/products";*/

// Creación del contexto
const CartContext = createContext();

//  Hook personalizado para acceder al contexto
export const useCart = () => useContext(CartContext);

//  Proveedor del carrito, envuelve la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //  Agregar producto
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar producto
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Total de productos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Total a Pagar
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};