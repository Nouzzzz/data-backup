import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load products.");
        return response.json();
      })
      .then((data) => setProducts(data.slice(0, 4)))
      .catch(() => setError("Products could not be loaded. Please try again later."));
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">EVERYDAY FINDS, MADE EASY</p>
          <h1>Shopping made <span>simple.</span></h1>
          <p>Discover useful products, compare prices, and find something you love.</p>
          <Link to="/products" className="button primary hero-button">Shop Now</Link>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HANDPICKED FOR YOU</p>
            <h2>Featured products</h2>
          </div>
          <Link to="/products" className="text-link">View all products →</Link>
        </div>
        {error && <p className="message error">{error}</p>}
        {products.length === 0 && !error && <p>Loading featured products...</p>}
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <p className="eyebrow">EXPLORE THE STORE</p>
          <h2>Something for every day</h2>
          <div className="category-grid">
            <Link to="/products?category=electronics" className="category-card">Electronics <span>→</span></Link>
            <Link to="/products?category=jewelery" className="category-card">Jewellery <span>→</span></Link>
            <Link to="/products?category=men's clothing" className="category-card">Men's clothing <span>→</span></Link>
            <Link to="/products?category=women's clothing" className="category-card">Women's clothing <span>→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
