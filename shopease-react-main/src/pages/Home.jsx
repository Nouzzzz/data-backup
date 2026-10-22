
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load products.");
        return response.json();
      })
      .then((data) => setProducts(data.slice(0, 4)))
      .catch(() => setError("Products could not be loaded. Please try again."));
  }, []);

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">

      <section className="bg-gray-100 px-5 py-10 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">
            Explore categories
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/products?category=electronics"
              className="flex justify-between rounded border bg-white p-4 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
            >
              Electronics
            </Link>

            <Link
              to="/products?category=jewelery"
              className="flex justify-between rounded border bg-white p-4 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
            >
              Jewellery
            </Link>

            <Link
              to="/products?category=men's clothing"
              className="flex justify-between rounded border bg-white p-4 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
            >
              Men's clothing
            </Link>

            <Link
              to="/products?category=women's clothing"
              className="flex justify-between rounded border bg-white p-4 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
            >
              Women's clothing
            </Link>
          </div>
        </div>
      </section>


      <section className="bg-blue-50 px-5 py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Shopping made simple.
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-300">
            Discover useful products, compare prices, and find something you love.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </section>



      <div className="min-h-24 bg-gray-100 dark:bg-gray-900" />
    </div>
  );
}

export default Home;
