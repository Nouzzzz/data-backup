import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk('auth/register', async (data) => {
    const response = await axios.post('http://localhost:5000/auth/register',data)
    return response.data;
  }
);

export const loginUser = createAsyncThunk('auth/login', async (data) => {
    const response = await axios.post('http://localhost:5000/auth/login',data);
    return response.data;
  }
);

const currentUser = JSON.parse(localStorage.getItem('user'))

const token = JSON.parse(localStorage.getItem('token'))
 

const initialState = {
  user: currentUser || null,
  token: token || null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },

  extraReducers: (builder) => {
    builder
      
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.error) {
          alert(action.payload.error);
        }

        if (action.payload.message) {
          alert(action.payload.message);
        }
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })

      
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.token = action.payload.token;
        state.user = action.payload.user;

        localStorage.setItem('token', JSON.stringify(state.token));
        localStorage.setItem('user', JSON.stringify(state.user));

        alert(action.payload.message);
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
