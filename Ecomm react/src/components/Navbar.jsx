import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import AuthContext from '../context/AuthContext'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {

 const navigate = useNavigate()
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { currentUser, logout } = useContext(AuthContext)

  return (
    
    <div className="flex items-center justify-between bg-blue-600 p-3 text-white shadow-md text-xl">
        E commerce App
     <div className='text-sm flex gap-3'>
           <div className="flex gap-6">
        {currentUser ? 

        
          <div className="flex gap-3 item-center justify-center">
            
            <button onClick={() => {
                logout()
                 navigate("/login")
            }}>Logout</button>

          <button onClick={toggleTheme} className="flex items-center">
          {darkMode ? (
            <CiLight size={15} />
          ) : (
            <MdOutlineDarkMode size={15} />
          )}
        </button>

          </div>
         : 
          <div className="flex gap-3">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

                <button onClick={toggleTheme} className="flex items-center">
          {darkMode ? (
            <CiLight size={15} />
          ) : (
            <MdOutlineDarkMode size={15} />
          )}
        </button>

          </div>
        }
      </div>
     </div>




    </div>

    

   
  )
}

export default Navbar
