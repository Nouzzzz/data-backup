
import Card from '../components/Card';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const {products} = useContext(ProductContext)
    const {darkMode, toggleTheme} = useContext(ThemeContext);

  return (
     <div className={`min-h-screen p-6
      ${ darkMode ? "min-h-screen bg-black text-white"  : "min-h-screen bg-white text-black"  }`} >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
