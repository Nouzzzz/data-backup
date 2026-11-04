import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Favourites from './pages/Favourites'

import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

    return (
        <Routes>

            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/favourites"
                element={
                    <ProtectedRoute>
                        <Favourites />
                    </ProtectedRoute>
                }
            />

        </Routes>
    )
}

export default App
