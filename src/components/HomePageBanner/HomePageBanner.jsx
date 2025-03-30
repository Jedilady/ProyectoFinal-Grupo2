import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import './HomePageBanner.css'

const HomePageBanner = ({category}) => {
    const { allProducts } = useContext(ProductsContext);

    console.log("allProducts en HomePageBanner:", allProducts);

    //Agregado este código porque, por alguna razón, este componente tarda en cargar el array de productos, en especial al hacer reload de la pág
    //intenté con useEffect, useState, y nada... Así que me fui por lo más sencillo "if not, return"
    if (!allProducts || allProducts.length === 0) {
        console.warn("El array de productos no ha cargado");
        return <div>Cargando productos...</div>;
    }
    //como en el contexto hay un useEffect que recarga allProducts cuando se llena el array, esto no necesita un useEffect adicional, y cargará el resto del código en cuanto el array se llene

    //constante que va a obtener el producto del id dado, para luego obtener la foto
    const product = (id) => {
        return (
            allProducts.find((producto) => (
                producto.id === id
            ))
        )
    };

    //llamadas a los productos de cada imagen
    //los números, en un caso real, no se definen de modo específico, vendrán dados por algún contexto como "novedades", o según se estipule en el proyecto
    const rightProd = product(3);
    const leftProd = product(45);

    //llamadas a las imagenes de cada producto
    const rightImg = rightProd.images.model;
    const leftImg = leftProd.images.model;
    
    //llamadas a los nombre para el alt de la imagen de cada producto
    const rightMsg = rightProd.name;
    const leftMsg = leftProd.name;
    

    return (
        <div className="product-banner-wrapper">
            <Link to={`/products/${category}`} className="product-banner-link-wrapper">
                <div className="product-banner-imgs">
                    <img 
                        className='product-banner-img-left' 
                        src={leftImg ? leftImg : "/img/banner-default-1.jpg" } 
                        alt={leftMsg ? `${leftMsg} - Modelo` : `Descripción no disponible`} 
                    />
                    <img 
                        className='product-banner-img-right' 
                        src={rightImg ? rightImg : "/img/banner-default-2.jpg"} 
                        alt={rightMsg ? `${rightMsg} - Modelo` : `Descripción no disponible`} 
                    />
                </div>
                <div className="product-banner-content">
                    <span>{category}</span>
                        <button className="secondary-button">
                            click aquí
                        </button>
                </div>
            </Link>
        </div>
    );
};

export default HomePageBanner;