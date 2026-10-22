import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiX } from "react-icons/fi";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const chosenCategory = searchParams.get("category");
    if (chosenCategory) setCategory(chosenCategory);
  }, [searchParams]);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((response) => {
        if (!response.ok) throw new Error("Products request failed.");
        return response.json();
      }),
      fetch("https://fakestoreapi.com/products/categories").then((response) => {
        if (!response.ok) throw new Error("Categories request failed.");
        return response.json();
      })
    ])
      .then(([productData, categoryData]) => {
        setProducts(productData);
        setCategories(categoryData);
      })
      .catch(() => setError("Could not load products. Check your internet connection and try again."))
      .finally(() => setLoading(false));
  }, []);

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") filteredProducts = filteredProducts.filter((product) => product.category === category);
  if (sort === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sort === "high") filteredProducts.sort((a, b) => b.price - a.price);

  const fieldStyle = "w-full rounded border border-gray-300 bg-white p-3 text-gray-800 dark:border-gray-600";

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="text-3xl font-bold">All products</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Find something useful for your everyday life.</p>

      <div className="my-6 grid grid-cols-1 gap-3 md:grid-cols-3">
       <div className="flex flex-1 gap-2">
  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search products..."
    className={`${fieldStyle} w-full min-w-0 flex-1`}
  />

  {search && (
    <button
      type="button"
      className="rounded border px-3 dark:border-gray-600"
      onClick={() => setSearch("")} 
    >
      <FiX />
    </button>
  )}
</div>
        
        <select value={category} onChange={(e) => setCategory(e.target.value)} className={fieldStyle}>
          <option value="all">All categories</option>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className={fieldStyle}>
          <option value="default">Default order</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="rounded bg-red-100 p-3 text-red-700">{error}</p>}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="rounded border p-8 text-center dark:border-gray-700">
          <h2 className="text-xl font-bold">No products found</h2>
          <p className="my-3 text-gray-600 dark:text-gray-300">Try a different search or category.</p>
          <button onClick={() => { setSearch(""); setCategory("all"); setSort("default"); }} className="rounded bg-blue-600 px-4 py-2 text-white">Clear filters</button>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {!loading && filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Products;
