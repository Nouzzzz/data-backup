
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [userdata, setUserdata] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserdata((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(
      userdata.email,
      userdata.password
    );

    if (result.success) {
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } 
    
  };

  return (
    <div className="flex justify-center px-5 py-12 text-gray-800 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-gray-200 p-6 shadow-md dark:bg-gray-800"
      >
        <h2 className="mb-2 text-center text-2xl font-semibold">
          Login
        </h2>

        <p className="mb-5 text-center text-sm text-gray-600 dark:text-gray-300">
          Enter your details to continue.
        </p>

        <label className="mb-1 block text-sm" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={userdata.email}
          onChange={handleInput}
          placeholder="Enter email"
          required
          className="mb-4 w-full rounded border p-3 text-gray-800"
        />

        <label className="mb-1 block text-sm" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={userdata.password}
          onChange={handleInput}
          placeholder="Enter password"
          required
          className="mb-4 w-full rounded border p-3 text-gray-800"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
