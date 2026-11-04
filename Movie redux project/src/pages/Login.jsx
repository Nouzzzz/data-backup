
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const users = useSelector((state) => state.auth.users)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError('Please fill all fields')
            return
        }

        const existingUser = users.find((user) => {
            return user.email === email && user.password === password
        })

        if (existingUser) {
            dispatch(login(existingUser))
            navigate('/dashboard')
        } else {
            setError('Invalid email or password')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl">

                <h1 className="text-3xl font-bold text-white text-center mb-2">
                    MovieHub
                </h1>

                <p className="text-gray-400 text-center mb-6">
                    Login to your account
                </p>

                <form onSubmit={handleLogin} className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                    />

                    {error && (
                        <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>

                </form>

                <p className="text-gray-400 text-center mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-red-500">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Login
