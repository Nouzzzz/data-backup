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
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-blue-600 px-6 py-4 text-white shadow-sm">
      <Link to="/" className="text-3xl font-bold">ShopEase</Link>

      <div className="flex flex-wrap items-center gap-4">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products" >Products</NavLink>
        <NavLink to="/cart" >Cart</NavLink>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={toggleTheme} className="rounded p-2 hover:bg-blue-700">
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Hi, {user.name}</span>
            <button onClick={handleLogout} className="flex items-center gap-1 rounded bg-blue-700 px-3 py-2 hover:bg-blue-800">
              <FiLogOut /> Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
