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

  if (category !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === category);
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container section">
      <div className="page-heading">
        <p className="eyebrow">THE SHOP</p>
        <h1>All products</h1>
        <p className="muted">Find something useful for your everyday life.</p>
      </div>

      <div className="filters">
        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          {search && <button className="clear-search" onClick={() => setSearch("")} aria-label="Clear search"><FiX /></button>}
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category">
          <option value="all">All categories</option>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by price">
          <option value="default">Default order</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      {loading && <p className="status-message">Loading products...</p>}
      {error && <p className="message error">{error}</p>}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try a different search or category.</p>
          <button className="button secondary" onClick={() => { setSearch(""); setCategory("all"); setSort("default"); }}>Clear filters</button>
        </div>
      )}
      <div className="product-grid">
        {!loading && filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Products;
