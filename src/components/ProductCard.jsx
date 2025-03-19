import React from "react";

const ProductCard = ({ product }) => {
return (
    <div className="product-card">
    <h3>{product.name}</h3>
    <p>{product.category}</p>
    <div className="product-images">
        <img src={product.images.front} alt={`${product.name} - Frente`} />
        <img src={product.images.back} alt={`${product.name} - Espalda`} />
        <img src={product.images.model} alt={`${product.name} - Modelo`} />
    </div>
    </div>
);
};

export default ProductCard;
