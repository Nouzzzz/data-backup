import { Link, Navigate } from "react-router-dom";

function OrderSuccess() {
  const order = JSON.parse(localStorage.getItem("shopeaseLastOrder"));

  if (!order) return <Navigate to="/" replace />;

  return (
    <div className="container section">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <p className="eyebrow">ORDER CONFIRMED</p>
        <h1>Thank you, {order.name}!</h1>
        <p>Your demo order has been placed successfully.</p>
        <div className="order-details">
          <div className="summary-row"><span>Order ID</span><strong>{order.id}</strong></div>
          <div className="summary-row"><span>Date</span><strong>{order.date}</strong></div>
          {order.items.map((item) => (
            <div className="summary-row" key={item.id}><span>{item.title} × {item.quantity}</span><strong>${(item.price * item.quantity).toFixed(2)}</strong></div>
          ))}
          <div className="summary-row total"><span>Total</span><strong>${order.total.toFixed(2)}</strong></div>
        </div>
        <Link to="/products" className="button primary">Continue shopping</Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
