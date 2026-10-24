import React from 'react'
import CartContext from '../context/CartContext'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Checkout = () => {

const navigate = useNavigate();
const { darkMode } = useContext(ThemeContext);
const { cart, clearCart } = useContext(CartContext) 
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); 

const handleCheckout = (e) => {
  e.preventDefault();
  clearCart();
  toast.success(`Checkout successfull
  Total amount: $${total}`);
  navigate("/");

}

  return (
  
  <div className={` p-5 text-md  shadow-md flex flex-col rounded gap-3 m-auto item-center justify-between ${darkMode ? " bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
     
   <div>
     
       <h2>Checkout</h2>
       Order Details: {cart.map((item) => (
        <div  key={item.id} className='flex gap-2'>
         <p>{item.title}</p> - <p> {item.quantity}</p>
        </div>
      ))}

   </div>
      <p>Total Amount: ${total}</p>
      <button className='bg-green-600 rounded p-1 m-auto text-white' onClick={handleCheckout}>Complete Checkout</button>

    </div>
  )
}

export default Checkout