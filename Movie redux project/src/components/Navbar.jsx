
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

function Navbar() {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { darkMode, toggleTheme } = useContext(ThemeContext)

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <nav className={`px-6 py-4 flex items-center justify-between ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>

            <Link to="/dashboard" className="text-2xl font-bold text-red-500">
                MovieHub
            </Link>

            <div className="flex items-center gap-6">

                <Link to="/dashboard" className="hover:text-red-500">
                    Home
                </Link>

                <Link to="/favourites" className="hover:text-red-500">
                    Favourites
                </Link>

                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Hi, {user?.name}
                </span>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-500/10"
                    title="Toggle theme"
                >
                    {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
                </button>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>

            </div>

        </nav>
    )
}

export default Navbar
