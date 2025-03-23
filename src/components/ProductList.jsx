//NOTE FROM JUVILI: DEPRECATED - This is not needed with the use of the PRODUCT CONTEXT
import React, { useEffect, useState } from 'react';
//import 'src/components/ProductList.css'; //aplicar Css
import ProductCard from './ProductCard'; // Importar el componente ProductCard
import productsData from '../data/products.json'; // Importa el array de productos

// Muestra la lista de productos y maneja el estado de los productos
function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Inicialmente muestra todos los productos

  useEffect(() => {
    
    setProducts(productsData); // Cargar los productos desde el archivo JSON
    setFilteredProducts(productsData); // Inicializa los productos filtrados
  }, []);

  //Función para filtrar productos por categoría
  const filterByCategory = (category) => {
  setFilteredProducts(products.filter(product => product.category === category));
};

  //Función para filtrar productos disponibles (stock > 0)
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
          <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}

export default ProductList;




