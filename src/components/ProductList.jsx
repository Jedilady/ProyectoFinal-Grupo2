import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products'; // Importa el array de productos

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);// Inicialmente muestra todos los productos

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
      <div>
        <button onClick={() => filterByCategory("Blusas")}>Blusas</button>
        <button onClick={() => filterByCategory("Pantalones")}>Pantalones</button>
        <button onClick={() => filterByCategory("Vestidos")}>Vestidos</button>
        <button onClick={filterAvailable}>Mostrar disponibles</button>
      </div>

      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;
  
  
  
  















const ProductsPage = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ProductList />  {/* Aquí se debería renderizar el listado de productos */}
    </div>
  );
};

//export default ProductsPage;
