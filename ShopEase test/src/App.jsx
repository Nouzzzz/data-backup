
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={<h1 className="p-10 text-2xl">Products</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
