import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-800 text-white p-3'>
      
       <Link className='p-2' to={"/"} >Student Manager</Link>
      
      <div className= "flex justify-around gap-5 p-2">
           <Link to={"/"} > Home </Link>
           <Link to={"/AddStudents"} > Add student</Link>
           <Link to={"/Details"} > List students </Link>
      </div>

    </div>
  )
}


export default Navbar
