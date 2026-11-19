import mongoose from "mongoose";

const userschema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }

})

const userModel = mongoose.model('users', userschema)

export default userModel