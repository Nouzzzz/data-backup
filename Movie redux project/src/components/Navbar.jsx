
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <nav className="bg-gray-900 px-6 py-4 flex items-center justify-between">

            <Link to="/dashboard" className="text-2xl font-bold text-red-500">
                MovieHub
            </Link>

            <div className="flex items-center gap-6 text-white">

                <Link to="/dashboard" className="hover:text-red-500">
                    Home
                </Link>

                <Link to="/favourites" className="hover:text-red-500">
                    Favourites
                </Link>

                <span className="text-gray-300">
                    Hi, {user?.name}
                </span>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                >
                    Logout
                </button>

            </div>

        </nav>
    )
}

export default Navbar
