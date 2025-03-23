import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
//De Delcy:
//import ProductList from "../components/ProductList";  // Asegúrate de que la ruta sea correcta

function ProductsPage() {
  //Constante para manejar la importación del contexto
  //"allProducts" viene de lo definido como children en el contexto
  const { allProducts } = useContext(ProductsContext);

  return (
    <div>
      <h1>Esto es ProductsPage</h1>
      <div className="product-grid">
        {allProducts.map((producto) => (
          <ProductCard key={producto.id} product={producto} />
        ))}
    </div>
    </div>
  );
}
export default ProductsPage;