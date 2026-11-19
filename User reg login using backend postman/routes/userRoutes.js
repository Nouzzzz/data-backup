import express from 'express'
import { registerUser, loginUser, getDetails  } from "../controller/userController.js"
import authenticate  from '../middleware/protect.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', authenticate, getDetails)

export default router