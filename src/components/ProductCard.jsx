import React from 'react';

const ProductCard = ({ product }) => {
return (
    <div className={ProductCard.css}>
    <h3>{product.name}</h3>
    <p>{product.category}</p>
    <p>Precio: ${product.price}</p>
    <p>Descripcion: {product.descripcion}</p>
    <p>Tamaño disponible: {product.sizes.join(", ")}</p>
    <p>Colores disponibles: {product.color.join(", ")}</p>
    <p>Stock: {product.stock > 0 ? `${product.stock} disponible(s)` : "Agotado"}</p>
    
    <div className="product-images">
        <img src={product.images.model} alt={`${product.name} - Modelo`} />
        <img src={product.images.front} alt={`${product.name} - Frente`} />
        <img src={product.images.back} alt={`${product.name} - Espalda`} />
    </div>
    </div>
);
};

export default ProductCard;