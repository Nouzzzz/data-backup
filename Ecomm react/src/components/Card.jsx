
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Card = ({ product }) => {

   const {darkMode, toggleTheme} = useContext(ThemeContext);

  return (
   
           <div className={`p-6 shadow-md flex flex-col gap-3 rounded-xl
      ${ darkMode ? "min-h-screen bg-gray-600 text-white"  : "min-h-screen bg-olive-200 text-black"  }`} >
      <img  src={product.image} alt={""} className="h-40 w-full object-contain" />
          <h3>Name: {product.title}</h3>
          <p>Description: {product.description}</p>
          <p >Price: ${product.price}</p>

  <div className='flex item-center justify-between '>
          <button className='flex m-auto bg-blue-500 text-white rounded-md px-1 py-1'>Add to cart</button>
          <button className='flex m-auto bg-green-500 text-white rounded-md px-3 py-1'>Buy now</button>
   </div>
    </div>
  );
};

export default Card;
