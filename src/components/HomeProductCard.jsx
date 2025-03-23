import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useMediaQuery } from "../customs/useMediaQuery";

const HomeProductCard = ({ category }) => {
    const { allProducts } = useContext(ProductsContext);
  
    const [allFiltered, setAllFiltered] = useState([]);
  
    useEffect(() => { 
      setAllFiltered(
        allProducts.filter((product) => (
          product.category === category))
        );
    }, [allProducts, category]); // Dependencia añadida para actualizar el filtro cuando cambian los productos
  
    
    //handler for the ammount of images to display
    let isPageDesktop = useMediaQuery('(min-width: 1440px)');
    let isPageTablet = useMediaQuery('(min-width: 413px) and (max-width: 1439px)')
    let isPageMobile = useMediaQuery('(max-width: 412px)');

    let number = 0;
    
    if (isPageDesktop) {number = 4}
    else if (isPageTablet) {number = 3}
    else if (isPageMobile) {number = 2};
    

    return (
        <>
        {allFiltered.slice(0, number).map((producto) => (
            <div key={producto.id} >
                <img src={producto.images.model} alt={`${producto.name} - Modelo`} />
            </div>
        ))}
        </>
    );
}

export default HomeProductCard
