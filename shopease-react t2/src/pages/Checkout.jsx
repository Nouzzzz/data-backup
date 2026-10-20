import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  if (cartItems.length === 0) return <Navigate to="/cart" replace />;

  const placeOrder = (event) => {
    event.preventDefault();

    const order = {
      id: "SE" + Date.now().toString().slice(-8),
      name,
      phone,
      address,
      items: cartItems,
      total: cartTotal,
      date: new Date().toLocaleString()
    };

    localStorage.setItem("shopeaseLastOrder", JSON.stringify(order));
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="container section">
      <div className="page-heading"><p className="eyebrow">ALMOST THERE</p><h1>Checkout</h1></div>
      <div className="checkout-layout">
        <form className="form-card checkout-form" onSubmit={placeOrder}>
          <h2>Delivery details</h2>
          {message && <p className="message error">{message}</p>}
          <label>Full name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Phone number</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <label>Delivery address</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows="4" required />
          <button className="button primary full-button">Place order</button>
          <p className="small-note">This is a demo checkout. No payment will be collected.</p>
        </form>
        <aside className="summary-card">
          <h2>Your order</h2>
          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>{item.title} × {item.quantity}</span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="summary-row total"><span>Total</span><strong>${cartTotal.toFixed(2)}</strong></div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
