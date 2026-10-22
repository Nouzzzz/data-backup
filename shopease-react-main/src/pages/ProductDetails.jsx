import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

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
      .catch(() =>
        setError("Could not load this product. Please try again.")
      )
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="mx-auto max-w-6xl px-5 py-10">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-red-600">{error || "Product not found."}</p>
        <Link to="/products" className="text-blue-600 hover:underline">
          Back to products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!");
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <Link to="/products" className="text-blue-600 hover:underline">
        ← Back to products
      </Link>

      <div className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="rounded border bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-80 w-full object-contain"
          />
        </div>

        <div>
          <p className="text-sm capitalize text-blue-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-2xl font-bold">
            {product.title}
          </h1>

          <p className="mt-3 text-amber-600">
            ★ {product.rating?.rate} ({product.rating?.count} reviews)
          </p>

          <p className="mt-4 text-2xl font-bold">
            ₹{product.price?.toFixed(2)}
          </p>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            {product.description}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-6 rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
