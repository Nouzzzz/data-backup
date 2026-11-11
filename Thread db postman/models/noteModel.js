import mongoose from "mongoose";

const noteschema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

const noteModel = mongoose.model('notes', noteschema)

export default noteModel    