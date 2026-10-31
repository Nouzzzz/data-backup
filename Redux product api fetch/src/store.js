import { configureStore } from "@reduxjs/toolkit";
import  UserReducer from "./features/UserSlice"
import ProductsReducer from "./features/ProductSlice"

const store = configureStore({
  reducer: {
    users : UserReducer,
    products: ProductsReducer
  },
})


export default store