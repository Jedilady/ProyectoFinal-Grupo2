import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useMediaQuery } from "../../customs/useMediaQuery";
import { Link } from "react-router-dom";

import "./HomeProductCard.css"
import { FaLongArrowAltRight } from "react-icons/fa";

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
        <div className="home-product-grid">
        {allFiltered.slice(0, number).map((producto) => (
            <div className="home-product-img" key={producto.id} >
                <Link to={`/Product/:${producto.id}`}>
                    <img src={producto.images.model} alt={`${producto.name} - Modelo`} />
                </Link>
            </div>
        ))}
            <div className="home-product-bt">
                <a className="secondary-button">Ver todo <FaLongArrowAltRight /></a>
            </div>
        </div>
    );
}

export default HomeProductCard
