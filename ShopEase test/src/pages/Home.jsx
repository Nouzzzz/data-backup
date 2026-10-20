
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">
        Welcome to ShopEase
      </h1>

      <p className="mt-4 text-gray-500">
        Find your favourite products in one place.
      </p>

      <Link
        to="/products"
        className="mt-6 rounded bg-blue-600 px-6 py-3 text-white"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
