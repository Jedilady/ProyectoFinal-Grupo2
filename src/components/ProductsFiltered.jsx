import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

const ProductsFiltered = ({category}) => {
    const { allProducts } = useContext(ProductsContext);

    const [allFiltered, setAllFiltered] = useState([]);

    useEffect(() => {
        setAllFiltered(
            allProducts.filter((product) => (
                product.category === category))
        );
    }, [allProducts, category]); // Dependencia añadida para actualizar el filtro cuando cambian los productos

    return (
        <div className="product-grid">
            {allFiltered.map((producto) => (
                <ProductCard key={producto.id} product={producto} />
            ))}
        </div>
    );
};


export default ProductsFiltered
