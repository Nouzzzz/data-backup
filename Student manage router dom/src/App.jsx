import React from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import AddStudents from './pages/AddStudents'
import { useState,useEffect } from 'react'

const App = () => {

const [editmode,setEditmode] = useState({editmode:false,id:null})

   const [student, setstudent] = useState(() => {
     const savedstudent = localStorage.getItem("student");
     return savedstudent ? JSON.parse(savedstudent) : [];
  });
 
   useEffect(() => {
     localStorage.setItem("student",JSON.stringify(student));
   },[student]);
  
  const addstudent = (student) => {
    setstudents([...students, student]);
  };

 const editstudent = (id) => {
      setEditmode({editmode:true,id})
      console.log(id)
 }


  const deletestudent = (id) => {
      setstudent(students.filter((student) => 
      student.id !== id));
  }


  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
         <Route path="/AddStudents" element={<AddStudents />}/> 
          <Route path="/Details" element={<Details />}/> 

      </Routes>

    </div>
  )
}

export default App
