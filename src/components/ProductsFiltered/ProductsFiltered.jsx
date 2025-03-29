import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";

import './ProductsFiltered.css'

export const ProductsFiltered = ({category}) => {   
    
    const { allProducts } = useContext(ProductsContext);

    const [allFiltered, setAllFiltered] = useState([]);

    function filtrado(categoria) {
        return (
            allProducts.filter((product) => (
                product.category === categoria
            ))
        )
    } 

    useEffect(() => {
        if (category==="all") {
            setAllFiltered(allProducts);
        } 
        else if (category==="Novedades") {
            const blusas = filtrado("Blusas").slice(2,5);
            const pants = filtrado("Pantalones").slice(3,6);
            const vestidos = filtrado("Vestidos").slice(1,4);
            
            setAllFiltered([...blusas, ...pants, ...vestidos]);
        }
        else { 
            setAllFiltered(filtrado(category))
        }
    }, [allProducts, category]); // Dependencia añadida para actualizar el filtro cuando cambian los productos

    console.log(allFiltered);
    
    return category === "all" ? (
        <div className="product-grid">
            {allFiltered.map((producto) => (
                <ProductCard key={producto.id} product={producto} />
            ))}
        </div>
    ) : (
        <div className="product-grid">
            {allFiltered.map((producto) => (
                <ProductCard key={producto.id} product={producto} />
            ))}
        </div>
    );
};