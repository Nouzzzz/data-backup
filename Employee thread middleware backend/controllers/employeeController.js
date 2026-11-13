import employeeModel from "../models/employeeModel.js";

export const createEmployee = async (req,res) => {

    const { ename,department,salary } = req.body;
    if(!ename || !department || !salary){
       return res.json({error:"Enter all fields"})
    }

  const response = await employeeModel.create({
        ename,department,salary
    })

    res.status(201).json({ message: "Employee created successfully", response })

}

export const getAllEmployee = async (req, res) => {
    const employees = await employeeModel.find({})
    res.json(employees)
}

export const updateEmployee = async (req,res) => {
    const id = req.params.id
    const response = await employeeModel.findByIdAndUpdate(id,req.body) 
    res.json({response: "Employee updated successfully" })
}

export const deleteEmployee = async (req,res) => {
     const id = req.params.id
     const response = await employeeModel.findByIdAndDelete(id)
     res.json({response: "Employee deleted successfully"})
}

export const getEmployeeById = async (req,res) => {
    const id = req.params.id
    const response = await employeeModel.findById(id)
    res.json(response)
}