import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {


  return (
    <div>
      <Navbar />
            <Toaster />
       <Routes>
         pro
             <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
 
       </Routes>
    </div>
  )
}

export default App
