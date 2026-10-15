import { Link } from 'react-router-dom'
import Themecontext from '../context/Themecontext'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {

  const [theme, setDark] = useState("light");

  return (
    <nav className="flex items-center justify-between bg-blue-800 px-6 py-5 text-white">
      <h1 className="text-lg">Student Manager</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/AddStudents">Add student</Link>
        <Link to="/ListStudents">List students</Link>

         <div onClick={() => setDark(theme === "light" ? "dark" : "light")}>
          {
            theme === "light" ? <CiLight size={22} /> : <MdOutlineDarkMode size={22} />
          }
         </div>

      </div>
    </nav>
  )
}

export default Navbar
