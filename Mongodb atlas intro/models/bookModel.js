import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
     title: {
        type: String,
        unique: true,
        required : true
     },
     author: {
        type: String,
        required : true
     },
     price: {
         type: Number,
         required : true

     }

    })

const bookModel = mongoose.model('Book', bookschema)

export default bookModel


