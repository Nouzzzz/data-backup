import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom' 
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/Themecontext";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  
  const navigate = useNavigate()
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { currentUser, logout } = useContext(AuthContext)

  return (

   <nav className={`flex items-center justify-between px-3 py-5 
     ${ darkMode ? "bg-gray-900 text-white" : "bg-blue-800 text-white"  }`} >
      <h1 className="text-sm">Student Manager</h1>

   <div className="flex gap-3 text-xs ">
        {currentUser ? 
          <div className="flex gap-6 text-xs">
            <Link to="/">Home</Link>
           <Link to="/AddStudents">Add student</Link>
           <Link to="/ListStudents">List students</Link> 
            <button onClick={() => {
                 logout()
                 navigate("/Login")
            }}>Logout</button>
          </div>
         : 
          <div className="flex gap-8 text-xs">
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
          </div>
        }
      </div>


        <button onClick={toggleTheme} className="flex text-xs">
          {darkMode ? (
            <CiLight size={15} />
          ) : (
            <MdOutlineDarkMode size={15} />
          )}
        </button>
    </nav>
  );
};

export default Navbar;
