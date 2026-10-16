import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dasgboard from './pages/Dasgboard'
import Login from './pages/Login'
import Register from './pages/Register'
import AddNote from './pages/AddNote'
import ProtectedContext from './context/ProtectedContext'
import { useEffect } from 'react'

const App = () => {

 
// useEffect(() => { 
//   localStorage.setItem("notes", JSON.stringify([]));
// }, [])  

// useEffect(() => { 
//   localStorage.setItem("users", JSON.stringify([]));
// }, [])  

// useEffect(() => {
//   localStorage.setItem("currentUser", JSON.stringify([]));
// }, [])


  return (

    <div>

      <Navbar />

       <Routes>
        <Route path="/" element={
         <ProtectedContext>
           <Dasgboard />
         </ProtectedContext>          
          } />

          <Route path="/AddNote" element={
          <ProtectedContext>
           <AddNote />
         </ProtectedContext>          
          } />

         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

    </div>
  )
}

export default App
