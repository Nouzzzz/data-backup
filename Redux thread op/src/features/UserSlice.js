import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.users.push({
                id: Date.now(),
                name: action.payload
            });
        },

        deleteuser: (state, action) => {
            state.users = state.users.filter(
                (x) => x.id !== action.payload
            );
        },
        
        edituser: (state, action) => {
            const user = state.users.find(
                (x) => x.id === action.payload.id
            )

            if (user) {
                user.name = action.payload.name;
            }
        }
    }
});

export default userSlice.reducer;

export const { adduser, deleteuser, edituser } = userSlice.actions;
