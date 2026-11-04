
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Favourites from './pages/Favourites'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default App
