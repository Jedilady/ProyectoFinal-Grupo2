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