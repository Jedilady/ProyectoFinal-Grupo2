import HomeProductCard from "../components/HomeProductCard/HomeProductCard";


function HomePage() {

  return (
    <div>
      <span>Aquí va el banner</span>      
      <section className="home-section">
        <h2>Blusas</h2>
        <HomeProductCard category={"Blusas"} />
      </section>
      <section className="home-section">
        <h2>Pantalones</h2>
        <HomeProductCard category={"Pantalones"} />
      </section>
      <section className="home-section">
        <h2>Vestidos</h2>
        <HomeProductCard category={"Vestidos"} />
      </section>
    </div>
  );
}
export default HomePage;
