
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <h1 className="mb-6 text-2xl font-bold">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead className={darkMode ? "bg-gray-800" : "bg-gray-200"}>
            <tr>
              <th className="border border-gray-300 p-3 text-left dark:border-gray-700">Product</th>
              <th className="border border-gray-300 p-3 dark:border-gray-700">Price</th>
              <th className="border border-gray-300 p-3 dark:border-gray-700">Quantity</th>
              <th className="border border-gray-300 p-3 dark:border-gray-700">Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border border-gray-300 dark:border-gray-700">
                <td className="border border-gray-300 p-3 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                    <span>{item.title}</span>
                  </div>
                </td>
                <td className="border border-gray-300 p-3 text-center dark:border-gray-700">${Number(item.price).toFixed(2)}</td>
                <td className="border border-gray-300 p-3 dark:border-gray-700">
                  <div className="flex items-center justify-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="rounded bg-gray-500 px-3 py-1 text-white disabled:opacity-40">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">+</button>
                  </div>
                </td>
                <td className="border border-gray-300 p-3 text-center dark:border-gray-700">
                  <button onClick={() => removeFromCart(item.id)} className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">Remove</button>
                </td>
              </tr>
            ))}

            {cart.length === 0 && (
              <tr>
                <td colSpan="4" className="border border-gray-300 p-4 text-center dark:border-gray-700">Your cart is empty.</td>
              </tr>
            )}
          </tbody>

          {cart.length > 0 && (
            <tfoot className={darkMode ? "bg-gray-800" : "bg-gray-200"}>
              <tr>
                <td colSpan="3" className="border border-gray-300 p-3 text-right font-bold dark:border-gray-700">Grand Total:</td>
                <td className="border border-gray-300 p-3 text-center font-bold dark:border-gray-700">${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}

export default Cart;
