import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="container section">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Browse the store and add something you like.</p>
          <Link to="/products" className="button primary">Continue shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <Link to={`/products/${item.id}`}>{item.title}</Link>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
                  </div>
                </div>
                <div className="cart-item-end">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)} aria-label="Remove item"><FiTrash2 /></button>
                </div>
              </div>
            ))}
          </div>
          <aside className="summary-card">
            <h2>Order summary</h2>
            <div className="summary-row"><span>Subtotal</span><strong>${cartTotal.toFixed(2)}</strong></div>
            <div className="summary-row"><span>Shipping</span><strong>Free</strong></div>
            <div className="summary-row total"><span>Total</span><strong>${cartTotal.toFixed(2)}</strong></div>
            <Link to="/checkout" className="button primary full-button">Continue to checkout</Link>
            <Link to="/products" className="text-link centered-link">Continue shopping</Link>
          </aside>
        </div>
      )}
    </div>
  );
}

export default Cart;
