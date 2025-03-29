import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import './HomePageBanner.css'

const HomePageBanner = () => {
    const { allProducts } = useContext(ProductsContext);

    //constante que va a obtener la foto del id dado
    const fotoProduct = (id) => {
        return (
            allProducts.find((producto) => (
                producto.id === id
            ))
        )
    }

    //llamadas a los productos de cada imagen
    //los números, en un caso real, no se definen de modo específico, vendrán dados por algún contexto como "novedades", o según se estipule en el proyecto
    const rightImg = fotoProduct(3);
    const leftImg = fotoProduct(19);
    

  return (
    <div className="product-banner-content">
        <img className='product-banner-img-left' src={leftImg.images.model} alt={`${leftImg.name} - Modelo`} />
        <img className='product-banner-img-right' src={rightImg.images.model} alt={`${rightImg.name} - Modelo`} />
    </div>
  )
}

export default HomePageBanner

/*

      <img className='product-card-img-main' src={rightImg.images.model} alt={`${rightImg.name} - Modelo`} />
      <img className='product-card-img-main' src={leftImg.images.model} alt={`${leftImg.name} - Modelo`} />
      */