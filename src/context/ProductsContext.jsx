//importación del array de productos:
//import {getAllProducts} from "../data/products";
import products from "../data/products";
//importación de context y hooks from react:
import { createContext} from "react";
import { useState, useEffect } from "react";
import ProductsDetail from "../components/ProductsDetail/ProductsDetail";

//Creación del CONTEXTO
export const ProductsContext = createContext();

//Funcion PROVIDER donde se almacena el array de productos
export function AllProductsProvider({children}) {

    //Use state donde se almacena el array
    const [allProducts, setAllProductos] = useState([]);

    //carga inicial del array mediante useEffect para evitar reloads innecesario
    useEffect(() => { 
        //setAllProductos(getAllProducts());
        setAllProductos(products);
      }, []);
    
      console.log("array del contexto de productos:", allProducts);
      
    //craeacion del proveedor y los datos a proveer 
    //"children" sigifica que TODO el que esté dentro del provider podrá escuchar los datos
    return (
    <ProductsContext.Provider value={{allProducts}}>
        {children}
    </ProductsContext.Provider>
    );
}
