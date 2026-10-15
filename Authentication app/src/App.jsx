import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dasgboard from './pages/Dasgboard'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {

  return (

    <div>

      <Navbar />

       <Routes>
        <Route path="/" element={<Dasgboard />} />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

    </div>
  )
}

export default App
