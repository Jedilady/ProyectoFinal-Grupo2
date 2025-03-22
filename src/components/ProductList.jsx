import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json'; // Importa el array de productos

// Muestra la lista de productos y maneja el estado de los productos
function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Inicialmente muestra todos los productos

  useEffect(() => {
    setProducts(productsData); // Cargar los productos desde el archivo JSON
    setFilteredProducts(productsData); // Inicializa los productos filtrados
  }, []);

  // Función para filtrar productos por categoría
  const filterByCategory = (category) => {
    setFilteredProducts(products.filter(product => product.category === category));
  };

  // Función para filtrar productos disponibles (stock > 0)
  const filterAvailable = () => {
    setFilteredProducts(products.filter(product => product.stock > 0));
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div>
        <button onClick={() => filterByCategory("Blusas")}>Blusas</button>
        <button onClick={() => filterByCategory("Pantalones")}>Pantalones</button>
        <button onClick={() => filterByCategory("Vestidos")}>Vestidos</button>
        <button onClick={filterAvailable}>Mostrar disponibles</button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.images.front} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Categoría: {product.category}</p>
            <p>Precio: ${product.price}</p>
            <p>Tamaños disponibles: {product.sizes.join(", ")}</p>
            <p>Colores disponibles: {product.color.join(", ")}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;





