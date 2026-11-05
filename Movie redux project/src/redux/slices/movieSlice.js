// https://www.omdbapi.com/?i=tt3896198&apikey=d58d7188

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchmovies = createAsyncThunk ('movies/fecth', async () => {
      const responce = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=d58d7188')
      console.log(responce)
      return responce.data
})

const initialState = {
      movies : [],
      loading: false,
      error: null
}

const movieSlice = createSlice ({
    name: "movies",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchmovies.pending,(state) => {
            state.loading = true;
        }),
        builder.addCase(fetchmovies.fulfilled,(state,action) => {
             state.loading = false;
             state.products = action.payload
        }),
        builder.addCase(fetchmovies.rejected,(state,action) => {
            state.loading = false;
            alert(action.error.message) 
        })
    }
})

export default movieSlice.reducer