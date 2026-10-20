import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Product not found.");
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setError("Could not load this product. Please try again."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container section"><p>Loading product...</p></div>;
  if (error || !product) return <div className="container section"><p className="message error">{error || "Product not found."}</p><Link to="/products" className="text-link">Back to products</Link></div>;

  return (
    <div className="container section">
      <Link to="/products" className="text-link">← Back to products</Link>
      <div className="details-layout">
        <div className="details-image"><img src={product.image} alt={product.title} /></div>
        <div className="details-info">
          <p className="category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="rating">★ {product.rating?.rate} ({product.rating?.count} reviews)</p>
          <h2 className="details-price">${product.price.toFixed(2)}</h2>
          <p>{product.description}</p>
          <button className="button primary" onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
