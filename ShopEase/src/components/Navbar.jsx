
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between bg-blue-600 px-6 py-4 text-white">
      <Link to="/" className="text-2xl font-bold">
        ShopEase
      </Link>

      <div className="flex items-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        {currentUser ? (
          <>
            <span>{currentUser.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
