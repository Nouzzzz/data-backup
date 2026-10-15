
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/Themecontext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
   <nav className={`flex items-center justify-between px-6 py-5 transition-colors
     ${ darkMode ? "bg-gray-900 text-white" : "bg-blue-800 text-white"  }`} >
      <h1 className="text-lg">Student Manager</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/AddStudents">Add student</Link>
        <Link to="/ListStudents">List students</Link>

        <button onClick={toggleTheme}>
          {darkMode ? (
            <CiLight size={22} />
          ) : (
            <MdOutlineDarkMode size={22} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
