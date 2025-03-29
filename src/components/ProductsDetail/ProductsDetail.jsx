//import React, { useContext } from 'react';
//import { useParams } from 'react-router-dom';  // Para obtener el id del producto 
//import { ProductsContext } from '../../context/ProductsContext';  // Importamos el contexto
//import '../ProductsDetail/ProductsDetail.css';

// Definimos el componente ProductColorCircle que tomará el color como prop y lo mostrará como un círculo.
//function ProductColorCircle({ color }) {
//    return (
  //    <div
    //    style={{
      //    width: '50px',
        //  height: '50px',
          //borderRadius: '50%',
         // backgroundColor: color,
 //         border: '1px solid #ccc',
   //       cursor: 'pointer', // Estilo para hacerlo interactivo
     //   }}
 //     />
   // );
//  }

//function ProductDetail() {
 // const { productId } = useParams();  // Obtener el id del producto  
  //const { allProducts, addToCart, addToFavorites } = useContext(ProductsContext);  // Usamos el contexto

  // Filtramos el producto por su id
//const product = allProducts.find(product => product.id === parseInt(productId));
//console.log(productId)

//if (!product) {
//    return <div>Producto no encontrado</div>;
//}

//const [mainImage, setMainImage] = useState(product.images.model);

  // Funciones para manejar los botones
//const handleAddToCart = () => {
//    addToCart(product);  // Llama a la función del contexto para agregar al carrito
//};

//const handleAddToFavorites = () => {
//    addToFavorites(product);  // Llama a la función del contexto para agregar a favoritos
//};

//return (
//    <div className="product-detail">
 //   <div className="product-images">
  //      <img src={mainImage} alt={product.name} className="main-image" />
   //     <div className="image-thumbnails">
    //    {Object.values(product.images).map((image, index) => (
      //      <div
        //    key={index}
          //  className="thumbnail"
          //  onMouseEnter={() => setMainImage(image)}
       //     style={{ backgroundImage: `url(${image})` }}
        //    />
       // ))}
       // </div>
   // </div>

   // <div className="product-info">
   //     <h1>{product.name}</h1>
  //      <p>{product.description}</p>
  //      <p>Precio: {product.price} EUR</p>
  //      <p>Categoría: {product.category}</p>
  //      <p>Stock disponible: {product.stock}</p>
  //      <p>Color: {product.color}</p>

//{/* Mostrar colores disponibles como círculos */}
  //  <div>
  //      <label>Colores disponibles:</label>
    //    <div className="color-circles">
      //      {product.colors.map((color, index) => (
        //    <ProductColorCircle key={index} color={color} />
//        ))}
  //  </div>
    //</div>
//
  //  <div>
    //        <div
      //          key={index}
        //        className="color-circle"
          //      style={{ backgroundColor: color }}
 //           />
   //   </div>
     //   </div>//

       // <div>
 //       <label>Tamaño:</label>
   //     <select>
     //       {product.sizes.map((size) => (
       //     <option key={size} value={size}>
         //       {size}
           // </option>
       //     ))}
 //       </select>
   //     </div>

     //   <div>
  //      <button onClick={handleAddToCart}>Añadir al carrito</button>
    //    <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
      //  </div>
  //  </div>
    
//);
//}

//export default ProductDetail; 




import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para obtener el id del producto desde la URL
import { ProductsContext } from '../../context/ProductsContext';  // Importamos el contexto
import '../ProductsDetail/ProductsDetail.css';

function ProductDetail() {
  const {id } = useParams();  // Obtener el id del producto desde la URL
  const { allProducts, addToCart, addToFavorites } = useContext(ProductsContext);  // Usamos el contexto

  // Filtramos el producto por su id
const product = allProducts.find(product => product.id.toString() === id);

if (!product) {
    return <div>Producto no encontrado</div>;
}
console.log(id);

  // Funciones para manejar los botones
const handleAddToCart = () => {
    addToCart(product);  // Llama a la función del contexto para agregar al carrito
};

const handleAddToFavorites = () => {
    addToFavorites(product);  // Llama a la función del contexto para agregar a favoritos
};
return (
    <div className="product-detail">
    <div className="product-images">
        <img src={product.images.model} alt={product.name} />
        <div className="image-thumbnails">
        <img src={product.images.front} alt={`${product.name} front`} />
        <img src={product.images.back} alt={`${product.name} back`} />
        </div>
    </div>

    <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Precio: {product.price} USD</p>
        <p>Categoría: {product.category}</p>
        <p>Stock disponible: {product.stock}</p>

        <div>
        <label>Tamaño:</label>
        <select>
            {product.sizes.map((size) => (
            <option key={size} value={size}>
                {size}
            </option>
            ))}

        </select>
        </div>

        <div>
        <button onClick={handleAddToCart}>Añadir al carrito</button>
        <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
        </div>
    </div>
    </div>
);
}

export default ProductDetail;