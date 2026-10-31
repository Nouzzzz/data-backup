import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts = createAsyncThunk ('products/fecth', async () => {
      const responce = await axios.get('https://fakestoreapi.com/products/')
      console.log(responce)
      return responce.data
})

const initialState = {
      products : [],
      loading: false,
      error: null
}

const ProductSlice = createSlice ({
    name: "products",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.pending,(state) => {
            state.loading = true;
        }),
        builder.addCase(fetchproducts.fulfilled,(state,action) => {
             state.loading = false;
             state.products = action.payload
        }),
        builder.addCase(fetchproducts.rejected,(state,action) => {
            state.loading = false;
            alert(action.error.message) 
        })
    }
})

export default ProductSlice.reducer

