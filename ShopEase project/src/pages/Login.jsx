
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(userdata.email, userdata.password);

    if (result.success) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error(result.message || "Invalid email or password!");
    }
  };

  return (
    <div className={`flex flex-1 items-center justify-center p-5 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      <form onSubmit={handleSubmit} className={`w-full max-w-sm rounded-lg p-6 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>

        <label className="mb-1 block">Email</label>
        <input id="email" type="email" name="email" value={userdata.email} onChange={handleInput} placeholder="Enter your email" required className={`mb-4 w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-800"}`} />

        <label className="mb-1 block">Password</label>
        <input id="password" type="password" name="password" value={userdata.password} onChange={handleInput} placeholder="Enter your password" required className={`mb-5 w-full rounded border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-800"}`} />

        <button type="submit" className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}

export default Login;
