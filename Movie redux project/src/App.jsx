import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import Favourites from './pages/Favourites'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import { fetchmovies } from './redux/slices/movieSlice'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  

  useEffect(() => {
      dispatch(fetchmovies())
  },[dispatch])

    return (
        
        <div>

   
        <Navbar />
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
         </div>
           
    )
}

export default App
