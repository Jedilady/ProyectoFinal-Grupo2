import { useParams } from "react-router-dom";//para poder pasar la categoría
import {ProductsFiltered} from "../components/ProductsFiltered/ProductsFiltered";

function ProductsPage() {

  //Parámetro para poder obtener la categoría que proviene del enlace anterior
  const { category } = useParams();
  const { novedades } = useParams();

  return (
    <div>
      <h1>{category ? category : (novedades ? novedades : "Nuestros productos")}</h1>
      { novedades ? 
        (<ProductsFiltered category={"novedades"}/>) :
        ( category ? 
          (<ProductsFiltered category={category}/>) : 
          (<ProductsFiltered category={"all"}/>)
        )
      } 
    </div>
  );
}
export default ProductsPage;

//* { category : (<ProductsFiltered category={category}/>)? (<ProductsFiltered category={all}/>)}
//(<ProductsAll category={all}/>)}