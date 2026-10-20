import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">ShopEase</Link>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            <FiShoppingCart /> Cart <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          {user ? (
            <div className="user-area">
              <span className="user-name">Hi, {user.name}</span>
              <button className="small-button" onClick={handleLogout}><FiLogOut /> Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">Login</Link>
              <Link to="/register" className="button primary small-button">Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
