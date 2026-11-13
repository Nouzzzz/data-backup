import express from 'express'
import { createEmployee, getAllEmployee, updateEmployee, deleteEmployee, getEmployeeById } from '../controllers/employeeController.js'
import protect from '../middleware/protectedMiddleware.js'

const router = express.Router()

router.post('/',protect, createEmployee)
router.get('/',getAllEmployee)
router.put('/:id',updateEmployee)
router.delete('/:id',deleteEmployee)
router.get('/:id',getEmployeeById)


export default router