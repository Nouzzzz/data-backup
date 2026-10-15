import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedContext = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  return currentUser ? children : <Navigate to="/login" />
}

export default ProtectedContext
