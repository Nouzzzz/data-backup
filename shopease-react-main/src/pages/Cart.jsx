import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-bold">Shopping cart</h1>
      {cartItems.length === 0 ? (
        <div className="mt-6 rounded border p-10 text-center dark:border-gray-700">
          <h2 className="text-xl font-bold">Your cart is empty</h2>
          <p className="my-3 text-gray-600 dark:text-gray-300">Browse the store and add something you like.</p>
          <Link to="/products" className="inline-block rounded bg-blue-600 px-4 py-2 text-white">Continue shopping</Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div className="space-y-3 md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                <div className="flex-1">
                  <Link to={`/products/${item.id}`} className="font-semibold hover:text-blue-600">{item.title}</Link>
                  <p className="mt-1 text-sm text-gray-500">₹{item.price.toFixed(2)} each</p>
                  <div className="mt-2 flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded border px-2 dark:border-gray-600">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded border px-2 dark:border-gray-600">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                  <button onClick={() => removeFromCart(item.id)} className="mt-3 block text-red-600" ><FiTrash2 /></button>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded border bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-xl font-bold">Order summary</h2>
            <div className="my-5 flex justify-between"><span>Subtotal</span><strong>₹{cartTotal.toFixed(2)}</strong></div>
            <div className="flex justify-between"><span>Shipping</span><strong>Free</strong></div>
            <div className="my-4 flex justify-between border-t pt-4 dark:border-gray-600"><strong>Total</strong><strong>₹{cartTotal.toFixed(2)}</strong></div>
            <Link  className="block rounded bg-blue-600 p-3 text-center text-white hover:bg-blue-700">Continue to checkout</Link>
            <Link to="/products" className="mt-4 block text-center text-sm text-blue-600">Continue shopping</Link>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Cart;
