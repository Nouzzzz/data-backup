import mongoose from "mongoose";

const employeeschema = mongoose.Schema({

    ename : {
        type: String,
        required: true
    },
    department : {
         type: String,
        required: true
    },
    salary : {
        type: Number,
        required: true
    }

})

const employeeModel = mongoose.model('employees', employeeschema)

export default employeeModel