import noteModel from "../models/noteModel.js";

export const createNote = async (req, res) => {

    const { title, description } = req.body;
    if (!title || !description) {
        return res.json({ error: "Enter all fields" })
    }

    const responce = await noteModel.create({
        title, description
    })

    res.status(201).json({ message: "Note created successfully", responce })
}

export const getAllNote = async (req, res) => {
    const notes = await noteModel.find({})
    res.json(notes)
}

export const updateNote = async (req,res) => {
    const id = req.params.id
    const responce = await noteModel.findByIdAndUpdate(id,req.body) 
    res.json(responce)
}

export const deleteNote = async (req,res) => {
     const id = req.params.id
     const responce = await noteModel.findByIdAndDelete(id)
     res.json(responce)
}

export const getsingleNote = async (req,res) => {
    const id = req.params.id
    const responce = await noteModel.findById(id)
    res.json(responce)
}