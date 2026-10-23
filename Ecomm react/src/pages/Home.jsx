
import { useContext, useState } from "react";
import Card from "../components/Card";
import ProductContext from "../context/ProductContext";
import { ThemeContext } from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";

function Home() {
  const { products } = useContext(ProductContext);
  const { darkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const [sortBy, setSortBy] = useState("default");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    return category === "all" || product.category === category;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "lowToHigh") return a.price - b.price;
    if (sortBy === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className={`min-h-screen p-5 sm:p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {user && (
        <div className="mx-auto mb-6 max-w-7xl">
          <h2 className="text-2xl font-bold">
            Welcome, {user.name || user.username || user.email}
          </h2>
        </div>
      )}

      <div className="mx-auto mb-6 flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold">Products</h2>

        <div className="flex flex-wrap gap-3">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={`rounded-lg border p-2 ${darkMode ? "border-gray-600 bg-gray-800 text-white" : "border-gray-300 bg-white text-gray-900"}`}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelry</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={`rounded-lg border p-2 ${darkMode ? "border-gray-600 bg-gray-800 text-white" : "border-gray-300 bg-white text-gray-900"}`}>
            <option value="default">Sort by: Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <p className="mt-10 text-center">No products found in this category.</p>
      )}
    </div>
  );
}

export default Home;
