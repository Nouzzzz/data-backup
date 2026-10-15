import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className="flex items-center justify-between bg-blue-800 px-6 py-3 text-white shadow-md text-sm">
      <h1 className="text-md">Authentication App</h1>

      <div className="flex gap-6">
        {currentUser ? 
          <div className="flex gap-6">
            <Link to="/">Home</Link>
            <button onClick={() => {
                logout()
                 navigate("/login")
            }}>Logout</button>
          </div>
         : 
          <div className="flex gap-6">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
