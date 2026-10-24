
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-blue-600 p-4 text-white shadow-md">
      <Link to="/" className="text-3xl font-semibold">ShopEase</Link>

      <div className="flex items-center gap-5 text-sm">
        <Link to="/cart" className="relative flex items-center p-1">
          <BsCart2 size={22} />
          {cartCount > 0 && <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold">{cartCount}</span>}
        </Link>

        {user ? (
          <button className="text-lg" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link className="text-lg" to="/login">Login</Link>
            <Link className="text-lg" to="/register">Register</Link>
          </>
        )}

        <button onClick={toggleTheme} className="flex items-center" title="Toggle theme">
          {darkMode ? <CiLight size={23} /> : <MdOutlineDarkMode size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
