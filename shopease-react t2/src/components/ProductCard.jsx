import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img src={product.image} alt={product.title} className="product-image" />
      </Link>
      <div className="product-info">
        <p className="category">{product.category}</p>
        <Link to={`/products/${product.id}`} className="product-title">{product.title}</Link>
        <p className="rating">★ {product.rating?.rate || "N/A"} ({product.rating?.count || 0})</p>
        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>
          <button className="button primary add-button" onClick={() => addToCart(product)}>
            <FiShoppingCart /> Add
          </button>
        </div>
        <Link to={`/products/${product.id}`} className="details-link">View details</Link>
      </div>
    </div>
  );
}

export default ProductCard;
