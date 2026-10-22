
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    if (userdata.password !== userdata.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const result = register({
      name: userdata.name,
      email: userdata,
      password: userdata.password
    });

    if (result.success) {
      toast.success("Registration successful!");
      navigate("/login");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex justify-center px-5 py-12 text-gray-800 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-gray-200 p-6 shadow-md dark:bg-gray-800"
      >
        <h2 className="mb-2 text-center text-2xl font-semibold">
          Create account
        </h2>

        <p className="mb-5 text-center text-sm text-gray-600 dark:text-gray-300">
          Join ShopEase to start shopping.
        </p>

        <label className="mb-1 block text-sm" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={userdata.name}
          onChange={handleInput}
          placeholder="Enter name"
          required
          className="mb-4 w-full rounded border p-3 text-gray-800"
        />

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
          minLength={6}
          required
          className="mb-4 w-full rounded border p-3 text-gray-800"
        />

        <label className="mb-1 block text-sm" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={userdata.confirmPassword}
          onChange={handleInput}
          placeholder="Confirm password"
          required
          className="mb-4 w-full rounded border p-3 text-gray-800"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
