import HomeProductCard from "../components/HomeProductCard";


function HomePage() {

  return (
    <div>
      <h1>Aquí va el banner</h1>      
      <div className="product-grid">
        <h2>Blusas</h2>
        <HomeProductCard category={"Blusas"} />
        <h2>Pantalones</h2>
        <HomeProductCard category={"Pantalones"} />
        <h2>Vestidos</h2>
        <HomeProductCard category={"Vestidos"} />
    </div>
    </div>
  );
}
export default HomePage;
