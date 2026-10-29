import { configureStore } from "@reduxjs/toolkit";
import  UserReducer from "./features/UserSlice"

const store = configureStore({
  reducer: {
    users : UserReducer
  },
})


export default store