import React from 'react'
import Home from './pages/Home'
import List from './pages/List'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/> 
         <Route path="/List" element={<List />} /> 
      </Routes>

    </div>
  )
}

export default App
