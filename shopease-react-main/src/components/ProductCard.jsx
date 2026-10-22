
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!");
  };

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto h-40 w-full object-contain"
        />
      </Link>

      <p className="mt-3 text-xs capitalize text-blue-600">
        {product.category}
      </p>

      <Link
        to={`/products/${product.id}`}
        className="mt-2 block min-h-10 font-semibold hover:text-blue-600"
      >
        {product.title}
      </Link>

      <p className="mt-2 text-sm text-amber-600">
        ★ {product.rating?.rate || "N/A"} (
        {product.rating?.count || 0})
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
       <strong>₹{product.price.toFixed(2)}</strong>

        <button
          onClick={handleAddToCart}
          className="flex items-center gap-1 rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
        >
          <FiShoppingCart />
          Add
        </button>
      </div>

      <Link
        to={`/products/${product.id}`}
        className="mt-3 inline-block text-sm text-blue-600 hover:underline"
      >
        View details
      </Link>
    </div>
  );
}

export default ProductCard;
