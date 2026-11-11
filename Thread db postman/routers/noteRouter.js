import express from "express"
import { createNote, deleteNote, getAllNote, updateNote , getsingleNote } from "../controllers/noteController.js"

const router = express.Router()

router.post('/', createNote)
router.get('/', getAllNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)
router.get('/:id', getsingleNote)

export default router

