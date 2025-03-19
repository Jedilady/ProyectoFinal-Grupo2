import React from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

const App = () => {
  return (
    <div className="app">
      <h1>Tienda Virtual</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;