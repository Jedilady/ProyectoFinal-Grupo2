import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para obtener el id del producto desde la URL
import { ProductsContext } from '../../context/ProductsContext';  // Importamos el contexto
import '../ProductsDetail/ProductsDetail.css';
import { useCart } from "../../context/CartContext.jsx";
//import '../components/contex/CartContex.jsx';

function ProductDetail() {
  const {id } = useParams();  // Obtener el id del producto desde la URL
  const { allProducts, addToFavorites } = useContext(ProductsContext);  // Usamos el contexto
  //const { addToCart } = useContext(CartContext); // Obtén la función de addToCart desde el contexto
  const { addToCart } = useCart(); // Usamos la función de addToCart desde el CartContext


const CartView = () => {
    const { cart, totalItems, totalPrice } = useCart();

    if (cart.length === 0) {
    return <div>El carrito está vacío.</div>;
    }

    return (
    <div>
        <h2>Carrito de Compras</h2>
        {cart.map((product) => (
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: € {product.price}</p>
            <p>Cantidad: {product.quantity}</p>
        </div>
        ))}
        <div>
        <p>Total de productos: {totalItems}</p>
        <p>Total a pagar: € {totalPrice}</p>
        </div>
    </div>
    );
};



  // Filtramos el producto por su id
const product = allProducts.find(product => product.id.toString() === id);

if (!product) {
    return <div>Producto no encontrado</div>;
}

// Funciones para manejar los botones
const handleAddToCart = () => {
    addToCart(product);  // Llama a la función del contexto para agregar al carrito
};

const handleAddToFavorites = () => {
    addToFavorites(product);  // Llama a la función del contexto para agregar a favoritos
};

const handleMouseEnter = (image) => {
    setMainImage(image);
};

const [mainImage, setMainImage] = useState(product.images.model);

return (
    <div className="product-detail">
    
    <div className="product-images">
    <img src={mainImage} alt={product.name} className="main-image" />
    <div className="image-thumbnails">

    <img src={product.images.front} alt={`${product.name} front`}
    onMouseEnter={() => handleMouseEnter(product.images.front)}
    className="thumbnail"
    />
    <img
    src={product.images.back} alt={`${product.name} back`}
    onMouseEnter={() => handleMouseEnter(product.images.back)}
    className="thumbnail"
    />

<img src={product.images.model} alt={`${product.name} model`}
    onMouseEnter={() => handleMouseEnter(product.images.model)}
    className="thumbnail"
    />
</div>
</div>

    <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Precio: {product.price} USD</p>
        <p>Color:{product.color}</p>
        <p>Categoría: {product.category}</p>
        <p>Stock disponible: {product.stock}</p>

        <div>
        <label>Tamaño:</label>
        <select>
            {product.sizes.map((size) => (
            <option key={size} value={size}>
                {size}
            </option>
            ))}

        </select>
        </div>

        <div>
        <button onClick={handleAddToCart}>Añadir al carrito</button>

        <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
        </div>
    </div>
    </div>
);
}

//const CartView = () => {
  //  const { cart, totalItems, totalPrice } = useCart();

    //if (cart.length === 0) {
    //return <div>El carrito está vacío.</div>;
    //}

  //  return (
 //   <div>
   //     <h2>Carrito de Compras</h2>
     //   {cart.map((product) => (
       // <div key={product.id}>
  //          <h3>{product.name}</h3>
    //        <p>Precio: € {product.price}</p>
      //      <p>Cantidad: {product.quantity}</p>
    //    </div>
     //   ))}
     //   <div>
     //   <p>Total de productos: {totalItems}</p>
     //   <p>Total a pagar: € {totalPrice}</p>
     //   </div>
   // </div>
  //  );
//};

export default ProductDetail;