
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";

function Register() {
  const { register } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userdata.password !== userdata.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const result = register({ name: userdata.name, email: userdata.email.trim().toLowerCase(), password: userdata.password });

    if (result.success) {
      toast.success("Registration successful!");
      navigate("/login");
    } else {
      toast.error(result.message || "Registration failed!");
    }
  };

  return (
    <div className={`flex flex-1 items-center justify-center p-5 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      <form onSubmit={handleSubmit} className={`w-full max-w-sm rounded-lg p-6 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>

        <label htmlFor="name" className="mb-1 block">Name</label>
        <input id="name" type="text" name="name" value={userdata.name} onChange={handleInput} placeholder="Enter your name" autoComplete="name" required className={`mb-4 w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-800"}`} />

        <label htmlFor="email" className="mb-1 block">Email</label>
        <input id="email" type="email" name="email" value={userdata.email} onChange={handleInput} placeholder="Enter your email" autoComplete="email" required className={`mb-4 w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-800"}`} />

        <label htmlFor="password" className="mb-1 block">Password</label>
        <input id="password" type="password" name="password" value={userdata.password} onChange={handleInput} placeholder="Create a password" autoComplete="new-password" minLength={6} required className={`mb-4 w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-800"}`} />

        <label htmlFor="confirmPassword" className="mb-1 block">Confirm Password</label>
        <input id="confirmPassword" type="password" name="confirmPassword" value={userdata.confirmPassword} onChange={handleInput} placeholder="Confirm your password" autoComplete="new-password" minLength={6} required className={`mb-5 w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-800"}`} />

        <button type="submit" className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">Create Account</button>

      </form>
    </div>
  );
}

export default Register;
