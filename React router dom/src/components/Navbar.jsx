import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between'>
      
      <h5 className='p-2'>Users</h5>
      
      <div className= "flex justify-around gap-3 p-2">
           <Link to={"/"} > Home </Link>
           <Link to={"/List"} > List</Link>
      </div>

    </div>
  )
}

export default Navbar
