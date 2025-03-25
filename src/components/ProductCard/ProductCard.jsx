import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
return (
    <Link to={`/Product/${product.id}`}>
        <div className="product-card">
            <div className='product-card-img'>
                <img className='product-card-img-main' src={product.images.model} alt={`${product.name} - Modelo`} />
                <img className='product-card-img-alt' src={product.images.front} alt={`${product.name} - Frente`} />
            </div>
            <span className='product-card-name'>{product.name}</span>
            <span className='product-card-price'>Precio: ${product.price}</span>
        </div>
    </Link>
);
};

export default ProductCard;

/* TEMPORAL - Referencia de todos los datos del producto
return (
    <div>
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
*/