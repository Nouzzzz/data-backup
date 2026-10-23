
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CartContext from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

function Card({ product }) {
  const { darkMode } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className={`flex h-full flex-col rounded-lg p-4 shadow-md ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="mb-4 flex h-48 items-center justify-center">
        <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
      </div>

      <h3 className="mb-3 text-base font-semibold">{product.title}</h3>

      <p className={`mb-4 line-clamp-4 flex-grow text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {product.description}
      </p>

      <p className="mb-4 text-lg font-bold">${Number(product.price).toFixed(2)}</p>

      <div className="mt-auto flex justify-between gap-2">
        <button onClick={handleAddToCart} className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">Add to Cart</button>
        <button onClick={handleBuyNow} className="rounded bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;
