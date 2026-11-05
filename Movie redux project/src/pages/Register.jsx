
import { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const users = useSelector((state) => state.auth.users)
    const navigate = useNavigate()

    const { darkMode } = useContext(ThemeContext)

    const handleRegister = (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError('Please fill all fields')
            return
        }

        const existingUser = users.find((user) => {
            return user.email.toLowerCase() === email.toLowerCase()
        })

        if (existingUser) {
            setError('Email already registered')
            return
        }

        dispatch(register({
            name,
            email,
            password
        }))

        alert('Registration successful!')
        navigate('/login')
    }

    return (
        <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen flex items-center justify-center p-5`}>

            <div className={`w-full max-w-md p-8 rounded-xl ${
                darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}>

                <h1 className="text-3xl font-bold text-red-500 text-center mb-2">
                    MovieHub
                </h1>

                <p className={`text-center mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Create your account
                </p>

                <form onSubmit={handleRegister} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full p-3 rounded-lg outline-none border ${
                            darkMode
                                ? 'bg-gray-800 border-gray-700 text-white'
                                : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 rounded-lg outline-none border ${
                            darkMode
                                ? 'bg-gray-800 border-gray-700 text-white'
                                : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-3 rounded-lg outline-none border ${
                            darkMode
                                ? 'bg-gray-800 border-gray-700 text-white'
                                : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                    />

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold"
                    >
                        Register
                    </button>

                </form>

                <p className={`text-center mt-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Already have an account?{' '}
                    <Link to="/login" className="text-red-500">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    )
}

export default Register
