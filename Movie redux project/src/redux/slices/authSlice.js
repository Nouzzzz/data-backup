
import { createSlice } from '@reduxjs/toolkit'

const users = JSON.parse(localStorage.getItem('users')) || []
const loggedUser = JSON.parse(localStorage.getItem('loggedUser')) || null

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        users: users,
        user: loggedUser
    },
    reducers: {
        register: (state, action) => {
            state.users.push(action.payload)
            localStorage.setItem('users', JSON.stringify(state.users))
        },

        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem('loggedUser', JSON.stringify(action.payload))
        },

        logout: (state) => {
            state.user = null
            localStorage.removeItem('loggedUser')
        }
    }
})

export const { register, login, logout } = authSlice.actions

export default authSlice.reducer
